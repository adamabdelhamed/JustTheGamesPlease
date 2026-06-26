import type { NeonCloudBurstSettings } from "../../src/index";

export const cloudPresets: Array<{ name: string; settings: NeonCloudBurstSettings }> = [
  { name: "Cyan hot core", settings: { color: "#63e8ff", coreColor: "#ffffff", size: .22, detail: 5, turbulence: .75, glow: 4, coreIntensity: 1.4, rimIntensity: .85, dissipationTime: .7, dissipationAction: "expandFade", driftY: -.025, seed: 12 } },
  { name: "Magenta plasma", settings: { color: "#ff4dca", coreColor: "#ffe6ff", size: .2, detail: 6, turbulence: 1.1, glow: 5.2, coreIntensity: 1.7, rimIntensity: 1.1, dissipationTime: .55, dissipationAction: "sparkFade", driftX: .015, seed: 41 } },
  { name: "Toxic emerald", settings: { color: "#70ff9d", coreColor: "#f5fff2", size: .24, detail: 4, turbulence: .55, glow: 3.4, coreIntensity: 1.2, rimIntensity: .7, dissipationTime: .9, dissipationAction: "fade", driftY: -.018, seed: 83 } },
  { name: "Violet implosion", settings: { color: "#9b7cff", coreColor: "#fff4ff", size: .28, detail: 5, turbulence: .9, glow: 4.6, coreIntensity: 1.55, rimIntensity: 1, dissipationTime: .8, dissipationAction: "implode", seed: 126 } },
  { name: "Amber shock puff", settings: { color: "#ffb33f", coreColor: "#fff8dc", size: .18, detail: 3, turbulence: .4, glow: 3.8, coreIntensity: 1.35, rimIntensity: .9, dissipationTime: .42, dissipationAction: "expandFade", driftX: -.01, seed: 211 } },
  { name: "Blue smoke bloom", settings: { color: "#4f8dff", coreColor: "#d9f4ff", size: .32, detail: 7, turbulence: 1.35, glow: 3.1, coreIntensity: .95, rimIntensity: .65, dissipationTime: 1.2, dissipationAction: "expandFade", driftY: -.035, seed: 302 } },
];
