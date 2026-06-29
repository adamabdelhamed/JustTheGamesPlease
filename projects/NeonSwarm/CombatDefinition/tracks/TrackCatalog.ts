import type { LaneRunnerSceneId } from "@just-the-games-please/neon-factory";
import type { TrackFamilyMember } from "../TrackDefinition";

export type TrackThemeId = "gunSchool" | "guardBlades" | "crystalSiege" | "swarmBloom" | "mirrorArray";
export type TrackTier = 1 | 2 | 3;
export type TrackNodeShapeId = "hunter-eye" | "bruiser-prism" | "elite-star" | "trick-vortex" | "tank-reactor" | "spike-lance" | "hunter-bolt";

export interface TrackCatalogEntry {
  id: string;
  label: string;
  description: string;
  sceneId: LaneRunnerSceneId;
  theme: TrackThemeId;
  tier: TrackTier;
}

export interface TrackFamilyCatalogEntry {
  id: string;
  label: string;
  description: string;
  sceneId: LaneRunnerSceneId;
  accent: string;
  trackIds: readonly TrackCatalogId[];
}

export interface TrackThemeCatalogEntry {
  id: TrackThemeId;
  label: string;
  nodeShapeIds: readonly TrackNodeShapeId[];
}

export const trackThemeCatalog = {
  gunSchool: {
    id: "gunSchool",
    label: "Gun School",
    nodeShapeIds: ["hunter-eye", "bruiser-prism", "hunter-bolt"],
  },
  guardBlades: {
    id: "guardBlades",
    label: "Guard Blades",
    nodeShapeIds: ["elite-star", "spike-lance", "hunter-bolt"],
  },
  crystalSiege: {
    id: "crystalSiege",
    label: "Crystal Siege",
    nodeShapeIds: ["tank-reactor", "bruiser-prism", "hunter-bolt"],
  },
  swarmBloom: {
    id: "swarmBloom",
    label: "Swarm Bloom",
    nodeShapeIds: ["trick-vortex", "hunter-eye", "hunter-bolt"],
  },
  mirrorArray: {
    id: "mirrorArray",
    label: "Mirror Array",
    nodeShapeIds: ["spike-lance", "elite-star", "hunter-bolt"],
  },
} as const satisfies Record<TrackThemeId, TrackThemeCatalogEntry>;

export const trackCatalog = {
  "neon-nebulae-1": {
    id: "neon-nebulae-1",
    label: "First Glow",
    description: "A gun-forward Neon Nebulae opener with clear rebuild shelves and only a few shield safety nets.",
    sceneId: "neonHall",
    theme: "gunSchool",
    tier: 1,
  },
  "neon-nebulae-2": {
    id: "neon-nebulae-2",
    label: "Drift Lesson",
    description: "A longer Neon Nebulae gun lesson that adds wing pressure, stronger firearm choices, and sparse shield relief.",
    sceneId: "neonHall",
    theme: "gunSchool",
    tier: 2,
  },
  "neon-nebulae-3": {
    id: "neon-nebulae-3",
    label: "Nebula Gate",
    description: "The Neon Nebulae gun finale layers heavier firearms, tanks, and sustained lane reading without leaning on speed changes.",
    sceneId: "neonHall",
    theme: "gunSchool",
    tier: 3,
  },
  "aurora-1": {
    id: "aurora-1",
    label: "Skybreak",
    description: "An Aurora opener focused on shields, short sword reads, and patient close-range cleanup.",
    sceneId: "aurora",
    theme: "guardBlades",
    tier: 1,
  },
  "aurora-2": {
    id: "aurora-2",
    label: "Ribbon Storm",
    description: "Aurora pressure expands into alternating shield rebuilds, wider sword choices, and clustered close-range threats.",
    sceneId: "aurora",
    theme: "guardBlades",
    tier: 2,
  },
  "aurora-3": {
    id: "aurora-3",
    label: "Magnetic Dawn",
    description: "The Aurora finale asks for deliberate shield timing and sword selection against long, readable threat waves.",
    sceneId: "aurora",
    theme: "guardBlades",
    tier: 3,
  },
  "crystal-forge-1": {
    id: "crystal-forge-1",
    label: "Prism Ignition",
    description: "A Crystal Forge opener built around burst fire, glass decoys, and early heavy-threat rehearsal.",
    sceneId: "crystalForge",
    theme: "crystalSiege",
    tier: 1,
  },
  "crystal-forge-2": {
    id: "crystal-forge-2",
    label: "Facet Run",
    description: "Crystal Forge density sharpens with heavier guns, sturdier shields, and tank breaks framed by glass decoys.",
    sceneId: "crystalForge",
    theme: "crystalSiege",
    tier: 2,
  },
  "crystal-forge-3": {
    id: "crystal-forge-3",
    label: "Glass Hammer",
    description: "The Crystal Forge finale commits to heavy weapon payoffs, repeated tank lanes, and prismatic decoy pressure.",
    sceneId: "crystalForge",
    theme: "crystalSiege",
    tier: 3,
  },
  "void-garden-1": {
    id: "void-garden-1",
    label: "Bloom Signal",
    description: "A Void Garden opener about growing the squad early and sustaining calm cross-lane bloom pressure.",
    sceneId: "voidGarden",
    theme: "swarmBloom",
    tier: 1,
  },
  "void-garden-2": {
    id: "void-garden-2",
    label: "Root Lattice",
    description: "Void Garden adds denser squad growth windows, split weapon support, and slow-blooming paired pressure.",
    sceneId: "voidGarden",
    theme: "swarmBloom",
    tier: 2,
  },
  "void-garden-3": {
    id: "void-garden-3",
    label: "Night Orchard",
    description: "The Void Garden finale leans into squad recovery, layered support pickups, and broad organic pressure.",
    sceneId: "voidGarden",
    theme: "swarmBloom",
    tier: 3,
  },
  "solar-array-1": {
    id: "solar-array-1",
    label: "Panel Dawn",
    description: "A Solar Array opener with mirrored reads, split-lane weapon timing, and bright but measured pressure.",
    sceneId: "solarArray",
    theme: "mirrorArray",
    tier: 1,
  },
  "solar-array-2": {
    id: "solar-array-2",
    label: "Heliostat Rush",
    description: "Solar Array pressure grows through mirrored walls, precision rebuilds, and alternating outer-lane surges.",
    sceneId: "solarArray",
    theme: "mirrorArray",
    tier: 2,
  },
  "solar-array-3": {
    id: "solar-array-3",
    label: "Mirror Zenith",
    description: "The Solar Array finale mixes mirrored tank breaks, split-fire rebuilds, and long-form precision pressure.",
    sceneId: "solarArray",
    theme: "mirrorArray",
    tier: 3,
  },
} as const satisfies Record<string, TrackCatalogEntry>;

export type TrackCatalogId = keyof typeof trackCatalog;

export const trackFamilyCatalog = {
  neonNebulae: {
    id: "neonNebulae",
    label: "Neon Nebulae",
    description: "A learning arc about lanes, pickups, shields, and controlled pressure.",
    sceneId: "neonHall",
    accent: "#ff3bd5",
    trackIds: ["neon-nebulae-1", "neon-nebulae-2", "neon-nebulae-3"],
  },
  aurora: {
    id: "aurora",
    label: "Aurora",
    description: "Dense planetary assaults with brighter recovery windows and sharper threat waves.",
    sceneId: "aurora",
    accent: "#20eaff",
    trackIds: ["aurora-1", "aurora-2", "aurora-3"],
  },
  crystalForge: {
    id: "crystalForge",
    label: "Crystal Forge",
    description: "Prismatic factory lanes with sharp pressure, glass decoys, and heavy crystalline breaks.",
    sceneId: "crystalForge",
    accent: "#9b42ff",
    trackIds: ["crystal-forge-1", "crystal-forge-2", "crystal-forge-3"],
  },
  voidGarden: {
    id: "voidGarden",
    label: "Void Garden",
    description: "Bioluminescent night lanes with sparse blooms, decoys, and controlled recovery pockets.",
    sceneId: "voidGarden",
    accent: "#4b86ff",
    trackIds: ["void-garden-1", "void-garden-2", "void-garden-3"],
  },
  solarArray: {
    id: "solarArray",
    label: "Solar Array",
    description: "Bright orbital lanes with mirrored walls, fast outer surges, and decisive heavy tools.",
    sceneId: "solarArray",
    accent: "#ffb23a",
    trackIds: ["solar-array-1", "solar-array-2", "solar-array-3"],
  },
} as const satisfies Record<string, TrackFamilyCatalogEntry>;

export type TrackFamilyCatalogId = keyof typeof trackFamilyCatalog;

export const trackFamiliesFromCatalog = {
  neonNebulae: {
    label: trackFamilyCatalog.neonNebulae.label,
    description: trackFamilyCatalog.neonNebulae.description,
    environment: { sceneId: trackFamilyCatalog.neonNebulae.sceneId },
    trackIds: trackFamilyCatalog.neonNebulae.trackIds,
  },
  aurora: {
    label: trackFamilyCatalog.aurora.label,
    description: trackFamilyCatalog.aurora.description,
    environment: { sceneId: trackFamilyCatalog.aurora.sceneId },
    trackIds: trackFamilyCatalog.aurora.trackIds,
  },
  crystalForge: {
    label: trackFamilyCatalog.crystalForge.label,
    description: trackFamilyCatalog.crystalForge.description,
    environment: { sceneId: trackFamilyCatalog.crystalForge.sceneId },
    trackIds: trackFamilyCatalog.crystalForge.trackIds,
  },
  voidGarden: {
    label: trackFamilyCatalog.voidGarden.label,
    description: trackFamilyCatalog.voidGarden.description,
    environment: { sceneId: trackFamilyCatalog.voidGarden.sceneId },
    trackIds: trackFamilyCatalog.voidGarden.trackIds,
  },
  solarArray: {
    label: trackFamilyCatalog.solarArray.label,
    description: trackFamilyCatalog.solarArray.description,
    environment: { sceneId: trackFamilyCatalog.solarArray.sceneId },
    trackIds: trackFamilyCatalog.solarArray.trackIds,
  },
} as const satisfies Record<TrackFamilyCatalogId, TrackFamilyMember<TrackCatalogId>>;
