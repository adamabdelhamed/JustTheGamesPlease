import { assertWebGpuSupport } from './platform/webGpuGate.js';
import { GAME_NAME } from './config/gameConfig.js';
import { createWebGpuRuntime } from './rendering/webGpuRuntime.js';
import { createDiagnosticsPanel } from './ui/diagnostics.js';

const message = document.querySelector('#capability');
const diagnostics = createDiagnosticsPanel();
let runtime;

try {
  const support = await assertWebGpuSupport();
  runtime = await createWebGpuRuntime({
    canvas: document.querySelector('#scene'),
    diagnostics,
    adapterInfo: support.info
  });
  message.textContent = 'WebGPU runtime ready.';
  document.documentElement.classList.add('runtime-ready');
} catch (error) {
  document.documentElement.classList.add('unsupported');
  message.textContent = error.message;
  diagnostics.fail(error.code ? error.code.toUpperCase() : 'DEVICE ERROR');
  console.error(error);
}

addEventListener('pagehide', () => runtime?.dispose(), { once: true });

gameAudio.preload([]);
gameAudio.playSharedMusic(['Music']);
gameAnalytics.pageLoaded(GAME_NAME);
