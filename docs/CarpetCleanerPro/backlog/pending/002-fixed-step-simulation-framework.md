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

