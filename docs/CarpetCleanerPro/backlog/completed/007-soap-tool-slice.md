# 007 — Deliver the soap applicator vertical slice

## Outcome

Players can select and naturally move a rendered soap applicator that deposits conserved soap into the authoritative simulation.

## Dependencies

004, 005, and 006.

## In scope

- Toolbox selection and keyboard shortcut.
- High-fidelity applicator rig, contact pose, and deposition footprint.
- Pressure/speed-aware but time-normalized soap injection.
- Soap field visualization and usage accounting.
- Satisfying pour that is demonstrably superior to the original prototype.

## Out of scope

Foam generation, cleaning benefit, water, and final audio.

## Acceptance criteria

- Deposited soap mass matches tracked injected mass within tolerance.
- Equal-duration equivalent strokes deposit consistently across input and render rates.
- Applicator remains visually attached to the sampled contact pose.
- Soap cannot be deposited outside valid world surfaces.

## Human review

Select soap, apply lines and circles at several speeds, inspect the field view and accounting, and repeat with recorded input.

## Completion notes

Completed 2026-06-22.

- Added a selected soap toolbox control with keyboard shortcut `1` and shared pose routing from mouse/pen drag or the mobile left stick.
- Added a detailed translucent bottle, internal liquid volume, metal neck/spout, tapered glossy stream, and pulsing contact ring attached to the resampled tool pose.
- Added a field-derived glossy turquoise soap surface that follows both the sloped floor and raised carpet rather than relying on decorative particles.
- Added pressure- and speed-aware 120 Hz mass footprints with normalized compact-support weighting across valid carpet/floor cells.
- Added a fixed-tick GPU soap-source pass that merges overlapping cell writes, updates only the soap field, and records exact submitted mass in the authoritative ledger.
- A browser drag submitted 0.05895 kg, read back 0.05895 kg from the GPU field, and produced a `-7.10e-11 kg` residual.
- The recorded input fixture deposited exactly 0.059172 kg at 30, 60, and 120 FPS.
- Unit validation confirmed footprint cell mass sums to requested mass within `1e-18 kg` and outside-world poses produce no entries or mass.
- Fixed terminal pose handling so pointer release/cancel always stops the active pour and contact state.
- Browser validation emitted no console warnings. JavaScript syntax, conservation, invalid-surface, release, and cadence tests passed.

### Post-review correction

- Corrected the simulation-grid V axis for soap, material diagnostics, and carpet field sampling so rendered accumulation matches world-space deposition.
- Shifted the applicator assembly so the nozzle, stream, impact ring, and authoritative deposition pose share the same contact point.
- Replaced the flat soap overlay with a concentration-driven displaced gel surface using alpha, bump, transmission, thickness, IOR, and clearcoat maps sourced from the soap field.
- Removed readback latency from active pouring: queued source footprints now update the gel on the next animation frame, while generation-checked GPU readback reconciles the final authoritative state without stale visual rollbacks.
