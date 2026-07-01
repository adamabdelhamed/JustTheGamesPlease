import type { LaneRunnerSceneId } from "@just-the-games-please/neon-factory";
import { gunFamily } from "./GunFamily";
import { lightningFamily } from "./LightningFamily";
import { multiplierFamily } from "./MultiplierFamily";
import { orbFamily } from "./OrbFamily";
import { shieldFamily } from "./ShieldFamily";
import { showstopperFamily } from "./ShowstopperFamily";
import { swordFamily } from "./SwordFamily";
import { parseTrackDefinition, type TrackMember } from "./TrackDefinition";

/**
 * Global 0-based column index across both lanes.
 *
 * Current layout shape:
 * - columns 0-4 are the left lane
 * - columns 5-9 are the right lane
 *
 * Examples:
 * - 2 = left lane middle
 * - 7 = right lane middle
 */
export type TrackColumn = number;

/**
 * Friendly column constants for the current 2-lane / 5-column track format.
 *
 * These are only sugar. The builder still accepts raw numbers for fast authoring.
 */
export interface TrackColumns {
  readonly left: {
    readonly outer: 0;
    readonly nearOuter: 1;
    readonly mid: 2;
    readonly nearInner: 3;
    readonly inner: 4;
  };
  readonly right: {
    readonly inner: 5;
    readonly nearInner: 6;
    readonly mid: 7;
    readonly nearOuter: 8;
    readonly outer: 9;
  };
}

/**
 * Common exported column constants.
 *
 * Usage:
 *
 * builder.enemy("basic", { column: c.left.mid })
 * builder.weapon("sword.arcBlade", { column: c.right.mid })
 */
export const c: TrackColumns = {
  left: { outer: 0, nearOuter: 1, mid: 2, nearInner: 3, inner: 4 },
  right: { inner: 5, nearInner: 6, mid: 7, nearOuter: 8, outer: 9 },
};

export type TrackEnemyRef = string;
export type TrackWeaponRef = string;
export type TrackPickupRef = string;

export interface TrackPlacementOptions {
  column: TrackColumn;
  /**
   * Optional per-symbol speed multiplier emitted into the track legend.
   *
   * Omit this for normal authoring. The default is 1, and future track edits
   * should prefer speed 1 unless the user directly asks for speed tuning.
   * Changing this value is a significant balance change.
   */
  speed?: number;
}

export interface TrackLineOptions {
  column: TrackColumn;
  count: number;
  /**
   * Empty rows between each enemy.
   *
   * Defaults to 0. In pressure sections, omit this unless the gap is
   * intentional; pressure should normally place enemies every row.
   */
  gap?: number;
  /**
   * Optional enemy speed override for this repeated pattern.
   *
   * Omit this for normal authoring. Prefer speed 1 unless the user directly
   * asks for speed tuning, because speed changes materially affect balance.
   */
  speed?: number;
}

export interface TrackAlternatingOptions {
  columns: readonly TrackColumn[];
  count: number;
  /**
   * Empty rows between each enemy.
   *
   * Defaults to 0. In pressure sections, omit this unless the gap is
   * intentional; pressure should normally place enemies every row.
   */
  gap?: number;
  /**
   * Optional enemy speed override for this repeated pattern.
   *
   * Omit this for normal authoring. Prefer speed 1 unless the user directly
   * asks for speed tuning, because speed changes materially affect balance.
   */
  speed?: number;
}

export interface TrackWallOptions {
  columns: readonly TrackColumn[];
  /**
   * Optional enemy speed override for this wall.
   *
   * Omit this for normal authoring. Prefer speed 1 unless the user directly
   * asks for speed tuning, because speed changes materially affect balance.
   */
  speed?: number;
}

export interface TrackDripOptions {
  column: TrackColumn;
  rows: number;
  /**
   * Place one enemy every N rows.
   *
   * Drip is intentionally sparse. Prefer line/alternating without a gap for
   * normal pressure, and use drip only when the sparse cadence is deliberate.
   */
  every: number;
  /**
   * Optional enemy speed override for this drip pattern.
   *
   * Omit this for normal authoring. Prefer speed 1 unless the user directly
   * asks for speed tuning, because speed changes materially affect balance.
   */
  speed?: number;
}

export interface TrackSectionBuilder {
  at(rowOffset: number): TrackSectionBuilder;
  enemy(id: TrackEnemyRef, options: TrackPlacementOptions): TrackSectionBuilder;
  weapon(id: TrackWeaponRef, options: TrackPlacementOptions): TrackSectionBuilder;
  pickup(id: TrackPickupRef, options: TrackPlacementOptions): TrackSectionBuilder;
  line(enemyId: TrackEnemyRef, options: TrackLineOptions): TrackSectionBuilder;
  alternating(enemyId: TrackEnemyRef, options: TrackAlternatingOptions): TrackSectionBuilder;
  wall(enemyId: TrackEnemyRef, options: TrackWallOptions): TrackSectionBuilder;
  drip(enemyId: TrackEnemyRef, options: TrackDripOptions): TrackSectionBuilder;
}

export interface TrackBuilderOptions {
  label: string;
  description: string;
  environment: {
    sceneId: LaneRunnerSceneId;
  };
  balance: {
    enemyHp: number;
    enemySpeed: number;
  };
  playerStartColumn?: TrackColumn;
  laneWidth?: number;
}

export interface TrackBuilder {
  enemy(id: TrackEnemyRef, options: TrackPlacementOptions): TrackBuilder;
  weapon(id: TrackWeaponRef, options: TrackPlacementOptions): TrackBuilder;
  pickup(id: TrackPickupRef, options: TrackPlacementOptions): TrackBuilder;
  advanceRows(rows: number): TrackBuilder;
  respite(rows: number): TrackBuilder;
  section(name: string, rows: number, build: (section: TrackSectionBuilder) => void): TrackBuilder;
  /**
   * Add a danger-focused section with a fixed duration.
   *
   * Pressure should usually contain enemy placement every row. Use explicit
   * gaps or drip patterns only when the quiet space is intentional.
   */
  pressure(rows: number, build: (section: TrackSectionBuilder) => void): TrackBuilder;
  rebuild(rows: number, build: (section: TrackSectionBuilder) => void): TrackBuilder;
  line(enemyId: TrackEnemyRef, options: TrackLineOptions): TrackBuilder;
  alternating(enemyId: TrackEnemyRef, options: TrackAlternatingOptions): TrackBuilder;
  wall(enemyId: TrackEnemyRef, options: TrackWallOptions): TrackBuilder;
  drip(enemyId: TrackEnemyRef, options: TrackDripOptions): TrackBuilder;
  build(): TrackMember;
}

export interface TrackBuilderFactory {
  create(options: TrackBuilderOptions): TrackBuilder;
}

interface Placement {
  row: number;
  column: number;
  id: string;
  speed: number;
  span: number;
}

const defaultLaneWidth = 5;
const emptySymbol = ".";
const playerSymbol = "M";
const enemyAliases: Readonly<Record<string, string>> = {
  basic: "enemy.basic",
  basicOrb: "enemy.basicOrb",
  glass: "enemy.glassShield",
  glassShield: "enemy.glassShield",
  winger: "enemy.winger",
  tank: "enemy.tank",
};
const weaponPrefixes: Readonly<Record<string, string>> = {
  gun: "pickup.weapon.gun.",
  shield: "pickup.weapon.shield.",
  sword: "pickup.weapon.sword.",
  lightning: "pickup.weapon.lightning.",
};
const pickupAliases: Readonly<Record<string, string>> = {
  "unitMultiplier.2x": "pickup.unitMultiplier.2x",
  "unitMultiplier.squadPlusOne": "pickup.unitMultiplier.2x",
  "showstopper.dragonsBreath": "pickup.showstopper.dragonsBreath",
  "showstopper.deepFreeze": "pickup.showstopper.deepFreeze",
  "dragonsBreath": "pickup.showstopper.dragonsBreath",
  "deepFreeze": "pickup.showstopper.deepFreeze",
};
const preferredSymbols: Readonly<Record<string, string>> = {
  "enemy.basic": "E",
  "enemy.basicOrb": "E",
  "enemy.glassShield": "D",
  "enemy.winger": "W",
  "enemy.tank": "T",
  "pickup.weapon.gun.pulsePistol": "G",
  "pickup.weapon.gun.needlerSmg": "N",
  "pickup.weapon.gun.burstCarbine": "B",
  "pickup.weapon.gun.heavyCannon": "H",
  "pickup.weapon.gun.splitterRifle": "R",
  "pickup.weapon.shield.lightGuard": "S",
  "pickup.weapon.shield.satelliteGuard": "V",
  "pickup.weapon.shield.hexGuard": "X",
  "pickup.weapon.sword.arcBlade": "a",
  "pickup.weapon.sword.cleaver": "c",
  "pickup.weapon.lightning.chainSpark": "L",
  "pickup.weapon.lightning.forkCapacitor": "F",
  "pickup.unitMultiplier.2x": "2",
  "pickup.showstopper.dragonsBreath": "Q",
  "pickup.showstopper.deepFreeze": "Z",
};
const fallbackSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz23456789!#$%&*+,-/:;<=>?@^_~".split("")
  .filter(symbol => symbol !== emptySymbol && symbol !== playerSymbol);

function requireInteger(value: number, label: string): void {
  if (!Number.isInteger(value)) throw new Error(`${label} must be an integer.`);
}

function requirePositiveInteger(value: number, label: string): void {
  requireInteger(value, label);
  if (value <= 0) throw new Error(`${label} must be greater than zero.`);
}

function normalizeSpeed(speed: number | undefined, label: string): number {
  const value = speed ?? 1;
  if (!Number.isFinite(value) || value <= 0) throw new Error(`${label} speed must be greater than zero.`);
  return value;
}

function normalizeEnemyId(id: TrackEnemyRef): string {
  if (id.startsWith("enemy.")) return id;
  return enemyAliases[id] ?? `enemy.${id}`;
}

function normalizeWeaponId(id: TrackWeaponRef): string {
  if (id.startsWith("pickup.weapon.")) return id;
  const dotIndex = id.indexOf(".");
  if (dotIndex <= 0) throw new Error(`Weapon id "${id}" must use family.id shorthand or a canonical pickup.weapon id.`);
  const family = id.slice(0, dotIndex);
  const member = id.slice(dotIndex + 1);
  const prefix = weaponPrefixes[family];
  if (!prefix) throw new Error(`Weapon id "${id}" has unknown weapon family "${family}".`);
  return `${prefix}${member}`;
}

function normalizePickupId(id: TrackPickupRef): string {
  if (id.startsWith("pickup.")) return id;
  return pickupAliases[id] ?? `pickup.${id}`;
}

function enemyMemberId(canonicalId: string): string | null {
  if (canonicalId === "enemy.basic") return "basicOrb";
  if (!canonicalId.startsWith("enemy.")) return null;
  return canonicalId.slice("enemy.".length);
}

function validateCanonicalId(id: string): void {
  const enemyId = enemyMemberId(id);
  if (enemyId) {
    if (!(enemyId in orbFamily.members)) throw new Error(`Unknown enemy id "${id}".`);
    return;
  }
  const validators: readonly [string, Readonly<Record<string, unknown>>, string][] = [
    ["pickup.weapon.gun.", gunFamily.members, "gun"],
    ["pickup.weapon.shield.", shieldFamily.members, "shield"],
    ["pickup.weapon.sword.", swordFamily.members, "sword"],
    ["pickup.weapon.lightning.", lightningFamily.members, "lightning"],
  ];
  for (const [prefix, members, label] of validators) {
    if (!id.startsWith(prefix)) continue;
    const memberId = id.slice(prefix.length);
    if (!(memberId in members)) throw new Error(`Unknown ${label} id "${id}".`);
    return;
  }
  if (id === "pickup.unitMultiplier.2x") return;
  if (id.startsWith("pickup.unitMultiplier.")) {
    const memberId = id.slice("pickup.unitMultiplier.".length);
    if (!(memberId in multiplierFamily.members)) throw new Error(`Unknown multiplier id "${id}".`);
    return;
  }
  if (id.startsWith("pickup.showstopper.")) {
    const memberId = id.slice("pickup.showstopper.".length);
    if (!(memberId in showstopperFamily.members)) throw new Error(`Unknown showstopper id "${id}".`);
    return;
  }
  throw new Error(`Unsupported track entity id "${id}".`);
}

function spanFor(id: string): number {
  const enemyId = enemyMemberId(id);
  return enemyId && enemyId in orbFamily.members ? orbFamily.members[enemyId as keyof typeof orbFamily.members].columnSpan : 1;
}

class TrackBuilderCore {
  private readonly laneWidth: number;
  private readonly placements: Placement[] = [];
  private cursor = 1;

  constructor(private readonly options: TrackBuilderOptions) {
    this.laneWidth = options.laneWidth ?? defaultLaneWidth;
    requirePositiveInteger(this.laneWidth, "Track laneWidth");
    if (this.laneWidth < 3) throw new Error("Track laneWidth must be at least 3.");
    if (!options.label.trim()) throw new Error("Track label is required.");
    if (!options.description.trim()) throw new Error("Track description is required.");
    if (options.balance.enemyHp <= 0) throw new Error("Track balance enemyHp must be greater than zero.");
    if (options.balance.enemySpeed <= 0) throw new Error("Track balance enemySpeed must be greater than zero.");
    this.validateColumn(options.playerStartColumn ?? c.left.mid, "playerStartColumn", 1);
  }

  enemy(id: TrackEnemyRef, options: TrackPlacementOptions): this {
    this.place(normalizeEnemyId(id), options, this.cursor, "enemy");
    return this;
  }

  weapon(id: TrackWeaponRef, options: TrackPlacementOptions): this {
    this.place(normalizeWeaponId(id), options, this.cursor, "weapon");
    return this;
  }

  pickup(id: TrackPickupRef, options: TrackPlacementOptions): this {
    this.place(normalizePickupId(id), options, this.cursor, "pickup");
    return this;
  }

  advanceRows(rows: number): this {
    requirePositiveInteger(rows, "advanceRows rows");
    this.cursor += rows;
    return this;
  }

  respite(rows: number): this {
    return this.advanceRows(rows);
  }

  section(name: string, rows: number, build: (section: TrackSectionBuilder) => void): this {
    if (!name.trim()) throw new Error("Track section name is required.");
    requirePositiveInteger(rows, `Track section "${name}" rows`);
    const section = new TrackSectionBuilderCore(this, name, this.cursor, rows);
    build(section);
    this.cursor += rows;
    return this;
  }

  pressure(rows: number, build: (section: TrackSectionBuilder) => void): this {
    return this.section("pressure", rows, build);
  }

  rebuild(rows: number, build: (section: TrackSectionBuilder) => void): this {
    return this.section("rebuild", rows, build);
  }

  line(enemyId: TrackEnemyRef, options: TrackLineOptions): this {
    this.addLine(this.cursor, normalizeEnemyId(enemyId), options, "line");
    return this;
  }

  alternating(enemyId: TrackEnemyRef, options: TrackAlternatingOptions): this {
    this.addAlternating(this.cursor, normalizeEnemyId(enemyId), options, "alternating");
    return this;
  }

  wall(enemyId: TrackEnemyRef, options: TrackWallOptions): this {
    this.addWall(this.cursor, normalizeEnemyId(enemyId), options, "wall");
    return this;
  }

  drip(enemyId: TrackEnemyRef, options: TrackDripOptions): this {
    this.addDrip(this.cursor, normalizeEnemyId(enemyId), options, "drip");
    return this;
  }

  addSectionEnemy(baseRow: number, sectionName: string, rowOffset: number, id: TrackEnemyRef, options: TrackPlacementOptions): void {
    this.place(normalizeEnemyId(id), options, baseRow + rowOffset, `section "${sectionName}" enemy`);
  }

  addSectionWeapon(baseRow: number, sectionName: string, rowOffset: number, id: TrackWeaponRef, options: TrackPlacementOptions): void {
    this.place(normalizeWeaponId(id), options, baseRow + rowOffset, `section "${sectionName}" weapon`);
  }

  addSectionPickup(baseRow: number, sectionName: string, rowOffset: number, id: TrackPickupRef, options: TrackPlacementOptions): void {
    this.place(normalizePickupId(id), options, baseRow + rowOffset, `section "${sectionName}" pickup`);
  }

  addLine(baseRow: number, enemyId: string, options: TrackLineOptions, label: string): void {
    requirePositiveInteger(options.count, `${label} count`);
    const gap = options.gap ?? 0;
    requireInteger(gap, `${label} gap`);
    if (gap < 0) throw new Error(`${label} gap cannot be negative.`);
    for (let index = 0; index < options.count; index++) {
      this.place(enemyId, { column: options.column, speed: options.speed }, baseRow + index * (gap + 1), label);
    }
  }

  addAlternating(baseRow: number, enemyId: string, options: TrackAlternatingOptions, label: string): void {
    requirePositiveInteger(options.count, `${label} count`);
    if (options.columns.length === 0) throw new Error(`${label} columns must include at least one column.`);
    const gap = options.gap ?? 0;
    requireInteger(gap, `${label} gap`);
    if (gap < 0) throw new Error(`${label} gap cannot be negative.`);
    for (let index = 0; index < options.count; index++) {
      const column = options.columns[index % options.columns.length];
      this.place(enemyId, { column, speed: options.speed }, baseRow + index * (gap + 1), label);
    }
  }

  addWall(baseRow: number, enemyId: string, options: TrackWallOptions, label: string): void {
    if (options.columns.length === 0) throw new Error(`${label} columns must include at least one column.`);
    for (const column of options.columns) {
      this.place(enemyId, { column, speed: options.speed }, baseRow, label);
    }
  }

  addDrip(baseRow: number, enemyId: string, options: TrackDripOptions, label: string): void {
    requirePositiveInteger(options.rows, `${label} rows`);
    requirePositiveInteger(options.every, `${label} every`);
    for (let offset = 0; offset < options.rows; offset += options.every) {
      this.place(enemyId, { column: options.column, speed: options.speed }, baseRow + offset, label);
    }
  }

  build(): TrackMember {
    const playerStartColumn = this.options.playerStartColumn ?? c.left.mid;
    const maxPlacementRow = this.placements.reduce((max, item) => Math.max(max, item.row), 0);
    const rowCount = Math.max(this.cursor, maxPlacementRow + 1, 1);
    const rows = Array.from({ length: rowCount }, () => Array.from({ length: this.laneWidth * 2 }, () => emptySymbol));
    const occupied = Array.from({ length: rowCount }, () => new Map<number, string>());
    const legend = new Map<string, { id: string; speed: number }>();
    legend.set(emptySymbol, { id: "empty", speed: 1 });
    legend.set(playerSymbol, { id: "player.start", speed: 1 });
    const usedSymbols = new Set([emptySymbol, playerSymbol]);
    const symbolByEntity = new Map<string, string>();
    const playerCells = this.cellsFor(playerStartColumn, 1);
    for (const cell of playerCells) occupied[0].set(cell.globalColumn, "player.start");
    rows[0][playerStartColumn] = playerSymbol;

    for (const placement of this.placements) {
      const symbol = this.symbolFor(placement, usedSymbols, symbolByEntity);
      legend.set(symbol, { id: placement.id, speed: placement.speed });
      for (const cell of this.cellsFor(placement.column, placement.span)) {
        const existing = occupied[placement.row].get(cell.globalColumn);
        if (existing) {
          throw new Error(`Track placement overlap at row ${placement.row}, column ${cell.globalColumn}. Existing id "${existing}", new id "${placement.id}".`);
        }
        occupied[placement.row].set(cell.globalColumn, placement.id);
      }
      rows[placement.row][placement.column] = symbol;
    }

    const definition = {
      layout: `\n${rows.slice().reverse().map(row => `${row.slice(0, this.laneWidth).join("")} | ${row.slice(this.laneWidth).join("")}`).join("\n")}\n`,
      legend: Object.fromEntries([...legend.entries()].map(([symbol, entry]) => [
        symbol,
        entry.speed === 1 ? { id: entry.id } : { id: entry.id, speed: entry.speed },
      ])),
      balance: this.options.balance,
    };
    parseTrackDefinition(definition);
    return {
      label: this.options.label,
      description: this.options.description,
      environment: this.options.environment,
      definition,
    };
  }

  validateSectionOffset(sectionName: string, rowOffset: number, rows: number): void {
    requireInteger(rowOffset, `Track section "${sectionName}" row offset`);
    if (rowOffset < 0 || rowOffset >= rows) {
      throw new Error(`Track section "${sectionName}" row offset ${rowOffset} is outside the 0-${rows - 1} section range.`);
    }
  }

  validateSectionSpan(sectionName: string, rowOffset: number, rows: number, coveredRows: number): void {
    requirePositiveInteger(coveredRows, `Track section "${sectionName}" covered rows`);
    this.validateSectionOffset(sectionName, rowOffset, rows);
    const lastOffset = rowOffset + coveredRows - 1;
    if (lastOffset >= rows) {
      throw new Error(`Track section "${sectionName}" pattern reaches row offset ${lastOffset}, outside the 0-${rows - 1} section range.`);
    }
  }

  private place(id: string, options: TrackPlacementOptions, row: number, label: string): void {
    requireInteger(row, `${label} row`);
    if (row < 0) throw new Error(`${label} row cannot be negative.`);
    validateCanonicalId(id);
    const span = spanFor(id);
    this.validateColumn(options.column, `${label} column`, span);
    this.placements.push({
      row,
      column: options.column,
      id,
      speed: normalizeSpeed(options.speed, label),
      span,
    });
  }

  private validateColumn(column: TrackColumn, label: string, span: number): void {
    requireInteger(column, label);
    const totalWidth = this.laneWidth * 2;
    if (column < 0 || column >= totalWidth) throw new Error(`${label} ${column} is outside the 0-${totalWidth - 1} track range.`);
    const sideColumn = column % this.laneWidth;
    if (sideColumn + span > this.laneWidth) {
      throw new Error(`${label} ${column} cannot fit a ${span}-column entity inside a ${this.laneWidth}-column lane.`);
    }
  }

  private cellsFor(column: number, span: number): Array<{ globalColumn: number }> {
    return Array.from({ length: span }, (_, offset) => ({ globalColumn: column + offset }));
  }

  private symbolFor(placement: Placement, usedSymbols: Set<string>, symbolByEntity: Map<string, string>): string {
    const key = `${placement.id}@${placement.speed}`;
    const existing = symbolByEntity.get(key);
    if (existing) return existing;
    const preferred = preferredSymbols[placement.id];
    const symbol = preferred && !usedSymbols.has(preferred)
      ? preferred
      : fallbackSymbols.find(candidate => !usedSymbols.has(candidate));
    if (!symbol) throw new Error("Track builder ran out of one-character legend symbols.");
    usedSymbols.add(symbol);
    symbolByEntity.set(key, symbol);
    return symbol;
  }
}

class TrackSectionBuilderCore implements TrackSectionBuilder {
  private rowOffset = 0;

  constructor(
    private readonly parent: TrackBuilderCore,
    private readonly name: string,
    private readonly baseRow: number,
    private readonly rows: number,
  ) {}

  at(rowOffset: number): TrackSectionBuilder {
    this.parent.validateSectionOffset(this.name, rowOffset, this.rows);
    this.rowOffset = rowOffset;
    return this;
  }

  enemy(id: TrackEnemyRef, options: TrackPlacementOptions): TrackSectionBuilder {
    this.parent.addSectionEnemy(this.baseRow, this.name, this.rowOffset, id, options);
    return this;
  }

  weapon(id: TrackWeaponRef, options: TrackPlacementOptions): TrackSectionBuilder {
    this.parent.addSectionWeapon(this.baseRow, this.name, this.rowOffset, id, options);
    return this;
  }

  pickup(id: TrackPickupRef, options: TrackPlacementOptions): TrackSectionBuilder {
    this.parent.addSectionPickup(this.baseRow, this.name, this.rowOffset, id, options);
    return this;
  }

  line(enemyId: TrackEnemyRef, options: TrackLineOptions): TrackSectionBuilder {
    const gap = options.gap ?? 0;
    this.parent.validateSectionSpan(this.name, this.rowOffset, this.rows, (options.count - 1) * (gap + 1) + 1);
    this.parent.addLine(this.baseRow + this.rowOffset, normalizeEnemyId(enemyId), options, `section "${this.name}" line`);
    return this;
  }

  alternating(enemyId: TrackEnemyRef, options: TrackAlternatingOptions): TrackSectionBuilder {
    const gap = options.gap ?? 0;
    this.parent.validateSectionSpan(this.name, this.rowOffset, this.rows, (options.count - 1) * (gap + 1) + 1);
    this.parent.addAlternating(this.baseRow + this.rowOffset, normalizeEnemyId(enemyId), options, `section "${this.name}" alternating`);
    return this;
  }

  wall(enemyId: TrackEnemyRef, options: TrackWallOptions): TrackSectionBuilder {
    this.parent.addWall(this.baseRow + this.rowOffset, normalizeEnemyId(enemyId), options, `section "${this.name}" wall`);
    return this;
  }

  drip(enemyId: TrackEnemyRef, options: TrackDripOptions): TrackSectionBuilder {
    this.parent.validateSectionSpan(this.name, this.rowOffset, this.rows, options.rows);
    this.parent.addDrip(this.baseRow + this.rowOffset, normalizeEnemyId(enemyId), options, `section "${this.name}" drip`);
    return this;
  }
}

export const trackBuilder: TrackBuilderFactory = {
  create(options: TrackBuilderOptions): TrackBuilder {
    return new TrackBuilderCore(options);
  },
};
