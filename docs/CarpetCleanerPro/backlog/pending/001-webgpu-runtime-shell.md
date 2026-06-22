# 001 — Establish the WebGPU runtime shell

## Outcome

A pinned Three.js WebGPU runtime renders a diagnostic scene and reports actionable capability/device errors. This proves the delivery path before simulation work begins.

## Dependencies

None.

## In scope

- Pin Three.js and configure `WebGPURenderer` plus TSL imports for static GitHub Pages hosting.
- Create renderer/device lifecycle, resize handling, color management, frame timing, and teardown boundaries.
- Replace the generic capability message with distinct insecure-context, unavailable-GPU, adapter, and device errors.
- Add an on-screen developer diagnostics panel enabled by `?dev=1`.

## Out of scope

Gameplay, fluid simulation, final art, tools, and fallback renderers.

## Acceptance criteria

- A WebGPU-rendered diagnostic scene appears on supported Chrome/Edge over localhost or HTTPS.
- LAN HTTP clearly reports that HTTPS or localhost is required.
- Diagnostics show adapter/device limits, viewport, DPR, CPU frame time, and GPU renderer status.
- Resize and DPR changes do not stretch or leak canvases.
- There is no WebGL or Canvas rendering fallback.

## Human review

Open with `?dev=1` on localhost, resize repeatedly, inspect diagnostics, then open through an HTTP LAN IP and verify the security-specific message.

