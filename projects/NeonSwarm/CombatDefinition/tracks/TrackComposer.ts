import type { LaneRunnerSceneId } from "@just-the-games-please/neon-factory";
import { gunFamily } from "../GunFamily";
import { lightningFamily } from "../LightningFamily";
import { multiplierFamily } from "../MultiplierFamily";
import { orbFamily, type OrbId } from "../OrbFamily";
import { shieldFamily } from "../ShieldFamily";
import { swordFamily, type SwordMember } from "../SwordFamily";
import { c, trackBuilder, type TrackBuilder, type TrackColumn, type TrackEnemyRef, type TrackSectionBuilder } from "../TrackBuilder";
import type { TrackMember } from "../TrackDefinition";
import { trackCatalog, type TrackCatalogId, type TrackThemeId, type TrackTier } from "./TrackCatalog";

export type JourneyBeatKind = "intro" | "ramp" | "lesson" | "pressure" | "rest" | "rebuild" | "challenge" | "finale";
export type PressureLevel = "low" | "medium" | "high" | "peak";
export type PressureStyle = "centerAlternating" | "outerAlternating" | "laneLine" | "mirroredWalls" | "wideSweep" | "tankBreak";
export type PickupRole = "primary" | "support" | "closeRange" | "upgrade";

export interface JourneyBeatRecipe {
  kind: JourneyBeatKind;
  pressure?: PressureLevel;
  rows?: number;
  pickupRoles?: readonly PickupRole[];
  styles?: readonly PressureStyle[];
}

export interface TrackRecipe {
  goals: readonly string[];
  seed: string;
  journey: readonly JourneyBeatRecipe[];
}

export interface FamilyRecipe {
  theme: TrackThemeId;
  preferredWeapons: readonly string[];
  supportWeapons: readonly string[];
  closeRangeWeapons: readonly string[];
  preferredEnemies: readonly TrackEnemyRef[];
  bossEnemies: readonly TrackEnemyRef[];
  pressureStyles: readonly PressureStyle[];
  openingWeapons: readonly string[];
  openingPickups?: readonly string[];
  upgradeSpacing: number;
}

export interface TierProfile {
  targetRows: number;
  enemyHp: number;
  enemySpeed: number;
  pressureThreat: Record<PressureLevel, number>;
  pressureRows: Record<PressureLevel, number>;
  rebuildRows: number;
  restRows: number;
  maxWallWidth: number;
}

export interface SegmentDebugSummary {
  kind: JourneyBeatKind;
  rows: number;
  pressure: PressureLevel | "none";
  threatEstimate: number;
  playerPowerEstimate: number;
  selectedWeapons: readonly string[];
  selectedPickups: readonly string[];
  selectedEnemies: readonly string[];
}

export interface ComposerDebugSummary {
  seed: string;
  seedValue: number;
  familyId: TrackThemeId;
  trackId: TrackCatalogId;
  tier: TrackTier;
  generatedRows: number;
  selectedWeapons: readonly string[];
  selectedPickups: readonly string[];
  selectedEnemies: readonly string[];
  weaponPower: Readonly<Record<string, number>>;
  enemyThreat: Readonly<Record<string, number>>;
  segments: readonly SegmentDebugSummary[];
  warnings: readonly string[];
}

export interface ComposedTrackOptions {
  trackId?: TrackCatalogId;
  label: string;
  description: string;
  sceneId: LaneRunnerSceneId;
  theme: TrackThemeId;
  tier: TrackTier;
  seed?: string;
}

interface ComposeResult {
  track: TrackMember;
  debug: ComposerDebugSummary;
}

interface GeneratorState {
  cursor: number;
  playerPower: number;
  cycle: number;
  readonly selectedWeapons: Set<string>;
  readonly selectedPickups: Set<string>;
  readonly selectedEnemies: Set<string>;
  readonly segments: SegmentDebugSummary[];
  readonly warnings: string[];
  bossesPlaced: number;
  lastBossTrackRow: number;
}

interface Rng {
  next(): number;
  pick<T>(items: readonly T[]): T;
}

const tierProfiles: Record<TrackTier, TierProfile> = {
  1: {
    targetRows: 112,
    enemyHp: 1,
    enemySpeed: 1,
    pressureThreat: { low: 18, medium: 30, high: 44, peak: 56 },
    pressureRows: { low: 18, medium: 26, high: 34, peak: 40 },
    rebuildRows: 8,
    restRows: 2,
    maxWallWidth: 4,
  },
  2: {
    targetRows: 270,
    enemyHp: 1,
    enemySpeed: 1,
    pressureThreat: { low: 20, medium: 34, high: 50, peak: 66 },
    pressureRows: { low: 24, medium: 34, high: 44, peak: 52 },
    rebuildRows: 9,
    restRows: 3,
    maxWallWidth: 4,
  },
  3: {
    targetRows: 430,
    enemyHp: 1,
    enemySpeed: 1,
    pressureThreat: { low: 34, medium: 56, high: 92, peak: 136 },
    pressureRows: { low: 30, medium: 42, high: 54, peak: 74 },
    rebuildRows: 8,
    restRows: 2,
    maxWallWidth: 5,
  },
};

const familyRecipes: Record<TrackThemeId, FamilyRecipe> = {
  gunSchool: {
    theme: "gunSchool",
    preferredWeapons: ["gun.pulsePistol", "gun.burstCarbine", "gun.needlerSmg", "gun.splitterRifle", "gun.heavyCannon", "lightning.chainSpark"],
    supportWeapons: ["shield.lightGuard", "shield.satelliteGuard", "lightning.chainSpark"],
    closeRangeWeapons: ["lightning.chainSpark", "sword.arcBlade"],
    preferredEnemies: ["basic", "glassShield", "winger"],
    bossEnemies: ["tank"],
    pressureStyles: ["centerAlternating", "outerAlternating", "laneLine", "wideSweep"],
    openingWeapons: ["gun.pulsePistol", "shield.lightGuard"],
    upgradeSpacing: 2,
  },
  guardBlades: {
    theme: "guardBlades",
    preferredWeapons: ["sword.arcBlade", "sword.cleaver", "shield.lightGuard", "shield.satelliteGuard", "lightning.chainSpark"],
    supportWeapons: ["shield.lightGuard", "shield.satelliteGuard", "shield.hexGuard", "lightning.chainSpark"],
    closeRangeWeapons: ["sword.arcBlade", "sword.cleaver", "lightning.chainSpark"],
    preferredEnemies: ["basic", "glassShield", "winger"],
    bossEnemies: ["tank"],
    pressureStyles: ["laneLine", "centerAlternating", "wideSweep", "mirroredWalls"],
    openingWeapons: ["sword.arcBlade", "shield.lightGuard"],
    upgradeSpacing: 3,
  },
  crystalSiege: {
    theme: "crystalSiege",
    preferredWeapons: ["gun.pulsePistol", "gun.burstCarbine", "gun.splitterRifle", "gun.heavyCannon", "lightning.forkCapacitor", "sword.cleaver"],
    supportWeapons: ["shield.lightGuard", "shield.satelliteGuard", "shield.hexGuard", "lightning.chainSpark"],
    closeRangeWeapons: ["sword.cleaver", "lightning.chainSpark"],
    preferredEnemies: ["glassShield", "basic", "winger"],
    bossEnemies: ["tank"],
    pressureStyles: ["mirroredWalls", "tankBreak", "outerAlternating", "wideSweep"],
    openingWeapons: ["gun.pulsePistol", "shield.lightGuard"],
    openingPickups: ["unitMultiplier.2x"],
    upgradeSpacing: 2,
  },
  swarmBloom: {
    theme: "swarmBloom",
    preferredWeapons: ["gun.needlerSmg", "sword.arcBlade", "lightning.chainSpark", "gun.burstCarbine", "shield.satelliteGuard"],
    supportWeapons: ["shield.lightGuard", "sword.cleaver", "lightning.forkCapacitor", "shield.hexGuard"],
    closeRangeWeapons: ["sword.arcBlade", "lightning.chainSpark", "sword.cleaver"],
    preferredEnemies: ["basic", "winger", "glassShield"],
    bossEnemies: ["tank"],
    pressureStyles: ["centerAlternating", "wideSweep", "outerAlternating", "laneLine"],
    openingWeapons: ["gun.pulsePistol", "shield.lightGuard"],
    openingPickups: ["unitMultiplier.2x"],
    upgradeSpacing: 1,
  },
  mirrorArray: {
    theme: "mirrorArray",
    preferredWeapons: ["gun.pulsePistol", "gun.burstCarbine", "gun.splitterRifle", "lightning.chainSpark", "gun.heavyCannon", "lightning.forkCapacitor"],
    supportWeapons: ["shield.lightGuard", "sword.cleaver", "shield.hexGuard", "lightning.chainSpark"],
    closeRangeWeapons: ["lightning.chainSpark", "sword.cleaver"],
    preferredEnemies: ["basic", "glassShield", "winger"],
    bossEnemies: ["tank"],
    pressureStyles: ["mirroredWalls", "outerAlternating", "centerAlternating", "tankBreak"],
    openingWeapons: ["gun.pulsePistol", "shield.lightGuard"],
    upgradeSpacing: 2,
  },
};

const defaultJourney: Record<TrackTier, readonly JourneyBeatRecipe[]> = {
  1: [
    { kind: "intro", pickupRoles: ["primary", "support"] },
    { kind: "lesson", pressure: "low" },
    { kind: "rebuild", pickupRoles: ["primary", "upgrade"] },
    { kind: "pressure", pressure: "medium" },
    { kind: "rest" },
    { kind: "challenge", pressure: "high", pickupRoles: ["support"] },
    { kind: "finale", pressure: "high" },
  ],
  2: [
    { kind: "intro", pickupRoles: ["primary", "support", "upgrade"] },
    { kind: "ramp", pressure: "low", pickupRoles: ["primary"], styles: ["centerAlternating", "laneLine"] },
    { kind: "lesson", pressure: "medium", styles: ["centerAlternating", "outerAlternating"] },
    { kind: "rebuild", pickupRoles: ["support"] },
    { kind: "challenge", pressure: "medium", styles: ["laneLine", "centerAlternating", "outerAlternating"] },
    { kind: "rebuild", pickupRoles: ["primary", "upgrade"] },
    { kind: "pressure", pressure: "high" },
    { kind: "challenge", pressure: "peak" },
    { kind: "finale", pressure: "peak" },
  ],
  3: [
    { kind: "intro", pickupRoles: ["primary", "support", "closeRange", "upgrade"] },
    { kind: "ramp", pressure: "low", pickupRoles: ["primary"], styles: ["centerAlternating", "laneLine", "outerAlternating"] },
    { kind: "challenge", pressure: "medium", styles: ["centerAlternating", "outerAlternating", "laneLine"] },
    { kind: "rebuild", pickupRoles: ["support", "upgrade"] },
    { kind: "pressure", pressure: "high" },
    { kind: "rebuild", pickupRoles: ["primary", "closeRange", "upgrade"] },
    { kind: "challenge", pressure: "peak" },
    { kind: "rebuild", pickupRoles: ["support", "upgrade"] },
    { kind: "pressure", pressure: "peak", styles: ["wideSweep", "mirroredWalls", "outerAlternating"] },
    { kind: "rebuild", pickupRoles: ["primary", "support"] },
    { kind: "finale", pressure: "peak", styles: ["wideSweep", "mirroredWalls", "wideSweep", "outerAlternating"] },
  ],
};

const trackRecipes = Object.fromEntries(
  Object.entries(trackCatalog).map(([trackId, entry]) => [
    trackId,
    {
      goals: [entry.description],
      seed: `${trackId}:${entry.tier}`,
      journey: defaultJourney[entry.tier],
    },
  ]),
) as unknown as Record<TrackCatalogId, TrackRecipe>;

const allColumns = [c.left.outer, c.left.nearOuter, c.left.mid, c.left.nearInner, c.left.inner, c.right.inner, c.right.nearInner, c.right.mid, c.right.nearOuter, c.right.outer] as const;
const centerColumns = [c.left.mid, c.right.mid] as const;
const outerColumns = [c.left.outer, c.right.outer, c.left.nearOuter, c.right.nearOuter] as const;
const leftColumns = [c.left.outer, c.left.nearOuter, c.left.mid, c.left.nearInner, c.left.inner] as const;
const rightColumns = [c.right.inner, c.right.nearInner, c.right.mid, c.right.nearOuter, c.right.outer] as const;

function createRng(seed: string): Rng & { readonly seedValue: number } {
  let value = 2166136261;
  for (let index = 0; index < seed.length; index++) {
    value ^= seed.charCodeAt(index);
    value = Math.imul(value, 16777619);
  }
  value >>>= 0;
  return {
    seedValue: value,
    next() {
      value = Math.imul(value + 0x6d2b79f5, 1);
      let mixed = value;
      mixed = Math.imul(mixed ^ mixed >>> 15, mixed | 1);
      mixed ^= mixed + Math.imul(mixed ^ mixed >>> 7, mixed | 61);
      return ((mixed ^ mixed >>> 14) >>> 0) / 4294967296;
    },
    pick<T>(items: readonly T[]): T {
      if (items.length === 0) throw new Error("Cannot pick from an empty collection.");
      return items[Math.floor(this.next() * items.length)];
    },
  };
}

function canonicalWeaponId(id: string): string {
  if (id.startsWith("pickup.weapon.")) return id;
  const [family, member] = id.split(".");
  return `pickup.weapon.${family}.${member}`;
}

function minimumTierForWeapon(id: string): TrackTier {
  const canonical = canonicalWeaponId(id);
  if (canonical.startsWith("pickup.weapon.gun.")) {
    const member = gunFamily.members[canonical.slice("pickup.weapon.gun.".length) as keyof typeof gunFamily.members];
    return member.rarity === "starter" ? 1 : member.rarity === "common" ? 2 : 3;
  }
  if (canonical.startsWith("pickup.weapon.sword.")) {
    const member = swordFamily.members[canonical.slice("pickup.weapon.sword.".length) as keyof typeof swordFamily.members] as SwordMember;
    return member.rarity === "starter" ? 1 : member.rarity === "common" ? 2 : 3;
  }
  if (canonical.startsWith("pickup.weapon.shield.")) {
    const member = shieldFamily.members[canonical.slice("pickup.weapon.shield.".length) as keyof typeof shieldFamily.members];
    return member.rarity === "starter" ? 1 : member.rarity === "common" ? 2 : 3;
  }
  if (canonical.startsWith("pickup.weapon.lightning.")) {
    const member = lightningFamily.members[canonical.slice("pickup.weapon.lightning.".length) as keyof typeof lightningFamily.members];
    return member.rarity === "uncommon" ? 3 : 3;
  }
  return 1;
}

function minimumTierForEnemy(id: TrackEnemyRef): TrackTier {
  const canonical = id === "basic" || id === "enemy.basic" ? "basicOrb" : id.replace(/^enemy\./, "");
  if (canonical === "tank") return 3;
  if (canonical === "winger") return 2;
  return 1;
}

function weaponPower(id: string): number {
  const canonical = canonicalWeaponId(id);
  if (canonical.startsWith("pickup.weapon.gun.")) {
    const member = gunFamily.members[canonical.slice("pickup.weapon.gun.".length) as keyof typeof gunFamily.members];
    const level = member.levels[0];
    return level.fireRatePerSecond * level.damage * level.projectileCount * level.burstCount * (1 + level.pierce * 0.35);
  }
  if (canonical.startsWith("pickup.weapon.sword.")) {
    const member = swordFamily.members[canonical.slice("pickup.weapon.sword.".length) as keyof typeof swordFamily.members] as SwordMember;
    return member.damage * member.maxTargets / member.cooldownSeconds * (member.rowReach ? 1.35 : 1);
  }
  if (canonical.startsWith("pickup.weapon.shield.")) {
    const member = shieldFamily.members[canonical.slice("pickup.weapon.shield.".length) as keyof typeof shieldFamily.members];
    return member.maxCharges * 0.8 + member.radius / 30;
  }
  if (canonical.startsWith("pickup.weapon.lightning.")) {
    const member = lightningFamily.members[canonical.slice("pickup.weapon.lightning.".length) as keyof typeof lightningFamily.members];
    const level = member.levels[0];
    return level.damage * (level.maxJumps + level.branchFanout) / level.cooldownSeconds;
  }
  return 1;
}

function enemyThreat(id: string): number {
  const memberId = id === "basic" || id === "enemy.basic" ? "basicOrb" : id.replace(/^enemy\./, "") as OrbId;
  const enemy = orbFamily.members[memberId as keyof typeof orbFamily.members];
  return enemy.health * 2 + enemy.speed / 58 + enemy.columnSpan * 1.4 + enemy.contactDamage * 1.6 + enemy.impactResistance;
}

function enemyColumnSpan(id: string): number {
  const memberId = id === "basic" || id === "enemy.basic" ? "basicOrb" : id.replace(/^enemy\./, "") as OrbId;
  return orbFamily.members[memberId as keyof typeof orbFamily.members].columnSpan;
}

function pickupPower(id: string): number {
  if (id === "unitMultiplier.2x" || id === "pickup.unitMultiplier.2x") {
    return multiplierFamily.members.squadPlusOne.squadAdded * 4;
  }
  if (id === "showstopper.dragonsBreath" || id === "pickup.showstopper.dragonsBreath") {
    return 14;
  }
  return weaponPower(id);
}

function createState(): GeneratorState {
  return {
    cursor: 1,
    playerPower: 1,
    cycle: 0,
    selectedWeapons: new Set(),
    selectedPickups: new Set(),
    selectedEnemies: new Set(),
    segments: [],
    warnings: [],
    bossesPlaced: 0,
    lastBossTrackRow: Number.NEGATIVE_INFINITY,
  };
}

function rowsForBeat(beat: JourneyBeatRecipe, profile: TierProfile): number {
  if (beat.rows) return beat.rows;
  if (beat.kind === "intro") return profile.rebuildRows;
  if (beat.kind === "rebuild") return profile.rebuildRows;
  if (beat.kind === "rest") return profile.restRows;
  if (beat.kind === "ramp") return profile.pressureRows.medium;
  return profile.pressureRows[beat.pressure ?? "medium"];
}

function selectWeapon(recipe: FamilyRecipe, role: PickupRole, tier: TrackTier, state: GeneratorState, rng: Rng): string | null {
  if (role === "upgrade") return null;
  const rawPool = role === "support"
    ? recipe.supportWeapons
    : role === "closeRange"
    ? recipe.closeRangeWeapons
    : recipe.preferredWeapons;
  const rolePool = role === "closeRange"
    ? rawPool
    : role === "primary"
    ? rawPool.filter(weapon => !canonicalWeaponId(weapon).startsWith("pickup.weapon.shield."))
    : rawPool;
  const pool = rolePool.length > 0 ? rolePool : rawPool;
  const tierPool = pool.filter(weapon => minimumTierForWeapon(weapon) <= tier);
  const availablePool = tierPool.length > 0 ? tierPool : pool.filter(weapon => minimumTierForWeapon(weapon) === 1);
  if (availablePool.length === 0) {
    state.warnings.push(`No ${role} weapon was available for tier ${tier} in ${recipe.theme}.`);
    return null;
  }
  const offset = Math.min(availablePool.length - 1, state.cycle);
  const candidates = availablePool.slice(offset).concat(availablePool.slice(0, offset));
  return rng.pick(candidates);
}

function placePickups(section: TrackSectionBuilder, recipe: FamilyRecipe, beat: JourneyBeatRecipe, tier: TrackTier, rows: number, state: GeneratorState, rng: Rng): { weapons: string[]; pickups: string[] } {
  const roles = beat.pickupRoles ?? [];
  const columns = [c.left.mid, c.right.mid, c.left.nearOuter, c.right.nearOuter, c.left.nearInner, c.right.nearInner] as const;
  const weapons: string[] = [];
  const pickups: string[] = [];
  let row = 0;
  for (const role of roles) {
    if (role === "upgrade") {
      const authoredUpgrade = beat.pickupRoles?.includes("upgrade") ?? false;
      if (authoredUpgrade || state.cycle % recipe.upgradeSpacing === 0) {
        section.at(row).pickup("unitMultiplier.2x", { column: columns[(row + 1) % columns.length] });
        state.playerPower += pickupPower("unitMultiplier.2x");
        state.selectedPickups.add("pickup.unitMultiplier.2x");
        pickups.push("pickup.unitMultiplier.2x");
      }
    } else {
      const weapon = selectWeapon(recipe, role, tier, state, rng);
      if (weapon) {
        section.at(row).weapon(weapon, { column: columns[row % columns.length] });
        state.playerPower += weaponPower(weapon);
        state.selectedWeapons.add(canonicalWeaponId(weapon));
        weapons.push(canonicalWeaponId(weapon));
      }
    }
    row += 2;
  }
  if (tier >= 2 && beat.kind === "rebuild") {
    const pickup = "pickup.showstopper.dragonsBreath";
    const pickupRow = Math.max(0, Math.min(rows - 1, rows - 3));
    section.at(pickupRow).pickup(pickup, { column: state.cycle % 2 === 0 ? c.left.inner : c.right.inner });
    state.playerPower += pickupPower(pickup);
    state.selectedPickups.add(pickup);
    pickups.push(pickup);
  }
  return { weapons, pickups };
}

function enemyForThreat(recipe: FamilyRecipe, tier: TrackTier, target: number): TrackEnemyRef {
  const allowedEnemies = recipe.preferredEnemies.filter(id => minimumTierForEnemy(id) <= tier);
  const pool = allowedEnemies.length > 0 ? allowedEnemies : recipe.preferredEnemies;
  const candidates = pool.filter(id => enemyThreat(id) <= target + 4);
  return candidates[candidates.length - 1] ?? pool[0];
}

function enemyForPressure(recipe: FamilyRecipe, tier: TrackTier, pressure: PressureLevel, row: number, target: number): TrackEnemyRef {
  if (tier === 2 && (pressure === "low" || pressure === "medium")) {
    const hasGlass = recipe.preferredEnemies.includes("glassShield");
    const hasWinger = recipe.preferredEnemies.includes("winger");
    if (hasWinger && row % 7 === 0) return "winger";
    if (hasGlass) return "glassShield";
  }
  return enemyForThreat(recipe, tier, target);
}

function bossForPressure(recipe: FamilyRecipe, tier: TrackTier, state: GeneratorState): TrackEnemyRef | null {
  const availableBosses = recipe.bossEnemies.filter(id => minimumTierForEnemy(id) <= tier + 1);
  if (availableBosses.length === 0) {
    state.warnings.push(`No boss enemy is available for ${recipe.theme} at tier ${tier}.`);
    return null;
  }
  return availableBosses[state.bossesPlaced % availableBosses.length];
}

function canPlaceBoss(tier: TrackTier, state: GeneratorState, trackRow: number): boolean {
  const maxBosses = tier === 2 ? 2 : tier >= 3 ? 4 : 0;
  const minSpacing = tier === 2 ? 34 : 58;
  return state.bossesPlaced < maxBosses && trackRow - state.lastBossTrackRow >= minSpacing;
}

function columnsForStyle(style: PressureStyle, rng: Rng, maxWallWidth: number): readonly TrackColumn[] {
  if (style === "centerAlternating") return centerColumns;
  if (style === "outerAlternating") return outerColumns;
  if (style === "wideSweep") return rng.next() > 0.5 ? leftColumns.slice(0, maxWallWidth) : rightColumns.slice(0, maxWallWidth);
  if (style === "mirroredWalls") return [c.left.nearOuter, c.right.nearOuter, c.left.mid, c.right.mid].slice(0, Math.max(2, Math.min(4, maxWallWidth)));
  if (style === "tankBreak") return rng.next() > 0.5 ? [c.left.nearOuter] : [c.right.inner];
  return rng.next() > 0.5 ? [c.left.nearOuter] : [c.right.nearOuter];
}

function columnsThatFit(enemy: TrackEnemyRef, columns: readonly TrackColumn[]): readonly TrackColumn[] {
  const span = enemyColumnSpan(enemy);
  return columns.filter(column => column % 5 + span <= 5);
}

function nonOverlappingColumns(enemy: TrackEnemyRef, columns: readonly TrackColumn[]): readonly TrackColumn[] {
  const span = enemyColumnSpan(enemy);
  const occupied = new Set<number>();
  const selected: TrackColumn[] = [];
  for (const column of columns) {
    const cells = Array.from({ length: span }, (_, offset) => column + offset);
    if (cells.some(cell => occupied.has(cell))) continue;
    selected.push(column);
    for (const cell of cells) occupied.add(cell);
  }
  return selected;
}

function placePressure(section: TrackSectionBuilder, recipe: FamilyRecipe, beat: JourneyBeatRecipe, tier: TrackTier, profile: TierProfile, state: GeneratorState, rng: Rng, startRow = 0): { threat: number; enemies: string[] } {
  const pressure = beat.pressure ?? "medium";
  const targetThreat = profile.pressureThreat[pressure] + state.playerPower * (pressure === "peak" ? 0.45 : 0.25);
  const baseStyles = beat.styles ?? recipe.pressureStyles;
  const styles = tier === 1 && pressure === "high"
    ? [...baseStyles, "wideSweep", "wideSweep", "mirroredWalls"] as const
    : tier >= 3 && pressure === "peak"
    ? [...baseStyles, "wideSweep", "wideSweep", "wideSweep", "mirroredWalls", "mirroredWalls"] as const
    : baseStyles;
  let row = startRow;
  let emittedThreat = 0;
  const enemies = new Set<string>();
  const beatRows = rowsForBeat(beat, profile);
  while (row < beatRows - 1) {
    const style = rng.pick(styles);
    const columns = columnsForStyle(style, rng, profile.maxWallWidth);
    const remainingThreat = Math.max(0, targetThreat - emittedThreat);
    const trackRow = state.cursor + row;
    const tierTwoFinaleBossRows = [
      startRow + Math.floor((beatRows - startRow) * .3),
      startRow + Math.floor((beatRows - startRow) * .72),
    ];
    const tierTwoFinaleBoss = tier === 2
      && beat.kind === "finale"
      && state.bossesPlaced < tierTwoFinaleBossRows.length
      && row >= tierTwoFinaleBossRows[state.bossesPlaced]
      && canPlaceBoss(tier, state, trackRow);
    const tierThreeBoss = tier >= 3
      && canPlaceBoss(tier, state, trackRow)
      && emittedThreat < targetThreat * 1.15
      && (style === "tankBreak" || (pressure === "peak" && remainingThreat > 18 && row > 12));
    const shouldUseHeavy = tierTwoFinaleBoss || tierThreeBoss;
    const bossEnemy = shouldUseHeavy ? bossForPressure(recipe, tier, state) : null;
    const enemy = shouldUseHeavy
      ? bossEnemy ?? enemyForPressure(recipe, tier, pressure, row, Math.max(4, remainingThreat / Math.max(1, columns.length)))
      : enemyForPressure(recipe, tier, pressure, row, Math.max(4, remainingThreat / Math.max(1, columns.length)));
    if (tierTwoFinaleBoss && bossEnemy) {
      const column = state.bossesPlaced % 2 === 0 ? c.left.nearOuter : c.right.inner;
      section.at(row).enemy(bossEnemy, { column });
      emittedThreat += enemyThreat(bossEnemy);
      state.bossesPlaced++;
      state.lastBossTrackRow = trackRow;
      enemies.add(bossEnemy === "basic" ? "enemy.basic" : `enemy.${bossEnemy}`);
      row += 12;
      continue;
    }
    if (tierThreeBoss && bossEnemy) {
      const column = state.bossesPlaced % 2 === 0 ? c.left.nearOuter : c.right.inner;
      section.at(row).enemy(bossEnemy, { column });
      emittedThreat += enemyThreat(bossEnemy);
      state.bossesPlaced++;
      state.lastBossTrackRow = trackRow;
      enemies.add(bossEnemy === "basic" ? "enemy.basic" : `enemy.${bossEnemy}`);
      row += 14;
      continue;
    }
    const fittingColumns = columnsThatFit(enemy, columns);
    const safeEnemy = fittingColumns.length > 0 ? enemy : "basic";
    const safeColumns = nonOverlappingColumns(safeEnemy, fittingColumns.length > 0 ? fittingColumns : columnsThatFit("basic", columns));
    const threat = enemyThreat(safeEnemy) * safeColumns.length;
    const breathRows = tier === 1 && pressure !== "high" && pressure !== "peak" ? 1 : 0;
    if (style === "laneLine" && safeColumns.length === 1) {
      const count = Math.min(8, Math.max(1, beatRows - row - 1));
      section.at(row).line(safeEnemy, { column: safeColumns[0], count });
      row += count + breathRows;
      emittedThreat += enemyThreat(safeEnemy) * count;
    } else if (style === "mirroredWalls" || style === "wideSweep" || (tier === 1 && pressure === "high" && safeColumns.length > 1)) {
      section.at(row).wall(safeEnemy, { columns: safeColumns });
      row += pressure === "low" ? 3 : 2;
      emittedThreat += threat;
    } else {
      const count = Math.min(14, Math.max(1, beatRows - row - 1));
      section.at(row).alternating(safeEnemy, { columns: safeColumns, count });
      row += count + breathRows;
      emittedThreat += enemyThreat(safeEnemy) * count;
    }
    enemies.add(safeEnemy === "basic" ? "enemy.basic" : `enemy.${safeEnemy}`);
  }
  for (const enemy of enemies) state.selectedEnemies.add(enemy);
  return { threat: emittedThreat, enemies: [...enemies] };
}

function compileBeat(builder: TrackBuilder, recipe: FamilyRecipe, beat: JourneyBeatRecipe, tier: TrackTier, profile: TierProfile, state: GeneratorState, rng: Rng): void {
  const rows = rowsForBeat(beat, profile);
  const segmentStartPower = state.playerPower;
  let placedWeapons: string[] = [];
  let placedPickups: string[] = [];
  let emittedThreat = 0;
  let selectedEnemies: string[] = [];

  if (beat.kind === "rest") {
    builder.respite(rows);
  } else {
    const sectionKind = beat.kind === "intro" || beat.kind === "rebuild" ? "rebuild" : "pressure";
    builder.section(sectionKind, rows, section => {
      const pickups = placePickups(section, recipe, beat, tier, rows, state, rng);
      placedWeapons = pickups.weapons;
      placedPickups = pickups.pickups;
      if (beat.kind !== "intro" && beat.kind !== "rebuild") {
        const pressureStartRow = Math.max(0, (beat.pickupRoles?.length ?? 0) * 2 - 1);
        const pressure = placePressure(section, recipe, beat, tier, profile, state, rng, pressureStartRow);
        emittedThreat = pressure.threat;
        selectedEnemies = pressure.enemies;
      } else if (beat.kind === "rebuild" && rows > 4) {
        const enemy = recipe.preferredEnemies[0];
        section.at(rows - 2).enemy(enemy, { column: rng.pick(allColumns) });
        emittedThreat = enemyThreat(enemy);
        selectedEnemies = [enemy === "basic" ? "enemy.basic" : `enemy.${enemy}`];
        state.selectedEnemies.add(selectedEnemies[0]);
      }
    });
  }

  state.cursor += rows;
  state.cycle++;
  state.segments.push({
    kind: beat.kind,
    rows,
    pressure: beat.pressure ?? "none",
    threatEstimate: Number(emittedThreat.toFixed(2)),
    playerPowerEstimate: Number(segmentStartPower.toFixed(2)),
    selectedWeapons: placedWeapons,
    selectedPickups: placedPickups,
    selectedEnemies,
  });
}

function composeInternal(options: ComposedTrackOptions): ComposeResult {
  const profile = tierProfiles[options.tier];
  const recipe = familyRecipes[options.theme];
  const trackId = options.trackId ?? "neon-nebulae-1";
  const trackRecipe = options.trackId ? trackRecipes[options.trackId] : { goals: [options.description], seed: options.seed ?? `${options.theme}:${options.tier}`, journey: defaultJourney[options.tier] };
  const seed = options.seed ?? trackRecipe.seed;
  const rng = createRng(seed);
  const state = createState();
  const builder = trackBuilder.create({
    label: options.label,
    description: options.description,
    environment: { sceneId: options.sceneId },
    balance: { enemyHp: profile.enemyHp, enemySpeed: profile.enemySpeed },
  });

  compileBeat(builder, recipe, {
    kind: "intro",
    rows: profile.rebuildRows,
    pickupRoles: ["primary", "support", ...(options.tier >= 3 ? ["closeRange" as const] : []), ...(recipe.openingPickups?.length ? ["upgrade" as const] : [])],
  }, options.tier, profile, state, rng);
  for (const beat of trackRecipe.journey.filter(item => item.kind !== "intro")) {
    if (state.cursor >= profile.targetRows - profile.pressureRows.high) break;
    compileBeat(builder, recipe, beat, options.tier, profile, state, rng);
  }
  while (state.cursor < profile.targetRows - profile.pressureRows.high) {
    compileBeat(builder, recipe, { kind: state.cycle % 3 === 0 ? "rebuild" : "pressure", pressure: state.cycle % 2 === 0 ? "high" : "medium", pickupRoles: state.cycle % 3 === 0 ? ["primary", "upgrade"] : undefined }, options.tier, profile, state, rng);
  }
  compileBeat(builder, recipe, { kind: "finale", pressure: options.tier === 1 ? "high" : "peak" }, options.tier, profile, state, rng);

  const track = builder.build();
  const generatedRows = track.definition.layout.split(/\r?\n/).filter(row => row.trim()).length;
  const weaponPowerEntries = [...state.selectedWeapons].map(id => [id, Number(weaponPower(id).toFixed(2))] as const);
  const enemyThreatEntries = [...state.selectedEnemies].map(id => [id, Number(enemyThreat(id).toFixed(2))] as const);
  return {
    track,
    debug: {
      seed,
      seedValue: rng.seedValue,
      familyId: options.theme,
      trackId,
      tier: options.tier,
      generatedRows,
      selectedWeapons: [...state.selectedWeapons],
      selectedPickups: [...state.selectedPickups],
      selectedEnemies: [...state.selectedEnemies],
      weaponPower: Object.fromEntries(weaponPowerEntries),
      enemyThreat: Object.fromEntries(enemyThreatEntries),
      segments: state.segments,
      warnings: state.warnings,
    },
  };
}

export function composeTrack(options: ComposedTrackOptions): TrackMember {
  return composeInternal(options).track;
}

export function describeComposedTrack(options: ComposedTrackOptions): ComposerDebugSummary {
  return composeInternal(options).debug;
}

export function composeCatalogTrack(trackId: TrackCatalogId): TrackMember {
  const entry = trackCatalog[trackId];
  return composeInternal({
    trackId,
    label: entry.label,
    description: entry.description,
    sceneId: entry.sceneId,
    theme: entry.theme,
    tier: entry.tier,
  }).track;
}

export function describeComposedCatalogTrack(trackId: TrackCatalogId): ComposerDebugSummary {
  const entry = trackCatalog[trackId];
  return composeInternal({
    trackId,
    label: entry.label,
    description: entry.description,
    sceneId: entry.sceneId,
    theme: entry.theme,
    tier: entry.tier,
  }).debug;
}
