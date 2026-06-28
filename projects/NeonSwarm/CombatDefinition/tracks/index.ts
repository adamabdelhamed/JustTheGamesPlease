import { generatedTrack as auroraTrack1 } from "./Track4";
import { generatedTrack as auroraTrack2 } from "./Track5";
import { generatedTrack as auroraTrack3 } from "./Track6";
import { generatedTrack as crystalForgeTrack1 } from "./Track7";
import { generatedTrack as crystalForgeTrack2 } from "./Track8";
import { generatedTrack as crystalForgeTrack3 } from "./Track9";
import { generatedTrack as neonNebulaeTrack1 } from "./Track1";
import { generatedTrack as neonNebulaeTrack2 } from "./Track2";
import { generatedTrack as neonNebulaeTrack3 } from "./Track3";
import { generatedTrack as solarArrayTrack1 } from "./Track13";
import { generatedTrack as solarArrayTrack2 } from "./Track14";
import { generatedTrack as solarArrayTrack3 } from "./Track15";
import { generatedTrack as voidGardenTrack1 } from "./Track10";
import { generatedTrack as voidGardenTrack2 } from "./Track11";
import { generatedTrack as voidGardenTrack3 } from "./Track12";
import type { TrackFamilyMember } from "../TrackDefinition";

export const tracks = {
  "neon-nebulae-1": neonNebulaeTrack1,
  "neon-nebulae-2": neonNebulaeTrack2,
  "neon-nebulae-3": neonNebulaeTrack3,
  "aurora-1": auroraTrack1,
  "aurora-2": auroraTrack2,
  "aurora-3": auroraTrack3,
  "crystal-forge-1": crystalForgeTrack1,
  "crystal-forge-2": crystalForgeTrack2,
  "crystal-forge-3": crystalForgeTrack3,
  "void-garden-1": voidGardenTrack1,
  "void-garden-2": voidGardenTrack2,
  "void-garden-3": voidGardenTrack3,
  "solar-array-1": solarArrayTrack1,
  "solar-array-2": solarArrayTrack2,
  "solar-array-3": solarArrayTrack3,
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
  crystalForge: {
    label: "Crystal Forge",
    description: "Prismatic factory lanes with sharp pressure, glass decoys, and heavy crystalline breaks.",
    environment: { sceneId: "crystalForge" },
    trackIds: ["crystal-forge-1", "crystal-forge-2", "crystal-forge-3"],
  },
  voidGarden: {
    label: "Void Garden",
    description: "Bioluminescent night lanes with sparse blooms, decoys, and controlled recovery pockets.",
    environment: { sceneId: "voidGarden" },
    trackIds: ["void-garden-1", "void-garden-2", "void-garden-3"],
  },
  solarArray: {
    label: "Solar Array",
    description: "Bright orbital lanes with mirrored walls, fast outer surges, and decisive heavy tools.",
    environment: { sceneId: "solarArray" },
    trackIds: ["solar-array-1", "solar-array-2", "solar-array-3"],
  },
} as const satisfies Record<string, TrackFamilyMember<keyof typeof tracks>>;

export {
  auroraTrack1,
  auroraTrack2,
  auroraTrack3,
  crystalForgeTrack1,
  crystalForgeTrack2,
  crystalForgeTrack3,
  neonNebulaeTrack1,
  neonNebulaeTrack2,
  neonNebulaeTrack3,
  solarArrayTrack1,
  solarArrayTrack2,
  solarArrayTrack3,
  voidGardenTrack1,
  voidGardenTrack2,
  voidGardenTrack3,
};
