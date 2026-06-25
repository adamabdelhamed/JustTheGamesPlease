import { generatedTrack } from "./Track1";
import { generatedTrack as generatedTrack2 } from "./Track2";
import { generatedTrack as generatedTrack3 } from "./Track3";
// Register a track by importing it and adding one entry here.
export const tracks = {
 
  "track1": generatedTrack,
  "track2": generatedTrack2,
  "track3": generatedTrack3,
} as const;

export { generatedTrack, generatedTrack2, generatedTrack3 }; 
