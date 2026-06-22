import * as THREE from 'three/webgpu';
import { createDiagnosticScene } from './diagnosticScene.js';

const MAX_DPR = 2;

export async function createWebGpuRuntime({ canvas, diagnostics, adapterInfo }) {
  const renderer = new THREE.WebGPURenderer({ canvas, antialias: true, alpha: false });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;

  try {
    await renderer.init();
  } catch (cause) {
    throw new Error('The WebGPU device could not be initialized by the renderer. Check GPU drivers and browser GPU settings.', { cause });
  }

  const content = createDiagnosticScene();
  let animationFrame = 0;
  let disposed = false;
  let startedAt = performance.now();
  let previousFrame = startedAt;
  let renderedFrames = 0;
  let observedDpr = 0;
  let observedWidth = 0;
  let observedHeight = 0;

  function resize() {
    const width = Math.max(1, canvas.clientWidth);
    const height = Math.max(1, canvas.clientHeight);
    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    if (width === observedWidth && height === observedHeight && dpr === observedDpr) return;
    observedWidth = width;
    observedHeight = height;
    observedDpr = dpr;
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height, false);
    content.camera.aspect = width / height;
    content.camera.updateProjectionMatrix();
    diagnostics.setViewport({ width, height, dpr });
  }

  async function frame(now) {
    if (disposed) return;
    resize();
    content.update((now - startedAt) / 1000);
    const cpuStart = performance.now();
    await renderer.renderAsync(content.scene, content.camera);
    const cpuMs = performance.now() - cpuStart;
    renderedFrames += 1;
    diagnostics.updateFrame({ cpuMs, frameMs: now - previousFrame, renderedFrames });
    previousFrame = now;
    animationFrame = requestAnimationFrame(frame);
  }

  diagnostics.setAdapter(adapterInfo);
  diagnostics.setStatus('RUNNING');
  const device = renderer.backend?.device;
  if (device?.lost) {
    device.lost.then(info => {
      if (!disposed) diagnostics.fail(`DEVICE LOST: ${info.message || info.reason}`);
    });
  }
  animationFrame = requestAnimationFrame(frame);

  return {
    dispose() {
      if (disposed) return;
      disposed = true;
      cancelAnimationFrame(animationFrame);
      content.dispose();
      renderer.dispose();
      diagnostics.setStatus('STOPPED');
    }
  };
}
