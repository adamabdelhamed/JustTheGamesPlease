import type { NeonColorName } from "@just-the-games-please/neon-factory";
import type { GunId } from "./GunFamily";

export interface TrackLegendEntry {
  id: string;
  speed?: number;
}

export interface TrackBalance {
  enemyHp: number;
  enemySpeed: number;
}

export interface TrackDefinition {
  layout: string;
  legend: Readonly<Record<string, TrackLegendEntry>>;
  balance: TrackBalance;
}

export interface TrackMember {
  label: string;
  description: string;
  durationSeconds: number;
  startingGun: GunId;
  startingGunLevel: 1 | 2 | 3;
  viewport: {
    orientation: "portrait";
    aspectWidth: number;
    aspectHeight: number;
    logicalWidth: number;
    logicalHeight: number;
  };
  environment: {
    floorColor: NeonColorName;
    crackColor: NeonColorName;
    airColor: NeonColorName;
    horizonColor: NeonColorName;
    pulseRate: number;
    crackDensity: number;
    airStreakCount: number;
  };
  definition: TrackDefinition;
}

export interface ParsedTrackEntity {
  id: string;
  symbol: string;
  side: "left" | "right";
  laneIndex: number;
  rowIndex: number;
  distanceFromPlayer: number;
  speedMultiplier: number;
}

const isEnemy = (id: string): boolean => id.startsWith("enemy.");

export function parseTrackDefinition(track: TrackDefinition): ParsedTrackEntity[] {
  if (track.balance.enemyHp <= 0) throw new Error("Track balance enemyHp must be greater than zero.");
  if (track.balance.enemySpeed <= 0) throw new Error("Track balance enemySpeed must be greater than zero.");
  for (const [symbol, entry] of Object.entries(track.legend)) {
    if ([...symbol].length !== 1 || /\s|\|/.test(symbol)) {
      throw new Error(`Track legend key "${symbol}" must be one non-whitespace character other than "|".`);
    }
    if (!entry.id) throw new Error(`Track legend symbol "${symbol}" must have an id.`);
    if (entry.speed !== undefined && entry.speed <= 0) {
      throw new Error(`Track legend symbol "${symbol}" speed must be greater than zero.`);
    }
  }

  const rows = track.layout
    .split(/\r?\n/)
    .map((text, sourceIndex) => ({ text: text.trim(), sourceIndex: sourceIndex + 1 }))
    .filter(row => row.text.length > 0);

  if (rows.length === 0) throw new Error("Track layout must contain at least one row.");

  let leftWidth: number | undefined;
  let rightWidth: number | undefined;
  const entities: ParsedTrackEntity[] = [];

  rows.forEach((row, rowIndex) => {
    const pipeCount = [...row.text].filter(character => character === "|").length;
    if (pipeCount !== 1) {
      throw new Error(`Track layout line ${row.sourceIndex} must contain exactly one "|" separator; found ${pipeCount}.`);
    }

    const [left, right] = row.text.split("|").map(side => side.replace(/\s/g, ""));
    leftWidth ??= left.length;
    rightWidth ??= right.length;

    if (left.length !== leftWidth) {
      throw new Error(`Track layout line ${row.sourceIndex} has left width ${left.length}; expected ${leftWidth}.`);
    }
    if (right.length !== rightWidth) {
      throw new Error(`Track layout line ${row.sourceIndex} has right width ${right.length}; expected ${rightWidth}.`);
    }

    const distanceFromPlayer = rows.length - 1 - rowIndex;
    for (const [side, lane] of [["left", left], ["right", right]] as const) {
      [...lane].forEach((symbol, laneIndex) => {
        const entry = track.legend[symbol];
        if (!entry) {
          throw new Error(`Track layout line ${row.sourceIndex} uses symbol "${symbol}" at ${side} lane index ${laneIndex}, but it is missing from the legend.`);
        }
        if (entry.id === "empty") return;

        entities.push({
          id: entry.id,
          symbol,
          side,
          laneIndex,
          rowIndex,
          distanceFromPlayer,
          speedMultiplier: (entry.speed ?? 1) * (isEnemy(entry.id) ? track.balance.enemySpeed : 1),
        });
      });
    }
  });

  return entities.sort((a, b) =>
    a.distanceFromPlayer - b.distanceFromPlayer ||
    a.rowIndex - b.rowIndex ||
    a.side.localeCompare(b.side) ||
    a.laneIndex - b.laneIndex);
}
