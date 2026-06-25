import { neonPalette } from "./tokens";

export type NeonShapeFamily = "player" | "hunter" | "bruiser" | "tank" | "trickster" | "elite";
export type NeonRockStyle = "pitch" | "roll" | "yaw" | "pulse" | "orbit";
export type NeonPoint = readonly [number, number];

export interface NeonGeometricShapeDefinition {
  id: string;
  name: string;
  family: NeonShapeFamily;
  color: string;
  points: readonly NeonPoint[];
  holes?: readonly (readonly NeonPoint[])[];
  rock: NeonRockStyle;
  depth?: number;
}

const regular = (sides: number, rotation = -Math.PI / 2, sx = 1, sy = 1): NeonPoint[] =>
  Array.from({ length: sides }, (_, i) => {
    const angle = rotation + i * Math.PI * 2 / sides;
    return [Math.cos(angle) * sx, Math.sin(angle) * sy] as const;
  });

const star = (points: number, inner = .42, rotation = -Math.PI / 2): NeonPoint[] =>
  Array.from({ length: points * 2 }, (_, i) => {
    const radius = i % 2 ? inner : 1;
    const angle = rotation + i * Math.PI / points;
    return [Math.cos(angle) * radius, Math.sin(angle) * radius] as const;
  });

const diamond: NeonPoint[] = [[0, -1], [1, 0], [0, 1], [-1, 0]];
const arrow: NeonPoint[] = [[0, -1], [.82, .68], [.27, .45], [0, .92], [-.27, .45], [-.82, .68]];
const chevron: NeonPoint[] = [[-1, -.62], [0, -.05], [1, -.62], [.28, .82], [0, .34], [-.28, .82]];
const square: NeonPoint[] = regular(4, Math.PI / 4);
const colors: Record<NeonShapeFamily, string> = {
  player: neonPalette.cyan, hunter: neonPalette.red, bruiser: neonPalette.violet,
  tank: neonPalette.gold, trickster: "#9cff52", elite: "#70dfff",
};

const make = (
  family: NeonShapeFamily, id: string, name: string, points: readonly NeonPoint[],
  rock: NeonRockStyle, holes?: readonly (readonly NeonPoint[])[],
): NeonGeometricShapeDefinition => ({ id, name, family, points, holes, rock, color: colors[family], depth: family === "tank" ? .22 : .14 });

export const neonShapeCatalog: readonly NeonGeometricShapeDefinition[] = [
  make("player", "arrow-classic", "Arrow Classic", arrow, "pitch", [arrow.map(([x, y]) => [x * .42, y * .42] as const)]),
  make("player", "delta-sleek", "Delta Sleek", [[0,-1],[.9,.82],[0,.48],[-.9,.82]], "pitch", [[[0,-.45],[.35,.45],[0,.28],[-.35,.45]]]),
  make("player", "star-core", "Star Core", star(4, .32), "roll", [diamond.map(([x,y]) => [x*.2,y*.2] as const)]),
  make("player", "hex-fighter", "Hex Fighter", regular(6), "yaw", [regular(6, -Math.PI/2, .48, .48)]),
  make("player", "wing-split", "Wing Split", [[-1,-.85],[-.25,.1],[0,-.25],[.25,.1],[1,-.85],[.66,.72],[0,.35],[-.66,.72]], "roll", [diamond.map(([x,y]) => [x*.18,y*.28] as const)]),
  make("player", "triad-pod", "Triad Pod", regular(3), "yaw", [regular(3, -Math.PI/2, .38, .38)]),
  make("player", "spike-lance", "Spike Lance", [[0,-1],[.48,.65],[.18,.42],[0,1],[-.18,.42],[-.48,.65]], "pitch"),
  make("player", "orbit-drone", "Orbit Drone", regular(12), "orbit", [regular(12, 0, .58, .58)]),
  make("player", "shield-ring", "Shield Ring", regular(32), "orbit", [regular(32, 0, .91, .91)]),

  make("hunter", "hunter-dart", "Dart", [[-1,-.7],[1,0],[-1,.7],[-.45,0]], "pitch"),
  make("hunter", "hunter-kite", "Kite", [[-1,-.75],[1,0],[-1,.75],[-.55,0]], "roll", [regular(3,0,.35,.35)]),
  make("hunter", "hunter-needle", "Needle", [[-1,-.42],[1,0],[-1,.42],[-.55,0]], "yaw"),
  make("hunter", "hunter-talon", "Talon", star(3,.28), "roll"),
  make("hunter", "hunter-shard", "Shard", diamond, "pitch"),
  make("hunter", "hunter-vee", "Vee", chevron, "pitch"),
  make("hunter", "hunter-eye", "Watcher", regular(3, Math.PI/2), "yaw", [regular(3,Math.PI/2,.42,.42)]),
  make("hunter", "hunter-burst", "Burst", star(8,.35), "pulse"),
  make("hunter", "hunter-bolt", "Bolt", [[-.7,-1],[.15,-.35],[-.25,-.2],[.7,1],[-.1,.32],[.3,.15]], "roll"),

  make("bruiser", "bruiser-frame", "Frame", square, "roll", [square.map(([x,y])=>[x*.48,y*.48] as const)]),
  make("bruiser", "bruiser-gem", "Gem", diamond, "pitch", [diamond.map(([x,y])=>[x*.28,y*.28] as const)]),
  make("bruiser", "bruiser-hex", "Hex Core", regular(6), "yaw", [regular(6,0,.28,.28)]),
  make("bruiser", "bruiser-crown", "Crown", [[-1,-.75],[-.5,-.55],[0,-.85],[.5,-.55],[1,-.75],[.8,.8],[-.8,.8]], "roll"),
  make("bruiser", "bruiser-cross", "Cross", [[-.35,-1],[.35,-1],[.35,-.35],[1,-.35],[1,.35],[.35,.35],[.35,1],[-.35,1],[-.35,.35],[-1,.35],[-1,-.35],[-.35,-.35]], "yaw"),
  make("bruiser", "bruiser-prism", "Prism", diamond, "pulse", [diamond.map(([x,y])=>[x*.2,y*.2] as const)]),
  make("bruiser", "bruiser-gear", "Gear", star(8,.72), "yaw", [regular(8,0,.28,.28)]),
  make("bruiser", "bruiser-x", "X Core", [[-1,-.65],[-.65,-1],[0,-.35],[.65,-1],[1,-.65],[.35,0],[1,.65],[.65,1],[0,.35],[-.65,1],[-1,.65],[-.35,0]], "roll"),
  make("bruiser", "bruiser-slab", "Slab", [[-.65,-1],[1,-1],[.65,1],[-1,1]], "pitch"),

  make("tank", "tank-hex", "Heavy Hex", regular(6), "yaw", [regular(6,0,.38,.38)]),
  make("tank", "tank-bar", "Armor Bar", [[-.75,-1],[.75,-1],[1,-.45],[.75,1],[-.75,1],[-1,.45]], "pitch", [[[-.48,-.18],[.48,-.18],[.48,.18],[-.48,.18]]]),
  make("tank", "tank-block", "Block", square, "roll", [square.map(([x,y])=>[x*.42,y*.42] as const)]),
  make("tank", "tank-oct", "Octagon", regular(8), "yaw", [regular(8,0,.58,.58)]),
  make("tank", "tank-fort", "Fortress", regular(6), "pitch", [regular(6,0,.58,.58)]),
  make("tank", "tank-reactor", "Reactor", regular(10), "pulse", [regular(10,0,.54,.54)]),
  make("tank", "tank-citadel", "Citadel", [[-.65,-1],[.65,-1],[.65,-.72],[1,-.72],[1,.72],[.65,.72],[.65,1],[-.65,1],[-.65,.72],[-1,.72],[-1,-.72],[-.65,-.72]], "roll", [square.map(([x,y])=>[x*.28,y*.28] as const)]),
  make("tank", "tank-bunker", "Bunker", [[-.72,-1],[.72,-1],[1,-.58],[1,.58],[.72,1],[-.72,1],[-1,.58],[-1,-.58]], "pitch", [[[-.5,-.14],[.5,-.14],[.5,.14],[-.5,.14]]]),
  make("tank", "tank-sun", "Sun Tank", regular(12), "yaw", [regular(12,0,.28,.28)]),

  make("trickster", "trick-diamond", "Phase Diamond", diamond, "roll", [diamond.map(([x,y])=>[x*.2,y*.2] as const)]),
  make("trickster", "trick-chevron", "Slipstream", [[-1,-.8],[-.2,0],[-1,.8],[-.35,.8],[.45,0],[-.35,-.8],[.25,-.8],[1,0],[.25,.8]], "pitch"),
  make("trickster", "trick-square", "Tilt Box", square, "roll", [square.map(([x,y])=>[x*.34,y*.34] as const)]),
  make("trickster", "trick-compass", "Compass", diamond, "yaw"),
  make("trickster", "trick-eye", "Phase Eye", regular(3), "pulse", [regular(8,0,.18,.18)]),
  make("trickster", "trick-hourglass", "Hourglass", [[-1,-1],[1,-1],[.28,0],[1,1],[-1,1],[-.28,0]], "pitch"),
  make("trickster", "trick-link", "Link", regular(12,0,1,.55), "yaw", [regular(12,0,.62,.22)]),
  make("trickster", "trick-vortex", "Vortex", star(7,.56), "roll", [regular(7,0,.25,.25)]),
  make("trickster", "trick-gate", "Ghost Gate", square, "pulse", [square.map(([x,y])=>[x*.78,y*.78] as const)]),

  make("elite", "elite-star", "Nova Star", star(8,.55), "roll", [regular(8,0,.3,.3)]),
  make("elite", "elite-saw", "Halo Saw", star(12,.72), "yaw", [regular(12,0,.42,.42)]),
  make("elite", "elite-crown", "Void Crown", star(7,.48), "pitch", [diamond.map(([x,y])=>[x*.22,y*.22] as const)]),
  make("elite", "elite-prism", "Royal Prism", diamond, "roll", [diamond.map(([x,y])=>[x*.5,y*.5] as const)]),
  make("elite", "elite-orbit", "Orbit Eye", regular(12), "orbit", [regular(12,0,.6,.6), regular(12,0,.2,.2)]),
  make("elite", "elite-circuit", "Circuit Lord", star(8,.75), "yaw", [square.map(([x,y])=>[x*.4,y*.4] as const)]),
  make("elite", "elite-sentinel", "Sentinel", star(10,.62), "pulse", [regular(10,0,.22,.22)]),
  make("elite", "elite-wings", "Night Wings", [[-1,-.8],[-.7,.35],[-.25,.05],[0,.85],[.25,.05],[.7,.35],[1,-.8],[.35,-.35],[0,-.05],[-.35,-.35]], "pitch"),
  make("elite", "elite-emperor", "Emperor", star(8,.48), "roll", [regular(8,0,.24,.24)]),
];

export const getNeonShape = (id: string): NeonGeometricShapeDefinition | undefined =>
  neonShapeCatalog.find(shape => shape.id === id);
