export const neonPalette = {
  cyan: "#55e7ff",
  pink: "#ff4f9a",
  green: "#7fffc2",
  gold: "#ffd45c",
  violet: "#a987ff",
  whiteHot: "#f4fbff",
} as const;

export type NeonColorName = keyof typeof neonPalette;

export const glowPresets = {
  soft: 0.38,
  standard: 0.65,
  intense: 1,
} as const;
