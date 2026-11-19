import './styles/main.css';
import { GameApp } from './game/gameApp';

function boot(): void {
  const canvasContainer = document.getElementById('canvas-container');
  const uiRoot = document.getElementById('ui-root');

  if (!canvasContainer || !uiRoot) {
    throw new Error('Missing #canvas-container or #ui-root mount elements');
  }

  new GameApp(canvasContainer, uiRoot);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
