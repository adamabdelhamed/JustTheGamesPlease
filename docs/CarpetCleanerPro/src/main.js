import { assertWebGpuSupport } from './platform/webGpuGate.js';
import { GAME_NAME } from './config/gameConfig.js';

const message = document.querySelector('#capability');

try {
  await assertWebGpuSupport();
  message.textContent = 'WebGPU ready. The fiber, fluid, grime, and drainage systems are being assembled.';
} catch (error) {
  document.documentElement.classList.add('unsupported');
  message.textContent = error.message;
}

gameAudio.preload([]);
gameAudio.playSharedMusic(['Music']);
gameAnalytics.pageLoaded(GAME_NAME);
