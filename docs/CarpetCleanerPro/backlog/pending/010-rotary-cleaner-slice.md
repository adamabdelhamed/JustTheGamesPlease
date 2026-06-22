# 010 — Deliver the rotary cleaner vertical slice

## Outcome

A responsive rotary machine applies visible fiber compression, agitation, mixing, and soil release through the shared simulation.

## Dependencies

006 and 009.

## In scope

- High-fidelity rotary rig with handle lag, spinning head, contact, and cable/hose treatment if visible.
- Radial agitation and velocity input coupled to contact, movement, and field state.
- Fiber compression/recovery and wet foam/mud displacement under the head.
- Tool effectiveness and simulation diagnostics.

## Out of scope

Direct dirt deletion, final audio polish, drain behavior, and completion flow.

## Acceptance criteria

- The rotary releases embedded soil only through simulation reactions.
- Head motion is smooth and remains in contact through fast pointer paths.
- Dry misuse is visibly and numerically less effective than correct preparation.
- Total soil remains conserved while changing state/location.

## Human review

Compare dry, water-only, and soap-plus-water passes over identical seeded test strips; inspect soil states and residuals.

