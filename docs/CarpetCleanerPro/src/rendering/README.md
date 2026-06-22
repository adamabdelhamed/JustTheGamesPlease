# Rendering module

This module will use Three.js `WebGPURenderer`, TSL node materials, compute textures, instancing, physically based lighting, cascaded shadows where justified, and a fixed cinematic camera. Render materials sample simulation fields directly so water, foam, mud, carpet compression, runoff, and drain intake correspond to real state.

There is no WebGL renderer. Capability failure is handled before renderer construction.
