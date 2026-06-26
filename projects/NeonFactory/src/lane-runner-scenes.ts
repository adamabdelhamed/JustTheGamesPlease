import { neonPalette } from "./tokens";
import type { NeonPrimitive } from "./primitive-renderer";
import type { NeonTopDownScene } from "./top-down-scene";

export const laneRunnerSceneIds = ["neonHall"] as const;

export type LaneRunnerSceneId = typeof laneRunnerSceneIds[number];

export interface LaneRunnerSceneOptions {
  sceneId: LaneRunnerSceneId;
  width: number;
  height: number;
  timeMs: number;
}

const sceneNames: Record<LaneRunnerSceneId, string> = {
  neonHall: "Neon Hall",
};

const hallVanishingY = 0.46;
const hallBottomWidth = 0.92;
const hallHorizonWidth = 0.08;
const hallFloorColor = "#05101f";
const hallDeepBlue = "#12356a";
const hallMutedBlue = "#1b4c8d";
const hallMutedCyan = "#2ac4dc";
const hallMutedViolet = "#453079";
const hallAccentPink = "#a7357e";
const hallEnergySpeed = 0.0017;

export function getLaneRunnerSceneName(sceneId: LaneRunnerSceneId): string {
  return sceneNames[sceneId];
}

export function isLaneRunnerSceneId(value: string): value is LaneRunnerSceneId {
  return (laneRunnerSceneIds as readonly string[]).includes(value);
}

export function createLaneRunnerScene(options: LaneRunnerSceneOptions): NeonTopDownScene {
  switch (options.sceneId) {
    case "neonHall":
      return createNeonHall(options);
  }
}

function createNeonHall(options: LaneRunnerSceneOptions): NeonTopDownScene {
  const { width, height, timeMs } = options;
  const primitives: NeonPrimitive[] = [];
  const geometry = hallGeometry(width, height);

  addHallBase(primitives, width, height, timeMs);
  addHallRails(primitives, geometry);
  addHallCrossbars(primitives, geometry, timeMs);
  addHallLaneSignals(primitives, geometry, timeMs);
  addHallFloorGlyphs(primitives, geometry, timeMs);
  addHallHorizonDetails(primitives, geometry, timeMs);
  addHallSidePanels(primitives, geometry, timeMs);
  addHallEnergyTraces(primitives, geometry, timeMs);

  return { primitives };
}

function hallGeometry(width: number, height: number) {
  const vp = { x: width * .5, y: height * hallVanishingY };
  const bottomY = height * .985;
  const horizonY = height * hallVanishingY;
  const bottomHalf = width * hallBottomWidth * .5;
  const horizonHalf = width * hallHorizonWidth * .5;
  return {
    width,
    height,
    vp,
    leftBottom: { x: width * .5 - bottomHalf, y: bottomY },
    rightBottom: { x: width * .5 + bottomHalf, y: bottomY },
    leftHorizon: { x: vp.x - horizonHalf, y: horizonY },
    rightHorizon: { x: vp.x + horizonHalf, y: horizonY },
  };
}

function addHallBase(items: NeonPrimitive[], width: number, height: number, timeMs: number): void {
  const pulse = .55 + Math.sin(timeMs * hallEnergySpeed) * .2;
  items.push({ x: width / 2, y: height * .76, width: width * .5, height: height * .43, color: hallFloorColor, secondaryColor: "#02050d", glow: .05, intensity: .23, shape: "bolt" });
  items.push({ x: width / 2, y: height * hallVanishingY, width: width * .34, height: 1.4, color: hallDeepBlue, secondaryColor: hallMutedCyan, glow: .3, intensity: .18 + pulse * .07, shape: "bolt" });
  items.push({ x: width / 2, y: height * .49, width: width * .18, height: 1.2, color: hallAccentPink, secondaryColor: hallMutedViolet, glow: .24, intensity: .08, shape: "bolt" });
}

function addHallRails(items: NeonPrimitive[], geometry: ReturnType<typeof hallGeometry>): void {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon } = geometry;
  for (const [bottom, horizon] of [[leftBottom, leftHorizon], [rightBottom, rightHorizon]] as const) {
    addGlowingLine(items, bottom, horizon, hallDeepBlue, .48, 6.5);
    addGlowingLine(items, bottom, horizon, hallMutedCyan, .56, 1.3);
  }

  for (let lane = 1; lane <= 3; lane++) {
    const u = lane / 4;
    const start = lerpPoint(leftBottom, rightBottom, u);
    const end = lerpPoint(leftHorizon, rightHorizon, u);
    const color = lane === 2 ? hallMutedViolet : hallMutedBlue;
    addGlowingLine(items, start, end, color, lane === 2 ? .28 : .2, 3.4);
    addGlowingLine(items, start, end, hallMutedCyan, lane === 2 ? .26 : .18, .9);
  }
}

function addHallCrossbars(items: NeonPrimitive[], geometry: ReturnType<typeof hallGeometry>, timeMs: number): void {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon } = geometry;
  for (let row = 0; row < 15; row++) {
    const t = Math.pow(row / 14, 1.82);
    const left = lerpPoint(leftHorizon, leftBottom, t);
    const right = lerpPoint(rightHorizon, rightBottom, t);
    const rowPulse = .58 + Math.sin(timeMs / 480 + row * .78) * .42;
    const surge = Math.max(0, Math.sin(timeMs / 820 - row * .72));
    const color = row % 4 === 0 ? hallMutedCyan : row % 4 === 1 ? hallMutedBlue : row % 4 === 2 ? hallMutedViolet : hallAccentPink;
    addGlowingLine(items, left, right, color, (.15 + t * .23) * (.55 + rowPulse * .45) + surge * .055, 3.1 + t * 2);
    addGlowingLine(items, left, right, color, (.2 + t * .27) * (.52 + rowPulse * .48) + surge * .07, .75 + t * .6);
  }
}

function addHallLaneSignals(items: NeonPrimitive[], geometry: ReturnType<typeof hallGeometry>, timeMs: number): void {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon } = geometry;
  for (let pulseIndex = 0; pulseIndex < 7; pulseIndex++) {
    const travel = (timeMs / 1900 + pulseIndex / 7) % 1;
    const t = Math.pow(travel, 1.55);
    const left = lerpPoint(leftHorizon, leftBottom, t);
    const right = lerpPoint(rightHorizon, rightBottom, t);
    const opacity = .34 * (1 - travel);
    addGlowingLine(items, left, right, hallMutedCyan, opacity, 1.1 + t * 1.4);
  }
}

function addHallFloorGlyphs(items: NeonPrimitive[], geometry: ReturnType<typeof hallGeometry>, timeMs: number): void {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon } = geometry;
  const rows = [2, 4, 6, 8, 10, 12];
  for (const row of rows) {
    const t = Math.pow(row / 14, 1.82);
    const center = lerpPoint(lerpPoint(leftHorizon, leftBottom, t), lerpPoint(rightHorizon, rightBottom, t), .5);
    const scale = .45 + t * 1.1;
    const pulse = .48 + Math.sin(timeMs / 720 + row * 1.3) * .24;
    items.push({
      x: center.x,
      y: center.y,
      width: 7 * scale,
      height: 7 * scale,
      color: row % 4 === 0 ? hallMutedViolet : hallDeepBlue,
      secondaryColor: row % 3 === 0 ? hallAccentPink : hallMutedCyan,
      glow: .34,
      intensity: .24 + pulse * .16,
      shape: "diamond",
    });
  }
}

function addHallHorizonDetails(items: NeonPrimitive[], geometry: ReturnType<typeof hallGeometry>, timeMs: number): void {
  const { vp, width, height, leftHorizon, rightHorizon } = geometry;
  const glowPulse = .75 + Math.sin(timeMs / 680) * .25;
  addGlowingLine(items, { x: vp.x - width * .12, y: vp.y + height * .012 }, { x: vp.x + width * .12, y: vp.y + height * .012 }, hallAccentPink, .2 + glowPulse * .08, 1.1);
  addGlowingLine(items, { x: vp.x - width * .16, y: vp.y + height * .028 }, { x: vp.x - width * .06, y: vp.y + height * .028 }, hallMutedCyan, .16, .85);
  addGlowingLine(items, { x: vp.x + width * .06, y: vp.y + height * .028 }, { x: vp.x + width * .16, y: vp.y + height * .028 }, hallMutedViolet, .16, .85);

  for (let index = 0; index < 8; index++) {
    const u = (index + .5) / 8;
    const base = lerpPoint(leftHorizon, rightHorizon, u);
    const sideBias = Math.abs(u - .5) * 2;
    items.push({
      x: base.x,
      y: base.y - height * (.018 + sideBias * .018),
      width: 1 + sideBias * .7,
      height: height * (.035 + sideBias * .03),
      color: index % 2 === 0 ? hallMutedBlue : hallMutedViolet,
      secondaryColor: index % 3 === 0 ? hallMutedCyan : hallAccentPink,
      glow: .24,
      intensity: .07 + glowPulse * .035,
      shape: "line",
      rotation: Math.sin(index * 1.7) * .12,
    });
  }
}

function addHallSidePanels(items: NeonPrimitive[], geometry: ReturnType<typeof hallGeometry>, timeMs: number): void {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon, width, height } = geometry;
  for (const side of [0, 1]) {
    for (let index = 0; index < 9; index++) {
      const t = Math.pow((index + 1) / 10, 1.68);
      const rail = side === 0
        ? lerpPoint(leftHorizon, leftBottom, t)
        : lerpPoint(rightHorizon, rightBottom, t);
      const outward = side === 0 ? -1 : 1;
      const flicker = .58 + Math.sin(timeMs / 600 + index * 1.5 + side) * .28;
      items.push({
        x: rail.x + outward * width * (.035 + t * .06),
        y: rail.y - height * (.018 + t * .012),
        width: 1.2 + t * 1.2,
        height: height * (.035 + t * .08),
        color: index % 3 === 0 ? hallAccentPink : index % 3 === 1 ? hallMutedBlue : hallMutedCyan,
        secondaryColor: hallMutedViolet,
        glow: .3,
        intensity: (.075 + t * .065) * flicker,
        shape: "bolt",
      });
    }
  }
}

function addHallEnergyTraces(items: NeonPrimitive[], geometry: ReturnType<typeof hallGeometry>, timeMs: number): void {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon } = geometry;
  for (let index = 0; index < 24; index++) {
    const depth = .12 + ((index * 37) % 100) / 116;
    const t = Math.min(1, Math.pow(depth, 1.7));
    const side = index % 4 === 0 ? .18 : index % 4 === 1 ? .34 : index % 4 === 2 ? .66 : .82;
    const left = lerpPoint(leftHorizon, leftBottom, t);
    const right = lerpPoint(rightHorizon, rightBottom, t);
    const point = lerpPoint(left, right, side + Math.sin(index * 1.7 + timeMs / 1700) * .035);
    const shimmer = .62 + Math.sin(timeMs / 390 + index * 1.1) * .38;
    items.push({
      x: point.x,
      y: point.y,
      width: .8 + index % 3 * .5,
      height: 10 + index % 5 * 7,
      color: index % 5 === 0 ? hallAccentPink : index % 3 === 0 ? hallMutedCyan : hallMutedBlue,
      secondaryColor: hallMutedViolet,
      glow: .32,
      intensity: (.07 + (index % 4) * .018) * shimmer,
      shape: "bolt",
    });
  }
}

function addGlowingLine(items: NeonPrimitive[], a: { x: number; y: number }, b: { x: number; y: number }, color: string, alpha: number, thickness: number): void {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const length = Math.hypot(dx, dy);
  items.push({
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2,
    width: thickness,
    height: length / 2,
    color,
    secondaryColor: neonPalette.whiteHot,
    glow: .32,
    intensity: alpha,
    shape: "line",
    rotation: Math.atan2(-dx, dy),
  });
}

function lerpPoint(a: { x: number; y: number }, b: { x: number; y: number }, t: number): { x: number; y: number } {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}
