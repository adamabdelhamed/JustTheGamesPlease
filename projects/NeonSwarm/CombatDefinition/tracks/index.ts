import { generatedTrack as auroraTrack1 } from "./Track4";
import { generatedTrack as auroraTrack2 } from "./Track5";
import { generatedTrack as auroraTrack3 } from "./Track6";
import { generatedTrack as neonNebulaeTrack1 } from "./Track1";
import { generatedTrack as neonNebulaeTrack2 } from "./Track2";
import { generatedTrack as neonNebulaeTrack3 } from "./Track3";
import type { TrackFamilyMember } from "../TrackDefinition";

export const tracks = {
  "neon-nebulae-1": neonNebulaeTrack1,
  "neon-nebulae-2": neonNebulaeTrack2,
  "neon-nebulae-3": neonNebulaeTrack3,
  "aurora-1": auroraTrack1,
  "aurora-2": auroraTrack2,
  "aurora-3": auroraTrack3,
} as const;

export const trackFamilies = {
  neonNebulae: {
    label: "Neon Nebulae",
    description: "A learning arc about lanes, pickups, shields, and controlled pressure.",
    environment: { sceneId: "neonHall" },
    trackIds: ["neon-nebulae-1", "neon-nebulae-2", "neon-nebulae-3"],
  },
  aurora: {
    label: "Aurora",
    description: "Dense planetary assaults with brighter recovery windows and sharper threat waves.",
    environment: { sceneId: "aurora" },
    trackIds: ["aurora-1", "aurora-2", "aurora-3"],
  },
} as const satisfies Record<string, TrackFamilyMember<keyof typeof tracks>>;

export { auroraTrack1, auroraTrack2, auroraTrack3, neonNebulaeTrack1, neonNebulaeTrack2, neonNebulaeTrack3 };
