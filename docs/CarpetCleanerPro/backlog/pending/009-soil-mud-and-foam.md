# 009 — Implement soil chemistry, mud, and foam

## Outcome

Water, soap, agitation-ready soil states, sediment, mud coloration, dilution, and foam evolve through common material rules rather than tool-specific cleaning shortcuts.

## Dependencies

007 and 008.

## In scope

- Dissolution, suspension, settling, dilution, surfactant, and foam production/decay passes.
- Transfer between embedded, loose, dissolved, and sediment soil states.
- Muddy water and foam rendering sampled from those fields.
- Conservation tests for each reaction and transfer pass.

## Out of scope

Rotary agitation, drain removal, win conditions, and decorative fake particles.

## Acceptance criteria

- Water alone mobilizes loose soil but performs poorly on embedded soil.
- Soap changes later reaction efficiency without deleting soil.
- Added clean water dilutes dirty water while preserving total soil mass.
- Foam volume and appearance correspond to soap, water, agitation input, and decay state.

## Human review

Run controlled dry, water-only, soap-plus-water, and dilution scenarios; compare field views and mass accounting.

