import {
  BALL,
  FORMATION_5V5_HOME,
  KICKOFF_POSITIONS_HOME,
  MATCH,
  PITCH,
} from '../config/constants';
import type {
  ControlInput,
  FootballerProfile,
  GoalEvent,
  KitTheme,
  MatchPhase,
  MatchSnapshot,
  MatchStats,
  PositionGroup,
  SimBallState,
  SimEvent,
  SimPlayerState,
  TeamSide,
  Vec3,
} from '../types/game';
import {
  checkGoalkeeperSaves,
  computeCelebrationSteering,
  createAiRuntimeState,
  resetAiRuntimeState,
  stepAiController,
  type AiRuntimeState,
} from './aiController';
import {
  createInitialBallState,
  resetBall,
  stepBallPhysics,
  type OutOfBoundsInfo,
} from './ballPhysics';
import {
  clamp,
  executePass,
  executeShot,
  executeTackle,
  findBestPassTarget,
  getPlayerMotionProfile,
  resolvePlayerCollisions,
  updateBallDribble,
  updateBallPossessionAndInterceptions,
  updatePlayerMovement,
  type Vec2,
} from './playerPhysics';

const SLOT_ROLES: readonly PositionGroup[] = ['GK', 'DEF', 'MID', 'FWD', 'FWD'] as const;

export interface CameraBasis {
  right: { x: number; z: number };
  forward: { x: number; z: number };
}

function createEmptyStats(): MatchStats {
  return {
    homeShots: 0,
    awayShots: 0,
    homeShotsOnTarget: 0,
    awayShotsOnTarget: 0,
    homePasses: 0,
    awayPasses: 0,
    homeTackles: 0,
    awayTackles: 0,
    homePossessionTicks: 0,
    awayPossessionTicks: 0,
  };
}

function createSimPlayer(
  profile: FootballerProfile,
  team: TeamSide,
  slotIndex: number
): SimPlayerState {
  const homeAnchorBase = FORMATION_5V5_HOME[slotIndex] ?? FORMATION_5V5_HOME[2];
  const sign = team === 'home' ? 1 : -1;
  const anchor: Vec3 = {
    x: homeAnchorBase.x * sign,
    y: 0,
    z: homeAnchorBase.z * sign,
  };
  const motion = getPlayerMotionProfile(profile);

  return {
    id: `${team}_${slotIndex}`,
    profile,
    team,
    slotIndex,
    role: SLOT_ROLES[slotIndex] ?? profile.positionGroup,
    position: { x: anchor.x, y: 0, z: anchor.z },
    velocity: { x: 0, y: 0, z: 0 },
    facing: team === 'home' ? Math.PI * 0.5 : -Math.PI * 0.5,
    speed: 0,
    maxSpeed: motion.sprintSpeed,
    stamina: 1,
    hasBall: false,
    actionState: slotIndex === 0 ? 'gk_ready' : 'idle',
    actionTimer: 0,
    actionDuration: 0,
    kickLeg: profile.preferredFoot,
    shotCharge: 0,
    passCharge: 0,
    animPhase: slotIndex * 1.1,
    turnLean: 0,
    isControlled: team === 'home' && slotIndex === 4,
    tackleCooldown: 0,
    kickCooldown: 0,
    diveDirection: 0,
    homeAnchor: anchor,
    aiTarget: { x: anchor.x, y: 0, z: anchor.z },
  };
}

export class MatchEngine {
  private homeSquad: FootballerProfile[];
  private awaySquad: FootballerProfile[];
  private homeKit: KitTheme;
  private awayKit: KitTheme;

  private players: SimPlayerState[] = [];
  private ball: SimBallState = createInitialBallState();
  private aiState: AiRuntimeState = createAiRuntimeState();

  private phase: MatchPhase = 'squad_select';
  private previousPhase: MatchPhase = 'kickoff_ready';
  private homeScore = 0;
  private awayScore = 0;
  private matchSeconds = 0;
  private half: 1 | 2 = 1;
  private phaseTimer = 0;
  private kickoffTeam: TeamSide = 'home';
  private restartType: 'kickoff' | 'throw_in' | 'goal_kick' | 'corner' = 'kickoff';
  private restartTeam: TeamSide = 'home';
  private restartPosition: Vec3 = { x: 0, y: BALL.RADIUS, z: 0 };
  private controlledPlayerId = 'home_4';
  private goals: GoalEvent[] = [];
  private latestGoal: GoalEvent | null = null;
  private stats: MatchStats = createEmptyStats();
  private bannerText: string | null = null;

  // Auxiliary tracking for responsive feel & accurate goal metadata
  private lastUserAimDir: Vec2 = { x: 1, z: 0 };
  private autoSwitchCooldown = 0;
  private lastShotSpeedMs = 0;
  private lastTouchByTeam: Record<TeamSide, string | null> = { home: null, away: null };
  private userChargingPass = false;
  private userChargingShot = false;

  constructor(
    homeSquad: FootballerProfile[],
    awaySquad: FootballerProfile[],
    homeKit: KitTheme,
    awayKit: KitTheme
  ) {
    this.homeSquad = [...homeSquad];
    this.awaySquad = [...awaySquad];
    this.homeKit = homeKit;
    this.awayKit = awayKit;

    this.buildPlayers();
    this.setupKickoffPositions('home');
    this.phase = 'squad_select';
    this.previousPhase = 'kickoff_ready';
    this.bannerText = null;
  }

  public resetMatch(
    homeSquad?: FootballerProfile[],
    awaySquad?: FootballerProfile[],
    homeKit?: KitTheme,
    awayKit?: KitTheme
  ): void {
    if (homeSquad) this.homeSquad = [...homeSquad];
    if (awaySquad) this.awaySquad = [...awaySquad];
    if (homeKit) this.homeKit = homeKit;
    if (awayKit) this.awayKit = awayKit;

    this.homeScore = 0;
    this.awayScore = 0;
    this.matchSeconds = 0;
    this.half = 1;
    this.kickoffTeam = 'home';
    this.restartType = 'kickoff';
    this.restartTeam = 'home';
    this.restartPosition = { x: 0, y: BALL.RADIUS, z: 0 };
    this.goals = [];
    this.latestGoal = null;
    this.stats = createEmptyStats();
    this.lastShotSpeedMs = 0;
    this.lastTouchByTeam = { home: null, away: null };
    this.autoSwitchCooldown = 0;
    this.userChargingPass = false;
    this.userChargingShot = false;
    this.lastUserAimDir = { x: 1, z: 0 };

    resetAiRuntimeState(this.aiState);
    this.buildPlayers();
    this.setupKickoffPositions('home');

    this.phase = 'kickoff_ready';
    this.previousPhase = 'kickoff_ready';
    this.phaseTimer = MATCH.KICKOFF_READY_SECONDS;
    this.bannerText = 'KICK OFF';
  }

  public startMatch(): void {
    if (this.phase === 'fulltime') {
      this.resetMatch();
      return;
    }
    this.setupKickoffPositions(this.kickoffTeam);
    this.phase = 'kickoff_ready';
    this.previousPhase = 'kickoff_ready';
    this.phaseTimer = MATCH.KICKOFF_READY_SECONDS;
    this.bannerText = 'KICK OFF';
  }

  public setPaused(paused: boolean): void {
    if (paused) {
      if (
        this.phase !== 'paused' &&
        this.phase !== 'squad_select' &&
        this.phase !== 'fulltime'
      ) {
        this.previousPhase = this.phase;
        this.phase = 'paused';
      }
    } else if (this.phase === 'paused') {
      this.phase = this.previousPhase;
    }
  }

  public getSnapshot(): MatchSnapshot {
    return {
      phase: this.phase,
      previousPhase: this.previousPhase,
      homeScore: this.homeScore,
      awayScore: this.awayScore,
      matchSeconds: this.matchSeconds,
      half: this.half,
      phaseTimer: this.phaseTimer,
      kickoffTeam: this.kickoffTeam,
      restartType: this.restartType,
      restartTeam: this.restartTeam,
      restartPosition: { ...this.restartPosition },
      players: this.players,
      ball: this.ball,
      controlledPlayerId: this.controlledPlayerId,
      goals: this.goals,
      latestGoal: this.latestGoal,
      stats: this.stats,
      homeKit: this.homeKit,
      awayKit: this.awayKit,
      bannerText: this.bannerText,
    };
  }

  public getPassTargetPreview(): SimPlayerState | null {
    if (this.phase !== 'playing') return null;
    const controlled = this.getControlledPlayer();
    if (!controlled) return null;

    const nearLooseBall =
      this.ball.ownerId === null &&
      Math.hypot(
        this.ball.position.x - controlled.position.x,
        this.ball.position.z - controlled.position.z
      ) < 1.65;

    if (!controlled.hasBall && !nearLooseBall) return null;

    return findBestPassTarget(controlled, this.players, this.lastUserAimDir);
  }

  public step(dt: number, input: ControlInput, cameraBasis: CameraBasis): SimEvent[] {
    const safeDt = clamp(Number.isFinite(dt) ? dt : MATCH.FIXED_DT, 0, 0.05);
    if (safeDt <= 0) return [];

    if (
      this.phase === 'paused' ||
      this.phase === 'squad_select' ||
      this.phase === 'fulltime'
    ) {
      return [];
    }

    const events: SimEvent[] = [];

    // 1. KICKOFF READY COUNTDOWN
    if (this.phase === 'kickoff_ready') {
      this.phaseTimer -= safeDt;
      // Gentle idle settle
      for (let i = 0; i < this.players.length; i++) {
        const p = this.players[i];
        p.velocity.x = 0;
        p.velocity.z = 0;
        p.speed = 0;
        p.turnLean = 0;
      }

      if (this.phaseTimer <= 0) {
        this.phase = 'playing';
        this.bannerText = null;
        this.phaseTimer = 0;
        events.push({ type: 'whistle_short', intensity: 0.85 });

        // Hand kickoff cleanly to kickoff team's slot 4
        const kickerId = `${this.kickoffTeam}_4`;
        const kicker = this.findPlayerById(kickerId);
        if (kicker) {
          this.clearAllPossession();
          kicker.hasBall = true;
          this.ball.ownerId = kicker.id;
          this.ball.lastTouchPlayerId = kicker.id;
          this.ball.lastTouchTeam = kicker.team;
          this.lastTouchByTeam[kicker.team] = kicker.id;

          if (this.kickoffTeam === 'home') {
            this.setControlledPlayer(kicker.id);
          } else {
            this.aiState.restartTakerId = kicker.id;
            this.aiState.restartAutoPassTimer = 0.35;
          }
        }
      }
      return events;
    }

    // 2. HALFTIME BRIEF BANNER
    if (this.phase === 'halftime') {
      this.phaseTimer -= safeDt;
      for (let i = 0; i < this.players.length; i++) {
        updatePlayerMovement(this.players[i], { x: 0, z: 0 }, false, safeDt);
      }
      stepBallPhysics(this.ball, safeDt, false);

      if (this.phaseTimer <= 0) {
        this.half = 2;
        this.kickoffTeam = 'away';
        this.restartType = 'kickoff';
        this.restartTeam = 'away';
        this.setupKickoffPositions('away');
        this.phase = 'kickoff_ready';
        this.phaseTimer = MATCH.KICKOFF_READY_SECONDS;
        this.bannerText = '2ND HALF';
      }
      return events;
    }

    // 3. GOAL CELEBRATION
    if (this.phase === 'goal_celebration') {
      this.phaseTimer -= safeDt;

      // Keep ball tumbling softly into the back of the net
      const ballRes = stepBallPhysics(this.ball, safeDt, false);
      events.push(...ballRes.events);

      if (this.latestGoal) {
        const commands = computeCelebrationSteering(
          this.players,
          this.latestGoal.scorerId,
          this.latestGoal.team
        );
        for (let i = 0; i < this.players.length; i++) {
          const p = this.players[i];
          const cmd = commands.get(p.id);
          updatePlayerMovement(
            p,
            cmd ? { x: cmd.dirX, z: cmd.dirZ } : { x: 0, z: 0 },
            false,
            safeDt
          );
        }
        resolvePlayerCollisions(this.players);
      }

      if (this.phaseTimer <= 0) {
        this.latestGoal = null;
        this.setupKickoffPositions(this.kickoffTeam);
        this.phase = 'kickoff_ready';
        this.phaseTimer = MATCH.KICKOFF_READY_SECONDS;
        this.bannerText = 'KICK OFF';
      }
      return events;
    }

    // 4. OUT-OF-BOUNDS BRIEF PAUSE -> CLEAN RESTART
    if (this.phase === 'out_of_bounds') {
      this.phaseTimer -= safeDt;

      const ballRes = stepBallPhysics(this.ball, safeDt, false);
      events.push(...ballRes.events);

      for (let i = 0; i < this.players.length; i++) {
        updatePlayerMovement(this.players[i], { x: 0, z: 0 }, false, safeDt);
      }

      if (this.phaseTimer <= 0) {
        this.setupOutOfBoundsRestart();
        this.phase = 'playing';
        this.bannerText = null;
        this.phaseTimer = 0;
        events.push({ type: 'whistle_short', intensity: 0.55 });
      }
      return events;
    }

    // 5. LIVE PLAYING SIMULATION
    return this.stepPlaying(safeDt, input, cameraBasis);
  }

  private stepPlaying(
    dt: number,
    input: ControlInput,
    cameraBasis: CameraBasis
  ): SimEvent[] {
    const events: SimEvent[] = [];

    // Advance match clock
    this.matchSeconds += dt * MATCH.MATCH_CLOCK_SCALE;

    // Check Halftime
    if (this.half === 1 && this.matchSeconds >= MATCH.HALFTIME_MATCH_SECONDS) {
      this.matchSeconds = MATCH.HALFTIME_MATCH_SECONDS;
      this.clearAllPossession();
      this.userChargingPass = false;
      this.userChargingShot = false;
      this.phase = 'halftime';
      this.phaseTimer = MATCH.HALFTIME_PAUSE_SECONDS;
      this.bannerText = 'HALF TIME';
      events.push({ type: 'whistle_short', intensity: 0.9 });
      return events;
    }

    // Check Fulltime
    if (this.half === 2 && this.matchSeconds >= MATCH.FULLTIME_MATCH_SECONDS) {
      this.matchSeconds = MATCH.FULLTIME_MATCH_SECONDS;
      this.clearAllPossession();
      this.userChargingPass = false;
      this.userChargingShot = false;
      this.phase = 'fulltime';
      this.phaseTimer = 0;
      this.bannerText = 'FULL TIME';
      events.push({ type: 'whistle_long', intensity: 1.0 });
      return events;
    }

    if (this.autoSwitchCooldown > 0) {
      this.autoSwitchCooldown = Math.max(0, this.autoSwitchCooldown - dt);
    }

    // Track possession statistics
    const currentOwner = this.ball.ownerId ? this.findPlayerById(this.ball.ownerId) : null;
    if (currentOwner) {
      if (currentOwner.team === 'home') this.stats.homePossessionTicks += 1;
      else this.stats.awayPossessionTicks += 1;
      this.lastTouchByTeam[currentOwner.team] = currentOwner.id;
    } else if (this.ball.lastTouchTeam === 'home') {
      this.stats.homePossessionTicks += 1;
    } else if (this.ball.lastTouchTeam === 'away') {
      this.stats.awayPossessionTicks += 1;
    }

    // Convert screen-relative WASD input to world-space XZ using camera basis
    let worldX = input.moveX * cameraBasis.right.x - input.moveZ * cameraBasis.forward.x;
    let worldZ = input.moveX * cameraBasis.right.z - input.moveZ * cameraBasis.forward.z;
    const moveLen = Math.hypot(worldX, worldZ);
    if (moveLen > 1) {
      worldX /= moveLen;
      worldZ /= moveLen;
    }
    const userMoveDir: Vec2 = { x: worldX, z: worldZ };

    if (moveLen > 0.12) {
      const inv = 1 / Math.max(moveLen, 1e-4);
      this.lastUserAimDir = { x: worldX * inv, z: worldZ * inv };
    }

    // Manual Q-key switching
    if (input.switchJustPressed) {
      this.switchToBestHomePlayer(true);
    }

    // Auto-switch on Home pass in flight or loose ball
    this.handleAutoSwitching();

    const controlled = this.getControlledPlayer();
    if (!controlled) return events;

    // Update user aim fallback to player's facing if no stick/WASD held
    if (moveLen <= 0.12) {
      this.lastUserAimDir = {
        x: Math.sin(controlled.facing),
        z: Math.cos(controlled.facing),
      };
    }

    // Handle controlled player actions (Pass, Shoot, Tackle)
    this.handleControlledPlayerActions(controlled, input, userMoveDir, dt, events);

    // Step AI for all non-controlled players
    const aiRes = stepAiController(
      this.players,
      this.ball,
      controlled,
      this.aiState,
      this.stats,
      events,
      dt
    );
    if (aiRes.lastShotSpeed !== null) {
      this.lastShotSpeedMs = aiRes.lastShotSpeed;
      if (aiRes.lastShooterId) {
        this.lastTouchByTeam.away = aiRes.lastShooterId;
      }
    }

    // Step movement physics for all 10 players
    for (let i = 0; i < this.players.length; i++) {
      const p = this.players[i];
      if (p.isControlled) {
        updatePlayerMovement(p, userMoveDir, input.sprint, dt);
      } else {
        const cmd = aiRes.commands.get(p.id);
        updatePlayerMovement(
          p,
          cmd ? { x: cmd.dirX, z: cmd.dirZ } : { x: 0, z: 0 },
          cmd ? cmd.sprint : false,
          dt,
          cmd?.faceAngle
        );
      }
    }

    // Soft elastic player-to-player shoulder separation
    resolvePlayerCollisions(this.players);

    // Step ball physics or soft-tether dribbling
    const prevBallPos: Vec3 = {
      x: this.ball.position.x,
      y: this.ball.position.y,
      z: this.ball.position.z,
    };

    const ownerAfterActions = this.ball.ownerId
      ? this.findPlayerById(this.ball.ownerId)
      : null;

    let scoredBy: TeamSide | null = null;
    let outOfBounds: OutOfBoundsInfo | null = null;

    if (ownerAfterActions && ownerAfterActions.hasBall) {
      updateBallDribble(ownerAfterActions, this.ball, dt);
      this.lastTouchByTeam[ownerAfterActions.team] = ownerAfterActions.id;

      // Check if carrier physically walked the ball across a goal line or touchline
      const inGoalMouthZ = Math.abs(this.ball.position.z) < PITCH.GOAL_HALF_WIDTH - 0.08;
      if (this.ball.position.x > PITCH.HALF_LENGTH + this.ball.radius * 0.45 && inGoalMouthZ) {
        scoredBy = 'home';
      } else if (
        this.ball.position.x < -(PITCH.HALF_LENGTH + this.ball.radius * 0.45) &&
        inGoalMouthZ
      ) {
        scoredBy = 'away';
      } else if (this.ball.position.z < -(PITCH.HALF_WIDTH + this.ball.radius)) {
        outOfBounds = { side: 'touchline_north', position: { ...this.ball.position } };
      } else if (this.ball.position.z > PITCH.HALF_WIDTH + this.ball.radius) {
        outOfBounds = { side: 'touchline_south', position: { ...this.ball.position } };
      } else if (this.ball.position.x < -(PITCH.HALF_LENGTH + this.ball.radius) && !inGoalMouthZ) {
        outOfBounds = { side: 'goal_line_home', position: { ...this.ball.position } };
      } else if (this.ball.position.x > PITCH.HALF_LENGTH + this.ball.radius && !inGoalMouthZ) {
        outOfBounds = { side: 'goal_line_away', position: { ...this.ball.position } };
      }
    } else {
      const ballRes = stepBallPhysics(this.ball, dt, true);
      events.push(...ballRes.events);
      scoredBy = ballRes.scoredBy;
      outOfBounds = ballRes.outOfBounds;
    }

    // Check goalkeeper swept saves before goal finalization (unless already past goal line)
    if (scoredBy === null && this.ball.ownerId === null) {
      const savedByGk = checkGoalkeeperSaves(
        this.players,
        this.ball,
        prevBallPos,
        this.aiState,
        events
      );
      if (savedByGk) {
        this.lastTouchByTeam[savedByGk.team] = savedByGk.id;
      }
    }

    // Check outfield traps, active tackles, and standing interceptions
    if (scoredBy === null && outOfBounds === null) {
      const claimer = updateBallPossessionAndInterceptions(
        this.players,
        this.ball,
        this.stats,
        events
      );
      if (claimer) {
        this.lastTouchByTeam[claimer.team] = claimer.id;
        // Immediately grant user control when a Home outfield player claims the ball!
        if (claimer.team === 'home' && claimer.role !== 'GK' && !claimer.isControlled) {
          this.setControlledPlayer(claimer.id);
        }
      }
    }

    // Keep lastTouchByTeam updated on loose deflections
    if (this.ball.lastTouchTeam && this.ball.lastTouchPlayerId) {
      this.lastTouchByTeam[this.ball.lastTouchTeam] = this.ball.lastTouchPlayerId;
    }

    // Finalize Goal!
    if (scoredBy !== null) {
      this.handleGoalScored(scoredBy, events);
      return events;
    }

    // Finalize Out-of-Bounds!
    if (outOfBounds !== null) {
      this.handleOutOfBounds(outOfBounds, events);
      return events;
    }

    return events;
  }

  private handleControlledPlayerActions(
    player: SimPlayerState,
    input: ControlInput,
    moveDir: Vec2,
    dt: number,
    events: SimEvent[]
  ): void {
    const canKickBall =
      player.hasBall ||
      (this.ball.ownerId === null &&
        player.kickCooldown <= 0 &&
        this.ball.position.y < 1.25 &&
        Math.hypot(
          this.ball.position.x - player.position.x,
          this.ball.position.z - player.position.z
        ) < 1.48);

    const aimDir: Vec2 | null =
      Math.hypot(moveDir.x, moveDir.z) > 0.12 ? moveDir : null;

    // 1. SHOOTING (Hold J to charge over 0.65s, release to shoot; supports pre-buffering before trap)
    if (canKickBall && player.actionState !== 'stunned' && player.actionState !== 'tackle') {
      if (
        input.shootJustPressed ||
        (input.shootHeld && !this.userChargingShot && player.kickCooldown <= 0)
      ) {
        this.userChargingShot = true;
        this.userChargingPass = false;
        player.passCharge = 0;
        player.shotCharge = Math.max(player.shotCharge, 0.1);
        player.actionState = 'shoot_charge';
      }

      if (this.userChargingShot && input.shootHeld) {
        player.shotCharge = clamp(player.shotCharge + dt / 0.65, 0, 1);
        player.actionState = 'shoot_charge';
      }

      if (
        (input.shootJustReleased || !input.shootHeld) &&
        (this.userChargingShot || player.shotCharge > 0)
      ) {
        const finalCharge = Math.max(0.18, player.shotCharge);
        this.lastShotSpeedMs = executeShot(
          player,
          this.ball,
          aimDir,
          finalCharge,
          this.stats,
          events
        );
        this.lastTouchByTeam.home = player.id;
        this.userChargingShot = false;
        this.userChargingPass = false;
        return;
      }
    } else if (this.userChargingShot || player.shotCharge > 0) {
      // Lost possession while charging -> cleanly cancel
      this.userChargingShot = false;
      player.shotCharge = 0;
      if (player.actionState === 'shoot_charge') {
        player.actionState = 'idle';
      }
    }

    // 2. PASSING (Tap Space for crisp ground pass, hold for driven through-ball; supports pre-buffering)
    if (
      canKickBall &&
      !this.userChargingShot &&
      player.actionState !== 'stunned' &&
      player.actionState !== 'tackle'
    ) {
      if (
        input.passJustPressed ||
        (input.passHeld && !this.userChargingPass && player.kickCooldown <= 0)
      ) {
        this.userChargingPass = true;
        player.passCharge = Math.max(player.passCharge, 0.08);
      }

      if (this.userChargingPass && input.passHeld) {
        player.passCharge = clamp(player.passCharge + dt / 0.55, 0, 1);
      }

      if (
        (input.passJustReleased || !input.passHeld) &&
        (this.userChargingPass || player.passCharge > 0)
      ) {
        const finalCharge = clamp(player.passCharge, 0.08, 1);
        const receiver = executePass(
          player,
          this.ball,
          this.players,
          aimDir,
          finalCharge,
          this.stats,
          events
        );
        this.lastTouchByTeam.home = player.id;
        this.userChargingPass = false;
        player.passCharge = 0;

        // If user just cleared/passed with GK, immediately switch to receiver!
        if (player.role === 'GK' && receiver && receiver.team === 'home') {
          this.setControlledPlayer(receiver.id);
        }
        return;
      }
    } else if (this.userChargingPass || player.passCharge > 0) {
      this.userChargingPass = false;
      player.passCharge = 0;
    }

    // 3. TACKLING (E key when not carrying the ball)
    if (input.tackleJustPressed && !player.hasBall) {
      executeTackle(player, this.ball, this.players, aimDir, this.stats, events);
    }
  }

  private handleAutoSwitching(): void {
    const controlled = this.getControlledPlayer();
    if (!controlled) return;

    // 1. If a Home pass is traveling toward a Home outfield teammate, switch smoothly to receiver!
    if (
      this.ball.ownerId === null &&
      this.ball.passTargetId &&
      this.ball.passTargetId.startsWith('home_') &&
      this.ball.passTargetId !== this.controlledPlayerId &&
      this.ball.pickupLockTimer <= 0.14
    ) {
      const target = this.findPlayerById(this.ball.passTargetId);
      if (target && target.role !== 'GK') {
        this.setControlledPlayer(target.id);
        this.autoSwitchCooldown = 0.45;
        return;
      }
    }

    // 2. If Home has the ball on an outfield player, always control the ball carrier
    if (this.ball.ownerId && this.ball.ownerId.startsWith('home_')) {
      const owner = this.findPlayerById(this.ball.ownerId);
      if (owner && owner.role !== 'GK' && owner.id !== this.controlledPlayerId) {
        this.setControlledPlayer(owner.id);
        return;
      }
    }

    // 3. If currently on GK during open play without ball, return control to best outfielder
    if (controlled.role === 'GK' && !controlled.hasBall) {
      this.switchToBestHomePlayer(false);
      return;
    }

    // 4. On defense / loose ball, auto-switch if another Home outfielder is much closer to the ball
    if (
      !controlled.hasBall &&
      controlled.actionState !== 'tackle' &&
      this.autoSwitchCooldown <= 0
    ) {
      const curDist = Math.hypot(
        this.ball.position.x - controlled.position.x,
        this.ball.position.z - controlled.position.z
      );
      if (curDist > 8.0) {
        let bestCandidate: SimPlayerState | null = null;
        let bestDist = curDist * 0.56;
        for (let i = 0; i < this.players.length; i++) {
          const p = this.players[i];
          if (p.team !== 'home' || p.role === 'GK' || p.id === controlled.id) continue;
          const d = Math.hypot(
            this.ball.position.x - p.position.x,
            this.ball.position.z - p.position.z
          );
          if (d < bestDist) {
            bestDist = d;
            bestCandidate = p;
          }
        }
        if (bestCandidate) {
          this.setControlledPlayer(bestCandidate.id);
          this.autoSwitchCooldown = 0.65;
        }
      }
    }
  }

  private switchToBestHomePlayer(excludeCurrent: boolean): void {
    const predX = clamp(this.ball.position.x + this.ball.velocity.x * 0.2, -31, 31);
    const predZ = clamp(this.ball.position.z + this.ball.velocity.z * 0.2, -19, 19);

    let best: SimPlayerState | null = null;
    let bestDist = Infinity;

    for (let i = 0; i < this.players.length; i++) {
      const p = this.players[i];
      if (p.team !== 'home') continue;
      if (excludeCurrent && p.id === this.controlledPlayerId) continue;

      // Exclude GK unless ball is deep in Home box and GK is clearly closest
      if (p.role === 'GK' && this.ball.position.x > -23.0) continue;

      const d = Math.hypot(predX - p.position.x, predZ - p.position.z);
      if (d < bestDist) {
        bestDist = d;
        best = p;
      }
    }

    if (best) {
      this.setControlledPlayer(best.id);
      this.autoSwitchCooldown = 0.5;
    }
  }

  private handleGoalScored(scoredBy: TeamSide, events: SimEvent[]): void {
    this.clearAllPossession();
    this.userChargingPass = false;
    this.userChargingShot = false;

    if (scoredBy === 'home') {
      this.homeScore += 1;
    } else {
      this.awayScore += 1;
    }

    // Resolve scorer: prefer last player on the scoring team who touched the ball
    let scorer =
      (this.lastTouchByTeam[scoredBy]
        ? this.findPlayerById(this.lastTouchByTeam[scoredBy]!)
        : null) ??
      (this.ball.lastTouchPlayerId
        ? this.findPlayerById(this.ball.lastTouchPlayerId)
        : null);

    if (!scorer || scorer.team !== scoredBy) {
      // Fallback: closest outfield player on scoring team to ball
      let bestDist = Infinity;
      for (let i = 0; i < this.players.length; i++) {
        const p = this.players[i];
        if (p.team !== scoredBy || p.role === 'GK') continue;
        const d = Math.hypot(
          this.ball.position.x - p.position.x,
          this.ball.position.z - p.position.z
        );
        if (d < bestDist) {
          bestDist = d;
          scorer = p;
        }
      }
    }

    const fallbackScorer = scorer ?? this.players[scoredBy === 'home' ? 4 : 9];
    const currentSpeed = Math.hypot(
      this.ball.velocity.x,
      this.ball.velocity.y,
      this.ball.velocity.z
    );
    const speedMs = Math.max(this.lastShotSpeedMs, currentSpeed, 11.5);
    const shotSpeedKmh = Math.round(clamp(speedMs * 3.6, 42, 138));
    const minute = clamp(Math.ceil(this.matchSeconds / 60), 1, 90);

    const goalEvent: GoalEvent = {
      scorerId: fallbackScorer.id,
      scorerName: fallbackScorer.profile.name,
      scorerShortName: fallbackScorer.profile.shortName,
      scorerNumber: fallbackScorer.profile.number,
      team: scoredBy,
      minute,
      shotSpeedKmh,
    };

    this.goals.push(goalEvent);
    this.latestGoal = goalEvent;
    this.kickoffTeam = scoredBy === 'home' ? 'away' : 'home';
    this.restartType = 'kickoff';
    this.restartTeam = this.kickoffTeam;
    this.restartPosition = { x: 0, y: BALL.RADIUS, z: 0 };
    this.lastShotSpeedMs = 0;

    this.phase = 'goal_celebration';
    this.phaseTimer = MATCH.GOAL_CELEBRATION_SECONDS;
    this.bannerText = 'GOAL!';

    fallbackScorer.actionState = 'celebrate';

    events.push({
      type: 'goal_cheer',
      intensity: 1.0,
      position: { x: this.ball.position.x, y: this.ball.position.y, z: this.ball.position.z },
      goalSide: scoredBy === 'home' ? 'away' : 'home',
      goalEvent,
    });
    events.push({ type: 'whistle_short', intensity: 0.9 });
  }

  private handleOutOfBounds(oob: OutOfBoundsInfo, events: SimEvent[]): void {
    this.clearAllPossession();
    this.userChargingPass = false;
    this.userChargingShot = false;

    const lastTeam = this.ball.lastTouchTeam ?? 'home';
    const otherTeam: TeamSide = lastTeam === 'home' ? 'away' : 'home';

    if (oob.side === 'touchline_north' || oob.side === 'touchline_south') {
      this.restartType = 'throw_in';
      this.restartTeam = otherTeam;
      this.bannerText = 'THROW IN';
      this.restartPosition = {
        x: clamp(oob.position.x, -PITCH.HALF_LENGTH + 2.5, PITCH.HALF_LENGTH - 2.5),
        y: BALL.RADIUS,
        z: oob.side === 'touchline_north' ? -PITCH.HALF_WIDTH + 0.75 : PITCH.HALF_WIDTH - 0.75,
      };
    } else if (oob.side === 'goal_line_home') {
      if (lastTeam === 'home') {
        // Home knocked it behind own goal line -> Away corner!
        this.restartType = 'corner';
        this.restartTeam = 'away';
        this.bannerText = 'CORNER KICK';
        this.restartPosition = {
          x: -PITCH.HALF_LENGTH + 1.1,
          y: BALL.RADIUS,
          z: oob.position.z >= 0 ? PITCH.HALF_WIDTH - 1.1 : -PITCH.HALF_WIDTH + 1.1,
        };
      } else {
        // Away missed -> Home goal kick!
        this.restartType = 'goal_kick';
        this.restartTeam = 'home';
        this.bannerText = 'GOAL KICK';
        this.restartPosition = {
          x: -PITCH.HALF_LENGTH + 4.0,
          y: BALL.RADIUS,
          z: clamp(oob.position.z, -3.5, 3.5),
        };
      }
    } else {
      // goal_line_away (+X)
      if (lastTeam === 'away') {
        // Away knocked it behind own goal line -> Home corner!
        this.restartType = 'corner';
        this.restartTeam = 'home';
        this.bannerText = 'CORNER KICK';
        this.restartPosition = {
          x: PITCH.HALF_LENGTH - 1.1,
          y: BALL.RADIUS,
          z: oob.position.z >= 0 ? PITCH.HALF_WIDTH - 1.1 : -PITCH.HALF_WIDTH + 1.1,
        };
      } else {
        // Home missed -> Away goal kick!
        this.restartType = 'goal_kick';
        this.restartTeam = 'away';
        this.bannerText = 'GOAL KICK';
        this.restartPosition = {
          x: PITCH.HALF_LENGTH - 4.0,
          y: BALL.RADIUS,
          z: clamp(oob.position.z, -3.5, 3.5),
        };
      }
    }

    this.phase = 'out_of_bounds';
    this.phaseTimer = MATCH.OUT_OF_BOUNDS_SECONDS;
    events.push({ type: 'whistle_short', intensity: 0.65 });
  }

  private setupOutOfBoundsRestart(): void {
    this.clearAllPossession();
    resetBall(this.ball, this.restartPosition.x, BALL.RADIUS, this.restartPosition.z);

    const team = this.restartTeam;
    const oppTeam: TeamSide = team === 'home' ? 'away' : 'home';
    const attackSign = team === 'home' ? 1 : -1;

    // Pick taker by restart type
    let takerSlot = 2; // MID default for throw-in
    if (this.restartType === 'goal_kick') {
      takerSlot = 0; // GK
    } else if (this.restartType === 'corner') {
      takerSlot = 3; // Winger/FWD
    } else {
      // Closest outfield player on restartTeam
      let bestDist = Infinity;
      for (let i = 0; i < this.players.length; i++) {
        const p = this.players[i];
        if (p.team !== team || p.role === 'GK') continue;
        const d = Math.hypot(
          p.position.x - this.restartPosition.x,
          p.position.z - this.restartPosition.z
        );
        if (d < bestDist) {
          bestDist = d;
          takerSlot = p.slotIndex;
        }
      }
    }

    const taker = this.findPlayerById(`${team}_${takerSlot}`);
    if (!taker) return;

    // Reset everyone's velocities & timed states cleanly
    for (let i = 0; i < this.players.length; i++) {
      const p = this.players[i];
      p.velocity.x = 0;
      p.velocity.z = 0;
      p.speed = 0;
      p.actionTimer = 0;
      p.actionDuration = 0;
      p.shotCharge = 0;
      p.passCharge = 0;
      p.actionState = p.role === 'GK' ? 'gk_ready' : 'idle';
    }

    // Place taker right next to restart ball facing into the pitch
    const inwardX = clamp(-Math.sign(this.restartPosition.x) * 0.5 + attackSign * 0.5, -1, 1);
    const inwardZ = -Math.sign(this.restartPosition.z || 1);
    const inLen = Math.hypot(inwardX, inwardZ) || 1;
    const faceX = this.restartType === 'goal_kick' ? attackSign : inwardX / inLen;
    const faceZ = this.restartType === 'goal_kick' ? 0 : inwardZ / inLen;

    taker.position.x = clamp(
      this.restartPosition.x - faceX * 0.6,
      -PITCH.HALF_LENGTH + 0.5,
      PITCH.HALF_LENGTH - 0.5
    );
    taker.position.z = clamp(
      this.restartPosition.z - faceZ * 0.6,
      -PITCH.HALF_WIDTH + 0.5,
      PITCH.HALF_WIDTH - 0.5
    );
    taker.facing = Math.atan2(faceX, faceZ);
    taker.hasBall = true;

    this.ball.ownerId = taker.id;
    this.ball.lastTouchPlayerId = taker.id;
    this.ball.lastTouchTeam = team;
    this.lastTouchByTeam[team] = taker.id;

    // Position teammates cleanly for passing options & push opponents at least 6m away
    for (let i = 0; i < this.players.length; i++) {
      const p = this.players[i];
      if (p.id === taker.id) continue;

      if (this.restartType === 'goal_kick') {
        // Place outfield players near tactical anchors so goal kick has clean outlets
        const anchorSign = p.team === 'home' ? 1 : -1;
        const base = FORMATION_5V5_HOME[p.slotIndex] ?? FORMATION_5V5_HOME[2];
        if (p.role !== 'GK') {
          p.position.x = clamp(base.x * anchorSign, -24, 24);
          p.position.z = base.z * anchorSign;
        }
      } else if (this.restartType === 'corner') {
        if (p.role !== 'GK') {
          const boxX = attackSign * (PITCH.HALF_LENGTH - 7.5);
          if (p.team === team) {
            if (p.role === 'FWD') {
              p.position.x = boxX;
              p.position.z = p.slotIndex === 4 ? 1.5 : -2.5;
            } else if (p.role === 'MID') {
              p.position.x = boxX - attackSign * 5.0;
              p.position.z = Math.sign(this.restartPosition.z) * 5.0;
            } else {
              p.position.x = 0;
              p.position.z = 0;
            }
          } else {
            // Defending team packs the box cleanly
            if (p.role === 'DEF') {
              p.position.x = boxX + attackSign * 1.5;
              p.position.z = 0;
            } else if (p.role === 'MID') {
              p.position.x = boxX - attackSign * 2.0;
              p.position.z = -Math.sign(this.restartPosition.z) * 2.5;
            } else {
              p.position.x = clamp(boxX - attackSign * 10.0, -18, 18);
              p.position.z = p.slotIndex === 3 ? -6 : 6;
            }
          }
        }
      }

      // Enforce 6m minimum clearance for opposing players on ALL restarts
      if (p.team === oppTeam) {
        const dx = p.position.x - this.restartPosition.x;
        const dz = p.position.z - this.restartPosition.z;
        const dist = Math.hypot(dx, dz);
        if (dist < 6.5) {
          const ux = dist > 0.1 ? dx / dist : -attackSign;
          const uz = dist > 0.1 ? dz / dist : -Math.sign(this.restartPosition.z || 1);
          p.position.x = clamp(this.restartPosition.x + ux * 7.0, -29, 29);
          p.position.z = clamp(this.restartPosition.z + uz * 7.0, -18, 18);
        }
      }

      // Also ensure non-taker teammates aren't standing directly on top of taker
      if (p.team === team && p.role !== 'GK') {
        const dx = p.position.x - this.restartPosition.x;
        const dz = p.position.z - this.restartPosition.z;
        const dist = Math.hypot(dx, dz);
        if (dist < 4.5) {
          p.position.x = clamp(
            this.restartPosition.x + faceX * 6.5 + (p.slotIndex - 2) * 2.5,
            -28,
            28
          );
          p.position.z = clamp(this.restartPosition.z + faceZ * 6.5, -17.5, 17.5);
        }
      }
    }

    if (team === 'home') {
      this.setControlledPlayer(taker.id);
      this.aiState.restartTakerId = null;
      this.aiState.restartAutoPassTimer = 0;
    } else {
      // AI automatically passes ball back into play after 0.35s so play NEVER stalls!
      this.aiState.restartTakerId = taker.id;
      this.aiState.restartAutoPassTimer = 0.35;
      this.switchToBestHomePlayer(false);
    }
  }

  private buildPlayers(): void {
    this.players = [];
    for (let i = 0; i < 5; i++) {
      const homeProfile = this.homeSquad[i] ?? this.homeSquad[0];
      this.players.push(createSimPlayer(homeProfile, 'home', i));
    }
    for (let i = 0; i < 5; i++) {
      const awayProfile = this.awaySquad[i] ?? this.awaySquad[0];
      this.players.push(createSimPlayer(awayProfile, 'away', i));
    }
    this.setControlledPlayer('home_4');
  }

  private setupKickoffPositions(kickoffTeam: TeamSide): void {
    this.clearAllPossession();
    resetBall(this.ball, 0, BALL.RADIUS, 0);
    this.aiState.restartTakerId = null;
    this.aiState.restartAutoPassTimer = 0;
    this.userChargingPass = false;
    this.userChargingShot = false;

    for (let i = 0; i < this.players.length; i++) {
      const p = this.players[i];
      const base = KICKOFF_POSITIONS_HOME[p.slotIndex] ?? KICKOFF_POSITIONS_HOME[2];
      const sign = p.team === 'home' ? 1 : -1;

      let x = base.x * sign;
      let z = base.z * sign;

      // Defending team stands outside the center circle!
      if (p.team !== kickoffTeam && p.slotIndex === 4) {
        x = -6.5 * sign;
        z = 2.0 * sign;
      } else if (p.team !== kickoffTeam && p.slotIndex === 3) {
        x = -6.2 * sign;
        z = -7.5 * sign;
      }

      p.position.x = x;
      p.position.y = 0;
      p.position.z = z;
      p.velocity.x = 0;
      p.velocity.y = 0;
      p.velocity.z = 0;
      p.speed = 0;
      p.facing = p.team === 'home' ? Math.PI * 0.5 : -Math.PI * 0.5;
      p.hasBall = false;
      p.shotCharge = 0;
      p.passCharge = 0;
      p.actionTimer = 0;
      p.actionDuration = 0;
      p.tackleCooldown = 0;
      p.kickCooldown = 0;
      p.diveDirection = 0;
      p.turnLean = 0;
      p.actionState = p.role === 'GK' ? 'gk_ready' : 'idle';
      p.stamina = Math.min(1, p.stamina + 0.35);
    }

    this.setControlledPlayer('home_4');
  }

  private clearAllPossession(): void {
    this.ball.ownerId = null;
    this.ball.passTargetId = null;
    for (let i = 0; i < this.players.length; i++) {
      this.players[i].hasBall = false;
      this.players[i].shotCharge = 0;
      this.players[i].passCharge = 0;
    }
  }

  private setControlledPlayer(playerId: string): void {
    this.controlledPlayerId = playerId;
    for (let i = 0; i < this.players.length; i++) {
      const p = this.players[i];
      const isTarget = p.id === playerId;
      if (p.isControlled && !isTarget) {
        p.shotCharge = 0;
        p.passCharge = 0;
        if (p.actionState === 'shoot_charge') {
          p.actionState = 'idle';
        }
      }
      p.isControlled = isTarget;
    }
    this.userChargingPass = false;
    this.userChargingShot = false;
  }

  private findPlayerById(id: string): SimPlayerState | null {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].id === id) return this.players[i];
    }
    return null;
  }

  private getControlledPlayer(): SimPlayerState | null {
    return this.findPlayerById(this.controlledPlayerId) ?? this.players[4] ?? null;
  }
}
