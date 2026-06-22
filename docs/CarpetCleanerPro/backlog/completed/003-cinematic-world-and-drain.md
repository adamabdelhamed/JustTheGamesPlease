# 003 — Create the cinematic room, floor, rug, and drain

## Outcome

The placeholder becomes a high-quality fixed-camera 3D cleaning bay with physically coherent scale, lighting, scenery, floor slope, rug placement, and drain geometry.

## Dependencies

001.

## In scope

- Fixed cinematic camera and stable screen-to-work-plane mapping.
- PBR floor, walls/background scenery, rug volume, trench drain, grate, and drain interior.
- Physically plausible key/fill lighting and soft shadows.
- Shared world dimensions and surface classification queried by simulation and input.

## Out of scope

Fluid, dirt, fibers, tool rigs, decorative particles, and camera controls.

## Acceptance criteria

- Rug, surrounding floor, slope direction, and drain read clearly without labels.
- Drain is modeled as an intake volume beneath a grate, not a painted texture.
- Camera framing remains usable across supported landscape viewport sizes.
- Developer overlay can visualize world axes, dimensions, carpet boundary, floor slope, and drain region.

## Human review

Inspect desktop and landscape-mobile sizes; toggle geometry diagnostics; confirm the entire rug-to-drain path stays reachable.

## Completion notes

Completed 2026-06-22.

- Added a renderer-independent, deeply frozen meter-based world layout with floor height, surface classification, and reachable-surface queries for later simulation and input consumers.
- Built a 22×14 m cleaning bay with a 1.8% physical floor slope toward the trench drain, room walls, curb, raised rug volume, and fixed cinematic camera.
- Modeled the drain as a 1.15×9.8×0.72 m cavity and dark intake beneath metallic rails and 48 instanced grate bars.
- Added TSL/PBR materials, ACES-managed key/fill/hemisphere lighting, 2048 px soft shadow mapping, fog, and scene resource disposal.
- Added stable normalized-screen-to-sloped-work-plane projection without camera controls.
- Added a developer overlay for world axes, rug bounds, drain intake volume, dimension lines, and downhill direction; dimensions are also reported numerically.
- Browser visual review passed at 1952×912 desktop and 900×520 landscape. The unobstructed view retains the full rug, floor path, and drain.
- The compiled scene stabilized around 0.6–1.2 ms CPU render time on the validation machine and emitted no console warnings.
- World-layout assertions, JavaScript syntax checks, and `git diff --check` passed. The repository has no Visual Studio solution to build.

### Post-review correction

- Replaced the continuous floor beneath the drain with four sloped floor sections surrounding a real opening.
- Rebuilt the trench as separate walls, bottom, and a recessed dark intake so grate gaps reveal drain depth rather than concrete.
