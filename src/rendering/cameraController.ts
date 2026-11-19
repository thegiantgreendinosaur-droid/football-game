import * as THREE from 'three';
import { PITCH } from '../config/constants';
import type { CameraPreset, MatchSnapshot, SimPlayerState } from '../types/game';

interface CameraPresetConfig {
  height: number;
  zOffset: number;
  fov: number;
  ballWeight: number;
  playerWeight: number;
  leadWeight: number;
  leadSeconds: number;
  maxLeadDist: number;
  clampX: number;
  clampZ: number;
  gantryParallaxX: number;
  followLambda: number;
  lookLambda: number;
}

const PRESET_ORDER: readonly CameraPreset[] = ['broadcast', 'wide', 'dynamic_close'];

const PRESET_CONFIGS: Record<CameraPreset, CameraPresetConfig> = {
  // Default elevated TV broadcast view from +Z side
  broadcast: {
    height: 17.5,
    zOffset: 24.0,
    fov: 42,
    ballWeight: 0.68,
    playerWeight: 0.22,
    leadWeight: 0.1,
    leadSeconds: 0.42,
    maxLeadDist: 5.5,
    clampX: 21.5,
    clampZ: 9.5,
    gantryParallaxX: 0.92,
    followLambda: 5.2,
    lookLambda: 7.4,
  },
  // Tactical wide elevated view revealing nearly the entire 5v5 pitch
  wide: {
    height: 23.0,
    zOffset: 31.0,
    fov: 44,
    ballWeight: 0.68,
    playerWeight: 0.22,
    leadWeight: 0.1,
    leadSeconds: 0.35,
    maxLeadDist: 4.0,
    clampX: 13.5,
    clampZ: 5.5,
    gantryParallaxX: 0.85,
    followLambda: 4.5,
    lookLambda: 6.2,
  },
  // Lower, punchier broadcast action angle for intense dribbling & shooting
  dynamic_close: {
    height: 12.5,
    zOffset: 18.0,
    fov: 45,
    ballWeight: 0.64,
    playerWeight: 0.26,
    leadWeight: 0.1,
    leadSeconds: 0.45,
    maxLeadDist: 5.0,
    clampX: 25.0,
    clampZ: 12.5,
    gantryParallaxX: 0.95,
    followLambda: 6.4,
    lookLambda: 8.6,
  },
};

export class BroadcastCameraController {
  private readonly camera: THREE.PerspectiveCamera;
  private preset: CameraPreset = 'broadcast';

  // Smoothly tracked unshaken camera position and focus point
  private readonly currentPos = new THREE.Vector3();
  private readonly currentTarget = new THREE.Vector3();
  private readonly desiredPos = new THREE.Vector3();
  private readonly desiredTarget = new THREE.Vector3();
  private currentFov: number;

  // Damped trauma / camera shake state
  private shakeIntensity = 0;
  private shakeTime = 0;
  private readonly shakeOffset = new THREE.Vector3();
  private readonly shakeTargetOffset = new THREE.Vector3();

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
    const cfg = PRESET_CONFIGS[this.preset];
    this.currentFov = cfg.fov;

    // Initialize cleanly at default center-pitch broadcast framing
    // so getHorizontalBasis() immediately returns right=(1,0), forward=(0,-1).
    this.currentTarget.set(0, 0.4, 0);
    this.currentPos.set(0, cfg.height, cfg.zOffset);
    this.desiredTarget.copy(this.currentTarget);
    this.desiredPos.copy(this.currentPos);

    this.camera.fov = this.currentFov;
    this.camera.position.copy(this.currentPos);
    this.camera.lookAt(this.currentTarget);
    this.camera.updateProjectionMatrix();
    this.camera.updateMatrixWorld(true);
  }

  public setPreset(preset: CameraPreset): void {
    this.preset = preset;
  }

  public cyclePreset(): CameraPreset {
    const idx = PRESET_ORDER.indexOf(this.preset);
    const next = PRESET_ORDER[(idx + 1) % PRESET_ORDER.length];
    this.preset = next;
    return next;
  }

  public getPreset(): CameraPreset {
    return this.preset;
  }

  /** Adds damped television-lens shake (for thunderous shots and goalpost rebounds) */
  public addShake(intensity: number): void {
    const clamped = THREE.MathUtils.clamp(intensity, 0, 1.0);
    this.shakeIntensity = Math.min(1.0, Math.max(this.shakeIntensity, clamped) + clamped * 0.25);
  }

  /** Immediately snaps camera position, look target, and FOV to the current match snapshot */
  public snapTo(snapshot: MatchSnapshot): void {
    const desiredFov = this.computeDesiredFraming(snapshot);
    this.currentPos.copy(this.desiredPos);
    this.currentTarget.copy(this.desiredTarget);
    this.currentFov = desiredFov;
    this.shakeIntensity = 0;
    this.shakeOffset.set(0, 0, 0);
    this.shakeTargetOffset.set(0, 0, 0);

    this.applyToCamera();
  }

  /** Smoothly tracks match action, preset transitions, goal celebration zoom, and camera shake */
  public update(snapshot: MatchSnapshot, dt: number): void {
    const safeDt = Math.min(Math.max(dt, 0), 0.05);
    const cfg = PRESET_CONFIGS[this.preset];

    const desiredFov = this.computeDesiredFraming(snapshot);

    // Slightly slower, cinematic glide during goal celebrations
    const isCelebration = snapshot.phase === 'goal_celebration';
    const posLambda = isCelebration ? 3.2 : cfg.followLambda;
    const lookLambda = isCelebration ? 4.2 : cfg.lookLambda;

    const posAlpha = 1 - Math.exp(-posLambda * safeDt);
    const lookAlpha = 1 - Math.exp(-lookLambda * safeDt);
    const fovAlpha = 1 - Math.exp(-4.8 * safeDt);

    this.currentPos.lerp(this.desiredPos, posAlpha);
    this.currentTarget.lerp(this.desiredTarget, lookAlpha);
    this.currentFov = THREE.MathUtils.lerp(this.currentFov, desiredFov, fovAlpha);

    // Update damped camera shake
    if (this.shakeIntensity > 0.002) {
      this.shakeTime += safeDt;
      const amp = this.shakeIntensity * this.shakeIntensity * 0.42;
      this.shakeOffset.set(
        (Math.sin(this.shakeTime * 54.0) * 0.65 + Math.cos(this.shakeTime * 89.0) * 0.35) * amp,
        (Math.cos(this.shakeTime * 61.0) * 0.7 + Math.sin(this.shakeTime * 97.0) * 0.3) * amp * 0.85,
        Math.sin(this.shakeTime * 47.0) * amp * 0.35
      );
      this.shakeTargetOffset.set(
        this.shakeOffset.x * 0.45,
        this.shakeOffset.y * 0.45,
        this.shakeOffset.z * 0.25
      );
      this.shakeIntensity *= Math.exp(-9.2 * safeDt);
    } else {
      this.shakeIntensity = 0;
      this.shakeOffset.set(0, 0, 0);
      this.shakeTargetOffset.set(0, 0, 0);
    }

    this.applyToCamera();
  }

  /**
   * Computes the camera's normalized horizontal XZ movement basis:
   * - `right`: screen-right direction (+X on screen). Pressing D (`moveX = +1`) moves along `+right`.
   * - `forward`: screen-up direction (camera look direction projected onto XZ).
   *   Pressing W (`moveZ = -1`) moves along `+forward`; pressing S (`moveZ = +1`) moves along `-forward`.
   *
   * For the default center-pitch broadcast view (camera on +Z side looking toward -Z):
   * - `right`   = `{ x: 1, z: 0 }`
   * - `forward` = `{ x: 0, z: -1 }`
   */
  public getHorizontalBasis(): {
    right: { x: number; z: number };
    forward: { x: number; z: number };
  } {
    // Use unshaken camera look direction projected onto the horizontal XZ plane
    const dx = this.currentTarget.x - this.currentPos.x;
    const dz = this.currentTarget.z - this.currentPos.z;
    const len = Math.hypot(dx, dz);

    if (len < 1e-5) {
      return {
        right: { x: 1, z: 0 },
        forward: { x: 0, z: -1 },
      };
    }

    const fx = dx / len;
    const fz = dz / len;

    // Cross(forward, worldUp(0, 1, 0)) = (-fz, 0, fx)
    const rx = -fz;
    const rz = fx;

    return {
      right: { x: rx, z: rz },
      forward: { x: fx, z: fz },
    };
  }

  private computeDesiredFraming(snapshot: MatchSnapshot): number {
    const cfg = PRESET_CONFIGS[this.preset];
    const ball = snapshot.ball;

    if (snapshot.phase === 'goal_celebration') {
      const scorer = this.findGoalScorer(snapshot);
      const goalX =
        snapshot.latestGoal?.team === 'home'
          ? PITCH.HALF_LENGTH
          : snapshot.latestGoal?.team === 'away'
            ? -PITCH.HALF_LENGTH
            : ball.position.x >= 0
              ? PITCH.HALF_LENGTH
              : -PITCH.HALF_LENGTH;

      const focusX = scorer
        ? scorer.position.x * 0.72 + goalX * 0.28
        : ball.position.x * 0.65 + goalX * 0.35;
      const focusZ = scorer ? scorer.position.z * 0.78 : ball.position.z * 0.7;

      const clampedX = THREE.MathUtils.clamp(focusX, -PITCH.HALF_LENGTH + 2.0, PITCH.HALF_LENGTH - 2.0);
      const clampedZ = THREE.MathUtils.clamp(focusZ, -PITCH.HALF_WIDTH + 4.0, PITCH.HALF_WIDTH - 4.0);

      this.desiredTarget.set(clampedX, 1.05, clampedZ);
      this.desiredPos.set(
        clampedX * 0.94,
        cfg.height * 0.66,
        clampedZ + cfg.zOffset * 0.64
      );
      return Math.max(35, cfg.fov - 4.5);
    }

    // Standard match play & set-piece framing:
    // Weighted blend of ball position (68%) + controlled player (22%) + velocity lead (10%)
    const controlled = this.findControlledPlayer(snapshot);
    const playerX = controlled ? controlled.position.x : ball.position.x;
    const playerZ = controlled ? controlled.position.z : ball.position.z;

    // Velocity lead point (clamped cleanly to avoid jitter on sudden deflections)
    let leadDx = ball.velocity.x * cfg.leadSeconds;
    let leadDz = ball.velocity.z * cfg.leadSeconds;
    const leadLen = Math.hypot(leadDx, leadDz);
    if (leadLen > cfg.maxLeadDist) {
      const scale = cfg.maxLeadDist / leadLen;
      leadDx *= scale;
      leadDz *= scale;
    }

    const leadX = ball.position.x + leadDx;
    const leadZ = ball.position.z + leadDz;

    const blendedX =
      ball.position.x * cfg.ballWeight +
      playerX * cfg.playerWeight +
      leadX * cfg.leadWeight;
    const blendedZ =
      ball.position.z * cfg.ballWeight +
      playerZ * cfg.playerWeight +
      leadZ * cfg.leadWeight;

    const targetX = THREE.MathUtils.clamp(blendedX, -cfg.clampX, cfg.clampX);
    const targetZ = THREE.MathUtils.clamp(blendedZ, -cfg.clampZ, cfg.clampZ);
    const targetY = 0.4 + Math.min(ball.position.y * 0.14, 1.2);

    this.desiredTarget.set(targetX, targetY, targetZ);

    // Subtle elevation boost on far touchline (-Z) so near-side perspective stays clean & readable
    const depthAdjust = Math.max(0, -targetZ) * 0.08;
    const camX = targetX * cfg.gantryParallaxX;
    const camY = cfg.height + depthAdjust;
    const camZ = targetZ * 0.62 + cfg.zOffset;

    this.desiredPos.set(camX, camY, camZ);
    return cfg.fov;
  }

  private findControlledPlayer(snapshot: MatchSnapshot): SimPlayerState | null {
    for (let i = 0; i < snapshot.players.length; i++) {
      const p = snapshot.players[i];
      if (p.id === snapshot.controlledPlayerId || p.isControlled) {
        return p;
      }
    }
    return null;
  }

  private findGoalScorer(snapshot: MatchSnapshot): SimPlayerState | null {
    const scorerId = snapshot.latestGoal?.scorerId;
    if (!scorerId) return null;
    for (let i = 0; i < snapshot.players.length; i++) {
      if (snapshot.players[i].id === scorerId) {
        return snapshot.players[i];
      }
    }
    return null;
  }

  private applyToCamera(): void {
    this.camera.position.copy(this.currentPos).add(this.shakeOffset);
    this.camera.lookAt(
      this.currentTarget.x + this.shakeTargetOffset.x,
      this.currentTarget.y + this.shakeTargetOffset.y,
      this.currentTarget.z + this.shakeTargetOffset.z
    );

    if (Math.abs(this.camera.fov - this.currentFov) > 0.01) {
      this.camera.fov = this.currentFov;
      this.camera.updateProjectionMatrix();
    }
  }
}
