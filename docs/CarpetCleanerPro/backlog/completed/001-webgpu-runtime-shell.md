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

## Completion notes

Completed 2026-06-22.

- Pinned Three.js r180 through an import map and configured `three/webgpu` plus `three/tsl`.
- Added an animated WebGPU/TSL diagnostic scene, ACES tone mapping, sRGB output, soft shadows, DPR-capped resizing, disposal, and device-loss observation.
- Added distinct errors for insecure context, missing API, adapter request failure, absent adapter, and renderer device initialization failure.
- Added `?dev=1` diagnostics for adapter identity, three compute/storage limits, viewport, DPR, CPU render time, frame time, frame count, and renderer state.
- Browser validation on Chrome 149 and an NVIDIA Lovelace adapter rendered successfully at 1952×912 with no console warnings.
- Resize validation passed at 1280×720, 900×520, and 1600×900; client and backing-buffer dimensions matched at DPR 1.
- LAN HTTP validation reported `INSECURE-CONTEXT` and explained the HTTPS/localhost requirement.
- JavaScript syntax checks and `git diff --check` passed. The repository has no Visual Studio solution to build.
