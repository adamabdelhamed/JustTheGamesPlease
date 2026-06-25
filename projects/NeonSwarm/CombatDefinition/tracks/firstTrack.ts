import type { TrackMember } from "../TrackDefinition";

export const firstTrack = {
  label: "Electric Causeway",
  description: "A short cyan causeway with fractured power seams and alternating lane pressure.",
  durationSeconds: 26,
  startingGun: "pulsePistol",
  startingGunLevel: 1,
  viewport: {
    orientation: "portrait",
    aspectWidth: 9,
    aspectHeight: 16,
    logicalWidth: 450,
    logicalHeight: 800,
  },
  environment: {
    floorColor: "deepBlue",
    crackColor: "cyan",
    airColor: "violet",
    horizonColor: "pink",
    pulseRate: 1.35,
    crackDensity: 14,
    airStreakCount: 11,
  },
  definition: {
    layout: `
..... | .....
..... | ..E..
..... | .....
..E.. | .....
..... | .....
.E.E. | ..E..
..... | .....
..E.. | .E.E.
..... | .....
..... | .....
.EEE. | .....
..... | .....
..E.. | .EEE.
..... | .....
..... | .....
.EE.. | ..EE.
..... | .....
..E.. | .E.E.
..... | .....
..2.. | .....
.EEE. | .....
..... | ..E..
..... | .....
..E.. | .....
..P.. | ..P..
`,

    legend: {
      ".": { id: "empty" },
      "P": { id: "player.start" },
      "E": { id: "enemy.basic" },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.8 },
    },

    balance: {
      enemyHp: 1,
      enemySpeed: 1,
    },
  },
} satisfies TrackMember;
