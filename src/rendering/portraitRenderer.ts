import * as THREE from 'three';
import type { FootballerProfile, KitTheme } from '../types/game';
import { createFootballerRig, disposeCharacterRig } from './characterBuilder';

const PORTRAIT_WIDTH = 300;
const PORTRAIT_HEIGHT = 320;

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
    renderer.toneMappingExposure = 1.14;

    const scene = new THREE.Scene();

    // Soft studio hemisphere fill for balanced ambient shading across light & dark cards
    const hemiLight = new THREE.HemisphereLight(0xf8fafc, 0x334155, 1.05);
    scene.add(hemiLight);

    // Warm front-left key light for sculptural facial illumination
    const keyLight = new THREE.DirectionalLight(0xfff5e4, 2.25);
    keyLight.position.set(-2.1, 2.7, 3.2);
    scene.add(keyLight);

    // Champagne-gold back-right rim light to separate dark hair & kits from obsidian cards
    const goldRimLight = new THREE.DirectionalLight(0xfde68a, 1.85);
    goldRimLight.position.set(2.4, 2.35, -2.35);
    scene.add(goldRimLight);

    // Subtle cool back-left edge rim for crisp shoulder & hair silhouette separation
    const coolRimLight = new THREE.DirectionalLight(0xbae6fd, 1.1);
    coolRimLight.position.set(-2.35, 2.05, -2.4);
    scene.add(coolRimLight);

    // Gentle front-right bounce fill to keep shadow side clean without flattening depth
    const fillLight = new THREE.DirectionalLight(0xe2e8f0, 0.5);
    fillLight.position.set(1.9, 1.4, 2.5);
    scene.add(fillLight);

    const camera = new THREE.PerspectiveCamera(
      25,
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

        // Frame consistently across all 18 heights (170cm–200cm) with clean headroom & balanced shoulders
        const h = rig.heightScale;
        const { hairStyle, build } = profile.appearance;
        const extraHeadroom =
          hairStyle === 'curly_voluminous' || hairStyle === 'topknot_bun'
            ? 0.028
            : hairStyle === 'curly_highlighted' || hairStyle === 'slick_undercut'
              ? 0.016
              : 0;
        const buildPullback = build === 'towering' || build === 'stocky' ? 0.03 : 0;

        const lookY = (1.56 + extraHeadroom) * h;
        const camY = (1.62 + extraHeadroom) * h;
        const camZ = (1.62 + extraHeadroom * 1.3 + buildPullback) * h;

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
