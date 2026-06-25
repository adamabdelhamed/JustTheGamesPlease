import type { TrackMember } from "../TrackDefinition";

export const secondTrack = {
  label: "Violet Crossfire",
  description: "Faster enemies alternate sides in short bursts, with fewer recovery pickups.",
  durationSeconds: 24,
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
    floorColor: "violet",
    crackColor: "pink",
    airColor: "cyan",
    horizonColor: "orange",
    pulseRate: 1.8,
    crackDensity: 10,
    airStreakCount: 15,
  },
  definition: {
    layout: `
..... | ..E..
..E.. | .....
..... | .....
.E.E. | .....
..... | .E.E.
..... | .....
..E.. | ..E..
..... | .....
...E. | .E...
..... | .....
..2.. | .....
..... | ..E..
.E.E. | .....
..... | .E.E.
..... | .....
..E.. | ..E..
..... | .....
.EEE. | .....
..... | .EEE.
..... | .....
..E.. | .....
..... | ..E..
..... | .....
..P.. | ..P..
`,

    legend: {
      ".": { id: "empty" },
      "P": { id: "player.start" },
      "E": { id: "enemy.basic", speed: 1.15 },
      "2": { id: "pickup.unitMultiplier.2x" },
    },

    balance: {
      enemyHp: 1,
      enemySpeed: 1.1,
    },
  },
} satisfies TrackMember;
