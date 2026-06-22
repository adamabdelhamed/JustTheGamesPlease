import * as THREE from 'three/webgpu';
import { color } from 'three/tsl';

export function createDiagnosticScene() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x030705);
  scene.fog = new THREE.FogExp2(0x07100c, 0.035);

  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  camera.position.set(9, 9, 12);
  camera.lookAt(0, 0, 0);

  const floorMaterial = new THREE.MeshStandardNodeMaterial({ roughness: 0.68, metalness: 0.04 });
  floorMaterial.colorNode = color(0x17241f);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(28, 20), floorMaterial);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  const rugMaterial = new THREE.MeshStandardNodeMaterial({ roughness: 0.82, metalness: 0 });
  rugMaterial.colorNode = color(0x286d52);
  const rug = new THREE.Mesh(new THREE.BoxGeometry(10, 0.24, 6.4, 32, 1, 32), rugMaterial);
  rug.position.y = 0.13;
  rug.castShadow = true;
  rug.receiveShadow = true;
  scene.add(rug);

  const markerMaterial = new THREE.MeshStandardNodeMaterial({ roughness: 0.22, metalness: 0.7 });
  markerMaterial.colorNode = color(0x7fffc2);
  const marker = new THREE.Mesh(new THREE.TorusKnotGeometry(0.8, 0.22, 160, 24), markerMaterial);
  marker.position.set(0, 1.45, 0);
  marker.castShadow = true;
  scene.add(marker);

  scene.add(new THREE.HemisphereLight(0xb9ffdf, 0x07100c, 1.35));
  const key = new THREE.DirectionalLight(0xfff2d3, 5.5);
  key.position.set(-5, 10, 6);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  scene.add(key);

  return {
    scene,
    camera,
    update(elapsedSeconds) {
      marker.rotation.x = elapsedSeconds * 0.22;
      marker.rotation.y = elapsedSeconds * 0.48;
      marker.position.y = 1.45 + Math.sin(elapsedSeconds * 1.4) * 0.12;
    },
    dispose() {
      scene.traverse(object => {
        object.geometry?.dispose();
        object.material?.dispose();
      });
    }
  };
}
