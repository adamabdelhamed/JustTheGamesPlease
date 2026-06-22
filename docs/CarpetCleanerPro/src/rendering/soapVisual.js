import * as THREE from 'three/webgpu';
import { SIMULATION } from '../config/gameConfig.js';
import { WORLD, classifySurface, floorHeightAt } from '../world/worldLayout.js';

export function createSoapVisual(resources) {
  const field = createSoapField(resources);
  const rig = createApplicatorRig(resources);
  return {
    group: rig.group,
    fieldMesh: field.mesh,
    setPose(pose) { rig.setPose(pose); },
    setField(inspection) { field.setInspection(inspection); },
    setSelected(selected) { rig.setSelected(selected); },
    update(timeSeconds) { rig.update(timeSeconds); }
  };
}

function createApplicatorRig(resources) {
  const group = new THREE.Group();
  group.visible = true;
  const shell = new THREE.MeshPhysicalMaterial({ color: 0xe5fff3, roughness: 0.24, transmission: 0.2, transparent: true, opacity: 0.82, thickness: 0.18 });
  const soap = new THREE.MeshPhysicalMaterial({ color: 0x64ffd0, roughness: 0.08, metalness: 0, transmission: 0.12, transparent: true, opacity: 0.9, clearcoat: 1 });
  const impactMaterial = soap.clone();
  const metal = new THREE.MeshStandardMaterial({ color: 0x657a72, roughness: 0.22, metalness: 0.82 });
  const bottleGeometry = new THREE.CylinderGeometry(0.22, 0.28, 0.9, 24);
  const liquidGeometry = new THREE.CylinderGeometry(0.185, 0.23, 0.7, 24);
  const neckGeometry = new THREE.CylinderGeometry(0.075, 0.1, 0.28, 16);
  const spoutGeometry = new THREE.CylinderGeometry(0.035, 0.05, 0.48, 12);
  const streamGeometry = new THREE.CylinderGeometry(0.025, 0.055, 0.78, 12);
  const impactGeometry = new THREE.TorusGeometry(0.13, 0.018, 8, 32);
  resources.push(shell, soap, impactMaterial, metal, bottleGeometry, liquidGeometry, neckGeometry, spoutGeometry, streamGeometry, impactGeometry);

  const bottle = new THREE.Mesh(bottleGeometry, shell);
  const liquid = new THREE.Mesh(liquidGeometry, soap);
  const neck = new THREE.Mesh(neckGeometry, metal);
  const spout = new THREE.Mesh(spoutGeometry, metal);
  const stream = new THREE.Mesh(streamGeometry, soap);
  const impact = new THREE.Mesh(impactGeometry, impactMaterial);
  bottle.position.set(-0.73, 1.05, 0);
  bottle.rotation.z = -0.48;
  liquid.position.copy(bottle.position);
  liquid.rotation.copy(bottle.rotation);
  neck.position.set(-0.36, 0.79, 0);
  neck.rotation.z = -0.48;
  spout.position.set(-0.23, 0.62, 0);
  spout.rotation.z = Math.PI / 2;
  stream.position.set(0, 0.3, 0);
  impact.position.set(0, 0.025, 0);
  impact.rotation.x = Math.PI / 2;
  bottle.castShadow = liquid.castShadow = neck.castShadow = spout.castShadow = true;
  group.add(bottle, liquid, neck, spout, stream, impact);

  let active = false;
  let selected = true;
  let hasPose = false;
  group.visible = false;
  return {
    group,
    setPose(pose) {
      hasPose = true;
      group.visible = selected;
      group.position.set(pose.x, pose.y + 0.015, pose.z);
      group.rotation.y = -pose.orientation;
      active = pose.contact;
      stream.visible = impact.visible = active;
    },
    setSelected(value) { selected = value; group.visible = selected && hasPose; },
    update(timeSeconds) {
      if (!active) return;
      const pulse = 0.9 + Math.sin(timeSeconds * 16) * 0.12;
      stream.scale.set(pulse, 1, pulse);
      impact.scale.setScalar(0.82 + (timeSeconds * 1.7 % 1) * 0.8);
      impactMaterial.opacity = 0.9 - (timeSeconds * 1.7 % 1) * 0.55;
    }
  };
}

function createSoapField(resources) {
  const texture = new THREE.DataTexture(new Uint8Array(4), 1, 1, THREE.RGBAFormat, THREE.UnsignedByteType);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.flipY = true;
  texture.minFilter = texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;
  const heightTexture = new THREE.DataTexture(new Uint8Array(4), 1, 1, THREE.RGBAFormat, THREE.UnsignedByteType);
  heightTexture.flipY = true;
  heightTexture.minFilter = heightTexture.magFilter = THREE.LinearFilter;
  heightTexture.needsUpdate = true;
  const material = new THREE.MeshPhysicalMaterial({
    map: texture,
    alphaMap: heightTexture,
    displacementMap: heightTexture,
    displacementScale: 0.115,
    bumpMap: heightTexture,
    bumpScale: 0.09,
    transparent: true,
    alphaTest: 0.012,
    depthWrite: false,
    roughness: 0.055,
    metalness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0.025,
    transmission: 0.16,
    thickness: 0.09,
    ior: 1.38,
    opacity: 0.96
  });
  const geometry = createSurfaceGeometry();
  const mesh = new THREE.Mesh(geometry, material);
  mesh.visible = false;
  mesh.renderOrder = 12;
  resources.push(texture, heightTexture, material, geometry);
  return {
    mesh,
    setInspection(inspection) {
      const data = new Uint8Array(SIMULATION.gridWidth * SIMULATION.gridHeight * 4);
      const heightData = new Uint8Array(SIMULATION.gridWidth * SIMULATION.gridHeight * 4);
      let visible = false;
      for (let index = 0; index < inspection.values.length; index += 1) {
        const amount = Math.min(1, inspection.values[index] / 0.08);
        const offset = index * 4;
        data[offset] = 94;
        data[offset + 1] = 255;
        data[offset + 2] = 205;
        data[offset + 3] = Math.round(Math.sqrt(amount) * 242);
        const gelHeight = Math.round(Math.pow(amount, 0.62) * 255);
        heightData[offset] = gelHeight;
        heightData[offset + 1] = gelHeight;
        heightData[offset + 2] = gelHeight;
        heightData[offset + 3] = 255;
        visible ||= amount > 0.003;
      }
      texture.image = { data, width: SIMULATION.gridWidth, height: SIMULATION.gridHeight };
      texture.needsUpdate = true;
      heightTexture.image = { data: heightData, width: SIMULATION.gridWidth, height: SIMULATION.gridHeight };
      heightTexture.needsUpdate = true;
      mesh.visible = visible;
    }
  };
}

function createSurfaceGeometry() {
  const geometry = new THREE.PlaneGeometry(WORLD.floor.width, WORLD.floor.depth, 176, 112);
  const positions = geometry.attributes.position;
  for (let index = 0; index < positions.count; index += 1) {
    const x = positions.getX(index);
    const worldZ = -positions.getY(index);
    const lift = classifySurface(x, worldZ) === 'carpet' ? WORLD.rug.thickness + 0.075 : 0.035;
    positions.setZ(index, floorHeightAt(x) + lift);
  }
  geometry.rotateX(-Math.PI / 2);
  return geometry;
}
