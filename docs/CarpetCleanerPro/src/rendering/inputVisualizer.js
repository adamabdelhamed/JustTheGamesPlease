import * as THREE from 'three/webgpu';

const MAX_POINTS = 180;

export function createInputVisualizer(resources) {
  const group = new THREE.Group();
  const raw = createPath(0xff755f, resources);
  const smooth = createPath(0x55e7ff, resources);
  const cursorMaterial = new THREE.MeshBasicMaterial({ color: 0x7fffc2, transparent: true, opacity: 0.9, depthWrite: false });
  const cursorGeometry = new THREE.RingGeometry(0.12, 0.17, 32);
  const cursor = new THREE.Mesh(cursorGeometry, cursorMaterial);
  cursor.rotation.x = -Math.PI / 2;
  cursor.visible = false;
  group.add(raw.line, smooth.line, cursor);
  resources.push(cursorMaterial, cursorGeometry);

  return {
    group,
    addRaw(point) { raw.add(point); },
    addPose(pose) {
      smooth.add(pose);
      cursor.position.set(pose.x, pose.y + 0.055, pose.z);
      cursor.rotation.z = -pose.orientation;
      cursor.scale.setScalar(0.85 + pose.pressure * 0.45);
      cursor.visible = pose.contact;
    },
    setVisible(visible) { group.visible = visible; },
    reset() { raw.reset(); smooth.reset(); cursor.visible = false; }
  };
}

function createPath(color, resources) {
  const points = [];
  const geometry = new THREE.BufferGeometry();
  const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.88, depthTest: false });
  const line = new THREE.Line(geometry, material);
  line.renderOrder = 30;
  resources.push(geometry, material);
  return {
    line,
    add(point) {
      points.push(new THREE.Vector3(point.x, point.y + 0.07, point.z));
      if (points.length > MAX_POINTS) points.shift();
      geometry.setFromPoints(points);
    },
    reset() { points.length = 0; geometry.setFromPoints(points); }
  };
}
