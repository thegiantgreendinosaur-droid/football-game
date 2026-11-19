import * as THREE from 'three';
import type {
  FacialHair,
  FootballerProfile,
  HairStyle,
  KitTheme,
  PlayerAppearance,
} from '../types/game';

export interface CharacterRig {
  root: THREE.Group;
  pelvis: THREE.Group;
  torso: THREE.Group;
  headGroup: THREE.Group;
  leftShoulder: THREE.Group;
  leftElbow: THREE.Group;
  rightShoulder: THREE.Group;
  rightElbow: THREE.Group;
  leftHip: THREE.Group;
  leftKnee: THREE.Group;
  leftAnkle: THREE.Group;
  rightHip: THREE.Group;
  rightKnee: THREE.Group;
  rightAnkle: THREE.Group;
  shadowBlob: THREE.Mesh;
  heightScale: number;
  profile: FootballerProfile;
}

interface BuildDimensions {
  width: number;
  depth: number;
  limb: number;
}

interface HeadDimensions {
  sx: number;
  sy: number;
  sz: number;
  jawScale: number;
}

const BUILD_PROPORTIONS: Record<PlayerAppearance['build'], BuildDimensions> = {
  slim: { width: 0.91, depth: 0.92, limb: 0.91 },
  athletic: { width: 1.0, depth: 1.0, limb: 1.0 },
  stocky: { width: 1.09, depth: 1.08, limb: 1.07 },
  towering: { width: 1.1, depth: 1.06, limb: 1.06 },
};

const HEAD_SHAPES: Record<PlayerAppearance['headShape'], HeadDimensions> = {
  oval: { sx: 0.96, sy: 1.11, sz: 1.02, jawScale: 0.92 },
  angular: { sx: 0.93, sy: 1.14, sz: 1.04, jawScale: 0.88 },
  broad: { sx: 1.05, sy: 1.08, sz: 1.03, jawScale: 1.04 },
  compact: { sx: 0.97, sy: 1.04, sz: 0.99, jawScale: 0.95 },
};

/**
 * Computes a subtly darkened or lightened hex color string for natural material shading.
 */
function adjustColor(hex: string, factor: number): THREE.Color {
  const c = new THREE.Color(hex);
  if (factor < 1) {
    c.multiplyScalar(factor);
  } else {
    c.lerp(new THREE.Color(0xffffff), Math.min(1, factor - 1));
  }
  return c;
}

/**
 * Creates a crisp 256x256 jersey texture mapped onto a cylinder with thetaStart = PI/2:
 * - Left half (x: 0..128, center x=64) maps cleanly onto the BACK (-Z), reading left-to-right.
 * - Right half (x: 128..256, center x=192) maps cleanly onto the FRONT (+Z), reading left-to-right.
 * - UV seams fall hidden under the left and right armpits.
 */
function createJerseyTexture(
  profile: FootballerProfile,
  kit: KitTheme,
  isGoalkeeper: boolean
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    const fallback = new THREE.CanvasTexture(canvas);
    fallback.colorSpace = THREE.SRGBColorSpace;
    return fallback;
  }

  const primary = isGoalkeeper ? kit.gkPrimary : kit.primary;
  const secondary = isGoalkeeper ? kit.gkSecondary : kit.secondary;
  const numberColor = isGoalkeeper ? '#ffffff' : kit.numberColor;
  const pattern = isGoalkeeper ? 'shoulders' : kit.pattern;

  // Base jersey color
  ctx.fillStyle = primary;
  ctx.fillRect(0, 0, 256, 256);

  // Kit pattern graphics
  if (pattern === 'stripes') {
    ctx.fillStyle = secondary;
    const stripeCount = 8;
    const stripeWidth = 256 / (stripeCount * 2);
    for (let i = 0; i < stripeCount; i++) {
      ctx.fillRect(i * stripeWidth * 2 + stripeWidth * 0.5, 0, stripeWidth, 256);
    }
    // Clean solid number panel on back for crisp readability
    ctx.fillStyle = primary;
    ctx.fillRect(20, 42, 88, 152);
  } else if (pattern === 'sash') {
    ctx.save();
    ctx.fillStyle = secondary;
    // Front sash: runs from player's left shoulder (x=244, y=0) to right hip (x=140, y=256)
    ctx.beginPath();
    ctx.moveTo(220, 0);
    ctx.lineTo(256, 0);
    ctx.lineTo(166, 256);
    ctx.lineTo(130, 256);
    ctx.closePath();
    ctx.fill();

    // Subtle back sash continuation
    ctx.globalAlpha = 0.25;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(36, 0);
    ctx.lineTo(126, 256);
    ctx.lineTo(90, 256);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  } else if (pattern === 'shoulders') {
    // Sleek tapered shoulder trim along upper yoke without cluttering chest
    ctx.fillStyle = secondary;
    ctx.fillRect(0, 0, 256, 18);
    ctx.fillStyle = primary;
    ctx.fillRect(36, 0, 56, 18);
    ctx.fillRect(164, 0, 56, 18);

    // Subtle tonal diagonal chest sheen
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.beginPath();
    ctx.moveTo(128, 30);
    ctx.lineTo(256, 110);
    ctx.lineTo(256, 150);
    ctx.lineTo(128, 70);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  } else {
    // 'solid': sleek side athletic contour panels + subtle chest tonal sheen
    ctx.save();
    ctx.fillStyle = secondary;
    ctx.globalAlpha = 0.16;
    ctx.fillRect(0, 0, 12, 256);
    ctx.fillRect(116, 0, 24, 256);
    ctx.fillRect(244, 0, 12, 256);
    ctx.restore();
  }

  // Subtle fabric micro-weave for realism
  ctx.save();
  ctx.fillStyle = 'rgba(255, 255, 255, 0.035)';
  for (let y = 0; y < 256; y += 4) {
    ctx.fillRect(0, y, 256, 1);
  }
  ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
  for (let x = 0; x < 256; x += 6) {
    ctx.fillRect(x, 0, 1, 256);
  }
  ctx.restore();

  // Bottom hem trim stripe
  ctx.fillStyle = secondary;
  ctx.fillRect(0, 244, 256, 8);

  // Subtle V-neck trim printed on upper front center (x = 192)
  ctx.save();
  ctx.strokeStyle = secondary;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(170, 0);
  ctx.lineTo(192, 34);
  ctx.lineTo(214, 0);
  ctx.stroke();
  ctx.restore();

  // Front crest shield (player's left chest -> x = 212)
  ctx.save();
  const cx = 214;
  const cy = 72;
  ctx.beginPath();
  ctx.moveTo(cx - 10, cy - 11);
  ctx.lineTo(cx + 10, cy - 11);
  ctx.lineTo(cx + 10, cy + 2);
  ctx.quadraticCurveTo(cx, cy + 14, cx, cy + 14);
  ctx.quadraticCurveTo(cx, cy + 14, cx - 10, cy + 2);
  ctx.closePath();
  ctx.fillStyle = secondary;
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = numberColor;
  ctx.stroke();

  // Crest inner diamond emblem
  ctx.beginPath();
  ctx.moveTo(cx, cy - 6);
  ctx.lineTo(cx + 5, cy + 1);
  ctx.lineTo(cx, cy + 8);
  ctx.lineTo(cx - 5, cy + 1);
  ctx.closePath();
  ctx.fillStyle = primary;
  ctx.fill();
  ctx.restore();

  // Athletic brand swoosh mark on player's right chest (x = 170)
  ctx.save();
  ctx.fillStyle = numberColor;
  ctx.globalAlpha = 0.9;
  ctx.beginPath();
  ctx.moveTo(162, 74);
  ctx.lineTo(178, 66);
  ctx.lineTo(175, 72);
  ctx.lineTo(164, 78);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // Front subtle geometric sponsor accent band
  ctx.save();
  ctx.fillStyle = numberColor;
  ctx.globalAlpha = 0.85;
  ctx.fillRect(160, 114, 64, 3);
  ctx.font = 'bold 12px "Inter", "Segoe UI", Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('APEX', 192, 128);
  ctx.globalAlpha = 0.45;
  ctx.fillRect(172, 137, 40, 2);
  ctx.restore();

  // ---- BACK OF JERSEY (center x = 64) ----
  const backCenterX = 64;

  // Player short name across upper back
  ctx.save();
  const displayName = profile.shortName.toUpperCase();
  const nameFontSize = displayName.length > 9 ? 13 : displayName.length > 7 ? 15 : 17;
  ctx.font = `800 ${nameFontSize}px "Arial Narrow", "Impact", "Segoe UI", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineJoin = 'round';
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.35)';
  ctx.strokeText(displayName, backCenterX, 58, 102);
  ctx.fillStyle = numberColor;
  ctx.fillText(displayName, backCenterX, 58, 102);
  ctx.restore();

  // Large iconic jersey number centered on back
  ctx.save();
  const numText = String(profile.number);
  ctx.font = `900 ${numText.length > 1 ? 82 : 90}px "Impact", "Arial Black", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineJoin = 'round';
  ctx.lineWidth = 6;
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.32)';
  ctx.strokeText(numText, backCenterX, 134, 96);
  ctx.fillStyle = numberColor;
  ctx.fillText(numText, backCenterX, 134, 96);
  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Generates a soft radial alpha gradient texture for the grounded contact shadow blob.
 */
function createShadowBlobTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const grad = ctx.createRadialGradient(32, 32, 4, 32, 32, 30);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.42)');
    grad.addColorStop(0.55, 'rgba(0, 0, 0, 0.22)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0.0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

/**
 * Sculpts an athletic V-tapered torso cylinder with subtle pectoral depth and waist taper.
 * Uses thetaStart = Math.PI * 0.5 so UV seams sit cleanly under left/right arms.
 */
function createSculptedTorsoGeometry(
  widthScale: number,
  depthScale: number
): THREE.CylinderGeometry {
  const geo = new THREE.CylinderGeometry(
    0.175,
    0.132,
    0.46,
    24,
    8,
    false,
    Math.PI * 0.5,
    Math.PI * 2
  );

  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i);
    const y = pos.getY(i);
    let z = pos.getZ(i);

    // Normalized height from 0 (waist) to 1 (shoulders)
    const t = (y + 0.23) / 0.46;

    // Athletic V-taper width profile: wider at upper chest/shoulders, trim at waist
    const chestBoost = Math.sin(Math.min(1, Math.max(0, t)) * Math.PI);
    const upperShoulderFlare = 1.0 + 0.14 * Math.pow(Math.max(0, t), 1.6);
    x *= 1.18 * widthScale * upperShoulderFlare;

    // Natural front-to-back athletic chest compression + pectoral fullness on +Z
    const depthProfile = 0.72 + 0.08 * chestBoost;
    z *= depthProfile * depthScale;
    if (z > 0 && t > 0.35 && t < 0.88) {
      z += 0.016 * Math.sin(((t - 0.35) / 0.53) * Math.PI) * depthScale;
    }

    // Slight rounding inward right at the top shoulder-neck rim
    if (t > 0.92) {
      const capT = (t - 0.92) / 0.08;
      x *= 1 - capT * 0.12;
      z *= 1 - capT * 0.14;
    }

    pos.setXYZ(i, x, y, z);
  }

  geo.computeVertexNormals();
  return geo;
}

function enableShadows(mesh: THREE.Mesh, cast = true, receive = true): THREE.Mesh {
  mesh.castShadow = cast;
  mesh.receiveShadow = receive;
  return mesh;
}

/**
 * Builds distinct, silhouette-recognizable hairstyles for all 10 HairStyle variants.
 */
function buildHair(
  style: HairStyle,
  headDims: HeadDimensions,
  hairMat: THREE.MeshStandardMaterial,
  highlightMat: THREE.MeshStandardMaterial,
  bandMat: THREE.MeshStandardMaterial
): THREE.Group {
  const hairGroup = new THREE.Group();
  const { sx, sy, sz } = headDims;
  const r = 0.118;

  const addBlob = (
    radius: number,
    x: number,
    y: number,
    z: number,
    scaleX = 1,
    scaleY = 1,
    scaleZ = 1,
    mat: THREE.Material = hairMat,
    rotX = 0,
    rotY = 0,
    rotZ = 0
  ): THREE.Mesh => {
    const m = new THREE.Mesh(new THREE.SphereGeometry(radius, 12, 10), mat);
    m.position.set(x * sx, y * sy, z * sz);
    m.scale.set(scaleX * sx, scaleY * sy, scaleZ * sz);
    m.rotation.set(rotX, rotY, rotZ);
    enableShadows(m, true, true);
    hairGroup.add(m);
    return m;
  };

  // Base skull-hugging hair cap helper
  const addBaseCap = (
    scaleMultiplier = 1.045,
    yOffset = 0.016,
    zOffset = -0.012,
    phiLength = Math.PI * 0.62
  ): THREE.Mesh => {
    const capGeo = new THREE.SphereGeometry(
      r * scaleMultiplier,
      18,
      14,
      0,
      Math.PI * 2,
      0,
      phiLength
    );
    const cap = new THREE.Mesh(capGeo, hairMat);
    cap.position.set(0, yOffset * sy, zOffset * sz);
    cap.scale.set(sx, sy * 0.96, sz);
    cap.rotation.x = -0.22;
    enableShadows(cap, true, true);
    hairGroup.add(cap);
    return cap;
  };

  switch (style) {
    case 'ponytail_long': {
      // Haaland: swept-back blonde crown, distinct dark hairband, long flowing layered ponytail
      addBaseCap(1.06, 0.018, -0.012, Math.PI * 0.65);
      // Swept-back forehead hairline volume
      addBlob(0.082, 0, 0.072, 0.025, 1.18, 0.56, 1.05, hairMat, -0.25);
      addBlob(0.074, 0, 0.078, -0.032, 1.15, 0.64, 1.12, highlightMat, 0.15);
      // Side sweep locks tucked back toward tie
      addBlob(0.048, 0.088, 0.03, -0.02, 0.6, 0.9, 1.45, hairMat, 0.1, -0.22);
      addBlob(0.048, -0.088, 0.03, -0.02, 0.6, 0.9, 1.45, hairMat, 0.1, 0.22);

      // Hairband knot at upper-mid back of skull
      const tie = new THREE.Mesh(new THREE.TorusGeometry(0.034, 0.01, 8, 14), bandMat);
      tie.position.set(0, 0.018 * sy, -0.125 * sz);
      tie.rotation.x = 0.35;
      enableShadows(tie, true, true);
      hairGroup.add(tie);

      // Flowing multi-segment ponytail tail extending clearly behind the head
      const upperTail = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.036, 0.095, 8, 12),
        hairMat
      );
      upperTail.position.set(0, -0.012 * sy, -0.168 * sz);
      upperTail.rotation.x = -0.68;
      enableShadows(upperTail, true, true);
      hairGroup.add(upperTail);

      const lowerTail = new THREE.Mesh(
        new THREE.ConeGeometry(0.038, 0.155, 12),
        highlightMat
      );
      lowerTail.position.set(0, -0.105 * sy, -0.205 * sz);
      lowerTail.rotation.x = Math.PI - 0.28;
      enableShadows(lowerTail, true, true);
      hairGroup.add(lowerTail);

      // Side wisp for dynamic flow
      const wisp = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.02, 0.09, 6, 8),
        hairMat
      );
      wisp.position.set(0.016, -0.065 * sy, -0.188 * sz);
      wisp.rotation.set(-0.35, 0, -0.12);
      enableShadows(wisp, true, true);
      hairGroup.add(wisp);
      break;
    }

    case 'topknot_bun': {
      // Van Dijk: sleek pulled-back crown + pronounced high topknot bun
      addBaseCap(1.045, 0.016, -0.01, Math.PI * 0.56);
      // Pulled-back sleek crown ridges
      addBlob(0.08, 0, 0.066, -0.01, 1.12, 0.52, 1.15, hairMat, 0.1);
      // Hair tie ring around base of bun
      const tie = new THREE.Mesh(new THREE.TorusGeometry(0.036, 0.008, 8, 14), bandMat);
      tie.position.set(0, 0.118 * sy, -0.068 * sz);
      tie.rotation.x = Math.PI * 0.42;
      enableShadows(tie, true, true);
      hairGroup.add(tie);
      // Unmistakable topknot bun perched high on back-crown
      addBlob(0.048, 0, 0.145, -0.082, 0.98, 0.94, 1.05, hairMat);
      addBlob(0.034, 0, 0.162, -0.094, 0.92, 0.85, 0.95, hairMat);
      break;
    }

    case 'curly_voluminous': {
      // Salah: rich voluminous multi-cluster tight curly dome
      addBaseCap(1.07, 0.016, -0.014, Math.PI * 0.64);
      const curlOffsets: readonly [number, number, number, number][] = [
        [0, 0.118, 0.015, 0.052],
        [0.056, 0.105, 0.025, 0.048],
        [-0.056, 0.105, 0.025, 0.048],
        [0.0, 0.108, 0.068, 0.046],
        [0.05, 0.095, 0.065, 0.043],
        [-0.05, 0.095, 0.065, 0.043],
        [0.095, 0.068, 0.01, 0.046],
        [-0.095, 0.068, 0.01, 0.046],
        [0.092, 0.062, -0.048, 0.047],
        [-0.092, 0.062, -0.048, 0.047],
        [0.052, 0.102, -0.045, 0.05],
        [-0.052, 0.102, -0.045, 0.05],
        [0, 0.112, -0.058, 0.052],
        [0.078, 0.025, -0.082, 0.046],
        [-0.078, 0.025, -0.082, 0.046],
        [0, 0.048, -0.106, 0.052],
        [0.042, 0.058, -0.098, 0.048],
        [-0.042, 0.058, -0.098, 0.048],
        [0.098, 0.022, -0.028, 0.04],
        [-0.098, 0.022, -0.028, 0.04],
        [0, 0.008, -0.105, 0.042],
      ];
      for (const [cx, cy, cz, cr] of curlOffsets) {
        addBlob(cr, cx, cy, cz, 1.02, 0.96, 1.02, hairMat);
      }
      break;
    }

    case 'curly_highlighted': {
      // Yamal: tight faded sides + dark curly crown + bright blonde-tipped highlight curls on top!
      addBaseCap(1.04, 0.018, -0.012, Math.PI * 0.52);
      const baseCurls: readonly [number, number, number, number][] = [
        [0.068, 0.085, 0.018, 0.04],
        [-0.068, 0.085, 0.018, 0.04],
        [0.07, 0.075, -0.042, 0.041],
        [-0.07, 0.075, -0.042, 0.041],
        [0, 0.08, -0.082, 0.044],
        [0.045, 0.065, -0.082, 0.039],
        [-0.045, 0.065, -0.082, 0.039],
        [0.038, 0.094, 0.055, 0.036],
        [-0.038, 0.094, 0.055, 0.036],
      ];
      for (const [cx, cy, cz, cr] of baseCurls) {
        addBlob(cr, cx, cy, cz, 1.0, 0.95, 1.0, hairMat);
      }
      // Bright blonde-tipped highlight curl clusters across top & front crown
      const tipCurls: readonly [number, number, number, number][] = [
        [0, 0.122, 0.035, 0.039],
        [0.046, 0.115, 0.048, 0.035],
        [-0.046, 0.115, 0.048, 0.035],
        [0.012, 0.112, 0.08, 0.034],
        [-0.028, 0.108, 0.078, 0.032],
        [0.054, 0.112, -0.01, 0.037],
        [-0.054, 0.112, -0.01, 0.037],
        [0, 0.124, -0.025, 0.04],
        [0.035, 0.106, -0.06, 0.035],
        [-0.035, 0.106, -0.06, 0.035],
      ];
      for (const [cx, cy, cz, cr] of tipCurls) {
        addBlob(cr, cx, cy, cz, 1.02, 0.92, 1.02, highlightMat);
      }
      break;
    }

    case 'buzz': {
      // Mbappé: ultra-clean close-cropped buzz following skull contour with crisp hairline
      addBaseCap(1.032, 0.014, -0.008, Math.PI * 0.56);
      // Subtle crisp forehead hairline cap
      addBlob(0.086, 0, 0.052, 0.024, 1.12, 0.52, 0.95, hairMat, -0.18);
      break;
    }

    case 'high_fade': {
      // Bellingham, Saka, Saliba: clean high-faded sides + textured flat-rounded curly top plateau
      addBaseCap(1.035, 0.024, -0.012, Math.PI * 0.45);
      // Sculpted elevated top plateau
      const plateau = new THREE.Mesh(
        new THREE.CylinderGeometry(0.082, 0.094, 0.046, 16),
        hairMat
      );
      plateau.position.set(0, 0.102 * sy, -0.002 * sz);
      plateau.scale.set(sx * 1.02, sy, sz * 1.14);
      enableShadows(plateau, true, true);
      hairGroup.add(plateau);

      // Textured curly crown bumps along the top edge
      const bumps: readonly [number, number, number, number][] = [
        [0, 0.118, 0.048, 0.032],
        [0.046, 0.116, 0.04, 0.03],
        [-0.046, 0.116, 0.04, 0.03],
        [0.058, 0.112, -0.01, 0.032],
        [-0.058, 0.112, -0.01, 0.032],
        [0, 0.122, -0.005, 0.036],
        [0.042, 0.11, -0.058, 0.031],
        [-0.042, 0.11, -0.058, 0.031],
        [0, 0.112, -0.068, 0.033],
      ];
      for (const [cx, cy, cz, cr] of bumps) {
        addBlob(cr, cx, cy, cz, 1.0, 0.78, 1.0, hairMat);
      }
      break;
    }

    case 'short_twists': {
      // Vinícius Jr: faded sides + distinct multi-strand textured twists fanning over crown
      addBaseCap(1.04, 0.022, -0.01, Math.PI * 0.47);
      const twistGeo = new THREE.CapsuleGeometry(0.016, 0.042, 5, 8);
      const twists: readonly [number, number, number, number, number][] = [
        [0, 0.126, 0.055, 0.55, 0],
        [0.034, 0.122, 0.052, 0.52, -0.22],
        [-0.034, 0.122, 0.052, 0.52, 0.22],
        [0.064, 0.106, 0.034, 0.35, -0.58],
        [-0.064, 0.106, 0.034, 0.35, 0.58],
        [0, 0.132, 0.012, 0.18, 0.08],
        [0.042, 0.126, 0.008, 0.15, -0.32],
        [-0.042, 0.126, 0.008, 0.15, 0.32],
        [0.072, 0.098, -0.018, -0.05, -0.7],
        [-0.072, 0.098, -0.018, -0.05, 0.7],
        [0, 0.128, -0.036, -0.35, 0],
        [0.04, 0.118, -0.046, -0.38, -0.3],
        [-0.04, 0.118, -0.046, -0.38, 0.3],
        [0.062, 0.088, -0.068, -0.55, -0.45],
        [-0.062, 0.088, -0.068, -0.55, 0.45],
        [0, 0.102, -0.084, -0.68, 0],
        [0.022, 0.114, 0.078, 0.75, -0.14],
        [-0.022, 0.114, 0.078, 0.75, 0.14],
      ];
      for (const [tx, ty, tz, rx, rz] of twists) {
        const strand = new THREE.Mesh(twistGeo, hairMat);
        strand.position.set(tx * sx, ty * sy, tz * sz);
        strand.rotation.set(rx, 0, rz);
        enableShadows(strand, true, true);
        hairGroup.add(strand);
      }
      break;
    }

    case 'slick_undercut': {
      // Ronaldo, Lewandowski, Hakimi: clean faded sides + sculpted high swept-back/side quiff
      addBaseCap(1.035, 0.02, -0.01, Math.PI * 0.48);
      // Prominent front-to-back swept quiff crest
      addBlob(0.068, -0.01, 0.104, 0.048, 1.15, 0.62, 1.22, hairMat, -0.32, 0.1, -0.08);
      addBlob(0.076, -0.005, 0.106, -0.012, 1.12, 0.6, 1.38, hairMat, -0.12, 0.06, -0.06);
      // Sleek swept side wave on the heavy side
      addBlob(0.05, 0.054, 0.094, 0.02, 0.85, 0.56, 1.4, hairMat, -0.15, -0.15, -0.22);
      // Back taper crown
      addBlob(0.066, 0, 0.074, -0.072, 1.05, 0.68, 0.95, hairMat, 0.25);
      break;
    }

    case 'classic_part': {
      // Messi, Kane, De Bruyne, Rodri, Courtois: layered parted cap + side volume & natural fringe
      addBaseCap(1.06, 0.016, -0.014, Math.PI * 0.63);
      // Fuller side-parted top volume (parted slightly left-to-right)
      addBlob(0.076, -0.022, 0.088, 0.022, 1.2, 0.64, 1.24, hairMat, -0.14, 0.08, 0.12);
      // Swept fringe across forehead
      addBlob(0.056, -0.036, 0.074, 0.068, 1.25, 0.48, 0.78, highlightMat, -0.25, 0.22, 0.16);
      // Secondary side volume above ears
      addBlob(0.05, 0.076, 0.044, -0.008, 0.75, 0.88, 1.32, hairMat);
      addBlob(0.052, -0.078, 0.046, -0.008, 0.78, 0.9, 1.32, hairMat);
      // Full nape back coverage
      addBlob(0.072, 0, 0.024, -0.082, 1.18, 0.9, 0.78, hairMat);
      break;
    }

    case 'swept_full': {
      // Alisson: thicker, fuller swept-back hair volume sweeping over ears and nape
      addBaseCap(1.085, 0.016, -0.016, Math.PI * 0.67);
      // Thick sweeping crown waves
      addBlob(0.084, 0, 0.098, 0.024, 1.25, 0.68, 1.28, hairMat, -0.22);
      addBlob(0.084, 0, 0.096, -0.038, 1.22, 0.72, 1.25, hairMat, 0.12);
      // Lush side-swept waves covering upper ears
      addBlob(0.058, 0.084, 0.042, -0.018, 0.82, 1.05, 1.42, hairMat, 0.12, -0.15);
      addBlob(0.058, -0.084, 0.042, -0.018, 0.82, 1.05, 1.42, hairMat, 0.12, 0.15);
      // Full nape back locks
      addBlob(0.082, 0, 0.012, -0.09, 1.18, 1.05, 0.85, hairMat);
      break;
    }
  }

  return hairGroup;
}

/**
 * Builds distinct facial hair geometry for all 5 FacialHair variants.
 */
function buildFacialHair(
  style: FacialHair,
  headDims: HeadDimensions,
  beardColor: string,
  skinColor: string
): THREE.Group | null {
  if (style === 'none') return null;

  const group = new THREE.Group();
  const { sx, sy, sz, jawScale } = headDims;

  if (style === 'stubble') {
    // Soft blended skin-to-beard stubble contour hugging chin and lower jaw
    const stubbleColor = new THREE.Color(skinColor).lerp(new THREE.Color(beardColor), 0.36);
    const stubbleMat = new THREE.MeshStandardMaterial({
      color: stubbleColor,
      roughness: 0.92,
      metalness: 0.0,
    });
    const jawWrap = new THREE.Mesh(
      new THREE.SphereGeometry(
        0.088,
        14,
        10,
        -Math.PI * 0.08,
        Math.PI * 1.16,
        Math.PI * 0.48,
        Math.PI * 0.5
      ),
      stubbleMat
    );
    jawWrap.position.set(0, -0.022 * sy, 0.022 * sz);
    jawWrap.scale.set(0.95 * sx * jawScale, 0.98 * sy, 0.94 * sz);
    group.add(jawWrap);
    return group;
  }

  const beardMat = new THREE.MeshStandardMaterial({
    color: beardColor,
    roughness: 0.88,
    metalness: 0.02,
  });

  if (style === 'goatee') {
    // Clean chin beard + connected mustache (Van Dijk)
    const chin = new THREE.Mesh(new THREE.SphereGeometry(0.044, 12, 10), beardMat);
    chin.position.set(0, -0.082 * sy, 0.072 * sz);
    chin.scale.set(1.05 * sx * jawScale, 0.82 * sy, 0.88 * sz);
    enableShadows(chin, true, true);
    group.add(chin);

    const stache = new THREE.Mesh(new THREE.CapsuleGeometry(0.011, 0.038, 6, 8), beardMat);
    stache.position.set(0, -0.042 * sy, 0.104 * sz);
    stache.rotation.z = Math.PI * 0.5;
    group.add(stache);
    return group;
  }

  if (style === 'short_beard') {
    // Neat sculpted beard framing cheeks, jaw, chin, and trim mustache (Messi, Hakimi)
    const jawBeard = new THREE.Mesh(
      new THREE.SphereGeometry(0.092, 16, 12, -Math.PI * 0.12, Math.PI * 1.24, Math.PI * 0.44, Math.PI * 0.54),
      beardMat
    );
    jawBeard.position.set(0, -0.025 * sy, 0.02 * sz);
    jawBeard.scale.set(0.97 * sx * jawScale, 1.02 * sy, 0.96 * sz);
    enableShadows(jawBeard, true, true);
    group.add(jawBeard);

    const chinCap = new THREE.Mesh(new THREE.SphereGeometry(0.056, 12, 10), beardMat);
    chinCap.position.set(0, -0.082 * sy, 0.062 * sz);
    chinCap.scale.set(1.15 * sx * jawScale, 0.78 * sy, 0.92 * sz);
    enableShadows(chinCap, true, true);
    group.add(chinCap);

    const stache = new THREE.Mesh(new THREE.CapsuleGeometry(0.012, 0.046, 6, 8), beardMat);
    stache.position.set(0, -0.04 * sy, 0.104 * sz);
    stache.rotation.z = Math.PI * 0.5;
    group.add(stache);
    return group;
  }

  // 'full_beard' (Salah, Alisson): rich thick sculpted beard wrapping jaw, cheeks, and full chin
  const mainBeard = new THREE.Mesh(
    new THREE.SphereGeometry(0.099, 16, 12, -Math.PI * 0.15, Math.PI * 1.3, Math.PI * 0.4, Math.PI * 0.58),
    beardMat
  );
  mainBeard.position.set(0, -0.028 * sy, 0.024 * sz);
  mainBeard.scale.set(1.01 * sx * jawScale, 1.08 * sy, 1.0 * sz);
  enableShadows(mainBeard, true, true);
  group.add(mainBeard);

  const fullChin = new THREE.Mesh(new THREE.SphereGeometry(0.068, 14, 12), beardMat);
  fullChin.position.set(0, -0.092 * sy, 0.064 * sz);
  fullChin.scale.set(1.16 * sx * jawScale, 0.92 * sy, 0.98 * sz);
  enableShadows(fullChin, true, true);
  group.add(fullChin);

  const cheekLeft = new THREE.Mesh(new THREE.SphereGeometry(0.048, 10, 8), beardMat);
  cheekLeft.position.set(0.064 * sx, -0.052 * sy, 0.052 * sz);
  cheekLeft.scale.set(0.75, 1.1, 0.95);
  group.add(cheekLeft);

  const cheekRight = cheekLeft.clone();
  cheekRight.position.x = -0.064 * sx;
  group.add(cheekRight);

  const fullStache = new THREE.Mesh(new THREE.CapsuleGeometry(0.015, 0.052, 6, 8), beardMat);
  fullStache.position.set(0, -0.039 * sy, 0.108 * sz);
  fullStache.rotation.z = Math.PI * 0.5;
  group.add(fullStache);

  return group;
}

/**
 * Builds a complete, articulated, high-craft 3D footballer rig facing +Z.
 * Ground contact is at local y = 0; scaled uniformly by profile.appearance.heightCm / 182.
 */
export function createFootballerRig(
  profile: FootballerProfile,
  kit: KitTheme,
  isGoalkeeper: boolean
): CharacterRig {
  const { appearance } = profile;
  const heightScale = appearance.heightCm / 182;
  const buildDims = BUILD_PROPORTIONS[appearance.build];
  const headDims = HEAD_SHAPES[appearance.headShape];

  const primaryJerseyColor = isGoalkeeper ? kit.gkPrimary : kit.primary;
  const secondaryJerseyColor = isGoalkeeper ? kit.gkSecondary : kit.secondary;
  const shortsColor = isGoalkeeper ? kit.gkSecondary : kit.shorts;
  const sockColor = isGoalkeeper ? kit.gkPrimary : kit.socks;
  const isLongSleeve = appearance.sleeveStyle === 'long' || isGoalkeeper;

  // Materials
  const jerseyTexture = createJerseyTexture(profile, kit, isGoalkeeper);
  const jerseyTorsoMat = new THREE.MeshStandardMaterial({
    map: jerseyTexture,
    roughness: 0.72,
    metalness: 0.04,
  });
  const jerseySolidMat = new THREE.MeshStandardMaterial({
    color: primaryJerseyColor,
    roughness: 0.72,
    metalness: 0.04,
  });
  const jerseyAccentMat = new THREE.MeshStandardMaterial({
    color: secondaryJerseyColor,
    roughness: 0.65,
    metalness: 0.06,
  });
  const shortsMat = new THREE.MeshStandardMaterial({
    color: shortsColor,
    roughness: 0.76,
    metalness: 0.03,
  });
  const sockMat = new THREE.MeshStandardMaterial({
    color: sockColor,
    roughness: 0.8,
    metalness: 0.02,
  });
  const skinMat = new THREE.MeshStandardMaterial({
    color: appearance.skinTone,
    roughness: 0.62,
    metalness: 0.02,
  });
  const lipMat = new THREE.MeshStandardMaterial({
    color: adjustColor(appearance.skinTone, 0.76),
    roughness: 0.68,
    metalness: 0.0,
  });
  const hairMat = new THREE.MeshStandardMaterial({
    color: appearance.hairColor,
    roughness: 0.82,
    metalness: 0.04,
  });
  const highlightMat = new THREE.MeshStandardMaterial({
    color: appearance.hairHighlight ?? adjustColor(appearance.hairColor, 1.15),
    roughness: 0.78,
    metalness: 0.05,
  });
  const bandMat = new THREE.MeshStandardMaterial({
    color: 0x18181b,
    roughness: 0.7,
    metalness: 0.05,
  });
  const bootMat = new THREE.MeshStandardMaterial({
    color: appearance.bootColor,
    roughness: 0.34,
    metalness: 0.16,
  });
  const bootAccentMat = new THREE.MeshStandardMaterial({
    color: appearance.bootAccent,
    roughness: 0.32,
    metalness: 0.2,
  });
  const soleMat = new THREE.MeshStandardMaterial({
    color: 0x14171c,
    roughness: 0.65,
    metalness: 0.15,
  });
  const glovePalmMat = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    roughness: 0.55,
    metalness: 0.04,
  });
  const gloveBackMat = new THREE.MeshStandardMaterial({
    color: secondaryJerseyColor,
    roughness: 0.45,
    metalness: 0.08,
  });

  // Root & Hierarchy
  const root = new THREE.Group();
  root.scale.setScalar(heightScale);

  // Soft ground contact shadow disc (stays flat on turf at y = 0.025)
  const shadowTexture = createShadowBlobTexture();
  const shadowGeo = new THREE.CircleGeometry(0.47 * buildDims.width, 20);
  const shadowMat = new THREE.MeshBasicMaterial({
    map: shadowTexture,
    transparent: true,
    depthWrite: false,
    opacity: 0.85,
  });
  const shadowBlob = new THREE.Mesh(shadowGeo, shadowMat);
  shadowBlob.rotation.x = -Math.PI * 0.5;
  shadowBlob.position.y = 0.025;
  shadowBlob.renderOrder = 1;
  root.add(shadowBlob);

  // Pelvis (center of mass & hip anchor at base y = 0.94)
  const pelvis = new THREE.Group();
  pelvis.position.set(0, 0.94, 0);
  root.add(pelvis);

  const pelvisMesh = enableShadows(
    new THREE.Mesh(
      new THREE.CylinderGeometry(
        0.148 * buildDims.width,
        0.158 * buildDims.width,
        0.17,
        18
      ),
      shortsMat
    )
  );
  pelvisMesh.scale.set(1.08, 1.0, 0.78 * buildDims.depth);
  pelvisMesh.position.y = 0.015;
  pelvis.add(pelvisMesh);

  // Athletic shorts waistband trim
  const waistband = enableShadows(
    new THREE.Mesh(
      new THREE.CylinderGeometry(
        0.151 * buildDims.width,
        0.15 * buildDims.width,
        0.028,
        18
      ),
      jerseyAccentMat
    )
  );
  waistband.scale.set(1.08, 1.0, 0.79 * buildDims.depth);
  waistband.position.y = 0.095;
  pelvis.add(waistband);

  // ================= TORSO =================
  const torso = new THREE.Group();
  torso.position.set(0, 0.08, 0);
  pelvis.add(torso);

  const torsoGeo = createSculptedTorsoGeometry(buildDims.width, buildDims.depth);
  const torsoMesh = enableShadows(new THREE.Mesh(torsoGeo, jerseyTorsoMat));
  torsoMesh.position.y = 0.23;
  torso.add(torsoMesh);

  // Smooth athletic trapezius / upper shoulder yoke cap
  const yokeCap = enableShadows(
    new THREE.Mesh(new THREE.SphereGeometry(0.185, 18, 12), jerseySolidMat)
  );
  yokeCap.position.set(0, 0.43, 0);
  yokeCap.scale.set(1.16 * buildDims.width, 0.36, 0.74 * buildDims.depth);
  torso.add(yokeCap);

  // Sculpted athletic collar ring
  const collarRing = enableShadows(
    new THREE.Mesh(new THREE.TorusGeometry(0.072, 0.016, 10, 18), jerseyAccentMat)
  );
  collarRing.rotation.x = Math.PI * 0.5 + 0.14;
  collarRing.position.set(0, 0.478, 0.012);
  torso.add(collarRing);

  // ================= HEAD & FACE =================
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.485, 0.008);
  torso.add(headGroup);

  // Muscular neck
  const neck = enableShadows(
    new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.06, 0.105, 14), skinMat)
  );
  neck.position.set(0, 0.048, -0.005);
  headGroup.add(neck);

  // Cranium + sculpted jaw container centered at y = 0.192
  const headPivot = new THREE.Group();
  headPivot.position.set(0, 0.192, 0.006);
  headGroup.add(headPivot);

  const cranium = enableShadows(
    new THREE.Mesh(new THREE.SphereGeometry(0.118, 22, 18), skinMat)
  );
  cranium.scale.set(headDims.sx, headDims.sy, headDims.sz);
  headPivot.add(cranium);

  // Sculpted athletic jaw / chin volume
  const jaw = enableShadows(
    new THREE.Mesh(new THREE.SphereGeometry(0.082, 16, 12), skinMat)
  );
  jaw.position.set(0, -0.044 * headDims.sy, 0.022 * headDims.sz);
  jaw.scale.set(0.92 * headDims.sx * headDims.jawScale, 0.88 * headDims.sy, 0.92 * headDims.sz);
  headPivot.add(jaw);

  // Subtle nose bridge + tip
  const noseBridge = enableShadows(
    new THREE.Mesh(new THREE.CapsuleGeometry(0.012, 0.026, 6, 8), skinMat)
  );
  noseBridge.position.set(0, -0.008 * headDims.sy, 0.112 * headDims.sz);
  noseBridge.rotation.x = -0.24;
  headPivot.add(noseBridge);

  const noseTip = new THREE.Mesh(new THREE.SphereGeometry(0.013, 8, 8), skinMat);
  noseTip.position.set(0, -0.022 * headDims.sy, 0.12 * headDims.sz);
  noseTip.scale.set(1.15, 0.85, 0.9);
  headPivot.add(noseTip);

  // Ears
  const earGeo = new THREE.SphereGeometry(0.022, 10, 8);
  const leftEar = enableShadows(new THREE.Mesh(earGeo, skinMat));
  leftEar.position.set(0.112 * headDims.sx, -0.006 * headDims.sy, -0.004 * headDims.sz);
  leftEar.scale.set(0.42, 1.15, 0.72);
  leftEar.rotation.y = -0.22;
  headPivot.add(leftEar);

  const rightEar = enableShadows(new THREE.Mesh(earGeo, skinMat));
  rightEar.position.set(-0.112 * headDims.sx, -0.006 * headDims.sy, -0.004 * headDims.sz);
  rightEar.scale.set(0.42, 1.15, 0.72);
  rightEar.rotation.y = 0.22;
  headPivot.add(rightEar);

  // Stylized expressive eyes (sclera + dark iris + bright specular highlight)
  const scleraMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.25 });
  const irisMat = new THREE.MeshStandardMaterial({ color: 0x161210, roughness: 0.15 });
  const catchlightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const browMat = new THREE.MeshStandardMaterial({
    color: adjustColor(appearance.hairColor, 0.8),
    roughness: 0.85,
  });

  const eyeSpacingX = 0.041 * headDims.sx;
  const eyeY = 0.012 * headDims.sy;
  const eyeZ = 0.104 * headDims.sz;

  for (const side of [-1, 1] as const) {
    const sclera = new THREE.Mesh(new THREE.SphereGeometry(0.0155, 10, 8), scleraMat);
    sclera.position.set(side * eyeSpacingX, eyeY, eyeZ);
    sclera.scale.set(1.18, 0.84, 0.55);
    headPivot.add(sclera);

    const iris = new THREE.Mesh(new THREE.SphereGeometry(0.0095, 10, 8), irisMat);
    iris.position.set(side * eyeSpacingX, eyeY, eyeZ + 0.0065);
    iris.scale.set(1.0, 1.0, 0.5);
    headPivot.add(iris);

    const glint = new THREE.Mesh(new THREE.SphereGeometry(0.003, 6, 6), catchlightMat);
    glint.position.set(side * eyeSpacingX + 0.003, eyeY + 0.003, eyeZ + 0.01);
    headPivot.add(glint);

    // Sculpted eyebrows scaled by appearance.browThickness
    const brow = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.0052 * appearance.browThickness, 0.025, 5, 6),
      browMat
    );
    brow.position.set(side * eyeSpacingX, eyeY + 0.022 * headDims.sy, eyeZ + 0.004);
    brow.rotation.set(0, side * 0.18, Math.PI * 0.5 - side * 0.08);
    headPivot.add(brow);
  }

  // Subtle determined athletic mouth
  const mouth = new THREE.Mesh(new THREE.CapsuleGeometry(0.005, 0.026, 5, 6), lipMat);
  mouth.position.set(0, -0.054 * headDims.sy, 0.098 * headDims.sz);
  mouth.rotation.z = Math.PI * 0.5;
  mouth.scale.set(1, 1, 0.65);
  headPivot.add(mouth);

  // Distinct sculpted hairstyle
  const hair = buildHair(appearance.hairStyle, headDims, hairMat, highlightMat, bandMat);
  headPivot.add(hair);

  // Distinct sculpted facial hair
  const facialHair = buildFacialHair(
    appearance.facialHair,
    headDims,
    appearance.facialHairColor ?? appearance.hairColor,
    appearance.skinTone
  );
  if (facialHair) {
    headPivot.add(facialHair);
  }

  // ================= ARMS =================
  const shoulderOffsetX = 0.228 * buildDims.width;
  const shoulderY = 0.412;

  const buildArm = (sideSign: 1 | -1): { shoulder: THREE.Group; elbow: THREE.Group } => {
    const shoulder = new THREE.Group();
    shoulder.position.set(sideSign * shoulderOffsetX, shoulderY, 0);
    torso.add(shoulder);

    // Deltoid shoulder cap
    const deltoid = enableShadows(
      new THREE.Mesh(new THREE.SphereGeometry(0.064 * buildDims.limb, 14, 12), jerseySolidMat)
    );
    deltoid.scale.set(0.95, 1.02, 0.92);
    shoulder.add(deltoid);

    // Upper sleeve
    const sleeveLen = isLongSleeve ? 0.25 : 0.145;
    const sleeveMesh = enableShadows(
      new THREE.Mesh(
        new THREE.CylinderGeometry(
          0.056 * buildDims.limb,
          0.048 * buildDims.limb,
          sleeveLen,
          14
        ),
        jerseySolidMat
      )
    );
    sleeveMesh.position.y = -sleeveLen * 0.5 - 0.015;
    shoulder.add(sleeveMesh);

    if (!isLongSleeve) {
      // Short sleeve accent cuff band
      const cuff = enableShadows(
        new THREE.Mesh(
          new THREE.CylinderGeometry(
            0.05 * buildDims.limb,
            0.05 * buildDims.limb,
            0.022,
            14
          ),
          jerseyAccentMat
        )
      );
      cuff.position.y = -sleeveLen - 0.015;
      shoulder.add(cuff);

      // Bare athletic bicep/tricep below short sleeve
      const upperArmSkin = enableShadows(
        new THREE.Mesh(
          new THREE.CylinderGeometry(
            0.045 * buildDims.limb,
            0.04 * buildDims.limb,
            0.125,
            12
          ),
          skinMat
        )
      );
      upperArmSkin.position.y = -0.21;
      shoulder.add(upperArmSkin);
    }

    // Elbow joint
    const elbow = new THREE.Group();
    elbow.position.set(0, -0.27, 0);
    shoulder.add(elbow);

    const elbowCap = enableShadows(
      new THREE.Mesh(
        new THREE.SphereGeometry(0.041 * buildDims.limb, 10, 10),
        isLongSleeve ? jerseySolidMat : skinMat
      )
    );
    elbow.add(elbowCap);

    // Forearm
    const forearmMat = isLongSleeve ? jerseySolidMat : skinMat;
    const forearm = enableShadows(
      new THREE.Mesh(
        new THREE.CylinderGeometry(
          0.041 * buildDims.limb,
          0.032 * buildDims.limb,
          0.235,
          12
        ),
        forearmMat
      )
    );
    forearm.position.y = -0.12;
    elbow.add(forearm);

    if (isLongSleeve) {
      const wristCuff = enableShadows(
        new THREE.Mesh(
          new THREE.CylinderGeometry(
            0.036 * buildDims.limb,
            0.035 * buildDims.limb,
            0.026,
            12
          ),
          jerseyAccentMat
        )
      );
      wristCuff.position.y = -0.23;
      elbow.add(wristCuff);
    }

    // Hand or Goalkeeper Glove
    if (isGoalkeeper) {
      const gloveGroup = new THREE.Group();
      gloveGroup.position.set(0, -0.275, 0.008);
      elbow.add(gloveGroup);

      // Wrist strap
      const strap = enableShadows(
        new THREE.Mesh(new THREE.CylinderGeometry(0.039, 0.037, 0.035, 12), gloveBackMat)
      );
      strap.position.y = 0.04;
      gloveGroup.add(strap);

      // Padded palm + backhand
      const palm = enableShadows(
        new THREE.Mesh(new THREE.CapsuleGeometry(0.036, 0.055, 8, 12), glovePalmMat)
      );
      palm.scale.set(0.68, 1.0, 1.15);
      gloveGroup.add(palm);

      const backhand = enableShadows(
        new THREE.Mesh(new THREE.CapsuleGeometry(0.034, 0.05, 8, 10), gloveBackMat)
      );
      backhand.position.set(sideSign * 0.009, 0.002, -0.004);
      backhand.scale.set(0.6, 0.96, 1.08);
      gloveGroup.add(backhand);

      // Padded GK thumb
      const thumb = enableShadows(
        new THREE.Mesh(new THREE.CapsuleGeometry(0.015, 0.03, 6, 8), glovePalmMat)
      );
      thumb.position.set(-sideSign * 0.016, 0.004, 0.036);
      thumb.rotation.set(0.65, 0, sideSign * 0.35);
      gloveGroup.add(thumb);
    } else {
      const hand = enableShadows(
        new THREE.Mesh(new THREE.CapsuleGeometry(0.026 * buildDims.limb, 0.044, 6, 10), skinMat)
      );
      hand.position.set(0, -0.272, 0.004);
      hand.scale.set(0.68, 1.0, 1.08);
      elbow.add(hand);

      const thumb = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.01 * buildDims.limb, 0.02, 5, 6),
        skinMat
      );
      thumb.position.set(-sideSign * 0.012, -0.262, 0.024);
      thumb.rotation.x = 0.55;
      elbow.add(thumb);
    }

    return { shoulder, elbow };
  };

  const leftArm = buildArm(1);
  const rightArm = buildArm(-1);

  // ================= LEGS & CLEATS =================
  const hipOffsetX = 0.102 * buildDims.width;
  const highSock = appearance.sockHeight === 'high';

  const buildLeg = (
    sideSign: 1 | -1
  ): { hip: THREE.Group; knee: THREE.Group; ankle: THREE.Group } => {
    const hip = new THREE.Group();
    hip.position.set(sideSign * hipOffsetX, 0, 0);
    pelvis.add(hip);

    // Smooth hip socket blend
    const hipBall = enableShadows(
      new THREE.Mesh(new THREE.SphereGeometry(0.088 * buildDims.limb, 14, 12), shortsMat)
    );
    hipBall.scale.set(0.96, 1.0, 0.94);
    hip.add(hipBall);

    // Shorts leg covering upper thigh
    const shortsLeg = enableShadows(
      new THREE.Mesh(
        new THREE.CylinderGeometry(
          0.088 * buildDims.limb,
          0.076 * buildDims.limb,
          0.22,
          14
        ),
        shortsMat
      )
    );
    shortsLeg.position.y = -0.115;
    hip.add(shortsLeg);

    // Subtle side stripe on outer shorts leg
    const shortsStripe = new THREE.Mesh(
      new THREE.BoxGeometry(0.012, 0.21, 0.022),
      jerseyAccentMat
    );
    shortsStripe.position.set(sideSign * 0.08 * buildDims.limb, -0.115, 0);
    hip.add(shortsStripe);

    // Muscular bare lower thigh
    const thighSkin = enableShadows(
      new THREE.Mesh(
        new THREE.CylinderGeometry(
          0.068 * buildDims.limb,
          0.054 * buildDims.limb,
          0.21,
          14
        ),
        skinMat
      )
    );
    thighSkin.position.y = -0.315;
    hip.add(thighSkin);

    // Knee joint
    const knee = new THREE.Group();
    knee.position.set(0, -0.42, 0);
    hip.add(knee);

    const kneeCap = enableShadows(
      new THREE.Mesh(
        new THREE.SphereGeometry(0.054 * buildDims.limb, 12, 10),
        highSock ? sockMat : skinMat
      )
    );
    knee.add(kneeCap);

    // Exposed upper shin (shorter for high socks, taller for normal socks)
    const bareShinLen = highSock ? 0.04 : 0.1;
    const bareShin = enableShadows(
      new THREE.Mesh(
        new THREE.CylinderGeometry(
          0.052 * buildDims.limb,
          0.054 * buildDims.limb,
          bareShinLen,
          12
        ),
        skinMat
      )
    );
    bareShin.position.y = -bareShinLen * 0.5;
    knee.add(bareShin);

    // Football sock covering calf + shin guard contour
    const sockLen = 0.425 - bareShinLen;
    const sockMesh = enableShadows(
      new THREE.Mesh(
        new THREE.CylinderGeometry(
          0.056 * buildDims.limb,
          0.039 * buildDims.limb,
          sockLen,
          14
        ),
        sockMat
      )
    );
    sockMesh.position.y = -bareShinLen - sockLen * 0.5;
    knee.add(sockMesh);

    // Subtle sculpted shin-guard bulge on front (+Z)
    const shinGuard = enableShadows(
      new THREE.Mesh(
        new THREE.CapsuleGeometry(0.026 * buildDims.limb, 0.13, 6, 8),
        sockMat
      )
    );
    shinGuard.position.set(0, -0.23, 0.028 * buildDims.limb);
    shinGuard.scale.set(1.05, 1.0, 0.55);
    knee.add(shinGuard);

    // Iconic sock top stripes
    const sockBand1 = enableShadows(
      new THREE.Mesh(
        new THREE.CylinderGeometry(
          0.0575 * buildDims.limb,
          0.057 * buildDims.limb,
          0.022,
          14
        ),
        jerseyAccentMat
      )
    );
    sockBand1.position.y = -bareShinLen - 0.025;
    knee.add(sockBand1);

    const sockBand2 = enableShadows(
      new THREE.Mesh(
        new THREE.CylinderGeometry(
          0.0565 * buildDims.limb,
          0.056 * buildDims.limb,
          0.012,
          14
        ),
        jerseyAccentMat
      )
    );
    sockBand2.position.y = -bareShinLen - 0.052;
    knee.add(sockBand2);

    // Ankle joint (world y = 0.095 -> boot sole rests cleanly at y = 0)
    const ankle = new THREE.Group();
    ankle.position.set(0, -0.425, 0);
    knee.add(ankle);

    // Boot collar wrapping ankle
    const bootCollar = enableShadows(
      new THREE.Mesh(new THREE.CylinderGeometry(0.041, 0.044, 0.04, 12), bootAccentMat)
    );
    bootCollar.position.set(0, -0.008, -0.005);
    ankle.add(bootCollar);

    // Sculpted aerodynamic football boot upper pointing along +Z
    const bootUpper = enableShadows(
      new THREE.Mesh(new THREE.CapsuleGeometry(0.041, 0.145, 8, 14), bootMat)
    );
    bootUpper.rotation.x = Math.PI * 0.5;
    bootUpper.position.set(0, -0.048, 0.055);
    bootUpper.scale.set(1.05, 1.0, 0.86);
    ankle.add(bootUpper);

    // Sleek tapered toe box
    const toeBox = enableShadows(
      new THREE.Mesh(new THREE.SphereGeometry(0.042, 12, 10), bootMat)
    );
    toeBox.position.set(0, -0.056, 0.132);
    toeBox.scale.set(1.02, 0.64, 1.25);
    ankle.add(toeBox);

    // Contrasting boot side accent stripe (outer side)
    const bootStripe = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.011, 0.085, 5, 8),
      bootAccentMat
    );
    bootStripe.rotation.x = Math.PI * 0.5;
    bootStripe.rotation.z = sideSign * 0.12;
    bootStripe.position.set(sideSign * 0.036, -0.046, 0.068);
    ankle.add(bootStripe);

    // Soleplate flush with bottom of boot (y = -0.082 to -0.095)
    const soleplate = enableShadows(
      new THREE.Mesh(new THREE.BoxGeometry(0.082, 0.016, 0.228), soleMat)
    );
    soleplate.position.set(0, -0.082, 0.06);
    ankle.add(soleplate);

    // Visible cleat studs underneath soleplate reaching y = -0.095 (ground y = 0)
    const studGeo = new THREE.CylinderGeometry(0.006, 0.004, 0.012, 6);
    const studPositions: readonly [number, number][] = [
      [-0.026, -0.025],
      [0.026, -0.025],
      [-0.028, 0.075],
      [0.028, 0.075],
      [-0.022, 0.14],
      [0.022, 0.14],
    ];
    for (const [sxPos, szPos] of studPositions) {
      const stud = new THREE.Mesh(studGeo, bootAccentMat);
      stud.position.set(sxPos, -0.09, szPos);
      ankle.add(stud);
    }

    return { hip, knee, ankle };
  };

  const leftLeg = buildLeg(1);
  const rightLeg = buildLeg(-1);

  return {
    root,
    pelvis,
    torso,
    headGroup,
    leftShoulder: leftArm.shoulder,
    leftElbow: leftArm.elbow,
    rightShoulder: rightArm.shoulder,
    rightElbow: rightArm.elbow,
    leftHip: leftLeg.hip,
    leftKnee: leftLeg.knee,
    leftAnkle: leftLeg.ankle,
    rightHip: rightLeg.hip,
    rightKnee: rightLeg.knee,
    rightAnkle: rightLeg.ankle,
    shadowBlob,
    heightScale,
    profile,
  };
}

/**
 * Cleanly disposes all geometries, materials, and textures owned by a CharacterRig.
 */
export function disposeCharacterRig(rig: CharacterRig): void {
  const geometries = new Set<THREE.BufferGeometry>();
  const materials = new Set<THREE.Material>();
  const textures = new Set<THREE.Texture>();

  rig.root.traverse((obj) => {
    if (obj instanceof THREE.Mesh) {
      if (obj.geometry) {
        geometries.add(obj.geometry);
      }
      const matList = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const mat of matList) {
        if (!mat) continue;
        materials.add(mat);
        if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshBasicMaterial) {
          if (mat.map) textures.add(mat.map);
          if (mat.alphaMap) textures.add(mat.alphaMap);
        }
      }
    }
  });

  for (const tex of textures) {
    tex.dispose();
  }
  for (const mat of materials) {
    mat.dispose();
  }
  for (const geo of geometries) {
    geo.dispose();
  }

  rig.root.clear();
}
