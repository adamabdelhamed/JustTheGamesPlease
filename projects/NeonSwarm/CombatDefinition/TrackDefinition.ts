import type { LaneRunnerSceneId } from "@just-the-games-please/neon-factory";
import type { GunId } from "./GunFamily";
import { orbFamily, type OrbId } from "./OrbFamily";

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
  startingGun: GunId;
  startingGunLevel: 1 | 2 | 3;
  environment: {
    sceneId: LaneRunnerSceneId;
  };
  definition: TrackDefinition;
}

export interface TrackFamilyMember<TrackId extends string = string> {
  label: string;
  description: string;
  environment: {
    sceneId: LaneRunnerSceneId;
  };
  trackIds: readonly TrackId[];
}

export interface ParsedTrackEntity {
  id: string;
  symbol: string;
  side: "left" | "right";
  laneIndex: number;
  columnSpan: number;
  rowIndex: number;
  distanceFromPlayer: number;
  speedMultiplier: number;
}

const isEnemy = (id: string): boolean => id.startsWith("enemy.");
const enemyIdFromTrackId = (id: string): OrbId | null => {
  if (id === "enemy.basic") return "basicOrb";
  if (!id.startsWith("enemy.")) return null;
  const candidate = id.slice("enemy.".length);
  return candidate in orbFamily.members ? candidate as OrbId : null;
};

function parseTrackRows(track: TrackDefinition): Array<{ text: string; sourceIndex: number }> {
  const rows = track.layout
    .split(/\r?\n/)
    .map((text, sourceIndex) => ({ text: text.trim(), sourceIndex: sourceIndex + 1 }))
    .filter(row => row.text.length > 0);

  if (rows.length === 0) throw new Error("Track layout must contain at least one row.");
  return rows;
}

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

  const rows = parseTrackRows(track);
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
      const occupiedBy = new Map<number, string>();
      [...lane].forEach((symbol, laneIndex) => {
        const entry = track.legend[symbol];
        if (!entry) {
          throw new Error(`Track layout line ${row.sourceIndex} uses symbol "${symbol}" at ${side} lane index ${laneIndex}, but it is missing from the legend.`);
        }
        if (entry.id === "empty") return;
        const enemyId = enemyIdFromTrackId(entry.id);
        const columnSpan = enemyId ? orbFamily.members[enemyId].columnSpan : 1;
        if (laneIndex + columnSpan > lane.length) {
          throw new Error(`Track layout line ${row.sourceIndex} places ${entry.id} at ${side} lane index ${laneIndex}, but it needs ${columnSpan} columns and only ${lane.length - laneIndex} remain.`);
        }
        for (let offset = 0; offset < columnSpan; offset++) {
          const occupied = occupiedBy.get(laneIndex + offset);
          if (occupied) {
            throw new Error(`Track layout line ${row.sourceIndex} places ${entry.id} on ${side} lane index ${laneIndex + offset}, already occupied by ${occupied}.`);
          }
        }
        for (let offset = 0; offset < columnSpan; offset++) occupiedBy.set(laneIndex + offset, entry.id);

        entities.push({
          id: entry.id,
          symbol,
          side,
          laneIndex,
          columnSpan,
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
