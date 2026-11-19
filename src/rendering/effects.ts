import * as THREE from 'three';
import { PITCH } from '../config/constants';
import type { SimBallState, SimPlayerState, TeamSide, Vec3 } from '../types/game';

interface SparkParticle {
  active: boolean;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  age: number;
  life: number;
  baseScale: number;
  gravity: number;
  drag: number;
  color: THREE.Color;
}

interface ConfettiParticle {
  active: boolean;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rx: number;
  ry: number;
  rz: number;
  vrx: number;
  vry: number;
  vrz: number;
  age: number;
  life: number;
  scaleX: number;
  scaleY: number;
  swayPhase: number;
  color: THREE.Color;
}

interface ShockwaveRing {
  mesh: THREE.Mesh;
  material: THREE.MeshBasicMaterial;
  active: boolean;
  age: number;
  life: number;
  maxScale: number;
}

const MAX_SPARK_PARTICLES = 180;
const MAX_CONFETTI_PARTICLES = 240;
const MAX_SHOCKWAVES = 6;
const CHARGE_ARC_SEGMENTS = 40;

/** Creates a crisp procedural radial glow disc texture for under-player indicator aura */
function createGlowDiscTexture(): THREE.CanvasTexture {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Failed to create 2D context for glow disc');
  }

  const grad = ctx.createRadialGradient(size * 0.5, size * 0.5, size * 0.16, size * 0.5, size * 0.5, size * 0.5);
  grad.addColorStop(0.0, 'rgba(255, 255, 255, 0.0)');
  grad.addColorStop(0.55, 'rgba(255, 255, 255, 0.36)');
  grad.addColorStop(0.76, 'rgba(255, 255, 255, 0.16)');
  grad.addColorStop(1.0, 'rgba(255, 255, 255, 0.0)');

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/** Creates a crisp dashed cyan-white ring texture for the aimed pass target teammate */
function createDashedRingTexture(): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Failed to create 2D context for dashed ring');
  }

  const cx = size * 0.5;
  const cy = size * 0.5;
  const radius = size * 0.41;

  // Soft outer glow behind dashes
  ctx.strokeStyle = 'rgba(103, 232, 249, 0.28)';
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.stroke();

  // 12 crisp surgical dashes
  const dashCount = 12;
  const step = (Math.PI * 2) / dashCount;
  ctx.strokeStyle = 'rgba(235, 253, 255, 0.96)';
  ctx.lineWidth = 7.5;
  ctx.lineCap = 'round';
  for (let i = 0; i < dashCount; i++) {
    const start = i * step + 0.08;
    const end = (i + 1) * step - 0.16;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, start, end);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/** Builds a crisp ground directional arrow chevron pointing along local +Z */
function createFacingChevronGeometry(): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  // In XY plane (will rotate -PI/2 on X so +Y becomes -Z, so draw pointing -Y => maps to +Z)
  shape.moveTo(0, -1.14);       // Tip along +Z
  shape.lineTo(0.24, -0.82);    // Right outer wing
  shape.lineTo(0.11, -0.82);    // Right inner notch
  shape.lineTo(0, -0.94);       // Inner center
  shape.lineTo(-0.11, -0.82);   // Left inner notch
  shape.lineTo(-0.24, -0.82);   // Left outer wing
  shape.closePath();

  const geo = new THREE.ShapeGeometry(shape);
  geo.rotateX(-Math.PI * 0.5);
  return geo;
}

/** Builds a sleek minimalist faceted diamond chevron floating above the controlled player */
function createOverheadDiamondGeometry(): THREE.BufferGeometry {
  // Inverted elongated 4-sided diamond prism (sharp point downward toward player's head)
  const topY = 0.24;
  const midY = 0.08;
  const botY = -0.22;
  const w = 0.16;

  const vertices = new Float32Array([
    // Upper 4 faces (from apex topY to mid belt)
    0, topY, 0,  w, midY, 0,  0, midY, w,
    0, topY, 0,  0, midY, w, -w, midY, 0,
    0, topY, 0, -w, midY, 0,  0, midY, -w,
    0, topY, 0,  0, midY, -w,  w, midY, 0,
    // Lower 4 elongated faces (from mid belt down to sharp pointer tip)
    0, botY, 0,  0, midY, w,  w, midY, 0,
    0, botY, 0, -w, midY, 0,  0, midY, w,
    0, botY, 0,  0, midY, -w, -w, midY, 0,
    0, botY, 0,  w, midY, 0,  0, midY, -w,
  ]);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geo.computeVertexNormals();
  return geo;
}

/** Pre-allocated radial arc geometry for zero-GC shot/pass charge feedback */
function createDynamicChargeArcGeometry(): THREE.BufferGeometry {
  const vertCount = (CHARGE_ARC_SEGMENTS + 1) * 2;
  const positions = new Float32Array(vertCount * 3);
  const indices: number[] = [];

  for (let i = 0; i < CHARGE_ARC_SEGMENTS; i++) {
    const a = i * 2;
    const b = a + 1;
    const c = a + 2;
    const d = a + 3;
    indices.push(a, b, c, b, d, c);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setIndex(indices);
  return geo;
}

export class PitchEffectsManager {
  private readonly group: THREE.Group;

  // Controlled player visual rig
  private readonly controlledGroup: THREE.Group;
  private readonly groundRingMesh: THREE.Mesh;
  private readonly groundRingMat: THREE.MeshBasicMaterial;
  private readonly groundGlowMesh: THREE.Mesh;
  private readonly groundGlowMat: THREE.MeshBasicMaterial;
  private readonly facingChevronMesh: THREE.Mesh;
  private readonly facingChevronMat: THREE.MeshBasicMaterial;
  private readonly chargeArcMesh: THREE.Mesh;
  private readonly chargeArcMat: THREE.MeshBasicMaterial;
  private readonly chargeArcPositions: Float32Array;
  private readonly overheadDiamondMesh: THREE.Mesh;
  private readonly overheadDiamondMat: THREE.MeshStandardMaterial;

  // Aimed pass target indicator
  private readonly passTargetGroup: THREE.Group;
  private readonly passTargetRingMesh: THREE.Mesh;
  private readonly passTargetMat: THREE.MeshBasicMaterial;

  // Pooled kick sparks / turf dust (InstancedMesh)
  private readonly sparkInstanced: THREE.InstancedMesh;
  private readonly sparkPool: SparkParticle[] = [];
  private sparkCursor = 0;

  // Pooled stadium goal confetti (InstancedMesh)
  private readonly confettiInstanced: THREE.InstancedMesh;
  private readonly confettiPool: ConfettiParticle[] = [];
  private confettiCursor = 0;

  // Pooled impact shockwave rings for powerful shots
  private readonly shockwaves: ShockwaveRing[] = [];
  private shockwaveCursor = 0;

  // Reusable scratch objects (zero per-frame allocations)
  private readonly dummy = new THREE.Object3D();
  private readonly tmpColor = new THREE.Color();
  private readonly colorEmerald = new THREE.Color('#2ef2a4');
  private readonly colorGold = new THREE.Color('#fde047');
  private readonly colorOrange = new THREE.Color('#fb923c');
  private readonly colorCrimson = new THREE.Color('#ef4444');
  private readonly colorCyan = new THREE.Color('#38bdf8');
  private readonly confettiPalette: readonly THREE.Color[] = [
    new THREE.Color('#facc15'), // Championship gold
    new THREE.Color('#ffffff'), // Pure white
    new THREE.Color('#10b981'), // Emerald
    new THREE.Color('#38bdf8'), // Sky cyan
    new THREE.Color('#fb7185'), // Festive coral
  ];

  constructor(scene: THREE.Scene) {
    this.group = new THREE.Group();
    this.group.name = 'PitchEffects';

    // ------------------------------------------------------------------
    // 1. Controlled Player Ground Ring, Facing Chevron, Charge Arc & Overhead Diamond
    // ------------------------------------------------------------------
    this.controlledGroup = new THREE.Group();
    this.controlledGroup.visible = false;

    const ringGeo = new THREE.RingGeometry(0.56, 0.71, 48);
    ringGeo.rotateX(-Math.PI * 0.5);
    this.groundRingMat = new THREE.MeshBasicMaterial({
      color: '#2ef2a4',
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.groundRingMesh = new THREE.Mesh(ringGeo, this.groundRingMat);
    this.groundRingMesh.position.y = 0.032;
    this.groundRingMesh.renderOrder = 5;
    this.controlledGroup.add(this.groundRingMesh);

    const glowGeo = new THREE.PlaneGeometry(2.05, 2.05);
    glowGeo.rotateX(-Math.PI * 0.5);
    this.groundGlowMat = new THREE.MeshBasicMaterial({
      map: createGlowDiscTexture(),
      color: '#2ef2a4',
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.groundGlowMesh = new THREE.Mesh(glowGeo, this.groundGlowMat);
    this.groundGlowMesh.position.y = 0.026;
    this.groundGlowMesh.renderOrder = 4;
    this.controlledGroup.add(this.groundGlowMesh);

    const chevronGeo = createFacingChevronGeometry();
    this.facingChevronMat = new THREE.MeshBasicMaterial({
      color: '#ffffff',
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.facingChevronMesh = new THREE.Mesh(chevronGeo, this.facingChevronMat);
    this.facingChevronMesh.position.y = 0.036;
    this.facingChevronMesh.renderOrder = 6;
    this.controlledGroup.add(this.facingChevronMesh);

    const chargeGeo = createDynamicChargeArcGeometry();
    this.chargeArcPositions = (chargeGeo.attributes.position as THREE.BufferAttribute).array as Float32Array;
    this.chargeArcMat = new THREE.MeshBasicMaterial({
      color: '#fde047',
      transparent: true,
      opacity: 0.94,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.chargeArcMesh = new THREE.Mesh(chargeGeo, this.chargeArcMat);
    this.chargeArcMesh.position.y = 0.038;
    this.chargeArcMesh.visible = false;
    this.chargeArcMesh.renderOrder = 7;
    this.controlledGroup.add(this.chargeArcMesh);

    const diamondGeo = createOverheadDiamondGeometry();
    this.overheadDiamondMat = new THREE.MeshStandardMaterial({
      color: '#34f5a3',
      emissive: '#16c97f',
      emissiveIntensity: 0.72,
      roughness: 0.22,
      metalness: 0.25,
    });
    this.overheadDiamondMesh = new THREE.Mesh(diamondGeo, this.overheadDiamondMat);
    this.overheadDiamondMesh.position.y = 2.45;
    this.overheadDiamondMesh.renderOrder = 8;
    this.controlledGroup.add(this.overheadDiamondMesh);

    this.group.add(this.controlledGroup);

    // ------------------------------------------------------------------
    // 2. Pass Target Teammate Surgical Dashed Ring
    // ------------------------------------------------------------------
    this.passTargetGroup = new THREE.Group();
    this.passTargetGroup.visible = false;

    const passRingGeo = new THREE.PlaneGeometry(1.75, 1.75);
    passRingGeo.rotateX(-Math.PI * 0.5);
    this.passTargetMat = new THREE.MeshBasicMaterial({
      map: createDashedRingTexture(),
      color: '#b8f4ff',
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });
    this.passTargetRingMesh = new THREE.Mesh(passRingGeo, this.passTargetMat);
    this.passTargetRingMesh.position.y = 0.029;
    this.passTargetRingMesh.renderOrder = 5;
    this.passTargetGroup.add(this.passTargetRingMesh);

    this.group.add(this.passTargetGroup);

    // ------------------------------------------------------------------
    // 3. Kick Dust & Golden Impact Spark Pool (InstancedMesh)
    // ------------------------------------------------------------------
    const sparkGeo = new THREE.OctahedronGeometry(0.085, 0);
    const sparkMat = new THREE.MeshBasicMaterial({
      color: '#ffffff',
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
    });
    this.sparkInstanced = new THREE.InstancedMesh(sparkGeo, sparkMat, MAX_SPARK_PARTICLES);
    this.sparkInstanced.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.sparkInstanced.frustumCulled = false;
    this.sparkInstanced.renderOrder = 6;

    this.dummy.position.set(0, -50, 0);
    this.dummy.scale.set(0, 0, 0);
    this.dummy.updateMatrix();
    const defaultWhite = new THREE.Color('#ffffff');

    for (let i = 0; i < MAX_SPARK_PARTICLES; i++) {
      this.sparkInstanced.setMatrixAt(i, this.dummy.matrix);
      this.sparkInstanced.setColorAt(i, defaultWhite);
      this.sparkPool.push({
        active: false,
        x: 0,
        y: -50,
        z: 0,
        vx: 0,
        vy: 0,
        vz: 0,
        age: 0,
        life: 0.4,
        baseScale: 1,
        gravity: 9.5,
        drag: 3.0,
        color: new THREE.Color('#ffffff'),
      });
    }
    this.sparkInstanced.instanceMatrix.needsUpdate = true;
    if (this.sparkInstanced.instanceColor) {
      this.sparkInstanced.instanceColor.needsUpdate = true;
    }
    this.group.add(this.sparkInstanced);

    // ------------------------------------------------------------------
    // 4. Goal Celebration Stadium Confetti Pool (InstancedMesh)
    // ------------------------------------------------------------------
    const confettiGeo = new THREE.PlaneGeometry(0.18, 0.1);
    const confettiMat = new THREE.MeshBasicMaterial({
      color: '#ffffff',
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.96,
    });
    this.confettiInstanced = new THREE.InstancedMesh(confettiGeo, confettiMat, MAX_CONFETTI_PARTICLES);
    this.confettiInstanced.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.confettiInstanced.frustumCulled = false;
    this.confettiInstanced.renderOrder = 7;

    for (let i = 0; i < MAX_CONFETTI_PARTICLES; i++) {
      this.confettiInstanced.setMatrixAt(i, this.dummy.matrix);
      this.confettiInstanced.setColorAt(i, defaultWhite);
      this.confettiPool.push({
        active: false,
        x: 0,
        y: -50,
        z: 0,
        vx: 0,
        vy: 0,
        vz: 0,
        rx: 0,
        ry: 0,
        rz: 0,
        vrx: 0,
        vry: 0,
        vrz: 0,
        age: 0,
        life: 2.5,
        scaleX: 1,
        scaleY: 1,
        swayPhase: 0,
        color: new THREE.Color('#ffffff'),
      });
    }
    this.confettiInstanced.instanceMatrix.needsUpdate = true;
    if (this.confettiInstanced.instanceColor) {
      this.confettiInstanced.instanceColor.needsUpdate = true;
    }
    this.group.add(this.confettiInstanced);

    // ------------------------------------------------------------------
    // 5. Expanding Ground Shockwave Rings for High-Power Shots
    // ------------------------------------------------------------------
    const shockGeo = new THREE.RingGeometry(0.32, 0.48, 36);
    shockGeo.rotateX(-Math.PI * 0.5);
    for (let i = 0; i < MAX_SHOCKWAVES; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: '#fef08a',
        transparent: true,
        opacity: 0,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(shockGeo, mat);
      mesh.visible = false;
      mesh.renderOrder = 6;
      this.group.add(mesh);
      this.shockwaves.push({
        mesh,
        material: mat,
        active: false,
        age: 0,
        life: 0.34,
        maxScale: 2.4,
      });
    }

    scene.add(this.group);
  }

  /**
   * Updates the active controlled player ring, facing chevron, shot/pass charge arc,
   * floating overhead diamond beacon, and aimed pass-target teammate ring.
   */
  public updateControlledIndicator(
    player: SimPlayerState | null,
    passTarget: SimPlayerState | null,
    ball: SimBallState,
    elapsed: number
  ): void {
    if (!player) {
      this.controlledGroup.visible = false;
      this.passTargetGroup.visible = false;
      return;
    }

    this.controlledGroup.visible = true;
    this.controlledGroup.position.set(player.position.x, 0, player.position.z);

    // Orient facing arrow & charge arc along player.facing (0 = +Z, PI/2 = +X)
    this.facingChevronMesh.rotation.y = player.facing;
    this.chargeArcMesh.rotation.y = player.facing;

    // Gentle living pulse on ground ring & glow
    const hasBall = player.hasBall || ball.ownerId === player.id;
    const pulse = 1.0 + Math.sin(elapsed * 5.2) * 0.045;
    this.groundRingMesh.scale.set(pulse, 1, pulse);
    this.groundGlowMesh.scale.set(pulse * 1.04, 1, pulse * 1.04);

    // Subtle color shift: bright emerald off-ball, golden-emerald when carrying the ball
    const activeColor = hasBall ? this.colorGold : this.colorEmerald;
    this.groundRingMat.color.copy(activeColor);
    this.groundGlowMat.color.copy(activeColor);
    this.overheadDiamondMat.color.copy(activeColor);
    this.overheadDiamondMat.emissive.copy(activeColor);
    this.overheadDiamondMat.emissiveIntensity = hasBall ? 0.9 : 0.68;

    // Floating overhead diamond chevron (~2.45m) with gentle bob & spin
    this.overheadDiamondMesh.position.y = 2.45 + Math.sin(elapsed * 4.6) * 0.075;
    this.overheadDiamondMesh.rotation.y = elapsed * 2.4;

    // Shot charge arc (takes priority) or pass charge arc
    const shotCharge = THREE.MathUtils.clamp(player.shotCharge, 0, 1);
    const passCharge = THREE.MathUtils.clamp(player.passCharge, 0, 1);

    if (shotCharge > 0.01) {
      this.updateChargeArcGeometry(shotCharge);
      // Shift smoothly from crisp gold -> orange -> crimson as power peaks
      if (shotCharge < 0.65) {
        this.tmpColor.lerpColors(this.colorGold, this.colorOrange, shotCharge / 0.65);
      } else {
        this.tmpColor.lerpColors(this.colorOrange, this.colorCrimson, (shotCharge - 0.65) / 0.35);
      }
      this.chargeArcMat.color.copy(this.tmpColor);
      this.chargeArcMat.opacity = 0.82 + shotCharge * 0.16;
      this.chargeArcMesh.visible = true;
    } else if (passCharge > 0.01) {
      this.updateChargeArcGeometry(passCharge);
      this.chargeArcMat.color.copy(this.colorCyan);
      this.chargeArcMat.opacity = 0.78 + passCharge * 0.16;
      this.chargeArcMesh.visible = true;
    } else {
      this.chargeArcMesh.visible = false;
    }

    // Surgical pass-target indicator beneath the aimed teammate when user has the ball
    // (or briefly while the pass is traveling toward that target)
    const showPassTarget =
      passTarget !== null &&
      passTarget.id !== player.id &&
      (hasBall || ball.passTargetId === passTarget.id);

    if (showPassTarget && passTarget) {
      this.passTargetGroup.visible = true;
      this.passTargetGroup.position.set(passTarget.position.x, 0, passTarget.position.z);
      const targetPulse = 1.0 + Math.sin(elapsed * 6.5) * 0.05;
      this.passTargetRingMesh.scale.set(targetPulse, 1, targetPulse);
      this.passTargetRingMesh.rotation.y = elapsed * 1.4;
      this.passTargetMat.opacity = hasBall ? 0.86 : 0.62;
    } else {
      this.passTargetGroup.visible = false;
    }
  }

  /** Spawns turf/air dust puffs on passes and blazing golden-white impact sparks on powerful shots */
  public spawnKickBurst(pos: Vec3, power: number, isShot: boolean): void {
    const p = THREE.MathUtils.clamp(power, 0.15, 1.2);
    const count = isShot ? Math.round(18 + p * 20) : Math.round(9 + p * 8);

    for (let i = 0; i < count; i++) {
      const particle = this.sparkPool[this.sparkCursor];
      this.sparkCursor = (this.sparkCursor + 1) % MAX_SPARK_PARTICLES;

      const angle = Math.random() * Math.PI * 2;
      const isGoldenSpark = isShot && i < count * 0.68;

      const speed = isGoldenSpark
        ? (3.2 + Math.random() * 5.8) * (0.65 + p * 0.65)
        : (1.4 + Math.random() * 2.8) * (0.6 + p * 0.5);

      particle.active = true;
      particle.x = pos.x + (Math.random() - 0.5) * 0.2;
      particle.y = Math.max(0.08, pos.y + (Math.random() - 0.3) * 0.18);
      particle.z = pos.z + (Math.random() - 0.5) * 0.2;

      particle.vx = Math.cos(angle) * speed;
      particle.vy = isGoldenSpark
        ? (1.8 + Math.random() * 4.2) * (0.6 + p * 0.5)
        : 1.1 + Math.random() * 2.1;
      particle.vz = Math.sin(angle) * speed;

      particle.age = 0;
      particle.life = isGoldenSpark ? 0.28 + Math.random() * 0.24 : 0.32 + Math.random() * 0.22;
      particle.baseScale = isGoldenSpark ? 0.65 + Math.random() * 0.85 : 0.7 + Math.random() * 0.7;
      particle.gravity = isGoldenSpark ? 8.5 : 6.2;
      particle.drag = isGoldenSpark ? 3.8 : 4.6;

      if (isGoldenSpark) {
        const roll = Math.random();
        if (roll < 0.42) {
          particle.color.set('#fffbeb'); // Bright spark white-gold
        } else if (roll < 0.82) {
          particle.color.set('#fde047'); // Championship gold
        } else {
          particle.color.set('#fb923c'); // Fiery orange
        }
      } else {
        // Crisp turf fleck & chalk dust puff
        if (Math.random() < 0.55) {
          particle.color.set('#e8f4e5');
        } else {
          particle.color.set('#4ea34e');
        }
      }
    }

    // Add an expanding crisp golden shockwave flash on shots
    if (isShot && p > 0.35) {
      const ring = this.shockwaves[this.shockwaveCursor];
      this.shockwaveCursor = (this.shockwaveCursor + 1) % MAX_SHOCKWAVES;
      ring.active = true;
      ring.age = 0;
      ring.life = 0.28 + p * 0.14;
      ring.maxScale = 1.65 + p * 1.45;
      ring.mesh.position.set(pos.x, 0.04, pos.z);
      ring.mesh.scale.set(0.4, 1, 0.4);
      ring.material.color.set(p > 0.72 ? '#fde047' : '#ffffff');
      ring.material.opacity = 0.85;
      ring.mesh.visible = true;
    }
  }

  /** Spawns celebratory floating stadium confetti & rising golden sparks near the scored goal */
  public spawnGoalCelebrationBurst(side: TeamSide): void {
    const goalX = side === 'away' ? PITCH.HALF_LENGTH : -PITCH.HALF_LENGTH;
    const inwardSign = side === 'away' ? -1 : 1;

    // Launch two waves of confetti across the goalmouth & touchline corners
    const confettiCount = 130;
    for (let i = 0; i < confettiCount; i++) {
      const c = this.confettiPool[this.confettiCursor];
      this.confettiCursor = (this.confettiCursor + 1) % MAX_CONFETTI_PARTICLES;

      c.active = true;
      c.x = goalX + inwardSign * (0.4 + Math.random() * 2.4);
      c.y = 0.35 + Math.random() * 2.1;
      c.z = (Math.random() - 0.5) * (PITCH.GOAL_WIDTH + 4.5);

      c.vx = inwardSign * (1.8 + Math.random() * 5.2) + (Math.random() - 0.5) * 2.4;
      c.vy = 5.4 + Math.random() * 6.8;
      c.vz = (Math.random() - 0.5) * 6.6;

      c.rx = Math.random() * Math.PI * 2;
      c.ry = Math.random() * Math.PI * 2;
      c.rz = Math.random() * Math.PI * 2;
      c.vrx = (Math.random() - 0.5) * 11.0;
      c.vry = (Math.random() - 0.5) * 11.0;
      c.vrz = (Math.random() - 0.5) * 11.0;

      c.age = 0;
      c.life = 2.1 + Math.random() * 1.4;
      c.scaleX = 0.75 + Math.random() * 0.9;
      c.scaleY = 0.7 + Math.random() * 0.85;
      c.swayPhase = Math.random() * Math.PI * 2;

      const paletteColor = this.confettiPalette[i % this.confettiPalette.length];
      c.color.copy(paletteColor);
    }

    // Rising celebratory golden-emerald sparks framing the goalposts
    const sparkCount = 46;
    for (let i = 0; i < sparkCount; i++) {
      const s = this.sparkPool[this.sparkCursor];
      this.sparkCursor = (this.sparkCursor + 1) % MAX_SPARK_PARTICLES;

      s.active = true;
      s.x = goalX + inwardSign * (0.2 + Math.random() * 1.6);
      s.y = 0.25 + Math.random() * 1.8;
      s.z = (Math.random() - 0.5) * (PITCH.GOAL_WIDTH + 2.2);

      s.vx = inwardSign * (1.2 + Math.random() * 3.6);
      s.vy = 4.2 + Math.random() * 5.5;
      s.vz = (Math.random() - 0.5) * 4.8;

      s.age = 0;
      s.life = 0.95 + Math.random() * 0.75;
      s.baseScale = 0.85 + Math.random() * 1.1;
      s.gravity = 3.2;
      s.drag = 1.6;
      s.color.set(i % 3 === 0 ? '#34f5a3' : i % 3 === 1 ? '#fde047' : '#ffffff');
    }
  }

  /** Steps all active particles and shockwave rings */
  public update(dt: number): void {
    const safeDt = Math.min(Math.max(dt, 0), 0.05);
    if (safeDt <= 0) return;

    // 1. Update kick sparks & turf dust
    let sparksDirty = false;
    for (let i = 0; i < MAX_SPARK_PARTICLES; i++) {
      const p = this.sparkPool[i];
      if (!p.active) continue;

      sparksDirty = true;
      p.age += safeDt;
      if (p.age >= p.life) {
        p.active = false;
        this.dummy.position.set(0, -50, 0);
        this.dummy.scale.set(0, 0, 0);
        this.dummy.rotation.set(0, 0, 0);
        this.dummy.updateMatrix();
        this.sparkInstanced.setMatrixAt(i, this.dummy.matrix);
        continue;
      }

      const damping = Math.exp(-p.drag * safeDt);
      p.vx *= damping;
      p.vz *= damping;
      p.vy -= p.gravity * safeDt;

      p.x += p.vx * safeDt;
      p.y += p.vy * safeDt;
      p.z += p.vz * safeDt;

      if (p.y < 0.04) {
        p.y = 0.04;
        p.vy = Math.abs(p.vy) * 0.25;
        p.vx *= 0.65;
        p.vz *= 0.65;
      }

      const t = p.age / p.life;
      const scale = p.baseScale * (1.0 - t * t);

      this.dummy.position.set(p.x, p.y, p.z);
      this.dummy.rotation.set(p.age * 7.0, p.age * 9.0, 0);
      this.dummy.scale.set(scale, scale, scale);
      this.dummy.updateMatrix();
      this.sparkInstanced.setMatrixAt(i, this.dummy.matrix);
      this.sparkInstanced.setColorAt(i, p.color);
    }

    if (sparksDirty) {
      this.sparkInstanced.instanceMatrix.needsUpdate = true;
      if (this.sparkInstanced.instanceColor) {
        this.sparkInstanced.instanceColor.needsUpdate = true;
      }
    }

    // 2. Update floating stadium confetti ribbons
    let confettiDirty = false;
    for (let i = 0; i < MAX_CONFETTI_PARTICLES; i++) {
      const c = this.confettiPool[i];
      if (!c.active) continue;

      confettiDirty = true;
      c.age += safeDt;
      if (c.age >= c.life) {
        c.active = false;
        this.dummy.position.set(0, -50, 0);
        this.dummy.scale.set(0, 0, 0);
        this.dummy.rotation.set(0, 0, 0);
        this.dummy.updateMatrix();
        this.confettiInstanced.setMatrixAt(i, this.dummy.matrix);
        continue;
      }

      // Air resistance + gentle buoyant flutter sway
      const drag = Math.exp(-1.85 * safeDt);
      c.vx *= drag;
      c.vz *= drag;
      c.vy = Math.max(-2.1, c.vy - 5.2 * safeDt);

      const flutterX = Math.sin(c.age * 5.2 + c.swayPhase) * 0.95;
      const flutterZ = Math.cos(c.age * 4.5 + c.swayPhase * 1.3) * 0.95;

      c.x += (c.vx + flutterX) * safeDt;
      c.y += c.vy * safeDt;
      c.z += (c.vz + flutterZ) * safeDt;

      if (c.y < 0.05) {
        c.y = 0.05;
        c.vy = 0;
        c.vx *= 0.5;
        c.vz *= 0.5;
      }

      c.rx += c.vrx * safeDt;
      c.ry += c.vry * safeDt;
      c.rz += c.vrz * safeDt;

      const t = c.age / c.life;
      const fadeScale = t > 0.72 ? 1.0 - (t - 0.72) / 0.28 : 1.0;

      this.dummy.position.set(c.x, c.y, c.z);
      this.dummy.rotation.set(c.rx, c.ry, c.rz);
      this.dummy.scale.set(c.scaleX * fadeScale, c.scaleY * fadeScale, 1);
      this.dummy.updateMatrix();
      this.confettiInstanced.setMatrixAt(i, this.dummy.matrix);
      this.confettiInstanced.setColorAt(i, c.color);
    }

    if (confettiDirty) {
      this.confettiInstanced.instanceMatrix.needsUpdate = true;
      if (this.confettiInstanced.instanceColor) {
        this.confettiInstanced.instanceColor.needsUpdate = true;
      }
    }

    // 3. Update expanding shot shockwave rings
    for (let i = 0; i < MAX_SHOCKWAVES; i++) {
      const ring = this.shockwaves[i];
      if (!ring.active) continue;

      ring.age += safeDt;
      if (ring.age >= ring.life) {
        ring.active = false;
        ring.mesh.visible = false;
        continue;
      }

      const t = ring.age / ring.life;
      const eased = 1.0 - Math.pow(1.0 - t, 2.2);
      const s = THREE.MathUtils.lerp(0.45, ring.maxScale, eased);
      ring.mesh.scale.set(s, 1, s);
      ring.material.opacity = (1.0 - t) * 0.72;
    }
  }

  /** Rebuilds the charge arc strip symmetrically around local +Z (facing direction) */
  private updateChargeArcGeometry(charge: number): void {
    const innerR = 0.76;
    const outerR = 0.93;
    const maxSweep = Math.PI * 1.82;
    const halfSweep = charge * maxSweep * 0.5;
    const pos = this.chargeArcPositions;

    for (let i = 0; i <= CHARGE_ARC_SEGMENTS; i++) {
      const u = i / CHARGE_ARC_SEGMENTS;
      // Angle 0 points along local +Z (sin(0)=0, cos(0)=1)
      const angle = -halfSweep + u * (halfSweep * 2);
      const s = Math.sin(angle);
      const c = Math.cos(angle);

      const innerIdx = i * 2 * 3;
      pos[innerIdx] = s * innerR;
      pos[innerIdx + 1] = 0;
      pos[innerIdx + 2] = c * innerR;

      const outerIdx = innerIdx + 3;
      pos[outerIdx] = s * outerR;
      pos[outerIdx + 1] = 0;
      pos[outerIdx + 2] = c * outerR;
    }

    const posAttr = this.chargeArcMesh.geometry.attributes.position as THREE.BufferAttribute;
    posAttr.needsUpdate = true;
  }
}
