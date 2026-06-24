import { neonPalette } from "./tokens";
import type { NeonPrimitive } from "./primitive-renderer";

export interface NeonVictoryOptions {
  centerX: number;
  centerY: number;
  width: number;
  height: number;
  particleCount?: number;
  durationMs?: number;
}

export class NeonVictoryExperience {
  readonly startedAt: number;
  readonly durationMs: number;
  readonly options: NeonVictoryOptions;

  constructor(options: NeonVictoryOptions, startedAt = performance.now()) {
    this.options = options;
    this.startedAt = startedAt;
    this.durationMs = options.durationMs ?? 4200;
  }

  get complete(): boolean {
    return performance.now() - this.startedAt >= this.durationMs;
  }

  primitives(now = performance.now()): NeonPrimitive[] {
    const elapsed = Math.max(0, now - this.startedAt);
    const progress = Math.min(1, elapsed / this.durationMs);
    const count = this.options.particleCount ?? 90;
    const colors = [neonPalette.cyan, neonPalette.pink, neonPalette.gold, neonPalette.green, neonPalette.violet, neonPalette.orange];
    const primitives: NeonPrimitive[] = [];
    for (let index = 0; index < count; index++) {
      const seed = index * 91.73;
      const delay = (index % 12) * 0.035;
      const local = Math.max(0, Math.min(1, progress * 1.35 - delay));
      if (local <= 0) continue;
      const angle = ((seed % 360) / 180) * Math.PI;
      const speed = 0.22 + ((index * 37) % 100) / 260;
      const drift = Math.sin(seed) * this.options.width * 0.06 * local;
      const x = this.options.centerX + Math.cos(angle) * this.options.width * speed * local + drift;
      const y = this.options.centerY + Math.sin(angle) * this.options.height * speed * local + this.options.height * 0.42 * local * local;
      const fade = Math.max(0, 1 - local * 0.72);
      const size = 2.5 + (index % 5);
      primitives.push({
        x, y,
        width: size,
        height: size * (1.8 + index % 3),
        color: colors[index % colors.length],
        secondaryColor: colors[(index + 2) % colors.length],
        glow: 0.55,
        intensity: fade,
        shape: index % 4 === 0 ? "spark" : "bolt",
      });
    }
    primitives.push({
      x: this.options.centerX,
      y: this.options.centerY,
      width: 80 + progress * 180,
      color: neonPalette.cyan,
      secondaryColor: neonPalette.violet,
      glow: 0.55 * (1 - progress),
      intensity: Math.max(0, 1 - progress),
      shape: "ring",
    });
    return primitives;
  }
}
