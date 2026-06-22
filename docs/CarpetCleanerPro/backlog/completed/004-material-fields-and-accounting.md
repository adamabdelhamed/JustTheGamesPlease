# 004 — Define authoritative material fields and accounting

## Outcome

GPU state represents carpet and floor materials with explicit units, legal ranges, initialization, transport ownership, and mass accounting.

## Dependencies

002.

## In scope

- Field schema for free water, carpet saturation, embedded/loose soil, dissolved soil, sediment, soap, foam, and velocity.
- Surface masks and deterministic seeded initialization.
- Injection, current, drained, extracted, and residual accounting.
- False-color field inspector and numeric mass dashboard.

## Out of scope

Material reactions, flow, final shading, and playable tools.

## Acceptance criteria

- Every field has documented units, range, and ownership.
- Resetting a seed reproduces field checksums and total mass.
- Diagnostics can inspect every field individually.
- Empty update ticks preserve mass within the documented tolerance.

## Human review

Cycle all field views, reset two seeds twice, and verify matching totals/checksums and stable residuals.

## Completion notes

Completed 2026-06-22.

- Added a documented 512×320 GPU structure-of-arrays schema for free water, carpet saturation, embedded soil, loose soil, dissolved soil, sediment, soap, foam, and two-component velocity.
- Added immutable GPU surface topology with outside, floor, carpet, and drain classifications generated from the shared world layout.
- Added deterministic seeded soil initialization and GPU buffers with storage/copy ownership appropriate for future compute passes.
- Added per-conserved-field ledgers for initial, injected, current, drained, extracted, and residual quantities with a documented `1e-5 kg` empty-pass tolerance.
- Added on-demand asynchronous diagnostic readback, bitwise checksums, and a false-color WebGPU texture overlay that follows both the sloped floor and raised rug.
- Added developer selectors for every field, topology, and two repeatable world seeds; diagnostics show units, range, write owner, checksum, totals, and residual.
- All ten inspectable views rendered successfully with no browser warnings.
- Seed A reproduced checksum `a171adc7` and 193.53473 kg twice; Seed B reproduced `9282b7c5` and 193.44952 kg twice.
- After hundreds of empty ticks, current mass equaled initial mass and residual remained `0.00e+0 kg`.
- JavaScript syntax checks and `git diff --check` passed. The repository has no Visual Studio solution to build.
