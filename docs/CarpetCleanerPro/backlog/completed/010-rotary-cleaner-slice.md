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

## Completion notes

- Added a selectable rotary machine with a lagged handle, spinning brush head, contact foam ring, desktop/touch control, and keyboard shortcut 3.
- Added a GPU radial-agitation source that injects tangential momentum, releases embedded soil into the conserved loose-soil state, and transfers soap into foam. The tool never deletes dirt.
- Prepared and dry seeded comparisons used identical 150-pose passes. Soap/water preparation released 1.07182 kg of embedded soil; dry misuse released 0.00959 kg, making the prepared pass approximately 112Ã— more effective.
- Total soil remained 532.1852 kg through the prepared test. Rotary diagnostics reported 29.12 accumulated agitation, and browser validation reported no WebGPU errors.
- JavaScript syntax checks passed for all game modules. Drain transport remains deferred to 011.
