import { SIMULATION } from '../config/gameConfig.js';
import { FixedStepScheduler } from './fixedStepScheduler.js';
import { ProofField } from './proofField.js';

export function createGpuSimulation(device, diagnostics) {
  const proofField = new ProofField(device, SIMULATION.proofFieldLength, SIMULATION.defaultSeed);
  const passes = [{ name: 'proof-field', encode: (encoder, tick) => proofField.encode(encoder, tick) }];
  let checksum = 'pending';
  let checksumRequest = 0;
  let appliedChecksumRequest = 0;
  let lastChecksumTick = -1;

  const scheduler = new FixedStepScheduler({
    fixedStepSeconds: SIMULATION.fixedStepSeconds,
    maxSubsteps: SIMULATION.maxSubsteps,
    step(tick) {
      const encoder = device.createCommandEncoder({ label: `Simulation tick ${tick}` });
      for (const pass of passes) pass.encode(encoder, tick);
      device.queue.submit([encoder.finish()]);
    }
  });

  async function updateChecksum() {
    const request = ++checksumRequest;
    const value = await proofField.checksum();
    if (request >= appliedChecksumRequest) {
      appliedChecksumRequest = request;
      checksum = value;
    }
    return value;
  }

  async function reset() {
    await device.queue.onSubmittedWorkDone();
    scheduler.reset();
    proofField.reset(SIMULATION.defaultSeed);
    lastChecksumTick = -1;
    checksum = await updateChecksum();
    publish();
  }

  function publish() {
    diagnostics.setSimulation({
      paused: scheduler.paused,
      tick: scheduler.tick,
      checksum,
      droppedSeconds: scheduler.droppedSeconds,
      passNames: passes.map(pass => pass.name)
    });
  }

  return {
    scheduler,
    advance(elapsedSeconds) {
      scheduler.advance(elapsedSeconds);
      if (scheduler.tick > 0 && scheduler.tick % 60 === 0 && scheduler.tick !== lastChecksumTick) {
        lastChecksumTick = scheduler.tick;
        updateChecksum().then(publish);
      }
      publish();
    },
    async reset() { await reset(); },
    setPaused(paused) { scheduler.paused = paused; publish(); },
    singleStep() { scheduler.singleStep(); updateChecksum().then(publish); publish(); },
    async runDeterminismTest() {
      const results = [];
      scheduler.paused = true;
      for (const renderFps of [30, 60, 120]) {
        await reset();
        scheduler.paused = false;
        const frames = renderFps * 2;
        for (let frame = 0; frame < frames; frame += 1) scheduler.advance(1 / renderFps);
        scheduler.paused = true;
        await device.queue.onSubmittedWorkDone();
        results.push({ renderFps, tick: scheduler.tick, checksum: await updateChecksum() });
      }
      scheduler.paused = true;
      publish();
      return results;
    },
    async initialize() { await reset(); },
    dispose() { proofField.dispose(); }
  };
}
