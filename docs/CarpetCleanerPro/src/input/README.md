# Input module

Pointer samples are captured at display rate, coalesced with `getCoalescedEvents()`, projected onto the work plane, and resampled into a time-based world-space stroke. Tools consume position, orientation, velocity, pressure, and contact state. Pointer frequency must never alter deposited material or applied impulse.

The shared controller library supplies two touch joysticks. The left joystick advances a virtual screen-space contact point and feeds the same stroke pipeline as desktop drag input. The right joystick controls only the constrained viewer-side camera ellipse: vertical input changes camera distance and horizontal input changes azimuth. Desktop hover deltas control that camera rig while desktop drag remains exclusively tool input.

The stroke pipeline emits at 120 Hz with an 18 ms exponential smoothing constant. Its documented smoothing budget is 27 ms (one resample interval plus smoothing constant). Simulation operators must consume resampled poses rather than raw browser or joystick events.
