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

## Completion notes

- Added a WebGPU gather-based shallow-water pass with carpet/floor mobility, slope-driven transport, carpet absorption/release, and ping-pong free-water, saturation, and velocity fields.
- Added a hose tool with immediate contact feedback and an authoritative field-driven glossy water surface. Source injection is isolated from transport by one fixed tick to prevent a GPU write-after-write hazard.
- Browser validation retained 0.89997 kg of 0.89997 kg injected after 304 ticks; combined free-plus-absorbed residual was 1.85e-9 kg. No WebGPU errors were reported.
- JavaScript syntax validation passed for every source module. Drain removal remains intentionally deferred to 011; soil, mud, and foam reactions remain in 009.
- Follow-up correction: source previews are protected from pre-commit GPU readbacks for both soap and water; transport is deferred on any source-write tick, and carpet absorption was tuned so visible free water can accumulate before soaking in.
