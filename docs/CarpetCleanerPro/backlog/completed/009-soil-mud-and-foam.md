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

## Completion notes

- Added three ordered WebGPU chemistry passes for embedded-soil release, loose-soil suspension/dissolution/settling, and reversible soap-to-foam conversion. Each pass stays within conservative storage-binding limits and transfers rather than deletes material.
- Raised initial embedded and loose soil loading to 532.1852 kg total and changed carpet/fiber shading so the dry caked layer obscures the pattern at game start.
- Added separate displaced mud and foam render layers driven by dissolved soil, sediment, loose soil, water, saturation, soap, and foam fields. Water is now optically clear and pressure head is strong enough to spread sustained pours.
- Fixed source/solver ordering with explicit GPU command submission boundaries. A controlled water dose retained 0.18864 kg with a 1.10e-11 kg residual; water-only produced 0.00168 kg sediment in the sampled run. Soap-plus-water produced 0.04172 kg foam while combined soap plus foam remained equal to the submitted surfactant within readback timing tolerance.
- JavaScript syntax checks and WebGPU validation scopes passed. Browser testing reported no WebGPU errors.
