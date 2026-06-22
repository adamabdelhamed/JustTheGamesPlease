# 008 — Simulate water, slope flow, and pooling

## Outcome

The hose adds directional water and momentum; water flows downhill, pools at boundaries, wets carpet, and renders as a coherent fluid surface.

## Dependencies

004, 005, and 006.

## In scope

- Hose rig, aiming, spray footprint, and water/momentum sources.
- Stable shallow-water approximation across carpet and floor with different permeability/friction.
- Carpet absorption/release and rug-edge boundary behavior.
- Water depth, velocity, and saturation rendering with physically coherent highlights/refraction.

## Out of scope

Soil mixing, foam, drain removal, splash decoration unrelated to state, and final audio.

## Acceptance criteria

- Injected water is accounted for and remains conserved before drainage exists.
- Water visibly follows floor slope and pools against valid barriers.
- Carpet saturation and free surface water are distinct states.
- Solver stays stable under maximum hose input and bounded catch-up.

## Human review

Spray rug center, edge, and floor uphill from the drain; inspect depth/velocity fields and mass residual under sustained input.

