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
- Reuse the shared controller library to provide two mobile touch joysticks.
- Left joystick moves and operates the current tool through the same stroke pipeline as pointer input.
- Right joystick moves the fixed camera within a constrained viewer-side ellipse: up zooms in, down zooms out, and horizontal input swings around the work area.
- Desktop mouse drag operates the tool; unpressed mouse movement controls the same constrained camera rig.

## Out of scope

Specific tool effects and simulation material effects.

## Acceptance criteria

- Fast and slow strokes stay continuous with no gaps or event-rate-dependent distance.
- Replayed strokes generate identical pose samples under multiple render frame caps.
- Pointer loss/cancel never leaves contact active.
- Smoothing adds no more than the documented latency budget.
- Touch and desktop controls produce the same normalized tool-pose contract.
- Camera input cannot cross into the work room, leave the viewer-side ellipse, or lose sight of the rug-to-drain work area.

## Human review

Draw slow curves, fast zigzags, and edge-crossing strokes with diagnostics enabled; replay at three frame caps. On touch, operate the tool with the left stick and verify right-stick orbit/zoom constraints. On desktop, drag the tool and move the unpressed mouse to exercise the same behaviors.

## Completion notes

Completed 2026-06-22.

- Reused `lib/controller/controller.js` for independent left tool and right camera joysticks with landscape/portrait placement, drift, cancellation, and recentering.
- Added a shared 120 Hz world-space stroke pipeline with coalesced pointer ingestion, fixed-rate interpolation, 18 ms smoothing, pressure, contact, velocity, speed, and orientation.
- Left-stick motion advances a virtual screen-space contact point and feeds the same pose contract as desktop mouse/pen drag.
- Added a constrained camera rig spanning 15.5°–58.4° azimuth and 17–27 meters on the viewer side. Right-stick up/down zooms and left/right orbits; unpressed desktop mouse deltas use the same rig.
- Added raw/smoothed path and contact-pose rendering plus diagnostics for source, event rate, output poses, latency, and camera state.
- Added a deterministic recorded-stroke fixture: 30, 60, and 120 FPS each produced 22 poses and checksum `607a0780`.
- Desktop hover/drag browser tests generated tool poses and constrained camera movement with observed latency of 8.9–16.5 ms against the documented 27 ms smoothing budget.
- Camera unit tests forced both limits and confirmed the camera remains on the positive-X/positive-Z viewer side.
- Coarse-pointer browser emulation at 900×520 confirmed both joystick layouts. The in-app browser cannot synthesize trusted touch drags, so final physical touch feel remains part of the stated human review.
- Browser validation emitted no console warnings. JavaScript syntax, deterministic playback, camera constraint, and `git diff --check` tests passed.
