# 014 — Enforce performance budgets and release hardening

## Outcome

The first playable slice meets explicit GPU/CPU/frame-pacing budgets on target hardware without introducing quality fallbacks.

## Dependencies

012 and 013.

## In scope

- GPU timestamp instrumentation per compute/render pass and CPU timing dashboard.
- Memory/resource inventory, lifecycle tests, resize/reset soak tests, and lost-device handling.
- Optimize bottlenecks while preserving the WebGPU-only quality bar.
- Browser smoke-test checklist and documentation of supported environment requirements.

## Out of scope

WebGL/Canvas fallbacks, silent quality degradation, additional tools, and unrelated visual redesign.

## Acceptance criteria

- Target budgets are written down before optimization and measured afterward.
- No unbounded GPU resource growth across 20 resets, resize stress, or a ten-minute session.
- Frame pacing and simulation stability remain acceptable during maximum tool/fluid load.
- Device loss produces a recoverable, actionable state rather than a frozen canvas.
- All prior human review scripts still pass.

## Human review

Run the documented stress scene, resize/reset soak, ten-minute session, and supported-browser smoke test; review captured timing and memory evidence.

