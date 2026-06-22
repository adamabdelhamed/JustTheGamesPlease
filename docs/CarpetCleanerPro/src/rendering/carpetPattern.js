const PATTERN_WIDTH = 1024;
const PATTERN_HEIGHT = 640;

const PALETTES = [
  [[38, 58, 78], [151, 48, 42], [213, 164, 77], [224, 207, 158], [42, 111, 93]],
  [[44, 30, 55], [112, 38, 48], [190, 126, 58], [210, 186, 129], [48, 92, 82]],
  [[24, 52, 48], [51, 119, 105], [206, 139, 70], [225, 211, 172], [123, 48, 54]]
];

export function generateCarpetPattern(seed) {
  const familyIndex = (seed >>> 0) % 3;
  const family = ['Geometric medallion', 'Persian garden', 'Modern contour'][familyIndex];
  const palette = PALETTES[(seed >>> 8) % PALETTES.length];
  const data = new Uint8Array(PATTERN_WIDTH * PATTERN_HEIGHT * 4);
  let hash = 2166136261;
  for (let y = 0; y < PATTERN_HEIGHT; y += 1) {
    const v = (y + 0.5) / PATTERN_HEIGHT * 2 - 1;
    for (let x = 0; x < PATTERN_WIDTH; x += 1) {
      const u = (x + 0.5) / PATTERN_WIDTH * 2 - 1;
      const paletteIndex = patternIndex(familyIndex, u, v, seed);
      const source = palette[paletteIndex];
      const grain = ((hash2(x, y, seed) & 255) / 255 - 0.5) * 7;
      const offset = (y * PATTERN_WIDTH + x) * 4;
      data[offset] = clampByte(source[0] + grain);
      data[offset + 1] = clampByte(source[1] + grain);
      data[offset + 2] = clampByte(source[2] + grain);
      data[offset + 3] = 255;
      hash = Math.imul(hash ^ ((data[offset] << 16) | (data[offset + 1] << 8) | data[offset + 2]), 16777619) >>> 0;
    }
  }
  return { data, width: PATTERN_WIDTH, height: PATTERN_HEIGHT, family, checksum: hash.toString(16).padStart(8, '0') };
}

function patternIndex(family, u, v, seed) {
  const ax = Math.abs(u);
  const ay = Math.abs(v);
  const border = ax > 0.91 || ay > 0.86;
  const innerBorder = ax > 0.84 || ay > 0.76;
  if (border) return 1;
  if (innerBorder) return ((Math.floor((u + 1) * 22) + Math.floor((v + 1) * 16)) & 1) ? 2 : 0;
  if (family === 0) {
    const diamond = Math.abs(u * 1.05) + Math.abs(v * 1.42);
    const lattice = (Math.floor((u + v) * 12) + Math.floor((u - v) * 12)) & 1;
    if (diamond < 0.25) return 2;
    if (Math.abs(diamond - 0.54) < 0.055) return 3;
    return lattice ? 0 : 4;
  }
  if (family === 1) {
    const tileX = Math.floor((u + 1) * 7);
    const tileY = Math.floor((v + 1) * 5);
    const localX = ((u + 1) * 7) % 1 - 0.5;
    const localY = ((v + 1) * 5) % 1 - 0.5;
    const rosette = localX * localX + localY * localY < 0.095 + ((tileX + tileY) & 1) * 0.025;
    const vine = Math.abs(Math.sin((u * 3.2 + v * 1.8) * Math.PI + seed * 1e-6)) < 0.13;
    return rosette ? 2 : vine ? 4 : ((tileX + tileY) & 1) ? 1 : 0;
  }
  const wave = Math.sin(u * 9 + Math.sin(v * 5) * 2.2 + seed * 1e-7) + Math.cos(v * 11 - u * 2.4);
  const ring = Math.sin(Math.hypot(u * 1.2, v) * 28 - seed * 1e-7);
  return wave + ring * 0.45 > 0.8 ? 2 : wave < -0.65 ? 1 : wave > 0.05 ? 4 : 0;
}

function hash2(x, y, seed) {
  let value = Math.imul(x + 1, 374761393) ^ Math.imul(y + 1, 668265263) ^ seed;
  value = Math.imul(value ^ (value >>> 13), 1274126177);
  return (value ^ (value >>> 16)) >>> 0;
}

function clampByte(value) { return Math.max(0, Math.min(255, Math.round(value))); }
