import { StrokePipeline, runStrokePlaybackTest } from './strokePipeline.js';

export function createInputController({ canvas, container, sceneContent, diagnostics }) {
  const rawPoints = [];
  const pipeline = new StrokePipeline(pose => sceneContent.addInputPose(pose));
  const pointer = { id: null, down: false };
  const left = { x: 0, y: 0, active: false, ended: true };
  const right = { x: 0, y: 0 };
  const virtualCursor = { x: -0.18, y: -0.05 };
  let lastNow = performance.now();

  const leftStick = gameController.createJoystick({
    container,
    element: document.querySelector('#leftStick'),
    enabled: () => true,
    radius: 68,
    orientationLayout: { portrait: { x: 94, yFromBottom: 112 }, landscape: { x: 112, yFromBottom: 118 } },
    recenterRadius: { portrait: 105, landscape: 145 },
    drift: { enabled: true, maxOffset: 34, smoothing: 0.2 }
  });
  leftStick.onChange(input => {
    left.x = input.x; left.y = input.y;
    if (input.magnitude > 0.001) { left.active = true; left.ended = false; }
    else if (left.ended) left.active = false;
  });
  leftStick.onEnd(() => { left.ended = true; endVirtualStroke(); });

  const rightStick = gameController.createJoystick({
    container,
    element: document.querySelector('#rightStick'),
    enabled: () => true,
    radius: 64,
    orientationLayout: { portrait: { xFromRight: 94, yFromBottom: 112 }, landscape: { xFromRight: 112, yFromBottom: 118 } },
    recenterRadius: { portrait: 105, landscape: 145 },
    drift: { enabled: true, maxOffset: 30, smoothing: 0.2 }
  });
  rightStick.onChange(input => { right.x = input.x; right.y = input.y; });
  rightStick.onEnd(() => { right.x = right.y = 0; });

  function addWorldSample(world, time, pressure, contact, source) {
    if (!world) return;
    const sample = pipeline.addSample({ time, x: world.x, y: world.y, z: world.z, pressure, contact, source });
    rawPoints.push(sample);
    if (rawPoints.length > 180) rawPoints.shift();
    sceneContent.addRawInput(sample);
  }

  function normalizedPointer(event) {
    const rect = canvas.getBoundingClientRect();
    return { x: (event.clientX - rect.left) / rect.width * 2 - 1, y: -(event.clientY - rect.top) / rect.height * 2 + 1 };
  }

  function pointerDown(event) {
    if (event.pointerType === 'touch' || event.button !== 0 || event.target !== canvas) return;
    pointer.id = event.pointerId; pointer.down = true;
    canvas.setPointerCapture(event.pointerId);
    const ndc = normalizedPointer(event);
    addWorldSample(sceneContent.projectScreenToWorkPlane(ndc.x, ndc.y), performance.now(), event.pressure || 0.5, true, 'pointer');
  }

  function pointerMove(event) {
    if (event.pointerType === 'touch') return;
    if (!pointer.down) {
      sceneContent.nudgeCamera(event.movementX || 0, event.movementY || 0);
      return;
    }
    if (event.pointerId !== pointer.id) return;
    const events = event.getCoalescedEvents?.() || [event];
    for (const item of events) {
      const ndc = normalizedPointer(item);
      addWorldSample(sceneContent.projectScreenToWorkPlane(ndc.x, ndc.y), performance.now(), item.pressure || 0.5, true, 'pointer');
    }
  }

  function pointerEnd(event, cancelled) {
    if (event.pointerId !== pointer.id) return;
    const ndc = normalizedPointer(event);
    addWorldSample(sceneContent.projectScreenToWorkPlane(ndc.x, ndc.y), performance.now(), 0, false, cancelled ? 'pointer-cancel' : 'pointer');
    pointer.id = null; pointer.down = false;
  }

  function endVirtualStroke() {
    if (!left.active) return;
    left.active = false;
    const world = sceneContent.projectScreenToWorkPlane(virtualCursor.x, virtualCursor.y);
    addWorldSample(world, performance.now(), 0, false, 'left-stick');
  }

  canvas.addEventListener('pointerdown', pointerDown);
  canvas.addEventListener('pointermove', pointerMove);
  canvas.addEventListener('pointerup', event => pointerEnd(event, false));
  canvas.addEventListener('pointercancel', event => pointerEnd(event, true));
  canvas.addEventListener('lostpointercapture', event => pointerEnd(event, true));

  return {
    update(now) {
      const dt = Math.min(0.05, (now - lastNow) / 1000);
      lastNow = now;
      sceneContent.applyCameraControl(right.x, right.y, dt);
      if (left.active) {
        virtualCursor.x = clamp(virtualCursor.x + left.x * dt * 0.92, -0.9, 0.9);
        virtualCursor.y = clamp(virtualCursor.y - left.y * dt * 0.92, -0.78, 0.7);
        addWorldSample(sceneContent.projectScreenToWorkPlane(virtualCursor.x, virtualCursor.y), now, 0.72, true, 'left-stick');
      }
      pipeline.advanceTo(now);
      diagnostics.setInputMetrics({ ...pipeline.metrics(), source: pointer.down ? 'mouse drag' : left.active ? 'left stick' : Math.hypot(right.x, right.y) > 0.01 ? 'right stick' : 'idle', camera: sceneContent.cameraState() });
    },
    setDiagnosticsVisible(visible) { sceneContent.setInputDiagnosticsVisible(visible); },
    runPlaybackTest() { return runStrokePlaybackTest(); },
    cancel() {
      if (pointer.down) {
        pointer.down = false; pointer.id = null;
        pipeline.reset(); sceneContent.resetInputDiagnostics();
      }
    },
    dispose() {
      canvas.removeEventListener('pointerdown', pointerDown);
      canvas.removeEventListener('pointermove', pointerMove);
    }
  };
}

function clamp(value, minimum, maximum) { return Math.max(minimum, Math.min(maximum, value)); }
