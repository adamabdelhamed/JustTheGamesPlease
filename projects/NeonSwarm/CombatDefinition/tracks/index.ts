import { firstTrack } from "./firstTrack";
import { secondTrack } from "./secondTrack";
import { editedTrack } from "./editedTrack";
// Register a track by importing it and adding one entry here.
export const tracks = {
  editedTrack: editedTrack,
  electricCauseway: firstTrack,
  violetCrossfire: secondTrack,
} as const;

export { editedTrack, firstTrack, secondTrack };
