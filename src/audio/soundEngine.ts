import type { SimEvent } from '../types/game';

type WindowWithWebkitAudio = Window & {
  webkitAudioContext?: typeof AudioContext;
};

/**
 * Pure Web Audio API procedural sound engine for PITCH APEX.
 * Synthesizes match impacts, kicks, metallic goalpost clangs, net swishes,
 * referee pea-whistles, tackles, saves, and stadium crowd roars with zero external assets.
 */
export class SoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private whiteNoiseBuffer: AudioBuffer | null = null;
  private pinkNoiseBuffer: AudioBuffer | null = null;
  private muted = false;
  private lastBounceMs = 0;

  public unlock(): void {
    const ctx = this.ensureContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') {
      void ctx.resume().catch(() => {
        // Ignore autoplay rejection until next user gesture
      });
    }
  }

  public setMuted(muted: boolean): void {
    this.muted = muted;
    if (this.masterGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setTargetAtTime(muted ? 0 : 0.85, now, 0.015);
    }
  }

  public isMuted(): boolean {
    return this.muted;
  }

  public toggleMute(): boolean {
    this.setMuted(!this.muted);
    return this.muted;
  }

  public playEvent(ev: SimEvent): void {
    if (this.muted) return;
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return;

    if (ctx.state === 'suspended') {
      void ctx.resume().catch(() => {});
    }

    const intensity = Math.max(0.08, Math.min(1, Number.isFinite(ev.intensity) ? ev.intensity : 0.6));
    const now = ctx.currentTime;

    switch (ev.type) {
      case 'kick_pass':
        this.playKickPass(ctx, now, intensity);
        break;
      case 'kick_shot':
        this.playKickShot(ctx, now, intensity);
        break;
      case 'post_hit':
        this.playPostHit(ctx, now, intensity);
        break;
      case 'net_ripple':
        this.playNetRipple(ctx, now, intensity);
        break;
      case 'goal_cheer':
        this.playGoalCheer(ctx, now, intensity);
        break;
      case 'whistle_short':
        this.playWhistle(ctx, now, 0.22, intensity);
        break;
      case 'whistle_long':
        this.playWhistle(ctx, now, 0.68, intensity);
        break;
      case 'tackle':
        this.playTackle(ctx, now, intensity);
        break;
      case 'save':
        this.playSave(ctx, now, intensity);
        break;
      case 'bounce': {
        const ms = performance.now();
        if (ms - this.lastBounceMs < 48) return;
        this.lastBounceMs = ms;
        this.playBounce(ctx, now, intensity);
        break;
      }
    }
  }

  private ensureContext(): AudioContext | null {
    if (this.ctx) return this.ctx;
    if (typeof window === 'undefined') return null;

    const AudioCtx =
      window.AudioContext ?? (window as WindowWithWebkitAudio).webkitAudioContext;
    if (!AudioCtx) return null;

    try {
      const ctx = new AudioCtx();
      const compressor = ctx.createDynamicsCompressor();
      compressor.threshold.value = -14;
      compressor.knee.value = 18;
      compressor.ratio.value = 6;
      compressor.attack.value = 0.004;
      compressor.release.value = 0.14;

      const master = ctx.createGain();
      master.gain.value = this.muted ? 0 : 0.85;

      master.connect(compressor);
      compressor.connect(ctx.destination);

      this.ctx = ctx;
      this.masterGain = master;
      this.whiteNoiseBuffer = this.createWhiteNoiseBuffer(ctx, 2.0);
      this.pinkNoiseBuffer = this.createPinkNoiseBuffer(ctx, 3.5);
      return ctx;
    } catch {
      return null;
    }
  }

  private createWhiteNoiseBuffer(ctx: AudioContext, seconds: number): AudioBuffer {
    const length = Math.floor(ctx.sampleRate * seconds);
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  private createPinkNoiseBuffer(ctx: AudioContext, seconds: number): AudioBuffer {
    const length = Math.floor(ctx.sampleRate * seconds);
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0;
    let b1 = 0;
    let b2 = 0;
    let b3 = 0;
    let b4 = 0;
    let b5 = 0;
    let b6 = 0;
    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      const pink = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
      b6 = white * 0.115926;
      data[i] = Math.max(-1, Math.min(1, pink));
    }
    return buffer;
  }

  /** Tight warm low-mid leather thump + brief filtered boot click */
  private playKickPass(ctx: AudioContext, now: number, intensity: number): void {
    const dest = this.masterGain!;
    const gainScale = 0.42 + intensity * 0.38;

    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(112 + intensity * 18, now);
    osc.frequency.exponentialRampToValueAtTime(44, now + 0.09);

    oscGain.gain.setValueAtTime(0.001, now);
    oscGain.gain.linearRampToValueAtTime(0.55 * gainScale, now + 0.005);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.105);

    osc.connect(oscGain);
    oscGain.connect(dest);
    osc.start(now);
    osc.stop(now + 0.115);

    if (this.whiteNoiseBuffer) {
      const noise = ctx.createBufferSource();
      noise.buffer = this.whiteNoiseBuffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1180, now);
      filter.Q.value = 2.0;

      const clickGain = ctx.createGain();
      clickGain.gain.setValueAtTime(0.001, now);
      clickGain.gain.linearRampToValueAtTime(0.24 * gainScale, now + 0.003);
      clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.028);

      noise.connect(filter);
      filter.connect(clickGain);
      clickGain.connect(dest);
      noise.start(now, Math.random() * 0.5, 0.04);
    }
  }

  /** Punchy deep cannon strike scaled by intensity (sub-thump + leather snap) */
  private playKickShot(ctx: AudioContext, now: number, intensity: number): void {
    const dest = this.masterGain!;
    const power = 0.45 + intensity * 0.55;

    // Deep sub-thump
    const subOsc = ctx.createOscillator();
    const subGain = ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(150 + intensity * 35, now);
    subOsc.frequency.exponentialRampToValueAtTime(36, now + 0.155);

    subGain.gain.setValueAtTime(0.001, now);
    subGain.gain.linearRampToValueAtTime(0.75 * power, now + 0.004);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.185);

    subOsc.connect(subGain);
    subGain.connect(dest);
    subOsc.start(now);
    subOsc.stop(now + 0.2);

    // Mid-body punch
    const bodyOsc = ctx.createOscillator();
    const bodyGain = ctx.createGain();
    bodyOsc.type = 'triangle';
    bodyOsc.frequency.setValueAtTime(240 + intensity * 40, now);
    bodyOsc.frequency.exponentialRampToValueAtTime(62, now + 0.085);

    bodyGain.gain.setValueAtTime(0.001, now);
    bodyGain.gain.linearRampToValueAtTime(0.35 * power, now + 0.004);
    bodyGain.gain.exponentialRampToValueAtTime(0.001, now + 0.095);

    bodyOsc.connect(bodyGain);
    bodyGain.connect(dest);
    bodyOsc.start(now);
    bodyOsc.stop(now + 0.105);

    // Crisp leather snap
    if (this.whiteNoiseBuffer) {
      const snap = ctx.createBufferSource();
      snap.buffer = this.whiteNoiseBuffer;
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.setValueAtTime(1650 + intensity * 500, now);
      bp.Q.value = 1.3;

      const snapGain = ctx.createGain();
      snapGain.gain.setValueAtTime(0.001, now);
      snapGain.gain.linearRampToValueAtTime(0.42 * power, now + 0.003);
      snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.048);

      snap.connect(bp);
      bp.connect(snapGain);
      snapGain.connect(dest);
      snap.start(now, Math.random() * 0.6, 0.06);
    }
  }

  /** Resonant metallic goalpost CLANG using inharmonic partials + FM ring */
  private playPostHit(ctx: AudioContext, now: number, intensity: number): void {
    const dest = this.masterGain!;
    const scale = 0.45 + intensity * 0.55;

    const partials: readonly { freq: number; type: OscillatorType; amp: number; decay: number }[] = [
      { freq: 520, type: 'triangle', amp: 0.36, decay: 0.58 },
      { freq: 874, type: 'sine', amp: 0.28, decay: 0.44 },
      { freq: 1412, type: 'triangle', amp: 0.2, decay: 0.31 },
      { freq: 2180, type: 'sine', amp: 0.1, decay: 0.16 },
    ];

    // Subtle FM modulator on fundamental for hollow aluminum resonance
    const fmOsc = ctx.createOscillator();
    const fmGain = ctx.createGain();
    fmOsc.frequency.value = 345;
    fmGain.gain.setValueAtTime(110 * scale, now);
    fmGain.gain.exponentialRampToValueAtTime(4, now + 0.18);
    fmOsc.connect(fmGain);
    fmOsc.start(now);
    fmOsc.stop(now + 0.22);

    for (let i = 0; i < partials.length; i++) {
      const p = partials[i];
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = p.type;
      osc.frequency.setValueAtTime(p.freq, now);
      if (i === 0) {
        fmGain.connect(osc.frequency);
      }

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(p.amp * scale, now + 0.002);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + p.decay);

      osc.connect(gain);
      gain.connect(dest);
      osc.start(now);
      osc.stop(now + p.decay + 0.02);
    }

    // Impact transient thud
    const thud = ctx.createOscillator();
    const thudGain = ctx.createGain();
    thud.type = 'sine';
    thud.frequency.setValueAtTime(160, now);
    thud.frequency.exponentialRampToValueAtTime(52, now + 0.06);
    thudGain.gain.setValueAtTime(0.32 * scale, now);
    thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
    thud.connect(thudGain);
    thudGain.connect(dest);
    thud.start(now);
    thud.stop(now + 0.08);
  }

  /** Soft high-passed rustling mesh swish */
  private playNetRipple(ctx: AudioContext, now: number, intensity: number): void {
    if (!this.pinkNoiseBuffer) return;
    const dest = this.masterGain!;
    const scale = 0.4 + intensity * 0.5;

    const src = ctx.createBufferSource();
    src.buffer = this.pinkNoiseBuffer;

    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.setValueAtTime(1350, now);

    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(2400, now);
    bp.frequency.exponentialRampToValueAtTime(1150, now + 0.28);
    bp.Q.value = 1.1;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.34 * scale, now + 0.035);
    gain.gain.linearRampToValueAtTime(0.18 * scale, now + 0.12);
    gain.gain.linearRampToValueAtTime(0.24 * scale, now + 0.17);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.34);

    src.connect(hp);
    hp.connect(bp);
    bp.connect(gain);
    gain.connect(dest);
    src.start(now, Math.random() * 1.2, 0.38);
  }

  /** Warm filtered pink-noise stadium roar swell + subtle harmonic chord shimmer */
  private playGoalCheer(ctx: AudioContext, now: number, intensity: number): void {
    const dest = this.masterGain!;
    const scale = 0.55 + intensity * 0.45;
    const duration = 3.1;

    if (this.pinkNoiseBuffer) {
      // Warm stadium crowd body
      const crowdLow = ctx.createBufferSource();
      crowdLow.buffer = this.pinkNoiseBuffer;
      const lowFilter = ctx.createBiquadFilter();
      lowFilter.type = 'bandpass';
      lowFilter.frequency.setValueAtTime(340, now);
      lowFilter.frequency.linearRampToValueAtTime(520, now + 0.45);
      lowFilter.frequency.linearRampToValueAtTime(390, now + duration);
      lowFilter.Q.value = 0.75;

      const lowGain = ctx.createGain();
      lowGain.gain.setValueAtTime(0.001, now);
      lowGain.gain.linearRampToValueAtTime(0.46 * scale, now + 0.28);
      lowGain.gain.setValueAtTime(0.42 * scale, now + 1.5);
      lowGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      crowdLow.connect(lowFilter);
      lowFilter.connect(lowGain);
      lowGain.connect(dest);
      crowdLow.start(now, 0, duration + 0.05);

      // Upper stadium cheer presence
      const crowdHigh = ctx.createBufferSource();
      crowdHigh.buffer = this.pinkNoiseBuffer;
      const highFilter = ctx.createBiquadFilter();
      highFilter.type = 'bandpass';
      highFilter.frequency.setValueAtTime(980, now);
      highFilter.frequency.linearRampToValueAtTime(1450, now + 0.35);
      highFilter.frequency.linearRampToValueAtTime(900, now + duration);
      highFilter.Q.value = 1.05;

      const highGain = ctx.createGain();
      highGain.gain.setValueAtTime(0.001, now);
      highGain.gain.linearRampToValueAtTime(0.32 * scale, now + 0.22);
      highGain.gain.setValueAtTime(0.28 * scale, now + 1.35);
      highGain.gain.exponentialRampToValueAtTime(0.001, now + duration - 0.15);

      crowdHigh.connect(highFilter);
      highFilter.connect(highGain);
      highGain.connect(dest);
      crowdHigh.start(now, 0.3, duration + 0.05);
    }

    // Subtle celebratory harmonic chord shimmer (D major warm pad low in the mix)
    const chordNotes = [293.66, 369.99, 440.0, 587.33];
    const chordFilter = ctx.createBiquadFilter();
    chordFilter.type = 'lowpass';
    chordFilter.frequency.setValueAtTime(1350, now);
    chordFilter.connect(dest);

    for (let i = 0; i < chordNotes.length; i++) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = i % 2 === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(chordNotes[i], now);

      gain.gain.setValueAtTime(0.0005, now);
      gain.gain.linearRampToValueAtTime(0.032 * scale, now + 0.25 + i * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0005, now + 2.1);

      osc.connect(gain);
      gain.connect(chordFilter);
      osc.start(now);
      osc.stop(now + 2.2);
    }
  }

  /** Authentic referee pea-whistle: 2.8kHz-3.1kHz dual oscillator + 32Hz amplitude trill */
  private playWhistle(ctx: AudioContext, now: number, duration: number, intensity: number): void {
    const dest = this.masterGain!;
    const scale = 0.45 + intensity * 0.4;

    const oscA = ctx.createOscillator();
    const oscB = ctx.createOscillator();
    oscA.type = 'sine';
    oscB.type = 'triangle';

    oscA.frequency.setValueAtTime(2760, now);
    oscA.frequency.linearRampToValueAtTime(2910, now + 0.045);
    oscA.frequency.setValueAtTime(2880, now + duration * 0.7);
    oscA.frequency.linearRampToValueAtTime(2810, now + duration);

    oscB.frequency.setValueAtTime(2935, now);
    oscB.frequency.linearRampToValueAtTime(3095, now + 0.045);
    oscB.frequency.setValueAtTime(3065, now + duration * 0.7);
    oscB.frequency.linearRampToValueAtTime(2990, now + duration);

    // 32Hz pea-whistle amplitude modulation
    const trillOsc = ctx.createOscillator();
    const trillDepth = ctx.createGain();
    trillOsc.type = 'sine';
    trillOsc.frequency.value = 32;
    trillDepth.gain.value = 0.34;

    const modGain = ctx.createGain();
    modGain.gain.value = 0.66;
    trillOsc.connect(trillDepth);
    trillDepth.connect(modGain.gain);

    const envGain = ctx.createGain();
    envGain.gain.setValueAtTime(0.001, now);
    envGain.gain.linearRampToValueAtTime(0.26 * scale, now + 0.022);
    envGain.gain.setValueAtTime(0.24 * scale, Math.max(now + 0.03, now + duration - 0.045));
    envGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    const mixA = ctx.createGain();
    mixA.gain.value = 0.7;
    const mixB = ctx.createGain();
    mixB.gain.value = 0.3;

    oscA.connect(mixA);
    oscB.connect(mixB);
    mixA.connect(modGain);
    mixB.connect(modGain);
    modGain.connect(envGain);
    envGain.connect(dest);

    oscA.start(now);
    oscB.start(now);
    trillOsc.start(now);
    oscA.stop(now + duration + 0.02);
    oscB.stop(now + duration + 0.02);
    trillOsc.stop(now + duration + 0.02);

    // Breath air hiss
    if (this.whiteNoiseBuffer) {
      const air = ctx.createBufferSource();
      air.buffer = this.whiteNoiseBuffer;
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = 3300;
      bp.Q.value = 3.5;

      const airGain = ctx.createGain();
      airGain.gain.setValueAtTime(0.001, now);
      airGain.gain.linearRampToValueAtTime(0.07 * scale, now + 0.02);
      airGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      air.connect(bp);
      bp.connect(airGain);
      airGain.connect(dest);
      air.start(now, Math.random() * 0.4, duration + 0.02);
    }
  }

  /** Crisp turf-slide burst + muted thud */
  private playTackle(ctx: AudioContext, now: number, intensity: number): void {
    const dest = this.masterGain!;
    const scale = 0.45 + intensity * 0.5;

    if (this.pinkNoiseBuffer) {
      const turf = ctx.createBufferSource();
      turf.buffer = this.pinkNoiseBuffer;
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.setValueAtTime(1050, now);
      bp.frequency.exponentialRampToValueAtTime(360, now + 0.17);
      bp.Q.value = 0.9;

      const turfGain = ctx.createGain();
      turfGain.gain.setValueAtTime(0.001, now);
      turfGain.gain.linearRampToValueAtTime(0.36 * scale, now + 0.018);
      turfGain.gain.exponentialRampToValueAtTime(0.001, now + 0.19);

      turf.connect(bp);
      bp.connect(turfGain);
      turfGain.connect(dest);
      turf.start(now, Math.random() * 0.9, 0.22);
    }

    const thud = ctx.createOscillator();
    const thudGain = ctx.createGain();
    thud.type = 'sine';
    thud.frequency.setValueAtTime(98, now);
    thud.frequency.exponentialRampToValueAtTime(38, now + 0.1);
    thudGain.gain.setValueAtTime(0.001, now);
    thudGain.gain.linearRampToValueAtTime(0.34 * scale, now + 0.006);
    thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.115);

    thud.connect(thudGain);
    thudGain.connect(dest);
    thud.start(now);
    thud.stop(now + 0.13);
  }

  /** Firm goalkeeper latex glove slap/catch thump */
  private playSave(ctx: AudioContext, now: number, intensity: number): void {
    const dest = this.masterGain!;
    const scale = 0.5 + intensity * 0.5;

    // Latex palm slap
    if (this.whiteNoiseBuffer) {
      const slap = ctx.createBufferSource();
      slap.buffer = this.whiteNoiseBuffer;
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.setValueAtTime(1450, now);
      bp.Q.value = 1.6;

      const slapGain = ctx.createGain();
      slapGain.gain.setValueAtTime(0.001, now);
      slapGain.gain.linearRampToValueAtTime(0.45 * scale, now + 0.003);
      slapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

      slap.connect(bp);
      bp.connect(slapGain);
      slapGain.connect(dest);
      slap.start(now, Math.random() * 0.5, 0.05);
    }

    // Damped ball-in-hands thump
    const palm = ctx.createOscillator();
    const palmGain = ctx.createGain();
    palm.type = 'triangle';
    palm.frequency.setValueAtTime(165, now);
    palm.frequency.exponentialRampToValueAtTime(56, now + 0.11);

    palmGain.gain.setValueAtTime(0.001, now);
    palmGain.gain.linearRampToValueAtTime(0.42 * scale, now + 0.004);
    palmGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    palm.connect(palmGain);
    palmGain.connect(dest);
    palm.start(now);
    palm.stop(now + 0.13);
  }

  /** Soft dull turf bounce scaled by intensity */
  private playBounce(ctx: AudioContext, now: number, intensity: number): void {
    const dest = this.masterGain!;
    const scale = Math.min(1, intensity);

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(84 + scale * 20, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.06);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.24 * scale, now + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.072);

    osc.connect(gain);
    gain.connect(dest);
    osc.start(now);
    osc.stop(now + 0.08);
  }
}
