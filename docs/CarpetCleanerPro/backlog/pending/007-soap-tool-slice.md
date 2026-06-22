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

## Out of scope

Foam generation, cleaning benefit, water, and final audio.

## Acceptance criteria

- Deposited soap mass matches tracked injected mass within tolerance.
- Equal-duration equivalent strokes deposit consistently across input and render rates.
- Applicator remains visually attached to the sampled contact pose.
- Soap cannot be deposited outside valid world surfaces.

## Human review

Select soap, apply lines and circles at several speeds, inspect the field view and accounting, and repeat with recorded input.

