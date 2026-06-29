import { composeCatalogTrack } from "./TrackComposer";
import { trackCatalog, trackFamiliesFromCatalog } from "./TrackCatalog";

export const tracks = Object.fromEntries(
  Object.keys(trackCatalog).map(trackId => [trackId, composeCatalogTrack(trackId as keyof typeof trackCatalog)]),
) as { readonly [TrackId in keyof typeof trackCatalog]: ReturnType<typeof composeCatalogTrack> };

export const trackFamilies = trackFamiliesFromCatalog;
export { trackCatalog, trackFamilyCatalog, trackThemeCatalog } from "./TrackCatalog";
export type { TrackCatalogId, TrackFamilyCatalogId, TrackThemeId, TrackTier } from "./TrackCatalog";

export const neonNebulaeTrack1 = tracks["neon-nebulae-1"];
export const neonNebulaeTrack2 = tracks["neon-nebulae-2"];
export const neonNebulaeTrack3 = tracks["neon-nebulae-3"];
export const auroraTrack1 = tracks["aurora-1"];
export const auroraTrack2 = tracks["aurora-2"];
export const auroraTrack3 = tracks["aurora-3"];
export const crystalForgeTrack1 = tracks["crystal-forge-1"];
export const crystalForgeTrack2 = tracks["crystal-forge-2"];
export const crystalForgeTrack3 = tracks["crystal-forge-3"];
export const voidGardenTrack1 = tracks["void-garden-1"];
export const voidGardenTrack2 = tracks["void-garden-2"];
export const voidGardenTrack3 = tracks["void-garden-3"];
export const solarArrayTrack1 = tracks["solar-array-1"];
export const solarArrayTrack2 = tracks["solar-array-2"];
export const solarArrayTrack3 = tracks["solar-array-3"];
