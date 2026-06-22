const IMPORTANT_LIMITS = ['maxTextureDimension2D', 'maxStorageBufferBindingSize', 'maxComputeWorkgroupStorageSize'];

export function createDiagnosticsPanel() {
  const root = document.querySelector('#diagnostics');
  const status = document.querySelector('#diagStatus');
  const values = document.querySelector('#diagValues');
  const enabled = new URLSearchParams(location.search).get('dev') === '1';
  root.hidden = !enabled;
  const state = new Map();
  let lastPaint = 0;

  function render(force = false) {
    const now = performance.now();
    if (!force && now - lastPaint < 200) return;
    lastPaint = now;
    values.replaceChildren(...[...state].flatMap(([label, value]) => {
      const term = document.createElement('dt');
      const detail = document.createElement('dd');
      term.textContent = label;
      detail.textContent = value;
      return [term, detail];
    }));
  }

  return {
    setStatus(value) { status.textContent = value; status.classList.remove('error'); },
    fail(value) { status.textContent = value; status.classList.add('error'); },
    setAdapter(info) {
      state.set('Adapter', info.description);
      for (const name of IMPORTANT_LIMITS) state.set(name, formatNumber(info.limits[name]));
      render(true);
    },
    setViewport({ width, height, dpr }) {
      state.set('Viewport', `${width} × ${height}`);
      state.set('DPR', dpr.toFixed(2));
      render(true);
    },
    setWorld({ floor, rug, drain }) {
      state.set('World units', 'meters');
      state.set('Floor / slope', `${floor.width}×${floor.depth} / ${(floor.slope * 100).toFixed(1)}%`);
      state.set('Rug', `${rug.width}×${rug.depth}`);
      state.set('Drain intake', `${drain.width}×${drain.depth}×${drain.intakeDepth}`);
      render(true);
    },
    updateFrame({ cpuMs, frameMs, renderedFrames }) {
      state.set('Renderer', 'Three.js WebGPU r180');
      state.set('CPU render', `${cpuMs.toFixed(2)} ms`);
      state.set('Frame', `${frameMs.toFixed(2)} ms`);
      state.set('Frames', formatNumber(renderedFrames));
      render();
    },
    setSimulation({ paused, tick, checksum, droppedSeconds, passNames }) {
      state.set('Simulation', paused ? 'PAUSED' : 'RUNNING');
      state.set('Tick', formatNumber(tick));
      state.set('Checksum', checksum);
      state.set('Dropped time', `${droppedSeconds.toFixed(3)} s`);
      state.set('Compute passes', passNames.join(' → '));
      render();
    },
    setTestResult(results) {
      state.set('Determinism', results.map(result => `${result.renderFps}:${result.tick}/${result.checksum}`).join(' | '));
      render(true);
    }
  };
}

function formatNumber(value) {
  return Number.isFinite(value) ? value.toLocaleString() : 'unreported';
}
