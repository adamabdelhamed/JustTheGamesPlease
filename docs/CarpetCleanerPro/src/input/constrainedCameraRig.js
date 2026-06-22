export const CAMERA_LIMITS = Object.freeze({
  minimumAzimuth: 0.27,
  maximumAzimuth: 1.02,
  minimumDistance: 17,
  maximumDistance: 27
});

export class ConstrainedCameraRig {
  constructor() {
    this.azimuth = 0.57;
    this.distance = 20.2;
    this.aspect = 1;
  }

  resize(aspect) { this.aspect = aspect; }
  applyStick(orbit, zoom, dt) {
    this.azimuth = clamp(this.azimuth + orbit * dt * 0.62, CAMERA_LIMITS.minimumAzimuth, CAMERA_LIMITS.maximumAzimuth);
    this.distance = clamp(this.distance + zoom * dt * 7.2, CAMERA_LIMITS.minimumDistance, CAMERA_LIMITS.maximumDistance);
  }
  applyPointer(deltaX, deltaY) {
    this.azimuth = clamp(this.azimuth + deltaX * 0.0018, CAMERA_LIMITS.minimumAzimuth, CAMERA_LIMITS.maximumAzimuth);
    this.distance = clamp(this.distance + deltaY * 0.018, CAMERA_LIMITS.minimumDistance, CAMERA_LIMITS.maximumDistance);
  }
  pose(target) {
    const narrowAdjustment = Math.max(0, 1.55 - this.aspect);
    const effectiveDistance = this.distance + narrowAdjustment * 5;
    return {
      x: target.x + Math.sin(this.azimuth) * effectiveDistance,
      y: 9.2 + effectiveDistance * 0.18,
      z: target.z + Math.cos(this.azimuth) * effectiveDistance
    };
  }
  snapshot() { return { azimuthDegrees: this.azimuth * 180 / Math.PI, distance: this.distance }; }
}

function clamp(value, minimum, maximum) { return Math.max(minimum, Math.min(maximum, value)); }
