# Carpet Cleaner Pro engineering contract

## Product standard

This game is a WebGPU-only, high-fidelity successor to Carpet Calm. Do not preserve compatibility by weakening rendering, simulation resolution, or interaction quality. Unsupported hardware gets a clear capability message.

## Architecture

- `src/simulation` owns authoritative state, material conservation, fixed-step compute passes, carpet/floor boundaries, slope, and drain removal.
- `src/rendering` visualizes simulation state with Three.js WebGPURenderer and TSL. Visual effects may enrich presentation but must not imply false cleaning or fluid transport.
- `src/input` converts high-frequency pointer events into stable, time-based world-space strokes.
- `src/tools` converts strokes into simulation sources and forces; tools never directly change progress.
- `src/platform` owns capability checks and WebGPU device lifecycle.
- `src/config` contains explicit quality and gameplay constants. Avoid scattered magic numbers.

Use ES modules with narrow responsibilities. Keep the entry point orchestration-only. Simulation modules must not query the DOM; rendering modules must not own gameplay state.

## Technical decisions

- Require WebGPU and a high-performance adapter. Do not add WebGL, Canvas 2D, reduced-resolution, or software fallbacks.
- Use Three.js WebGPURenderer and TSL for render and compute pipelines. Pin the library version when introduced; do not import an unversioned CDN URL.
- Run simulation on a fixed timestep independent of frame rate and input event frequency.
- Prefer structure-of-arrays GPU fields and ping-pong storage textures. Document units and conservation behavior for every field.
- Treat the drain as geometry plus simulation boundary conditions: it must receive transported mass, account for removal, and visibly respond to flow.
- Keep the camera fixed. Spend interaction complexity on natural tool pose, pressure, direction, and contact.
- Profile GPU passes before lowering quality. Record target budgets and measured timings alongside performance changes.

## Slice discipline

Build one validated vertical slice at a time. Every slice should preserve the intended final architecture, include a visible diagnostic mode, and expose enough metrics to validate simulation rather than judging only by appearance.

## Integration

Use the shared top bar, audio, and analytics libraries. Keep the top-level entry point at `docs/CarpetCleanerPro.html`. Build or run the repository's available validation after changes; this repository currently has no Visual Studio solution.
