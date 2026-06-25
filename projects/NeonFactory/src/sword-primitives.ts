import type { NeonPrimitive } from "./primitive-renderer";

export interface SlashArcOptions {
  x: number;
  y: number;
  reach: number;
  arcDegrees: number;
  headingDeg?: number;
  color: string;
  progress: number;
  thickness?: number;
  scale?: number;
}

export interface SwordBladeOptions {
  x: number;
  y: number;
  color: string;
  now: number;
  length?: number;
  scale?: number;
}

export function swordBladePrimitives(opts: SwordBladeOptions): NeonPrimitive[] {
  const { x, y, color, now, length = 28, scale = 1 } = opts;
  const pulse = 0.9 + Math.sin(now / 180) * 0.1;
  const angle = -Math.PI / 2 + Math.sin(now / 520) * 0.16;
  return [
    { x, y, width: 2.8 * scale, height: length * scale, color, secondaryColor: "#ffffff", glow: 1.1 * pulse, intensity: 1.2, shape: "line", rotation: angle + Math.PI / 2 },
    { x, y, width: 10 * scale, height: 2.2 * scale, color, secondaryColor: "#ffffff", glow: 0.8, intensity: 1, shape: "line", rotation: angle },
  ];
}

export function slashArcPrimitives(opts: SlashArcOptions): NeonPrimitive[] {
  const { x, y, reach, arcDegrees, headingDeg = -90, color, progress, thickness = 1, scale = 1 } = opts;
  if (progress >= 1) return [];

  const life = 1 - progress;
  const r = reach * scale;
  const halfArc = arcDegrees / 2 * Math.PI / 180;
  const heading = headingDeg * Math.PI / 180;
  const energizedThickness = thickness * scale;
  const sweep = progress < 0.62 ? 1 - Math.pow(1 - progress / 0.62, 3) : 1;
  const bladeAngle = heading - halfArc + sweep * halfArc * 2;
  const trailLength = halfArc * (0.55 + life * 0.75);
  const segmentCount = 11;
  const primitives: NeonPrimitive[] = [];

  for (let i = 0; i < segmentCount; i++) {
    const age = i / (segmentCount - 1);
    const angle = Math.max(heading - halfArc, bladeAngle - trailLength * age);
    const distance = r * (0.72 + Math.sin(age * Math.PI) * 0.08);
    const fade = Math.pow(1 - age, 1.35) * life;
    const tangent = angle + Math.PI / 2;
    primitives.push({
      x: x + Math.cos(angle) * distance, y: y + Math.sin(angle) * distance,
      width: Math.max(0.8, energizedThickness * (2.4 - age * 1.55)),
      height: r * (0.24 - age * 0.1),
      color, secondaryColor: "#ffffff",
      glow: 1.15 * fade, intensity: 1.45 * fade,
      shape: "bolt", rotation: tangent,
    });
  }

  const leadingX = x + Math.cos(bladeAngle) * r * .82;
  const leadingY = y + Math.sin(bladeAngle) * r * .82;
  primitives.push({
    x: leadingX, y: leadingY,
    width: Math.max(1.2, energizedThickness * 2.8), height: r * .32,
    color: "#ffffff", secondaryColor: color,
    glow: 1.4 * life, intensity: 1.7 * life,
    shape: "line", rotation: bladeAngle + Math.PI / 2,
  });

  if (progress < 0.7) {
    for (let i = 0; i < 7; i++) {
      const spread = (i - 3) * 0.13;
      const sparkLife = life * (1 - Math.abs(i - 3) * .08);
      primitives.push({
        x: leadingX + Math.cos(bladeAngle + spread) * r * (.04 + i * .012),
        y: leadingY + Math.sin(bladeAngle + spread) * r * (.04 + i * .012),
        width: Math.max(.7, energizedThickness * .75),
        height: r * (.08 + (i % 3) * .025),
        color, secondaryColor: "#ffffff",
        glow: 1.1 * sparkLife, intensity: 1.25 * sparkLife,
        shape: "bolt", rotation: bladeAngle + spread,
      });
    }
  }
  return primitives;
}

export interface SwordPickupOptions {
  x: number;
  y: number;
  color: string;
  secondaryColor?: string;
  now: number;
  scale?: number;
}

export function swordPickupPrimitives(opts: SwordPickupOptions): NeonPrimitive[] {
  const { x, y, color, secondaryColor = color, now, scale = 1 } = opts;
  const pulse = 1 + Math.sin(now / 600) * 0.08;
  return [
    { x, y: y - 1.5 * scale * pulse, width: 1.6 * scale, height: 8.5 * scale * pulse, color, secondaryColor, glow: 0.7, intensity: 1.1, shape: "bolt" },
    { x, y: y + 1.5 * scale, width: 6 * scale * pulse, height: scale, color, secondaryColor, glow: 0.55, intensity: 1, shape: "bolt" },
    { x, y: y - 5.5 * scale * pulse, width: scale, color, glow: 0.9, intensity: 0.85, shape: "diamond" },
  ];
}

export interface ShieldPickupOptions extends SwordPickupOptions {}

export function shieldPickupPrimitives(opts: ShieldPickupOptions): NeonPrimitive[] {
  const { x, y, color, secondaryColor = color, now, scale = 1 } = opts;
  const pulse = 1 + Math.sin(now / 700) * 0.07;
  return [
    { x, y, width: 10 * scale * pulse, color, secondaryColor, glow: 0.8, intensity: 0.9, shape: "pentagon" },
    { x, y: y - 0.5 * scale, width: 3.2 * scale * pulse, color: secondaryColor, secondaryColor: color, glow: 0.6, intensity: 1, shape: "diamond" },
  ];
}
