import { neonPalette, type NeonColorName } from "@just-the-games-please/neon-factory";
import type { GunId } from "./GunFamily";
import { FamilyDefinition } from "./FamilyDefinition";
import type { TrackDefinition } from "./TrackDefinition";
import { parseTrackDefinition } from "./TrackDefinition";
import { firstTrack } from "./tracks/firstTrack";

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
      viewport: {
        orientation: "portrait",
        aspectWidth: 9,
        aspectHeight: 16,
        logicalWidth: 450,
        logicalHeight: 800,
      },
      environment: {
        floorColor: "deepBlue",
        crackColor: "cyan",
        airColor: "violet",
        horizonColor: "pink",
        pulseRate: 1.35,
        crackDensity: 14,
        airStreakCount: 11,
      },
      definition: firstTrack,
    },
  } as const satisfies Record<string, TrackMember>;

  constructor() {
    super();
    this.validate();
  }

  validate(): void {
    for (const [id, track] of Object.entries(this.members)) {
      this.require(track.durationSeconds > 0, `${id} duration must be positive.`);
      this.require(track.viewport.orientation === "portrait" && track.viewport.aspectHeight > track.viewport.aspectWidth, `${id} must use its declared portrait viewport.`);
      this.require(track.viewport.logicalWidth > 0 && track.viewport.logicalHeight > 0, `${id} logical viewport must be positive.`);
      parseTrackDefinition(track.definition);
      this.require(track.environment.crackDensity > 0 && track.environment.airStreakCount > 0, `${id} environment must contain detail.`);
      this.require(neonPalette[track.environment.floorColor] !== undefined, `${id} has an unknown floor color.`);
    }
  }
}

export const trackFamily = new TrackFamilyDefinition();
export type TrackId = keyof typeof trackFamily.members;
