import type { KitTheme, Vec3 } from '../types/game';

/**
 * Pitch dimensions (meters) tuned for crisp, high-tempo 5v5 football.
 * Architected via constants so larger formats (7v7, 11v11) only adjust these values and formations.
 */
export const PITCH = {
  LENGTH: 64,          // X: -32 (Home goal) to +32 (Away goal)
  WIDTH: 40,           // Z: -20 (Far touchline) to +20 (Near touchline)
  HALF_LENGTH: 32,
  HALF_WIDTH: 20,
  GOAL_WIDTH: 6.2,     // Z: -3.1 to +3.1
  GOAL_HALF_WIDTH: 3.1,
  GOAL_HEIGHT: 2.38,   // Y: 0 to 2.38
  GOAL_DEPTH: 2.1,
  POST_RADIUS: 0.065,
  PENALTY_AREA_LENGTH: 10.5,
  PENALTY_AREA_WIDTH: 19.0,
  GOAL_AREA_LENGTH: 4.0,
  GOAL_AREA_WIDTH: 10.0,
  PENALTY_SPOT_DIST: 8.0,
  CENTER_CIRCLE_RADIUS: 5.5,
  CORNER_ARC_RADIUS: 1.0,
} as const;

export const BALL = {
  RADIUS: 0.22,
  GRAVITY: 21.5,            // Slightly punchier than 9.81 so arcs feel crisp at arcade-sim scale
  GROUND_FRICTION: 1.48,    // Exponential-ish turf rolling deceleration
  AIR_DRAG: 0.24,           // Aerodynamic drag coefficient
  RESTITUTION_GROUND: 0.56, // Bounce on grass
  RESTITUTION_POST: 0.72,   // Crisp metallic rebound off posts/crossbar
  RESTITUTION_NET: 0.14,    // Energy absorbed by goal net
  MAGNUS_COEFF: 0.16,       // Curve/curl from ball spin
  MAX_SPEED: 38.0,          // m/s (~136 km/h thunderbolt)
} as const;

export const MATCH = {
  FIXED_DT: 1 / 60,
  REAL_DURATION_SECONDS: 180,  // 3 minutes real-time = full 90:00 match clock
  MATCH_CLOCK_SCALE: 30,       // 1 real second = 30 match seconds (00:00 -> 90:00 in 180s)
  HALFTIME_MATCH_SECONDS: 2700, // 45:00
  FULLTIME_MATCH_SECONDS: 5400, // 90:00
  GOAL_CELEBRATION_SECONDS: 3.0,
  HALFTIME_PAUSE_SECONDS: 2.2,
  KICKOFF_READY_SECONDS: 0.65,
  OUT_OF_BOUNDS_SECONDS: 0.75,
} as const;

/**
 * 5v5 Formation Anchors (Home team attacking +X; Away mirrors across X = 0).
 * Slot 0: GK, Slot 1: DEF, Slot 2: MID, Slot 3: FWD-Left, Slot 4: FWD-Right
 */
export const FORMATION_5V5_HOME: readonly Vec3[] = [
  { x: -30.2, y: 0, z: 0 },      // 0: Goalkeeper
  { x: -16.5, y: 0, z: 0 },      // 1: Defender / Sweeper
  { x: -5.5, y: 0, z: 1.5 },     // 2: Central Midfielder / Playmaker
  { x: 9.5, y: 0, z: -8.5 },     // 3: Left Attacker / Winger
  { x: 11.5, y: 0, z: 7.5 },     // 4: Right Attacker / Striker
] as const;

export const KICKOFF_POSITIONS_HOME: readonly Vec3[] = [
  { x: -30.2, y: 0, z: 0 },      // GK
  { x: -17.0, y: 0, z: 0 },      // DEF
  { x: -8.0, y: 0, z: 0 },       // MID
  { x: -2.0, y: 0, z: -7.5 },    // FWD-L
  { x: -0.7, y: 0, z: 0.3 },     // FWD-R (kickoff taker when home kicks off)
] as const;

export const KIT_THEMES: readonly KitTheme[] = [
  {
    id: 'royal_navy',
    name: 'Royal Navy',
    shortName: 'HOM',
    primary: '#163876',
    secondary: '#e8c456',
    shorts: '#0f254f',
    socks: '#163876',
    numberColor: '#ffffff',
    gkPrimary: '#f59e0b',
    gkSecondary: '#1f2937',
    pattern: 'shoulders',
  },
  {
    id: 'crimson_united',
    name: 'Crimson Red',
    shortName: 'HOM',
    primary: '#b91c2b',
    secondary: '#f8fafc',
    shorts: '#f1f5f9',
    socks: '#b91c2b',
    numberColor: '#ffffff',
    gkPrimary: '#10b981',
    gkSecondary: '#064e3b',
    pattern: 'solid',
  },
  {
    id: 'ivory_gold',
    name: 'Ivory Gold',
    shortName: 'HOM',
    primary: '#f4f5f7',
    secondary: '#c8a24a',
    shorts: '#f4f5f7',
    socks: '#e5e7eb',
    numberColor: '#1a202c',
    gkPrimary: '#2563eb',
    gkSecondary: '#0f172a',
    pattern: 'sash',
  },
  {
    id: 'emerald_stripes',
    name: 'Emerald Stripes',
    shortName: 'HOM',
    primary: '#0f6b47',
    secondary: '#e2e8f0',
    shorts: '#0a3d29',
    socks: '#0f6b47',
    numberColor: '#ffffff',
    gkPrimary: '#f97316',
    gkSecondary: '#1e293b',
    pattern: 'stripes',
  },
] as const;

export const AWAY_KIT_PRESETS: Record<string, KitTheme> = {
  crimson_away: {
    id: 'crimson_away',
    name: 'Away Crimson',
    shortName: 'AWY',
    primary: '#c62828',
    secondary: '#1e1b18',
    shorts: '#1c1917',
    socks: '#c62828',
    numberColor: '#ffffff',
    gkPrimary: '#06b6d4',
    gkSecondary: '#0f172a',
    pattern: 'stripes',
  },
  ivory_away: {
    id: 'ivory_away',
    name: 'Away White',
    shortName: 'AWY',
    primary: '#f1f5f9',
    secondary: '#0f172a',
    shorts: '#1e293b',
    socks: '#f1f5f9',
    numberColor: '#0f172a',
    gkPrimary: '#a3e635',
    gkSecondary: '#14532d',
    pattern: 'shoulders',
  },
  cobalt_away: {
    id: 'cobalt_away',
    name: 'Away Cobalt',
    shortName: 'AWY',
    primary: '#1d4ed8',
    secondary: '#93c5fd',
    shorts: '#1e3a8a',
    socks: '#1d4ed8',
    numberColor: '#ffffff',
    gkPrimary: '#f43f5e',
    gkSecondary: '#1f2937',
    pattern: 'sash',
  },
};

export function pickContrastingAwayKit(homeKitId: string): KitTheme {
  if (homeKitId === 'crimson_united') return AWAY_KIT_PRESETS.ivory_away;
  if (homeKitId === 'ivory_gold') return AWAY_KIT_PRESETS.cobalt_away;
  return AWAY_KIT_PRESETS.ivory_away;
}
