const RESAMPLE_HZ = 120;
const RESAMPLE_INTERVAL_MS = 1000 / RESAMPLE_HZ;
const SMOOTHING_TIME_MS = 18;

export class StrokePipeline {
  constructor(onPose) {
    this.onPose = onPose;
    this.samples = [];
    this.nextTime = null;
    this.previousPose = null;
    this.rawEventTimes = [];
    this.outputCount = 0;
    this.lastLatencyMs = 0;
    this.lastTerminalTime = null;
  }

  addSample(sample) {
    const previous = this.samples[this.samples.length - 1];
    const time = previous ? Math.max(previous.time + 0.001, sample.time) : sample.time;
    const normalized = { ...sample, time };
    this.samples.push(normalized);
    this.rawEventTimes.push(time);
    while (this.rawEventTimes.length > 1 && time - this.rawEventTimes[0] > 1000) this.rawEventTimes.shift();
    if (this.nextTime === null) this.nextTime = time;
    return normalized;
  }

  advanceTo(now) {
    if (this.samples.length === 0 || this.nextTime === null) return;
    const latest = this.samples[this.samples.length - 1];
    while (this.nextTime <= latest.time + 0.001) {
      const bracket = findBracket(this.samples, this.nextTime);
      if (!bracket) break;
      const pose = interpolate(bracket[0], bracket[1], this.nextTime);
      const smoothed = this.smooth(pose);
      this.lastLatencyMs = Math.max(0, now - pose.time);
      this.outputCount += 1;
      this.onPose(smoothed);
      this.nextTime += RESAMPLE_INTERVAL_MS;
    }
    if (!latest.contact && this.previousPose?.contact && this.lastTerminalTime !== latest.time) {
      const terminal = this.smooth(latest);
      this.lastTerminalTime = latest.time;
      this.lastLatencyMs = Math.max(0, now - latest.time);
      this.outputCount += 1;
      this.onPose(terminal);
    }
    const discardBefore = Math.max(0, this.nextTime - RESAMPLE_INTERVAL_MS * 2);
    while (this.samples.length > 2 && this.samples[1].time < discardBefore) this.samples.shift();
  }

  smooth(pose) {
    if (!this.previousPose || pose.contact !== this.previousPose.contact) {
      const initial = { ...pose, velocityX: 0, velocityZ: 0, speed: 0, orientation: 0 };
      this.previousPose = initial;
      return initial;
    }
    const alpha = 1 - Math.exp(-RESAMPLE_INTERVAL_MS / SMOOTHING_TIME_MS);
    const x = lerp(this.previousPose.x, pose.x, alpha);
    const y = lerp(this.previousPose.y, pose.y, alpha);
    const z = lerp(this.previousPose.z, pose.z, alpha);
    const dt = RESAMPLE_INTERVAL_MS / 1000;
    const velocityX = (x - this.previousPose.x) / dt;
    const velocityZ = (z - this.previousPose.z) / dt;
    const speed = Math.hypot(velocityX, velocityZ);
    const result = { ...pose, x, y, z, velocityX, velocityZ, speed, orientation: speed > 0.001 ? Math.atan2(velocityZ, velocityX) : this.previousPose.orientation };
    this.previousPose = result;
    return result;
  }

  reset() {
    this.samples.length = 0;
    this.nextTime = null;
    this.previousPose = null;
    this.outputCount = 0;
    this.lastLatencyMs = 0;
    this.lastTerminalTime = null;
  }

  metrics() {
    return {
      rawEventRate: this.rawEventTimes.length,
      outputCount: this.outputCount,
      latencyMs: this.lastLatencyMs,
      latencyBudgetMs: Math.ceil(RESAMPLE_INTERVAL_MS + SMOOTHING_TIME_MS)
    };
  }
}

export function runStrokePlaybackTest() {
  return [30, 60, 120].map(renderFps => {
    const poses = replayRecordedStroke(renderFps);
    return { renderFps, samples: poses.length, checksum: poseChecksum(poses) };
  });
}

export function replayRecordedStroke(renderFps) {
  const recorded = [
    sample(0, -4.5, -2.2, true), sample(18, -3.8, -1.5, true), sample(47, -2.1, 0.2, true),
    sample(79, 0.4, 1.8, true), sample(116, 2.8, 0.6, true), sample(154, 4.6, -1.9, true), sample(180, 4.6, -1.9, false)
  ];
  const poses = [];
  const pipeline = new StrokePipeline(pose => poses.push(pose));
  recorded.forEach(item => pipeline.addSample(item));
  const frameMs = 1000 / renderFps;
  for (let time = 0; time <= 220 + frameMs; time += frameMs) pipeline.advanceTo(time);
  return poses;
}

function sample(time, x, z, contact) { return { time, x, y: 0, z, pressure: contact ? 0.65 : 0, contact, source: 'fixture' }; }
function findBracket(samples, time) {
  if (time < samples[0].time || time > samples[samples.length - 1].time) return null;
  for (let index = 1; index < samples.length; index += 1) if (samples[index].time >= time) return [samples[index - 1], samples[index]];
  return [samples[samples.length - 1], samples[samples.length - 1]];
}
function interpolate(a, b, time) {
  const amount = b.time === a.time ? 1 : Math.max(0, Math.min(1, (time - a.time) / (b.time - a.time)));
  return { time, x: lerp(a.x, b.x, amount), y: lerp(a.y, b.y, amount), z: lerp(a.z, b.z, amount), pressure: lerp(a.pressure, b.pressure, amount), contact: amount < 1 ? a.contact : b.contact, source: b.source };
}
function poseChecksum(poses) {
  let hash = 2166136261;
  for (const pose of poses) for (const value of [pose.x, pose.z, pose.pressure, pose.contact ? 1 : 0]) hash = Math.imul(hash ^ Math.round(value * 10000), 16777619) >>> 0;
  return hash.toString(16).padStart(8, '0');
}
function lerp(a, b, amount) { return a + (b - a) * amount; }
