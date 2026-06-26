import { isLaneRunnerSceneId } from "@just-the-games-please/neon-factory";
import { FamilyDefinition } from "./FamilyDefinition";
import type { TrackMember } from "./TrackDefinition";
import { parseTrackDefinition } from "./TrackDefinition";
import { tracks } from "./tracks";

export class TrackFamilyDefinition extends FamilyDefinition<Record<string, TrackMember>> {
  readonly familyId = "track";
  readonly label = "Track";
  readonly members = tracks satisfies Record<string, TrackMember>;

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
      this.require(isLaneRunnerSceneId(track.environment.sceneId), `${id} has an unknown scene id.`);
    }
  }
}

export const trackFamily = new TrackFamilyDefinition();
export type TrackId = keyof typeof trackFamily.members;
