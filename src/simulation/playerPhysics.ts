import { BALL, PITCH } from '../config/constants';
import type {
  FootballerProfile,
  MatchStats,
  SimBallState,
  SimEvent,
  SimPlayerState,
} from '../types/game';

export const PLAYER_RADIUS = 0.46;

export interface PlayerMotionProfile {
  baseRunSpeed: number;
  sprintSpeed: number;
  dribbleSpeedFactor: number;
  acceleration: number;
  deceleration: number;
  turnRate: number;
  staminaDrainRate: number;
  staminaRecoverRate: number;
  tackleReach: number;
  pickupRadius: number;
}

export interface Vec2 {
  x: number;
  z: number;
}

export function clamp(v: number, min: number, max: number): number {
  return v < min ? min : v > max ? max : v;
}

export function wrapAngle(rad: number): number {
  let a = rad;
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

export function shortestAngleDelta(from: number, to: number): number {
  return wrapAngle(to - from);
}

function sanitizeFinite(v: number, fallback = 0): number {
  return Number.isFinite(v) ? v : fallback;
}

/**
 * Deterministic micro-variance in [-1, 1] derived from simulation state
 * so kicks feel organic without breaking 60Hz determinism.
 */
function deterministicJitter(a: number, b: number, c: number): number {
  const s = Math.sin(a * 12.9898 + b * 78.233 + c * 37.719) * 43758.5453;
  return (s - Math.floor(s)) * 2 - 1;
}

/**
 * Computes attribute-driven physical parameters directly from FootballerProfile stats
 * so Mbappé (98 pace), Messi (97 dribbling), Haaland (96 shooting / 94 physical),
 * De Bruyne (96 passing), and Van Dijk (93 defending) feel genuinely distinct.
 */
export function getPlayerMotionProfile(profile: FootballerProfile): PlayerMotionProfile {
  const { pace, dribbling, defending, physical } = profile.stats;
  const paceNorm = pace / 99;
  const dribNorm = dribbling / 99;
  const defNorm = defending / 99;
  const physNorm = physical / 99;

  const baseRunSpeed = 5.8 + paceNorm * 2.5;
  const sprintSpeed = 7.6 + paceNorm * 3.3;

  return {
    baseRunSpeed,
    sprintSpeed,
    dribbleSpeedFactor: 0.90 + dribNorm * 0.085,
    acceleration: 17.5 + paceNorm * 10.5 + dribNorm * 7.5,
    deceleration: 23.0 + dribNorm * 9.0,
    turnRate: 7.8 + dribNorm * 7.8,
    staminaDrainRate: 0.23 - physNorm * 0.08,
    staminaRecoverRate: 0.24 + physNorm * 0.14,
    tackleReach: 1.28 + defNorm * 0.48 + physNorm * 0.18,
    pickupRadius: 0.68 + dribNorm * 0.16,
  };
}

/**
 * Steps a single player's movement, stamina, turning lean, stride cycle, and action timers.
 */
export function updatePlayerMovement(
  player: SimPlayerState,
  desiredDir: Vec2,
  wantsSprint: boolean,
  dt: number,
  faceTargetAngle?: number
): void {
  const motion = getPlayerMotionProfile(player.profile);
  player.maxSpeed = motion.sprintSpeed;

  // Decrement cooldowns and timed action timers
  if (player.tackleCooldown > 0) {
    player.tackleCooldown = Math.max(0, player.tackleCooldown - dt);
  }
  if (player.kickCooldown > 0) {
    player.kickCooldown = Math.max(0, player.kickCooldown - dt);
  }
  if (player.actionTimer > 0) {
    player.actionTimer = Math.max(0, player.actionTimer - dt);
    if (player.actionTimer === 0) {
      if (
        player.actionState === 'stunned' ||
        player.actionState === 'tackle' ||
        player.actionState === 'pass' ||
        player.actionState === 'shoot_release' ||
        player.actionState === 'gk_dive_left' ||
        player.actionState === 'gk_dive_right'
      ) {
        player.actionState = player.role === 'GK' ? 'gk_ready' : 'idle';
        player.diveDirection = 0;
      }
    }
  }

  const prevFacing = player.facing;

  // Handle locked timed states first
  if (player.actionState === 'stunned') {
    const drag = Math.exp(-7.0 * dt);
    player.velocity.x *= drag;
    player.velocity.z *= drag;
    player.turnLean *= Math.exp(-10 * dt);
  } else if (player.actionState === 'tackle') {
    const drag = Math.exp(-4.0 * dt);
    player.velocity.x *= drag;
    player.velocity.z *= drag;
    player.turnLean *= Math.exp(-8 * dt);
  } else if (
    player.actionState === 'gk_dive_left' ||
    player.actionState === 'gk_dive_right'
  ) {
    const drag = Math.exp(-3.4 * dt);
    player.velocity.x *= drag;
    player.velocity.z *= drag;
    player.turnLean *= Math.exp(-8 * dt);
  } else {
    // Free movement (including dribble, shoot_charge, pass/shoot follow-through, celebrate)
    const dirMag = Math.hypot(desiredDir.x, desiredDir.z);
    const hasInput = dirMag > 0.04;
    const normX = hasInput ? desiredDir.x / Math.max(1, dirMag) : 0;
    const normZ = hasInput ? desiredDir.z / Math.max(1, dirMag) : 0;
    const throttle = clamp(dirMag, 0, 1);

    // Stamina management: smooth drain during sprint, generous recovery when jogging/idle
    const activelySprinting =
      wantsSprint &&
      hasInput &&
      player.actionState !== 'shoot_charge' &&
      player.actionState !== 'pass' &&
      player.actionState !== 'shoot_release';

    if (activelySprinting && player.stamina > 0.02) {
      player.stamina = Math.max(0, player.stamina - motion.staminaDrainRate * dt);
    } else {
      const recoverBoost = hasInput ? 0.8 : 1.35;
      player.stamina = Math.min(
        1,
        player.stamina + motion.staminaRecoverRate * recoverBoost * dt
      );
    }

    // Even at 0 stamina, player keeps decent sprint floor so movement never feels stuck
    const staminaRatio = 0.28 + 0.72 * clamp(player.stamina / 0.35, 0, 1);
    const effectiveSprintSpeed =
      motion.baseRunSpeed + (motion.sprintSpeed - motion.baseRunSpeed) * staminaRatio;

    let targetSpeed = activelySprinting
      ? effectiveSprintSpeed
      : motion.baseRunSpeed * throttle;

    if (player.hasBall) {
      targetSpeed *= motion.dribbleSpeedFactor;
    }
    if (player.actionState === 'shoot_charge') {
      targetSpeed *= 0.82;
    } else if (player.actionState === 'pass' || player.actionState === 'shoot_release') {
      targetSpeed *= 0.68;
    }

    const desiredVx = normX * targetSpeed;
    const desiredVz = normZ * targetSpeed;

    // Turning sharpness penalty when cutting hard at high speed (mitigated by dribbling)
    const currentSpeed = Math.hypot(player.velocity.x, player.velocity.z);
    let accelRate = hasInput ? motion.acceleration : motion.deceleration;

    if (hasInput && currentSpeed > 2.0) {
      const dot =
        (player.velocity.x * normX + player.velocity.z * normZ) / (currentSpeed + 1e-5);
      if (dot < 0.25) {
        // Sharp cut / reversal
        accelRate = motion.deceleration * (0.85 + (player.profile.stats.dribbling / 99) * 0.35);
      }
    }

    const dvx = desiredVx - player.velocity.x;
    const dvz = desiredVz - player.velocity.z;
    const dvLen = Math.hypot(dvx, dvz);
    const maxStep = accelRate * dt;

    if (dvLen <= maxStep) {
      player.velocity.x = desiredVx;
      player.velocity.z = desiredVz;
    } else {
      player.velocity.x += (dvx / dvLen) * maxStep;
      player.velocity.z += (dvz / dvLen) * maxStep;
    }

    // Snap tiny creeping velocities to 0
    if (!hasInput && Math.hypot(player.velocity.x, player.velocity.z) < 0.08) {
      player.velocity.x = 0;
      player.velocity.z = 0;
    }

    // Smooth facing orientation
    let targetFacing: number | null = null;
    if (faceTargetAngle !== undefined) {
      targetFacing = faceTargetAngle;
    } else if (hasInput) {
      targetFacing = Math.atan2(normX, normZ);
    } else if (Math.hypot(player.velocity.x, player.velocity.z) > 0.4) {
      targetFacing = Math.atan2(player.velocity.x, player.velocity.z);
    }

    if (targetFacing !== null) {
      const diff = shortestAngleDelta(player.facing, targetFacing);
      const maxTurn = motion.turnRate * dt;
      player.facing = wrapAngle(player.facing + clamp(diff, -maxTurn, maxTurn));
    }

    // Compute lateral turn lean (-1..1) for athletic 3D banking into turns
    const angularVel = shortestAngleDelta(prevFacing, player.facing) / Math.max(dt, 1e-4);
    const speedFactor = clamp(Math.hypot(player.velocity.x, player.velocity.z) / 8.5, 0, 1);
    const rawLean = clamp((-angularVel / 8.5) * speedFactor, -1, 1);
    player.turnLean += (rawLean - player.turnLean) * Math.min(1, 12 * dt);

    // Update locomotion action state when not in an override state
    if (
      player.actionState !== 'shoot_charge' &&
      player.actionState !== 'pass' &&
      player.actionState !== 'shoot_release' &&
      player.actionState !== 'celebrate'
    ) {
      const spd = Math.hypot(player.velocity.x, player.velocity.z);
      if (player.role === 'GK' && !player.hasBall && spd < 2.2) {
        player.actionState = 'gk_ready';
      } else if (spd < 0.35) {
        player.actionState = 'idle';
      } else if (player.hasBall && !activelySprinting) {
        player.actionState = 'dribble';
      } else if (activelySprinting && spd > motion.baseRunSpeed * 0.96) {
        player.actionState = 'sprint';
      } else if (spd > 4.2) {
        player.actionState = 'run';
      } else {
        player.actionState = 'jog';
      }
    }
  }

  // Integrate horizontal position
  player.position.x += player.velocity.x * dt;
  player.position.y = 0;
  player.position.z += player.velocity.z * dt;

  // Keep players cleanly inside pitch + technical apron
  const maxX = player.role === 'GK' ? PITCH.HALF_LENGTH - 0.35 : PITCH.HALF_LENGTH + 0.9;
  const maxZ = PITCH.HALF_WIDTH + 0.9;
  player.position.x = clamp(sanitizeFinite(player.position.x, 0), -maxX, maxX);
  player.position.z = clamp(sanitizeFinite(player.position.z, 0), -maxZ, maxZ);
  player.velocity.x = sanitizeFinite(player.velocity.x, 0);
  player.velocity.y = 0;
  player.velocity.z = sanitizeFinite(player.velocity.z, 0);

  player.speed = Math.hypot(player.velocity.x, player.velocity.z);

  // Advance continuous stride animation cycle proportionally to ground speed
  if (player.speed > 0.25) {
    const strideScale =
      player.profile.appearance.strideStyle === 'agile'
        ? 1.58
        : player.profile.appearance.strideStyle === 'powerful'
          ? 1.32
          : 1.44;
    player.animPhase = (player.animPhase + player.speed * dt * strideScale) % (Math.PI * 200);
  }
}

/**
 * Tactile soft-tether dribbling physics:
 * The ball sits naturally ahead of the carrier's preferred foot and oscillates slightly
 * with each stride. Spring-velocity guidance scales with `dribbling` stat so Messi keeps
 * razor-tight control on tight cuts while lower-dribbling players take wider knock-on touches.
 */
export function updateBallDribble(
  carrier: SimPlayerState,
  ball: SimBallState,
  dt: number
): void {
  const dribNorm = carrier.profile.stats.dribbling / 99;
  const motion = getPlayerMotionProfile(carrier.profile);

  const fx = Math.sin(carrier.facing);
  const fz = Math.cos(carrier.facing);
  // Player's right-hand vector: forward × up = (-cos(facing), 0, sin(facing))
  const rx = -Math.cos(carrier.facing);
  const rz = Math.sin(carrier.facing);

  const footSign = carrier.profile.preferredFoot === 'right' ? 1 : -1;
  const sprintBlend = clamp(
    (carrier.speed - motion.baseRunSpeed * 0.82) /
      Math.max(0.5, motion.sprintSpeed - motion.baseRunSpeed * 0.82),
    0,
    1
  );

  // Subtle stride-synced knock-on tap
  const strideKnock =
    carrier.speed > 0.5
      ? Math.sin(carrier.animPhase * 2.0) * (0.04 + sprintBlend * 0.08 + (1 - dribNorm) * 0.04)
      : 0;

  const baseLead = 0.58 + sprintBlend * (0.34 + (1 - dribNorm) * 0.14);
  const leadDist = baseLead + strideKnock;
  const latOffset = footSign * (0.14 - sprintBlend * 0.04);

  const targetX = carrier.position.x + fx * leadDist + rx * latOffset;
  const targetZ = carrier.position.z + fz * leadDist + rz * latOffset;

  // Soft-tether spring velocity guidance
  const stiffness = 13.5 + dribNorm * 14.5;
  const desiredVx = carrier.velocity.x + (targetX - ball.position.x) * stiffness;
  const desiredVz = carrier.velocity.z + (targetZ - ball.position.z) * stiffness;

  const response = Math.min(1, (15.0 + dribNorm * 11.0) * dt);
  ball.velocity.x += (desiredVx - ball.velocity.x) * response;
  ball.velocity.z += (desiredVz - ball.velocity.z) * response;
  ball.velocity.y = 0;

  ball.position.x += ball.velocity.x * dt;
  ball.position.z += ball.velocity.z * dt;

  // Cushion ball gently down to turf height if trapped from air
  if (ball.position.y > ball.radius) {
    ball.position.y = Math.max(
      ball.radius,
      ball.position.y - Math.max(2.5, (ball.position.y - ball.radius) * 14) * dt
    );
  } else {
    ball.position.y = ball.radius;
  }

  // Maximum tether stretch clamp so the ball never lags awkwardly behind on 180-degree cuts
  const dx = ball.position.x - carrier.position.x;
  const dz = ball.position.z - carrier.position.z;
  const dist = Math.hypot(dx, dz);
  const maxTether = 1.24 + sprintBlend * 0.28 + (1 - dribNorm) * 0.14;
  if (dist > maxTether && dist > 1e-5) {
    const pull = maxTether / dist;
    ball.position.x = carrier.position.x + dx * pull;
    ball.position.z = carrier.position.z + dz * pull;
  }

  // Keep ball slightly outside carrier's body cylinder
  const minDist = 0.42;
  if (dist < minDist) {
    if (dist > 1e-5) {
      ball.position.x = carrier.position.x + (dx / dist) * minDist;
      ball.position.z = carrier.position.z + (dz / dist) * minDist;
    } else {
      ball.position.x = carrier.position.x + fx * 0.56;
      ball.position.z = carrier.position.z + fz * 0.56;
    }
  }

  // Authentic ground rolling angular velocity
  ball.angularVelocity.x = ball.velocity.z / ball.radius;
  ball.angularVelocity.y = 0;
  ball.angularVelocity.z = -ball.velocity.x / ball.radius;
  ball.spin.x = 0;
  ball.spin.y = 0;
  ball.spin.z = 0;
  ball.isInAir = ball.position.y > ball.radius + 0.06;
  ball.lastTouchPlayerId = carrier.id;
  ball.lastTouchTeam = carrier.team;
}

/**
 * Resolves soft elastic shoulder-to-shoulder player collisions weighted by `physical` stat
 * so players never clip through each other and powerful athletes hold their ground.
 */
export function resolvePlayerCollisions(players: SimPlayerState[]): void {
  const minDist = PLAYER_RADIUS * 2;
  const minDistSq = minDist * minDist;

  for (let i = 0; i < players.length; i++) {
    const a = players[i];
    for (let j = i + 1; j < players.length; j++) {
      const b = players[j];

      const dx = b.position.x - a.position.x;
      const dz = b.position.z - a.position.z;
      const distSq = dx * dx + dz * dz;

      if (distSq >= minDistSq) continue;

      let nx = 1;
      let nz = 0;
      let dist = 0;
      if (distSq > 1e-6) {
        dist = Math.sqrt(distSq);
        nx = dx / dist;
        nz = dz / dist;
      }

      const overlap = minDist - dist;

      // Heavier physical weight resists being pushed back
      const massA = 0.65 + (a.profile.stats.physical / 99) * 0.7;
      const massB = 0.65 + (b.profile.stats.physical / 99) * 0.7;
      const invTotal = 1 / (massA + massB);
      const pushA = massB * invTotal;
      const pushB = massA * invTotal;

      a.position.x -= nx * overlap * pushA;
      a.position.z -= nz * overlap * pushA;
      b.position.x += nx * overlap * pushB;
      b.position.z += nz * overlap * pushB;

      // Soft elastic velocity separation along collision normal
      const relVx = b.velocity.x - a.velocity.x;
      const relVz = b.velocity.z - a.velocity.z;
      const vn = relVx * nx + relVz * nz;

      if (vn < 0) {
        const restitution = 0.25;
        const jImp = -(1 + restitution) * vn;
        a.velocity.x -= nx * jImp * pushA;
        a.velocity.z -= nz * jImp * pushA;
        b.velocity.x += nx * jImp * pushB;
        b.velocity.z += nz * jImp * pushB;
      }
    }
  }
}

/**
 * Computes minimum distance from point (px, pz) to segment A -> B in XZ plane.
 */
function pointToSegmentDistSq(
  px: number,
  pz: number,
  ax: number,
  az: number,
  bx: number,
  bz: number
): number {
  const abx = bx - ax;
  const abz = bz - az;
  const lenSq = abx * abx + abz * abz;
  if (lenSq < 1e-6) {
    const dx = px - ax;
    const dz = pz - az;
    return dx * dx + dz * dz;
  }
  const t = clamp(((px - ax) * abx + (pz - az) * abz) / lenSq, 0, 1);
  const cx = ax + abx * t;
  const cz = az + abz * t;
  const dx = px - cx;
  const dz = pz - cz;
  return dx * dx + dz * dz;
}

/**
 * Smart directional pass assist: selects the best teammate along the desired aim cone
 * combining alignment, lane openness, and ideal passing distance.
 */
export function findBestPassTarget(
  passer: SimPlayerState,
  players: SimPlayerState[],
  aimDir: Vec2 | null
): SimPlayerState | null {
  let dirX = Math.sin(passer.facing);
  let dirZ = Math.cos(passer.facing);

  if (aimDir) {
    const len = Math.hypot(aimDir.x, aimDir.z);
    if (len > 0.15) {
      dirX = aimDir.x / len;
      dirZ = aimDir.z / len;
    }
  }

  let bestTarget: SimPlayerState | null = null;
  let bestScore = -Infinity;

  const attackSign = passer.team === 'home' ? 1 : -1;

  for (let i = 0; i < players.length; i++) {
    const tm = players[i];
    if (tm.team !== passer.team || tm.id === passer.id) continue;
    if (tm.actionState === 'stunned') continue;

    const dx = tm.position.x - passer.position.x;
    const dz = tm.position.z - passer.position.z;
    const dist = Math.hypot(dx, dz);

    if (dist < 2.2 || dist > 44.0) continue;

    const ux = dx / dist;
    const uz = dz / dist;
    const alignment = ux * dirX + uz * dirZ;

    // Require teammate to be roughly within a forward-ish cone unless none exist
    if (alignment < -0.15) continue;

    // Avoid accidentally passing backward to GK unless strongly aimed at them
    if (tm.role === 'GK' && alignment < 0.72) continue;

    // Distance preference: sweet spot between 6m and 22m
    const distScore = 1.0 - clamp(Math.abs(dist - 12.5) / 26.0, 0, 1);

    // Passing lane clarity against opposing players
    let minOppLaneDist = 10.0;
    let minOppReceiverDist = 10.0;
    for (let j = 0; j < players.length; j++) {
      const opp = players[j];
      if (opp.team === passer.team) continue;
      const laneDist = Math.sqrt(
        pointToSegmentDistSq(
          opp.position.x,
          opp.position.z,
          passer.position.x,
          passer.position.z,
          tm.position.x,
          tm.position.z
        )
      );
      if (laneDist < minOppLaneDist) minOppLaneDist = laneDist;

      const recDist = Math.hypot(
        opp.position.x - tm.position.x,
        opp.position.z - tm.position.z
      );
      if (recDist < minOppReceiverDist) minOppReceiverDist = recDist;
    }

    const laneScore = clamp(minOppLaneDist / 3.2, 0, 1) * 0.75 + clamp(minOppReceiverDist / 3.5, 0, 1) * 0.45;
    const forwardBonus = ux * attackSign > 0.2 ? 0.25 : 0;

    const score = alignment * 3.1 + distScore * 0.75 + laneScore + forwardBonus;
    if (score > bestScore) {
      bestScore = score;
      bestTarget = tm;
    }
  }

  return bestTarget;
}

/**
 * Executes a crisp, lead-compensated pass with directional assist, charge-scaled pace,
 * passing-stat precision/bend, and automatic passTargetId assignment.
 */
export function executePass(
  passer: SimPlayerState,
  ball: SimBallState,
  players: SimPlayerState[],
  aimDir: Vec2 | null,
  passCharge: number,
  stats: MatchStats,
  events: SimEvent[],
  forcedTarget?: SimPlayerState | null
): SimPlayerState | null {
  const charge = clamp(passCharge, 0, 1);
  const passNorm = passer.profile.stats.passing / 99;
  const target = forcedTarget !== undefined ? forcedTarget : findBestPassTarget(passer, players, aimDir);

  let dirX = Math.sin(passer.facing);
  let dirZ = Math.cos(passer.facing);
  let passSpeed = 14.5 + charge * 8.0 + passNorm * 2.0;
  let dist = 12.0;

  if (target) {
    const rawDx = target.position.x - ball.position.x;
    const rawDz = target.position.z - ball.position.z;
    dist = Math.max(1.5, Math.hypot(rawDx, rawDz));

    // Tap = crisp 14-16 m/s ground pass; charged = driven 20-23+ m/s through-ball
    const baseByCharge = 14.2 + charge * 7.8;
    const distBoost = clamp((dist - 8.0) * 0.34, -1.2, 5.2);
    passSpeed = clamp((baseByCharge + distBoost) * (0.93 + passNorm * 0.11), 13.0, 26.0);

    // Lead receiver cleanly into stride
    const flightTime = clamp(dist / passSpeed, 0.12, 1.35);
    const leadWeight = charge > 0.35 ? 0.65 : 0.55;
    const leadX = clamp(
      target.position.x + target.velocity.x * flightTime * leadWeight,
      -PITCH.HALF_LENGTH + 1.2,
      PITCH.HALF_LENGTH - 1.2
    );
    const leadZ = clamp(
      target.position.z + target.velocity.z * flightTime * leadWeight,
      -PITCH.HALF_WIDTH + 1.2,
      PITCH.HALF_WIDTH - 1.2
    );

    const ldx = leadX - ball.position.x;
    const ldz = leadZ - ball.position.z;
    const lLen = Math.hypot(ldx, ldz);
    if (lLen > 1e-4) {
      dirX = ldx / lLen;
      dirZ = ldz / lLen;
    }
  } else if (aimDir) {
    const aLen = Math.hypot(aimDir.x, aimDir.z);
    if (aLen > 0.15) {
      dirX = aimDir.x / aLen;
      dirZ = aimDir.z / aLen;
    }
  }

  // Slight deterministic precision variance inversely scaled by passing stat
  const jitter = deterministicJitter(passer.position.x, passer.position.z, charge + dist);
  const maxAngleErr = (1.0 - passNorm * 0.78) * 0.085;
  const errAngle = jitter * maxAngleErr;
  const cosE = Math.cos(errAngle);
  const sinE = Math.sin(errAngle);
  const finalDirX = dirX * cosE - dirZ * sinE;
  const finalDirZ = dirX * sinE + dirZ * cosE;

  // Subtle loft for long/charged passes, crisp grass-skimmer for tap passes
  const loftVy =
    dist > 16.5 || charge > 0.58
      ? clamp((dist - 12.0) * 0.14 + charge * 2.3, 0.55, 4.4)
      : 0.25;

  // Subtle whip curl for skilled passers on longer passes
  const footSign = passer.profile.preferredFoot === 'right' ? 1 : -1;
  const bendSpin = dist > 11.0 ? footSign * (1.5 + passNorm * 3.2) * (0.4 + charge * 0.6) : 0;

  // Release ball
  passer.hasBall = false;
  passer.passCharge = 0;
  passer.facing = Math.atan2(finalDirX, finalDirZ);
  passer.actionState = 'pass';
  passer.actionDuration = 0.24;
  passer.actionTimer = 0.24;
  passer.kickCooldown = 0.24;
  passer.kickLeg = passer.profile.preferredFoot;

  ball.ownerId = null;
  ball.position.y = Math.max(ball.radius, ball.position.y);
  ball.velocity.x = finalDirX * passSpeed;
  ball.velocity.y = loftVy;
  ball.velocity.z = finalDirZ * passSpeed;
  ball.spin.x = 0;
  ball.spin.y = bendSpin;
  ball.spin.z = 0;
  ball.passTargetId = target ? target.id : null;
  ball.pickupLockTimer = 0.22;
  ball.lastKickerId = passer.id;
  ball.lastTouchPlayerId = passer.id;
  ball.lastTouchTeam = passer.team;
  ball.lastKickPower = clamp(0.28 + charge * 0.45, 0.25, 0.78);

  if (passer.team === 'home') {
    stats.homePasses += 1;
  } else {
    stats.awayPasses += 1;
  }

  events.push({
    type: 'kick_pass',
    intensity: clamp(passSpeed / 24, 0.35, 0.92),
    position: { x: ball.position.x, y: ball.position.y, z: ball.position.z },
  });

  return target;
}

/**
 * Executes a powerful, curved shot toward the opponent's goal with directional corner steering,
 * attribute-scaled shot speed & sweet-spot accuracy, and authentic Magnus curl.
 * Returns the initial launch speed (m/s).
 */
export function executeShot(
  shooter: SimPlayerState,
  ball: SimBallState,
  aimDir: Vec2 | null,
  shotCharge: number,
  stats: MatchStats,
  events: SimEvent[],
  explicitTargetZ?: number
): number {
  const charge = clamp(shotCharge, 0, 1);
  const shootNorm = shooter.profile.stats.shooting / 99;
  const attackSign = shooter.team === 'home' ? 1 : -1;
  const goalX = attackSign * PITCH.HALF_LENGTH;

  // Determine target Z inside goal mouth with strong user directional steering
  let targetZ: number;
  if (explicitTargetZ !== undefined) {
    targetZ = explicitTargetZ;
  } else if (aimDir && Math.hypot(aimDir.x, aimDir.z) > 0.15) {
    const aLen = Math.hypot(aimDir.x, aimDir.z);
    const normZ = aimDir.z / aLen;
    // WASD Z component steers cleanly toward top (-Z) or bottom (+Z) corner
    targetZ = clamp(
      normZ * (PITCH.GOAL_HALF_WIDTH - 0.32) + shooter.position.z * 0.08,
      -(PITCH.GOAL_HALF_WIDTH - 0.26),
      PITCH.GOAL_HALF_WIDTH - 0.26
    );
  } else {
    // Default aim away from center toward the far post
    targetZ = shooter.position.z >= 0 ? -1.85 : 1.85;
  }

  // Sweet-spot accuracy: overcharging (>0.86) introduces mild risk without constantly blasting over
  const overchargePenalty = Math.max(0, charge - 0.86) * 2.4;
  const errorScale = (1.0 - shootNorm * 0.72) * (0.45 + overchargePenalty);
  const jitterZ = deterministicJitter(shooter.position.x, shooter.position.z, charge * 13.7);
  const jitterY = deterministicJitter(shooter.position.z, shooter.position.x, charge * 7.3);

  const aimedZ = targetZ + jitterZ * 0.95 * errorScale;

  // Desired arrival height at goal line: low driven -> mid -> rising upper-90 thunderbolt
  let targetY: number;
  if (charge < 0.25) {
    targetY = 0.28 + (charge / 0.25) * 0.45;
  } else if (charge < 0.78) {
    targetY = 0.73 + ((charge - 0.25) / 0.53) * 1.15;
  } else {
    targetY = 1.88 + ((charge - 0.78) / 0.22) * 0.46 + overchargePenalty * 0.25;
  }
  targetY = clamp(targetY + jitterY * 0.22 * errorScale, 0.24, PITCH.GOAL_HEIGHT + 0.45);

  // Shot speed directly from spec: 18 + shotCharge * 15 + (shooting / 99) * 4.5
  const shotSpeed = Math.min(BALL.MAX_SPEED, 18.0 + charge * 15.0 + shootNorm * 4.5);

  // Authentic finesse side-spin / curl based on preferred foot and angle to goal
  const footSign = shooter.profile.preferredFoot === 'right' ? 1 : -1;
  // Right-footer attacking +X curls CCW (+spinY -> bends toward -Z); flip for -X attack
  let curlSign = footSign * attackSign;
  // If curling across goal toward far corner, match finesse bend naturally
  if (Math.abs(shooter.position.z) > 4.5 && Math.sign(aimedZ) !== Math.sign(shooter.position.z)) {
    curlSign = shooter.position.z > 0 ? 1 : -1;
  }
  const spinY = curlSign * (3.6 + shootNorm * 5.2) * (0.42 + charge * 0.58);

  const rawDx = goalX - ball.position.x;
  const rawDz = aimedZ - ball.position.z;
  const horizDist = Math.max(2.0, Math.hypot(rawDx, rawDz));
  const estFlight = clamp(horizDist / Math.max(shotSpeed * 0.92, 12.0), 0.1, 1.5);

  // Pre-compensate initial launch angle slightly so the Magnus curl bends INTO the target corner!
  const expectedCurveZ = -spinY * (rawDx / horizDist) * shotSpeed * BALL.MAGNUS_COEFF * 0.5 * estFlight * estFlight;
  const launchTargetZ = aimedZ - clamp(expectedCurveZ * 0.65, -2.2, 2.2);

  const ldx = goalX - ball.position.x;
  const ldz = launchTargetZ - ball.position.z;
  const lDist = Math.max(1.0, Math.hypot(ldx, ldz));
  const dirX = ldx / lDist;
  const dirZ = ldz / lDist;

  // Solve ballistic vertical launch velocity to arrive near targetY at goal line
  const estHorizSpeed = Math.max(12.0, shotSpeed * 0.94);
  const tGoal = clamp(lDist / estHorizSpeed, 0.1, 1.45);
  const rawVy = (targetY - ball.position.y) / tGoal + 0.5 * BALL.GRAVITY * tGoal * 0.88;
  const vy = clamp(rawVy, 0.9, Math.min(11.5, shotSpeed * 0.42));

  const horizMag = Math.sqrt(Math.max(16.0, shotSpeed * shotSpeed - vy * vy));

  // Add subtle topspin on hard shots so thunderbolts dip under the bar
  const topspinMag = charge > 0.45 ? (charge - 0.45) * 4.5 : 0;
  // Topspin axis = left-hand vector relative to shot direction: (-dirZ, 0, dirX)
  const spinX = -dirZ * topspinMag;
  const spinZ = dirX * topspinMag;

  // Release ball
  shooter.hasBall = false;
  shooter.shotCharge = 0;
  shooter.passCharge = 0;
  shooter.facing = Math.atan2(dirX, dirZ);
  shooter.actionState = 'shoot_release';
  shooter.actionDuration = 0.30;
  shooter.actionTimer = 0.30;
  shooter.kickCooldown = 0.32;
  shooter.kickLeg = shooter.profile.preferredFoot;

  ball.ownerId = null;
  ball.position.y = Math.max(ball.radius, ball.position.y);
  ball.velocity.x = dirX * horizMag;
  ball.velocity.y = vy;
  ball.velocity.z = dirZ * horizMag;
  ball.spin.x = spinX;
  ball.spin.y = spinY;
  ball.spin.z = spinZ;
  ball.passTargetId = null;
  ball.pickupLockTimer = 0.24;
  ball.lastKickerId = shooter.id;
  ball.lastTouchPlayerId = shooter.id;
  ball.lastTouchTeam = shooter.team;
  ball.lastKickPower = clamp(0.45 + charge * 0.55, 0.45, 1.0);

  // Track shot statistics
  const onTarget =
    Math.abs(aimedZ) <= PITCH.GOAL_HALF_WIDTH - 0.12 && targetY <= PITCH.GOAL_HEIGHT - 0.06;
  if (shooter.team === 'home') {
    stats.homeShots += 1;
    if (onTarget) stats.homeShotsOnTarget += 1;
  } else {
    stats.awayShots += 1;
    if (onTarget) stats.awayShotsOnTarget += 1;
  }

  events.push({
    type: 'kick_shot',
    intensity: clamp(0.48 + charge * 0.52, 0.48, 1.0),
    position: { x: ball.position.x, y: ball.position.y, z: ball.position.z },
  });

  return shotSpeed;
}

/**
 * Checks whether an active tackling player reaches and cleanly wins the ball.
 * Returns true if the tackle made contact with the ball.
 */
export function checkActiveTackleHit(
  tackler: SimPlayerState,
  ball: SimBallState,
  players: SimPlayerState[],
  stats: MatchStats,
  events: SimEvent[]
): boolean {
  if (tackler.actionState !== 'tackle') return false;
  // Active hitbox during the lunge extension window
  if (tackler.actionTimer < tackler.actionDuration * 0.22) return false;
  if (ball.position.y > 1.2) return false;

  const motion = getPlayerMotionProfile(tackler.profile);
  const fx = Math.sin(tackler.facing);
  const fz = Math.cos(tackler.facing);

  // Foot extension point slightly ahead of tackler's center
  const footX = tackler.position.x + fx * 0.55;
  const footZ = tackler.position.z + fz * 0.55;
  const distToBall = Math.hypot(ball.position.x - footX, ball.position.z - footZ);

  if (distToBall > motion.tackleReach * 0.72) return false;

  // Already owned by teammate? Don't dispossess own teammate
  if (ball.ownerId !== null) {
    const carrier = players.find((p) => p.id === ball.ownerId);
    if (!carrier || carrier.team === tackler.team) return false;

    // Cleanly dispossess opponent!
    carrier.hasBall = false;
    carrier.shotCharge = 0;
    carrier.passCharge = 0;
    carrier.actionState = 'stunned';
    carrier.actionDuration = 0.42;
    carrier.actionTimer = 0.42;

    // Slight physical knockback to dispossessed player
    const pushDirX = carrier.position.x - tackler.position.x;
    const pushDirZ = carrier.position.z - tackler.position.z;
    const pLen = Math.hypot(pushDirX, pushDirZ) || 1;
    carrier.velocity.x = (pushDirX / pLen) * 3.2;
    carrier.velocity.z = (pushDirZ / pLen) * 3.2;

    // Pop the ball crisply forward in tackler's direction so tackler wins possession cleanly
    ball.ownerId = null;
    ball.passTargetId = null;
    ball.velocity.x = fx * 4.6 + tackler.velocity.x * 0.25;
    ball.velocity.y = 0.65;
    ball.velocity.z = fz * 4.6 + tackler.velocity.z * 0.25;
    ball.spin.x = 0;
    ball.spin.y = 0;
    ball.spin.z = 0;
    ball.lastTouchPlayerId = tackler.id;
    ball.lastTouchTeam = tackler.team;
    ball.lastKickerId = carrier.id;
    ball.pickupLockTimer = 0.14;
    ball.lastKickPower = 0.35;

    if (tackler.team === 'home') {
      stats.homeTackles += 1;
    } else {
      stats.awayTackles += 1;
    }

    events.push({
      type: 'tackle',
      intensity: 0.95,
      position: { x: ball.position.x, y: ball.position.y, z: ball.position.z },
    });

    return true;
  }

  // Loose ball poke
  if (ball.lastKickerId !== tackler.id || ball.pickupLockTimer <= 0) {
    ball.velocity.x = fx * 5.8 + tackler.velocity.x * 0.2;
    ball.velocity.y = 0.55;
    ball.velocity.z = fz * 5.8 + tackler.velocity.z * 0.2;
    ball.passTargetId = null;
    ball.lastTouchPlayerId = tackler.id;
    ball.lastTouchTeam = tackler.team;
    ball.lastKickerId = tackler.id;
    ball.pickupLockTimer = 0.12;

    events.push({
      type: 'tackle',
      intensity: 0.7,
      position: { x: ball.position.x, y: ball.position.y, z: ball.position.z },
    });
    return true;
  }

  return false;
}

/**
 * Initiates a forward tackle lunge with reach and impulse scaled by defending, pace & physical.
 */
export function executeTackle(
  tackler: SimPlayerState,
  ball: SimBallState,
  players: SimPlayerState[],
  aimDir: Vec2 | null,
  stats: MatchStats,
  events: SimEvent[]
): boolean {
  if (tackler.tackleCooldown > 0) return false;
  if (
    tackler.actionState === 'stunned' ||
    tackler.actionState === 'tackle' ||
    tackler.actionState === 'gk_dive_left' ||
    tackler.actionState === 'gk_dive_right'
  ) {
    return false;
  }

  let dirX = Math.sin(tackler.facing);
  let dirZ = Math.cos(tackler.facing);

  // Prefer lunging directly toward ball if close and no opposing aim override
  const toBallX = ball.position.x - tackler.position.x;
  const toBallZ = ball.position.z - tackler.position.z;
  const distToBall = Math.hypot(toBallX, toBallZ);

  if (aimDir && Math.hypot(aimDir.x, aimDir.z) > 0.2) {
    const aLen = Math.hypot(aimDir.x, aimDir.z);
    const ax = aimDir.x / aLen;
    const az = aimDir.z / aLen;
    if (distToBall < 3.8 && distToBall > 0.1) {
      // Blend user aim slightly toward the ball for crisp responsiveness
      const bx = toBallX / distToBall;
      const bz = toBallZ / distToBall;
      const dot = ax * bx + az * bz;
      if (dot > 0.25) {
        const mx = ax * 0.45 + bx * 0.55;
        const mz = az * 0.45 + bz * 0.55;
        const mLen = Math.hypot(mx, mz) || 1;
        dirX = mx / mLen;
        dirZ = mz / mLen;
      } else {
        dirX = ax;
        dirZ = az;
      }
    } else {
      dirX = ax;
      dirZ = az;
    }
  } else if (distToBall < 4.8 && distToBall > 0.1) {
    dirX = toBallX / distToBall;
    dirZ = toBallZ / distToBall;
  }

  const paceNorm = tackler.profile.stats.pace / 99;
  const physNorm = tackler.profile.stats.physical / 99;
  const lungeSpeed = 9.2 + paceNorm * 2.4 + physNorm * 1.1;

  tackler.facing = Math.atan2(dirX, dirZ);
  tackler.velocity.x = dirX * lungeSpeed;
  tackler.velocity.z = dirZ * lungeSpeed;
  tackler.actionState = 'tackle';
  tackler.actionDuration = 0.32;
  tackler.actionTimer = 0.32;
  tackler.tackleCooldown = 0.82;
  tackler.shotCharge = 0;
  tackler.passCharge = 0;

  // Immediate check on lunge start
  const hit = checkActiveTackleHit(tackler, ball, players, stats, events);
  if (!hit) {
    events.push({
      type: 'tackle',
      intensity: 0.42,
      position: { x: tackler.position.x, y: 0.2, z: tackler.position.z },
    });
  }
  return true;
}

/**
 * Handles loose-ball trapping/interception and close-range standing dispossessions.
 * Returns the newly claiming player if possession changed.
 */
export function updateBallPossessionAndInterceptions(
  players: SimPlayerState[],
  ball: SimBallState,
  stats: MatchStats,
  events: SimEvent[]
): SimPlayerState | null {
  // 1. Check active tackles first
  for (let i = 0; i < players.length; i++) {
    if (players[i].actionState === 'tackle') {
      checkActiveTackleHit(players[i], ball, players, stats, events);
    }
  }

  // 2. If ball is owned, check clean close-range standing dispossession
  if (ball.ownerId !== null) {
    const carrier = players.find((p) => p.id === ball.ownerId);
    if (!carrier || !carrier.hasBall) {
      ball.ownerId = null;
    } else if (carrier.role !== 'GK') {
      // Check opposing outfield players stepping cleanly across the ball path
      for (let i = 0; i < players.length; i++) {
        const opp = players[i];
        if (opp.team === carrier.team || opp.role === 'GK') continue;
        if (opp.actionState === 'stunned' || opp.tackleCooldown > 0) continue;

        const distBall = Math.hypot(
          ball.position.x - opp.position.x,
          ball.position.z - opp.position.z
        );
        const defNorm = opp.profile.stats.defending / 99;
        // Require a genuine clean step onto the ball so skilled dribblers can beat 1v1 defenders
        const standReach = (carrier.isControlled ? 0.39 : 0.46) + defNorm * 0.1;

        if (distBall < standReach) {
          // Check that defender is stepping in front of / onto the ball, not clipping from behind
          const oppToBallX = (ball.position.x - opp.position.x) / (distBall + 1e-5);
          const oppToBallZ = (ball.position.z - opp.position.z) / (distBall + 1e-5);
          const oppFaceDot =
            oppToBallX * Math.sin(opp.facing) + oppToBallZ * Math.cos(opp.facing);

          const carrierToOppX = opp.position.x - carrier.position.x;
          const carrierToOppZ = opp.position.z - carrier.position.z;
          const cDist = Math.hypot(carrierToOppX, carrierToOppZ) + 1e-5;
          const inFrontOfCarrier =
            (carrierToOppX / cDist) * Math.sin(carrier.facing) +
            (carrierToOppZ / cDist) * Math.cos(carrier.facing);

          if (oppFaceDot > 0.42 && inFrontOfCarrier > 0.2) {
            const defPower = opp.profile.stats.defending * 0.65 + opp.profile.stats.physical * 0.35;
            const dribPower =
              carrier.profile.stats.dribbling * 0.65 + carrier.profile.stats.physical * 0.35;

            const carrierBallDist = Math.hypot(
              ball.position.x - carrier.position.x,
              ball.position.z - carrier.position.z
            );
            if (distBall < carrierBallDist * 0.72 || defPower >= dribPower + 2) {
              carrier.hasBall = false;
              carrier.shotCharge = 0;
              carrier.passCharge = 0;
              carrier.actionState = 'stunned';
              carrier.actionDuration = 0.24;
              carrier.actionTimer = 0.24;

              opp.hasBall = true;
              opp.tackleCooldown = 0.85;
              ball.ownerId = opp.id;
              ball.passTargetId = null;
              ball.lastTouchPlayerId = opp.id;
              ball.lastTouchTeam = opp.team;
              ball.spin.x = 0;
              ball.spin.y = 0;
              ball.spin.z = 0;

              if (opp.team === 'home') {
                stats.homeTackles += 1;
              } else {
                stats.awayTackles += 1;
              }

              events.push({
                type: 'tackle',
                intensity: 0.58,
                position: { x: ball.position.x, y: ball.position.y, z: ball.position.z },
              });
              return opp;
            }
          }
        }
      }
    }
    return null;
  }

  // 3. Ball is loose: find closest eligible player who can control or deflect it
  if (ball.position.y > 1.35) return null;

  const ballSpeed = Math.hypot(ball.velocity.x, ball.velocity.y, ball.velocity.z);
  let bestClaimer: SimPlayerState | null = null;
  let bestDist = Infinity;

  for (let i = 0; i < players.length; i++) {
    const p = players[i];
    // GK saves are handled separately in AI controller so GK gets diving reach
    if (p.role === 'GK') continue;
    if (p.actionState === 'stunned') continue;
    if (ball.pickupLockTimer > 0 && ball.lastKickerId === p.id) continue;

    const motion = getPlayerMotionProfile(p.profile);
    const isPassTarget = ball.passTargetId === p.id;
    const effectiveRadius = isPassTarget ? motion.pickupRadius + 0.22 : motion.pickupRadius;

    const d = Math.hypot(ball.position.x - p.position.x, ball.position.z - p.position.z);
    if (d < effectiveRadius && d < bestDist) {
      bestDist = d;
      bestClaimer = p;
    }
  }

  if (!bestClaimer) return null;

  // Very fast shot hitting an outfield defender -> realistic block/deflection rather than magnetic glue
  if (
    ballSpeed > 19.5 &&
    ball.passTargetId !== bestClaimer.id &&
    ball.lastTouchTeam !== bestClaimer.team
  ) {
    const nx = (ball.position.x - bestClaimer.position.x) / (bestDist + 1e-4);
    const nz = (ball.position.z - bestClaimer.position.z) / (bestDist + 1e-4);
    ball.velocity.x = nx * ballSpeed * 0.42 + bestClaimer.velocity.x * 0.4;
    ball.velocity.y = Math.max(1.2, Math.abs(ball.velocity.y) * 0.5);
    ball.velocity.z = nz * ballSpeed * 0.42 + bestClaimer.velocity.z * 0.4;
    ball.lastTouchPlayerId = bestClaimer.id;
    ball.lastTouchTeam = bestClaimer.team;
    ball.lastKickerId = bestClaimer.id;
    ball.pickupLockTimer = 0.16;
    ball.passTargetId = null;

    events.push({
      type: 'tackle',
      intensity: 0.72,
      position: { x: ball.position.x, y: ball.position.y, z: ball.position.z },
    });
    return null;
  }

  // Clean trap / reception!
  for (let i = 0; i < players.length; i++) {
    players[i].hasBall = false;
  }
  bestClaimer.hasBall = true;
  ball.ownerId = bestClaimer.id;
  ball.passTargetId = null;
  ball.lastTouchPlayerId = bestClaimer.id;
  ball.lastTouchTeam = bestClaimer.team;
  ball.spin.x = 0;
  ball.spin.y = 0;
  ball.spin.z = 0;
  ball.velocity.y = 0;

  return bestClaimer;
}
