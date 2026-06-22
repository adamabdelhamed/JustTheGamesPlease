import * as THREE from 'three/webgpu';
import { color } from 'three/tsl';
import { WORLD, classifySurface, floorHeightAt } from '../world/worldLayout.js';
import { SIMULATION } from '../config/gameConfig.js';
import { createCarpetSurface } from './carpetSurface.js';

const LOOK_AT = new THREE.Vector3(0.4, 0, 0);

export function createCleaningBayScene(diagnosticsPanel) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x07100e);
  scene.fog = new THREE.Fog(0x07100e, 20, 38);

  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 80);
  const raycaster = new THREE.Raycaster();
  const workPlane = new THREE.Plane(new THREE.Vector3(WORLD.floor.slope, 1, 0).normalize(), 0);
  const resources = [];

  const floor = createSlopedFloor(resources);
  scene.add(floor);
  const carpet = createCarpetSurface(resources, diagnosticsPanel);
  scene.add(carpet.group);
  scene.add(createDrain(resources));
  scene.add(createRoomShell(resources));
  const materialDebug = createMaterialDebugOverlay(resources);
  scene.add(materialDebug.mesh);

  const worldDiagnostics = createWorldDiagnostics();
  worldDiagnostics.visible = false;
  scene.add(worldDiagnostics);
  addLighting(scene);

  function resize(width, height) {
    const aspect = width / height;
    const narrowAdjustment = Math.max(0, 1.55 - aspect);
    camera.position.set(11 + narrowAdjustment * 3.5, 13 + narrowAdjustment * 3, 16.5 + narrowAdjustment * 4);
    camera.aspect = aspect;
    camera.lookAt(LOOK_AT);
    camera.updateProjectionMatrix();
  }

  return {
    scene,
    camera,
    resize,
    setDiagnosticsVisible(visible) { worldDiagnostics.visible = visible; },
    setCarpetFields(fields) { carpet.setFields(fields); },
    setCarpetTestStates(enabled) { carpet.setTestStates(enabled); },
    setMaterialDebugView(inspection) { materialDebug.setInspection(inspection); },
    projectScreenToWorkPlane(normalizedX, normalizedY, target = new THREE.Vector3()) {
      raycaster.setFromCamera(new THREE.Vector2(normalizedX, normalizedY), camera);
      return raycaster.ray.intersectPlane(workPlane, target);
    },
    update() {},
    dispose() {
      for (const resource of resources) resource.dispose();
      worldDiagnostics.traverse(object => {
        object.geometry?.dispose();
        object.material?.dispose();
      });
    }
  };
}

function createMaterialDebugOverlay(resources) {
  const pixels = new Uint8Array(4);
  const texture = new THREE.DataTexture(pixels, 1, 1, THREE.RGBAFormat, THREE.UnsignedByteType);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearFilter;
  texture.needsUpdate = true;
  const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: 0.78, depthWrite: false });
  const geometry = new THREE.PlaneGeometry(WORLD.floor.width, WORLD.floor.depth, 44, 28);
  const positions = geometry.attributes.position;
  for (let index = 0; index < positions.count; index += 1) {
    const x = positions.getX(index);
    const worldZ = -positions.getY(index);
    const lift = classifySurface(x, worldZ) === 'carpet' ? WORLD.rug.thickness + 0.055 : 0.025;
    positions.setZ(index, floorHeightAt(x) + lift);
  }
  geometry.rotateX(-Math.PI / 2);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.visible = false;
  mesh.renderOrder = 20;
  resources.push(texture, material, geometry);

  return {
    mesh,
    setInspection(inspection) {
      if (!inspection) { mesh.visible = false; return; }
      const { values, schema } = inspection;
      const data = new Uint8Array(SIMULATION.gridWidth * SIMULATION.gridHeight * 4);
      for (let index = 0; index < SIMULATION.gridWidth * SIMULATION.gridHeight; index += 1) {
        const value = schema.components === 2
          ? Math.hypot(values[index * 2], values[index * 2 + 1])
          : values[index];
        const normalized = schema.minimum < 0
          ? Math.min(1, Math.abs(value) / Math.max(Math.abs(schema.minimum), schema.maximum))
          : Math.min(1, Math.max(0, (value - schema.minimum) / (schema.maximum - schema.minimum || 1)));
        const offset = index * 4;
        falseColor(normalized, data, offset, inspection.name === 'surfaceMask' ? value / 3 : null);
      }
      texture.image = { data, width: SIMULATION.gridWidth, height: SIMULATION.gridHeight };
      texture.needsUpdate = true;
      mesh.visible = true;
    }
  };
}

function falseColor(value, target, offset, categoricalValue) {
  const t = categoricalValue ?? value;
  target[offset] = Math.round(255 * Math.max(0, Math.min(1, 1.5 * t - 0.25)));
  target[offset + 1] = Math.round(255 * Math.max(0, Math.min(1, 1.5 - Math.abs(t - 0.5) * 3)));
  target[offset + 2] = Math.round(255 * Math.max(0, Math.min(1, 1.25 - 1.5 * t)));
  target[offset + 3] = 220;
}

function createSlopedFloor(resources) {
  const material = nodeMaterial(0x45514c, { roughness: 0.76, metalness: 0.02 });
  resources.push(material);
  const group = new THREE.Group();
  const floorLeft = -WORLD.floor.width / 2;
  const floorRight = WORLD.floor.width / 2;
  const floorBack = -WORLD.floor.depth / 2;
  const floorFront = WORLD.floor.depth / 2;
  const drainLeft = WORLD.drain.centerX - WORLD.drain.width / 2;
  const drainRight = WORLD.drain.centerX + WORLD.drain.width / 2;
  const drainBack = WORLD.drain.centerZ - WORLD.drain.depth / 2;
  const drainFront = WORLD.drain.centerZ + WORLD.drain.depth / 2;
  const sections = [
    [floorLeft, drainLeft, floorBack, floorFront],
    [drainRight, floorRight, floorBack, floorFront],
    [drainLeft, drainRight, floorBack, drainBack],
    [drainLeft, drainRight, drainFront, floorFront]
  ];
  for (const bounds of sections) {
    const geometry = createSlopedPlaneGeometry(...bounds);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    group.add(mesh);
    resources.push(geometry);
  }
  return group;
}

function createSlopedPlaneGeometry(minX, maxX, minZ, maxZ) {
  const width = maxX - minX;
  const depth = maxZ - minZ;
  const centerX = (minX + maxX) / 2;
  const centerZ = (minZ + maxZ) / 2;
  const geometry = new THREE.PlaneGeometry(width, depth, Math.max(1, Math.ceil(width * 2)), Math.max(1, Math.ceil(depth * 2)));
  const positions = geometry.attributes.position;
  for (let index = 0; index < positions.count; index += 1) {
    const worldX = positions.getX(index) + centerX;
    positions.setX(index, worldX);
    positions.setY(index, positions.getY(index) - centerZ);
    positions.setZ(index, floorHeightAt(worldX));
  }
  geometry.computeVertexNormals();
  geometry.rotateX(-Math.PI / 2);
  return geometry;
}

function createDrain(resources) {
  const drain = WORLD.drain;
  const group = new THREE.Group();
  group.position.set(drain.centerX, floorHeightAt(drain.centerX), drain.centerZ);
  group.rotation.z = -Math.atan(WORLD.floor.slope);
  const dark = nodeMaterial(0x030606, { roughness: 0.24, metalness: 0.15 });
  const steel = nodeMaterial(0x697872, { roughness: 0.28, metalness: 0.88 });
  resources.push(dark, steel);

  const intakeGeometry = new THREE.BoxGeometry(drain.width * 0.78, drain.intakeDepth * 0.75, drain.depth * 0.94);
  const cavitySideGeometry = new THREE.BoxGeometry(0.08, drain.intakeDepth, drain.depth);
  const cavityEndGeometry = new THREE.BoxGeometry(drain.width, drain.intakeDepth, 0.08);
  const cavityBottomGeometry = new THREE.BoxGeometry(drain.width, 0.08, drain.depth);
  resources.push(intakeGeometry, cavitySideGeometry, cavityEndGeometry, cavityBottomGeometry);
  const intake = new THREE.Mesh(intakeGeometry, dark);
  intake.position.y = -drain.intakeDepth / 2 + 0.04;
  const bottom = new THREE.Mesh(cavityBottomGeometry, steel);
  bottom.position.y = -drain.intakeDepth + 0.02;
  group.add(intake, bottom);
  for (const side of [-1, 1]) {
    const wall = new THREE.Mesh(cavitySideGeometry, steel);
    wall.position.set(side * (drain.width / 2 - 0.04), -drain.intakeDepth / 2, 0);
    group.add(wall);
  }
  for (const end of [-1, 1]) {
    const wall = new THREE.Mesh(cavityEndGeometry, steel);
    wall.position.set(0, -drain.intakeDepth / 2, end * (drain.depth / 2 - 0.04));
    group.add(wall);
  }

  const railGeometry = new THREE.BoxGeometry(0.09, 0.08, drain.depth);
  resources.push(railGeometry);
  for (const side of [-1, 1]) {
    const rail = new THREE.Mesh(railGeometry, steel);
    rail.position.set(side * (drain.width / 2 - 0.07), 0.035, 0);
    rail.castShadow = true;
    group.add(rail);
  }

  const barGeometry = new THREE.BoxGeometry(drain.width - 0.16, 0.07, 0.075);
  resources.push(barGeometry);
  const barCount = 48;
  const bars = new THREE.InstancedMesh(barGeometry, steel, barCount);
  const matrix = new THREE.Matrix4();
  for (let index = 0; index < barCount; index += 1) {
    const z = -drain.depth / 2 + 0.18 + index * ((drain.depth - 0.36) / (barCount - 1));
    bars.setMatrixAt(index, matrix.makeTranslation(0, 0.075, z));
  }
  bars.castShadow = true;
  bars.receiveShadow = true;
  group.add(bars);
  return group;
}

function createRoomShell(resources) {
  const material = nodeMaterial(0x18231f, { roughness: 0.88, metalness: 0 });
  const curbMaterial = nodeMaterial(0x626c67, { roughness: 0.7, metalness: 0.03 });
  resources.push(material, curbMaterial);
  const group = new THREE.Group();
  const backGeometry = new THREE.BoxGeometry(WORLD.floor.width, WORLD.room.wallHeight, 0.3);
  const sideGeometry = new THREE.BoxGeometry(0.3, WORLD.room.wallHeight, WORLD.floor.depth);
  const curbGeometry = new THREE.BoxGeometry(WORLD.floor.width, 0.28, 0.42);
  resources.push(backGeometry, sideGeometry, curbGeometry);
  const back = new THREE.Mesh(backGeometry, material);
  back.position.set(0, WORLD.room.wallHeight / 2 - 0.2, -WORLD.floor.depth / 2 - 0.12);
  const side = new THREE.Mesh(sideGeometry, material);
  side.position.set(-WORLD.floor.width / 2 - 0.12, WORLD.room.wallHeight / 2 - 0.2, 0);
  const curb = new THREE.Mesh(curbGeometry, curbMaterial);
  curb.position.set(0, 0.12, -WORLD.floor.depth / 2 + 0.1);
  back.receiveShadow = side.receiveShadow = curb.receiveShadow = true;
  group.add(back, side, curb);
  return group;
}

function createWorldDiagnostics() {
  const group = new THREE.Group();
  group.add(new THREE.AxesHelper(2.5));
  const rugBox = new THREE.Box3(
    new THREE.Vector3(WORLD.rug.centerX - WORLD.rug.width / 2, floorHeightAt(WORLD.rug.centerX), -WORLD.rug.depth / 2),
    new THREE.Vector3(WORLD.rug.centerX + WORLD.rug.width / 2, floorHeightAt(WORLD.rug.centerX) + WORLD.rug.thickness + 0.12, WORLD.rug.depth / 2)
  );
  const drainBox = new THREE.Box3(
    new THREE.Vector3(WORLD.drain.centerX - WORLD.drain.width / 2, floorHeightAt(WORLD.drain.centerX) - WORLD.drain.intakeDepth, -WORLD.drain.depth / 2),
    new THREE.Vector3(WORLD.drain.centerX + WORLD.drain.width / 2, floorHeightAt(WORLD.drain.centerX) + 0.15, WORLD.drain.depth / 2)
  );
  group.add(new THREE.Box3Helper(rugBox, 0xffc35c), new THREE.Box3Helper(drainBox, 0x55e7ff));
  const arrowStart = new THREE.Vector3(-7, floorHeightAt(-7) + 0.3, 4.5);
  group.add(new THREE.ArrowHelper(new THREE.Vector3(1, -WORLD.floor.slope, 0).normalize(), arrowStart, 12, 0x7fffc2, 0.55, 0.28));
  const dimensionMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
  const points = [
    new THREE.Vector3(-WORLD.floor.width / 2, 0.35, 6.2), new THREE.Vector3(WORLD.floor.width / 2, -WORLD.floor.slope * WORLD.floor.width / 2 + 0.35, 6.2),
    new THREE.Vector3(-6.5, 0.45, -WORLD.rug.depth / 2), new THREE.Vector3(-6.5, 0.45, WORLD.rug.depth / 2)
  ];
  group.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(points), dimensionMaterial));
  return group;
}

function addLighting(scene) {
  scene.add(new THREE.HemisphereLight(0xd9f3e7, 0x101713, 1.6));
  const key = new THREE.DirectionalLight(0xffe8c4, 5.2);
  key.position.set(-5, 11, 8);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.camera.left = -12;
  key.shadow.camera.right = 12;
  key.shadow.camera.top = 10;
  key.shadow.camera.bottom = -10;
  key.shadow.bias = -0.00015;
  scene.add(key);
  const drainFill = new THREE.PointLight(0x8adbc0, 1.8, 12, 2);
  drainFill.position.set(WORLD.drain.centerX, 2.8, 1.5);
  scene.add(drainFill);
}

function nodeMaterial(hex, properties) {
  const material = new THREE.MeshStandardNodeMaterial(properties);
  material.colorNode = color(hex);
  return material;
}
