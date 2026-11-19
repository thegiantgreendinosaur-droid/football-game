import { BALL, PITCH } from '../config/constants';
import type {
  MatchStats,
  SimBallState,
  SimEvent,
  SimPlayerState,
  TeamSide,
  Vec3,
} from '../types/game';
import {
  clamp,
  executePass,
  executeShot,
  executeTackle,
  type Vec2,
} from './playerPhysics';

export interface PlayerAiMemory {
  passDecisionTimer: number;
  shootWindupTimer: number;
  shootTargetZ: number;
  shootChargeTarget: number;
  gkHoldTimer: number;
  gkReactionTimer: number;
  gkTrackingShot: boolean;
  tackleAttemptCooldown: number;
}

export interface AiRuntimeState {
  memories: Map<string, PlayerAiMemory>;
  restartAutoPassTimer: number;
  restartTakerId: string | null;
}

export interface AiSteeringCommand {
  dirX: number;
  dirZ: number;
  sprint: boolean;
  faceAngle?: number;
}

export interface AiStepResult {
  commands: Map<string, AiSteeringCommand>;
  lastShotSpeed: number | null;
  lastShooterId: string | null;
}

export function createAiRuntimeState(): AiRuntimeState {
  return {
    memories: new Map<string, PlayerAiMemory>(),
    restartAutoPassTimer: 0,
    restartTakerId: null,
  };
}

export function resetAiRuntimeState(state: AiRuntimeState): void {
  state.memories.clear();
  state.restartAutoPassTimer = 0;
  state.restartTakerId = null;
}

function getMemory(state: AiRuntimeState, playerId: string): PlayerAiMemory {
  let mem = state.memories.get(playerId);
  if (!mem) {
    mem = {
      passDecisionTimer: 0.45,
      shootWindupTimer: 0,
      shootTargetZ: 0,
      shootChargeTarget: 0.55,
      gkHoldTimer: 0,
      gkReactionTimer: 0,
      gkTrackingShot: false,
      tackleAttemptCooldown: 0,
    };
    state.memories.set(playerId, mem);
  }
  return mem;
}

/**
 * Helper to compute steering vector from player to target point with smooth arrival deceleration.
 */
function steerToward(
  player: SimPlayerState,
  tx: number,
  tz: number,
  sprint: boolean,
  arriveRadius = 1.6,
  faceAngle?: number
): AiSteeringCommand {
  player.aiTarget.x = tx;
  player.aiTarget.y = 0;
  player.aiTarget.z = tz;

  const dx = tx - player.position.x;
  const dz = tz - player.position.z;
  const dist = Math.hypot(dx, dz);

  if (dist < 0.25) {
    return { dirX: 0, dirZ: 0, sprint: false, faceAngle };
  }

  const throttle = dist < arriveRadius ? clamp(dist / arriveRadius, 0.18, 1) : 1;
  return {
    dirX: (dx / dist) * throttle,
    dirZ: (dz / dist) * throttle,
    sprint: sprint && dist > 2.2,
    faceAngle,
  };
}

/**
 * Minimum distance from point P to segment A->B in XZ plane (for passing lane clarity).
 */
function segmentPointDist(
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
  if (lenSq < 1e-6) return Math.hypot(px - ax, pz - az);
  const t = clamp(((px - ax) * abx + (pz - az) * abz) / lenSq, 0, 1);
  return Math.hypot(px - (ax + abx * t), pz - (az + abz * t));
}

/**
 * Picks the best open teammate for an AI player (including GKs distributing the ball).
 */
function findBestAiPassTarget(
  passer: SimPlayerState,
  players: SimPlayerState[],
  preferForward: boolean
): { target: SimPlayerState; score: number } | null {
  const attackSign = passer.team === 'home' ? 1 : -1;
  let bestTarget: SimPlayerState | null = null;
  let bestScore = -Infinity;

  for (let i = 0; i < players.length; i++) {
    const tm = players[i];
    if (tm.team !== passer.team || tm.id === passer.id) continue;
    if (tm.role === 'GK') continue;
    if (tm.actionState === 'stunned') continue;

    const dx = tm.position.x - passer.position.x;
    const dz = tm.position.z - passer.position.z;
    const dist = Math.hypot(dx, dz);
    if (dist < 4.0 || dist > 38.0) continue;

    // Lane & marker openness
    let minLaneDist = 12.0;
    let minMarkerDist = 12.0;
    for (let j = 0; j < players.length; j++) {
      const opp = players[j];
      if (opp.team === passer.team) continue;
      const laneD = segmentPointDist(
        opp.position.x,
        opp.position.z,
        passer.position.x,
        passer.position.z,
        tm.position.x,
        tm.position.z
      );
      if (laneD < minLaneDist) minLaneDist = laneD;

      const markerD = Math.hypot(opp.position.x - tm.position.x, opp.position.z - tm.position.z);
      if (markerD < minMarkerDist) minMarkerDist = markerD;
    }

    // Reject heavily blocked passes
    if (minLaneDist < 1.05 && passer.role !== 'GK') continue;

    const forwardGain = (dx * attackSign) / 22.0;
    const openness = clamp(minLaneDist / 3.4, 0, 1) * 1.4 + clamp(minMarkerDist / 4.2, 0, 1) * 1.1;
    const distQuality = 1.0 - clamp(Math.abs(dist - 14.0) / 24.0, 0, 1);

    const score =
      openness +
      distQuality * 0.75 +
      (preferForward ? forwardGain * 1.55 : forwardGain * 0.65);

    if (score > bestScore) {
      bestScore = score;
      bestTarget = tm;
    }
  }

  return bestTarget ? { target: bestTarget, score: bestScore } : null;
}

/**
 * Goalkeeper AI (Slot 0) for both Home and Away teams.
 * Handles angle-bisecting box positioning, incoming shot prediction + diving,
 * loose-ball sweeping inside the 6-yard box, and crisp post-save distribution.
 */
function updateGoalkeeperAi(
  gk: SimPlayerState,
  players: SimPlayerState[],
  ball: SimBallState,
  aiState: AiRuntimeState,
  stats: MatchStats,
  events: SimEvent[],
  dt: number
): AiSteeringCommand {
  const mem = getMemory(aiState, gk.id);
  const defendSign = gk.team === 'home' ? -1 : 1; // Home defends -32, Away defends +32
  const goalX = defendSign * PITCH.HALF_LENGTH;
  const faceBall = Math.atan2(ball.position.x - gk.position.x, ball.position.z - gk.position.z);

  // 1. Holding the ball -> pause briefly (~0.6s) then distribute to an open teammate!
  if (gk.hasBall && ball.ownerId === gk.id) {
    mem.gkHoldTimer += dt;
    mem.gkTrackingShot = false;
    mem.gkReactionTimer = 0;

    // Orient toward midfield while holding
    const outAngle = gk.team === 'home' ? Math.PI * 0.5 : -Math.PI * 0.5;

    if (mem.gkHoldTimer >= 0.6) {
      const best = findBestAiPassTarget(gk, players, false);
      if (best) {
        executePass(gk, ball, players, null, 0.42, stats, events, best.target);
      } else {
        // Safe clearance pass wide toward midfield
        const safeDir: Vec2 = { x: -defendSign, z: gk.position.z >= 0 ? 0.35 : -0.35 };
        executePass(gk, ball, players, safeDir, 0.55, stats, events, null);
      }
      mem.gkHoldTimer = 0;
    }

    return { dirX: 0, dirZ: 0, sprint: false, faceAngle: outAngle };
  }

  mem.gkHoldTimer = 0;

  // If currently diving, let dive physics play out
  if (gk.actionState === 'gk_dive_left' || gk.actionState === 'gk_dive_right') {
    return { dirX: 0, dirZ: 0, sprint: false };
  }

  // 2. Incoming shot detection & athletic diving response
  const vxTowardGoal = ball.velocity.x * defendSign;
  const ballSpeed = Math.hypot(ball.velocity.x, ball.velocity.y, ball.velocity.z);
  const distToGoalLine = Math.abs(goalX - ball.position.x);

  const isDangerousShot =
    ball.ownerId === null &&
    vxTowardGoal > 6.5 &&
    ballSpeed > 8.5 &&
    distToGoalLine < 34.0 &&
    (ball.lastTouchTeam !== gk.team || vxTowardGoal > 12.0);

  if (isDangerousShot) {
    const tArrive = (gk.position.x - ball.position.x) / ball.velocity.x;
    if (tArrive > 0.02 && tArrive < 0.78) {
      // Predict arrival Z & Y including gravity and rough Magnus bend
      const magnusAz = -ball.spin.y * ball.velocity.x * BALL.MAGNUS_COEFF;
      const predZ = ball.position.z + ball.velocity.z * tArrive + 0.5 * magnusAz * tArrive * tArrive * 0.65;
      const predY = Math.max(
        ball.radius,
        ball.position.y + ball.velocity.y * tArrive - 0.5 * BALL.GRAVITY * tArrive * tArrive
      );

      const aimedNearFrame =
        Math.abs(predZ) <= PITCH.GOAL_HALF_WIDTH + 0.65 &&
        predY <= PITCH.GOAL_HEIGHT + 0.55;

      if (aimedNearFrame) {
        const defNorm = gk.profile.stats.defending / 99;
        const reactionDelay = 0.09 + (1 - defNorm) * 0.09;

        if (!mem.gkTrackingShot) {
          mem.gkTrackingShot = true;
          mem.gkReactionTimer = 0;
        }
        mem.gkReactionTimer += dt;

        const targetZ = clamp(predZ, -PITCH.GOAL_HALF_WIDTH + 0.25, PITCH.GOAL_HALF_WIDTH - 0.25);
        const dz = targetZ - gk.position.z;

        if (mem.gkReactionTimer >= reactionDelay) {
          if (Math.abs(dz) > 0.72 && tArrive < 0.46) {
            // Trigger dive!
            // Home GK faces +X: +Z is right, -Z is left.
            // Away GK faces -X: -Z is right, +Z is left.
            const localRightSign = gk.team === 'home' ? 1 : -1;
            const diveRight = dz * localRightSign > 0;

            gk.actionState = diveRight ? 'gk_dive_right' : 'gk_dive_left';
            gk.diveDirection = diveRight ? 1 : -1;
            gk.actionDuration = 0.50;
            gk.actionTimer = 0.50;
            gk.facing = gk.team === 'home' ? Math.PI * 0.5 : -Math.PI * 0.5;

            const maxDiveSpeed = 5.6 + defNorm * 1.45;
            const reqSpeed = Math.abs(dz) / Math.max(tArrive, 0.22);
            const diveSpeed = clamp(reqSpeed, 4.4, maxDiveSpeed);

            gk.velocity.z = Math.sign(dz) * diveSpeed;
            gk.velocity.x = -defendSign * 0.45; // Slight forward dive angle to narrow shot
            mem.gkTrackingShot = false;
            return { dirX: 0, dirZ: 0, sprint: false };
          }

          // Shuffle rapidly into shot path if it's close enough without full dive
          return steerToward(gk, gk.position.x, targetZ, true, 0.35, faceBall);
        }
      }
    }
  } else {
    mem.gkTrackingShot = false;
    mem.gkReactionTimer = 0;
  }

  // 3. Sweep loose slow balls inside the 6-yard box
  const ballInBox =
    ball.ownerId === null &&
    ball.position.x * defendSign > PITCH.HALF_LENGTH - 5.8 &&
    Math.abs(ball.position.z) < 6.2 &&
    ballSpeed < 7.5 &&
    ball.position.y < 1.3;

  if (ballInBox) {
    const gkDist = Math.hypot(ball.position.x - gk.position.x, ball.position.z - gk.position.z);
    // Check if an opponent is not already much closer
    let oppCloser = false;
    for (let i = 0; i < players.length; i++) {
      const p = players[i];
      if (p.team !== gk.team) {
        const od = Math.hypot(ball.position.x - p.position.x, ball.position.z - p.position.z);
        if (od < gkDist - 1.2) {
          oppCloser = true;
          break;
        }
      }
    }
    if (!oppCloser) {
      return steerToward(gk, ball.position.x, ball.position.z, true, 0.4, faceBall);
    }
  }

  // 4. Realistic angle-bisecting positioning arc inside the 6-yard box
  const ballDistFromGoal = Math.max(1, Math.abs(goalX - ball.position.x));
  const stepOut = clamp(3.4 - ballDistFromGoal * 0.055, 1.35, 3.2);
  const idealX = defendSign * (PITCH.HALF_LENGTH - stepOut);

  // Bisect angle between ball and center of goal, clamped strictly inside goalposts
  const angleFactor = clamp(stepOut / Math.max(ballDistFromGoal, 3.5), 0.14, 0.46);
  const idealZ = clamp(ball.position.z * Math.max(0.22, angleFactor), -2.65, 2.65);

  const distToIdeal = Math.hypot(idealX - gk.position.x, idealZ - gk.position.z);
  return steerToward(gk, idealX, idealZ, distToIdeal > 2.2, 0.55, faceBall);
}

/**
 * Checks goalkeeper save collisions using swept ball-segment testing so thunderbolt shots
 * NEVER tunnel through a diving keeper's hands.
 */
export function checkGoalkeeperSaves(
  players: SimPlayerState[],
  ball: SimBallState,
  prevBallPos: Vec3,
  aiState: AiRuntimeState,
  events: SimEvent[]
): SimPlayerState | null {
  if (ball.ownerId !== null) return null;

  const ballSpeed = Math.hypot(ball.velocity.x, ball.velocity.y, ball.velocity.z);

  for (let i = 0; i < players.length; i++) {
    const gk = players[i];
    if (gk.role !== 'GK') continue;
    if (ball.pickupLockTimer > 0 && ball.lastKickerId === gk.id) continue;

    const isDiving =
      gk.actionState === 'gk_dive_left' || gk.actionState === 'gk_dive_right';
    const defNorm = gk.profile.stats.defending / 99;
    const heightBonus = clamp((gk.profile.appearance.heightCm - 188) / 100, 0, 0.14);

    // Compute GK effective hand center (shifted laterally when diving)
    let reachCenterZ = gk.position.z;
    if (isDiving) {
      const localRightSign = gk.team === 'home' ? 1 : -1;
      const worldDiveSign = gk.diveDirection * localRightSign;
      reachCenterZ += worldDiveSign * 0.42;
    }

    const horizReach = (isDiving ? 0.96 : 0.78) + defNorm * 0.12 + heightBonus;
    const maxSaveY = (isDiving ? 2.18 : 2.02) + heightBonus;

    // Closest point on swept ball segment [prevBallPos -> ball.position] to GK reach center
    const sx = ball.position.x - prevBallPos.x;
    const sy = ball.position.y - prevBallPos.y;
    const sz = ball.position.z - prevBallPos.z;
    const segLenSq = sx * sx + sy * sy + sz * sz;
    let t = 1;
    if (segLenSq > 1e-6) {
      t = clamp(
        ((gk.position.x - prevBallPos.x) * sx +
          (Math.min(1.1, ball.position.y) - prevBallPos.y) * sy +
          (reachCenterZ - prevBallPos.z) * sz) /
          segLenSq,
        0,
        1
      );
    }

    const cx = prevBallPos.x + sx * t;
    const cy = prevBallPos.y + sy * t;
    const cz = prevBallPos.z + sz * t;

    const dXZ = Math.hypot(cx - gk.position.x, cz - reachCenterZ);
    if (dXZ > horizReach || cy > maxSaveY) continue;

    // Check ball isn't already behind the goal line
    const defendSign = gk.team === 'home' ? -1 : 1;
    if (cx * defendSign > PITCH.HALF_LENGTH + 0.1) continue;

    // Determine catch vs dramatic parry!
    const isHardOrCornerShot =
      ballSpeed > 18.5 || (isDiving && dXZ > horizReach * 0.62) || cy > 1.55;

    const mem = getMemory(aiState, gk.id);
    mem.gkTrackingShot = false;
    mem.gkReactionTimer = 0;

    if (!isHardOrCornerShot && ballSpeed < 17.5) {
      // Clean catch!
      for (let k = 0; k < players.length; k++) {
        players[k].hasBall = false;
      }
      gk.hasBall = true;
      ball.ownerId = gk.id;
      ball.passTargetId = null;
      ball.position.x = gk.position.x - defendSign * 0.45;
      ball.position.y = Math.max(ball.radius, Math.min(cy, 1.0));
      ball.position.z = gk.position.z;
      ball.velocity.x = 0;
      ball.velocity.y = 0;
      ball.velocity.z = 0;
      ball.spin.x = 0;
      ball.spin.y = 0;
      ball.spin.z = 0;
      ball.lastTouchPlayerId = gk.id;
      ball.lastTouchTeam = gk.team;
      mem.gkHoldTimer = 0;

      if (ballSpeed > 7.5) {
        events.push({
          type: 'save',
          intensity: clamp(ballSpeed / 20, 0.4, 0.9),
          position: { x: ball.position.x, y: ball.position.y, z: ball.position.z },
        });
      }
      return gk;
    }

    // Athletic fingertip parry away from goal mouth (outward & wide so it never own-goals!)
    const outX = -defendSign;
    const wideZ = cz >= gk.position.z ? 1 : -1;
    const parrySpeed = clamp(ballSpeed * 0.44, 6.5, 13.5);

    ball.position.x = gk.position.x + outX * 0.52;
    ball.position.y = Math.max(ball.radius + 0.15, cy);
    ball.position.z = cz;
    ball.velocity.x = outX * parrySpeed * 0.72;
    ball.velocity.y = clamp(2.8 + ballSpeed * 0.1, 2.5, 6.2);
    ball.velocity.z = wideZ * parrySpeed * 0.68;
    ball.spin.x = 0;
    ball.spin.y = wideZ * 3.5;
    ball.spin.z = 0;
    ball.ownerId = null;
    ball.passTargetId = null;
    ball.lastTouchPlayerId = gk.id;
    ball.lastTouchTeam = gk.team;
    ball.lastKickerId = gk.id;
    ball.pickupLockTimer = 0.28;
    ball.lastKickPower = 0.5;

    events.push({
      type: 'save',
      intensity: clamp(ballSpeed / 22, 0.55, 1.0),
      position: { x: ball.position.x, y: ball.position.y, z: ball.position.z },
    });

    return null;
  }

  return null;
}

/**
 * Away team outfield AI (attacks -X).
 * Coordinates smart dribbling, passing triangles, decisive shooting, and anti-clustering defense.
 */
function updateAwayOutfieldAi(
  awayOutfield: SimPlayerState[],
  homePlayers: SimPlayerState[],
  allPlayers: SimPlayerState[],
  ball: SimBallState,
  aiState: AiRuntimeState,
  stats: MatchStats,
  events: SimEvent[],
  dt: number,
  commands: Map<string, AiSteeringCommand>
): { shotSpeed: number | null; shooterId: string | null } {
  let shotSpeed: number | null = null;
  let shooterId: string | null = null;

  const owner = ball.ownerId ? allPlayers.find((p) => p.id === ball.ownerId) ?? null : null;
  const awayHasBall = owner !== null && owner.team === 'away';
  const homeGk = homePlayers.find((p) => p.role === 'GK') ?? null;

  // Handle AI automatic restart pass (kickoff, throw-in, corner, goal kick)
  if (
    aiState.restartTakerId !== null &&
    aiState.restartAutoPassTimer > 0 &&
    owner &&
    owner.id === aiState.restartTakerId
  ) {
    aiState.restartAutoPassTimer = Math.max(0, aiState.restartAutoPassTimer - dt);
    if (aiState.restartAutoPassTimer === 0) {
      const target = findBestAiPassTarget(owner, allPlayers, true);
      executePass(
        owner,
        ball,
        allPlayers,
        { x: -1, z: -owner.position.z * 0.05 },
        0.35,
        stats,
        events,
        target ? target.target : null
      );
      aiState.restartTakerId = null;
    }
  }

  // ==================== AWAY IN POSSESSION ====================
  if (awayHasBall && owner) {
    for (let i = 0; i < awayOutfield.length; i++) {
      const p = awayOutfield[i];
      const mem = getMemory(aiState, p.id);

      if (p.id === owner.id) {
        // ---- BALL CARRIER LOGIC ----
        // If already winding up a shot, count down and fire!
        if (mem.shootWindupTimer > 0) {
          mem.shootWindupTimer = Math.max(0, mem.shootWindupTimer - dt);
          p.actionState = 'shoot_charge';
          p.shotCharge = clamp(1 - mem.shootWindupTimer / 0.26, 0.15, mem.shootChargeTarget);

          const toGoalAngle = Math.atan2(-PITCH.HALF_LENGTH - p.position.x, mem.shootTargetZ - p.position.z);

          if (mem.shootWindupTimer === 0) {
            shotSpeed = executeShot(
              p,
              ball,
              null,
              mem.shootChargeTarget,
              stats,
              events,
              mem.shootTargetZ
            );
            shooterId = p.id;
            commands.set(p.id, { dirX: 0, dirZ: 0, sprint: false, faceAngle: toGoalAngle });
          } else {
            commands.set(p.id, { dirX: -0.25, dirZ: 0, sprint: false, faceAngle: toGoalAngle });
          }
          continue;
        }

        // Measure nearest Home outfield defender & pressure
        let nearestOppDist = Infinity;
        let nearestOpp: SimPlayerState | null = null;
        let oppInFront = false;
        for (let j = 0; j < homePlayers.length; j++) {
          const opp = homePlayers[j];
          if (opp.role === 'GK') continue;
          const d = Math.hypot(opp.position.x - p.position.x, opp.position.z - p.position.z);
          if (d < nearestOppDist) {
            nearestOppDist = d;
            nearestOpp = opp;
          }
          // Defender blocking lane toward Home goal (-X)
          if (opp.position.x < p.position.x && p.position.x - opp.position.x < 3.6 && Math.abs(opp.position.z - p.position.z) < 1.8) {
            oppInFront = true;
          }
        }

        // 1. Check shooting opportunity (work into dangerous range < 20.5m with a clear look)
        const distToHomeGoal = Math.hypot(-PITCH.HALF_LENGTH - p.position.x, -p.position.z);
        const inShootRange =
          p.position.x < -12.5 &&
          Math.abs(p.position.z) < 12.5 &&
          distToHomeGoal < 20.5;

        if (inShootRange && (!oppInFront || p.position.x < -17.5) && p.kickCooldown <= 0) {
          // Pick corner away from Home GK!
          const gkZ = homeGk ? homeGk.position.z : 0;
          const cornerSign = gkZ >= 0 ? -1 : 1;
          mem.shootTargetZ = cornerSign * (1.95 + (p.profile.stats.shooting / 99) * 0.58);
          mem.shootChargeTarget = clamp(0.36 + (distToHomeGoal / 21.0) * 0.44, 0.34, 0.80);
          mem.shootWindupTimer = 0.22;
          p.actionState = 'shoot_charge';
          commands.set(p.id, { dirX: -0.25, dirZ: 0, sprint: false });
          continue;
        }

        // 2. Evaluate progressive passing triangles (avoid endless sideways passing)
        mem.passDecisionTimer -= dt;
        const underHeavyPressure = nearestOppDist < 2.35 && oppInFront;
        if ((mem.passDecisionTimer <= 0 || underHeavyPressure) && p.kickCooldown <= 0) {
          const bestPass = findBestAiPassTarget(p, allPlayers, true);
          const forwardGain = bestPass ? p.position.x - bestPass.target.position.x : 0;
          const shouldPass =
            bestPass !== null &&
            ((underHeavyPressure && bestPass.score > 1.7) ||
              (forwardGain > 4.5 && bestPass.score > 2.35) ||
              (p.position.x > 6.0 && forwardGain > 3.0 && bestPass.score > 2.0));

          if (shouldPass && bestPass) {
            const passDist = Math.hypot(
              bestPass.target.position.x - p.position.x,
              bestPass.target.position.z - p.position.z
            );
            const charge = clamp((passDist - 7) / 18, 0.18, 0.68);
            executePass(p, ball, allPlayers, null, charge, stats, events, bestPass.target);
            mem.passDecisionTimer = 1.05;
            commands.set(p.id, { dirX: -0.3, dirZ: 0, sprint: false });
            continue;
          }
          mem.passDecisionTimer = underHeavyPressure ? 0.35 : 0.92;
        }

        // 3. Dribble dynamically toward goal/open half-space, weaving gently around nearest defender
        let targetX = p.position.x - 11.5;
        let targetZ = p.position.z * 0.58;
        if (p.position.x < -10.0) {
          targetX = -27.0;
          targetZ = clamp(p.position.z * 0.36, -5.0, 5.0);
        }

        if (nearestOpp && nearestOppDist < 4.8) {
          // Sidestep away from oncoming defender toward open flank
          const awayX = p.position.x - nearestOpp.position.x;
          const awayZ = p.position.z - nearestOpp.position.z;
          const aLen = Math.hypot(awayX, awayZ) || 1;
          const dodgeWeight = (1 - nearestOppDist / 4.8) * 5.2;
          targetZ += (awayZ / aLen) * dodgeWeight;
          // Keep away from sidelines
          if (Math.abs(targetZ) > 15.5) {
            targetZ = Math.sign(targetZ) * 14.0;
          }
        }

        targetX = clamp(targetX, -PITCH.HALF_LENGTH + 4.5, PITCH.HALF_LENGTH - 3.0);
        targetZ = clamp(targetZ, -PITCH.HALF_WIDTH + 2.8, PITCH.HALF_WIDTH - 2.8);

        const wantsSprint = nearestOppDist > 3.2 && p.stamina > 0.28;
        commands.set(p.id, steerToward(p, targetX, targetZ, wantsSprint, 1.0));
      } else {
        // ---- OFF-BALL ATTACKING SUPPORT (Passing Triangles & Forward Runs) ----
        mem.shootWindupTimer = 0;

        let tx = p.homeAnchor.x;
        let tz = p.homeAnchor.z;
        const ballX = ball.position.x;

        if (p.role === 'FWD') {
          // Make intelligent runs ahead of the ball on opposite flanks
          const flankZ = p.slotIndex === 3 ? 9.2 : -9.2;
          tx = clamp(ballX - 11.5, -26.5, 10.0);
          tz = clamp(flankZ + ball.position.z * 0.22, -16.5, 16.5);
        } else if (p.role === 'MID') {
          // Central triangle link slightly behind/beside carrier
          tx = clamp(ballX - 2.5, -18.0, 14.0);
          tz = clamp(-Math.sign(ball.position.z || 1) * 5.8, -12.0, 12.0);
        } else {
          // Defender stays balanced as counter-shield & recycle outlet
          tx = clamp(ballX + 12.5, -2.0, 22.0);
          tz = clamp(ball.position.z * 0.38, -8.5, 8.5);
        }

        // Maintain healthy spacing from carrier (never crowd!)
        const dCarrier = Math.hypot(tx - owner.position.x, tz - owner.position.z);
        if (dCarrier < 6.5) {
          const sx = tx - owner.position.x;
          const sz = tz - owner.position.z;
          const sLen = Math.hypot(sx, sz) || 1;
          tx = clamp(owner.position.x + (sx / sLen) * 7.0, -27.0, 27.0);
          tz = clamp(owner.position.z + (sz / sLen) * 7.0, -17.0, 17.0);
        }

        const dist = Math.hypot(tx - p.position.x, tz - p.position.z);
        commands.set(p.id, steerToward(p, tx, tz, dist > 7.0 && p.stamina > 0.38, 1.8));
      }
    }

    return { shotSpeed, shooterId };
  }

  // ==================== AWAY DEFENDING OR LOOSE BALL ====================
  // Sort Away outfield players by distance to ball for strict anti-clustering role assignment!
  const ranked = [...awayOutfield].sort((a, b) => {
    const da = Math.hypot(ball.position.x - a.position.x, ball.position.z - a.position.z);
    const db = Math.hypot(ball.position.x - b.position.x, ball.position.z - b.position.z);
    return da - db;
  });

  // If a pass was sent to a specific Away player, that player is the primary chaser
  const passReceiver = ball.passTargetId
    ? awayOutfield.find((p) => p.id === ball.passTargetId) ?? null
    : null;
  const presser = passReceiver ?? ranked[0];
  const coverer = ranked.find((p) => p.id !== presser.id) ?? null;

  for (let i = 0; i < awayOutfield.length; i++) {
    const p = awayOutfield[i];
    const mem = getMemory(aiState, p.id);
    mem.shootWindupTimer = 0;
    if (mem.tackleAttemptCooldown > 0) {
      mem.tackleAttemptCooldown = Math.max(0, mem.tackleAttemptCooldown - dt);
    }

    if (p.id === presser.id) {
      // 1. PRIMARY PRESSER: closes down ball carrier or collects loose ball
      if (owner && owner.team === 'home') {
        // Approach slightly goal-side (+X) of the Home carrier
        const leadX = owner.position.x + owner.velocity.x * 0.14 + 0.55;
        const leadZ = owner.position.z + owner.velocity.z * 0.14;
        const distToCarrier = Math.hypot(owner.position.x - p.position.x, owner.position.z - p.position.z);

        // Fair, well-timed tackle attempt when close and facing carrier
        if (
          distToCarrier < 1.75 &&
          p.tackleCooldown <= 0 &&
          mem.tackleAttemptCooldown <= 0 &&
          owner.role !== 'GK'
        ) {
          const toBallX = ball.position.x - p.position.x;
          const toBallZ = ball.position.z - p.position.z;
          const dB = Math.hypot(toBallX, toBallZ);
          if (dB < 1.55) {
            executeTackle(p, ball, allPlayers, { x: toBallX, z: toBallZ }, stats, events);
            mem.tackleAttemptCooldown = 1.85;
          }
        }

        const sprint = distToCarrier > 2.8 && p.stamina > 0.28;
        commands.set(p.id, steerToward(p, leadX, leadZ, sprint, 0.7));
      } else {
        // Loose ball: sprint cleanly to intercept along its velocity vector
        const interceptX = clamp(ball.position.x + ball.velocity.x * 0.16, -30.5, 30.5);
        const interceptZ = clamp(ball.position.z + ball.velocity.z * 0.16, -19.0, 19.0);
        commands.set(p.id, steerToward(p, interceptX, interceptZ, p.stamina > 0.22, 0.45));
      }
      continue;
    }

    if (coverer && p.id === coverer.id) {
      // 2. COVERING DEFENDER: protects central lane 5m goal-side of ball (blocks through-balls!)
      const coverX = clamp(ball.position.x + 5.8, -14.0, 25.0);
      const coverZ = clamp(ball.position.z * 0.52, -11.0, 11.0);
      const dist = Math.hypot(coverX - p.position.x, coverZ - p.position.z);
      commands.set(p.id, steerToward(p, coverX, coverZ, dist > 6.5 && p.stamina > 0.35, 1.5));
      continue;
    }

    // 3. SHAPE & MARKING: Sweeper protects central box; forwards hold counter shape / mark
    if (p.role === 'DEF') {
      const defX = clamp(Math.max(ball.position.x + 11.0, 12.5), 11.0, 25.5);
      const defZ = clamp(ball.position.z * 0.35, -7.5, 7.5);
      const dist = Math.hypot(defX - p.position.x, defZ - p.position.z);
      commands.set(p.id, steerToward(p, defX, defZ, dist > 6.0 && p.stamina > 0.35, 1.4));
    } else {
      // Shift tactical anchor with ball while keeping wide structure
      const shiftX = clamp(ball.position.x * 0.55 + p.homeAnchor.x * 0.45 + 4.5, -12.0, 22.0);
      const shiftZ = clamp(p.homeAnchor.z * 0.75 + ball.position.z * 0.25, -16.0, 16.0);
      const dist = Math.hypot(shiftX - p.position.x, shiftZ - p.position.z);
      commands.set(p.id, steerToward(p, shiftX, shiftZ, dist > 8.0 && p.stamina > 0.45, 2.0));
    }
  }

  return { shotSpeed, shooterId };
}

/**
 * Home non-controlled outfield teammate AI (attacks +X).
 * Makes intelligent forward runs into open pockets, NEVER crowds the ball carrier,
 * and tracks back smoothly when defending without colliding with the user.
 */
function updateHomeTeammateAi(
  homeTeammates: SimPlayerState[],
  controlledPlayer: SimPlayerState,
  allPlayers: SimPlayerState[],
  ball: SimBallState,
  commands: Map<string, AiSteeringCommand>
): void {
  const owner = ball.ownerId ? allPlayers.find((p) => p.id === ball.ownerId) ?? null : null;
  const homeHasBall = owner !== null && owner.team === 'home';

  // Find if a loose ball is closest to a non-controlled Home teammate
  let closestFreeChaserId: string | null = null;
  if (owner === null) {
    const controlledDist = Math.hypot(
      ball.position.x - controlledPlayer.position.x,
      ball.position.z - controlledPlayer.position.z
    );
    let bestD = controlledDist - 2.2;
    for (let i = 0; i < homeTeammates.length; i++) {
      const tm = homeTeammates[i];
      const d = Math.hypot(ball.position.x - tm.position.x, ball.position.z - tm.position.z);
      if (d < bestD) {
        bestD = d;
        closestFreeChaserId = tm.id;
      }
    }
  }

  for (let i = 0; i < homeTeammates.length; i++) {
    const tm = homeTeammates[i];

    // If a Home pass is heading directly to this teammate, run crisply to receive it!
    if (ball.ownerId === null && ball.passTargetId === tm.id) {
      const rx = clamp(ball.position.x + ball.velocity.x * 0.14, -30.0, 30.0);
      const rz = clamp(ball.position.z + ball.velocity.z * 0.14, -18.5, 18.5);
      commands.set(tm.id, steerToward(tm, rx, rz, true, 0.5));
      continue;
    }

    // If loose ball is clearly closest to this teammate, go win it
    if (tm.id === closestFreeChaserId) {
      const rx = clamp(ball.position.x + ball.velocity.x * 0.14, -30.0, 30.0);
      const rz = clamp(ball.position.z + ball.velocity.z * 0.14, -18.5, 18.5);
      commands.set(tm.id, steerToward(tm, rx, rz, tm.stamina > 0.25, 0.5));
      continue;
    }

    if (homeHasBall && owner) {
      // ---- ATTACKING SUPPORT: Open pockets & passing triangles, NEVER crowd carrier! ----
      let tx: number;
      let tz: number;

      if (tm.role === 'FWD') {
        // Push into attacking channels ahead and wide of ball carrier
        const flankZ = tm.slotIndex === 3 ? -9.5 : 9.5;
        tx = clamp(owner.position.x + 11.5, -4.0, 27.0);
        // If carrier is already deep on one flank, pull opposite forward into penalty box!
        if (owner.position.x > 16.0 && Math.sign(owner.position.z) !== Math.sign(flankZ)) {
          tx = clamp(owner.position.x + 4.5, 18.0, 27.0);
          tz = Math.sign(flankZ) * 4.8;
        } else {
          tz = clamp(flankZ + owner.position.z * 0.18, -16.8, 16.8);
        }
      } else if (tm.role === 'MID') {
        // Offer central half-space passing triangle
        tx = clamp(owner.position.x + (owner.position.x < 6 ? 6.5 : -4.5), -14.0, 19.0);
        tz = clamp(-Math.sign(owner.position.z || 1) * 5.8, -12.0, 12.0);
      } else {
        // DEF supports smoothly around halfway line as safe recycle outlet
        tx = clamp(owner.position.x - 13.5, -22.5, 4.5);
        tz = clamp(owner.position.z * 0.35, -8.5, 8.5);
      }

      // Enforce strict minimum spacing from ball carrier (never crowd the user!)
      const dCarrier = Math.hypot(tx - owner.position.x, tz - owner.position.z);
      if (dCarrier < 6.4) {
        const sx = tx - owner.position.x;
        const sz = tz - owner.position.z;
        const sLen = Math.hypot(sx, sz) || 1;
        tx = clamp(owner.position.x + (sx / sLen) * 6.8, -26.5, 27.5);
        tz = clamp(owner.position.z + (sz / sLen) * 6.8, -17.2, 17.2);
      }

      const dist = Math.hypot(tx - tm.position.x, tz - tm.position.z);
      commands.set(tm.id, steerToward(tm, tx, tz, dist > 7.5 && tm.stamina > 0.35, 1.8));
    } else {
      // ---- DEFENSIVE SHAPE: Track back & screen lanes without obstructing user ----
      let tx: number;
      let tz: number;

      if (tm.role === 'DEF') {
        // Protect central box in front of Home GK
        tx = clamp(Math.min(ball.position.x - 9.5, -11.5), -25.0, -9.5);
        tz = clamp(ball.position.z * 0.38, -7.8, 7.8);
      } else if (tm.role === 'MID') {
        // Screen central midfield lane goal-side of ball
        tx = clamp(ball.position.x - 6.5, -20.0, 8.0);
        tz = clamp(ball.position.z * 0.55, -11.5, 11.5);
      } else {
        // Forwards drop to halfway / mark wide outlets ready to spring counter-attack
        tx = clamp(ball.position.x * 0.55 + tm.homeAnchor.x * 0.45 - 3.0, -16.0, 14.0);
        tz = clamp(tm.homeAnchor.z * 0.72 + ball.position.z * 0.25, -16.0, 16.0);
      }

      // Gently avoid standing on top of user's controlled player
      const dUser = Math.hypot(tx - controlledPlayer.position.x, tz - controlledPlayer.position.z);
      if (dUser < 3.6) {
        const ux = tx - controlledPlayer.position.x;
        const uz = tz - controlledPlayer.position.z;
        const uLen = Math.hypot(ux, uz) || 1;
        tx = clamp(controlledPlayer.position.x + (ux / uLen) * 4.0, -26.0, 26.0);
        tz = clamp(controlledPlayer.position.z + (uz / uLen) * 4.0, -17.5, 17.5);
      }

      const dist = Math.hypot(tx - tm.position.x, tz - tm.position.z);
      commands.set(tm.id, steerToward(tm, tx, tz, dist > 7.0 && tm.stamina > 0.35, 1.6));
    }
  }
}

/**
 * Main AI coordinator for all non-controlled players (both GKs, Away outfield, Home teammates).
 */
export function stepAiController(
  players: SimPlayerState[],
  ball: SimBallState,
  controlledPlayer: SimPlayerState,
  aiState: AiRuntimeState,
  stats: MatchStats,
  events: SimEvent[],
  dt: number
): AiStepResult {
  const commands = new Map<string, AiSteeringCommand>();
  let lastShotSpeed: number | null = null;
  let lastShooterId: string | null = null;

  const homePlayers: SimPlayerState[] = [];
  const homeTeammates: SimPlayerState[] = [];
  const awayOutfield: SimPlayerState[] = [];

  for (let i = 0; i < players.length; i++) {
    const p = players[i];
    if (p.team === 'home') {
      homePlayers.push(p);
      if (p.role !== 'GK' && !p.isControlled) {
        homeTeammates.push(p);
      }
    } else if (p.role !== 'GK') {
      awayOutfield.push(p);
    }
  }

  // 1. Goalkeepers (both Home and Away, whenever not directly controlled by the user)
  for (let i = 0; i < players.length; i++) {
    const p = players[i];
    if (p.role === 'GK' && !p.isControlled) {
      const cmd = updateGoalkeeperAi(p, players, ball, aiState, stats, events, dt);
      commands.set(p.id, cmd);
    }
  }

  // 2. Away Outfield AI
  const awayRes = updateAwayOutfieldAi(
    awayOutfield,
    homePlayers,
    players,
    ball,
    aiState,
    stats,
    events,
    dt,
    commands
  );
  if (awayRes.shotSpeed !== null) {
    lastShotSpeed = awayRes.shotSpeed;
    lastShooterId = awayRes.shooterId;
  }

  // 3. Home Teammate AI
  updateHomeTeammateAi(homeTeammates, controlledPlayer, players, ball, commands);

  return { commands, lastShotSpeed, lastShooterId };
}

/**
 * Helper used during celebration phase to steer celebrating and conceding players smoothly.
 */
export function computeCelebrationSteering(
  players: SimPlayerState[],
  scorerId: string,
  scoringTeam: TeamSide
): Map<string, AiSteeringCommand> {
  const commands = new Map<string, AiSteeringCommand>();
  const scorer = players.find((p) => p.id === scorerId) ?? null;

  for (let i = 0; i < players.length; i++) {
    const p = players[i];
    if (p.id === scorerId) {
      // Scorer runs proudly toward nearest touchline / corner!
      const targetX = scoringTeam === 'home' ? 22.0 : -22.0;
      const targetZ = p.position.z >= 0 ? 15.0 : -15.0;
      p.actionState = 'celebrate';
      commands.set(p.id, steerToward(p, targetX, targetZ, false, 1.5));
    } else if (p.team === scoringTeam && p.role !== 'GK' && scorer) {
      // Teammates converge toward scorer to celebrate
      const offsetAngle = p.slotIndex * 1.6;
      const tx = clamp(scorer.position.x + Math.cos(offsetAngle) * 2.6, -28, 28);
      const tz = clamp(scorer.position.z + Math.sin(offsetAngle) * 2.6, -18, 18);
      p.actionState = 'celebrate';
      commands.set(p.id, steerToward(p, tx, tz, false, 1.2));
    } else {
      // Conceding team walks slowly back toward home anchor
      commands.set(p.id, steerToward(p, p.homeAnchor.x * 0.7, p.homeAnchor.z * 0.7, false, 2.5));
    }
  }

  return commands;
}
