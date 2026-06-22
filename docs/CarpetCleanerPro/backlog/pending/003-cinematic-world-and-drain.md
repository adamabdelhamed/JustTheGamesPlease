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

