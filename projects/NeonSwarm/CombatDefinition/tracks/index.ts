import { firstTrack } from "./firstTrack";
import { secondTrack } from "./secondTrack";

// Register a track by importing it and adding one entry here.
export const tracks = {
  electricCauseway: firstTrack,
  violetCrossfire: secondTrack,
} as const;

export { firstTrack, secondTrack };
