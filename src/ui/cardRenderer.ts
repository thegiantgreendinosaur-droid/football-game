import type { FootballerProfile } from '../types/game';

/**
 * Renders a crisp, clean 24x16 inline SVG nationality flag matching each footballer's
 * flag colors and orientation (horizontal, vertical, cross, brazil).
 */
export function createFlagSvg(profile: FootballerProfile): string {
  const [c0, c1, c2] = profile.flagColors;
  let body = '';

  switch (profile.flagOrientation) {
    case 'horizontal': {
      body = `
        <rect x="0" y="0" width="24" height="5.4" fill="${c0}" />
        <rect x="0" y="5.3" width="24" height="5.4" fill="${c1}" />
        <rect x="0" y="10.6" width="24" height="5.4" fill="${c2}" />
      `;
      if (profile.countryCode === 'ARG') {
        body += `<circle cx="12" cy="8" r="1.45" fill="#f2b824" />`;
      } else if (profile.countryCode === 'ESP') {
        body = `
          <rect x="0" y="0" width="24" height="4" fill="${c0}" />
          <rect x="0" y="4" width="24" height="8" fill="${c1}" />
          <rect x="0" y="12" width="24" height="4" fill="${c2}" />
          <rect x="6.5" y="6.2" width="2.4" height="3.6" rx="0.5" fill="#aa151b" opacity="0.85" />
        `;
      } else if (profile.countryCode === 'MAR') {
        body = `
          <rect x="0" y="0" width="24" height="16" fill="${c0}" />
          <polygon points="12,4.4 13.1,7.4 16.2,7.4 13.7,9.2 14.6,12.1 12,10.3 9.4,12.1 10.3,9.2 7.8,7.4 10.9,7.4" fill="none" stroke="${c1}" stroke-width="1.05" />
        `;
      } else if (profile.countryCode === 'POL') {
        body = `
          <rect x="0" y="0" width="24" height="8" fill="${c0}" />
          <rect x="0" y="8" width="24" height="8" fill="${c1}" />
        `;
      }
      break;
    }

    case 'vertical': {
      if (profile.countryCode === 'POR') {
        body = `
          <rect x="0" y="0" width="9.5" height="16" fill="${c0}" />
          <rect x="9.5" y="0" width="14.5" height="16" fill="${c1}" />
          <circle cx="9.5" cy="8" r="2.6" fill="${c2}" />
          <circle cx="9.5" cy="8" r="1.4" fill="${c1}" />
        `;
      } else {
        body = `
          <rect x="0" y="0" width="8.1" height="16" fill="${c0}" />
          <rect x="8" y="0" width="8.1" height="16" fill="${c1}" />
          <rect x="16" y="0" width="8" height="16" fill="${c2}" />
        `;
      }
      break;
    }

    case 'cross': {
      if (profile.countryCode === 'ENG') {
        body = `
          <rect x="0" y="0" width="24" height="16" fill="${c0}" />
          <rect x="10.2" y="0" width="3.6" height="16" fill="${c1}" />
          <rect x="0" y="6.2" width="24" height="3.6" fill="${c1}" />
        `;
      } else {
        // Nordic cross (e.g. Norway)
        body = `
          <rect x="0" y="0" width="24" height="16" fill="${c0}" />
          <rect x="6.4" y="0" width="4.4" height="16" fill="${c1}" />
          <rect x="0" y="5.8" width="24" height="4.4" fill="${c1}" />
          <rect x="7.5" y="0" width="2.2" height="16" fill="${c2}" />
          <rect x="0" y="6.9" width="24" height="2.2" fill="${c2}" />
        `;
      }
      break;
    }

    case 'brazil': {
      body = `
        <rect x="0" y="0" width="24" height="16" fill="${c0}" />
        <polygon points="12,1.8 22.2,8 12,14.2 1.8,8" fill="${c1}" />
        <circle cx="12" cy="8" r="3.4" fill="${c2}" />
        <path d="M9.1,7.5 Q12,6.4 14.9,8.3" fill="none" stroke="#ffffff" stroke-width="0.7" />
      `;
      break;
    }
  }

  return `<svg class="flag-svg" viewBox="0 0 24 16" width="24" height="16" aria-hidden="true" focusable="false">
    ${body}
    <rect x="0.3" y="0.3" width="23.4" height="15.4" fill="none" stroke="rgba(0,0,0,0.28)" stroke-width="0.6" />
  </svg>`;
}

/**
 * Graceful stylized bust silhouette fallback when a 3D portrait data URL is not yet available.
 */
function createPortraitFallbackSvg(profile: FootballerProfile): string {
  const { skinTone, hairColor } = profile.appearance;
  const jerseyColor =
    profile.cardTier === 'gold_icon'
      ? '#1d242e'
      : profile.cardTier === 'platinum_elite'
        ? '#1f2b38'
        : '#182330';

  return `<svg class="player-card__fallback-svg" viewBox="0 0 120 132" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="bust-grad-${profile.id}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${jerseyColor}" stop-opacity="0.96" />
        <stop offset="100%" stop-color="#0b1117" stop-opacity="0.98" />
      </linearGradient>
    </defs>
    <path d="M18,132 C20,98 35,84 60,84 C85,84 100,98 102,132 Z" fill="url(#bust-grad-${profile.id})" />
    <path d="M46,84 L60,97 L74,84" fill="none" stroke="#d4af37" stroke-width="2.5" opacity="0.85" />
    <rect x="52" y="70" width="16" height="18" rx="6" fill="${skinTone}" />
    <ellipse cx="60" cy="48" rx="21" ry="25" fill="${skinTone}" />
    <path d="M39,46 C39,26 48,18 60,18 C72,18 81,26 81,46 C77,36 70,32 60,32 C50,32 43,36 39,46 Z" fill="${hairColor}" />
    <text x="60" y="119" text-anchor="middle" font-family="Barlow Condensed, sans-serif" font-size="18" font-weight="800" fill="rgba(248,250,252,0.55)">${profile.number}</text>
  </svg>`;
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
 * Helper to create a portrait element (either <img> from the rendered 3D model or stylized fallback)
 * that can also be smoothly updated later via `updateCardPortrait`.
 */
export function buildPortraitNode(profile: FootballerProfile, portraitUrl: string | undefined): HTMLElement {
  const wrap = document.createElement('div');
  wrap.className = 'player-card__portrait-wrap';
  wrap.dataset.portraitFor = profile.id;

  if (portraitUrl) {
    const img = document.createElement('img');
    img.className = 'player-card__portrait';
    img.src = portraitUrl;
    img.alt = profile.name;
    img.draggable = false;
    img.addEventListener('error', () => {
      wrap.innerHTML = createPortraitFallbackSvg(profile);
    });
    wrap.appendChild(img);
  } else {
    wrap.innerHTML = createPortraitFallbackSvg(profile);
  }

  return wrap;
}

/**
 * Updates an existing portrait wrapper in-place once a 3D bust portrait finishes rendering.
 */
export function patchPortraitWrap(
  wrap: HTMLElement,
  profile: FootballerProfile,
  portraitUrl: string | undefined
): void {
  if (!portraitUrl) return;
  const existingImg = wrap.querySelector<HTMLImageElement>('img.player-card__portrait');
  if (existingImg) {
    if (existingImg.src !== portraitUrl) {
      existingImg.src = portraitUrl;
    }
    return;
  }
  const img = document.createElement('img');
  img.className = 'player-card__portrait';
  img.src = portraitUrl;
  img.alt = profile.name;
  img.draggable = false;
  img.addEventListener('error', () => {
    wrap.innerHTML = createPortraitFallbackSvg(profile);
  });
  wrap.innerHTML = '';
  wrap.appendChild(img);
}

export function createPlayerCardElement(
  profile: FootballerProfile,
  portraitUrl: string | undefined,
  options?: {
    compact?: boolean;
    selected?: boolean;
    slotLabel?: string;
    onClick?: () => void;
  }
): HTMLElement {
  const compact = Boolean(options?.compact);
  const selected = Boolean(options?.selected);
  const slotLabel = options?.slotLabel;

  const card = document.createElement('button');
  card.type = 'button';
  card.className = [
    'player-card',
    `player-card--${profile.cardTier}`,
    compact ? 'player-card--compact' : 'player-card--full',
    selected ? 'is-selected' : '',
  ]
    .filter(Boolean)
    .join(' ');
  card.dataset.playerId = profile.id;
  card.dataset.tier = profile.cardTier;
  card.setAttribute('aria-label', `${profile.name}, ${profile.position}, Overall ${profile.overall}`);

  if (options?.onClick) {
    card.addEventListener('click', options.onClick);
  }

  const shell = document.createElement('div');
  shell.className = 'player-card__shell';

  // Inner metallic crest frame + hover sheen overlay
  const sheen = document.createElement('div');
  sheen.className = 'player-card__sheen';
  sheen.setAttribute('aria-hidden', 'true');
  shell.appendChild(sheen);

  // Top-right badge: slot label or IN SQUAD indicator
  if (slotLabel || selected) {
    const badge = document.createElement('span');
    badge.className = selected && !compact ? 'player-card__badge player-card__badge--selected' : 'player-card__badge';
    badge.textContent = slotLabel ?? 'IN SQUAD';
    shell.appendChild(badge);
  }

  // Upper region: Rating/Pos/Flag on left + 3D portrait bust on center-right
  const top = document.createElement('div');
  top.className = 'player-card__top';

  const meta = document.createElement('div');
  meta.className = 'player-card__meta';
  meta.innerHTML = `
    <span class="player-card__ovr">${profile.overall}</span>
    <span class="player-card__pos">${escapeHtml(profile.position)}</span>
    <span class="player-card__meta-rule" aria-hidden="true"></span>
    <span class="player-card__nation">
      ${createFlagSvg(profile)}
      <span class="player-card__cc">${escapeHtml(profile.countryCode)}</span>
    </span>
    ${!compact ? `<span class="player-card__jersey">#${profile.number}</span>` : ''}
  `;

  top.appendChild(meta);
  top.appendChild(buildPortraitNode(profile, portraitUrl));
  shell.appendChild(top);

  // Divider hairline + tracked uppercase footballer name
  const nameplate = document.createElement('div');
  nameplate.className = 'player-card__nameplate';
  const displayName = compact ? profile.shortName : profile.name;
  const nameSizeClass = compact
    ? displayName.length >= 9
      ? ' player-card__name--compact-long'
      : ''
    : displayName.length >= 16
      ? ' player-card__name--xlong'
      : displayName.length >= 13
        ? ' player-card__name--long'
        : '';
  nameplate.innerHTML = `
    <span class="player-card__name${nameSizeClass}">${escapeHtml(displayName.toUpperCase())}</span>
    ${compact ? `<span class="player-card__compact-num">#${profile.number}</span>` : ''}
  `;
  shell.appendChild(nameplate);

  // Full card 2x3 attribute grid (PAC/SHO/PAS | DRI/DEF/PHY)
  if (!compact) {
    const { pace, shooting, passing, dribbling, defending, physical } = profile.stats;
    const renderStat = (label: string, val: number): string => `
      <div class="player-card__stat${val >= 90 ? ' is-elite' : ''}">
        <span class="player-card__stat-val">${val}</span>
        <span class="player-card__stat-key">${label}</span>
      </div>
    `;

    const statsGrid = document.createElement('div');
    statsGrid.className = 'player-card__stats';
    statsGrid.innerHTML = `
      <div class="player-card__stat-col">
        ${renderStat('PAC', pace)}
        ${renderStat('SHO', shooting)}
        ${renderStat('PAS', passing)}
      </div>
      <div class="player-card__stat-divider" aria-hidden="true"></div>
      <div class="player-card__stat-col">
        ${renderStat('DRI', dribbling)}
        ${renderStat('DEF', defending)}
        ${renderStat('PHY', physical)}
      </div>
    `;
    shell.appendChild(statsGrid);
  }

  card.appendChild(shell);
  return card;
}
