import type { CameraPreset, GoalEvent, MatchPhase, MatchSnapshot, SimPlayerState } from '../types/game';

interface HudCallbacks {
  onResume: () => void;
  onRestart: () => void;
  onChangeSquad: () => void;
  onToggleMute: () => boolean;
  onCycleCamera: () => CameraPreset;
}

const CAMERA_LABELS: Record<CameraPreset, string> = {
  broadcast: 'CAM: BROADCAST',
  wide: 'CAM: WIDE',
  dynamic_close: 'CAM: DYNAMIC',
};

function formatClock(matchSeconds: number): string {
  const clamped = Math.max(0, Math.min(5400, Math.floor(matchSeconds)));
  const mins = Math.floor(clamped / 60);
  const secs = clamped % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function escapeHtml(text: string): string {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/**
 * Broadcast-grade in-match HUD with diff-checked 60fps DOM updates,
 * event banners, pause overlay, and full-time match summary.
 */
export class MatchHUD {
  private readonly container: HTMLElement;
  private readonly callbacks: HudCallbacks;
  private readonly root: HTMLElement;

  // Scoreboard refs
  private homeSwatchEl!: HTMLElement;
  private awaySwatchEl!: HTMLElement;
  private homeScoreEl!: HTMLElement;
  private awayScoreEl!: HTMLElement;
  private halfBadgeEl!: HTMLElement;
  private clockEl!: HTMLElement;

  // Utility refs
  private cameraBtnEl!: HTMLButtonElement;
  private muteBtnEl!: HTMLButtonElement;

  // Controlled player pill refs
  private playerPillEl!: HTMLElement;
  private playerNumEl!: HTMLElement;
  private playerNameEl!: HTMLElement;
  private playerPosEl!: HTMLElement;
  private staminaFillEl!: HTMLElement;
  private powerRowEl!: HTMLElement;
  private powerFillEl!: HTMLElement;

  // Contextual key hint refs
  private keyHintEl!: HTMLElement;
  private ctxSpaceLabelEl!: HTMLElement;
  private ctxELabelEl!: HTMLElement;

  // Center banner refs
  private bannerEl!: HTMLElement;
  private bannerTagEl!: HTMLElement;
  private bannerTitleEl!: HTMLElement;
  private bannerSubEl!: HTMLElement;

  // Pause modal refs
  private pauseModalEl!: HTMLElement;
  private pauseScoreEl!: HTMLElement;

  // Fulltime modal refs
  private fulltimeModalEl!: HTMLElement;
  private ftHeadlineEl!: HTMLElement;
  private ftHomeSwatchEl!: HTMLElement;
  private ftAwaySwatchEl!: HTMLElement;
  private ftHomeScoreEl!: HTMLElement;
  private ftAwayScoreEl!: HTMLElement;
  private ftHomeGoalsEl!: HTMLElement;
  private ftAwayGoalsEl!: HTMLElement;
  private ftStatsEl!: HTMLElement;

  // Diff cache to prevent unnecessary 60fps DOM writes
  private lastHomeScore = -1;
  private lastAwayScore = -1;
  private lastClockText = '';
  private lastHalfBadge = '';
  private lastHomeKitId = '';
  private lastAwayKitId = '';
  private lastCameraPreset: CameraPreset | null = null;
  private lastControlledId = '';
  private lastStaminaPct = -1;
  private lastStaminaTier = '';
  private lastShotPct = -1;
  private lastHasPossession: boolean | null = null;
  private lastBannerKey = '';
  private lastPhase: MatchPhase | null = null;
  private lastFulltimeKey = '';
  private isMuted = false;

  constructor(container: HTMLElement, callbacks: HudCallbacks) {
    this.container = container;
    this.callbacks = callbacks;

    this.root = document.createElement('div');
    this.root.className = 'match-hud is-hidden';
    this.buildDom();
    this.container.appendChild(this.root);
  }

  public show(): void {
    this.root.classList.remove('is-hidden');
  }

  public hide(): void {
    this.root.classList.add('is-hidden');
  }

  public update(snapshot: MatchSnapshot, cameraPreset: CameraPreset): void {
    this.updateScoreboard(snapshot);
    this.updateCameraButton(cameraPreset);
    this.updateControlledPlayer(snapshot);
    this.updateContextualControls(snapshot);
    this.updateBanner(snapshot);
    this.updateModals(snapshot);
  }

  public destroy(): void {
    this.root.remove();
  }

  private buildDom(): void {
    this.root.innerHTML = `
      <!-- Top-Center Broadcast Scoreboard -->
      <div class="hud-scoreboard-wrap">
        <div class="hud-scoreboard">
          <div class="hud-team hud-team--home">
            <span class="hud-kit-swatch" data-ref="home-swatch"></span>
            <span class="hud-team-name">HOME</span>
          </div>
          <div class="hud-score-cluster" aria-live="polite">
            <span class="hud-score-num" data-ref="home-score">0</span>
            <span class="hud-score-sep">&mdash;</span>
            <span class="hud-score-num" data-ref="away-score">0</span>
          </div>
          <div class="hud-team hud-team--away">
            <span class="hud-team-name">AWAY</span>
            <span class="hud-kit-swatch" data-ref="away-swatch"></span>
          </div>
        </div>
        <div class="hud-clock-pill">
          <span class="hud-half-badge" data-ref="half-badge">1ST</span>
          <span class="hud-clock-time" data-ref="clock">00:00</span>
        </div>
      </div>

      <!-- Top-Right Utility Controls -->
      <div class="hud-utilities">
        <button type="button" class="hud-util-btn" data-ref="btn-camera" tabindex="-1">CAM: BROADCAST</button>
        <button type="button" class="hud-util-btn hud-util-btn--icon" data-ref="btn-mute" tabindex="-1" aria-label="Toggle Audio" title="Mute / Unmute Sound">&#128266;</button>
      </div>

      <!-- Center Broadcast Event Banner -->
      <div class="hud-banner is-hidden" data-ref="banner" aria-live="assertive">
        <div class="hud-banner__tag" data-ref="banner-tag"></div>
        <div class="hud-banner__title" data-ref="banner-title"></div>
        <div class="hud-banner__sub" data-ref="banner-sub"></div>
      </div>

      <!-- Bottom-Left Controlled Player Pill -->
      <div class="hud-player-pill" data-ref="player-pill">
        <div class="hud-player-head">
          <span class="hud-player-num" data-ref="player-num">10</span>
          <div class="hud-player-identity">
            <span class="hud-player-name" data-ref="player-name">LIONEL MESSI</span>
            <span class="hud-player-pos" data-ref="player-pos">RW</span>
          </div>
        </div>
        <div class="hud-meter-row">
          <span class="hud-meter-label">STM</span>
          <div class="hud-meter-track">
            <div class="hud-meter-fill hud-meter-fill--stamina" data-ref="stamina-fill"></div>
          </div>
        </div>
        <div class="hud-meter-row hud-power-row" data-ref="power-row">
          <span class="hud-meter-label">PWR</span>
          <div class="hud-meter-track hud-meter-track--power">
            <div class="hud-meter-fill hud-meter-fill--power" data-ref="power-fill"></div>
          </div>
        </div>
      </div>

      <!-- Bottom-Right Contextual Controls Reminder -->
      <div class="hud-key-hint no-possession" data-ref="key-hint" aria-live="polite">
        <span class="hud-key-item"><b>WASD</b> Move</span>
        <span class="hud-key-div">|</span>
        <span class="hud-key-item"><b>SHIFT</b> Sprint</span>
        <span class="hud-key-div">|</span>
        <span class="hud-key-item hud-key-item--ctx"><b>SPACE</b> <span class="hud-key-action" data-ref="ctx-space-label">TACKLE</span></span>
        <span class="hud-key-div">|</span>
        <span class="hud-key-item hud-key-item--ctx"><b>E</b> <span class="hud-key-action" data-ref="ctx-e-label">SWITCH</span></span>
      </div>

      <!-- Pause Modal -->
      <div class="hud-modal hud-modal--pause is-hidden" data-ref="pause-modal" role="dialog" aria-modal="true" aria-label="Match Paused">
        <div class="hud-modal-card hud-modal-card--pause">
          <div class="hud-modal-eyebrow">PITCH APEX</div>
          <h2 class="hud-modal-title">MATCH PAUSED</h2>
          <div class="hud-pause-score" data-ref="pause-score">HOME 0 &mdash; 0 AWAY</div>

          <div class="hud-modal-actions">
            <button type="button" class="hud-btn hud-btn--primary" data-action="resume">RESUME MATCH <span class="hud-btn-hint">ESC</span></button>
            <button type="button" class="hud-btn hud-btn--secondary" data-action="restart">RESTART MATCH</button>
            <button type="button" class="hud-btn hud-btn--ghost" data-action="change-squad">CHANGE SQUAD</button>
          </div>

          <div class="hud-controls-ref">
            <div class="hud-controls-ref__title">CONTROLS</div>
            <div class="hud-controls-ref__grid">
              <div><kbd>WASD</kbd> / <kbd>Arrows</kbd> Move</div>
              <div><kbd>Shift</kbd> Sprint</div>
              <div><kbd>Space</kbd> Shoot (with ball) / Tackle (without ball)</div>
              <div><kbd>E</kbd> Pass (with ball) / Switch (without ball)</div>
              <div><kbd>C</kbd> Cycle Camera</div>
              <div><kbd>Esc</kbd> Pause / Resume</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Full-Time Match Summary Modal -->
      <div class="hud-modal hud-modal--fulltime is-hidden" data-ref="fulltime-modal" role="dialog" aria-modal="true" aria-label="Full Time Summary">
        <div class="hud-modal-card hud-modal-card--fulltime">
          <div class="hud-modal-eyebrow">FULL TIME</div>
          <h2 class="hud-ft-headline" data-ref="ft-headline">VICTORY</h2>

          <div class="hud-ft-scoreboard">
            <div class="hud-ft-team">
              <span class="hud-kit-swatch hud-kit-swatch--lg" data-ref="ft-home-swatch"></span>
              <span class="hud-ft-team-name">HOME</span>
            </div>
            <div class="hud-ft-score">
              <span data-ref="ft-home-score">0</span>
              <span class="hud-ft-sep">&mdash;</span>
              <span data-ref="ft-away-score">0</span>
            </div>
            <div class="hud-ft-team hud-ft-team--away">
              <span class="hud-ft-team-name">AWAY</span>
              <span class="hud-kit-swatch hud-kit-swatch--lg" data-ref="ft-away-swatch"></span>
            </div>
          </div>

          <div class="hud-ft-goals">
            <div class="hud-ft-goal-col hud-ft-goal-col--home" data-ref="ft-home-goals"></div>
            <div class="hud-ft-goal-divider" aria-hidden="true"></div>
            <div class="hud-ft-goal-col hud-ft-goal-col--away" data-ref="ft-away-goals"></div>
          </div>

          <div class="hud-ft-stats" data-ref="ft-stats"></div>

          <div class="hud-ft-actions">
            <button type="button" id="btn-rematch" class="hud-btn hud-btn--primary">PLAY AGAIN</button>
            <button type="button" id="btn-change-squad" class="hud-btn hud-btn--secondary">CHANGE SQUAD</button>
          </div>
        </div>
      </div>
    `;

    const q = <T extends HTMLElement>(sel: string): T => this.root.querySelector<T>(sel)!;

    this.homeSwatchEl = q('[data-ref="home-swatch"]');
    this.awaySwatchEl = q('[data-ref="away-swatch"]');
    this.homeScoreEl = q('[data-ref="home-score"]');
    this.awayScoreEl = q('[data-ref="away-score"]');
    this.halfBadgeEl = q('[data-ref="half-badge"]');
    this.clockEl = q('[data-ref="clock"]');

    this.cameraBtnEl = q<HTMLButtonElement>('[data-ref="btn-camera"]');
    this.muteBtnEl = q<HTMLButtonElement>('[data-ref="btn-mute"]');

    this.playerPillEl = q('[data-ref="player-pill"]');
    this.playerNumEl = q('[data-ref="player-num"]');
    this.playerNameEl = q('[data-ref="player-name"]');
    this.playerPosEl = q('[data-ref="player-pos"]');
    this.staminaFillEl = q('[data-ref="stamina-fill"]');
    this.powerRowEl = q('[data-ref="power-row"]');
    this.powerFillEl = q('[data-ref="power-fill"]');

    this.keyHintEl = q('[data-ref="key-hint"]');
    this.ctxSpaceLabelEl = q('[data-ref="ctx-space-label"]');
    this.ctxELabelEl = q('[data-ref="ctx-e-label"]');

    this.bannerEl = q('[data-ref="banner"]');
    this.bannerTagEl = q('[data-ref="banner-tag"]');
    this.bannerTitleEl = q('[data-ref="banner-title"]');
    this.bannerSubEl = q('[data-ref="banner-sub"]');

    this.pauseModalEl = q('[data-ref="pause-modal"]');
    this.pauseScoreEl = q('[data-ref="pause-score"]');

    this.fulltimeModalEl = q('[data-ref="fulltime-modal"]');
    this.ftHeadlineEl = q('[data-ref="ft-headline"]');
    this.ftHomeSwatchEl = q('[data-ref="ft-home-swatch"]');
    this.ftAwaySwatchEl = q('[data-ref="ft-away-swatch"]');
    this.ftHomeScoreEl = q('[data-ref="ft-home-score"]');
    this.ftAwayScoreEl = q('[data-ref="ft-away-score"]');
    this.ftHomeGoalsEl = q('[data-ref="ft-home-goals"]');
    this.ftAwayGoalsEl = q('[data-ref="ft-away-goals"]');
    this.ftStatsEl = q('[data-ref="ft-stats"]');

    // Wire utility buttons without stealing keyboard focus
    this.cameraBtnEl.addEventListener('click', () => {
      const nextPreset = this.callbacks.onCycleCamera();
      this.updateCameraButton(nextPreset);
      this.cameraBtnEl.blur();
    });

    this.muteBtnEl.addEventListener('click', () => {
      this.isMuted = this.callbacks.onToggleMute();
      this.syncMuteButton();
      this.muteBtnEl.blur();
    });

    // Pause modal actions
    q('[data-action="resume"]').addEventListener('click', () => this.callbacks.onResume());
    q('[data-action="restart"]').addEventListener('click', () => this.callbacks.onRestart());
    q('[data-action="change-squad"]').addEventListener('click', () => this.callbacks.onChangeSquad());

    // Full-time modal actions
    q('#btn-rematch').addEventListener('click', () => this.callbacks.onRestart());
    q('#btn-change-squad').addEventListener('click', () => this.callbacks.onChangeSquad());
  }

  private syncMuteButton(): void {
    this.muteBtnEl.textContent = this.isMuted ? '\u{1F507}' : '\u{1F50A}';
    this.muteBtnEl.classList.toggle('is-muted', this.isMuted);
    this.muteBtnEl.setAttribute('aria-pressed', String(this.isMuted));
  }

  private updateScoreboard(snapshot: MatchSnapshot): void {
    if (snapshot.homeKit.id !== this.lastHomeKitId) {
      this.lastHomeKitId = snapshot.homeKit.id;
      this.homeSwatchEl.style.background = `linear-gradient(135deg, ${snapshot.homeKit.primary} 62%, ${snapshot.homeKit.secondary} 62%)`;
      this.playerNumEl.style.backgroundColor = snapshot.homeKit.primary;
      this.playerNumEl.style.color = snapshot.homeKit.numberColor;
    }

    if (snapshot.awayKit.id !== this.lastAwayKitId) {
      this.lastAwayKitId = snapshot.awayKit.id;
      this.awaySwatchEl.style.background = `linear-gradient(135deg, ${snapshot.awayKit.primary} 62%, ${snapshot.awayKit.secondary} 62%)`;
    }

    if (snapshot.homeScore !== this.lastHomeScore) {
      this.homeScoreEl.textContent = String(snapshot.homeScore);
      if (this.lastHomeScore !== -1) {
        this.pulseElement(this.homeScoreEl);
      }
      this.lastHomeScore = snapshot.homeScore;
    }

    if (snapshot.awayScore !== this.lastAwayScore) {
      this.awayScoreEl.textContent = String(snapshot.awayScore);
      if (this.lastAwayScore !== -1) {
        this.pulseElement(this.awayScoreEl);
      }
      this.lastAwayScore = snapshot.awayScore;
    }

    const halfLabel =
      snapshot.phase === 'fulltime'
        ? 'FT'
        : snapshot.phase === 'halftime'
          ? 'HT'
          : snapshot.half === 1
            ? '1ST'
            : '2ND';

    if (halfLabel !== this.lastHalfBadge) {
      this.lastHalfBadge = halfLabel;
      this.halfBadgeEl.textContent = halfLabel;
    }

    const clockText = formatClock(snapshot.matchSeconds);
    if (clockText !== this.lastClockText) {
      this.lastClockText = clockText;
      this.clockEl.textContent = clockText;
    }
  }

  private updateCameraButton(preset: CameraPreset): void {
    if (preset === this.lastCameraPreset) return;
    this.lastCameraPreset = preset;
    this.cameraBtnEl.textContent = CAMERA_LABELS[preset];
  }

  private updateControlledPlayer(snapshot: MatchSnapshot): void {
    const controlled: SimPlayerState | undefined = snapshot.players.find(
      (p) => p.id === snapshot.controlledPlayerId
    );
    if (!controlled) {
      this.playerPillEl.classList.add('is-hidden');
      return;
    }
    this.playerPillEl.classList.remove('is-hidden');

    if (controlled.id !== this.lastControlledId) {
      this.lastControlledId = controlled.id;
      this.playerNumEl.textContent = String(controlled.profile.number);
      this.playerNameEl.textContent = controlled.profile.name.toUpperCase();
      this.playerPosEl.textContent = controlled.profile.position;
    }

    const staminaPct = Math.round(Math.max(0, Math.min(1, controlled.stamina)) * 100);
    if (staminaPct !== this.lastStaminaPct) {
      this.lastStaminaPct = staminaPct;
      this.staminaFillEl.style.width = `${staminaPct}%`;

      const tier = staminaPct > 45 ? 'high' : staminaPct > 20 ? 'mid' : 'low';
      if (tier !== this.lastStaminaTier) {
        this.lastStaminaTier = tier;
        this.staminaFillEl.dataset.tier = tier;
      }
    }

    const shotPct = Math.round(Math.max(0, Math.min(1, controlled.shotCharge)) * 100);
    if (shotPct !== this.lastShotPct) {
      this.lastShotPct = shotPct;
      this.powerFillEl.style.width = `${shotPct}%`;
      this.powerRowEl.classList.toggle('is-charging', shotPct > 0);
      const powerZone = shotPct < 45 ? 'low' : shotPct < 78 ? 'mid' : 'high';
      this.powerFillEl.dataset.zone = powerZone;
    }
  }

  private updateContextualControls(snapshot: MatchSnapshot): void {
    const controlled = snapshot.players.find(
      (p) => p.id === snapshot.controlledPlayerId
    );
    const hasPossession = Boolean(
      controlled && controlled.hasBall && snapshot.ball.ownerId === controlled.id
    );

    if (hasPossession === this.lastHasPossession) return;
    this.lastHasPossession = hasPossession;

    this.keyHintEl.classList.toggle('has-possession', hasPossession);
    this.keyHintEl.classList.toggle('no-possession', !hasPossession);
    this.ctxSpaceLabelEl.textContent = hasPossession ? 'SHOOT' : 'TACKLE';
    this.ctxELabelEl.textContent = hasPossession ? 'PASS' : 'SWITCH';
  }

  private updateBanner(snapshot: MatchSnapshot): void {
    let key = 'none';
    let variant: 'goal' | 'event' | 'halftime' = 'event';
    let tag = '';
    let title = '';
    let sub = '';

    if (snapshot.phase === 'paused' || snapshot.phase === 'fulltime' || snapshot.phase === 'squad_select') {
      key = 'none';
    } else if (snapshot.phase === 'goal_celebration' && snapshot.latestGoal) {
      const g: GoalEvent = snapshot.latestGoal;
      variant = 'goal';
      tag = g.team === 'home' ? 'HOME GOAL' : 'AWAY GOAL';
      title = 'GOAL!';
      sub = `#${g.scorerNumber} ${g.scorerName.toUpperCase()}  \u2022  ${g.minute}'  \u2022  ${Math.round(g.shotSpeedKmh)} KM/H`;
      key = `goal:${g.team}:${g.scorerId}:${g.minute}:${snapshot.homeScore}-${snapshot.awayScore}`;
    } else if (snapshot.phase === 'halftime') {
      variant = 'halftime';
      tag = '45:00';
      title = 'HALF TIME';
      sub = `HOME ${snapshot.homeScore} \u2014 ${snapshot.awayScore} AWAY`;
      key = `ht:${snapshot.homeScore}-${snapshot.awayScore}`;
    } else if (snapshot.bannerText) {
      variant = 'event';
      title = snapshot.bannerText.toUpperCase();
      tag = snapshot.restartTeam === 'home' ? 'HOME BALL' : 'AWAY BALL';
      sub = '';
      key = `banner:${title}:${tag}`;
    } else if (snapshot.phase === 'kickoff_ready') {
      variant = 'event';
      tag = snapshot.kickoffTeam === 'home' ? 'HOME KICK OFF' : 'AWAY KICK OFF';
      title = 'KICK OFF';
      sub = snapshot.half === 1 ? 'FIRST HALF' : 'SECOND HALF';
      key = `ko:${snapshot.half}:${snapshot.kickoffTeam}`;
    } else if (snapshot.phase === 'out_of_bounds') {
      variant = 'event';
      tag = snapshot.restartTeam === 'home' ? 'HOME' : 'AWAY';
      title =
        snapshot.restartType === 'corner'
          ? 'CORNER KICK'
          : snapshot.restartType === 'goal_kick'
            ? 'GOAL KICK'
            : 'THROW IN';
      sub = '';
      key = `oob:${title}:${tag}`;
    }

    if (key === this.lastBannerKey) return;
    this.lastBannerKey = key;

    if (key === 'none') {
      this.bannerEl.classList.add('is-hidden');
      return;
    }

    this.bannerEl.className = `hud-banner hud-banner--${variant}`;
    this.bannerTagEl.textContent = tag;
    this.bannerTagEl.classList.toggle('is-empty', tag.length === 0);
    this.bannerTitleEl.textContent = title;
    this.bannerSubEl.textContent = sub;
    this.bannerSubEl.classList.toggle('is-empty', sub.length === 0);

    // Retrigger crisp entrance animation
    void this.bannerEl.offsetWidth;
    this.bannerEl.classList.add('is-visible');
  }

  private updateModals(snapshot: MatchSnapshot): void {
    const phaseChanged = snapshot.phase !== this.lastPhase;
    if (phaseChanged) {
      this.lastPhase = snapshot.phase;
      this.pauseModalEl.classList.toggle('is-hidden', snapshot.phase !== 'paused');
      this.fulltimeModalEl.classList.toggle('is-hidden', snapshot.phase !== 'fulltime');
    }

    if (snapshot.phase === 'paused' && phaseChanged) {
      this.pauseScoreEl.textContent = `HOME ${snapshot.homeScore} \u2014 ${snapshot.awayScore} AWAY  \u2022  ${formatClock(snapshot.matchSeconds)}`;
    }

    if (snapshot.phase === 'fulltime') {
      const ftKey = `${snapshot.homeScore}-${snapshot.awayScore}-${snapshot.goals.length}-${snapshot.stats.homeShots}-${snapshot.stats.awayShots}`;
      if (ftKey !== this.lastFulltimeKey) {
        this.lastFulltimeKey = ftKey;
        this.renderFulltimeSummary(snapshot);
      }
    }
  }

  private renderFulltimeSummary(snapshot: MatchSnapshot): void {
    const { homeScore, awayScore, homeKit, awayKit, goals, stats } = snapshot;

    let headline = 'MATCH DRAWN';
    let tone = 'draw';
    if (homeScore > awayScore) {
      headline = 'VICTORY';
      tone = 'win';
    } else if (homeScore < awayScore) {
      headline = 'DEFEAT';
      tone = 'loss';
    }

    this.ftHeadlineEl.textContent = headline;
    this.ftHeadlineEl.dataset.tone = tone;
    this.ftHomeScoreEl.textContent = String(homeScore);
    this.ftAwayScoreEl.textContent = String(awayScore);

    this.ftHomeSwatchEl.style.background = `linear-gradient(135deg, ${homeKit.primary} 62%, ${homeKit.secondary} 62%)`;
    this.ftAwaySwatchEl.style.background = `linear-gradient(135deg, ${awayKit.primary} 62%, ${awayKit.secondary} 62%)`;

    const homeGoals = goals.filter((g) => g.team === 'home');
    const awayGoals = goals.filter((g) => g.team === 'away');

    const renderGoalList = (list: GoalEvent[], align: 'home' | 'away'): string => {
      if (list.length === 0) {
        return `<div class="hud-ft-goal-empty">&mdash;</div>`;
      }
      return list
        .map((g) => {
          const text = `${escapeHtml(g.scorerShortName)} #${g.scorerNumber}`;
          const meta = `${g.minute}' (${Math.round(g.shotSpeedKmh)} km/h)`;
          return align === 'home'
            ? `<div class="hud-ft-goal-item"><span>${text}</span><span class="hud-ft-goal-min">${meta}</span></div>`
            : `<div class="hud-ft-goal-item"><span class="hud-ft-goal-min">${meta}</span><span>${text}</span></div>`;
        })
        .join('');
    };

    this.ftHomeGoalsEl.innerHTML = renderGoalList(homeGoals, 'home');
    this.ftAwayGoalsEl.innerHTML = renderGoalList(awayGoals, 'away');

    const totalTicks = stats.homePossessionTicks + stats.awayPossessionTicks;
    const homePoss = totalTicks > 0 ? Math.round((stats.homePossessionTicks / totalTicks) * 100) : 50;
    const awayPoss = 100 - homePoss;

    const rows: readonly { label: string; homeVal: string; awayVal: string; homeNum: number; awayNum: number }[] = [
      { label: 'POSSESSION', homeVal: `${homePoss}%`, awayVal: `${awayPoss}%`, homeNum: homePoss, awayNum: awayPoss },
      { label: 'SHOTS', homeVal: String(stats.homeShots), awayVal: String(stats.awayShots), homeNum: stats.homeShots, awayNum: stats.awayShots },
      { label: 'ON TARGET', homeVal: String(stats.homeShotsOnTarget), awayVal: String(stats.awayShotsOnTarget), homeNum: stats.homeShotsOnTarget, awayNum: stats.awayShotsOnTarget },
      { label: 'PASSES', homeVal: String(stats.homePasses), awayVal: String(stats.awayPasses), homeNum: stats.homePasses, awayNum: stats.awayPasses },
      { label: 'TACKLES', homeVal: String(stats.homeTackles), awayVal: String(stats.awayTackles), homeNum: stats.homeTackles, awayNum: stats.awayTackles },
    ];

    this.ftStatsEl.innerHTML = rows
      .map((row) => {
        const sum = row.homeNum + row.awayNum;
        const homePct = sum > 0 ? Math.round((row.homeNum / sum) * 100) : 50;
        const awayPct = 100 - homePct;
        return `
          <div class="hud-stat-row">
            <div class="hud-stat-head">
              <span class="hud-stat-val">${row.homeVal}</span>
              <span class="hud-stat-label">${row.label}</span>
              <span class="hud-stat-val">${row.awayVal}</span>
            </div>
            <div class="hud-stat-bar">
              <div class="hud-stat-bar__home" style="width:${homePct}%;background:${homeKit.primary}"></div>
              <div class="hud-stat-bar__away" style="width:${awayPct}%;background:${awayKit.primary}"></div>
            </div>
          </div>
        `;
      })
      .join('');
  }

  private pulseElement(el: HTMLElement): void {
    el.classList.remove('is-pulsing');
    void el.offsetWidth;
    el.classList.add('is-pulsing');
  }
}
