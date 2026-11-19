import * as THREE from 'three';
import {
  KIT_THEMES,
  MATCH,
  pickContrastingAwayKit,
} from '../config/constants';
import {
  DEFAULT_HOME_SQUAD_IDS,
  FOOTBALLERS,
  buildOpponentSquad,
  getFootballerById,
} from '../data/players';
import { SoundEngine } from '../audio/soundEngine';
import { updateCharacterAnimation } from '../rendering/characterAnimator';
import {
  type CharacterRig,
  createFootballerRig,
  disposeCharacterRig,
} from '../rendering/characterBuilder';
import { type BallVisuals, createBallVisuals } from '../rendering/ballRenderer';
import { BroadcastCameraController } from '../rendering/cameraController';
import { PitchEffectsManager } from '../rendering/effects';
import { type PitchSceneObjects, buildPitchEnvironment } from '../rendering/pitchBuilder';
import { renderPlayerPortraits } from '../rendering/portraitRenderer';
import { MatchEngine } from '../simulation/matchEngine';
import type {
  CameraPreset,
  FootballerProfile,
  KitTheme,
  MatchSnapshot,
  SimEvent,
  SquadSelectionState,
} from '../types/game';
import { MatchHUD } from '../ui/hud';
import { SquadSelectUI } from '../ui/squadSelect';
import { InputManager } from './inputManager';

declare global {
  interface Window {
    __PITCH_APEX__?: {
      getSnapshot: () => MatchSnapshot;
      cycleCamera: () => CameraPreset;
      getPlayerRigCount: () => number;
      getPortraitsLoaded: () => number;
    };
  }
}

export class GameApp {
  private canvasContainer: HTMLElement;
  private uiRoot: HTMLElement;

  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private cameraController: BroadcastCameraController;

  private pitch: PitchSceneObjects;
  private ballVisuals: BallVisuals;
  private effects: PitchEffectsManager;
  private soundEngine: SoundEngine;
  private inputManager: InputManager;

  private matchEngine: MatchEngine;
  private squadSelectUI: SquadSelectUI;
  private hud: MatchHUD;

  private playerRigs = new Map<string, CharacterRig>();
  private portraits: Record<string, string> = {};
  private currentSquadState: SquadSelectionState;

  private rafId: number | null = null;
  private lastFrameTime = 0;
  private accumulator = 0;
  private elapsedTime = 0;

  constructor(canvasContainer: HTMLElement, uiRoot: HTMLElement) {
    this.canvasContainer = canvasContainer;
    this.uiRoot = uiRoot;

    // 1. Initialize WebGL Renderer with crisp shadows and ACES tone mapping
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setSize(
      this.canvasContainer.clientWidth || window.innerWidth,
      this.canvasContainer.clientHeight || window.innerHeight
    );
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.06;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.canvasContainer.appendChild(this.renderer.domElement);

    // 2. Scene & Broadcast Camera
    this.scene = new THREE.Scene();
    const aspect =
      (this.canvasContainer.clientWidth || window.innerWidth) /
      Math.max(1, this.canvasContainer.clientHeight || window.innerHeight);
    this.camera = new THREE.PerspectiveCamera(42, aspect, 0.4, 260);
    this.cameraController = new BroadcastCameraController(this.camera);

    // 3. Build 3D Pitch, Goals, Ball & Pitch Effects
    this.pitch = buildPitchEnvironment(this.scene);
    this.ballVisuals = createBallVisuals(this.scene);
    this.effects = new PitchEffectsManager(this.scene);

    // 4. Sound & Input
    this.soundEngine = new SoundEngine();
    this.inputManager = new InputManager({
      onTogglePause: () => this.handleTogglePause(),
      onCycleCamera: () => this.handleCycleCamera(),
      onToggleMute: () => {
        this.soundEngine.toggleMute();
      },
      onAnyInteraction: () => {
        this.soundEngine.unlock();
      },
    });

    // 5. Default Squad State & Match Engine
    this.currentSquadState = {
      homeSquadIds: [...DEFAULT_HOME_SQUAD_IDS],
      homeKitId: KIT_THEMES[0].id,
    };

    const { homeSquad, awaySquad, homeKit, awayKit } = this.resolveTeams(this.currentSquadState);
    this.matchEngine = new MatchEngine(homeSquad, awaySquad, homeKit, awayKit);
    this.rebuildPlayerRigs(this.matchEngine.getSnapshot());
    this.cameraController.snapTo(this.matchEngine.getSnapshot());

    // 6. Render 3D Character Portraits for Player Cards
    this.portraits = renderPlayerPortraits(FOOTBALLERS, homeKit);

    // 7. Build UI Layers (Squad Selection + In-Match HUD)
    this.squadSelectUI = new SquadSelectUI(
      this.uiRoot,
      this.portraits,
      this.currentSquadState,
      {
        onStartMatch: (selection) => this.startNewMatch(selection),
      }
    );

    this.hud = new MatchHUD(this.uiRoot, {
      onResume: () => this.handleResume(),
      onRestart: () => this.handleRestartMatch(),
      onChangeSquad: () => this.returnToSquadSelect(),
      onToggleMute: () => this.soundEngine.toggleMute(),
      onCycleCamera: () => this.handleCycleCamera(),
    });

    this.hud.hide();
    this.squadSelectUI.show();
    this.inputManager.setGameplayEnabled(false);

    // 8. Expose lightweight inspection handle for QA / verification
    window.__PITCH_APEX__ = {
      getSnapshot: () => this.matchEngine.getSnapshot(),
      cycleCamera: () => this.handleCycleCamera(),
      getPlayerRigCount: () => this.playerRigs.size,
      getPortraitsLoaded: () =>
        Object.values(this.portraits).filter((url) => url.length > 0).length,
    };

    // 9. Resize listener & main loop
    window.addEventListener('resize', this.handleResize);
    this.lastFrameTime = performance.now();
    this.loop(this.lastFrameTime);
  }

  private resolveTeams(state: SquadSelectionState): {
    homeSquad: FootballerProfile[];
    awaySquad: FootballerProfile[];
    homeKit: KitTheme;
    awayKit: KitTheme;
  } {
    const homeSquad = state.homeSquadIds.map((id) => getFootballerById(id));
    const awaySquad = buildOpponentSquad(state.homeSquadIds);
    const homeKit =
      KIT_THEMES.find((k) => k.id === state.homeKitId) ?? KIT_THEMES[0];
    const awayKit = pickContrastingAwayKit(homeKit.id);
    return { homeSquad, awaySquad, homeKit, awayKit };
  }

  private rebuildPlayerRigs(snapshot: MatchSnapshot): void {
    for (const rig of this.playerRigs.values()) {
      this.scene.remove(rig.root);
      disposeCharacterRig(rig);
    }
    this.playerRigs.clear();

    for (const player of snapshot.players) {
      const kit = player.team === 'home' ? snapshot.homeKit : snapshot.awayKit;
      const isGk = player.role === 'GK';
      const rig = createFootballerRig(player.profile, kit, isGk);
      rig.root.position.set(player.position.x, player.position.y, player.position.z);
      rig.root.rotation.y = player.facing;
      this.scene.add(rig.root);
      this.playerRigs.set(player.id, rig);
    }
  }

  private startNewMatch(selection: SquadSelectionState): void {
    this.soundEngine.unlock();
    const kitChanged = selection.homeKitId !== this.currentSquadState.homeKitId;
    this.currentSquadState = {
      homeSquadIds: [...selection.homeSquadIds],
      homeKitId: selection.homeKitId,
    };

    const { homeSquad, awaySquad, homeKit, awayKit } = this.resolveTeams(this.currentSquadState);

    if (kitChanged) {
      this.portraits = renderPlayerPortraits(FOOTBALLERS, homeKit);
      this.squadSelectUI.updatePortraits(this.portraits);
    }

    this.matchEngine.resetMatch(homeSquad, awaySquad, homeKit, awayKit);
    this.matchEngine.startMatch();

    const snapshot = this.matchEngine.getSnapshot();
    this.rebuildPlayerRigs(snapshot);
    this.cameraController.snapTo(snapshot);

    this.squadSelectUI.hide();
    this.hud.show();
    this.hud.update(snapshot, this.cameraController.getPreset());
    this.inputManager.clearState();
    this.inputManager.setGameplayEnabled(true);
    this.accumulator = 0;

    // Kickoff whistle cue
    this.soundEngine.playEvent({ type: 'whistle_short', intensity: 0.9 });
  }

  private handleRestartMatch(): void {
    this.startNewMatch(this.currentSquadState);
  }

  private returnToSquadSelect(): void {
    this.inputManager.setGameplayEnabled(false);
    const { homeSquad, awaySquad, homeKit, awayKit } = this.resolveTeams(this.currentSquadState);
    this.matchEngine.resetMatch(homeSquad, awaySquad, homeKit, awayKit);
    const snapshot = this.matchEngine.getSnapshot();
    this.rebuildPlayerRigs(snapshot);
    this.cameraController.snapTo(snapshot);
    this.hud.hide();
    this.squadSelectUI.show();
  }

  private handleTogglePause(): void {
    const snap = this.matchEngine.getSnapshot();
    if (snap.phase === 'squad_select' || snap.phase === 'fulltime') return;

    if (snap.phase === 'paused') {
      this.handleResume();
    } else {
      this.matchEngine.setPaused(true);
      this.inputManager.setGameplayEnabled(false);
      this.hud.update(this.matchEngine.getSnapshot(), this.cameraController.getPreset());
    }
  }

  private handleResume(): void {
    this.matchEngine.setPaused(false);
    this.inputManager.clearState();
    this.inputManager.setGameplayEnabled(true);
    this.hud.update(this.matchEngine.getSnapshot(), this.cameraController.getPreset());
  }

  private handleCycleCamera(): CameraPreset {
    const next = this.cameraController.cyclePreset();
    this.hud.update(this.matchEngine.getSnapshot(), next);
    return next;
  }

  private processSimEvents(events: SimEvent[]): void {
    for (const ev of events) {
      this.soundEngine.playEvent(ev);

      if (ev.type === 'net_ripple' && ev.goalSide && ev.position) {
        this.pitch.triggerNetRipple(ev.goalSide, ev.position, Math.max(0.4, ev.intensity));
      }

      if ((ev.type === 'kick_pass' || ev.type === 'kick_shot') && ev.position) {
        this.effects.spawnKickBurst(ev.position, ev.intensity, ev.type === 'kick_shot');
        if (ev.type === 'kick_shot' && ev.intensity > 0.5) {
          this.cameraController.addShake(ev.intensity * 0.42);
        }
      }

      if (ev.type === 'post_hit') {
        this.cameraController.addShake(Math.max(0.35, ev.intensity * 0.65));
      }

      if (ev.type === 'goal_cheer' && ev.goalEvent) {
        // Home team scores into Away goal (+X = 'away' side), Away team scores into Home goal (-X = 'home' side)
        const targetGoalSide = ev.goalEvent.team === 'home' ? 'away' : 'home';
        this.effects.spawnGoalCelebrationBurst(targetGoalSide);
        this.cameraController.addShake(0.35);
      }
    }
  }

  private loop = (now: number): void => {
    this.rafId = requestAnimationFrame(this.loop);

    const frameDt = Math.min((now - this.lastFrameTime) / 1000, 0.05);
    this.lastFrameTime = now;
    this.elapsedTime += frameDt;

    const preSnap = this.matchEngine.getSnapshot();

    // Fixed-timestep simulation ticks during active match phases
    if (preSnap.phase !== 'squad_select' && preSnap.phase !== 'paused') {
      this.accumulator += frameDt;
      const maxSteps = 4;
      let steps = 0;

      while (this.accumulator >= MATCH.FIXED_DT && steps < maxSteps) {
        const input = this.inputManager.consumeInput();
        const basis = this.cameraController.getHorizontalBasis();
        const events = this.matchEngine.step(MATCH.FIXED_DT, input, basis);
        if (events.length > 0) {
          this.processSimEvents(events);
        }
        this.accumulator -= MATCH.FIXED_DT;
        steps++;
      }
    }

    const snapshot = this.matchEngine.getSnapshot();

    // Update 3D character animations
    for (const player of snapshot.players) {
      const rig = this.playerRigs.get(player.id);
      if (rig) {
        updateCharacterAnimation(rig, player, frameDt, this.elapsedTime);
      }
    }

    // Update 3D ball & pitch environment (nets, flags)
    this.ballVisuals.update(snapshot.ball, frameDt);
    this.pitch.update(frameDt, this.elapsedTime);

    // Update pitch indicators & particles
    if (snapshot.phase !== 'squad_select') {
      const controlled =
        snapshot.players.find((p) => p.id === snapshot.controlledPlayerId) ?? null;
      const passTarget = this.matchEngine.getPassTargetPreview();
      this.effects.updateControlledIndicator(
        controlled,
        passTarget,
        snapshot.ball,
        this.elapsedTime
      );
      this.cameraController.update(snapshot, frameDt);
      this.hud.update(snapshot, this.cameraController.getPreset());
    } else {
      // Gentle cinematic showcase orbit over the sunlit pitch behind squad select
      this.effects.updateControlledIndicator(null, null, snapshot.ball, this.elapsedTime);
      const t = this.elapsedTime * 0.14;
      this.camera.position.set(
        Math.sin(t) * 14,
        16.5 + Math.sin(t * 0.7) * 1.4,
        25.5 + Math.cos(t) * 3.0
      );
      this.camera.lookAt(0, 0.5, -1.5);
    }

    this.effects.update(frameDt);
    this.renderer.render(this.scene, this.camera);
  };

  private handleResize = (): void => {
    const w = this.canvasContainer.clientWidth || window.innerWidth;
    const h = Math.max(1, this.canvasContainer.clientHeight || window.innerHeight);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  };

  public destroy(): void {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
    }
    window.removeEventListener('resize', this.handleResize);
    this.inputManager.destroy();
    this.squadSelectUI.destroy();
    this.hud.destroy();
    for (const rig of this.playerRigs.values()) {
      this.scene.remove(rig.root);
      disposeCharacterRig(rig);
    }
    this.playerRigs.clear();
    this.renderer.dispose();
  }
}
