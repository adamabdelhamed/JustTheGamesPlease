import { neonPalette } from "./tokens";
import type { NeonPrimitive } from "./primitive-renderer";
import type { NeonTopDownScene } from "./top-down-scene";

export const laneRunnerSceneIds = ["neonHall", "aurora", "crystalForge", "voidGarden", "solarArray"] as const;

export type LaneRunnerSceneId = typeof laneRunnerSceneIds[number];

export interface LaneRunnerSceneOptions {
  sceneId: LaneRunnerSceneId;
  width: number;
  height: number;
  timeMs: number;
}

const sceneNames: Record<LaneRunnerSceneId, string> = {
  neonHall: "Neon Hall",
  aurora: "Aurora",
  crystalForge: "Crystal Forge",
  voidGarden: "Void Garden",
  solarArray: "Solar Array",
};

const hallBottomWidth = 0.92;
const hallFloorColor = "#05101f";
const hallDeepBlue = "#12356a";
const hallMutedBlue = "#1b4c8d";
const hallMutedCyan = "#2ac4dc";
const hallMutedViolet = "#453079";
const hallAccentPink = "#a7357e";
const hallEnergySpeed = 0.0017;

export interface LaneRunnerScenePalette {
  floor: string;
  boundary: string;
  lane: string;
  centerLane: string;
  accent: string;
  laneHighlight: string;
}

const standardLaneRunnerPalette: LaneRunnerScenePalette = {
  floor: hallFloorColor,
  boundary: hallDeepBlue,
  lane: hallMutedBlue,
  centerLane: hallMutedViolet,
  accent: hallAccentPink,
  laneHighlight: hallMutedCyan,
};

const auroraLaneRunnerPalette: LaneRunnerScenePalette = {
  floor: "#03110f",
  boundary: "#178c92",
  lane: "#17d7b3",
  centerLane: "#8f56ff",
  accent: "#ff4fc7",
  laneHighlight: "#b9ff6a",
};

const crystalForgeLaneRunnerPalette: LaneRunnerScenePalette = {
  floor: "#071018",
  boundary: "#26d7ff",
  lane: "#63f1ff",
  centerLane: "#ff5fd8",
  accent: "#ffb84d",
  laneHighlight: "#f4fbff",
};

const voidGardenLaneRunnerPalette: LaneRunnerScenePalette = {
  floor: "#080818",
  boundary: "#6f53ff",
  lane: "#35e8b6",
  centerLane: "#ff4fc7",
  accent: "#b9ff6a",
  laneHighlight: "#9bd7ff",
};

const solarArrayLaneRunnerPalette: LaneRunnerScenePalette = {
  floor: "#110c07",
  boundary: "#ff9e38",
  lane: "#ffd45a",
  centerLane: "#26d7ff",
  accent: "#ff4f66",
  laneHighlight: "#fff6b8",
};

export function getLaneRunnerSceneName(sceneId: LaneRunnerSceneId): string {
  return sceneNames[sceneId];
}

export function isLaneRunnerSceneId(value: string): value is LaneRunnerSceneId {
  return (laneRunnerSceneIds as readonly string[]).includes(value);
}

export function createLaneRunnerScene(options: LaneRunnerSceneOptions): NeonTopDownScene {
  return sceneCreators[options.sceneId](options);
}

const sceneCreators: Record<LaneRunnerSceneId, (options: LaneRunnerSceneOptions) => NeonTopDownScene> = {
  neonHall: createNeonHall,
  aurora: createAurora,
  crystalForge: options => createThemedLaneRunnerScene(options, crystalForgeLaneRunnerPalette, addCrystalForgeDetails),
  voidGarden: options => createThemedLaneRunnerScene(options, voidGardenLaneRunnerPalette, addVoidGardenDetails),
  solarArray: options => createThemedLaneRunnerScene(options, solarArrayLaneRunnerPalette, addSolarArrayDetails),
};

function createNeonHall(options: LaneRunnerSceneOptions): NeonTopDownScene {
  const { width, height, timeMs } = options;
  const primitives: NeonPrimitive[] = [];
  const geometry = laneRunnerPerspective(width, height);

  addStandardLaneRunnerPerspective(primitives, geometry, standardLaneRunnerPalette, timeMs);
  addHallLaneSignals(primitives, geometry, timeMs);
  addHallFloorGlyphs(primitives, geometry, timeMs);
  addHallHorizonDetails(primitives, geometry, timeMs);
  addHallSidePanels(primitives, geometry, timeMs);
  addHallEnergyTraces(primitives, geometry, timeMs);

  return { primitives };
}

function createAurora(options: LaneRunnerSceneOptions): NeonTopDownScene {
  const { width, height, timeMs } = options;
  const primitives: NeonPrimitive[] = [];
  const geometry = laneRunnerPerspective(width, height);

  addStandardLaneRunnerPerspective(primitives, geometry, auroraLaneRunnerPalette, timeMs);
  addAuroraLaneSignals(primitives, geometry, timeMs);
  addAuroraGroundFlares(primitives, geometry, timeMs);
  addAuroraHorizonVeils(primitives, geometry, timeMs);

  return { primitives };
}

function createThemedLaneRunnerScene(
  options: LaneRunnerSceneOptions,
  palette: LaneRunnerScenePalette,
  addDetails: (items: NeonPrimitive[], geometry: ReturnType<typeof laneRunnerPerspective>, timeMs: number) => void,
): NeonTopDownScene {
  const { width, height, timeMs } = options;
  const primitives: NeonPrimitive[] = [];
  const geometry = laneRunnerPerspective(width, height);
  addStandardLaneRunnerPerspective(primitives, geometry, palette, timeMs);
  addThemedLaneSignals(primitives, geometry, palette, timeMs);
  addDetails(primitives, geometry, timeMs);
  return { primitives };
}

function laneRunnerPerspective(width: number, height: number) {
  const vp = { x: width * .5, y: -height };
  const bottomY = height * .985;
  const bottomHalf = width * hallBottomWidth * .5;
  return {
    width,
    height,
    vp,
    leftBottom: { x: width * .5 - bottomHalf, y: bottomY },
    rightBottom: { x: width * .5 + bottomHalf, y: bottomY },
    leftHorizon: { x: width * .5 - bottomHalf, y: vp.y },
    rightHorizon: { x: width * .5 + bottomHalf, y: vp.y },
  };
}

function addStandardLaneRunnerPerspective(
  items: NeonPrimitive[],
  geometry: ReturnType<typeof laneRunnerPerspective>,
  palette: LaneRunnerScenePalette,
  timeMs: number,
): void {
  addLaneRunnerFloor(items, geometry.width, geometry.height, palette, timeMs);
  addLaneRunnerRails(items, geometry, palette);
  addLaneRunnerDepthLines(items, geometry, palette, timeMs);
}

function addLaneRunnerFloor(items: NeonPrimitive[], width: number, height: number, palette: LaneRunnerScenePalette, timeMs: number): void {
  const pulse = .55 + Math.sin(timeMs * hallEnergySpeed) * .2;
  items.push({ x: width / 2, y: height * .42, width: width * hallBottomWidth, height: height * 1.08, color: palette.floor, secondaryColor: "#02050d", glow: .05, intensity: .23, shape: "bolt" });
  items.push({ x: width / 2, y: -height * .9, width: width * .34, height: 1.4, color: palette.boundary, secondaryColor: palette.laneHighlight, glow: .3, intensity: .18 + pulse * .07, shape: "bolt" });
  items.push({ x: width / 2, y: -height * .78, width: width * .18, height: 1.2, color: palette.accent, secondaryColor: palette.centerLane, glow: .24, intensity: .08, shape: "bolt" });
}

function addLaneRunnerRails(items: NeonPrimitive[], geometry: ReturnType<typeof laneRunnerPerspective>, palette: LaneRunnerScenePalette): void {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon } = geometry;
  for (const [bottom, horizon] of [[leftBottom, leftHorizon], [rightBottom, rightHorizon]] as const) {
    addGlowingLine(items, bottom, horizon, palette.boundary, .48, 6.5);
    addGlowingLine(items, bottom, horizon, palette.laneHighlight, .56, 1.3);
  }

  for (let lane = 1; lane <= 3; lane++) {
    const u = lane / 4;
    const start = lerpPoint(leftBottom, rightBottom, u);
    const end = lerpPoint(leftHorizon, rightHorizon, u);
    const color = lane === 2 ? palette.centerLane : palette.lane;
    addGlowingLine(items, start, end, color, lane === 2 ? .28 : .2, 3.4);
    addGlowingLine(items, start, end, palette.laneHighlight, lane === 2 ? .26 : .18, .9);
  }
}

function addLaneRunnerDepthLines(items: NeonPrimitive[], geometry: ReturnType<typeof laneRunnerPerspective>, palette: LaneRunnerScenePalette, timeMs: number): void {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon } = geometry;
  for (let row = 0; row < 15; row++) {
    const t = Math.pow(row / 14, 1.82);
    const left = lerpPoint(leftHorizon, leftBottom, t);
    const right = lerpPoint(rightHorizon, rightBottom, t);
    const rowPulse = .58 + Math.sin(timeMs / 480 + row * .78) * .42;
    const surge = Math.max(0, Math.sin(timeMs / 820 - row * .72));
    const color = row % 4 === 0 ? palette.laneHighlight : row % 4 === 1 ? palette.lane : row % 4 === 2 ? palette.centerLane : palette.accent;
    addGlowingLine(items, left, right, color, (.15 + t * .23) * (.55 + rowPulse * .45) + surge * .055, 3.1 + t * 2);
    addGlowingLine(items, left, right, color, (.2 + t * .27) * (.52 + rowPulse * .48) + surge * .07, .75 + t * .6);
  }
}

function addHallLaneSignals(items: NeonPrimitive[], geometry: ReturnType<typeof laneRunnerPerspective>, timeMs: number): void {
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

function addHallFloorGlyphs(items: NeonPrimitive[], geometry: ReturnType<typeof laneRunnerPerspective>, timeMs: number): void {
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

function addHallHorizonDetails(items: NeonPrimitive[], geometry: ReturnType<typeof laneRunnerPerspective>, timeMs: number): void {
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

function addHallSidePanels(items: NeonPrimitive[], geometry: ReturnType<typeof laneRunnerPerspective>, timeMs: number): void {
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

function addHallEnergyTraces(items: NeonPrimitive[], geometry: ReturnType<typeof laneRunnerPerspective>, timeMs: number): void {
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

function addAuroraLaneSignals(items: NeonPrimitive[], geometry: ReturnType<typeof laneRunnerPerspective>, timeMs: number): void {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon } = geometry;
  for (let pulseIndex = 0; pulseIndex < 9; pulseIndex++) {
    const travel = (timeMs / 1550 + pulseIndex / 9) % 1;
    const t = Math.pow(travel, 1.48);
    const left = lerpPoint(leftHorizon, leftBottom, t);
    const right = lerpPoint(rightHorizon, rightBottom, t);
    const opacity = .32 * (1 - travel);
    addGlowingLine(items, left, right, pulseIndex % 2 === 0 ? "#b9ff6a" : "#17d7b3", opacity, 1 + t * 1.7);
  }
}

function addAuroraGroundFlares(items: NeonPrimitive[], geometry: ReturnType<typeof laneRunnerPerspective>, timeMs: number): void {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon, width, height } = geometry;
  for (let index = 0; index < 18; index++) {
    const depth = .08 + ((index * 29) % 100) / 112;
    const t = Math.min(1, Math.pow(depth, 1.62));
    const laneSide = index % 2 === 0 ? .22 : .78;
    const left = lerpPoint(leftHorizon, leftBottom, t);
    const right = lerpPoint(rightHorizon, rightBottom, t);
    const point = lerpPoint(left, right, laneSide + Math.sin(index * 1.1 + timeMs / 1800) * .04);
    const shimmer = .55 + Math.sin(timeMs / 430 + index * 1.3) * .35;
    items.push({
      x: point.x,
      y: point.y,
      width: width * (.009 + t * .012),
      height: height * (.018 + t * .035),
      color: index % 3 === 0 ? "#b9ff6a" : index % 3 === 1 ? "#17d7b3" : "#8f56ff",
      secondaryColor: "#ff4fc7",
      glow: .38,
      intensity: (.08 + t * .06) * shimmer,
      shape: index % 4 === 0 ? "diamond" : "bolt",
      rotation: Math.sin(timeMs / 1200 + index) * .18,
    });
  }
}

function addAuroraHorizonVeils(items: NeonPrimitive[], geometry: ReturnType<typeof laneRunnerPerspective>, timeMs: number): void {
  const { vp, width, height } = geometry;
  for (let index = 0; index < 7; index++) {
    const u = (index - 3) / 6;
    const wave = Math.sin(timeMs / 1100 + index * .9);
    items.push({
      x: vp.x + u * width * .36,
      y: vp.y + height * (.075 + index * .006),
      width: width * (.035 + index * .004),
      height: height * (.12 + Math.abs(wave) * .03),
      color: index % 2 === 0 ? "#17d7b3" : "#8f56ff",
      secondaryColor: index % 3 === 0 ? "#b9ff6a" : "#ff4fc7",
      glow: .34,
      intensity: .045 + Math.abs(wave) * .025,
      shape: "line",
      rotation: u * .28 + wave * .08,
    });
  }
}

function addThemedLaneSignals(items: NeonPrimitive[], geometry: ReturnType<typeof laneRunnerPerspective>, palette: LaneRunnerScenePalette, timeMs: number): void {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon } = geometry;
  for (let pulseIndex = 0; pulseIndex < 8; pulseIndex++) {
    const travel = (timeMs / 1700 + pulseIndex / 8) % 1;
    const t = Math.pow(travel, 1.5);
    const left = lerpPoint(leftHorizon, leftBottom, t);
    const right = lerpPoint(rightHorizon, rightBottom, t);
    addGlowingLine(items, left, right, pulseIndex % 2 === 0 ? palette.laneHighlight : palette.accent, .28 * (1 - travel), 1.1 + t * 1.6);
  }
}

function addCrystalForgeDetails(items: NeonPrimitive[], geometry: ReturnType<typeof laneRunnerPerspective>, timeMs: number): void {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon, width, height, vp } = geometry;
  for (let index = 0; index < 16; index++) {
    const t = Math.pow((index + 1) / 17, 1.55);
    const side = index % 2 === 0 ? .14 : .86;
    const edge = lerpPoint(lerpPoint(leftHorizon, leftBottom, t), lerpPoint(rightHorizon, rightBottom, t), side);
    const glint = .55 + Math.sin(timeMs / 520 + index * 1.17) * .35;
    items.push({
      x: edge.x,
      y: edge.y,
      width: width * (.012 + t * .012),
      height: height * (.025 + t * .06),
      color: index % 3 === 0 ? "#ffb84d" : "#63f1ff",
      secondaryColor: index % 4 === 0 ? "#ff5fd8" : "#f4fbff",
      glow: .38,
      intensity: (.08 + t * .055) * glint,
      shape: "diamond",
      rotation: (side < .5 ? -.22 : .22) + Math.sin(timeMs / 1400 + index) * .08,
    });
  }
  addGlowingLine(items, { x: vp.x - width * .13, y: vp.y + height * .045 }, { x: vp.x + width * .13, y: vp.y + height * .045 }, "#ffb84d", .22, 1.3);
}

function addVoidGardenDetails(items: NeonPrimitive[], geometry: ReturnType<typeof laneRunnerPerspective>, timeMs: number): void {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon, width, height, vp } = geometry;
  for (let index = 0; index < 20; index++) {
    const t = Math.pow(.08 + ((index * 23) % 100) / 112, 1.65);
    const side = index % 4 < 2 ? .18 : .82;
    const center = lerpPoint(lerpPoint(leftHorizon, leftBottom, t), lerpPoint(rightHorizon, rightBottom, t), side + Math.sin(timeMs / 1900 + index) * .035);
    const bloom = .5 + Math.sin(timeMs / 760 + index * .8) * .32;
    items.push({
      x: center.x,
      y: center.y,
      width: width * (.006 + t * .014),
      height: width * (.006 + t * .014),
      color: index % 3 === 0 ? "#b9ff6a" : "#35e8b6",
      secondaryColor: index % 2 === 0 ? "#6f53ff" : "#ff4fc7",
      glow: .42,
      intensity: (.07 + t * .05) * bloom,
      shape: index % 2 === 0 ? "diamond" : "bolt",
      rotation: Math.sin(timeMs / 1200 + index) * .4,
    });
  }
  addGlowingLine(items, { x: vp.x - width * .18, y: vp.y + height * .07 }, { x: vp.x + width * .18, y: vp.y + height * .07 }, "#35e8b6", .18, 1.1);
}

function addSolarArrayDetails(items: NeonPrimitive[], geometry: ReturnType<typeof laneRunnerPerspective>, timeMs: number): void {
  const { leftBottom, rightBottom, leftHorizon, rightHorizon, width, height, vp } = geometry;
  for (let index = 0; index < 18; index++) {
    const t = Math.pow((index + 1) / 19, 1.48);
    const side = index % 2 === 0 ? .1 : .9;
    const mount = lerpPoint(lerpPoint(leftHorizon, leftBottom, t), lerpPoint(rightHorizon, rightBottom, t), side);
    const pulse = .62 + Math.sin(timeMs / 610 + index * 1.05) * .3;
    items.push({
      x: mount.x,
      y: mount.y,
      width: width * (.018 + t * .035),
      height: height * (.012 + t * .024),
      color: index % 3 === 0 ? "#ffd45a" : "#ff9e38",
      secondaryColor: index % 4 === 0 ? "#26d7ff" : "#ff4f66",
      glow: .32,
      intensity: (.08 + t * .055) * pulse,
      shape: "bolt",
      rotation: side < .5 ? -.38 : .38,
    });
  }
  addGlowingLine(items, { x: vp.x - width * .11, y: vp.y + height * .035 }, { x: vp.x + width * .11, y: vp.y + height * .035 }, "#fff6b8", .24, 1.4);
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
