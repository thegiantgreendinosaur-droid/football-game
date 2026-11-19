import { KIT_THEMES } from '../config/constants';
import {
  DEFAULT_HOME_SQUAD_IDS,
  FOOTBALLERS,
  FOOTBALLER_MAP,
  SQUAD_PRESETS,
  getFootballerById,
} from '../data/players';
import type { FootballerProfile, PositionGroup, SquadSelectionState } from '../types/game';
import { createPlayerCardElement, patchPortraitWrap } from './cardRenderer';

type FilterTab = 'ALL' | PositionGroup;

const SLOT_LABELS: readonly string[] = ['GK', 'DEF', 'MID', 'FWD', 'FWD'];
const SLOT_ROLES: readonly PositionGroup[] = ['GK', 'DEF', 'MID', 'FWD', 'FWD'];
const FILTER_TABS: readonly FilterTab[] = ['ALL', 'FWD', 'MID', 'DEF', 'GK'];

interface SquadCallbacks {
  onStartMatch: (state: SquadSelectionState) => void;
}

/**
 * Responsive, broadcast-styled Squad Selection overlay built on top of the live 3D pitch backdrop.
 */
export class SquadSelectUI {
  private readonly container: HTMLElement;
  private readonly callbacks: SquadCallbacks;
  private readonly root: HTMLElement;

  private portraits: Record<string, string>;
  private homeSquadIds: string[];
  private homeKitId: string;
  private activeSlot = 4; // Default focus on primary striker slot
  private manualSlotLock = false;
  private activeFilter: FilterTab = 'ALL';
  private lastSwappedSlot: number | null = null;
  private swapFlashTimer: number | null = null;
  private nextFwdSlot: 3 | 4 = 3;

  // Cached DOM mounts
  private presetsEl!: HTMLElement;
  private kitsEl!: HTMLElement;
  private ratingsEl!: HTMLElement;
  private slotHintEl!: HTMLElement;
  private startingGridEl!: HTMLElement;
  private filterTabsEl!: HTMLElement;
  private rosterGridEl!: HTMLElement;

  constructor(
    container: HTMLElement,
    portraits: Record<string, string>,
    initialState: SquadSelectionState,
    callbacks: SquadCallbacks
  ) {
    this.container = container;
    this.portraits = { ...portraits };
    this.callbacks = callbacks;

    this.homeSquadIds = this.sanitizeSquadIds(initialState.homeSquadIds);
    this.homeKitId = KIT_THEMES.some((k) => k.id === initialState.homeKitId)
      ? initialState.homeKitId
      : KIT_THEMES[0].id;

    this.root = document.createElement('section');
    this.root.className = 'squad-screen';
    this.root.setAttribute('aria-label', 'Matchday Squad Selection');

    this.buildShell();
    this.container.appendChild(this.root);
    this.renderAll();
  }

  public show(): void {
    this.root.classList.remove('is-hidden');
  }

  public hide(): void {
    this.root.classList.add('is-hidden');
  }

  public updatePortraits(portraits: Record<string, string>): void {
    this.portraits = { ...this.portraits, ...portraits };
    const wraps = this.root.querySelectorAll<HTMLElement>('[data-portrait-for]');
    for (const wrap of wraps) {
      const id = wrap.dataset.portraitFor;
      if (!id) continue;
      const profile = FOOTBALLER_MAP[id];
      const url = this.portraits[id];
      if (profile && url) {
        patchPortraitWrap(wrap, profile, url);
      }
    }
  }

  public destroy(): void {
    if (this.swapFlashTimer !== null) {
      window.clearTimeout(this.swapFlashTimer);
      this.swapFlashTimer = null;
    }
    this.root.remove();
  }

  private sanitizeSquadIds(ids: readonly string[]): string[] {
    const clean: string[] = [];
    const seen = new Set<string>();

    for (const id of ids) {
      if (FOOTBALLER_MAP[id] && !seen.has(id) && clean.length < 5) {
        clean.push(id);
        seen.add(id);
      }
    }
    for (const fallbackId of DEFAULT_HOME_SQUAD_IDS) {
      if (clean.length >= 5) break;
      if (!seen.has(fallbackId)) {
        clean.push(fallbackId);
        seen.add(fallbackId);
      }
    }

    // Ensure slot 0 is always a Goalkeeper
    if (FOOTBALLER_MAP[clean[0]]?.positionGroup !== 'GK') {
      const gkIdx = clean.findIndex((id) => FOOTBALLER_MAP[id]?.positionGroup === 'GK');
      if (gkIdx > 0) {
        const [gk] = clean.splice(gkIdx, 1);
        clean.unshift(gk);
      } else {
        const defaultGk = FOOTBALLERS.find((p) => p.positionGroup === 'GK' && !seen.has(p.id));
        if (defaultGk) {
          clean[0] = defaultGk.id;
        }
      }
    }

    return clean.slice(0, 5);
  }

  private buildShell(): void {
    this.root.innerHTML = `
      <header class="squad-header">
        <div class="squad-brand">
          <div class="squad-brand__eyebrow">MATCHDAY 5v5</div>
          <div class="squad-brand__row">
            <h1 class="squad-brand__title">PITCH APEX</h1>
            <span class="squad-brand__subtitle">5v5 Matchday Squad</span>
          </div>
        </div>

        <div class="squad-header__controls">
          <div class="squad-control-group">
            <span class="squad-control-label">PRESETS</span>
            <div class="squad-presets" data-mount="presets"></div>
          </div>

          <div class="squad-control-group">
            <span class="squad-control-label">HOME KIT</span>
            <div class="squad-kits" data-mount="kits"></div>
          </div>

          <button type="button" id="btn-kickoff" class="btn-kickoff">
            <span>KICK OFF</span>
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
              <path d="M3.5 2.5L13 8L3.5 13.5V2.5Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </header>

      <div class="squad-body">
        <aside class="squad-starting" aria-label="Your Starting 5">
          <div class="squad-panel-head">
            <div>
              <h2 class="squad-panel-title">YOUR STARTING 5</h2>
              <p class="squad-panel-hint" data-mount="slot-hint">Select any slot to swap</p>
            </div>
            <div class="squad-ratings" data-mount="ratings"></div>
          </div>

          <div class="squad-pitch-board">
            <div class="squad-pitch-lines" aria-hidden="true"></div>
            <div class="squad-starting-grid" data-mount="starting-grid"></div>
          </div>
        </aside>

        <main class="squad-roster" aria-label="Available Footballers">
          <div class="squad-roster-toolbar">
            <div class="squad-filter-tabs" role="tablist" aria-label="Filter by position" data-mount="filter-tabs"></div>
            <span class="squad-roster-note">Click any player card to add or focus in squad</span>
          </div>
          <div class="squad-grid" data-mount="roster-grid"></div>
        </main>
      </div>

      <footer class="squad-footer" aria-label="Match Controls">
        <span class="squad-key-item"><kbd>WASD</kbd> Move</span>
        <span class="squad-key-sep" aria-hidden="true">&bull;</span>
        <span class="squad-key-item"><kbd>Shift</kbd> Sprint</span>
        <span class="squad-key-sep" aria-hidden="true">&bull;</span>
        <span class="squad-key-item"><kbd>Space</kbd> Pass</span>
        <span class="squad-key-sep" aria-hidden="true">&bull;</span>
        <span class="squad-key-item"><kbd>J</kbd> Shoot</span>
        <span class="squad-key-sep" aria-hidden="true">&bull;</span>
        <span class="squad-key-item"><kbd>E</kbd> Tackle</span>
        <span class="squad-key-sep" aria-hidden="true">&bull;</span>
        <span class="squad-key-item"><kbd>Q</kbd> Switch</span>
        <span class="squad-key-sep" aria-hidden="true">&bull;</span>
        <span class="squad-key-item"><kbd>C</kbd> Camera</span>
        <span class="squad-key-sep" aria-hidden="true">&bull;</span>
        <span class="squad-key-item"><kbd>Esc</kbd> Pause</span>
      </footer>
    `;

    this.presetsEl = this.root.querySelector<HTMLElement>('[data-mount="presets"]')!;
    this.kitsEl = this.root.querySelector<HTMLElement>('[data-mount="kits"]')!;
    this.ratingsEl = this.root.querySelector<HTMLElement>('[data-mount="ratings"]')!;
    this.slotHintEl = this.root.querySelector<HTMLElement>('[data-mount="slot-hint"]')!;
    this.startingGridEl = this.root.querySelector<HTMLElement>('[data-mount="starting-grid"]')!;
    this.filterTabsEl = this.root.querySelector<HTMLElement>('[data-mount="filter-tabs"]')!;
    this.rosterGridEl = this.root.querySelector<HTMLElement>('[data-mount="roster-grid"]')!;

    const kickoffBtn = this.root.querySelector<HTMLButtonElement>('#btn-kickoff')!;
    kickoffBtn.addEventListener('click', () => {
      this.callbacks.onStartMatch({
        homeSquadIds: [...this.homeSquadIds],
        homeKitId: this.homeKitId,
      });
    });
  }

  private renderAll(): void {
    this.renderPresets();
    this.renderKits();
    this.renderRatings();
    this.renderStartingFive();
    this.renderFilterTabs();
    this.renderRosterGrid();
  }

  private renderPresets(): void {
    this.presetsEl.innerHTML = '';
    for (const preset of SQUAD_PRESETS) {
      const isActive =
        preset.ids.length === this.homeSquadIds.length &&
        preset.ids.every((id, idx) => this.homeSquadIds[idx] === id);

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `squad-preset-pill${isActive ? ' is-active' : ''}`;
      btn.textContent = preset.name;
      btn.addEventListener('click', () => {
        this.homeSquadIds = this.sanitizeSquadIds(preset.ids);
        this.manualSlotLock = false;
        this.triggerSwapFlash(null);
        this.renderAll();
      });
      this.presetsEl.appendChild(btn);
    }
  }

  private renderKits(): void {
    this.kitsEl.innerHTML = '';
    for (const kit of KIT_THEMES) {
      const isActive = kit.id === this.homeKitId;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `squad-kit-swatch${isActive ? ' is-active' : ''}`;
      btn.title = kit.name;
      btn.setAttribute('aria-label', `Select ${kit.name} kit`);
      btn.setAttribute('aria-pressed', String(isActive));
      btn.style.setProperty('--kit-primary', kit.primary);
      btn.style.setProperty('--kit-secondary', kit.secondary);
      btn.innerHTML = `<span class="squad-kit-swatch__fill"></span><span class="squad-kit-swatch__trim"></span>`;
      btn.addEventListener('click', () => {
        if (this.homeKitId === kit.id) return;
        this.homeKitId = kit.id;
        this.renderKits();
      });
      this.kitsEl.appendChild(btn);
    }
  }

  private renderRatings(): void {
    const profiles = this.homeSquadIds.map((id) => getFootballerById(id));
    const ovr = Math.round(profiles.reduce((acc, p) => acc + p.overall, 0) / profiles.length);
    const att = Math.round((profiles[3].overall + profiles[4].overall) / 2);
    const mid = Math.round(profiles[2].overall);
    const def = Math.round((profiles[0].overall + profiles[1].overall) / 2);

    this.ratingsEl.innerHTML = `
      <div class="squad-rating-chip squad-rating-chip--ovr">
        <span class="squad-rating-chip__val">${ovr}</span>
        <span class="squad-rating-chip__key">OVR</span>
      </div>
      <div class="squad-rating-chip">
        <span class="squad-rating-chip__val">${att}</span>
        <span class="squad-rating-chip__key">ATT</span>
      </div>
      <div class="squad-rating-chip">
        <span class="squad-rating-chip__val">${mid}</span>
        <span class="squad-rating-chip__key">MID</span>
      </div>
      <div class="squad-rating-chip">
        <span class="squad-rating-chip__val">${def}</span>
        <span class="squad-rating-chip__key">DEF</span>
      </div>
    `;
  }

  private renderStartingFive(): void {
    const activeRole = SLOT_LABELS[this.activeSlot];
    const activePlayer = getFootballerById(this.homeSquadIds[this.activeSlot]);
    this.slotHintEl.textContent = `Active slot: ${activeRole} (${activePlayer.shortName})`;

    this.startingGridEl.innerHTML = '';

    // Tactical formation visual order: [FWD-L(3), FWD-R(4)], [DEF(1), MID(2)], [GK(0)]
    const visualSlotOrder = [3, 4, 1, 2, 0];

    for (const slotIdx of visualSlotOrder) {
      const profile = getFootballerById(this.homeSquadIds[slotIdx]);
      const isFocused = slotIdx === this.activeSlot;
      const isSwapped = slotIdx === this.lastSwappedSlot;

      const slotWrap = document.createElement('div');
      slotWrap.className = [
        'squad-slot',
        `squad-slot--${SLOT_ROLES[slotIdx].toLowerCase()}`,
        slotIdx === 0 ? 'squad-slot--gk-anchor' : '',
        isFocused ? 'is-active-slot' : '',
        isSwapped ? 'just-swapped' : '',
      ]
        .filter(Boolean)
        .join(' ');
      slotWrap.dataset.slotIndex = String(slotIdx);

      const card = createPlayerCardElement(profile, this.portraits[profile.id], {
        compact: true,
        selected: false,
        slotLabel: SLOT_LABELS[slotIdx],
        onClick: () => {
          this.activeSlot = slotIdx;
          this.manualSlotLock = true;
          this.renderStartingFive();
        },
      });

      slotWrap.appendChild(card);
      this.startingGridEl.appendChild(slotWrap);
    }
  }

  private renderFilterTabs(): void {
    this.filterTabsEl.innerHTML = '';
    for (const tab of FILTER_TABS) {
      const count =
        tab === 'ALL'
          ? FOOTBALLERS.length
          : FOOTBALLERS.filter((p) => p.positionGroup === tab).length;
      const isActive = tab === this.activeFilter;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.role = 'tab';
      btn.className = `squad-filter-tab${isActive ? ' is-active' : ''}`;
      btn.setAttribute('aria-selected', String(isActive));
      btn.innerHTML = `<span>${tab}</span><span class="squad-filter-tab__count">${count}</span>`;
      btn.addEventListener('click', () => {
        if (this.activeFilter === tab) return;
        this.activeFilter = tab;
        this.renderFilterTabs();
        this.renderRosterGrid();
      });
      this.filterTabsEl.appendChild(btn);
    }
  }

  private renderRosterGrid(): void {
    this.rosterGridEl.innerHTML = '';

    const visiblePlayers =
      this.activeFilter === 'ALL'
        ? FOOTBALLERS
        : FOOTBALLERS.filter((p) => p.positionGroup === this.activeFilter);

    for (const profile of visiblePlayers) {
      const selectedIdx = this.homeSquadIds.indexOf(profile.id);
      const isSelected = selectedIdx !== -1;

      const card = createPlayerCardElement(profile, this.portraits[profile.id], {
        compact: false,
        selected: isSelected,
        slotLabel: isSelected ? SLOT_LABELS[selectedIdx] : undefined,
        onClick: () => this.handleRosterPlayerClick(profile),
      });

      this.rosterGridEl.appendChild(card);
    }
  }

  private handleRosterPlayerClick(profile: FootballerProfile): void {
    const existingIdx = this.homeSquadIds.indexOf(profile.id);

    // Already in squad -> focus their slot
    if (existingIdx !== -1) {
      this.activeSlot = existingIdx;
      this.manualSlotLock = true;
      this.renderStartingFive();
      return;
    }

    const targetSlot = this.resolveTargetSlot(profile);
    this.homeSquadIds[targetSlot] = profile.id;
    this.activeSlot = targetSlot;
    this.manualSlotLock = false;
    this.triggerSwapFlash(targetSlot);

    this.renderPresets();
    this.renderRatings();
    this.renderStartingFive();
    this.renderRosterGrid();
  }

  private resolveTargetSlot(profile: FootballerProfile): number {
    // Enforce GK in slot 0 always
    if (profile.positionGroup === 'GK') {
      return 0;
    }

    // If user explicitly clicked an outfield slot (1..4), honor their choice
    if (this.manualSlotLock && this.activeSlot >= 1 && this.activeSlot <= 4) {
      return this.activeSlot;
    }

    // Smart position-matched assignment
    switch (profile.positionGroup) {
      case 'DEF':
        return 1;
      case 'MID':
        return 2;
      case 'FWD': {
        if (this.activeSlot === 3 || this.activeSlot === 4) {
          const chosen = this.activeSlot;
          this.nextFwdSlot = chosen === 3 ? 4 : 3;
          return chosen;
        }
        const chosen = this.nextFwdSlot;
        this.nextFwdSlot = chosen === 3 ? 4 : 3;
        return chosen;
      }
    }
  }

  private triggerSwapFlash(slotIdx: number | null): void {
    if (this.swapFlashTimer !== null) {
      window.clearTimeout(this.swapFlashTimer);
      this.swapFlashTimer = null;
    }
    this.lastSwappedSlot = slotIdx;
    if (slotIdx !== null) {
      this.swapFlashTimer = window.setTimeout(() => {
        this.lastSwappedSlot = null;
        const active = this.startingGridEl.querySelector('.just-swapped');
        active?.classList.remove('just-swapped');
      }, 420);
    }
  }
}
