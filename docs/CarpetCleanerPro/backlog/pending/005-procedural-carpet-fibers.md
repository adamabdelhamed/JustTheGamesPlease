# 005 — Render procedural carpet fibers and patterns

## Outcome

The rug has close-up fiber depth, procedural pattern variety, pile response, wetness response, and dirt coverage driven by authoritative fields.

## Dependencies

003 and 004.

## In scope

- Seeded pattern/palette generation with at least three distinct pattern families.
- GPU-instanced or shader-based fibers with pile direction, compression, roughness, and wet darkening.
- Dirt and moisture visualization sampled from simulation fields.
- Quality diagnostics for fiber density and overdraw.

## Out of scope

Fluid surface rendering, foam, tool contact, and cleaning reactions.

## Acceptance criteria

- Patterns remain sharp at the fixed camera distance without visible canvas-texture pixels.
- Wet, dirty, clean, and compressed test regions are visually distinguishable.
- Field changes alter the same physical rug locations without UV drift.
- Pattern generation is deterministic by seed.

## Human review

Compare three seeds and the four diagnostic material states at desktop and landscape-mobile sizes.

