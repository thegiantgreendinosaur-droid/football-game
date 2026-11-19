import * as THREE from 'three';
import type { FootballerProfile, KitTheme } from '../types/game';
import { createFootballerRig, disposeCharacterRig } from './characterBuilder';

const PORTRAIT_WIDTH = 256;
const PORTRAIT_HEIGHT = 280;

/**
 * Renders studio-lit 3D head-and-shoulders portraits for a list of footballers
 * using a single offscreen WebGLRenderer and returns a map of profile.id -> PNG data URL.
 * Gracefully falls back to empty strings if WebGL context creation fails.
 */
export function renderPlayerPortraits(
  profiles: readonly FootballerProfile[],
  kit: KitTheme
): Record<string, string> {
  const portraits: Record<string, string> = {};
  for (const profile of profiles) {
    portraits[profile.id] = '';
  }

  if (profiles.length === 0 || typeof document === 'undefined') {
    return portraits;
  }

  let renderer: THREE.WebGLRenderer | null = null;

  try {
    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(1);
    renderer.setSize(PORTRAIT_WIDTH, PORTRAIT_HEIGHT, false);
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;

    const scene = new THREE.Scene();

    // Studio portrait three-point + hemisphere lighting
    const hemiLight = new THREE.HemisphereLight(0xf8fafc, 0x334155, 0.95);
    scene.add(hemiLight);

    // Warm key light from front-left-above for sculptural facial highlights
    const keyLight = new THREE.DirectionalLight(0xfff1dc, 2.2);
    keyLight.position.set(2.2, 2.8, 3.2);
    scene.add(keyLight);

    // Cool rim light from behind-right to outline hair silhouettes & shoulders
    const rimLight = new THREE.DirectionalLight(0x7dd3fc, 1.65);
    rimLight.position.set(-2.4, 2.2, -2.5);
    scene.add(rimLight);

    // Soft front-right bounce fill to keep shadows clean and legible
    const fillLight = new THREE.DirectionalLight(0xe2e8f0, 0.55);
    fillLight.position.set(-1.9, 1.4, 2.5);
    scene.add(fillLight);

    const camera = new THREE.PerspectiveCamera(
      27,
      PORTRAIT_WIDTH / PORTRAIT_HEIGHT,
      0.1,
      20
    );

    for (const profile of profiles) {
      const isGoalkeeper = profile.positionGroup === 'GK';
      const rig = createFootballerRig(profile, kit, isGoalkeeper);

      try {
        rig.shadowBlob.visible = false;

        // Confident 3/4 hero portrait stance (~15 deg turn, slightly more for long ponytail silhouette)
        const bodyTurn = profile.appearance.hairStyle === 'ponytail_long' ? -0.34 : -0.26;
        rig.root.rotation.y = bodyTurn;
        rig.torso.rotation.x = 0.02;
        rig.headGroup.rotation.y = -bodyTurn * 0.38;
        rig.headGroup.rotation.x = -0.02;

        // Relaxed athletic shoulders & elbows
        rig.leftShoulder.rotation.z = 0.14;
        rig.rightShoulder.rotation.z = -0.14;
        rig.leftElbow.rotation.x = -0.25;
        rig.rightElbow.rotation.x = -0.25;

        // Frame tightly on upper torso, collar, shoulders, and head regardless of player height
        const h = rig.heightScale;
        const extraHeadroom =
          profile.appearance.hairStyle === 'curly_voluminous' ||
          profile.appearance.hairStyle === 'topknot_bun'
            ? 0.03
            : 0;
        const lookY = (1.585 + extraHeadroom) * h;
        const camY = (1.64 + extraHeadroom) * h;
        const camZ = (1.46 + extraHeadroom * 1.4) * h;

        camera.position.set(0, camY, camZ);
        camera.lookAt(0, lookY, 0);

        scene.add(rig.root);
        renderer.render(scene, camera);
        portraits[profile.id] = renderer.domElement.toDataURL('image/png');
        scene.remove(rig.root);
      } finally {
        disposeCharacterRig(rig);
      }
    }
  } catch {
    // Graceful fallback: return empty strings so squad cards render cleanly without crashing
  } finally {
    if (renderer) {
      try {
        renderer.dispose();
        renderer.forceContextLoss();
      } catch {
        // Ignore cleanup errors on already-lost WebGL contexts
      }
    }
  }

  return portraits;
}
