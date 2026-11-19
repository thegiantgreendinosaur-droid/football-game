import * as THREE from 'three';
import type { PlayerAppearance, SimPlayerState } from '../types/game';
import type { CharacterRig } from './characterBuilder';

const BASE_PELVIS_Y = 0.94;

interface RigPose {
  pelvisX: number;
  pelvisY: number;
  pelvisZ: number;
  pelvisRotX: number;
  pelvisRotY: number;
  pelvisRotZ: number;
  torsoRotX: number;
  torsoRotY: number;
  torsoRotZ: number;
  headRotX: number;
  headRotY: number;
  headRotZ: number;
  lShoulderX: number;
  lShoulderY: number;
  lShoulderZ: number;
  lElbowX: number;
  rShoulderX: number;
  rShoulderY: number;
  rShoulderZ: number;
  rElbowX: number;
  lHipX: number;
  lHipY: number;
  lHipZ: number;
  lKneeX: number;
  lAnkleX: number;
  rHipX: number;
  rHipY: number;
  rHipZ: number;
  rKneeX: number;
  rAnkleX: number;
  stiffness: number;
}

interface StrideProfile {
  hipAmpMult: number;
  kneeAmpMult: number;
  armAmpMult: number;
  bobMult: number;
  leanOffset: number;
  crouchOffset: number;
  armSpread: number;
  twistMult: number;
}

const STRIDE_PROFILES: Record<PlayerAppearance['strideStyle'], StrideProfile> = {
  agile: {
    hipAmpMult: 0.95,
    kneeAmpMult: 1.05,
    armAmpMult: 1.02,
    bobMult: 0.92,
    leanOffset: 0.04,
    crouchOffset: -0.025,
    armSpread: 0.16,
    twistMult: 1.05,
  },
  upright: {
    hipAmpMult: 1.02,
    kneeAmpMult: 0.96,
    armAmpMult: 0.96,
    bobMult: 0.88,
    leanOffset: -0.075,
    crouchOffset: 0.012,
    armSpread: 0.1,
    twistMult: 0.92,
  },
  powerful: {
    hipAmpMult: 1.08,
    kneeAmpMult: 1.12,
    armAmpMult: 1.24,
    bobMult: 1.12,
    leanOffset: 0.055,
    crouchOffset: -0.012,
    armSpread: 0.18,
    twistMult: 1.22,
  },
  gliding: {
    hipAmpMult: 1.12,
    kneeAmpMult: 0.94,
    armAmpMult: 0.92,
    bobMult: 0.72,
    leanOffset: -0.02,
    crouchOffset: 0.0,
    armSpread: 0.12,
    twistMult: 0.88,
  },
};

// Reusable pose buffer to avoid per-frame garbage collection
const TARGET_POSE: RigPose = {
  pelvisX: 0,
  pelvisY: BASE_PELVIS_Y,
  pelvisZ: 0,
  pelvisRotX: 0,
  pelvisRotY: 0,
  pelvisRotZ: 0,
  torsoRotX: 0,
  torsoRotY: 0,
  torsoRotZ: 0,
  headRotX: 0,
  headRotY: 0,
  headRotZ: 0,
  lShoulderX: 0,
  lShoulderY: 0,
  lShoulderZ: 0.12,
  lElbowX: -0.3,
  rShoulderX: 0,
  rShoulderY: 0,
  rShoulderZ: -0.12,
  rElbowX: -0.3,
  lHipX: 0,
  lHipY: 0,
  lHipZ: 0,
  lKneeX: 0.1,
  lAnkleX: 0,
  rHipX: 0,
  rHipY: 0,
  rHipZ: 0,
  rKneeX: 0.1,
  rAnkleX: 0,
  stiffness: 15,
};

function resetPose(p: RigPose): void {
  p.pelvisX = 0;
  p.pelvisY = BASE_PELVIS_Y;
  p.pelvisZ = 0;
  p.pelvisRotX = 0;
  p.pelvisRotY = 0;
  p.pelvisRotZ = 0;
  p.torsoRotX = 0;
  p.torsoRotY = 0;
  p.torsoRotZ = 0;
  p.headRotX = 0;
  p.headRotY = 0;
  p.headRotZ = 0;
  p.lShoulderX = 0;
  p.lShoulderY = 0;
  p.lShoulderZ = 0.12;
  p.lElbowX = -0.3;
  p.rShoulderX = 0;
  p.rShoulderY = 0;
  p.rShoulderZ = -0.12;
  p.rElbowX = -0.3;
  p.lHipX = 0;
  p.lHipY = 0;
  p.lHipZ = 0;
  p.lKneeX = 0.1;
  p.lAnkleX = 0;
  p.rHipX = 0;
  p.rHipY = 0;
  p.rHipZ = 0;
  p.rKneeX = 0.1;
  p.rAnkleX = 0;
  p.stiffness = 15;
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

function damp(current: number, target: number, alpha: number): number {
  return current + (target - current) * alpha;
}

function actionProgress(state: SimPlayerState): number {
  if (state.actionDuration <= 0.0001) return 0.5;
  return clamp(1 - state.actionTimer / state.actionDuration, 0, 1);
}

/**
 * Computes realistic phase-driven running/jogging/sprinting/dribbling gait.
 * Sign convention (local +Z forward, +X left):
 * - Negative hipX / shoulderX swings limb FORWARD (+Z)
 * - Positive kneeX bends knee BACKWARD naturally
 * - Negative elbowX bends elbow FORWARD naturally
 * - Positive torsoRotX leans chest FORWARD (+Z)
 */
function computeLocomotionPose(
  pose: RigPose,
  state: SimPlayerState,
  stride: StrideProfile,
  mode: 'jog' | 'run' | 'sprint' | 'dribble'
): void {
  const speedRatio = clamp(state.speed / Math.max(state.maxSpeed, 1), 0.18, 1.15);
  const phase = state.animPhase;
  const turnLean = clamp(state.turnLean, -1, 1);

  let hipAmp = 0.48;
  let kneeAmp = 0.65;
  let armAmp = 0.48;
  let elbowBase = -0.75;
  let forwardLean = 0.12;
  let bobAmp = 0.032;
  let crouch = -0.025;
  let armOut = stride.armSpread;

  if (mode === 'jog') {
    hipAmp = 0.42 + speedRatio * 0.18;
    kneeAmp = 0.52 + speedRatio * 0.25;
    armAmp = 0.4 + speedRatio * 0.2;
    elbowBase = -0.78;
    forwardLean = 0.1 + speedRatio * 0.06;
    bobAmp = 0.03;
    crouch = -0.02;
  } else if (mode === 'run') {
    hipAmp = 0.6 + speedRatio * 0.26;
    kneeAmp = 0.72 + speedRatio * 0.34;
    armAmp = 0.62 + speedRatio * 0.28;
    elbowBase = -1.05;
    forwardLean = 0.18 + speedRatio * 0.08;
    bobAmp = 0.044;
    crouch = -0.032;
  } else if (mode === 'sprint') {
    hipAmp = 0.84 + speedRatio * 0.28;
    kneeAmp = 0.95 + speedRatio * 0.38;
    armAmp = 0.88 + speedRatio * 0.32;
    elbowBase = -1.28;
    forwardLean = 0.28 + speedRatio * 0.09;
    bobAmp = 0.058;
    crouch = -0.04;
    armOut += 0.06;
  } else {
    // 'dribble': lower center of gravity, rapid nimble footwork, poised balance arms
    hipAmp = 0.46 + speedRatio * 0.26;
    kneeAmp = 0.62 + speedRatio * 0.3;
    armAmp = 0.44 + speedRatio * 0.24;
    elbowBase = -0.92;
    forwardLean = 0.22 + speedRatio * 0.06;
    bobAmp = 0.028;
    crouch = -0.06;
    armOut += 0.14;
  }

  hipAmp *= stride.hipAmpMult;
  kneeAmp *= stride.kneeAmpMult;
  armAmp *= stride.armAmpMult;
  bobAmp *= stride.bobMult;
  forwardLean = Math.max(0.05, forwardLean + stride.leanOffset);
  crouch += stride.crouchOffset;

  const lSin = Math.sin(phase);
  const lCos = Math.cos(phase);
  const rSin = -lSin;
  const rCos = -lCos;

  // Vertical stride bounce peaks twice per full cycle (once on each push-off)
  const bounce = Math.abs(lSin) * bobAmp;
  pose.pelvisY = BASE_PELVIS_Y + crouch + bounce - Math.abs(turnLean) * 0.03;

  // Subtle hip rotation and lateral banking into turns
  pose.pelvisRotY = lSin * 0.14 * stride.twistMult;
  pose.pelvisRotZ = -turnLean * 0.14;
  pose.pelvisRotX = forwardLean * 0.28;

  // Counter-rotating shoulders + forward drive lean + turn carve
  pose.torsoRotX = forwardLean * 0.72;
  pose.torsoRotY = -lSin * (0.2 + speedRatio * 0.12) * stride.twistMult;
  pose.torsoRotZ = -turnLean * 0.16;

  // Head stays level & looks ahead (or subtly down toward ball while dribbling)
  pose.headRotX = mode === 'dribble' ? -forwardLean * 0.35 + 0.1 : -forwardLean * 0.65;
  pose.headRotY = -pose.torsoRotY * 0.55 - turnLean * 0.12;
  pose.headRotZ = turnLean * 0.14;

  // Legs: negative hipX = forward swing, positive kneeX = natural backward bend
  pose.lHipX = -lSin * hipAmp - 0.08;
  pose.rHipX = -rSin * hipAmp - 0.08;

  pose.lKneeX =
    0.16 + Math.max(0, lCos) * kneeAmp + Math.max(0, -lSin) * (kneeAmp * 0.42);
  pose.rKneeX =
    0.16 + Math.max(0, rCos) * kneeAmp + Math.max(0, -rSin) * (kneeAmp * 0.42);

  // Subtle ankle pitch: dorsiflex on forward strike, plantarflex on toe-off
  pose.lAnkleX = -lSin * 0.22 + Math.max(0, -lSin) * 0.18;
  pose.rAnkleX = -rSin * 0.22 + Math.max(0, -rSin) * 0.18;

  // Opposite arms pump naturally (left arm swings back when left leg swings forward)
  pose.lShoulderX = lSin * armAmp;
  pose.rShoulderX = rSin * armAmp;
  pose.lShoulderZ = armOut + Math.abs(turnLean) * 0.08;
  pose.rShoulderZ = -(armOut + Math.abs(turnLean) * 0.08);
  pose.lShoulderY = -lSin * 0.12;
  pose.rShoulderY = -rSin * 0.12;

  // Elbows bend tighter on forward upswing, relax slightly on backswing
  pose.lElbowX = elbowBase - Math.max(0, -lSin) * 0.38;
  pose.rElbowX = elbowBase - Math.max(0, -rSin) * 0.38;

  pose.stiffness = mode === 'sprint' ? 19 : 16.5;
}

/**
 * Helper to assign kicking leg vs planted support leg symmetrically for left/right kicks.
 */
function setKickLegs(
  pose: RigPose,
  kickLeg: 'left' | 'right',
  kickHipX: number,
  kickHipY: number,
  kickHipZ: number,
  kickKneeX: number,
  kickAnkleX: number,
  plantHipX: number,
  plantKneeX: number,
  plantAnkleX: number
): void {
  if (kickLeg === 'left') {
    pose.lHipX = kickHipX;
    pose.lHipY = kickHipY;
    pose.lHipZ = kickHipZ;
    pose.lKneeX = kickKneeX;
    pose.lAnkleX = kickAnkleX;
    pose.rHipX = plantHipX;
    pose.rKneeX = plantKneeX;
    pose.rAnkleX = plantAnkleX;
  } else {
    pose.rHipX = kickHipX;
    pose.rHipY = -kickHipY;
    pose.rHipZ = -kickHipZ;
    pose.rKneeX = kickKneeX;
    pose.rAnkleX = kickAnkleX;
    pose.lHipX = plantHipX;
    pose.lKneeX = plantKneeX;
    pose.lAnkleX = plantAnkleX;
  }
}

/**
 * Helper to set kicking-side vs balance-side arms symmetrically.
 */
function setKickArms(
  pose: RigPose,
  kickLeg: 'left' | 'right',
  balanceShoulderX: number,
  balanceShoulderZ: number,
  balanceElbowX: number,
  kickSideShoulderX: number,
  kickSideShoulderZ: number,
  kickSideElbowX: number
): void {
  if (kickLeg === 'left') {
    // Balance arm is RIGHT (-X), kick-side arm is LEFT (+X)
    pose.rShoulderX = balanceShoulderX;
    pose.rShoulderZ = -balanceShoulderZ;
    pose.rElbowX = balanceElbowX;
    pose.lShoulderX = kickSideShoulderX;
    pose.lShoulderZ = kickSideShoulderZ;
    pose.lElbowX = kickSideElbowX;
  } else {
    // Balance arm is LEFT (+X), kick-side arm is RIGHT (-X)
    pose.lShoulderX = balanceShoulderX;
    pose.lShoulderZ = balanceShoulderZ;
    pose.lElbowX = balanceElbowX;
    pose.rShoulderX = kickSideShoulderX;
    pose.rShoulderZ = -kickSideShoulderZ;
    pose.rElbowX = kickSideElbowX;
  }
}

/**
 * Updates the footballer rig transform and smoothly animates every joint for the current SimPlayerState.
 */
export function updateCharacterAnimation(
  rig: CharacterRig,
  state: SimPlayerState,
  dt: number,
  elapsedTime: number
): void {
  rig.root.position.set(state.position.x, state.position.y, state.position.z);
  rig.root.rotation.y = state.facing;

  const safeDt = clamp(dt, 0.001, 0.1);
  const stride = STRIDE_PROFILES[rig.profile.appearance.strideStyle];
  const pose = TARGET_POSE;
  resetPose(pose);

  // +1 when kicking with LEFT leg (+X), -1 when kicking with RIGHT leg (-X)
  const kickSign = state.kickLeg === 'left' ? 1 : -1;

  switch (state.actionState) {
    case 'idle': {
      const breath = Math.sin(elapsedTime * 2.5 + state.slotIndex * 1.1);
      const scan = Math.sin(elapsedTime * 0.95 + state.slotIndex * 2.3);
      pose.pelvisY = BASE_PELVIS_Y - 0.018 + stride.crouchOffset * 0.5 + breath * 0.006;
      pose.torsoRotX = 0.06 + stride.leanOffset * 0.4 + breath * 0.015;
      pose.headRotX = -0.04;
      pose.headRotY = scan * 0.1;

      pose.lHipX = -0.06;
      pose.rHipX = -0.06;
      pose.lHipZ = 0.04;
      pose.rHipZ = -0.04;
      pose.lKneeX = 0.13;
      pose.rKneeX = 0.13;
      pose.lAnkleX = -0.07;
      pose.rAnkleX = -0.07;

      pose.lShoulderX = 0.05;
      pose.rShoulderX = 0.05;
      pose.lShoulderZ = 0.14 + breath * 0.015;
      pose.rShoulderZ = -(0.14 + breath * 0.015);
      pose.lElbowX = -0.36;
      pose.rElbowX = -0.36;
      pose.stiffness = 11;
      break;
    }

    case 'jog':
      computeLocomotionPose(pose, state, stride, 'jog');
      break;

    case 'run':
      computeLocomotionPose(pose, state, stride, 'run');
      break;

    case 'sprint':
      computeLocomotionPose(pose, state, stride, 'sprint');
      break;

    case 'dribble':
      computeLocomotionPose(pose, state, stride, 'dribble');
      break;

    case 'pass': {
      const p = actionProgress(state);
      // Smooth wind-up (0..0.3) -> crisp inside-foot sweep (0.3..0.65) -> recovery (0.65..1)
      let swing = 0;
      let kneeBend = 0.2;
      let footTurnOut = 0.35;
      if (p < 0.3) {
        const t = p / 0.3;
        swing = 0.52 * t;
        kneeBend = 0.25 + 0.52 * t;
        footTurnOut = 0.18 * t;
      } else if (p < 0.72) {
        const t = (p - 0.3) / 0.42;
        const ease = 1 - Math.pow(1 - t, 3);
        swing = 0.52 - 1.32 * ease;
        kneeBend = 0.77 - 0.62 * ease;
        footTurnOut = 0.42;
      } else {
        const t = (p - 0.72) / 0.28;
        swing = -0.8 * (1 - t);
        kneeBend = 0.15 + 0.08 * t;
        footTurnOut = 0.42 * (1 - t);
      }

      pose.pelvisY = BASE_PELVIS_Y - 0.045;
      pose.torsoRotX = 0.16;
      pose.torsoRotY = kickSign * (swing * 0.48);
      pose.torsoRotZ = kickSign * 0.12;
      pose.headRotX = -0.05;
      pose.headRotY = -pose.torsoRotY * 0.7;

      setKickLegs(pose, state.kickLeg, swing, footTurnOut, 0.1, kneeBend, 0.15, -0.16, 0.32, -0.14);
      setKickArms(pose, state.kickLeg, -0.35, 0.68, -0.52, 0.32, 0.32, -0.68);
      pose.stiffness = 22;
      break;
    }

    case 'shoot_charge': {
      const charge = clamp(state.shotCharge, 0, 1);
      pose.pelvisY = BASE_PELVIS_Y - 0.055 - charge * 0.03;
      pose.pelvisRotY = kickSign * (0.14 + charge * 0.16);
      pose.torsoRotX = 0.16 + charge * 0.08;
      pose.torsoRotY = kickSign * (0.22 + charge * 0.42);
      pose.torsoRotZ = kickSign * (0.12 + charge * 0.12);
      pose.headRotX = 0.04;
      pose.headRotY = -pose.torsoRotY * 0.75;

      // Dramatic wind-up pulling kicking leg back and bending knee sharply
      const kickHipX = 0.38 + charge * 0.92;
      const kickKneeX = 0.48 + charge * 1.15;
      setKickLegs(pose, state.kickLeg, kickHipX, 0.08, 0.08, kickKneeX, 0.28, -0.2, 0.38, -0.16);

      // Opposite arm lifted wide and high for athletic shooting counter-balance
      setKickArms(
        pose,
        state.kickLeg,
        -0.55 - charge * 0.32,
        0.72 + charge * 0.56,
        -0.38,
        0.48 + charge * 0.35,
        0.34,
        -0.85
      );
      pose.stiffness = 18;
      break;
    }

    case 'shoot_release': {
      const p = actionProgress(state);
      // Explosive strike whip peaking around p = 0.32, holding high follow-through, then settling
      const whip =
        p < 0.35
          ? 1 - Math.pow(1 - p / 0.35, 3)
          : Math.max(0, 1 - (p - 0.35) / 0.65);

      pose.pelvisY = BASE_PELVIS_Y - 0.04 + whip * 0.04;
      pose.pelvisRotX = -0.12 * whip;
      pose.pelvisRotY = -kickSign * 0.22 * whip;

      // Dynamic torso counter-rotation + athletic lean away from kicking leg
      pose.torsoRotX = 0.12 - 0.24 * whip;
      pose.torsoRotY = -kickSign * 0.58 * whip;
      pose.torsoRotZ = kickSign * 0.28 * whip;
      pose.headRotX = 0.08 * whip;
      pose.headRotY = -pose.torsoRotY * 0.7;

      const kickHipX = -1.32 * whip;
      const kickKneeX = 0.1 + 0.18 * (1 - whip);
      const kickAnkleX = 0.48 * whip;
      setKickLegs(pose, state.kickLeg, kickHipX, -0.14 * whip, 0.06, kickKneeX, kickAnkleX, -0.1, 0.22, -0.1);

      // Opposite arm snaps back, kicking-side arm sweeps across chest
      setKickArms(
        pose,
        state.kickLeg,
        0.72 * whip,
        0.58 * whip + 0.18,
        -0.95,
        -0.85 * whip,
        0.38 * whip + 0.15,
        -0.65
      );
      pose.stiffness = 26;
      break;
    }

    case 'tackle': {
      const p = actionProgress(state);
      // Fast aggressive lunge-in, sustained slide extension, smooth pop-up recovery
      const env = p < 0.2 ? p / 0.2 : p < 0.72 ? 1.0 : Math.max(0, 1 - (p - 0.72) / 0.28);

      pose.pelvisY = BASE_PELVIS_Y - 0.5 * env;
      pose.pelvisZ = 0.12 * env;
      pose.pelvisRotX = -0.78 * env;
      pose.pelvisRotY = kickSign * 0.26 * env;
      pose.pelvisRotZ = -kickSign * 0.42 * env;

      pose.torsoRotX = 0.34 * env;
      pose.torsoRotY = -kickSign * 0.22 * env;
      pose.headRotX = 0.36 * env;

      // Tackling leg stretched fully forward; trailing leg tucked neatly underneath
      setKickLegs(
        pose,
        state.kickLeg,
        -0.88 * env,
        0.18 * env,
        0.16 * env,
        0.1,
        0.32 * env,
        0.26 * env,
        1.52 * env,
        0.25 * env
      );

      // Trailing arm braces low toward turf, other arm raised for balance
      setKickArms(
        pose,
        state.kickLeg,
        0.58 * env,
        0.78 * env + 0.15,
        -0.32,
        -0.62 * env,
        0.85 * env + 0.15,
        -0.55
      );
      pose.stiffness = 22;
      break;
    }

    case 'stunned': {
      const p = actionProgress(state);
      const recoil = 1 - p;
      const wobble = Math.sin(elapsedTime * 19) * recoil;

      pose.pelvisY = BASE_PELVIS_Y - 0.08 * recoil;
      pose.torsoRotX = -0.26 * recoil;
      pose.torsoRotZ = wobble * 0.22;
      pose.torsoRotY = wobble * 0.25;
      pose.headRotX = -0.22 * recoil;
      pose.headRotZ = -wobble * 0.25;

      pose.lHipX = -0.22 * recoil + wobble * 0.15;
      pose.rHipX = 0.16 * recoil - wobble * 0.15;
      pose.lKneeX = 0.38 * recoil + 0.12;
      pose.rKneeX = 0.32 * recoil + 0.12;

      pose.lShoulderX = -0.45 * recoil + wobble * 0.3;
      pose.rShoulderX = -0.35 * recoil - wobble * 0.3;
      pose.lShoulderZ = 0.65 * recoil + 0.2;
      pose.rShoulderZ = -(0.65 * recoil + 0.2);
      pose.lElbowX = -0.5;
      pose.rElbowX = -0.5;
      pose.stiffness = 16;
      break;
    }

    case 'gk_ready': {
      const bounce = Math.sin(elapsedTime * 5.2) * 0.016;
      pose.pelvisY = BASE_PELVIS_Y - 0.165 + bounce;
      pose.torsoRotX = 0.34;
      pose.headRotX = -0.28;

      // Wide athletic goalkeeper set stance
      pose.lHipX = -0.5;
      pose.rHipX = -0.5;
      pose.lHipZ = 0.17;
      pose.rHipZ = -0.17;
      pose.lKneeX = 0.78;
      pose.rKneeX = 0.78;
      pose.lAnkleX = -0.28;
      pose.rAnkleX = -0.28;

      // Gloved hands held up, forward, and wide ready to dive or catch
      pose.lShoulderX = -0.62;
      pose.rShoulderX = -0.62;
      pose.lShoulderZ = 0.44;
      pose.rShoulderZ = -0.44;
      pose.lShoulderY = -0.22;
      pose.rShoulderY = 0.22;
      pose.lElbowX = -0.88 + bounce * 2.5;
      pose.rElbowX = -0.88 + bounce * 2.5;
      pose.stiffness = 14;
      break;
    }

    case 'gk_dive_left':
    case 'gk_dive_right': {
      const p = actionProgress(state);
      // Quick explosive launch -> full airborne horizontal extension -> cushioned turf landing
      const stretch = p < 0.18 ? p / 0.18 : p < 0.76 ? 1.0 : Math.max(0, 1 - (p - 0.76) / 0.24);
      const airArc = Math.sin(Math.min(1, p * 1.12) * Math.PI);

      // Character local +X is LEFT (negative pelvisRotZ leans top toward +X), -X is RIGHT (positive pelvisRotZ)
      const isLeftDive = state.actionState === 'gk_dive_left';
      const sideDir = isLeftDive ? 1 : -1;

      pose.pelvisX = sideDir * 0.2 * stretch;
      pose.pelvisY = BASE_PELVIS_Y - 0.28 * stretch + airArc * 0.24;
      pose.pelvisRotZ = -sideDir * 1.42 * stretch;
      pose.pelvisRotX = 0.12 * stretch;

      pose.torsoRotX = -0.06 * stretch;
      pose.torsoRotY = sideDir * 0.16 * stretch;
      pose.headRotZ = sideDir * 0.22 * stretch;
      pose.headRotX = -0.18 * stretch;

      // Both gloved arms fully extended overhead toward the shot!
      pose.lShoulderX = -2.68 * stretch;
      pose.rShoulderX = -2.58 * stretch;
      pose.lShoulderZ = 0.24 * stretch + 0.1;
      pose.rShoulderZ = -(0.24 * stretch + 0.1);
      pose.lElbowX = -0.14;
      pose.rElbowX = -0.14;

      // Dynamic split trailing legs during airborne stretch
      if (isLeftDive) {
        pose.lHipX = -0.14 * stretch;
        pose.lKneeX = 0.28 * stretch;
        pose.rHipX = 0.24 * stretch;
        pose.rKneeX = 0.52 * stretch;
        pose.rHipZ = -0.18 * stretch;
      } else {
        pose.rHipX = -0.14 * stretch;
        pose.rKneeX = 0.28 * stretch;
        pose.lHipX = 0.24 * stretch;
        pose.lKneeX = 0.52 * stretch;
        pose.lHipZ = 0.18 * stretch;
      }
      pose.lAnkleX = 0.35 * stretch;
      pose.rAnkleX = 0.35 * stretch;

      pose.stiffness = 24;
      break;
    }

    case 'celebrate': {
      const moving = state.speed > 1.1;
      const joyWave = Math.sin(elapsedTime * 6.5 + state.slotIndex);
      const hop = Math.abs(Math.sin(elapsedTime * 5.2 + state.slotIndex));

      if (moving) {
        // Joyful running airplane celebration!
        computeLocomotionPose(pose, state, stride, 'run');
        pose.pelvisY += hop * 0.06;
        pose.torsoRotX = -0.04;
        pose.torsoRotZ = joyWave * 0.14;
        pose.headRotX = -0.16;

        // Wide soaring airplane arms
        pose.lShoulderX = -0.18;
        pose.rShoulderX = -0.18;
        pose.lShoulderZ = 1.38 + joyWave * 0.12;
        pose.rShoulderZ = -(1.38 - joyWave * 0.12);
        pose.lElbowX = -0.18;
        pose.rElbowX = -0.18;
      } else {
        // Exuberant jumping double fist-pump celebration!
        pose.pelvisY = BASE_PELVIS_Y - 0.04 + hop * 0.24;
        pose.torsoRotX = -0.12;
        pose.torsoRotY = joyWave * 0.22;
        pose.headRotX = -0.24;

        pose.lHipX = -0.24 * hop;
        pose.rHipX = -0.18 * hop;
        pose.lHipZ = 0.14;
        pose.rHipZ = -0.14;
        pose.lKneeX = 0.18 + hop * 0.55;
        pose.rKneeX = 0.18 + hop * 0.45;

        const pump = Math.sin(elapsedTime * 11 + state.slotIndex) * 0.28;
        pose.lShoulderX = -2.35 + pump;
        pose.rShoulderX = -2.35 - pump;
        pose.lShoulderZ = 0.58;
        pose.rShoulderZ = -0.58;
        pose.lElbowX = -0.58 + pump * 0.4;
        pose.rElbowX = -0.58 - pump * 0.4;
      }
      pose.stiffness = 14;
      break;
    }

    default: {
      const _exhaustive: never = state.actionState;
      void _exhaustive;
      break;
    }
  }

  // Smooth exponential damping across every joint
  const alpha = 1 - Math.exp(-pose.stiffness * safeDt);

  rig.pelvis.position.x = damp(rig.pelvis.position.x, pose.pelvisX, alpha);
  rig.pelvis.position.y = damp(rig.pelvis.position.y, pose.pelvisY, alpha);
  rig.pelvis.position.z = damp(rig.pelvis.position.z, pose.pelvisZ, alpha);
  rig.pelvis.rotation.x = damp(rig.pelvis.rotation.x, pose.pelvisRotX, alpha);
  rig.pelvis.rotation.y = damp(rig.pelvis.rotation.y, pose.pelvisRotY, alpha);
  rig.pelvis.rotation.z = damp(rig.pelvis.rotation.z, pose.pelvisRotZ, alpha);

  rig.torso.rotation.x = damp(rig.torso.rotation.x, pose.torsoRotX, alpha);
  rig.torso.rotation.y = damp(rig.torso.rotation.y, pose.torsoRotY, alpha);
  rig.torso.rotation.z = damp(rig.torso.rotation.z, pose.torsoRotZ, alpha);

  rig.headGroup.rotation.x = damp(rig.headGroup.rotation.x, pose.headRotX, alpha);
  rig.headGroup.rotation.y = damp(rig.headGroup.rotation.y, pose.headRotY, alpha);
  rig.headGroup.rotation.z = damp(rig.headGroup.rotation.z, pose.headRotZ, alpha);

  rig.leftShoulder.rotation.x = damp(rig.leftShoulder.rotation.x, pose.lShoulderX, alpha);
  rig.leftShoulder.rotation.y = damp(rig.leftShoulder.rotation.y, pose.lShoulderY, alpha);
  rig.leftShoulder.rotation.z = damp(rig.leftShoulder.rotation.z, pose.lShoulderZ, alpha);
  rig.leftElbow.rotation.x = damp(rig.leftElbow.rotation.x, pose.lElbowX, alpha);

  rig.rightShoulder.rotation.x = damp(rig.rightShoulder.rotation.x, pose.rShoulderX, alpha);
  rig.rightShoulder.rotation.y = damp(rig.rightShoulder.rotation.y, pose.rShoulderY, alpha);
  rig.rightShoulder.rotation.z = damp(rig.rightShoulder.rotation.z, pose.rShoulderZ, alpha);
  rig.rightElbow.rotation.x = damp(rig.rightElbow.rotation.x, pose.rElbowX, alpha);

  rig.leftHip.rotation.x = damp(rig.leftHip.rotation.x, pose.lHipX, alpha);
  rig.leftHip.rotation.y = damp(rig.leftHip.rotation.y, pose.lHipY, alpha);
  rig.leftHip.rotation.z = damp(rig.leftHip.rotation.z, pose.lHipZ, alpha);
  rig.leftKnee.rotation.x = damp(rig.leftKnee.rotation.x, pose.lKneeX, alpha);
  rig.leftAnkle.rotation.x = damp(rig.leftAnkle.rotation.x, pose.lAnkleX, alpha);

  rig.rightHip.rotation.x = damp(rig.rightHip.rotation.x, pose.rHipX, alpha);
  rig.rightHip.rotation.y = damp(rig.rightHip.rotation.y, pose.rHipY, alpha);
  rig.rightHip.rotation.z = damp(rig.rightHip.rotation.z, pose.rHipZ, alpha);
  rig.rightKnee.rotation.x = damp(rig.rightKnee.rotation.x, pose.rKneeX, alpha);
  rig.rightAnkle.rotation.x = damp(rig.rightAnkle.rotation.x, pose.rAnkleX, alpha);

  // Ground contact shadow stays anchored to turf while subtly reflecting height/dive stretch
  const isDiving =
    state.actionState === 'gk_dive_left' || state.actionState === 'gk_dive_right';
  const airHeight = Math.max(0, state.position.y + (rig.pelvis.position.y - BASE_PELVIS_Y));
  const shadowScaleX = isDiving ? 1.55 : 1.0 + airHeight * 0.25;
  const shadowScaleY = state.actionState === 'tackle' ? 1.4 : 1.0 + airHeight * 0.25;

  rig.shadowBlob.position.x = rig.pelvis.position.x * 0.8;
  rig.shadowBlob.position.y = Math.max(0.02, 0.025 - state.position.y / rig.heightScale);
  rig.shadowBlob.scale.set(shadowScaleX, shadowScaleY, 1);

  if (rig.shadowBlob.material instanceof THREE.MeshBasicMaterial) {
    rig.shadowBlob.material.opacity = clamp(0.86 - airHeight * 0.45, 0.35, 0.88);
  }
}
