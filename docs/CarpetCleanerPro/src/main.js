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
  wireDeveloperControls(runtime, diagnostics);
  wireToolControls(runtime);
} catch (error) {
  document.documentElement.classList.add('unsupported');
  message.textContent = error.message;
  diagnostics.fail(error.code ? error.code.toUpperCase() : 'DEVICE ERROR');
  console.error(error);
}

function wireToolControls(activeRuntime) {
  const soap = document.querySelector('#soapTool');
  function selectSoap() {
    soap.classList.add('selected');
    soap.setAttribute('aria-pressed', 'true');
    activeRuntime.selectTool('soap');
  }
  soap.addEventListener('click', selectSoap);
  addEventListener('keydown', event => { if (event.key === '1') selectSoap(); });
  selectSoap();
}

addEventListener('pagehide', () => runtime?.dispose(), { once: true });

gameAudio.preload([]);
gameAudio.playSharedMusic(['Music']);
gameAnalytics.pageLoaded(GAME_NAME);

function wireDeveloperControls(activeRuntime, panel) {
  const pause = document.querySelector('#simPause');
  pause.addEventListener('click', () => {
    const nextPaused = !activeRuntime.simulation.scheduler.paused;
    activeRuntime.simulation.setPaused(nextPaused);
    pause.textContent = nextPaused ? 'RESUME' : 'PAUSE';
  });
  document.querySelector('#simStep').addEventListener('click', () => activeRuntime.simulation.singleStep());
  const seed = document.querySelector('#worldSeed');
  document.querySelector('#simReset').addEventListener('click', () => activeRuntime.simulation.reset(Number(seed.value)));
  document.querySelector('#simTest').addEventListener('click', async event => {
    const button = event.currentTarget;
    button.disabled = true;
    button.textContent = 'TESTING…';
    const results = await activeRuntime.simulation.runDeterminismTest();
    panel.setTestResult(results);
    button.textContent = 'TEST 30/60/120';
    button.disabled = false;
    pause.textContent = 'RESUME';
  });
  document.querySelector('#renderCap').addEventListener('change', event => activeRuntime.setRenderCap(event.target.value));
  document.querySelector('#materialField').addEventListener('change', event => activeRuntime.simulation.inspectField(event.target.value));
  seed.addEventListener('change', event => activeRuntime.simulation.reset(Number(event.target.value)));
  document.querySelector('#geometryDiagnostics').addEventListener('click', event => {
    const visible = event.currentTarget.getAttribute('aria-pressed') !== 'true';
    event.currentTarget.setAttribute('aria-pressed', String(visible));
    activeRuntime.setGeometryDiagnostics(visible);
  });
  document.querySelector('#carpetStates').addEventListener('click', event => {
    const visible = event.currentTarget.getAttribute('aria-pressed') !== 'true';
    event.currentTarget.setAttribute('aria-pressed', String(visible));
    activeRuntime.setCarpetTestStates(visible);
  });
  document.querySelector('#inputDiagnostics').addEventListener('click', event => {
    const visible = event.currentTarget.getAttribute('aria-pressed') !== 'true';
    event.currentTarget.setAttribute('aria-pressed', String(visible));
    activeRuntime.input.setDiagnosticsVisible(visible);
  });
  document.querySelector('#inputTest').addEventListener('click', () => panel.setInputTestResult(activeRuntime.input.runPlaybackTest()));
}
