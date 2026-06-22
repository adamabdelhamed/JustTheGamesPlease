import * as THREE from 'three/webgpu';
import { createCleaningBayScene } from './cleaningBayScene.js';
import { createGpuSimulation } from '../simulation/gpuSimulation.js';
import { WORLD } from '../world/worldLayout.js';
import { createInputController } from '../input/inputController.js';

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

  const content = createCleaningBayScene(diagnostics);
  const simulation = createGpuSimulation(
    renderer.backend.device,
    diagnostics,
    inspection => content.setMaterialDebugView(inspection),
    fields => content.setCarpetFields(fields),
    update => content.updateSoapField(update)
  );
  await simulation.initialize();
  const input = createInputController({ canvas, container: document.querySelector('#game'), sceneContent: content, diagnostics });
  input.onPose(pose => {
    simulation.applyToolPose(pose);
    content.setToolPose(pose);
  });
  let animationFrame = 0;
  let disposed = false;
  let startedAt = performance.now();
  let previousFrame = startedAt;
  let renderedFrames = 0;
  let observedDpr = 0;
  let observedWidth = 0;
  let observedHeight = 0;
  let renderCap = 0;
  let lastRenderedAt = 0;

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
    content.resize(width, height);
    diagnostics.setViewport({ width, height, dpr });
  }

  async function frame(now) {
    if (disposed) return;
    resize();
    input.update(now);
    const elapsedSeconds = Math.min(1, (now - previousFrame) / 1000);
    simulation.advance(elapsedSeconds);
    const renderInterval = renderCap > 0 ? 1000 / renderCap : 0;
    if (renderInterval > 0 && now - lastRenderedAt + 0.1 < renderInterval) {
      previousFrame = now;
      animationFrame = requestAnimationFrame(frame);
      return;
    }
    content.update((now - startedAt) / 1000);
    const cpuStart = performance.now();
    await renderer.renderAsync(content.scene, content.camera);
    const cpuMs = performance.now() - cpuStart;
    renderedFrames += 1;
    diagnostics.updateFrame({ cpuMs, frameMs: now - previousFrame, renderedFrames });
    previousFrame = now;
    lastRenderedAt = now;
    animationFrame = requestAnimationFrame(frame);
  }

  diagnostics.setAdapter(adapterInfo);
  diagnostics.setWorld(WORLD);
  diagnostics.setStatus('RUNNING');
  const device = renderer.backend?.device;
  if (device?.lost) {
    device.lost.then(info => {
      if (!disposed) diagnostics.fail(`DEVICE LOST: ${info.message || info.reason}`);
    });
  }
  animationFrame = requestAnimationFrame(frame);

  return {
    simulation,
    input,
    setGeometryDiagnostics(visible) { content.setDiagnosticsVisible(visible); },
    setCarpetTestStates(visible) { content.setCarpetTestStates(visible); },
    selectTool(name) { content.setToolSelected(name); },
    projectScreenToWorkPlane(normalizedX, normalizedY, target) {
      return content.projectScreenToWorkPlane(normalizedX, normalizedY, target);
    },
    setRenderCap(fps) { renderCap = Number(fps) || 0; },
    dispose() {
      if (disposed) return;
      disposed = true;
      cancelAnimationFrame(animationFrame);
      content.dispose();
      simulation.dispose();
      input.dispose();
      renderer.dispose();
      diagnostics.setStatus('STOPPED');
    }
  };
}
