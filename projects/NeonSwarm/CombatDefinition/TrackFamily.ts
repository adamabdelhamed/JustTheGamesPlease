import { neonPalette, type NeonColorName } from "@just-the-games-please/neon-factory";
import type { GunId } from "./GunFamily";
import type { OrbId } from "./OrbFamily";
import type { MultiplierId } from "./MultiplierFamily";
import { FamilyDefinition } from "./FamilyDefinition";

export interface TrackEnemyEvent {
  atSeconds: number;
  enemyId: OrbId;
  lane: 0 | 1;
  count?: number;
  spacing?: number;
}

export interface TrackPickupEvent {
  atSeconds: number;
  gunId: GunId;
  level: 1 | 2 | 3;
  lane: 0 | 1;
}

export interface TrackMultiplierEvent {
  atSeconds: number;
  multiplierId: MultiplierId;
  lane: 0 | 1;
}

export interface TrackMember {
  label: string;
  description: string;
  durationSeconds: number;
  startingGun: GunId;
  startingGunLevel: 1 | 2 | 3;
  environment: {
    floorColor: NeonColorName;
    crackColor: NeonColorName;
    airColor: NeonColorName;
    horizonColor: NeonColorName;
    pulseRate: number;
    crackDensity: number;
    airStreakCount: number;
  };
  enemySchedule: readonly TrackEnemyEvent[];
  pickupSchedule: readonly TrackPickupEvent[];
  multiplierSchedule: readonly TrackMultiplierEvent[];
}

export class TrackFamilyDefinition extends FamilyDefinition<Record<string, TrackMember>> {
  readonly familyId = "track";
  readonly label = "Track";
  readonly members = {
    electricCauseway: {
      label: "Electric Causeway",
      description: "A short cyan causeway with fractured power seams and alternating lane pressure.",
      durationSeconds: 26,
      startingGun: "pulsePistol",
      startingGunLevel: 1,
      environment: {
        floorColor: "deepBlue",
        crackColor: "cyan",
        airColor: "violet",
        horizonColor: "pink",
        pulseRate: 1.35,
        crackDensity: 14,
        airStreakCount: 11,
      },
      enemySchedule: [
        { atSeconds: 1.5, enemyId: "basicOrb", lane: 0, count: 3, spacing: 16 },
        { atSeconds: 3.8, enemyId: "basicOrb", lane: 1, count: 3, spacing: 16 },
        { atSeconds: 6.2, enemyId: "basicOrb", lane: 0, count: 4, spacing: 15 },
        { atSeconds: 8.1, enemyId: "basicOrb", lane: 1, count: 4, spacing: 15 },
        { atSeconds: 10.6, enemyId: "basicOrb", lane: 1, count: 5, spacing: 14 },
        { atSeconds: 13.2, enemyId: "basicOrb", lane: 0, count: 5, spacing: 14 },
        { atSeconds: 16.1, enemyId: "basicOrb", lane: 1, count: 5, spacing: 14 },
        { atSeconds: 19.0, enemyId: "basicOrb", lane: 0, count: 5, spacing: 14 },
      ],
      pickupSchedule: [
        { atSeconds: 5, gunId: "needlerSmg", level: 1, lane: 1 },
        { atSeconds: 11.5, gunId: "burstCarbine", level: 1, lane: 0 },
        { atSeconds: 17, gunId: "heavyCannon", level: 1, lane: 1 },
      ],
      multiplierSchedule: [
        { atSeconds: 2.5, multiplierId: "squadPlusOne", lane: 0 },
        { atSeconds: 4.8, multiplierId: "squadPlusOne", lane: 1 },
        { atSeconds: 7.4, multiplierId: "squadPlusOne", lane: 0 },
        { atSeconds: 9.6, multiplierId: "squadPlusOne", lane: 1 },
      ],
    },
  } as const satisfies Record<string, TrackMember>;

  constructor() {
    super();
    this.validate();
  }

  validate(): void {
    for (const [id, track] of Object.entries(this.members)) {
      this.require(track.durationSeconds > 0, `${id} duration must be positive.`);
      this.require(track.enemySchedule.every(event => event.atSeconds < track.durationSeconds), `${id} has an enemy after the finish.`);
      this.require(track.pickupSchedule.every(event => event.atSeconds < track.durationSeconds), `${id} has a pickup after the finish.`);
      this.require(track.multiplierSchedule.every(event => event.atSeconds < track.durationSeconds), `${id} has a multiplier after the finish.`);
      this.require(track.environment.crackDensity > 0 && track.environment.airStreakCount > 0, `${id} environment must contain detail.`);
      this.require(neonPalette[track.environment.floorColor] !== undefined, `${id} has an unknown floor color.`);
    }
  }
}

export const trackFamily = new TrackFamilyDefinition();
export type TrackId = keyof typeof trackFamily.members;
