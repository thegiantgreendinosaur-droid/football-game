import * as THREE from 'three';
import { BALL } from '../config/constants';
import type { SimBallState, Vec3 } from '../types/game';

export interface BallVisuals {
  group: THREE.Group;
  ballMesh: THREE.Mesh;
  update(ball: SimBallState, dt: number): void;
}

const TRAIL_POINTS = 18;
const TRAIL_HIGH_POWER_THRESHOLD = 0.55;
const TRAIL_MIN_SPEED = 12.5;

/** Generates the 12 normalized vertices of a regular icosahedron (exact football pentagon centers) */
function createIcosahedronDirections(): Array<[number, number, number]> {
  const phi = (1 + Math.sqrt(5)) * 0.5;
  const raw: Array<[number, number, number]> = [
    [0, 1, phi],
    [0, -1, phi],
    [0, 1, -phi],
    [0, -1, -phi],
    [1, phi, 0],
    [-1, phi, 0],
    [1, -phi, 0],
    [-1, -phi, 0],
    [phi, 0, 1],
    [-phi, 0, 1],
    [phi, 0, -1],
    [-phi, 0, -1],
  ];

  return raw.map(([x, y, z]) => {
    const len = Math.hypot(x, y, z);
    return [x / len, y / len, z / len];
  });
}

/**
 * Procedurally renders a sharp modern match-football equirectangular diffuse + seam bump texture.
 * Uses true spherical projection of 12 icosahedral panel centers so there is zero pole distortion
 * and ball spin is unmistakably readable from broadcast camera distance.
 */
function createMatchBallTextures(): {
  map: THREE.CanvasTexture;
  bumpMap: THREE.CanvasTexture;
} {
  const width = 512;
  const height = 256;

  const colorCanvas = document.createElement('canvas');
  colorCanvas.width = width;
  colorCanvas.height = height;
  const colorCtx = colorCanvas.getContext('2d');

  const bumpCanvas = document.createElement('canvas');
  bumpCanvas.width = width;
  bumpCanvas.height = height;
  const bumpCtx = bumpCanvas.getContext('2d');

  if (!colorCtx || !bumpCtx) {
    throw new Error('Failed to create 2D contexts for match ball textures');
  }

  const colorImg = colorCtx.createImageData(width, height);
  const bumpImg = bumpCtx.createImageData(width, height);
  const cData = colorImg.data;
  const bData = bumpImg.data;

  const centers = createIcosahedronDirections();

  // Precompute sin/cos tables for speed
  const cosTheta = new Float32Array(width);
  const sinTheta = new Float32Array(width);
  for (let x = 0; x < width; x++) {
    const u = (x + 0.5) / width;
    const theta = u * Math.PI * 2;
    cosTheta[x] = Math.cos(theta);
    sinTheta[x] = Math.sin(theta);
  }

  for (let y = 0; y < height; y++) {
    const v = (y + 0.5) / height;
    const phi = v * Math.PI;
    const sinPhi = Math.sin(phi);
    const ny = Math.cos(phi);

    for (let x = 0; x < width; x++) {
      const nx = sinPhi * cosTheta[x];
      const nz = sinPhi * sinTheta[x];

      let d1 = -2;
      let d2 = -2;
      let d3 = -2;
      let bestIdx = 0;

      for (let i = 0; i < 12; i++) {
        const c = centers[i];
        const dot = nx * c[0] + ny * c[1] + nz * c[2];
        if (dot > d1) {
          d3 = d2;
          d2 = d1;
          d1 = dot;
          bestIdx = i;
        } else if (dot > d2) {
          d3 = d2;
          d2 = dot;
        } else if (dot > d3) {
          d3 = dot;
        }
      }

      // Base pearl-white synthetic leather with ultra-subtle micro-pebble grain
      const pebble = Math.sin(x * 1.9 + y * 1.3) * Math.cos(x * 1.1 - y * 2.1) * 3.5;
      let r = 247 + pebble;
      let g = 249 + pebble;
      let b = 252 + pebble;
      let bump = 212 + pebble * 2.5;

      // Primary geometric pentagon panels (bold dark-navy with emerald & gold precision trim)
      // Modulate edge slightly with d2 so the panels form authentic sharp pentagon facets
      const facetMetric = d1 - d2 * 0.24;

      if (facetMetric > 0.692) {
        // Deep match-navy core panel
        r = 16;
        g = 34;
        b = 64;
        bump = 198;

        // Inner gold star-diamond accent at center of alternating panels
        if (facetMetric > 0.775) {
          if (bestIdx % 2 === 0) {
            r = 228;
            g = 186;
            b = 76;
          } else {
            r = 22;
            g = 52;
            b = 94;
          }
        } else if (facetMetric < 0.708) {
          // Crisp emerald athletic border trim
          r = 16;
          g = 185;
          b = 129;
          bump = 175;
        }
      } else if (facetMetric > 0.678) {
        // Subtle gold pinstripe framing each navy pentagon
        r = 222;
        g = 182;
        b = 78;
        bump = 148;
      }

      // Bold geometric connecting bands along selected triangle edges for crystal-clear spin readability
      const edgeGap = d1 - d2;
      if (edgeGap < 0.042 && d3 > 0.58) {
        // Triangular junction accent (sharp modern championship ball motif)
        r = 14;
        g = 158;
        b = 112;
        bump = 170;
      }

      // Recessed thermal-bonded panel seam lines between adjacent Voronoi panels
      if (edgeGap < 0.015) {
        const seamFactor = 1.0 - edgeGap / 0.015;
        r = r * (1 - seamFactor * 0.32) + 120 * seamFactor * 0.32;
        g = g * (1 - seamFactor * 0.32) + 132 * seamFactor * 0.32;
        b = b * (1 - seamFactor * 0.32) + 148 * seamFactor * 0.32;
        bump = 75 + (1 - seamFactor) * 110;
      }

      // Crisp pentagon perimeter seam groove
      const pentSeamDist = Math.abs(facetMetric - 0.678);
      if (pentSeamDist < 0.008) {
        const f = 1.0 - pentSeamDist / 0.008;
        r *= 1 - f * 0.28;
        g *= 1 - f * 0.28;
        b *= 1 - f * 0.28;
        bump = Math.min(bump, 82 + (1 - f) * 90);
      }

      const idx = (y * width + x) * 4;
      cData[idx] = Math.max(0, Math.min(255, r));
      cData[idx + 1] = Math.max(0, Math.min(255, g));
      cData[idx + 2] = Math.max(0, Math.min(255, b));
      cData[idx + 3] = 255;

      const bVal = Math.max(0, Math.min(255, bump));
      bData[idx] = bVal;
      bData[idx + 1] = bVal;
      bData[idx + 2] = bVal;
      bData[idx + 3] = 255;
    }
  }

  colorCtx.putImageData(colorImg, 0, 0);
  bumpCtx.putImageData(bumpImg, 0, 0);

  const map = new THREE.CanvasTexture(colorCanvas);
  map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = 8;
  map.needsUpdate = true;

  const bumpMap = new THREE.CanvasTexture(bumpCanvas);
  bumpMap.anisotropy = 4;
  bumpMap.needsUpdate = true;

  return { map, bumpMap };
}

/** Soft radial gradient texture for the dynamic ground shadow disc beneath the ball */
function createShadowDiscTexture(): THREE.CanvasTexture {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Failed to create 2D context for ball shadow disc');
  }

  const grad = ctx.createRadialGradient(size * 0.5, size * 0.5, 4, size * 0.5, size * 0.5, size * 0.5);
  grad.addColorStop(0.0, 'rgba(8, 22, 12, 0.92)');
  grad.addColorStop(0.45, 'rgba(10, 26, 14, 0.58)');
  grad.addColorStop(0.78, 'rgba(12, 30, 16, 0.16)');
  grad.addColorStop(1.0, 'rgba(12, 30, 16, 0.0)');

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/** Creates a dual-plane tapered additive shot trail ribbon with smooth alpha/color fade */
function createShotRibbonMesh(): {
  mesh: THREE.Mesh;
  positions: Float32Array;
  alphas: Float32Array;
  material: THREE.ShaderMaterial;
} {
  // Two crossed ribbons (horizontal + vertical) so the trail looks rich from any broadcast angle
  const quadsPerRibbon = TRAIL_POINTS - 1;
  const vertsPerRibbon = TRAIL_POINTS * 2;
  const totalVerts = vertsPerRibbon * 2;

  const positions = new Float32Array(totalVerts * 3);
  const alphas = new Float32Array(totalVerts);
  const uvs = new Float32Array(totalVerts * 2);
  const indices: number[] = [];

  for (let ribbon = 0; ribbon < 2; ribbon++) {
    const baseVert = ribbon * vertsPerRibbon;
    for (let i = 0; i < TRAIL_POINTS; i++) {
      const t = i / (TRAIL_POINTS - 1); // 0 = head (at ball), 1 = tail
      const vIdx = baseVert + i * 2;
      uvs[vIdx * 2] = t;
      uvs[vIdx * 2 + 1] = 0;
      uvs[(vIdx + 1) * 2] = t;
      uvs[(vIdx + 1) * 2 + 1] = 1;
    }

    for (let i = 0; i < quadsPerRibbon; i++) {
      const a = baseVert + i * 2;
      const b = a + 1;
      const c = a + 2;
      const d = a + 3;
      indices.push(a, b, c, b, d, c);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('aAlpha', new THREE.BufferAttribute(alphas, 1));
  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geometry.setIndex(indices);

  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uHeadColor: { value: new THREE.Color('#fff9dc') },
      uMidColor: { value: new THREE.Color('#f7c948') },
      uTailColor: { value: new THREE.Color('#18d493') },
      uOpacity: { value: 0.0 },
    },
    vertexShader: `
      attribute float aAlpha;
      varying float vAlpha;
      varying vec2 vUv;
      void main() {
        vAlpha = aAlpha;
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uHeadColor;
      uniform vec3 uMidColor;
      uniform vec3 uTailColor;
      uniform float uOpacity;
      varying float vAlpha;
      varying vec2 vUv;

      void main() {
        // Soft ribbon edge feathering across width (vUv.y in 0..1)
        float edge = 1.0 - abs(vUv.y * 2.0 - 1.0);
        float core = pow(edge, 1.45);

        vec3 col = mix(uHeadColor, uMidColor, smoothstep(0.0, 0.45, vUv.x));
        col = mix(col, uTailColor, smoothstep(0.35, 1.0, vUv.x));

        float alpha = vAlpha * core * uOpacity;
        if (alpha < 0.004) discard;
        gl_FragColor = vec4(col, alpha);
      }
    `,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.frustumCulled = false;
  mesh.visible = false;
  mesh.renderOrder = 4;

  return { mesh, positions, alphas, material };
}

/**
 * Creates the 3D match football, dynamic ground altitude shadow disc, and high-power shot speed ribbon.
 */
export function createBallVisuals(scene: THREE.Scene): BallVisuals {
  const group = new THREE.Group();
  group.name = 'MatchBallVisuals';

  // 1. Authentic modern match football mesh
  const { map, bumpMap } = createMatchBallTextures();
  const ballGeo = new THREE.SphereGeometry(BALL.RADIUS, 32, 24);
  const ballMat = new THREE.MeshStandardMaterial({
    map,
    bumpMap,
    bumpScale: 0.004,
    roughness: 0.34,
    metalness: 0.08,
  });

  const ballMesh = new THREE.Mesh(ballGeo, ballMat);
  ballMesh.castShadow = true;
  ballMesh.receiveShadow = true;
  ballMesh.position.set(0, BALL.RADIUS, 0);
  group.add(ballMesh);

  // 2. Dynamic ground shadow disc directly below the ball (crucial aerial depth cue)
  const shadowTex = createShadowDiscTexture();
  const shadowGeo = new THREE.PlaneGeometry(BALL.RADIUS * 2.8, BALL.RADIUS * 2.8);
  shadowGeo.rotateX(-Math.PI * 0.5);
  const shadowMat = new THREE.MeshBasicMaterial({
    map: shadowTex,
    transparent: true,
    opacity: 0.56,
    depthWrite: false,
  });
  const shadowDisc = new THREE.Mesh(shadowGeo, shadowMat);
  shadowDisc.position.set(0, 0.022, 0);
  shadowDisc.renderOrder = 2;
  group.add(shadowDisc);

  // 3. Sleek shot speed ribbon trail
  const ribbon = createShotRibbonMesh();
  group.add(ribbon.mesh);

  scene.add(group);

  // Trail history ring buffer
  const history: THREE.Vector3[] = Array.from({ length: TRAIL_POINTS }, () => new THREE.Vector3());
  let trailInitialized = false;
  let trailIntensity = 0;
  let sampleAccum = 0;

  // Scratch math objects to avoid per-frame GC allocations
  const rotAxis = new THREE.Vector3();
  const deltaQuat = new THREE.Quaternion();
  const tangent = new THREE.Vector3();
  const sideVec = new THREE.Vector3();
  const upVec = new THREE.Vector3();
  const worldUp = new THREE.Vector3(0, 1, 0);
  const fallbackSide = new THREE.Vector3(1, 0, 0);

  const resetTrailAt = (pos: Vec3): void => {
    for (let i = 0; i < TRAIL_POINTS; i++) {
      history[i].set(pos.x, pos.y, pos.z);
    }
    trailInitialized = true;
  };

  const update = (ball: SimBallState, dt: number): void => {
    const safeDt = Math.min(Math.max(dt, 0), 0.05);

    // Position football
    ballMesh.position.set(ball.position.x, ball.position.y, ball.position.z);

    // Integrate spin smoothly via quaternion from world-space angularVelocity
    const wx = ball.angularVelocity.x;
    const wy = ball.angularVelocity.y;
    const wz = ball.angularVelocity.z;
    const omega = Math.hypot(wx, wy, wz);
    if (omega > 1e-4 && safeDt > 0) {
      rotAxis.set(wx / omega, wy / omega, wz / omega);
      deltaQuat.setFromAxisAngle(rotAxis, omega * safeDt);
      ballMesh.quaternion.premultiply(deltaQuat).normalize();
    }

    // Update dynamic ground shadow disc (expands and softens with height)
    const altitude = Math.max(0, ball.position.y - BALL.RADIUS);
    shadowDisc.position.set(ball.position.x, 0.022, ball.position.z);
    const shadowScale = 1.0 + Math.min(altitude * 0.24, 1.55);
    shadowDisc.scale.set(shadowScale, 1, shadowScale);
    shadowMat.opacity = Math.max(0.11, 0.58 / (1.0 + altitude * 0.42));

    // Update high-power shot speed trail
    const speed = Math.hypot(ball.velocity.x, ball.velocity.y, ball.velocity.z);
    const isHighPowerShot =
      ball.ownerId === null &&
      ball.lastKickPower > TRAIL_HIGH_POWER_THRESHOLD &&
      speed > TRAIL_MIN_SPEED;

    if (!trailInitialized) {
      resetTrailAt(ball.position);
    }

    // Detect sudden teleport (e.g., kickoff reset) and snap trail cleanly
    const jumpDistSq =
      (ball.position.x - history[0].x) ** 2 +
      (ball.position.y - history[0].y) ** 2 +
      (ball.position.z - history[0].z) ** 2;
    if (jumpDistSq > 9.0) {
      resetTrailAt(ball.position);
      trailIntensity = 0;
    }

    const targetIntensity = isHighPowerShot
      ? THREE.MathUtils.clamp((ball.lastKickPower - 0.5) * 1.45, 0.35, 1.0) *
        THREE.MathUtils.clamp((speed - TRAIL_MIN_SPEED) / 14.0, 0.35, 1.0)
      : 0.0;

    const blendRate = targetIntensity > trailIntensity ? 18.0 : 9.5;
    trailIntensity += (targetIntensity - trailIntensity) * (1 - Math.exp(-blendRate * safeDt));

    if (trailIntensity < 0.015) {
      ribbon.mesh.visible = false;
      // Keep trail head anchored to the ball so next high-power shot starts cleanly
      resetTrailAt(ball.position);
      return;
    }

    // Shift trail history at fixed cadence (~120Hz equivalent) for smooth silky curve regardless of FPS
    sampleAccum += safeDt;
    const stepInterval = 1 / 95;
    if (sampleAccum >= stepInterval) {
      const steps = Math.min(3, Math.floor(sampleAccum / stepInterval));
      sampleAccum -= steps * stepInterval;
      for (let s = 0; s < steps; s++) {
        for (let i = TRAIL_POINTS - 1; i > 0; i--) {
          history[i].copy(history[i - 1]);
        }
        history[0].set(ball.position.x, ball.position.y, ball.position.z);
      }
    } else {
      history[0].set(ball.position.x, ball.position.y, ball.position.z);
    }

    // Rebuild crossed ribbon geometry along trail spine
    const posArr = ribbon.positions;
    const alphaArr = ribbon.alphas;
    const vertsPerRibbon = TRAIL_POINTS * 2;
    const baseHalfWidth = BALL.RADIUS * (0.72 + 0.35 * trailIntensity);

    for (let i = 0; i < TRAIL_POINTS; i++) {
      const t = i / (TRAIL_POINTS - 1); // 0 = head, 1 = tail
      const p = history[i];

      if (i < TRAIL_POINTS - 1) {
        tangent.subVectors(p, history[i + 1]);
      } else {
        tangent.subVectors(history[i - 1], p);
      }
      if (tangent.lengthSq() < 1e-6) {
        tangent.set(ball.velocity.x, ball.velocity.y, ball.velocity.z);
      }
      if (tangent.lengthSq() < 1e-6) {
        tangent.set(1, 0, 0);
      } else {
        tangent.normalize();
      }

      // Compute orthonormal basis perpendicular to velocity tangent
      sideVec.crossVectors(tangent, worldUp);
      if (sideVec.lengthSq() < 1e-4) {
        sideVec.crossVectors(tangent, fallbackSide);
      }
      sideVec.normalize();
      upVec.crossVectors(sideVec, tangent).normalize();

      // Smooth width taper from ball diameter down to sharp pinpoint tail
      const taper = Math.pow(1.0 - t, 1.35);
      const halfW = baseHalfWidth * taper;
      const pointAlpha = Math.pow(1.0 - t, 1.6) * (i === 0 ? 0.55 : 1.0);

      // Ribbon 0: Horizontal wing
      const r0A = i * 2;
      const r0B = r0A + 1;
      posArr[r0A * 3] = p.x + sideVec.x * halfW;
      posArr[r0A * 3 + 1] = p.y + sideVec.y * halfW;
      posArr[r0A * 3 + 2] = p.z + sideVec.z * halfW;
      posArr[r0B * 3] = p.x - sideVec.x * halfW;
      posArr[r0B * 3 + 1] = p.y - sideVec.y * halfW;
      posArr[r0B * 3 + 2] = p.z - sideVec.z * halfW;
      alphaArr[r0A] = pointAlpha;
      alphaArr[r0B] = pointAlpha;

      // Ribbon 1: Vertical cross wing
      const r1A = vertsPerRibbon + i * 2;
      const r1B = r1A + 1;
      posArr[r1A * 3] = p.x + upVec.x * halfW;
      posArr[r1A * 3 + 1] = p.y + upVec.y * halfW;
      posArr[r1A * 3 + 2] = p.z + upVec.z * halfW;
      posArr[r1B * 3] = p.x - upVec.x * halfW;
      posArr[r1B * 3 + 1] = p.y - upVec.y * halfW;
      posArr[r1B * 3 + 2] = p.z - upVec.z * halfW;
      alphaArr[r1A] = pointAlpha * 0.85;
      alphaArr[r1B] = pointAlpha * 0.85;
    }

    const posAttr = ribbon.mesh.geometry.attributes.position as THREE.BufferAttribute;
    const alphaAttr = ribbon.mesh.geometry.attributes.aAlpha as THREE.BufferAttribute;
    posAttr.needsUpdate = true;
    alphaAttr.needsUpdate = true;

    ribbon.material.uniforms.uOpacity.value = trailIntensity * 0.72;
    ribbon.mesh.visible = true;
  };

  return {
    group,
    ballMesh,
    update,
  };
}
