import { glowPresets, neonPalette } from "./tokens";

export interface NeonOrbOptions {
  x?: number;
  y?: number;
  radius?: number;
  color?: string;
  glow?: number;
  animate?: boolean;
}

export class NeonOrb {
  x: number;
  y: number;
  radius: number;
  color: string;
  glow: number;
  animate: boolean;

  constructor(options: NeonOrbOptions = {}) {
    this.x = options.x ?? 0.5;
    this.y = options.y ?? 0.5;
    this.radius = options.radius ?? 0.12;
    this.color = options.color ?? neonPalette.cyan;
    this.glow = options.glow ?? glowPresets.standard;
    this.animate = options.animate ?? true;
  }

  update(options: NeonOrbOptions): this {
    Object.assign(this, options);
    this.x = Math.max(0, Math.min(1, this.x));
    this.y = Math.max(0, Math.min(1, this.y));
    this.radius = Math.max(0.01, Math.min(0.5, this.radius));
    this.glow = Math.max(0, Math.min(1.5, this.glow));
    return this;
  }
}
