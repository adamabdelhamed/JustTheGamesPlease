import { isLaneRunnerSceneId } from "@just-the-games-please/neon-factory";
import { FamilyDefinition } from "./FamilyDefinition";
import { gunFamily } from "./GunFamily";
import type { TrackFamilyMember, TrackMember } from "./TrackDefinition";
import { parseTrackDefinition } from "./TrackDefinition";
import { trackFamilies, tracks } from "./tracks";

export class TrackFamilyDefinition extends FamilyDefinition<Record<string, TrackMember>> {
  readonly familyId = "track";
  readonly label = "Track";
  readonly members = tracks satisfies Record<string, TrackMember>;
  readonly families = trackFamilies satisfies Record<string, TrackFamilyMember<keyof typeof tracks>>;

  constructor() {
    super();
    this.validate();
  }

  validate(): void {
    for (const [id, track] of Object.entries(this.members)) {
      this.require(track.startingGun in gunFamily.members, `${id} has an unknown starting gun.`);
      parseTrackDefinition(track.definition);
      this.require(isLaneRunnerSceneId(track.environment.sceneId), `${id} has an unknown scene id.`);
    }
    for (const [id, family] of Object.entries(this.families)) {
      this.require(family.trackIds.length > 0, `${id} must include at least one track.`);
      this.require(isLaneRunnerSceneId(family.environment.sceneId), `${id} has an unknown scene id.`);
      for (const trackId of family.trackIds) {
        this.require(trackId in this.members, `${id} references unknown track "${trackId}".`);
        this.require(this.members[trackId].environment.sceneId === family.environment.sceneId, `${trackId} must use the ${id} scene.`);
      }
    }
  }
}

export const trackFamily = new TrackFamilyDefinition();
export type TrackId = keyof typeof trackFamily.members;
export type TrackFamilyId = keyof typeof trackFamily.families;
