import * as THREE from 'three';
import { PITCH } from '../config/constants';
import type { TeamSide, Vec3 } from '../types/game';

export interface PitchSceneObjects {
  group: THREE.Group;
  triggerNetRipple(side: TeamSide, impactLocal: Vec3, power: number): void;
  update(dt: number, elapsed: number): void;
}

interface NetPanelData {
  geometry: THREE.BufferGeometry;
  restPositions: Float32Array;
  pinWeights: Float32Array;
  outwardNormal: THREE.Vector3;
}

interface NetPulse {
  impact: THREE.Vector3;
  power: number;
  age: number;
  duration: number;
}

interface GoalNetRig {
  group: THREE.Group;
  side: TeamSide;
  panels: NetPanelData[];
  pulses: NetPulse[];
  wasActive: boolean;
}

interface CornerFlagRig {
  geometry: THREE.BufferGeometry;
  restPositions: Float32Array;
  phaseOffset: number;
}

const PITCH_SURFACE_MARGIN = 1.0;
const PITCH_MESH_LENGTH = PITCH.LENGTH + PITCH_SURFACE_MARGIN * 2;
const PITCH_MESH_WIDTH = PITCH.WIDTH + PITCH_SURFACE_MARGIN * 2;
const GRASS_STRIPE_COUNT = 14;

/** Fast deterministic PRNG for repeatable procedural grass micro-grain */
function createSeededRandom(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 0xffffffff;
  };
}

/**
 * Generates a crisp 2048x1024 pitch turf texture with 14 alternating mowed stripes,
 * subtle micro-grain blade texture, sun-warmed variation, realistic goalmouth/spot wear,
 * and mathematically accurate painted white FIFA-style markings.
 */
function createPitchTexture(): THREE.CanvasTexture {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Failed to create 2D context for pitch texture');
  }

  const sx = width / PITCH_MESH_LENGTH;
  const sy = height / PITCH_MESH_WIDTH;
  const toX = (worldX: number): number => (worldX + PITCH_MESH_LENGTH * 0.5) * sx;
  const toY = (worldZ: number): number => (worldZ + PITCH_MESH_WIDTH * 0.5) * sy;

  // 1. Base outer border grass matching the surrounding turf apron
  ctx.fillStyle = '#256c35';
  ctx.fillRect(0, 0, width, height);

  // 2. Alternating 14 rich emerald/forest mowed stripes running across the length of the pitch
  const stripeWorldWidth = PITCH.LENGTH / GRASS_STRIPE_COUNT;
  const playTop = toY(-PITCH.HALF_WIDTH);
  const playBottom = toY(PITCH.HALF_WIDTH);
  const playHeight = playBottom - playTop;

  // Slight bleed into the 1m margin along X/Z so outer lines rest on vibrant turf
  const turfPad = 0.55;
  const turfTop = toY(-PITCH.HALF_WIDTH - turfPad);
  const turfHeight = toY(PITCH.HALF_WIDTH + turfPad) - turfTop;

  for (let i = 0; i < GRASS_STRIPE_COUNT; i++) {
    const x0World = -PITCH.HALF_LENGTH + i * stripeWorldWidth;
    const x1World = x0World + stripeWorldWidth;
    const drawX0 = toX(i === 0 ? x0World - turfPad : x0World);
    const drawX1 = toX(i === GRASS_STRIPE_COUNT - 1 ? x1World + turfPad : x1World);
    const isLight = i % 2 === 0;

    const grad = ctx.createLinearGradient(0, turfTop, 0, turfTop + turfHeight);
    if (isLight) {
      grad.addColorStop(0.0, '#369346');
      grad.addColorStop(0.5, '#3da14c');
      grad.addColorStop(1.0, '#348c43');
    } else {
      grad.addColorStop(0.0, '#2a7939');
      grad.addColorStop(0.5, '#2f843f');
      grad.addColorStop(1.0, '#287236');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(drawX0, turfTop, drawX1 - drawX0 + 0.6, turfHeight);
  }

  // Subtle soft cross-mow horizontal bands (very faint broadcast stadium detail)
  const crossBands = 8;
  const bandH = playHeight / crossBands;
  for (let j = 0; j < crossBands; j++) {
    ctx.fillStyle = j % 2 === 0 ? 'rgba(255, 255, 220, 0.022)' : 'rgba(10, 40, 18, 0.022)';
    ctx.fillRect(toX(-PITCH.HALF_LENGTH - turfPad), playTop + j * bandH, toX(PITCH.HALF_LENGTH + turfPad) - toX(-PITCH.HALF_LENGTH - turfPad), bandH);
  }

  // 3. Subtle warm late-afternoon sunlight variation across the pitch
  const sunGlow = ctx.createRadialGradient(
    toX(6),
    toY(-2),
    40,
    toX(0),
    toY(0),
    width * 0.56
  );
  sunGlow.addColorStop(0.0, 'rgba(255, 244, 196, 0.065)');
  sunGlow.addColorStop(0.55, 'rgba(255, 236, 180, 0.02)');
  sunGlow.addColorStop(1.0, 'rgba(12, 42, 22, 0.08)');
  ctx.fillStyle = sunGlow;
  ctx.fillRect(0, 0, width, height);

  // 4. Micro-grain blade texture & fine mowing streaks
  const rand = createSeededRandom(20261119);
  const grainCanvas = document.createElement('canvas');
  grainCanvas.width = 256;
  grainCanvas.height = 256;
  const gCtx = grainCanvas.getContext('2d');
  if (gCtx) {
    const imgData = gCtx.createImageData(256, 256);
    const data = imgData.data;
    for (let y = 0; y < 256; y++) {
      for (let x = 0; x < 256; x++) {
        const idx = (y * 256 + x) * 4;
        const n = (rand() - 0.5) * 2;
        const blade = Math.sin(x * 0.8 + rand() * 1.4) * 0.35 + n * 0.65;
        if (blade >= 0) {
          data[idx] = 215;
          data[idx + 1] = 245;
          data[idx + 2] = 175;
          data[idx + 3] = Math.min(24, Math.floor(blade * 22));
        } else {
          data[idx] = 14;
          data[idx + 1] = 44;
          data[idx + 2] = 18;
          data[idx + 3] = Math.min(26, Math.floor(-blade * 24));
        }
      }
    }
    gCtx.putImageData(imgData, 0, 0);
    const pattern = ctx.createPattern(grainCanvas, 'repeat');
    if (pattern) {
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, width, height);
    }
  }

  // Fine mowing track lines along Z
  ctx.strokeStyle = 'rgba(255, 255, 235, 0.024)';
  ctx.lineWidth = 1;
  for (let x = 8; x < width; x += 12) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  // 5. Realistic subtle turf wear near goalmouths, penalty spots, and center spot
  const drawTurfWear = (worldX: number, worldZ: number, rxWorld: number, rzWorld: number, alpha: number): void => {
    const cx = toX(worldX);
    const cy = toY(worldZ);
    const rx = rxWorld * sx;
    const ry = rzWorld * sy;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(1, ry / rx);
    const wearGrad = ctx.createRadialGradient(0, 0, rx * 0.08, 0, 0, rx);
    wearGrad.addColorStop(0.0, `rgba(138, 128, 86, ${alpha})`);
    wearGrad.addColorStop(0.55, `rgba(110, 124, 72, ${alpha * 0.55})`);
    wearGrad.addColorStop(1.0, 'rgba(90, 118, 65, 0)');
    ctx.fillStyle = wearGrad;
    ctx.beginPath();
    ctx.arc(0, 0, rx, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  // Goalmouth keeper wear patches
  drawTurfWear(-PITCH.HALF_LENGTH + 1.05, 0, 1.55, 2.5, 0.28);
  drawTurfWear(PITCH.HALF_LENGTH - 1.05, 0, 1.55, 2.5, 0.28);
  // Subtle penalty spot & center spot scuffing
  drawTurfWear(-PITCH.HALF_LENGTH + PITCH.PENALTY_SPOT_DIST, 0, 0.85, 0.85, 0.16);
  drawTurfWear(PITCH.HALF_LENGTH - PITCH.PENALTY_SPOT_DIST, 0, 0.85, 0.85, 0.16);
  drawTurfWear(0, 0, 1.0, 1.0, 0.11);

  // 6. Crisp painted white pitch markings (mathematically exact world coordinates)
  const lineWidthPx = 0.125 * ((sx + sy) * 0.5);

  const strokeLines = (strokeStyle: string, widthPx: number): void => {
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = widthPx;
    ctx.lineCap = 'square';
    ctx.lineJoin = 'miter';

    const leftX = toX(-PITCH.HALF_LENGTH);
    const rightX = toX(PITCH.HALF_LENGTH);
    const topY = toY(-PITCH.HALF_WIDTH);
    const bottomY = toY(PITCH.HALF_WIDTH);
    const midX = toX(0);
    const midY = toY(0);

    // Outer touchlines and goal lines
    ctx.strokeRect(leftX, topY, rightX - leftX, bottomY - topY);

    // Halfway line
    ctx.beginPath();
    ctx.moveTo(midX, topY);
    ctx.lineTo(midX, bottomY);
    ctx.stroke();

    // Center circle (true world-space circle via ellipse scaling)
    ctx.beginPath();
    ctx.ellipse(
      midX,
      midY,
      PITCH.CENTER_CIRCLE_RADIUS * sx,
      PITCH.CENTER_CIRCLE_RADIUS * sy,
      0,
      0,
      Math.PI * 2
    );
    ctx.stroke();

    // Penalty areas (left & right)
    const penHalfW = PITCH.PENALTY_AREA_WIDTH * 0.5;
    const penTop = toY(-penHalfW);
    const penH = toY(penHalfW) - penTop;
    const penW = PITCH.PENALTY_AREA_LENGTH * sx;
    ctx.strokeRect(leftX, penTop, penW, penH);
    ctx.strokeRect(rightX - penW, penTop, penW, penH);

    // Goal areas (6-yard boxes, left & right)
    const goalAreaHalfW = PITCH.GOAL_AREA_WIDTH * 0.5;
    const gaTop = toY(-goalAreaHalfW);
    const gaH = toY(goalAreaHalfW) - gaTop;
    const gaW = PITCH.GOAL_AREA_LENGTH * sx;
    ctx.strokeRect(leftX, gaTop, gaW, gaH);
    ctx.strokeRect(rightX - gaW, gaTop, gaW, gaH);

    // Penalty arcs (exact circle of radius CENTER_CIRCLE_RADIUS centered on penalty spot, clipped outside box)
    const penArcRadius = PITCH.CENTER_CIRCLE_RADIUS;
    const distSpotToBox = PITCH.PENALTY_AREA_LENGTH - PITCH.PENALTY_SPOT_DIST;
    const arcHalfAngle = Math.acos(Math.min(1, Math.max(-1, distSpotToBox / penArcRadius)));

    // Left penalty arc (opens to +X)
    const leftSpotX = toX(-PITCH.HALF_LENGTH + PITCH.PENALTY_SPOT_DIST);
    ctx.beginPath();
    ctx.ellipse(
      leftSpotX,
      midY,
      penArcRadius * sx,
      penArcRadius * sy,
      0,
      -arcHalfAngle,
      arcHalfAngle
    );
    ctx.stroke();

    // Right penalty arc (opens to -X)
    const rightSpotX = toX(PITCH.HALF_LENGTH - PITCH.PENALTY_SPOT_DIST);
    ctx.beginPath();
    ctx.ellipse(
      rightSpotX,
      midY,
      penArcRadius * sx,
      penArcRadius * sy,
      0,
      Math.PI - arcHalfAngle,
      Math.PI + arcHalfAngle
    );
    ctx.stroke();

    // Corner arcs (radius = CORNER_ARC_RADIUS = 1.0m)
    const cRx = PITCH.CORNER_ARC_RADIUS * sx;
    const cRy = PITCH.CORNER_ARC_RADIUS * sy;

    // Top-left (-HALF_LENGTH, -HALF_WIDTH) -> angles 0 to PI/2
    ctx.beginPath();
    ctx.ellipse(leftX, topY, cRx, cRy, 0, 0, Math.PI * 0.5);
    ctx.stroke();

    // Top-right (+HALF_LENGTH, -HALF_WIDTH) -> angles PI/2 to PI
    ctx.beginPath();
    ctx.ellipse(rightX, topY, cRx, cRy, 0, Math.PI * 0.5, Math.PI);
    ctx.stroke();

    // Bottom-right (+HALF_LENGTH, +HALF_WIDTH) -> angles PI to 3PI/2
    ctx.beginPath();
    ctx.ellipse(rightX, bottomY, cRx, cRy, 0, Math.PI, Math.PI * 1.5);
    ctx.stroke();

    // Bottom-left (-HALF_LENGTH, +HALF_WIDTH) -> angles 3PI/2 to 2PI
    ctx.beginPath();
    ctx.ellipse(leftX, bottomY, cRx, cRy, 0, Math.PI * 1.5, Math.PI * 2);
    ctx.stroke();
  };

  // Subtle paint bleed halo + crisp painted top coat
  strokeLines('rgba(244, 250, 244, 0.24)', lineWidthPx * 1.65);
  strokeLines('rgba(248, 252, 248, 0.94)', lineWidthPx);

  // Filled spots: center spot and both penalty spots
  const drawSpot = (worldX: number, worldZ: number, radiusM: number): void => {
    ctx.fillStyle = 'rgba(248, 252, 248, 0.95)';
    ctx.beginPath();
    ctx.ellipse(toX(worldX), toY(worldZ), radiusM * sx, radiusM * sy, 0, 0, Math.PI * 2);
    ctx.fill();
  };

  drawSpot(0, 0, 0.19);
  drawSpot(-PITCH.HALF_LENGTH + PITCH.PENALTY_SPOT_DIST, 0, 0.17);
  drawSpot(PITCH.HALF_LENGTH - PITCH.PENALTY_SPOT_DIST, 0, 0.17);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
}

/** Procedural tiled texture for the generous dark-green surrounding turf apron */
function createApronTexture(): THREE.CanvasTexture {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Failed to create 2D context for apron texture');
  }

  ctx.fillStyle = '#226131';
  ctx.fillRect(0, 0, size, size);

  // Soft wide mowed bands
  for (let i = 0; i < 4; i++) {
    ctx.fillStyle = i % 2 === 0 ? 'rgba(255, 255, 230, 0.025)' : 'rgba(10, 32, 16, 0.03)';
    ctx.fillRect(i * (size / 4), 0, size / 4, size);
  }

  const rand = createSeededRandom(9941);
  const img = ctx.getImageData(0, 0, size, size);
  const data = img.data;
  for (let i = 0; i < data.length; i += 4) {
    const delta = Math.floor((rand() - 0.5) * 14);
    data[i] = Math.max(0, Math.min(255, data[i] + delta));
    data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + delta));
    data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + delta));
  }
  ctx.putImageData(img, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(8, 6);
  texture.anisotropy = 8;
  return texture;
}

/** Procedural diamond/square translucent white net mesh texture */
function createGoalNetTexture(): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Failed to create 2D context for goal net texture');
  }

  ctx.clearRect(0, 0, size, size);

  const cells = 4;
  const step = size / cells;

  // Draw crisp woven diamond twine pattern
  ctx.strokeStyle = 'rgba(248, 251, 255, 0.9)';
  ctx.lineWidth = 4.2;
  ctx.lineCap = 'round';

  for (let i = -cells; i <= cells * 2; i++) {
    const offset = i * step;
    // Diagonal /
    ctx.beginPath();
    ctx.moveTo(offset, 0);
    ctx.lineTo(offset + size, size);
    ctx.stroke();

    // Diagonal \
    ctx.beginPath();
    ctx.moveTo(offset, size);
    ctx.lineTo(offset + size, 0);
    ctx.stroke();
  }

  // Subtle twine knot highlights at grid intersections
  ctx.fillStyle = 'rgba(255, 255, 255, 0.96)';
  for (let y = 0; y <= cells * 2; y++) {
    for (let x = 0; x <= cells * 2; x++) {
      if ((x + y) % 2 === 0) {
        ctx.beginPath();
        ctx.arc(x * (step * 0.5), y * (step * 0.5), 3.0, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = 8;
  return texture;
}

/** Creates a sleek minimalist architectural perimeter board texture */
function createPerimeterBoardTexture(): THREE.CanvasTexture {
  const width = 512;
  const height = 128;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Failed to create 2D context for perimeter board');
  }

  // Deep metallic slate-charcoal base
  const bg = ctx.createLinearGradient(0, 0, 0, height);
  bg.addColorStop(0.0, '#24303e');
  bg.addColorStop(0.45, '#19222d');
  bg.addColorStop(1.0, '#121821');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  // Subtle brushed horizontal metallic highlight
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.fillRect(0, 4, width, 6);

  // Crisp emerald accent stripe
  const stripeGrad = ctx.createLinearGradient(0, 0, width, 0);
  stripeGrad.addColorStop(0.0, '#0f9b6c');
  stripeGrad.addColorStop(0.5, '#17c98b');
  stripeGrad.addColorStop(1.0, '#0f9b6c');
  ctx.fillStyle = stripeGrad;
  ctx.fillRect(0, height * 0.44, width, height * 0.14);

  // Fine subtle champagne-gold pinstripe just above emerald
  ctx.fillStyle = 'rgba(226, 193, 98, 0.72)';
  ctx.fillRect(0, height * 0.37, width, 3);

  // Clean vertical panel seam lines
  ctx.strokeStyle = 'rgba(8, 12, 18, 0.55)';
  ctx.lineWidth = 3;
  for (let x = 0; x < width; x += 128) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.anisotropy = 8;
  return texture;
}

/** Builds a subdivided deformable net panel geometry with vertex pin weights */
function buildNetPanel(
  uSegs: number,
  vSegs: number,
  evalPoint: (u: number, v: number) => THREE.Vector3,
  evalPinWeight: (u: number, v: number) => number,
  outwardNormal: THREE.Vector3,
  uvRepeatU: number,
  uvRepeatV: number
): NetPanelData {
  const vertCount = (uSegs + 1) * (vSegs + 1);
  const positions = new Float32Array(vertCount * 3);
  const restPositions = new Float32Array(vertCount * 3);
  const pinWeights = new Float32Array(vertCount);
  const uvs = new Float32Array(vertCount * 2);
  const indices: number[] = [];

  let ptr = 0;
  let uvPtr = 0;
  let weightPtr = 0;

  for (let iv = 0; iv <= vSegs; iv++) {
    const v = iv / vSegs;
    for (let iu = 0; iu <= uSegs; iu++) {
      const u = iu / uSegs;
      const p = evalPoint(u, v);
      positions[ptr] = p.x;
      positions[ptr + 1] = p.y;
      positions[ptr + 2] = p.z;
      restPositions[ptr] = p.x;
      restPositions[ptr + 1] = p.y;
      restPositions[ptr + 2] = p.z;
      ptr += 3;

      pinWeights[weightPtr++] = evalPinWeight(u, v);

      uvs[uvPtr++] = u * uvRepeatU;
      uvs[uvPtr++] = v * uvRepeatV;
    }
  }

  const rowStride = uSegs + 1;
  for (let iv = 0; iv < vSegs; iv++) {
    for (let iu = 0; iu < uSegs; iu++) {
      const a = iv * rowStride + iu;
      const b = a + 1;
      const c = a + rowStride;
      const d = c + 1;
      indices.push(a, c, b, b, c, d);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  return {
    geometry,
    restPositions,
    pinWeights,
    outwardNormal: outwardNormal.clone().normalize(),
  };
}

/** Creates a complete 3D modeled goal with tubular frame, curved rear stanchions & deformable net */
function buildGoalRig(
  side: TeamSide,
  postMaterial: THREE.MeshStandardMaterial,
  stanchionMaterial: THREE.MeshStandardMaterial,
  netMaterial: THREE.MeshStandardMaterial
): GoalNetRig {
  const group = new THREE.Group();
  const isAway = side === 'away';
  group.position.set(isAway ? PITCH.HALF_LENGTH : -PITCH.HALF_LENGTH, 0, 0);
  // Local +X always points INTO the goal depth
  group.rotation.y = isAway ? 0 : Math.PI;

  const halfW = PITCH.GOAL_HALF_WIDTH;
  const height = PITCH.GOAL_HEIGHT;
  const depth = PITCH.GOAL_DEPTH;
  const topDepth = depth * 0.72;
  const r = PITCH.POST_RADIUS;

  // 1. Vertical goalposts
  const postGeo = new THREE.CylinderGeometry(r, r, height, 18);
  const leftPost = new THREE.Mesh(postGeo, postMaterial);
  leftPost.position.set(0, height * 0.5, -halfW);
  leftPost.castShadow = true;
  leftPost.receiveShadow = true;
  group.add(leftPost);

  const rightPost = new THREE.Mesh(postGeo, postMaterial);
  rightPost.position.set(0, height * 0.5, halfW);
  rightPost.castShadow = true;
  rightPost.receiveShadow = true;
  group.add(rightPost);

  // 2. Crossbar
  const crossbarGeo = new THREE.CylinderGeometry(r, r, PITCH.GOAL_WIDTH, 18);
  crossbarGeo.rotateX(Math.PI * 0.5);
  const crossbar = new THREE.Mesh(crossbarGeo, postMaterial);
  crossbar.position.set(0, height, 0);
  crossbar.castShadow = true;
  crossbar.receiveShadow = true;
  group.add(crossbar);

  // Smooth corner elbow spheres
  const cornerGeo = new THREE.SphereGeometry(r * 1.02, 16, 14);
  for (const zSign of [-1, 1]) {
    const corner = new THREE.Mesh(cornerGeo, postMaterial);
    corner.position.set(0, height, zSign * halfW);
    corner.castShadow = true;
    group.add(corner);
  }

  // 3. Curved rear European-style top/bottom stanchions
  const stanchionRadius = r * 0.52;
  for (const zSign of [-1, 1]) {
    const z = zSign * halfW;
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, height, z),
      new THREE.Vector3(topDepth * 0.72, height, z),
      new THREE.Vector3(topDepth + 0.16, height * 0.88, z),
      new THREE.Vector3(depth * 0.92, height * 0.42, z),
      new THREE.Vector3(depth, stanchionRadius, z),
    ]);
    const tubeGeo = new THREE.TubeGeometry(curve, 24, stanchionRadius, 10, false);
    const tubeMesh = new THREE.Mesh(tubeGeo, stanchionMaterial);
    tubeMesh.castShadow = true;
    group.add(tubeMesh);
  }

  // 4. Ground base frame (left, right, and rear anchor bar)
  const baseRadius = r * 0.5;
  const sideBaseGeo = new THREE.CylinderGeometry(baseRadius, baseRadius, depth, 10);
  sideBaseGeo.rotateZ(Math.PI * 0.5);
  for (const zSign of [-1, 1]) {
    const sideBar = new THREE.Mesh(sideBaseGeo, stanchionMaterial);
    sideBar.position.set(depth * 0.5, baseRadius, zSign * halfW);
    sideBar.receiveShadow = true;
    group.add(sideBar);
  }

  const backBaseGeo = new THREE.CylinderGeometry(baseRadius, baseRadius, PITCH.GOAL_WIDTH, 10);
  backBaseGeo.rotateX(Math.PI * 0.5);
  const backBar = new THREE.Mesh(backBaseGeo, stanchionMaterial);
  backBar.position.set(depth, baseRadius, 0);
  backBar.receiveShadow = true;
  group.add(backBar);

  // Subtle rear upper horizontal tie bar keeping net roof clean
  const topRearBarGeo = new THREE.CylinderGeometry(baseRadius * 0.72, baseRadius * 0.72, PITCH.GOAL_WIDTH, 10);
  topRearBarGeo.rotateX(Math.PI * 0.5);
  const topRearBar = new THREE.Mesh(topRearBarGeo, stanchionMaterial);
  topRearBar.position.set(topDepth, height, 0);
  group.add(topRearBar);

  // 5. Subdivided deformable 3D net panels
  // Depth profile slopes gently from topDepth at y=height to depth at y=0
  const depthAtY = (v: number): number => THREE.MathUtils.lerp(depth, topDepth, v);
  const netDensity = 2.6; // texture tiles per meter

  // Back net panel (u: z from -halfW to +halfW, v: y from 0 to height)
  const backPanel = buildNetPanel(
    24,
    12,
    (u, v) => new THREE.Vector3(depthAtY(v), v * height, THREE.MathUtils.lerp(-halfW, halfW, u)),
    (u, v) => {
      // Pinned along bottom ground bar (v=0), softened at top tie bar (v=1) & side stanchions
      const edgeZ = Math.sin(u * Math.PI);
      const bottomFree = THREE.MathUtils.smoothstep(v, 0.0, 0.16);
      const topFree = 0.45 + 0.55 * (1.0 - THREE.MathUtils.smoothstep(v, 0.85, 1.0));
      return Math.min(1, bottomFree * topFree * (0.35 + 0.65 * edgeZ));
    },
    new THREE.Vector3(1, 0.12, 0),
    PITCH.GOAL_WIDTH * netDensity * 0.45,
    height * netDensity * 0.45
  );

  // Top roof net panel (u: x from 0 to topDepth, v: z from -halfW to +halfW)
  const roofPanel = buildNetPanel(
    10,
    22,
    (u, v) => new THREE.Vector3(u * topDepth, height, THREE.MathUtils.lerp(-halfW, halfW, v)),
    (u, v) => {
      const frontFree = THREE.MathUtils.smoothstep(u, 0.0, 0.25);
      const sideFree = Math.sin(v * Math.PI);
      return frontFree * (0.3 + 0.7 * sideFree);
    },
    new THREE.Vector3(0.18, 1, 0),
    topDepth * netDensity * 0.45,
    PITCH.GOAL_WIDTH * netDensity * 0.45
  );

  // Left side net panel (z = -halfW)
  const leftSidePanel = buildNetPanel(
    10,
    12,
    (u, v) => new THREE.Vector3(u * depthAtY(v), v * height, -halfW),
    (u, v) => {
      const frontFree = THREE.MathUtils.smoothstep(u, 0.0, 0.22);
      const bottomFree = THREE.MathUtils.smoothstep(v, 0.0, 0.16);
      const backFree = 1.0 - 0.55 * THREE.MathUtils.smoothstep(u, 0.84, 1.0);
      return frontFree * bottomFree * backFree;
    },
    new THREE.Vector3(0.25, 0.08, -1),
    depth * netDensity * 0.45,
    height * netDensity * 0.45
  );

  // Right side net panel (z = +halfW)
  const rightSidePanel = buildNetPanel(
    10,
    12,
    (u, v) => new THREE.Vector3(u * depthAtY(v), v * height, halfW),
    (u, v) => {
      const frontFree = THREE.MathUtils.smoothstep(u, 0.0, 0.22);
      const bottomFree = THREE.MathUtils.smoothstep(v, 0.0, 0.16);
      const backFree = 1.0 - 0.55 * THREE.MathUtils.smoothstep(u, 0.84, 1.0);
      return frontFree * bottomFree * backFree;
    },
    new THREE.Vector3(0.25, 0.08, 1),
    depth * netDensity * 0.45,
    height * netDensity * 0.45
  );

  const panels = [backPanel, roofPanel, leftSidePanel, rightSidePanel];
  for (const panel of panels) {
    const netMesh = new THREE.Mesh(panel.geometry, netMaterial);
    netMesh.renderOrder = 3;
    group.add(netMesh);
  }

  return {
    group,
    side,
    panels,
    pulses: [],
    wasActive: false,
  };
}

/** Builds golden late-afternoon sky dome with smooth vertical gradient & subtle solar glow */
function buildSkyDome(sunDirection: THREE.Vector3): THREE.Mesh {
  const skyGeo = new THREE.SphereGeometry(230, 36, 20);
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      uZenithColor: { value: new THREE.Color('#2768b3') },
      uMidSkyColor: { value: new THREE.Color('#6db4e8') },
      uHorizonColor: { value: new THREE.Color('#dceaf5') },
      uWarmHorizon: { value: new THREE.Color('#f7e3c1') },
      uSunDir: { value: sunDirection.clone().normalize() },
    },
    vertexShader: `
      varying vec3 vWorldDir;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldDir = normalize(wp.xyz);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: `
      uniform vec3 uZenithColor;
      uniform vec3 uMidSkyColor;
      uniform vec3 uHorizonColor;
      uniform vec3 uWarmHorizon;
      uniform vec3 uSunDir;
      varying vec3 vWorldDir;

      void main() {
        vec3 dir = normalize(vWorldDir);
        float h = clamp(dir.y, 0.0, 1.0);

        // Smooth vertical cerulean-to-warm-crisp-horizon sky gradient
        vec3 sky = mix(uHorizonColor, uMidSkyColor, smoothstep(0.0, 0.34, h));
        sky = mix(sky, uZenithColor, smoothstep(0.28, 0.92, h));

        // Subtle golden late-afternoon warmth toward the sun azimuth near horizon
        float sunAmt = max(dot(dir, uSunDir), 0.0);
        float horizonBand = pow(1.0 - h, 3.0);
        sky = mix(sky, uWarmHorizon, horizonBand * (0.28 + 0.55 * pow(sunAmt, 2.0)));

        // Soft solar halo + crisp sun core
        sky += vec3(1.0, 0.92, 0.74) * pow(sunAmt, 14.0) * 0.24;
        sky += vec3(1.0, 0.97, 0.88) * smoothstep(0.9972, 0.9994, sunAmt) * 0.75;

        gl_FragColor = vec4(sky, 1.0);
      }
    `,
  });

  const skyMesh = new THREE.Mesh(skyGeo, skyMat);
  skyMesh.renderOrder = -10;
  return skyMesh;
}

/** Builds sleek low modern pitch-side perimeter boards (no ads, no bulky stands) */
function buildPerimeterBoards(): THREE.Group {
  const boardsGroup = new THREE.Group();
  const boardTex = createPerimeterBoardTexture();

  const boardHeight = 0.88;
  const boardThickness = 0.14;
  const offsetX = PITCH.HALF_LENGTH + 5.6; // 37.6m (well clear of goal depth 34.1m)
  const offsetZ = PITCH.HALF_WIDTH + 4.0;  // 24.0m

  const darkTrimMat = new THREE.MeshStandardMaterial({
    color: '#1b2430',
    roughness: 0.45,
    metalness: 0.4,
  });

  const createBoardRun = (length: number, x: number, z: number, rotY: number): void => {
    const faceTex = boardTex.clone();
    faceTex.needsUpdate = true;
    faceTex.repeat.set(Math.max(1, Math.round(length / 5.5)), 1);

    const faceMat = new THREE.MeshStandardMaterial({
      map: faceTex,
      roughness: 0.42,
      metalness: 0.28,
    });

    const boardGeo = new THREE.BoxGeometry(length, boardHeight, boardThickness);
    const materials = [
      darkTrimMat, // +X
      darkTrimMat, // -X
      darkTrimMat, // +Y top rail
      darkTrimMat, // -Y
      faceMat,     // +Z inner face
      darkTrimMat, // -Z rear
    ];

    const mesh = new THREE.Mesh(boardGeo, materials);
    mesh.position.set(x, boardHeight * 0.5 - 0.01, z);
    mesh.rotation.y = rotY;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    boardsGroup.add(mesh);

    // Subtle metallic top cap bar
    const capGeo = new THREE.BoxGeometry(length + 0.04, 0.045, boardThickness + 0.04);
    const cap = new THREE.Mesh(capGeo, darkTrimMat);
    cap.position.set(x, boardHeight, z);
    cap.rotation.y = rotY;
    boardsGroup.add(cap);
  };

  const fullRunX = offsetX * 2 - 2.4;
  const fullRunZ = offsetZ * 2 - 2.4;

  // Far touchline (-Z) facing +Z
  createBoardRun(fullRunX, 0, -offsetZ, 0);
  // Near touchline (+Z) facing -Z
  createBoardRun(fullRunX, 0, offsetZ, Math.PI);
  // Home endline (-X) facing +X
  createBoardRun(fullRunZ, -offsetX, 0, Math.PI * 0.5);
  // Away endline (+X) facing -X
  createBoardRun(fullRunZ, offsetX, 0, -Math.PI * 0.5);

  // Clean chamfered corner joiners
  const cornerLen = 2.1;
  const corners: Array<{ x: number; z: number; rotY: number }> = [
    { x: -offsetX + 0.6, z: -offsetZ + 0.6, rotY: Math.PI * 0.25 },
    { x: offsetX - 0.6, z: -offsetZ + 0.6, rotY: -Math.PI * 0.25 },
    { x: offsetX - 0.6, z: offsetZ - 0.6, rotY: -Math.PI * 0.75 },
    { x: -offsetX + 0.6, z: offsetZ - 0.6, rotY: Math.PI * 0.75 },
  ];
  for (const c of corners) {
    createBoardRun(cornerLen, c.x, c.z, c.rotY);
  }

  return boardsGroup;
}

/** Builds 4 tasteful corner flags with gently fluttering cloth pennants */
function buildCornerFlags(): { group: THREE.Group; flags: CornerFlagRig[] } {
  const group = new THREE.Group();
  const flags: CornerFlagRig[] = [];

  const poleMat = new THREE.MeshStandardMaterial({
    color: '#f8fafc',
    roughness: 0.3,
    metalness: 0.15,
  });
  const baseMat = new THREE.MeshStandardMaterial({
    color: '#1e293b',
    roughness: 0.6,
    metalness: 0.3,
  });
  const pennantMat = new THREE.MeshStandardMaterial({
    color: '#f5b82e',
    emissive: '#4d3206',
    emissiveIntensity: 0.18,
    roughness: 0.55,
    metalness: 0.05,
    side: THREE.DoubleSide,
  });

  const poleHeight = 1.52;
  const poleGeo = new THREE.CylinderGeometry(0.018, 0.022, poleHeight, 10);
  const collarGeo = new THREE.CylinderGeometry(0.042, 0.05, 0.06, 10);
  const finialGeo = new THREE.SphereGeometry(0.028, 10, 8);

  const corners: Array<[number, number, number]> = [
    [-PITCH.HALF_LENGTH, -PITCH.HALF_WIDTH, 0.0],
    [PITCH.HALF_LENGTH, -PITCH.HALF_WIDTH, 1.4],
    [PITCH.HALF_LENGTH, PITCH.HALF_WIDTH, 2.7],
    [-PITCH.HALF_LENGTH, PITCH.HALF_WIDTH, 4.1],
  ];

  for (const [cx, cz, phaseOffset] of corners) {
    const flagGroup = new THREE.Group();
    flagGroup.position.set(cx, 0, cz);

    const pole = new THREE.Mesh(poleGeo, poleMat);
    pole.position.y = poleHeight * 0.5;
    pole.castShadow = true;
    flagGroup.add(pole);

    const collar = new THREE.Mesh(collarGeo, baseMat);
    collar.position.y = 0.03;
    flagGroup.add(collar);

    const finial = new THREE.Mesh(finialGeo, poleMat);
    finial.position.y = poleHeight + 0.01;
    flagGroup.add(finial);

    // Subdivided pennant cloth attached along X=0, extending toward +X
    const clothW = 0.48;
    const clothH = 0.32;
    const clothGeo = new THREE.PlaneGeometry(clothW, clothH, 8, 3);
    clothGeo.translate(clothW * 0.5 + 0.015, poleHeight - clothH * 0.5 - 0.04, 0);

    // Taper outer edge slightly into a classic athletic swallowtail/pennant silhouette
    const pos = clothGeo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const px = pos.getX(i);
      const py = pos.getY(i);
      const u = THREE.MathUtils.clamp((px - 0.015) / clothW, 0, 1);
      const centerY = poleHeight - clothH * 0.5 - 0.04;
      const taperedY = centerY + (py - centerY) * (1.0 - 0.35 * u);
      pos.setY(i, taperedY);
    }
    clothGeo.computeVertexNormals();

    const restPositions = new Float32Array(pos.array as ArrayLike<number>);
    const clothMesh = new THREE.Mesh(clothGeo, pennantMat);
    clothMesh.castShadow = true;
    // Slight windward yaw so all 4 flags stream coherently in the afternoon breeze
    clothMesh.rotation.y = 0.35;
    flagGroup.add(clothMesh);

    group.add(flagGroup);
    flags.push({
      geometry: clothGeo,
      restPositions,
      phaseOffset,
    });
  }

  return { group, flags };
}

/** Builds 4 slender modern architectural floodlight towers well outside the pitch apron */
function buildFloodlightTowers(): THREE.Group {
  const towersGroup = new THREE.Group();

  const mastMat = new THREE.MeshStandardMaterial({
    color: '#2c3846',
    roughness: 0.42,
    metalness: 0.65,
  });
  const headMat = new THREE.MeshStandardMaterial({
    color: '#1e2733',
    roughness: 0.45,
    metalness: 0.55,
  });
  const lampEmissiveMat = new THREE.MeshStandardMaterial({
    color: '#fffbf0',
    emissive: '#fff2cc',
    emissiveIntensity: 2.2,
    roughness: 0.2,
    metalness: 0.1,
  });

  // Soft radial light glow sprite texture for distant lamp bloom
  const glowCanvas = document.createElement('canvas');
  glowCanvas.width = 64;
  glowCanvas.height = 64;
  const gCtx = glowCanvas.getContext('2d');
  if (gCtx) {
    const grad = gCtx.createRadialGradient(32, 32, 2, 32, 32, 32);
    grad.addColorStop(0.0, 'rgba(255, 248, 224, 0.55)');
    grad.addColorStop(0.35, 'rgba(255, 240, 200, 0.18)');
    grad.addColorStop(1.0, 'rgba(255, 240, 200, 0.0)');
    gCtx.fillStyle = grad;
    gCtx.fillRect(0, 0, 64, 64);
  }
  const glowTex = new THREE.CanvasTexture(glowCanvas);
  const glowMat = new THREE.SpriteMaterial({
    map: glowTex,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const positions: Array<[number, number]> = [
    [-46, -32],
    [46, -32],
    [46, 32],
    [-46, 32],
  ];

  const mastHeight = 25.5;
  const mastGeo = new THREE.CylinderGeometry(0.18, 0.42, mastHeight, 12);
  const baseGeo = new THREE.CylinderGeometry(0.62, 0.78, 0.9, 12);
  const headFrameGeo = new THREE.BoxGeometry(3.8, 1.55, 0.35);
  const lampPanelGeo = new THREE.PlaneGeometry(3.45, 1.2);

  for (const [tx, tz] of positions) {
    const tower = new THREE.Group();
    tower.position.set(tx, 0, tz);

    // Orient tower head directly toward pitch center
    const yawToCenter = Math.atan2(-tx, -tz);
    tower.rotation.y = yawToCenter;

    const base = new THREE.Mesh(baseGeo, headMat);
    base.position.y = 0.45;
    tower.add(base);

    const mast = new THREE.Mesh(mastGeo, mastMat);
    mast.position.y = mastHeight * 0.5;
    tower.add(mast);

    // Angled cantilever arm & LED bank head
    const headPivot = new THREE.Group();
    headPivot.position.set(0, mastHeight - 0.2, 0.35);
    headPivot.rotation.x = 0.48; // Tilted downward toward the pitch

    const headFrame = new THREE.Mesh(headFrameGeo, headMat);
    headPivot.add(headFrame);

    const lampPanel = new THREE.Mesh(lampPanelGeo, lampEmissiveMat);
    lampPanel.position.z = 0.19;
    headPivot.add(lampPanel);

    const glowSprite = new THREE.Sprite(glowMat);
    glowSprite.position.set(0, 0, 0.4);
    glowSprite.scale.set(6.5, 4.2, 1);
    headPivot.add(glowSprite);

    tower.add(headPivot);
    towersGroup.add(tower);
  }

  return towersGroup;
}

/**
 * Builds the complete PITCH APEX stadium pitch environment, goals with deformable nets,
 * surrounding turf apron, perimeter boards, animated corner flags, floodlight towers,
 * sky dome, atmospheric fog, and late-afternoon broadcast lighting.
 */
export function buildPitchEnvironment(scene: THREE.Scene): PitchSceneObjects {
  const group = new THREE.Group();
  group.name = 'PitchEnvironment';

  // 1. Atmospheric distance fog matching the crisp warm-blue horizon
  scene.fog = new THREE.FogExp2('#d8e8f3', 0.0038);

  // 2. Late-afternoon broadcast lighting rig
  const sunPosition = new THREE.Vector3(36, 48, 28);

  const skyDome = buildSkyDome(sunPosition);
  group.add(skyDome);

  const hemiLight = new THREE.HemisphereLight('#bce2ff', '#386c3b', 0.88);
  hemiLight.position.set(0, 50, 0);
  group.add(hemiLight);

  const sunLight = new THREE.DirectionalLight('#fff2d9', 2.2);
  sunLight.position.copy(sunPosition);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(2048, 2048);
  sunLight.shadow.camera.near = 10;
  sunLight.shadow.camera.far = 140;
  // Tightly fitted to the 64x40 pitch + goals for ultra-crisp shadows
  sunLight.shadow.camera.left = -40;
  sunLight.shadow.camera.right = 40;
  sunLight.shadow.camera.top = 28;
  sunLight.shadow.camera.bottom = -28;
  sunLight.shadow.bias = -0.00035;
  sunLight.shadow.normalBias = 0.032;
  sunLight.shadow.radius = 2.4;
  group.add(sunLight);
  group.add(sunLight.target);

  // Subtle cool rim fill light so dark kits and player silhouettes pop cleanly
  const rimLight = new THREE.DirectionalLight('#a2ceff', 0.56);
  rimLight.position.set(-34, 24, -30);
  group.add(rimLight);

  // 3. Visual showpiece pitch surface (2048x1024 procedural CanvasTexture)
  const pitchTexture = createPitchTexture();
  const pitchGeo = new THREE.PlaneGeometry(PITCH_MESH_LENGTH, PITCH_MESH_WIDTH);
  pitchGeo.rotateX(-Math.PI * 0.5);
  const pitchMat = new THREE.MeshStandardMaterial({
    map: pitchTexture,
    roughness: 0.88,
    metalness: 0.02,
  });
  const pitchMesh = new THREE.Mesh(pitchGeo, pitchMat);
  pitchMesh.receiveShadow = true;
  pitchMesh.position.y = 0;
  group.add(pitchMesh);

  // 4. Generous surrounding dark-green turf apron (110m x 80m) + horizon landscape skirt
  const apronTex = createApronTexture();
  const apronGeo = new THREE.PlaneGeometry(114, 84);
  apronGeo.rotateX(-Math.PI * 0.5);
  const apronMat = new THREE.MeshStandardMaterial({
    map: apronTex,
    roughness: 0.92,
    metalness: 0.01,
  });
  const apronMesh = new THREE.Mesh(apronGeo, apronMat);
  apronMesh.position.y = -0.018;
  apronMesh.receiveShadow = true;
  group.add(apronMesh);

  const outerSkirtGeo = new THREE.PlaneGeometry(420, 420);
  outerSkirtGeo.rotateX(-Math.PI * 0.5);
  const outerSkirtMat = new THREE.MeshStandardMaterial({
    color: '#2c5838',
    roughness: 0.98,
    metalness: 0.0,
  });
  const outerSkirt = new THREE.Mesh(outerSkirtGeo, outerSkirtMat);
  outerSkirt.position.y = -0.06;
  group.add(outerSkirt);

  // 5. Sleek low modern perimeter boards, corner flags, and floodlight towers
  group.add(buildPerimeterBoards());

  const { group: cornerFlagGroup, flags: cornerFlags } = buildCornerFlags();
  group.add(cornerFlagGroup);

  group.add(buildFloodlightTowers());

  // 6. Modeled 3D Goals with deformable nets
  const postMaterial = new THREE.MeshStandardMaterial({
    color: '#f8fafc',
    roughness: 0.24,
    metalness: 0.34,
  });
  const stanchionMaterial = new THREE.MeshStandardMaterial({
    color: '#dbe2ea',
    roughness: 0.34,
    metalness: 0.45,
  });
  const netTexture = createGoalNetTexture();
  const netMaterial = new THREE.MeshStandardMaterial({
    map: netTexture,
    color: '#ffffff',
    transparent: true,
    opacity: 0.86,
    alphaTest: 0.08,
    side: THREE.DoubleSide,
    depthWrite: false,
    roughness: 0.72,
    metalness: 0.02,
  });

  const homeGoal = buildGoalRig('home', postMaterial, stanchionMaterial, netMaterial);
  const awayGoal = buildGoalRig('away', postMaterial, stanchionMaterial, netMaterial);
  group.add(homeGoal.group);
  group.add(awayGoal.group);

  const goalRigs: Record<TeamSide, GoalNetRig> = {
    home: homeGoal,
    away: awayGoal,
  };

  scene.add(group);

  // Scratch vectors to prevent per-frame allocations
  const tmpDiff = new THREE.Vector3();

  const triggerNetRipple = (side: TeamSide, impactLocal: Vec3, power: number): void => {
    const rig = goalRigs[side];
    if (!rig) return;

    // Gracefully accept either world-space coordinates (e.g., SimEvent.position around ±32)
    // or goal-local coordinates (depth in [0, GOAL_DEPTH], y in [0, GOAL_HEIGHT], z in [-HW, HW]).
    let lx: number;
    let ly: number;
    let lz: number;

    if (Math.abs(impactLocal.x) > PITCH.GOAL_DEPTH + 4.0) {
      if (side === 'away') {
        lx = impactLocal.x - PITCH.HALF_LENGTH;
        lz = impactLocal.z;
      } else {
        lx = -PITCH.HALF_LENGTH - impactLocal.x;
        // Home goal is rotated PI around Y, so world +Z corresponds to local -Z
        lz = -impactLocal.z;
      }
      ly = impactLocal.y;
    } else {
      lx = Math.abs(impactLocal.x);
      ly = impactLocal.y;
      lz = side === 'away' ? impactLocal.z : -impactLocal.z;
    }

    const clampedImpact = new THREE.Vector3(
      THREE.MathUtils.clamp(lx, 0.35, PITCH.GOAL_DEPTH),
      THREE.MathUtils.clamp(ly, 0.15, PITCH.GOAL_HEIGHT - 0.1),
      THREE.MathUtils.clamp(lz, -PITCH.GOAL_HALF_WIDTH + 0.15, PITCH.GOAL_HALF_WIDTH - 0.15)
    );

    const clampedPower = THREE.MathUtils.clamp(power, 0.25, 1.5);
    rig.pulses.push({
      impact: clampedImpact,
      power: clampedPower,
      age: 0,
      duration: 2.35,
    });

    // Keep pulse buffer bounded
    if (rig.pulses.length > 6) {
      rig.pulses.shift();
    }
  };

  const updateNetRig = (rig: GoalNetRig, dt: number, elapsed: number): void => {
    // Advance and expire active impact pulses
    for (let i = rig.pulses.length - 1; i >= 0; i--) {
      rig.pulses[i].age += dt;
      if (rig.pulses[i].age >= rig.pulses[i].duration) {
        rig.pulses.splice(i, 1);
      }
    }

    const hasPulses = rig.pulses.length > 0;

    for (const panel of rig.panels) {
      const posAttr = panel.geometry.attributes.position as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;
      const rest = panel.restPositions;
      const weights = panel.pinWeights;
      const nx = panel.outwardNormal.x;
      const ny = panel.outwardNormal.y;
      const nz = panel.outwardNormal.z;

      const count = weights.length;
      for (let i = 0; i < count; i++) {
        const w = weights[i];
        const i3 = i * 3;
        const rx = rest[i3];
        const ry = rest[i3 + 1];
        const rz = rest[i3 + 2];

        if (w <= 0.001) {
          arr[i3] = rx;
          arr[i3 + 1] = ry;
          arr[i3 + 2] = rz;
          continue;
        }

        // Subtle continuous stadium breeze ripple
        const breeze = Math.sin(elapsed * 2.1 + rz * 1.3 + ry * 1.7) * 0.01 * w;
        let dx = nx * breeze;
        let dy = ny * breeze * 0.5;
        let dz = nz * breeze;

        if (hasPulses) {
          for (let p = 0; p < rig.pulses.length; p++) {
            const pulse = rig.pulses[p];
            tmpDiff.set(rx - pulse.impact.x, ry - pulse.impact.y, rz - pulse.impact.z);
            const dist = tmpDiff.length();

            // 1. Outward impact pocket bulge (peaks rapidly then recoils smoothly)
            const rise = Math.sin(Math.min(pulse.age * 11.0, Math.PI * 0.5));
            const bulgeDecay = Math.exp(-pulse.age * 2.15);
            const spatialBulge = Math.exp(-(dist * dist) / (1.35 * 1.35));
            const bulgeMag = pulse.power * 0.54 * rise * bulgeDecay * spatialBulge;

            // 2. Damped harmonic traveling ripple wave spreading across the net
            const waveDecay = Math.exp(-pulse.age * 2.35) * Math.exp(-dist * 0.42);
            const waveOsc = Math.sin(pulse.age * 17.5 - dist * 4.4);
            const waveMag = pulse.power * 0.16 * waveDecay * waveOsc;

            const totalOutward = (bulgeMag + waveMag) * w;
            dx += nx * totalOutward;
            dy += ny * totalOutward;
            dz += nz * totalOutward;

            // Slight radial stretch away from impact point for authentic fabric billowing
            if (dist > 0.05) {
              const radialScale = (bulgeMag * 0.22 * w) / dist;
              dx += tmpDiff.x * radialScale * 0.4;
              dy += tmpDiff.y * radialScale;
              dz += tmpDiff.z * radialScale;
            }
          }
        }

        arr[i3] = rx + dx;
        arr[i3 + 1] = ry + dy;
        arr[i3 + 2] = rz + dz;
      }

      posAttr.needsUpdate = true;
      if (hasPulses || rig.wasActive) {
        panel.geometry.computeVertexNormals();
      }
    }

    rig.wasActive = hasPulses;
  };

  const updateCornerFlags = (elapsed: number): void => {
    for (const flag of cornerFlags) {
      const posAttr = flag.geometry.attributes.position as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;
      const rest = flag.restPositions;

      for (let i = 0; i < posAttr.count; i++) {
        const i3 = i * 3;
        const rx = rest[i3];
        const ry = rest[i3 + 1];
        const rz = rest[i3 + 2];

        // Distance from pole attachment (x ≈ 0.015) drives wave amplitude
        const u = THREE.MathUtils.clamp((rx - 0.015) / 0.48, 0, 1);
        const flutter =
          (Math.sin(elapsed * 6.4 - u * 5.2 + flag.phaseOffset) * 0.055 +
            Math.sin(elapsed * 11.2 - u * 8.5 + flag.phaseOffset * 1.7) * 0.018) *
          u *
          u;

        arr[i3] = rx - Math.abs(flutter) * 0.18;
        arr[i3 + 1] = ry + Math.sin(elapsed * 4.2 + flag.phaseOffset) * 0.012 * u;
        arr[i3 + 2] = rz + flutter;
      }
      posAttr.needsUpdate = true;
    }
  };

  const update = (dt: number, elapsed: number): void => {
    const safeDt = Math.min(Math.max(dt, 0), 0.05);
    updateNetRig(homeGoal, safeDt, elapsed);
    updateNetRig(awayGoal, safeDt, elapsed);
    updateCornerFlags(elapsed);
  };

  return {
    group,
    triggerNetRipple,
    update,
  };
}
