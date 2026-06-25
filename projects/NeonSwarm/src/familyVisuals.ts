import {
  getNeonShape,
  neonPalette,
  type NeonPrimitive,
  type NeonTopDownShape,
} from "@just-the-games-please/neon-factory";
import type { ShieldMember, SwordMember } from "../CombatDefinition";
import type { ActiveSlashAnimation } from "./combat/swordEvaluator";

export interface FamilyVisualScene {
  primitives: NeonPrimitive[];
  shapes: NeonTopDownShape[];
}

const emptyScene = (): FamilyVisualScene => ({ primitives: [], shapes: [] });
const requiredShape = (id: string) => {
  const shape = getNeonShape(id);
  if (!shape) throw new Error(`NeonFactory shape "${id}" is required by family visuals.`);
  return shape;
};

export interface ShieldVisualOptions {
  definition: ShieldMember;
  strength: number;
  initialStrength: number;
  x: number;
  y: number;
  now: number;
  scale?: number;
  hitProgress?: number;
  visible?: boolean;
}

export function shieldVisuals(options: ShieldVisualOptions): FamilyVisualScene {
  const scene = emptyScene();
  const {
    definition, x, y, now,
    scale = 1,
    hitProgress = 1,
    visible = true,
  } = options;
  const strength = Math.max(0, options.strength);
  const initialStrength = Math.max(1, options.initialStrength);
  const impact = Math.max(0, 1 - hitProgress);
  const exploding = strength <= 0 && hitProgress < 1;
  const color = neonPalette[definition.color];
  const radius = definition.radius * scale;

  if (visible || exploding) {
    scene.shapes.push({
      shape: requiredShape("shield-ring"),
      x, y,
      size: radius,
      color,
      lineThickness: .72,
      glow: 1 + impact * .8,
      opacity: 1,
      energyIntensity: 1.15 + impact * 1.5,
      energyCoverage: .42 + impact * .3,
      energySpeed: 1.15 + impact * 1.2,
      energyBleed: .5 + impact * .35,
      explodeProgress: exploding ? Math.min(1, hitProgress) : 0,
      explodeMagnitude: .9,
    });
  }

  if (!visible) return scene;
  const orbiterShape = requiredShape(definition.orbiterShape === "hex" ? "hex-fighter" : "star-core");
  const orbiterCount = Math.ceil(definition.orbiterCount * strength / initialStrength);
  const angleStep = Math.PI * 2 / definition.orbiterCount;
  const baseAngle = now / 1000 * definition.orbiterSpeed;
  for (let i = 0; i < orbiterCount; i++) {
    const angle = baseAngle + i * angleStep;
    scene.shapes.push({
      shape: orbiterShape,
      x: x + Math.cos(angle) * radius,
      y: y + Math.sin(angle) * radius,
      size: definition.orbiterSize * 1.8 * scale,
      color,
      rotationZ: angle + now / 1400,
      lineThickness: .72,
      glow: 1,
      energyIntensity: 1.1,
      energyCoverage: .4,
      energySpeed: 1.25,
      energyBleed: .5,
    });
  }
  return scene;
}

export interface SwordVisualOptions {
  definition: SwordMember;
  slash: ActiveSlashAnimation | null;
  x: number;
  y: number;
  scale?: number;
  visible?: boolean;
}

function swordTrail(slash: ActiveSlashAnimation, scale: number): NeonPrimitive[] {
  if (slash.progress >= 1) return [];
  const life = 1 - slash.progress;
  const radius = slash.reach * scale;
  const halfArc = slash.arcDegrees * Math.PI / 360;
  const heading = -Math.PI / 2;
  const sweep = slash.progress < .62 ? 1 - Math.pow(1 - slash.progress / .62, 3) : 1;
  const bladeAngle = heading - halfArc + sweep * halfArc * 2;
  const trailLength = halfArc * (.55 + life * .75);
  const thickness = slash.thickness * scale;
  const primitives: NeonPrimitive[] = [];

  for (let i = 0; i < 11; i++) {
    const age = i / 10;
    const angle = Math.max(heading - halfArc, bladeAngle - trailLength * age);
    const distance = radius * (.72 + Math.sin(age * Math.PI) * .08);
    const fade = Math.pow(1 - age, 1.35) * life;
    primitives.push({
      x: slash.x + Math.cos(angle) * distance,
      y: slash.y + Math.sin(angle) * distance,
      width: Math.max(.8, thickness * (2.4 - age * 1.55)),
      height: radius * (.24 - age * .1),
      color: slash.color,
      secondaryColor: "#ffffff",
      glow: 1.15 * fade,
      intensity: 1.45 * fade,
      shape: "bolt",
      rotation: angle + Math.PI / 2,
    });
  }

  const leadingX = slash.x + Math.cos(bladeAngle) * radius * .82;
  const leadingY = slash.y + Math.sin(bladeAngle) * radius * .82;
  primitives.push({
    x: leadingX, y: leadingY,
    width: Math.max(1.2, thickness * 2.8),
    height: radius * .32,
    color: "#ffffff",
    secondaryColor: slash.color,
    glow: 1.4 * life,
    intensity: 1.7 * life,
    shape: "line",
    rotation: bladeAngle + Math.PI / 2,
  });

  for (let i = 0; i < 7 && slash.progress < .7; i++) {
    const spread = (i - 3) * .13;
    const sparkLife = life * (1 - Math.abs(i - 3) * .08);
    primitives.push({
      x: leadingX + Math.cos(bladeAngle + spread) * radius * (.04 + i * .012),
      y: leadingY + Math.sin(bladeAngle + spread) * radius * (.04 + i * .012),
      width: Math.max(.7, thickness * .75),
      height: radius * (.08 + i % 3 * .025),
      color: slash.color,
      secondaryColor: "#ffffff",
      glow: 1.1 * sparkLife,
      intensity: 1.25 * sparkLife,
      shape: "bolt",
      rotation: bladeAngle + spread,
    });
  }
  return primitives;
}

export function swordVisuals(options: SwordVisualOptions): FamilyVisualScene {
  const scene = emptyScene();
  if (!options.visible) return scene;
  const { definition, slash, x, y, scale = 1 } = options;
  const halfArc = definition.arcDegrees * Math.PI / 360;
  const sweep = slash ? (slash.progress < .62 ? 1 - Math.pow(1 - slash.progress / .62, 3) : 1) : .5;
  const swordAngle = -Math.PI / 2 - halfArc + sweep * halfArc * 2;
  scene.shapes.push({
    shape: requiredShape("spike-lance"),
    x, y,
    size: Math.min(17, definition.range * .28) * scale,
    color: neonPalette[definition.color],
    rotationZ: swordAngle + Math.PI / 2,
    lineThickness: .82,
    glow: slash ? 1.35 : 1,
    energyIntensity: slash ? 1.8 : 1.15,
    energyCoverage: slash ? .72 : .42,
    energySpeed: slash ? 2.1 : 1.2,
    energyBleed: slash ? .8 : .5,
  });
  if (slash) scene.primitives.push(...swordTrail(slash, scale));
  return scene;
}

export interface FamilyPickupVisualOptions {
  x: number;
  y: number;
  color: string;
  now: number;
  scale?: number;
}

function pickupShape(shapeId: string, options: FamilyPickupVisualOptions): NeonTopDownShape {
  const { x, y, color, now, scale = 1 } = options;
  return {
    shape: requiredShape(shapeId),
    x: x + Math.sin(now / 420 + y * .07) * 4.5 * scale,
    y,
    size: 10 * scale * (1 + Math.sin(now / 600 + y * .05) * .08),
    color,
    rotationZ: now / 1100,
    lineThickness: .76,
    glow: 1.05,
    energyIntensity: 1.25,
    energyCoverage: .48,
    energySpeed: 1.35,
    energyBleed: .55,
  };
}

export const shieldPickupVisual = (options: FamilyPickupVisualOptions): NeonTopDownShape =>
  pickupShape("shield-ring", options);

export const swordPickupVisual = (options: FamilyPickupVisualOptions): NeonTopDownShape =>
  pickupShape("spike-lance", options);
