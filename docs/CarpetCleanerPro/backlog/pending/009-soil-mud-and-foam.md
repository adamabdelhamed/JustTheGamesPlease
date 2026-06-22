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
- This is the most critical feature of the game. The mud must be very convincing. Carpets must be extremely dirty at the initial state. So dirty that you can't even see the pattern below it. A significant, thick, caked on layer of filth.

## Out of scope

Rotary agitation, drain removal, win conditions, and decorative fake particles.

## Acceptance criteria

- Water alone mobilizes loose soil but performs poorly on embedded soil.
- Soap changes later reaction efficiency without deleting soil.
- Added clean water dilutes dirty water while preserving total soil mass.
- Foam volume and appearance correspond to soap, water, agitation input, and decay state.
- The initial caked-soil layer substantially obscures the carpet pattern, then reveals it continuously as soil transfers into visibly volumetric mud and foam.
- Side-by-side water-only and soap-plus-water tests are immediately distinguishable in mud viscosity, soil suspension, foam structure, and cleaning efficiency.

## Human review

Run controlled dry, water-only, soap-plus-water, and dilution scenarios; compare field views and mass accounting.
