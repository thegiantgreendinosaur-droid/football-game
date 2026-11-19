# PITCH APEX — 3D Football

A responsive, browser-based 3D 5v5 football game built with **Three.js**, **TypeScript**, and **Vite**, featuring 18 recognizable real-world footballers, original metallic player cards with live-rendered 3D character portraits, custom 60Hz football physics, procedural skeletal animations, intelligent teammate/opponent AI with diving goalkeepers, and a broadcast-inspired camera and HUD.

## Quick Start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in a modern desktop browser.

### Production Build

```bash
npm run build
npm run preview
```

## Controls

| Key | Action |
|---|---|
| `WASD` / `Arrow Keys` | Move footballer (camera-relative) |
| `Shift` | Sprint |
| `Space` | Pass (tap for ground pass, hold for driven through-ball) |
| `J` | Shoot (hold to charge power, release to strike) |
| `E` | Tackle / challenge |
| `Q` | Switch controlled player |
| `C` | Cycle camera preset (`Broadcast`, `Wide`, `Dynamic Close`) |
| `M` | Toggle audio mute |
| `Esc` | Pause / resume match |

## Key Systems & Architecture

- **Simulation (`src/simulation/`)** — Fixed 60Hz deterministic football engine:
  - [`ballPhysics.ts`](src/simulation/ballPhysics.ts): Gravity, turf rolling friction, air drag, Magnus spin curve, sub-stepped goalpost/crossbar collisions, deformable goal net containment, goal-line detection, and out-of-bounds rules.
  - [`playerPhysics.ts`](src/simulation/playerPhysics.ts): Stat-driven acceleration/sprint/turn speed, soft-tether dribbling, directional lead passing, corner-steered curved shooting, shoulder collisions, and lunge tackling.
  - [`aiController.ts`](src/simulation/aiController.ts): Role-aware pressing without clustering, passing triangles, off-ball support runs, tracking back, and angle-bisecting diving goalkeepers.
  - [`matchEngine.ts`](src/simulation/matchEngine.ts): Complete match lifecycle (kickoff, 90:00 match clock, half-time, goal celebrations, throw-ins/corners/goal kicks, full-time summary) with input pre-buffering.
- **3D Rendering (`src/rendering/`)**:
  - [`characterBuilder.ts`](src/rendering/characterBuilder.ts) & [`characterAnimator.ts`](src/rendering/characterAnimator.ts): Articulated stylized 3D footballers scaled by real height and build, 10 distinct hairstyles, 5 facial hair styles, canvas-rendered numbered kits, and damped procedural animations (run, sprint, dribble, pass, shoot windup/strike, tackle, GK dive, celebrate).
  - [`portraitRenderer.ts`](src/rendering/portraitRenderer.ts): Offscreen studio-lit 3D bust renderer so player cards match each footballer's 3D on-pitch appearance.
  - [`pitchBuilder.ts`](src/rendering/pitchBuilder.ts), [`ballRenderer.ts`](src/rendering/ballRenderer.ts), [`cameraController.ts`](src/rendering/cameraController.ts), [`effects.ts`](src/rendering/effects.ts): Mowed grass pitch with accurate markings, tubular 3D goals with physically rippling nets, paneled spinning match ball with shot trails, multi-preset broadcast camera, and turf/confetti effects.
- **UI & Audio (`src/ui/`, `src/audio/`)**:
  - [`cardRenderer.ts`](src/ui/cardRenderer.ts) & [`squadSelect.ts`](src/ui/squadSelect.ts): Collectible metallic player cards, squad presets, kit selection, and 5v5 starting lineup builder.
  - [`hud.ts`](src/ui/hud.ts): Broadcast scoreboard, match timer, stamina & shot-power meter, goal banners, pause menu, and full-time match stats.
  - [`soundEngine.ts`](src/audio/soundEngine.ts): Zero-dependency Web Audio API procedural sound effects (kicks, metallic post clangs, net ripples, referee whistle, saves, and crowd cheer).

*Note: Player ratings are original game-specific balancing estimates created for gameplay.*
