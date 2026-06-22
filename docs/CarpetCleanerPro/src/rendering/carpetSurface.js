import * as THREE from 'three/webgpu';
import { WORLD, floorHeightAt } from '../world/worldLayout.js';
import { SIMULATION } from '../config/gameConfig.js';
import { generateCarpetPattern } from './carpetPattern.js';

const FIBERS_X = 220;
const FIBERS_Z = 140;
const FIBER_COUNT = FIBERS_X * FIBERS_Z;

export function createCarpetSurface(resources, diagnostics) {
  const rug = WORLD.rug;
  const group = new THREE.Group();
  group.position.set(rug.centerX, floorHeightAt(rug.centerX) + rug.thickness / 2, rug.centerZ);
  group.rotation.z = -Math.atan(WORLD.floor.slope);

  const edgeMaterial = new THREE.MeshStandardMaterial({ color: 0x302a25, roughness: 1, metalness: 0 });
  const topMaterial = new THREE.MeshStandardMaterial({ roughness: 0.94, metalness: 0 });
  const fiberMaterial = new THREE.MeshStandardMaterial({ roughness: 1, metalness: 0, vertexColors: true });
  const bodyGeometry = new THREE.BoxGeometry(rug.width, rug.thickness, rug.depth, 40, 1, 26);
  const topGeometry = new THREE.PlaneGeometry(rug.width - 0.12, rug.depth - 0.12, 48, 32);
  topGeometry.rotateX(-Math.PI / 2);
  const fiberGeometry = new THREE.ConeGeometry(0.009, 0.07, 4, 1);
  const body = new THREE.Mesh(bodyGeometry, edgeMaterial);
  const top = new THREE.Mesh(topGeometry, topMaterial);
  const fibers = new THREE.InstancedMesh(fiberGeometry, fiberMaterial, FIBER_COUNT);
  body.castShadow = true;
  body.receiveShadow = true;
  top.position.y = rug.thickness / 2 + 0.008;
  top.receiveShadow = true;
  fibers.castShadow = true;
  fibers.receiveShadow = true;
  fibers.frustumCulled = false;
  group.add(body, top, fibers);
  resources.push(edgeMaterial, topMaterial, fiberMaterial, bodyGeometry, topGeometry, fiberGeometry);

  let seed = 0;
  let basePattern;
  let fields = null;
  let testStates = false;

  function update(nextSeed, nextFields = fields) {
    seed = nextSeed >>> 0;
    fields = nextFields;
    basePattern = generateCarpetPattern(seed);
    const visual = applyMaterialState(basePattern, fields, testStates);
    const texture = topMaterial.map;
    if (texture) {
      texture.image = { data: visual, width: basePattern.width, height: basePattern.height };
      texture.needsUpdate = true;
    } else {
      topMaterial.map = new THREE.DataTexture(visual, basePattern.width, basePattern.height, THREE.RGBAFormat, THREE.UnsignedByteType);
      topMaterial.map.colorSpace = THREE.SRGBColorSpace;
      topMaterial.map.anisotropy = 16;
      topMaterial.map.needsUpdate = true;
      resources.push(topMaterial.map);
    }
    updateFibers(fibers, basePattern, fields, testStates, seed);
    diagnostics.setCarpetQuality({
      family: basePattern.family,
      checksum: basePattern.checksum,
      fiberCount: FIBER_COUNT,
      triangles: FIBER_COUNT * 8,
      testStates
    });
  }

  update(SIMULATION.defaultSeed, null);
  return {
    group,
    setFields(next) { update(next.seed, next); },
    setTestStates(enabled) { testStates = enabled; update(seed, fields); }
  };
}

function applyMaterialState(pattern, fields, testStates) {
  const output = pattern.data.slice();
  for (let y = 0; y < pattern.height; y += 1) {
    for (let x = 0; x < pattern.width; x += 1) {
      const u = (x + 0.5) / pattern.width;
      const v = (y + 0.5) / pattern.height;
      const state = sampleState(u, v, fields, testStates);
      const offset = (y * pattern.width + x) * 4;
      const darken = 1 - state.dirt * 0.72 - state.wet * 0.22;
      output[offset] = clampByte(output[offset] * darken + state.dirt * 42 + state.wet * 14);
      output[offset + 1] = clampByte(output[offset + 1] * darken + state.dirt * 29 + state.wet * 25);
      output[offset + 2] = clampByte(output[offset + 2] * darken + state.dirt * 18 + state.wet * 32);
    }
  }
  return output;
}

function updateFibers(mesh, pattern, fields, testStates, seed) {
  const matrix = new THREE.Matrix4();
  const position = new THREE.Vector3();
  const quaternion = new THREE.Quaternion();
  const scale = new THREE.Vector3();
  const euler = new THREE.Euler();
  const rgb = new THREE.Color();
  for (let z = 0; z < FIBERS_Z; z += 1) {
    const v = (z + 0.5) / FIBERS_Z;
    for (let x = 0; x < FIBERS_X; x += 1) {
      const u = (x + 0.5) / FIBERS_X;
      const index = z * FIBERS_X + x;
      const jitter = hash(index, seed);
      const state = sampleState(u, v, fields, testStates);
      const localX = (u - 0.5) * (WORLD.rug.width - 0.14) + (jitter - 0.5) * 0.025;
      const localZ = (v - 0.5) * (WORLD.rug.depth - 0.14) + (hash(index + 91, seed) - 0.5) * 0.025;
      const heightScale = (0.82 + jitter * 0.3) * (1 - state.compression * 0.72);
      position.set(localX, WORLD.rug.thickness / 2 + 0.035 * heightScale + 0.01, localZ);
      euler.set((hash(index + 17, seed) - 0.5) * 0.2, hash(index + 31, seed) * Math.PI, state.compression * 0.48);
      quaternion.setFromEuler(euler);
      scale.set(1 + state.wet * 0.35, heightScale, 1 + state.wet * 0.35);
      matrix.compose(position, quaternion, scale);
      mesh.setMatrixAt(index, matrix);
      const px = Math.min(pattern.width - 1, Math.floor(u * pattern.width));
      const py = Math.min(pattern.height - 1, Math.floor(v * pattern.height));
      const offset = (py * pattern.width + px) * 4;
      const darken = 1 - state.dirt * 0.75 - state.wet * 0.28;
      rgb.setRGB(
        (pattern.data[offset] * darken + state.dirt * 38) / 255,
        (pattern.data[offset + 1] * darken + state.dirt * 27) / 255,
        (pattern.data[offset + 2] * darken + state.dirt * 17) / 255,
        THREE.SRGBColorSpace
      );
      mesh.setColorAt(index, rgb);
    }
  }
  mesh.instanceMatrix.needsUpdate = true;
  mesh.instanceColor.needsUpdate = true;
}

function sampleState(u, v, fields, testStates) {
  if (testStates) {
    const band = Math.min(3, Math.floor(u * 4));
    return band === 0 ? { dirt: 0, wet: 0, compression: 0 }
      : band === 1 ? { dirt: 0.05, wet: 1, compression: 0.08 }
      : band === 2 ? { dirt: 1, wet: 0.18, compression: 0.12 }
      : { dirt: 0.12, wet: 0, compression: 1 };
  }
  if (!fields) return { dirt: 0.55, wet: 0, compression: 0 };
  const worldX = WORLD.rug.centerX + (u - 0.5) * WORLD.rug.width;
  const worldZ = WORLD.rug.centerZ + (v - 0.5) * WORLD.rug.depth;
  const gx = Math.max(0, Math.min(SIMULATION.gridWidth - 1, Math.floor((worldX + WORLD.floor.width / 2) / WORLD.floor.width * SIMULATION.gridWidth)));
  const gy = Math.max(0, Math.min(SIMULATION.gridHeight - 1, Math.floor((worldZ + WORLD.floor.depth / 2) / WORLD.floor.depth * SIMULATION.gridHeight)));
  const index = gy * SIMULATION.gridWidth + gx;
  return {
    dirt: Math.min(1, fields.embeddedSoil[index] / 5.2),
    wet: Math.min(1, fields.carpetSaturation[index] / 18),
    compression: 0
  };
}

function hash(index, seed) {
  let value = Math.imul(index + 1, 2654435761) ^ seed;
  value = Math.imul(value ^ (value >>> 16), 2246822519);
  return ((value ^ (value >>> 13)) >>> 0) / 0x100000000;
}

function clampByte(value) { return Math.max(0, Math.min(255, Math.round(value))); }
