/**
 * Shield primitive helpers for the NeonSwarm shield family.
 *
 * All functions return NeonPrimitive[] arrays that can be mixed into any
 * primitive render pass. No new WebGPU pipeline is needed.
 *
 * Design language: circular energy field + unique orbiting edge shapes.
 * The base circle is shared across all shields; orbiters differentiate them.
 */

import type { NeonPrimitive } from "./primitive-renderer";
import type { NeonGeometricShapeDefinition, NeonPoint } from "./geometric-shapes";

// ---------------------------------------------------------------------------
// Base shield circle
// ---------------------------------------------------------------------------

const shieldFieldPoints: NeonPoint[] = Array.from({ length: 32 }, (_, index) => {
  const angle = -Math.PI / 2 + index * Math.PI * 2 / 32;
  return [Math.cos(angle), Math.sin(angle)] as const;
});

/** Uses the standard geometric edge renderer and energy shader. */
export const shieldFieldShape: NeonGeometricShapeDefinition = {
  id: "shield-field",
  name: "Shield Field",
  family: "player",
  color: "#48f6ff",
  points: shieldFieldPoints,
  rock: "pulse",
  depth: 0.025,
};

interface ShieldCircleOptions {
  /** Center x in pixels. */
  x: number;
  /** Center y in pixels. */
  y: number;
  /** Outer radius in pixels. */
  radius: number;
  /** Primary neon color hex. */
  color: string;
  /** Secondary color for inner fill glow. Defaults to color. */
  secondaryColor?: string;
  /** Overall opacity/energy 0–1. Defaults to 1. */
  energy?: number;
  /** Glow intensity 0–1. Defaults to 0.65. */
  glow?: number;
  /** Timestamp in ms for pulsing animation. */
  now: number;
  /** Oscillation rate in Hz. Defaults to 1.4. */
  pulseRate?: number;
  /** Scale factor (for viewport scaling). Defaults to 1. */
  scale?: number;
}

/**
 * Renders the base energy circle shared by all shields.
 * Returns a ring outline + inner halo bloom.
 */
function shieldCirclePrimitives(opts: ShieldCircleOptions): NeonPrimitive[] {
  const {
    x, y, radius, color,
    secondaryColor = color,
    energy = 1,
    glow = 0.65,
    now,
    pulseRate = 1.4,
    scale = 1,
  } = opts;

  // Subtle breathing pulse
  const pulse = 0.88 + Math.sin((now / 1000) * pulseRate * Math.PI * 2) * 0.12;
  const r = radius * scale;
  const effectiveEnergy = energy * pulse;

  const primitives: NeonPrimitive[] = [{
    x, y,
    width: r * 2.55,
    color,
    secondaryColor: "#ffffff",
    glow: glow * effectiveEnergy * 1.35,
    intensity: effectiveEnergy * 1.2,
    shape: "arc",
    arcStart: -Math.PI,
    arcEnd: Math.PI,
  }];
  const cycle = Math.floor(now / 180);
  for (let i = 0; i < 5; i++) {
    const seed = cycle * 17.3 + i * 11.9;
    const active = Math.sin(seed * 4.17) > 0.15;
    if (!active) continue;
    const angle = ((seed * 2.73) % (Math.PI * 2)) - Math.PI;
    const branchLength = r * (0.12 + (Math.sin(seed * 1.31) * 0.5 + 0.5) * 0.16);
    primitives.push({
      x: x + Math.cos(angle) * r,
      y: y + Math.sin(angle) * r,
      width: Math.max(0.65, 0.9 * scale),
      height: branchLength,
      color,
      secondaryColor: "#ffffff",
      glow: glow * effectiveEnergy * 1.15,
      intensity: effectiveEnergy * 1.25,
      shape: "line",
      rotation: angle,
    });
  }
  return primitives;
}

// ---------------------------------------------------------------------------
// Orbiter helpers — called once per orbiter per frame
// ---------------------------------------------------------------------------

export interface OrbiterBaseOptions {
  /** Shield center x. */
  cx: number;
  /** Shield center y. */
  cy: number;
  /** Orbit radius in pixels (raw, before scale). */
  orbitRadius: number;
  /** Angle in radians for this orbiter's position on the ring. */
  angle: number;
  /** Primary color hex. */
  color: string;
  /** Orbiter size in pixels (raw, before scale). */
  size: number;
  /** Glow intensity 0–1. */
  glow?: number;
  /** Energy/opacity 0–1. Used to dim broken/absorbed charges. */
  energy?: number;
  /** Scale factor. Defaults to 1. */
  scale?: number;
}

/** Small dot / diamond orbiter — used by Satellite Guard. */
export function shieldDotOrbiter(opts: OrbiterBaseOptions): NeonPrimitive[] {
  const { cx, cy, orbitRadius, angle, color, size, glow = 0.8, energy = 1, scale = 1 } = opts;
  const r = orbitRadius * scale;
  const s = size * scale;
  const ox = cx + Math.cos(angle) * r;
  const oy = cy + Math.sin(angle) * r;
  return [
    // Halo
    // Core diamond
    { x: ox, y: oy, width: s, color, glow: glow * energy, intensity: energy, shape: "diamond" },
  ];
}

/** Triangular spike / tooth orbiter — used by Spike Halo. */
export function shieldSpikeOrbiter(opts: OrbiterBaseOptions & { rotationOffset?: number }): NeonPrimitive[] {
  const { cx, cy, orbitRadius, angle, color, size, glow = 0.9, energy = 1, scale = 1, rotationOffset = 0 } = opts;
  const r = orbitRadius * scale;
  const s = size * scale;
  const ox = cx + Math.cos(angle) * r;
  const oy = cy + Math.sin(angle) * r;
  // Two bolts angled outward to suggest a spike/tooth pointing away from center
  const spikeTip = angle + rotationOffset;
  const tx = ox + Math.cos(spikeTip) * s * 0.9;
  const ty = oy + Math.sin(spikeTip) * s * 0.9;
  return [
    // Halo
    // Spike body (angled outward)
    { x: (ox + tx) / 2, y: (oy + ty) / 2, width: s * 0.55, height: s * 1.4, color, glow: glow * energy, intensity: energy * 1.05, shape: "spark" },
    // Tip flash
  ];
}

/** Hexagonal fragment orbiter — used by Hex Guard. */
export function shieldHexOrbiter(opts: OrbiterBaseOptions): NeonPrimitive[] {
  const { cx, cy, orbitRadius, angle, color, size, glow = 0.75, energy = 1, scale = 1 } = opts;
  const r = orbitRadius * scale;
  const s = size * scale;
  const ox = cx + Math.cos(angle) * r;
  const oy = cy + Math.sin(angle) * r;
  return [
    // Outer halo
    // Hex body (pentagon is the closest available shape)
    { x: ox, y: oy, width: s * 1.05, color, glow: glow * energy, intensity: energy * 1.0, shape: "pentagon" },
  ];
}

/** Crystalline shard orbiter — used by Frost Ring. */
export function shieldShardOrbiter(opts: OrbiterBaseOptions & { shardPhase?: number }): NeonPrimitive[] {
  const { cx, cy, orbitRadius, angle, color, size, glow = 0.7, energy = 1, scale = 1, shardPhase = 0 } = opts;
  const r = orbitRadius * scale;
  const s = size * scale;
  const ox = cx + Math.cos(angle) * r;
  const oy = cy + Math.sin(angle) * r;
  // Two angled shards at slightly different angles — crystalline feel
  const a1 = angle + 0.35 + shardPhase * 0.1;
  const a2 = angle - 0.35 - shardPhase * 0.1;
  return [
    // Frost halo (cool blue-ish tint implied by caller passing a frost color)
    // Main shard
    { x: ox, y: oy, width: s * 0.45, height: s * 1.55, color, glow: glow * energy, intensity: energy, shape: "spark" },
    // Secondary shard
    {
      x: ox + Math.cos(a1) * s * 0.5,
      y: oy + Math.sin(a1) * s * 0.5,
      width: s * 0.3, height: s * 0.9,
      color,
      glow: glow * energy * 0.7,
      intensity: energy * 0.75,
      shape: "spark",
    },
    {
      x: ox + Math.cos(a2) * s * 0.5,
      y: oy + Math.sin(a2) * s * 0.5,
      width: s * 0.28, height: s * 0.8,
      color,
      glow: glow * energy * 0.55,
      intensity: energy * 0.6,
      shape: "spark",
    },
  ];
}

/** Sparse dot orbiter — used by Pulse Core (quieter visual). */
export function shieldSparseOrbiter(opts: OrbiterBaseOptions): NeonPrimitive[] {
  const { cx, cy, orbitRadius, angle, color, size, glow = 0.6, energy = 1, scale = 1 } = opts;
  const r = orbitRadius * scale;
  const s = size * scale;
  const ox = cx + Math.cos(angle) * r;
  const oy = cy + Math.sin(angle) * r;
  return [
    { x: ox, y: oy, width: s * 0.9, color, secondaryColor: "#ffffff", glow: glow * energy, intensity: energy, shape: "diamond" },
  ];
}

// ---------------------------------------------------------------------------
// Triggered effects
// ---------------------------------------------------------------------------

export interface ShieldPulseOptions {
  /** Center x. */
  x: number;
  /** Center y. */
  y: number;
  /** Maximum pulse radius in pixels (at peak). */
  maxRadius: number;
  /** Color hex. */
  color: string;
  /** Progress 0→1, where 0 = just triggered, 1 = fully expanded and gone. */
  progress: number;
  /** Scale factor. */
  scale?: number;
}

/**
 * Expanding ring pulse emitted by Pulse Core on trigger.
 * Call each frame with increasing progress until progress >= 1.
 */
export function shieldPulsePrimitives(opts: ShieldPulseOptions): NeonPrimitive[] {
  const { x, y, maxRadius, color, progress, scale = 1 } = opts;
  if (progress >= 1) return [];
  const life = 1 - progress;
  const r = maxRadius * scale * (0.1 + progress * 0.9);
  return [
    // Outer expanding ring
    {
      x, y,
      width: r * 2,
      color,
      glow: life * 0.85,
      intensity: life * 0.9,
      shape: "ring",
    },
    // Inner secondary ring slightly behind
    {
      x, y,
      width: r * 2 * 0.72,
      color,
      glow: life * 0.5,
      intensity: life * 0.6,
      shape: "ring",
    },
  ];
}

export interface ShieldHitFlashOptions {
  x: number;
  y: number;
  radius: number;
  color: string;
  /** Progress 0→1. 0 = just triggered, 1 = faded. */
  progress: number;
  scale?: number;
}

/**
 * Brief flash when a hit is absorbed by a shield charge.
 */
export function shieldHitFlashPrimitives(opts: ShieldHitFlashOptions): NeonPrimitive[] {
  const { x, y, radius, color, progress, scale = 1 } = opts;
  if (progress >= 1) return [];
  const life = 1 - progress;
  const r = radius * scale;
  const primitives: NeonPrimitive[] = [{
    x, y, width: r * 2.55,
    color, secondaryColor: "#ffffff",
    glow: life, intensity: life * 1.4,
    shape: "arc", arcStart: -Math.PI, arcEnd: Math.PI,
  }];
  for (let i = 0; i < 9; i++) {
    const angle = (i / 9) * Math.PI * 2 + progress * 0.35;
    const distance = r * (0.78 + progress * 0.42);
    primitives.push({
      x: x + Math.cos(angle) * distance,
      y: y + Math.sin(angle) * distance,
      width: Math.max(0.8, 1.4 * scale),
      height: r * (0.22 + progress * 0.18),
      color,
      secondaryColor: "#ffffff",
      glow: life,
      intensity: life * (1.15 - (i % 3) * 0.12),
      shape: "line",
      rotation: angle + Math.PI / 2,
    });
  }
  return primitives;
}
