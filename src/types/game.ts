export type TeamSide = 'home' | 'away';

export type PositionGroup = 'GK' | 'DEF' | 'MID' | 'FWD';

export type DetailedPosition = 'GK' | 'CB' | 'RB' | 'LB' | 'CDM' | 'CM' | 'CAM' | 'LW' | 'RW' | 'ST';

export type HairStyle =
  | 'ponytail_long'
  | 'topknot_bun'
  | 'curly_voluminous'
  | 'curly_highlighted'
  | 'buzz'
  | 'high_fade'
  | 'short_twists'
  | 'slick_undercut'
  | 'classic_part'
  | 'swept_full';

export type FacialHair = 'none' | 'stubble' | 'short_beard' | 'full_beard' | 'goatee';

export interface PlayerStats {
  pace: number;       // 1-99: top speed & sprint acceleration
  shooting: number;   // 1-99: shot velocity, accuracy, finesse
  passing: number;    // 1-99: pass precision, speed, curve
  dribbling: number;  // 1-99: close control, turn sharpness, knock-on touch
  defending: number;  // 1-99: tackle reach, interception radius, standing challenge
  physical: number;   // 1-99: shield strength, stamina recovery, shoulder challenge
}

export interface PlayerAppearance {
  heightCm: number;        // e.g. 170 (Messi) to 200 (Courtois)
  build: 'slim' | 'athletic' | 'stocky' | 'towering';
  skinTone: string;        // hex color
  hairStyle: HairStyle;
  hairColor: string;       // primary hair hex
  hairHighlight?: string;  // secondary highlight hex (e.g. Yamal blonde tips)
  facialHair: FacialHair;
  facialHairColor?: string;
  bootColor: string;       // distinct boot color on pitch
  bootAccent: string;
  headShape: 'oval' | 'angular' | 'broad' | 'compact';
  browThickness: number;   // 0.8 - 1.3
  sleeveStyle: 'short' | 'long';
  sockHeight: 'normal' | 'high';
  strideStyle: 'agile' | 'upright' | 'powerful' | 'gliding';
}

export interface FootballerProfile {
  id: string;
  name: string;            // Full real name: "Lionel Messi"
  shortName: string;       // Pitch/HUD name: "MESSI"
  number: number;          // Iconic jersey number
  nationality: string;     // Full country name
  countryCode: string;     // 3-letter code: ARG, POR, FRA...
  flagColors: [string, string, string]; // 3-band flag colors for crisp SVG rendering
  flagOrientation: 'horizontal' | 'vertical' | 'cross' | 'brazil';
  position: DetailedPosition;
  positionGroup: PositionGroup;
  overall: number;         // Game-specific balancing rating (86-93)
  preferredFoot: 'left' | 'right';
  stats: PlayerStats;
  appearance: PlayerAppearance;
  cardTier: 'gold_icon' | 'gold_rare' | 'platinum_elite';
}

export interface KitTheme {
  id: string;
  name: string;
  shortName: string;       // 3-4 letter scoreboard code e.g. "HOM", "ROY", "CRM"
  primary: string;         // jersey primary color
  secondary: string;       // jersey stripes/trim/accent
  shorts: string;
  socks: string;
  numberColor: string;
  gkPrimary: string;
  gkSecondary: string;
  pattern: 'solid' | 'stripes' | 'sash' | 'shoulders';
}

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export type PlayerActionState =
  | 'idle'
  | 'jog'
  | 'run'
  | 'sprint'
  | 'dribble'
  | 'pass'
  | 'shoot_charge'
  | 'shoot_release'
  | 'tackle'
  | 'stunned'
  | 'gk_ready'
  | 'gk_dive_left'
  | 'gk_dive_right'
  | 'celebrate';

export interface SimPlayerState {
  id: string;              // unique match instance id (e.g. "home_0")
  profile: FootballerProfile;
  team: TeamSide;
  slotIndex: number;       // 0 = GK, 1 = DEF, 2 = MID, 3 = FWD-L, 4 = FWD-R
  role: PositionGroup;
  position: Vec3;
  velocity: Vec3;
  facing: number;          // radians around Y axis (0 = +Z, PI/2 = +X)
  speed: number;
  maxSpeed: number;
  stamina: number;         // 0..1
  hasBall: boolean;
  actionState: PlayerActionState;
  actionTimer: number;     // remaining duration for kick/tackle/dive/stun
  actionDuration: number;  // total duration of current timed action
  kickLeg: 'left' | 'right';
  shotCharge: number;      // 0..1 while charging shot
  passCharge: number;      // 0..1 while charging pass
  animPhase: number;       // continuous stride cycle radians
  turnLean: number;        // -1..1 lateral lean into turns
  isControlled: boolean;
  tackleCooldown: number;
  kickCooldown: number;
  diveDirection: number;   // -1 left, +1 right for GK dive
  homeAnchor: Vec3;        // base tactical formation position
  aiTarget: Vec3;          // current AI steering target
}

export interface SimBallState {
  position: Vec3;
  velocity: Vec3;
  angularVelocity: Vec3;   // rad/s for visual roll & Magnus curve
  spin: Vec3;              // Magnus spin vector
  radius: number;
  ownerId: string | null;
  lastTouchPlayerId: string | null;
  lastTouchTeam: TeamSide | null;
  lastKickPower: number;   // 0..1 for visual trail & camera shake
  isInAir: boolean;
  passTargetId: string | null;
  pickupLockTimer: number; // prevents immediate re-grab by kicker
  lastKickerId: string | null;
}

export type MatchPhase =
  | 'squad_select'
  | 'kickoff_ready'
  | 'playing'
  | 'goal_celebration'
  | 'out_of_bounds'
  | 'halftime'
  | 'fulltime'
  | 'paused';

export interface GoalEvent {
  scorerId: string;
  scorerName: string;
  scorerShortName: string;
  scorerNumber: number;
  team: TeamSide;
  minute: number;
  shotSpeedKmh: number;
}

export interface MatchStats {
  homeShots: number;
  awayShots: number;
  homeShotsOnTarget: number;
  awayShotsOnTarget: number;
  homePasses: number;
  awayPasses: number;
  homeTackles: number;
  awayTackles: number;
  homePossessionTicks: number;
  awayPossessionTicks: number;
}

export type SimAudioEventType =
  | 'kick_pass'
  | 'kick_shot'
  | 'post_hit'
  | 'net_ripple'
  | 'goal_cheer'
  | 'whistle_short'
  | 'whistle_long'
  | 'tackle'
  | 'save'
  | 'bounce';

export interface SimEvent {
  type: SimAudioEventType;
  intensity: number;       // 0..1
  position?: Vec3;
  goalSide?: TeamSide;     // which goal net rippled ('home' = -X goal, 'away' = +X goal)
  goalEvent?: GoalEvent;
}

export interface ControlInput {
  moveX: number;           // -1..1 screen right/left
  moveZ: number;           // -1..1 screen down/up (W = -1, S = +1)
  sprint: boolean;
  passHeld: boolean;
  passJustPressed: boolean;
  passJustReleased: boolean;
  shootHeld: boolean;
  shootJustPressed: boolean;
  shootJustReleased: boolean;
  tackleJustPressed: boolean;
  switchJustPressed: boolean;
}

export type CameraPreset = 'broadcast' | 'wide' | 'dynamic_close';

export interface MatchSnapshot {
  phase: MatchPhase;
  previousPhase: MatchPhase;
  homeScore: number;
  awayScore: number;
  matchSeconds: number;    // 0 .. 5400 (displayed as 00:00 .. 90:00)
  half: 1 | 2;
  phaseTimer: number;
  kickoffTeam: TeamSide;
  restartType: 'kickoff' | 'throw_in' | 'goal_kick' | 'corner';
  restartTeam: TeamSide;
  restartPosition: Vec3;
  players: SimPlayerState[];
  ball: SimBallState;
  controlledPlayerId: string;
  goals: GoalEvent[];
  latestGoal: GoalEvent | null;
  stats: MatchStats;
  homeKit: KitTheme;
  awayKit: KitTheme;
  bannerText: string | null;
}

export interface SquadSelectionState {
  homeSquadIds: string[];  // 5 footballer IDs: [GK, DEF, MID, FWD1, FWD2]
  homeKitId: string;
}
