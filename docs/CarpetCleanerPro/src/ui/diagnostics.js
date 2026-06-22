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
    updateFrame({ cpuMs, frameMs, renderedFrames }) {
      state.set('Renderer', 'Three.js WebGPU r180');
      state.set('CPU render', `${cpuMs.toFixed(2)} ms`);
      state.set('Frame', `${frameMs.toFixed(2)} ms`);
      state.set('Frames', formatNumber(renderedFrames));
      render();
    }
  };
}

function formatNumber(value) {
  return Number.isFinite(value) ? value.toLocaleString() : 'unreported';
}
