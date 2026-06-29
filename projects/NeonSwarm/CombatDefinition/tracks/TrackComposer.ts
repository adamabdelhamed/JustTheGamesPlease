import type { LaneRunnerSceneId } from "@just-the-games-please/neon-factory";
import { c, trackBuilder, type TrackBuilder, type TrackSectionBuilder } from "../TrackBuilder";
import type { TrackMember } from "../TrackDefinition";
import { trackCatalog, type TrackCatalogId, type TrackThemeId, type TrackTier } from "./TrackCatalog";

export interface ComposedTrackOptions {
  label: string;
  description: string;
  sceneId: LaneRunnerSceneId;
  theme: TrackThemeId;
  tier: TrackTier;
}

interface TrackBuildContext {
  readonly tier: TrackTier;
  readonly cursor: number;
  rebuild(rows: number, build: (section: TrackSectionBuilder) => void): void;
  pressure(rows: number, build: (section: TrackSectionBuilder) => void): void;
  respite(rows: number): void;
}

interface ThemePlan {
  finalRows: number;
  open(context: TrackBuildContext): void;
  cycle(context: TrackBuildContext, cycleIndex: number): void;
  finish(context: TrackBuildContext, cycleIndex: number): void;
}

const targetRowsByTier: Record<TrackTier, number> = {
  1: 105,
  2: 265,
  3: 425,
};

const enemyHpByTier: Record<TrackTier, number> = {
  1: 1,
  2: 1,
  3: 1,
};

const pick = <T>(items: readonly T[], tier: TrackTier, cycleIndex: number): T =>
  items[Math.min(items.length - 1, tier - 1 + cycleIndex % 2)];

const themeWeaponPools = {
  gunSchool: {
    primary: ["gun.burstCarbine", "gun.needlerSmg", "lightning.chainSpark", "gun.splitterRifle", "gun.heavyCannon", "lightning.forkCapacitor"],
    support: ["shield.lightGuard", "lightning.chainSpark", "shield.satelliteGuard"],
  },
  guardBlades: {
    primary: ["sword.arcBlade", "sword.cleaver", "lightning.chainSpark", "sword.cleaver", "lightning.forkCapacitor"],
    support: ["shield.lightGuard", "shield.satelliteGuard", "lightning.chainSpark", "shield.hexGuard"],
  },
  crystalSiege: {
    primary: ["gun.burstCarbine", "gun.heavyCannon", "lightning.forkCapacitor", "gun.splitterRifle"],
    support: ["shield.lightGuard", "lightning.chainSpark", "shield.satelliteGuard", "shield.hexGuard"],
  },
  swarmBloom: {
    primary: ["gun.needlerSmg", "sword.arcBlade", "lightning.chainSpark", "gun.burstCarbine", "shield.satelliteGuard"],
    support: ["shield.lightGuard", "sword.cleaver", "lightning.forkCapacitor", "shield.hexGuard"],
  },
  mirrorArray: {
    primary: ["gun.splitterRifle", "lightning.chainSpark", "gun.heavyCannon", "lightning.forkCapacitor", "gun.burstCarbine"],
    support: ["shield.lightGuard", "sword.cleaver", "lightning.chainSpark", "shield.hexGuard"],
  },
} as const satisfies Record<TrackThemeId, { primary: readonly string[]; support: readonly string[] }>;

const themeWeapon = (theme: TrackThemeId, role: "primary" | "support", tier: TrackTier, cycleIndex: number): string =>
  pick(themeWeaponPools[theme][role], tier, cycleIndex);

const recoveryRows = (tier: TrackTier, baseRows: number): number =>
  tier >= 3 ? Math.max(1, baseRows - 2) : tier >= 2 ? Math.max(1, baseRows - 1) : baseRows;

const leftLaneColumns = [c.left.outer, c.left.nearOuter, c.left.mid, c.left.nearInner, c.left.inner] as const;
const rightLaneColumns = [c.right.inner, c.right.nearInner, c.right.mid, c.right.nearOuter, c.right.outer] as const;
const outerLaneColumns = [c.left.outer, c.left.nearOuter, c.left.mid, c.right.mid, c.right.nearOuter, c.right.outer] as const;

function addWideTierPressure(section: TrackSectionBuilder, tier: TrackTier, cycleIndex: number, row: number): void {
  if (tier < 2 || cycleIndex === 0) return;
  section.at(row).wall("basic", { columns: cycleIndex % 2 === 0 ? leftLaneColumns : rightLaneColumns });
  if (tier >= 3) section.at(row + 2).wall("glassShield", { columns: cycleIndex % 2 === 0 ? rightLaneColumns : leftLaneColumns });
}

function createContext(builder: TrackBuilder, tier: TrackTier): TrackBuildContext {
  let cursor = 1;
  return {
    tier,
    get cursor() {
      return cursor;
    },
    rebuild(rows, build) {
      builder.rebuild(rows, build);
      cursor += rows;
    },
    pressure(rows, build) {
      builder.pressure(rows, build);
      cursor += rows;
    },
    respite(rows) {
      builder.respite(rows);
      cursor += rows;
    },
  };
}

function gunSchoolPressure(section: TrackSectionBuilder, tier: TrackTier, cycleIndex: number): void {
  section.at(0).alternating("basic", { columns: [c.left.mid, c.right.mid], count: 22 });
  section.at(22).alternating("basic", { columns: [c.left.outer, c.right.outer], count: 12 });
  if (cycleIndex > 0) section.at(1).drip("basic", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.nearOuter, rows: 34, every: 6 });
  if (cycleIndex > 0) section.at(34).alternating("basic", { columns: [c.left.outer, c.right.outer], count: tier >= 2 ? 4 : 8 });
  if (tier >= 2 && cycleIndex > 0) section.at(6).alternating("winger", { columns: [c.right.inner, c.left.inner], count: 8, gap: 3 });
  addWideTierPressure(section, tier, cycleIndex, 39);
  if (tier >= 3 && cycleIndex > 0) {
    section.at(24).enemy("tank", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.inner });
    section.at(28).wall("basic", { columns: [c.left.nearInner, c.right.nearInner] });
  }
}

function guardBladePressure(section: TrackSectionBuilder, tier: TrackTier, cycleIndex: number): void {
  const hasCleaverSetup = tier >= 2 && cycleIndex > 0;
  section.at(0).line("basic", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.nearOuter, count: 18 });
  section.at(18).alternating("basic", { columns: [c.left.mid, c.right.mid], count: hasCleaverSetup ? 12 : 24, gap: hasCleaverSetup ? 1 : undefined });
  if (cycleIndex > 0) section.at(3).alternating("glassShield", { columns: [c.left.outer, c.right.outer], count: 8, gap: 3 });
  if (cycleIndex > 0) section.at(8).wall("basic", { columns: [c.left.mid, c.right.mid] });
  if (tier >= 2 && cycleIndex > 0) section.at(14).alternating("winger", { columns: [c.left.outer, c.right.outer], count: 6, gap: 3 });
  addWideTierPressure(section, tier, cycleIndex, 35);
  if (tier >= 3 && cycleIndex > 0) section.at(25).enemy("tank", { column: c.right.inner });
}

function crystalSiegePressure(section: TrackSectionBuilder, tier: TrackTier, cycleIndex: number): void {
  section.at(0).alternating("glassShield", { columns: [c.left.outer, c.right.outer, c.left.mid, c.right.mid], count: 16 });
  if (cycleIndex > 0) section.at(23).enemy("tank", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.inner });
  section.at(25).alternating("basic", { columns: [c.left.outer, c.right.outer], count: tier >= 2 ? 16 : 23 });
  if (cycleIndex > 0) section.at(4).line("basic", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.nearOuter, count: 18 });
  if (tier >= 2 && cycleIndex > 0) section.at(24).wall("basic", { columns: [c.left.outer, c.left.nearInner, c.right.nearInner, c.right.outer] });
  addWideTierPressure(section, tier, cycleIndex, 43);
  if (tier >= 3 && cycleIndex > 0) section.at(36).enemy("tank", { column: cycleIndex % 2 === 0 ? c.right.inner : c.left.nearOuter });
}

function swarmBloomPressure(section: TrackSectionBuilder, tier: TrackTier, cycleIndex: number): void {
  section.at(0).alternating("basic", { columns: [c.left.mid, c.right.mid], count: 20 });
  section.at(20).alternating("basic", { columns: [c.left.outer, c.right.outer], count: tier >= 2 ? 16 : 24 });
  if (cycleIndex > 0) section.at(2).drip("basic", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.nearOuter, rows: 34, every: 6 });
  if (tier >= 2 && cycleIndex > 0) section.at(7).alternating("winger", { columns: [c.left.inner, c.right.inner], count: 7, gap: 3 });
  if (tier >= 2 && cycleIndex > 0) section.at(21).wall("glassShield", { columns: [c.left.nearOuter, c.right.nearOuter] });
  addWideTierPressure(section, tier, cycleIndex, 39);
  if (tier >= 3 && cycleIndex > 0) section.at(36).enemy("tank", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.inner });
}

function mirrorArrayPressure(section: TrackSectionBuilder, tier: TrackTier, cycleIndex: number): void {
  section.at(4).alternating("basic", { columns: [c.left.mid, c.right.mid, c.left.outer, c.right.outer], count: 18 });
  section.at(22).alternating("basic", { columns: [c.left.outer, c.right.outer], count: tier >= 2 ? 16 : 24 });
  if (cycleIndex > 0) section.at(0).wall("basic", { columns: [c.left.nearOuter, c.right.nearOuter] });
  if (cycleIndex > 0) section.at(6).drip("glassShield", { column: cycleIndex % 2 === 0 ? c.left.nearInner : c.right.nearInner, rows: 32, every: 6 });
  if (tier >= 2 && cycleIndex > 0) section.at(18).alternating("winger", { columns: [c.right.inner, c.left.inner], count: 7, gap: 3 });
  if (tier >= 2 && cycleIndex > 0) section.at(40).wall("basic", { columns: outerLaneColumns });
  if (tier >= 3 && cycleIndex > 0) section.at(32).wall("tank", { columns: [c.left.nearOuter, c.right.inner] });
}

const themePlans: Record<TrackThemeId, ThemePlan> = {
  gunSchool: {
    finalRows: 42,
    open(context) {
      context.rebuild(9, section => {
        section.at(0).weapon("gun.pulsePistol", { column: c.left.mid });
        section.at(4).weapon("shield.lightGuard", { column: c.right.mid });
        section.at(7).enemy("basic", { column: c.left.nearOuter });
        section.at(8).enemy("basic", { column: c.right.nearOuter });
        if (context.tier >= 2) section.at(6).pickup("unitMultiplier.2x", { column: c.left.nearOuter });
      });
      context.respite(recoveryRows(context.tier, 4));
    },
    cycle(context, cycleIndex) {
      context.pressure(42, section => gunSchoolPressure(section, context.tier, cycleIndex));
      context.rebuild(10, section => {
        section.at(0).weapon(themeWeapon("gunSchool", "primary", context.tier, cycleIndex), { column: cycleIndex % 2 === 0 ? c.right.mid : c.left.mid });
        section.at(2).enemy("basic", { column: cycleIndex % 2 === 0 ? c.left.outer : c.right.outer });
        if (cycleIndex % 3 === 1) section.at(4).weapon(themeWeapon("gunSchool", "support", context.tier, cycleIndex), { column: c.left.nearInner });
        section.at(4).enemy("basic", { column: cycleIndex % 2 === 0 ? c.right.outer : c.left.outer });
        section.at(6).enemy("basic", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.nearOuter });
        if (cycleIndex % 2 === 0) section.at(7).pickup("unitMultiplier.2x", { column: c.right.nearOuter });
        section.at(8).enemy("basic", { column: cycleIndex % 2 === 0 ? c.left.mid : c.right.mid });
        section.at(9).enemy("basic", { column: cycleIndex % 2 === 0 ? c.right.nearOuter : c.left.nearOuter });
      });
      context.respite(recoveryRows(context.tier, context.tier >= 2 ? 4 : 2));
    },
    finish(context, cycleIndex) {
      context.pressure(42, section => gunSchoolPressure(section, context.tier, cycleIndex));
    },
  },
  guardBlades: {
    finalRows: 42,
    open(context) {
      context.rebuild(9, section => {
        section.at(0).weapon("sword.arcBlade", { column: c.left.mid });
        section.at(3).weapon("shield.lightGuard", { column: c.right.mid });
        if (context.tier >= 2) section.at(6).weapon("shield.satelliteGuard", { column: c.left.nearOuter });
      });
      context.respite(recoveryRows(context.tier, 4));
    },
    cycle(context, cycleIndex) {
      context.pressure(42, section => guardBladePressure(section, context.tier, cycleIndex));
      context.rebuild(10, section => {
        section.at(0).weapon(themeWeapon("guardBlades", "primary", context.tier, cycleIndex), { column: c.left.mid });
        section.at(3).weapon(themeWeapon("guardBlades", "support", context.tier, cycleIndex), { column: c.right.mid });
        if (cycleIndex % 2 === 0) section.at(7).pickup("unitMultiplier.2x", { column: c.left.nearInner });
        section.at(8).enemy("basic", { column: cycleIndex % 2 === 0 ? c.right.mid : c.left.mid });
        section.at(9).enemy("glassShield", { column: cycleIndex % 2 === 0 ? c.left.outer : c.right.outer });
      });
      context.respite(recoveryRows(context.tier, 2));
    },
    finish(context, cycleIndex) {
      context.pressure(42, section => guardBladePressure(section, context.tier, cycleIndex));
    },
  },
  crystalSiege: {
    finalRows: 48,
    open(context) {
      context.rebuild(9, section => {
        section.at(0).weapon("gun.burstCarbine", { column: c.left.mid });
        section.at(3).weapon("shield.lightGuard", { column: c.right.mid });
        section.at(6).pickup("unitMultiplier.2x", { column: c.left.nearOuter });
      });
      context.respite(recoveryRows(context.tier, 4));
    },
    cycle(context, cycleIndex) {
      context.pressure(48, section => crystalSiegePressure(section, context.tier, cycleIndex));
      context.rebuild(11, section => {
        section.at(0).weapon(themeWeapon("crystalSiege", "primary", context.tier, cycleIndex), { column: cycleIndex % 2 === 0 ? c.right.mid : c.left.mid });
        section.at(4).weapon(themeWeapon("crystalSiege", "support", context.tier, cycleIndex), { column: c.left.nearOuter });
        if (context.tier >= 2) section.at(7).weapon("sword.cleaver", { column: c.right.nearOuter });
        section.at(9).enemy("glassShield", { column: cycleIndex % 2 === 0 ? c.right.mid : c.left.mid });
        section.at(10).enemy("basic", { column: cycleIndex % 2 === 0 ? c.left.outer : c.right.outer });
      });
      context.respite(recoveryRows(context.tier, 2));
    },
    finish(context, cycleIndex) {
      context.pressure(48, section => crystalSiegePressure(section, context.tier, cycleIndex));
    },
  },
  swarmBloom: {
    finalRows: 44,
    open(context) {
      context.rebuild(9, section => {
        section.at(0).weapon("gun.pulsePistol", { column: c.left.mid });
        section.at(2).pickup("unitMultiplier.2x", { column: c.right.mid });
        section.at(5).weapon("shield.lightGuard", { column: c.left.nearOuter });
      });
      context.respite(recoveryRows(context.tier, 4));
    },
    cycle(context, cycleIndex) {
      context.pressure(44, section => swarmBloomPressure(section, context.tier, cycleIndex));
      context.rebuild(12, section => {
        section.at(0).pickup("unitMultiplier.2x", { column: cycleIndex % 2 === 0 ? c.left.mid : c.right.mid });
        section.at(3).weapon(themeWeapon("swarmBloom", "primary", context.tier, cycleIndex), { column: c.left.nearOuter });
        section.at(7).weapon(themeWeapon("swarmBloom", "support", context.tier, cycleIndex), { column: c.right.nearOuter });
        section.at(9).enemy("basic", { column: cycleIndex % 2 === 0 ? c.right.mid : c.left.mid });
        section.at(10).enemy("basic", { column: cycleIndex % 2 === 0 ? c.left.nearOuter : c.right.nearOuter });
        section.at(11).enemy("winger", { column: cycleIndex % 2 === 0 ? c.right.outer : c.left.outer });
      });
      context.respite(recoveryRows(context.tier, 2));
    },
    finish(context, cycleIndex) {
      context.pressure(44, section => swarmBloomPressure(section, context.tier, cycleIndex));
    },
  },
  mirrorArray: {
    finalRows: 46,
    open(context) {
      context.rebuild(9, section => {
        section.at(0).weapon("gun.burstCarbine", { column: c.right.mid });
        section.at(3).weapon("shield.lightGuard", { column: c.left.mid });
        if (context.tier >= 2) section.at(6).weapon("sword.cleaver", { column: c.right.nearOuter });
      });
      context.respite(recoveryRows(context.tier, 4));
    },
    cycle(context, cycleIndex) {
      context.pressure(46, section => mirrorArrayPressure(section, context.tier, cycleIndex));
      context.rebuild(11, section => {
        section.at(0).weapon(themeWeapon("mirrorArray", "primary", context.tier, cycleIndex), { column: c.left.mid });
        section.at(3).weapon(themeWeapon("mirrorArray", "support", context.tier, cycleIndex), { column: c.right.mid });
        if (cycleIndex % 2 === 0) section.at(8).pickup("unitMultiplier.2x", { column: c.left.nearOuter });
        section.at(9).enemy("basic", { column: cycleIndex % 2 === 0 ? c.right.mid : c.left.mid });
        section.at(10).enemy("glassShield", { column: cycleIndex % 2 === 0 ? c.left.nearInner : c.right.nearInner });
      });
      context.respite(recoveryRows(context.tier, 2));
    },
    finish(context, cycleIndex) {
      context.pressure(46, section => mirrorArrayPressure(section, context.tier, cycleIndex));
    },
  },
};

export function composeTrack(options: ComposedTrackOptions): TrackMember {
  const builder = trackBuilder.create({
    label: options.label,
    description: options.description,
    environment: { sceneId: options.sceneId },
    balance: { enemyHp: enemyHpByTier[options.tier], enemySpeed: 1 },
  });
  const context = createContext(builder, options.tier);
  const plan = themePlans[options.theme];
  const targetRows = targetRowsByTier[options.tier];
  plan.open(context);
  let cycleIndex = 0;
  while (context.cursor + plan.finalRows < targetRows) {
    plan.cycle(context, cycleIndex);
    cycleIndex++;
  }
  plan.finish(context, cycleIndex);
  return builder.build();
}

export function composeCatalogTrack(trackId: TrackCatalogId): TrackMember {
  const entry = trackCatalog[trackId];
  return composeTrack({
    label: entry.label,
    description: entry.description,
    sceneId: entry.sceneId,
    theme: entry.theme,
    tier: entry.tier,
  });
}
