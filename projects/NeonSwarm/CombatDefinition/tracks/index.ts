import { generatedTrack } from "./Track1";
import { generatedTrack as generatedTrack2 } from "./Track2";
// Register a track by importing it and adding one entry here.
export const tracks = {
 
  "track1": generatedTrack,
  "track2": generatedTrack2,
} as const;

export { generatedTrack, generatedTrack2 }; 
