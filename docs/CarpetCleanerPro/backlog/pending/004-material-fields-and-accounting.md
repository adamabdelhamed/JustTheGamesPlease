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

