import { BALL, PITCH } from '../config/constants';
import type { SimBallState, SimEvent, TeamSide, Vec3 } from '../types/game';

export type OutOfBoundsSide =
  | 'touchline_north'
  | 'touchline_south'
  | 'goal_line_home'
  | 'goal_line_away';

export interface OutOfBoundsInfo {
  side: OutOfBoundsSide;
  position: Vec3;
}

export interface BallStepResult {
  events: SimEvent[];
  scoredBy: TeamSide | null;
  outOfBounds: OutOfBoundsInfo | null;
}

function clamp(v: number, min: number, max: number): number {
  return v < min ? min : v > max ? max : v;
}

function sanitizeFinite(v: number, fallback = 0): number {
  return Number.isFinite(v) ? v : fallback;
}

export function createInitialBallState(): SimBallState {
  return {
    position: { x: 0, y: BALL.RADIUS, z: 0 },
    velocity: { x: 0, y: 0, z: 0 },
    angularVelocity: { x: 0, y: 0, z: 0 },
    spin: { x: 0, y: 0, z: 0 },
    radius: BALL.RADIUS,
    ownerId: null,
    lastTouchPlayerId: null,
    lastTouchTeam: null,
    lastKickPower: 0,
    isInAir: false,
    passTargetId: null,
    pickupLockTimer: 0,
    lastKickerId: null,
  };
}

export function resetBall(ball: SimBallState, x = 0, y: number = BALL.RADIUS, z = 0): void {
  ball.position.x = x;
  ball.position.y = Math.max(BALL.RADIUS, y);
  ball.position.z = z;
  ball.velocity.x = 0;
  ball.velocity.y = 0;
  ball.velocity.z = 0;
  ball.angularVelocity.x = 0;
  ball.angularVelocity.y = 0;
  ball.angularVelocity.z = 0;
  ball.spin.x = 0;
  ball.spin.y = 0;
  ball.spin.z = 0;
  ball.ownerId = null;
  ball.passTargetId = null;
  ball.pickupLockTimer = 0;
  ball.lastKickerId = null;
  ball.lastKickPower = 0;
  ball.isInAir = ball.position.y > BALL.RADIUS + 0.06;
}

/**
 * Resolves sphere-vs-capsule/cylinder collision against a goalpost or crossbar segment.
 * Returns impact speed (> 0) if a bounce occurred, or 0 otherwise.
 */
function collideSphereWithSegment(
  ball: SimBallState,
  ax: number,
  ay: number,
  az: number,
  bx: number,
  by: number,
  bz: number,
  cylRadius: number
): number {
  const abx = bx - ax;
  const aby = by - ay;
  const abz = bz - az;
  const abLenSq = abx * abx + aby * aby + abz * abz;

  let t = 0;
  if (abLenSq > 1e-6) {
    t =
      ((ball.position.x - ax) * abx +
        (ball.position.y - ay) * aby +
        (ball.position.z - az) * abz) /
      abLenSq;
    t = clamp(t, 0, 1);
  }

  const cx = ax + abx * t;
  const cy = ay + aby * t;
  const cz = az + abz * t;

  const dx = ball.position.x - cx;
  const dy = ball.position.y - cy;
  const dz = ball.position.z - cz;
  const distSq = dx * dx + dy * dy + dz * dz;
  const minDist = ball.radius + cylRadius;

  if (distSq >= minDist * minDist || distSq < 1e-10) {
    return 0;
  }

  const dist = Math.sqrt(distSq);
  const nx = dx / dist;
  const ny = dy / dist;
  const nz = dz / dist;

  // Separate ball cleanly out of post/crossbar
  const overlap = minDist - dist;
  ball.position.x += nx * overlap;
  ball.position.y += ny * overlap;
  ball.position.z += nz * overlap;

  const vn = ball.velocity.x * nx + ball.velocity.y * ny + ball.velocity.z * nz;
  if (vn < 0) {
    const impulse = -(1 + BALL.RESTITUTION_POST) * vn;
    ball.velocity.x += impulse * nx;
    ball.velocity.y += impulse * ny;
    ball.velocity.z += impulse * nz;

    // Impart a bit of deflection spin on metallic rebound
    ball.spin.y += (nz * ball.velocity.x - nx * ball.velocity.z) * 0.2;
    return -vn;
  }

  return 0;
}

/**
 * Checks all 4 goalposts and 2 crossbars for exact sphere-cylinder collisions.
 */
function resolveGoalFrameCollisions(
  ball: SimBallState,
  events: SimEvent[],
  emittedPostHit: { value: boolean }
): void {
  const goalXs = [-PITCH.HALF_LENGTH, PITCH.HALF_LENGTH];
  const postZs = [-PITCH.GOAL_HALF_WIDTH, PITCH.GOAL_HALF_WIDTH];
  const pr = PITCH.POST_RADIUS;
  const gh = PITCH.GOAL_HEIGHT;

  for (let i = 0; i < goalXs.length; i++) {
    const gx = goalXs[i];
    // Skip broad-phase if ball is nowhere near this goal line
    if (Math.abs(ball.position.x - gx) > 1.5) continue;

    // Two vertical posts
    for (let j = 0; j < postZs.length; j++) {
      const pz = postZs[j];
      const impact = collideSphereWithSegment(ball, gx, 0, pz, gx, gh, pz, pr);
      if (impact > 1.2 && !emittedPostHit.value) {
        emittedPostHit.value = true;
        events.push({
          type: 'post_hit',
          intensity: clamp(impact / 22, 0.2, 1.0),
          position: { x: ball.position.x, y: ball.position.y, z: ball.position.z },
        });
      }
    }

    // Horizontal crossbar
    const barImpact = collideSphereWithSegment(
      ball,
      gx,
      gh,
      -PITCH.GOAL_HALF_WIDTH,
      gx,
      gh,
      PITCH.GOAL_HALF_WIDTH,
      pr
    );
    if (barImpact > 1.2 && !emittedPostHit.value) {
      emittedPostHit.value = true;
      events.push({
        type: 'post_hit',
        intensity: clamp(barImpact / 22, 0.2, 1.0),
        position: { x: ball.position.x, y: ball.position.y, z: ball.position.z },
      });
    }
  }
}

/**
 * Handles both interior net containment (once ball enters through the goal mouth)
 * and exterior net blocking (prevents balls from entering the net from the sides/back/top).
 */
function resolveGoalNetCollisions(
  ball: SimBallState,
  prevX: number,
  prevY: number,
  prevZ: number,
  events: SimEvent[],
  emittedNetRipple: { value: boolean }
): void {
  const r = ball.radius;
  const halfLen = PITCH.HALF_LENGTH;
  const halfW = PITCH.GOAL_HALF_WIDTH;
  const gh = PITCH.GOAL_HEIGHT;
  const depth = PITCH.GOAL_DEPTH;

  const checkGoalNet = (sign: 1 | -1) => {
    const goalSide: TeamSide = sign === 1 ? 'away' : 'home';
    const sx = ball.position.x * sign;
    const prevSx = prevX * sign;

    // Broad-phase check: ball is behind or near this goal line
    if (sx < halfLen - r && prevSx < halfLen - r) return;

    const backX = halfLen + depth;
    const wasInsideMouth =
      Math.abs(prevZ) < halfW - 0.04 && prevY < gh - 0.02 && prevSx <= backX;
    const insideDepthBand = sx > halfLen && sx <= backX + r * 2;

    if (wasInsideMouth && sx > halfLen) {
      // Ball is INSIDE the goal box — softly contain against back, side, and roof nets
      let hitSpeed = 0;

      // Back net
      if (sx > backX - r) {
        ball.position.x = sign * (backX - r);
        const vn = ball.velocity.x * sign;
        if (vn > 0) {
          hitSpeed = Math.max(hitSpeed, vn);
          ball.velocity.x = -sign * vn * BALL.RESTITUTION_NET;
          ball.velocity.y *= 0.62;
          ball.velocity.z *= 0.58;
          ball.spin.x *= 0.3;
          ball.spin.y *= 0.3;
          ball.spin.z *= 0.3;
        }
      }

      // Side nets (left & right)
      if (ball.position.z > halfW - r) {
        ball.position.z = halfW - r;
        if (ball.velocity.z > 0) {
          hitSpeed = Math.max(hitSpeed, ball.velocity.z);
          ball.velocity.z = -ball.velocity.z * BALL.RESTITUTION_NET;
          ball.velocity.x *= 0.65;
          ball.velocity.y *= 0.68;
        }
      } else if (ball.position.z < -(halfW - r)) {
        ball.position.z = -(halfW - r);
        if (ball.velocity.z < 0) {
          hitSpeed = Math.max(hitSpeed, -ball.velocity.z);
          ball.velocity.z = -ball.velocity.z * BALL.RESTITUTION_NET;
          ball.velocity.x *= 0.65;
          ball.velocity.y *= 0.68;
        }
      }

      // Top roof net
      if (ball.position.y > gh - r) {
        ball.position.y = gh - r;
        if (ball.velocity.y > 0) {
          hitSpeed = Math.max(hitSpeed, ball.velocity.y);
          ball.velocity.y = -ball.velocity.y * BALL.RESTITUTION_NET;
          ball.velocity.x *= 0.68;
          ball.velocity.z *= 0.68;
        }
      }

      if (hitSpeed > 1.4 && !emittedNetRipple.value) {
        emittedNetRipple.value = true;
        events.push({
          type: 'net_ripple',
          intensity: clamp(hitSpeed / 20, 0.2, 1.0),
          position: { x: ball.position.x, y: ball.position.y, z: ball.position.z },
          goalSide,
        });
      }
    } else if (insideDepthBand && Math.abs(ball.position.z) < halfW + r && ball.position.y < gh + r) {
      // Ball was OUTSIDE the goal box and hit exterior side/top/back netting
      let hitSpeed = 0;

      if (Math.abs(prevZ) >= halfW - 0.04) {
        const zSign = prevZ >= 0 ? 1 : -1;
        ball.position.z = zSign * (halfW + r);
        const vn = -ball.velocity.z * zSign;
        if (vn > 0) {
          hitSpeed = Math.max(hitSpeed, vn);
          ball.velocity.z = zSign * vn * BALL.RESTITUTION_NET;
          ball.velocity.x *= 0.6;
        }
      } else if (prevY >= gh - 0.02) {
        ball.position.y = gh + r;
        if (ball.velocity.y < 0) {
          hitSpeed = Math.max(hitSpeed, -ball.velocity.y);
          ball.velocity.y = -ball.velocity.y * BALL.RESTITUTION_NET;
          ball.velocity.x *= 0.72;
          ball.velocity.z *= 0.72;
        }
      } else if (prevSx > backX) {
        ball.position.x = sign * (backX + r);
        const vn = -ball.velocity.x * sign;
        if (vn > 0) {
          hitSpeed = Math.max(hitSpeed, vn);
          ball.velocity.x = sign * vn * BALL.RESTITUTION_NET;
        }
      }

      if (hitSpeed > 1.4 && !emittedNetRipple.value) {
        emittedNetRipple.value = true;
        events.push({
          type: 'net_ripple',
          intensity: clamp(hitSpeed / 22, 0.18, 0.85),
          position: { x: ball.position.x, y: ball.position.y, z: ball.position.z },
          goalSide,
        });
      }
    }
  };

  checkGoalNet(1);
  checkGoalNet(-1);
}

/**
 * Steps 3D ball physics with adaptive sub-stepping (2-3 substeps for fast shots)
 * to guarantee zero tunneling through goalposts, crossbars, or goal lines.
 */
export function stepBallPhysics(
  ball: SimBallState,
  dt: number,
  checkScoringAndBounds: boolean
): BallStepResult {
  const events: SimEvent[] = [];
  let scoredBy: TeamSide | null = null;
  let outOfBounds: OutOfBoundsInfo | null = null;

  if (ball.pickupLockTimer > 0) {
    ball.pickupLockTimer = Math.max(0, ball.pickupLockTimer - dt);
    if (ball.pickupLockTimer === 0) {
      ball.lastKickerId = null;
    }
  }

  // If controlled by a player, dribble physics drives the ball
  if (ball.ownerId !== null) {
    ball.isInAir = ball.position.y > ball.radius + 0.06;
    return { events, scoredBy, outOfBounds };
  }

  const speed = Math.hypot(ball.velocity.x, ball.velocity.y, ball.velocity.z);
  const substeps = speed > 28 ? 3 : speed > 18 ? 2 : 1;
  const subDt = dt / substeps;

  const emittedBounce = { value: false };
  const emittedPostHit = { value: false };
  const emittedNetRipple = { value: false };

  for (let s = 0; s < substeps; s++) {
    const prevX = ball.position.x;
    const prevY = ball.position.y;
    const prevZ = ball.position.z;

    const onGround = ball.position.y <= ball.radius + 0.02 && Math.abs(ball.velocity.y) < 0.35;

    // 1. Gravity
    if (!onGround || ball.velocity.y > 0) {
      ball.velocity.y -= BALL.GRAVITY * subDt;
    }

    // 2. Magnus effect: spin × velocity * MAGNUS_COEFF
    const magnusScale = onGround ? 0.22 : 1.0;
    const mAx =
      (ball.spin.y * ball.velocity.z - ball.spin.z * ball.velocity.y) *
      BALL.MAGNUS_COEFF *
      magnusScale;
    const mAy =
      (ball.spin.z * ball.velocity.x - ball.spin.x * ball.velocity.z) *
      BALL.MAGNUS_COEFF *
      magnusScale;
    const mAz =
      (ball.spin.x * ball.velocity.y - ball.spin.y * ball.velocity.x) *
      BALL.MAGNUS_COEFF *
      magnusScale;

    ball.velocity.x += clamp(mAx, -28, 28) * subDt;
    ball.velocity.y += clamp(mAy, -18, 18) * subDt;
    ball.velocity.z += clamp(mAz, -28, 28) * subDt;

    // 3. Aerodynamic air drag
    const airDrag = Math.exp(-BALL.AIR_DRAG * subDt);
    ball.velocity.x *= airDrag;
    ball.velocity.y *= airDrag;
    ball.velocity.z *= airDrag;

    // 4. Turf rolling friction
    if (onGround) {
      const turfDecay = Math.exp(-BALL.GROUND_FRICTION * subDt);
      ball.velocity.x *= turfDecay;
      ball.velocity.z *= turfDecay;

      // Small linear rolling resistance so ball stops cleanly instead of creeping
      const groundSpeed = Math.hypot(ball.velocity.x, ball.velocity.z);
      if (groundSpeed < 0.06) {
        ball.velocity.x = 0;
        ball.velocity.z = 0;
      } else {
        const drop = Math.min(groundSpeed, 0.38 * subDt);
        const scale = (groundSpeed - drop) / groundSpeed;
        ball.velocity.x *= scale;
        ball.velocity.z *= scale;
      }
    }

    // Clamp max ball speed
    const curSpeed = Math.hypot(ball.velocity.x, ball.velocity.y, ball.velocity.z);
    if (curSpeed > BALL.MAX_SPEED) {
      const k = BALL.MAX_SPEED / curSpeed;
      ball.velocity.x *= k;
      ball.velocity.y *= k;
      ball.velocity.z *= k;
    }

    // 5. Integrate position
    ball.position.x += ball.velocity.x * subDt;
    ball.position.y += ball.velocity.y * subDt;
    ball.position.z += ball.velocity.z * subDt;

    // 6. Ground bounce & smooth settling
    if (ball.position.y <= ball.radius) {
      ball.position.y = ball.radius;
      if (ball.velocity.y < -1.15) {
        const impact = -ball.velocity.y;
        ball.velocity.y = impact * BALL.RESTITUTION_GROUND;
        ball.velocity.x *= 0.94;
        ball.velocity.z *= 0.94;
        ball.spin.x *= 0.72;
        ball.spin.y *= 0.76;
        ball.spin.z *= 0.72;

        if (!emittedBounce.value) {
          emittedBounce.value = true;
          events.push({
            type: 'bounce',
            intensity: clamp(impact / 14, 0.14, 1.0),
            position: { x: ball.position.x, y: ball.position.y, z: ball.position.z },
          });
        }
      } else {
        ball.velocity.y = 0;
      }
    }

    // 7. Goalpost, crossbar & net collisions
    resolveGoalFrameCollisions(ball, events, emittedPostHit);
    resolveGoalNetCollisions(ball, prevX, prevY, prevZ, events, emittedNetRipple);

    // 8. Authentic rolling angular velocity & spin decay
    const isRolling = ball.position.y <= ball.radius + 0.03 && Math.abs(ball.velocity.y) < 0.35;
    if (isRolling) {
      const targetWx = ball.velocity.z / ball.radius;
      const targetWz = -ball.velocity.x / ball.radius;
      const blend = Math.min(1, 22 * subDt);
      ball.angularVelocity.x += (targetWx - ball.angularVelocity.x) * blend;
      ball.angularVelocity.y += (ball.spin.y * 0.4 - ball.angularVelocity.y) * blend;
      ball.angularVelocity.z += (targetWz - ball.angularVelocity.z) * blend;

      const spinGroundDecay = Math.exp(-4.5 * subDt);
      ball.spin.x *= spinGroundDecay;
      ball.spin.y *= spinGroundDecay;
      ball.spin.z *= spinGroundDecay;
    } else {
      const targetWx = ball.velocity.z / ball.radius * 0.35 + ball.spin.x;
      const targetWy = ball.spin.y;
      const targetWz = -ball.velocity.x / ball.radius * 0.35 + ball.spin.z;
      const blend = Math.min(1, 10 * subDt);
      ball.angularVelocity.x += (targetWx - ball.angularVelocity.x) * blend;
      ball.angularVelocity.y += (targetWy - ball.angularVelocity.y) * blend;
      ball.angularVelocity.z += (targetWz - ball.angularVelocity.z) * blend;

      const spinAirDecay = Math.exp(-0.65 * subDt);
      ball.spin.x *= spinAirDecay;
      ball.spin.y *= spinAirDecay;
      ball.spin.z *= spinAirDecay;
    }

    // 9. Goal & Out-of-bounds detection
    if (checkScoringAndBounds && scoredBy === null) {
      const inGoalMouthZ = Math.abs(ball.position.z) < PITCH.GOAL_HALF_WIDTH - 0.08;
      const inGoalMouthY = ball.position.y < PITCH.GOAL_HEIGHT - 0.05;
      const goalLineThreshold = PITCH.HALF_LENGTH + ball.radius * 0.45;

      if (ball.position.x > goalLineThreshold && inGoalMouthZ && inGoalMouthY) {
        scoredBy = 'home'; // Ball entered +X Away goal
      } else if (ball.position.x < -goalLineThreshold && inGoalMouthZ && inGoalMouthY) {
        scoredBy = 'away'; // Ball entered -X Home goal
      } else if (outOfBounds === null) {
        const touchLimit = PITCH.HALF_WIDTH + ball.radius;
        const goalLineLimit = PITCH.HALF_LENGTH + ball.radius;

        if (ball.position.z < -touchLimit) {
          outOfBounds = {
            side: 'touchline_north',
            position: { x: ball.position.x, y: ball.position.y, z: ball.position.z },
          };
        } else if (ball.position.z > touchLimit) {
          outOfBounds = {
            side: 'touchline_south',
            position: { x: ball.position.x, y: ball.position.y, z: ball.position.z },
          };
        } else if (
          ball.position.x < -goalLineLimit &&
          (!inGoalMouthZ || !inGoalMouthY)
        ) {
          outOfBounds = {
            side: 'goal_line_home',
            position: { x: ball.position.x, y: ball.position.y, z: ball.position.z },
          };
        } else if (
          ball.position.x > goalLineLimit &&
          (!inGoalMouthZ || !inGoalMouthY)
        ) {
          outOfBounds = {
            side: 'goal_line_away',
            position: { x: ball.position.x, y: ball.position.y, z: ball.position.z },
          };
        }
      }
    }

    // 10. Stadium advertising board safety boundary (prevents ball flying off world)
    const maxWorldX = PITCH.HALF_LENGTH + 5.0;
    const maxWorldZ = PITCH.HALF_WIDTH + 4.5;
    if (ball.position.x > maxWorldX) {
      ball.position.x = maxWorldX;
      ball.velocity.x = -Math.abs(ball.velocity.x) * 0.35;
    } else if (ball.position.x < -maxWorldX) {
      ball.position.x = -maxWorldX;
      ball.velocity.x = Math.abs(ball.velocity.x) * 0.35;
    }
    if (ball.position.z > maxWorldZ) {
      ball.position.z = maxWorldZ;
      ball.velocity.z = -Math.abs(ball.velocity.z) * 0.35;
    } else if (ball.position.z < -maxWorldZ) {
      ball.position.z = -maxWorldZ;
      ball.velocity.z = Math.abs(ball.velocity.z) * 0.35;
    }
  }

  // Final NaN safety net
  ball.position.x = sanitizeFinite(ball.position.x, 0);
  ball.position.y = Math.max(ball.radius, sanitizeFinite(ball.position.y, ball.radius));
  ball.position.z = sanitizeFinite(ball.position.z, 0);
  ball.velocity.x = sanitizeFinite(ball.velocity.x, 0);
  ball.velocity.y = sanitizeFinite(ball.velocity.y, 0);
  ball.velocity.z = sanitizeFinite(ball.velocity.z, 0);
  ball.angularVelocity.x = sanitizeFinite(ball.angularVelocity.x, 0);
  ball.angularVelocity.y = sanitizeFinite(ball.angularVelocity.y, 0);
  ball.angularVelocity.z = sanitizeFinite(ball.angularVelocity.z, 0);
  ball.spin.x = sanitizeFinite(ball.spin.x, 0);
  ball.spin.y = sanitizeFinite(ball.spin.y, 0);
  ball.spin.z = sanitizeFinite(ball.spin.z, 0);

  ball.isInAir = ball.position.y > ball.radius + 0.06;

  return { events, scoredBy, outOfBounds };
}
