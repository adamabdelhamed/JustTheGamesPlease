# 006 — Build the buttery pointer stroke pipeline

## Outcome

Mouse, pen, and touch input produce smooth, frame-rate-independent world-space tool poses with position, orientation, velocity, pressure, and contact state.

## Dependencies

002 and 003.

## In scope

- Pointer capture and coalesced-event ingestion.
- Time-based resampling, calibrated smoothing, velocity/orientation derivation, and work-surface projection.
- Deterministic stroke playback fixture.
- Developer visualization of raw samples, resampled path, pose, latency, and event rate.

## Out of scope

Specific tools, camera gestures, and simulation material effects.

## Acceptance criteria

- Fast and slow strokes stay continuous with no gaps or event-rate-dependent distance.
- Replayed strokes generate identical pose samples under multiple render frame caps.
- Pointer loss/cancel never leaves contact active.
- Smoothing adds no more than the documented latency budget.

## Human review

Draw slow curves, fast zigzags, and edge-crossing strokes with diagnostics enabled; replay at three frame caps.

