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

## Completion notes

Completed 2026-06-22.

- Added deterministic 1024×640 procedural Geometric Medallion, Persian Garden, and Modern Contour families with multiple palettes and fine seeded yarn variation.
- Added 30,800 individually positioned, oriented, scaled, and colored WebGPU pile instances totaling 246,400 pile triangles.
- Added rough pile shading, directional variation, wet darkening/thickening, dirt coverage, and compression/recovery-ready instance transforms.
- Carpet visuals consume authoritative embedded-soil and carpet-saturation readbacks at reset and map them through shared world/grid coordinates without UV drift.
- Added a four-region diagnostic showing clean, wet, dirty, and compressed pile states simultaneously.
- Added quality diagnostics for pattern family/checksum, pile instances, triangle count, and current field/test state.
- Seed A reproduced Modern Contour checksum `3321b9f8`; the selected seed set visibly covered all three pattern families.
- Desktop and 900×520 landscape-mobile reviews showed sharp pattern edges and visible pile depth without canvas pixelation.
- Steady-state CPU render submission measured approximately 0.7–1.1 ms on the validation machine with no browser warnings.
- JavaScript syntax checks, deterministic pattern assertions, and `git diff --check` passed. The repository has no Visual Studio solution to build.
