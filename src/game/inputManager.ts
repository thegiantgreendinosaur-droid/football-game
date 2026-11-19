import type { ControlInput } from '../types/game';

export interface InputCallbacks {
  onTogglePause: () => void;
  onCycleCamera: () => void;
  onToggleMute: () => void;
  onAnyInteraction: () => void;
}

/**
 * Responsive keyboard input manager with single-frame edge triggers
 * (justPressed / justReleased) synchronized cleanly to fixed simulation ticks.
 */
export class InputManager {
  private keys = new Set<string>();
  private passJustPressed = false;
  private passJustReleased = false;
  private shootJustPressed = false;
  private shootJustReleased = false;
  private tackleJustPressed = false;
  private switchJustPressed = false;
  private enabled = false;
  private callbacks: InputCallbacks;

  constructor(callbacks: InputCallbacks) {
    this.callbacks = callbacks;
    window.addEventListener('keydown', this.handleKeyDown, { passive: false });
    window.addEventListener('keyup', this.handleKeyUp);
    window.addEventListener('blur', this.handleBlur);
  }

  public setGameplayEnabled(enabled: boolean): void {
    this.enabled = enabled;
    if (!enabled) {
      this.clearState();
    }
  }

  public clearState(): void {
    this.keys.clear();
    this.passJustPressed = false;
    this.passJustReleased = false;
    this.shootJustPressed = false;
    this.shootJustReleased = false;
    this.tackleJustPressed = false;
    this.switchJustPressed = false;
  }

  public consumeInput(): ControlInput {
    const moveRight = this.keys.has('KeyD') || this.keys.has('ArrowRight') ? 1 : 0;
    const moveLeft = this.keys.has('KeyA') || this.keys.has('ArrowLeft') ? 1 : 0;
    const moveDown = this.keys.has('KeyS') || this.keys.has('ArrowDown') ? 1 : 0;
    const moveUp = this.keys.has('KeyW') || this.keys.has('ArrowUp') ? 1 : 0;

    let moveX = moveRight - moveLeft;
    let moveZ = moveDown - moveUp;
    const len = Math.hypot(moveX, moveZ);
    if (len > 1) {
      moveX /= len;
      moveZ /= len;
    }

    const input: ControlInput = {
      moveX,
      moveZ,
      sprint: this.keys.has('ShiftLeft') || this.keys.has('ShiftRight'),
      passHeld: this.keys.has('Space'),
      passJustPressed: this.passJustPressed,
      passJustReleased: this.passJustReleased,
      shootHeld: this.keys.has('KeyJ'),
      shootJustPressed: this.shootJustPressed,
      shootJustReleased: this.shootJustReleased,
      tackleJustPressed: this.tackleJustPressed,
      switchJustPressed: this.switchJustPressed,
    };

    // Reset edge-triggered flags after consumption
    this.passJustPressed = false;
    this.passJustReleased = false;
    this.shootJustPressed = false;
    this.shootJustReleased = false;
    this.tackleJustPressed = false;
    this.switchJustPressed = false;

    return input;
  }

  private handleKeyDown = (e: KeyboardEvent): void => {
    this.callbacks.onAnyInteraction();

    if (e.code === 'Escape' && !e.repeat) {
      e.preventDefault();
      this.callbacks.onTogglePause();
      return;
    }

    if (!this.enabled) return;

    if (e.code === 'KeyC' && !e.repeat) {
      e.preventDefault();
      this.callbacks.onCycleCamera();
      return;
    }

    if (e.code === 'KeyM' && !e.repeat) {
      e.preventDefault();
      this.callbacks.onToggleMute();
      return;
    }

    if (
      e.code === 'Space' ||
      e.code === 'ArrowUp' ||
      e.code === 'ArrowDown' ||
      e.code === 'ArrowLeft' ||
      e.code === 'ArrowRight'
    ) {
      e.preventDefault();
    }

    const wasDown = this.keys.has(e.code);
    this.keys.add(e.code);

    if (!wasDown) {
      if (e.code === 'Space') this.passJustPressed = true;
      if (e.code === 'KeyJ') this.shootJustPressed = true;
      if (e.code === 'KeyE') this.tackleJustPressed = true;
      if (e.code === 'KeyQ') this.switchJustPressed = true;
    }
  };

  private handleKeyUp = (e: KeyboardEvent): void => {
    const wasDown = this.keys.has(e.code);
    this.keys.delete(e.code);

    if (wasDown && this.enabled) {
      if (e.code === 'Space') this.passJustReleased = true;
      if (e.code === 'KeyJ') this.shootJustReleased = true;
    }
  };

  private handleBlur = (): void => {
    this.clearState();
  };

  public destroy(): void {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
    window.removeEventListener('blur', this.handleBlur);
  }
}
