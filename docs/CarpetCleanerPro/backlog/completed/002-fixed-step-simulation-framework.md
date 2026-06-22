# 002 — Build the fixed-step simulation framework

## Outcome

A deterministic simulation scheduler and compute-pass contract run independently from rendering cadence.

## Dependencies

001.

## In scope

- Fixed 60 Hz simulation clock with bounded catch-up and pause/resume behavior.
- GPU ping-pong resource ownership and ordered compute-pass interfaces.
- Seeded world initialization, diagnostic pause/single-step/reset controls, and simulation tick display.
- A small proof field whose checksum can be compared across runs.

## Out of scope

Real materials, carpet physics, fluid equations, and tools.

## Acceptance criteria

- The same seed and input script produce the same diagnostic checksum at 30, 60, and 120 render FPS.
- Long frame gaps are bounded and reported rather than causing a spiral of death.
- Pause, single-step, and reset are observable in the developer panel.
- Rendering consumes simulation output without owning or advancing it.

## Human review

Run the deterministic test at three render caps and compare tick counts and checksums; pause and single-step five ticks.

## Completion notes

Completed 2026-06-22.

- Added a pure fixed-step scheduler running at 60 Hz with four-step bounded catch-up, pause/resume, single-step, reset, tick count, and dropped-time accounting.
- Added a seeded 1,024-cell unsigned-integer GPU proof field with explicit ping-pong storage-buffer ownership and an ordered compute-pass contract.
- Added sparse asynchronous checksum readback; rendering never reads back or advances simulation state.
- Added developer controls for pause, step, reset, 30/60/120/display render caps, and an automated cadence-independence test.
- The cadence test produced tick 120 and checksum `b511f385` at 30, 60, and 120 simulated render FPS.
- Pause remained at tick 0 until five explicit steps advanced it to tick 5; it remained stable afterward.
- A forced 500 ms frame gap reported 0.434 seconds dropped and resumed normally with catch-up bounded to four steps.
- Chrome 149 WebGPU validation emitted no console warnings or errors.
- JavaScript syntax checks and `git diff --check` passed. The repository has no Visual Studio solution to build.
