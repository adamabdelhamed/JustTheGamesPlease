import { SIMULATION } from '../config/gameConfig.js';
import { FixedStepScheduler } from './fixedStepScheduler.js';
import { ProofField } from './proofField.js';
import { MaterialFieldSet } from './materialFieldSet.js';
import { MATERIAL_FIELDS } from './materialSchema.js';
import { SoapSource } from './soapSource.js';
import { WaterSource } from './waterSource.js';
import { WaterSolver } from './waterSolver.js';
import { ChemistryPass } from './chemistryPass.js';

export function createGpuSimulation(device, diagnostics, materialDebugSink, carpetVisualSink, soapVisualSink, waterVisualSink, mixtureVisualSink) {
  const proofField = new ProofField(device, SIMULATION.proofFieldLength, SIMULATION.defaultSeed);
  const materials = new MaterialFieldSet(device, SIMULATION.defaultSeed);
  const soapSource = new SoapSource(device, materials);
  const waterSolver = new WaterSolver(device, materials);
  const waterSource = new WaterSource(device, materials, waterSolver.waterBuffers, waterSolver.velocityBuffers);
  const chemistry = new ChemistryPass(device, materials, waterSolver);
  let selectedTool = 'soap';
  let soapDirty = false;
  let soapVisualPending = false;
  let soapGeneration = 0;
  let soapCommittedGeneration = 0;
  let waterDirty = false;
  let waterVisualPending = false;
  let waterGeneration = 0;
  let waterCommittedGeneration = 0;
  let waterActiveUntilTick = 0;
  let lastSoapRefreshTick = 0;
  let lastWaterRefreshTick = 0;
  let chemistryVisualPending = false;
  let lastChemistryRefreshTick = 0;
  let carpetState = null;
  let waterInjectedThisTick = false;
  let soapInjectedThisTick = false;
  const passes = [
    { name: 'soap-source', encode: encoder => { soapInjectedThisTick = soapSource.encode(encoder); if (soapInjectedThisTick) { soapCommittedGeneration += 1; soapDirty = true; } } },
    { name: 'water-source', encode: encoder => { waterInjectedThisTick = waterSource.encode(encoder, waterSolver.activeIndex); if (waterInjectedThisTick) { waterCommittedGeneration += 1; waterDirty = true; } } },
    { name: 'soil-chemistry', encode: (encoder, tick, dt) => chemistry.encode(encoder, dt, waterSolver.activeIndex) },
    { name: 'water-flow', encode: (encoder, tick, dt) => waterSolver.encode(encoder, dt) },
    { name: 'proof-field', encode: (encoder, tick) => proofField.encode(encoder, tick) }
  ];
  let checksum = 'pending';
  let checksumRequest = 0;
  let appliedChecksumRequest = 0;
  let lastChecksumTick = -1;
  let selectedField = '';
  let inspectionRequest = 0;

  const scheduler = new FixedStepScheduler({
    fixedStepSeconds: SIMULATION.fixedStepSeconds,
    maxSubsteps: SIMULATION.maxSubsteps,
    step(tick) {
      waterInjectedThisTick = false;
      soapInjectedThisTick = false;
      const sourceEncoder = device.createCommandEncoder({ label: `Simulation sources ${tick}` });
      passes[0].encode(sourceEncoder, tick, SIMULATION.fixedStepSeconds);
      passes[1].encode(sourceEncoder, tick, SIMULATION.fixedStepSeconds);
      device.queue.submit([sourceEncoder.finish()]);
      const chemistryEncoder = device.createCommandEncoder({ label: `Simulation chemistry ${tick}` });
      passes[2].encode(chemistryEncoder, tick, SIMULATION.fixedStepSeconds);
      device.queue.submit([chemistryEncoder.finish()]);
      const simulationEncoder = device.createCommandEncoder({ label: `Simulation updates ${tick}` });
      for (const pass of passes.slice(3)) pass.encode(simulationEncoder, tick, SIMULATION.fixedStepSeconds);
      device.queue.submit([simulationEncoder.finish()]);
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

  async function reset(seed = SIMULATION.defaultSeed) {
    await device.queue.onSubmittedWorkDone();
    scheduler.reset();
    proofField.reset(seed);
    materials.reset(seed);
    waterSolver.reset();
    soapSource.reset();
    waterSource.reset();
    soapDirty = false;
    soapGeneration = 0;
    soapCommittedGeneration = 0;
    waterDirty = false;
    waterGeneration = 0;
    waterCommittedGeneration = 0;
    waterActiveUntilTick = 0;
    lastSoapRefreshTick = 0;
    lastWaterRefreshTick = 0;
    lastChemistryRefreshTick = 0;
    lastChecksumTick = -1;
    checksum = await updateChecksum();
    diagnostics.setMaterialSchema(MATERIAL_FIELDS, seed);
    await refreshCarpetVisuals(seed);
    await refreshSoapVisual();
    await refreshWaterVisual();
    await refreshChemistryVisual();
    if (selectedField) await inspectField(selectedField);
    publish();
  }

  async function refreshSoapVisual() {
    if (soapVisualPending) return;
    soapVisualPending = true;
    const requestedGeneration = soapGeneration;
    const requestedCommittedGeneration = soapCommittedGeneration;
    try {
      const inspection = await materials.inspect('soap');
      const massIsValid = Math.abs(inspection.ledger.residual) <= Math.max(1e-5, inspection.ledger.injected * 1e-4);
      const isCurrent = massIsValid && requestedGeneration === soapGeneration && requestedCommittedGeneration === soapCommittedGeneration && soapSource.pending.size === 0;
      if (isCurrent) soapVisualSink({ type: 'authoritative', inspection });
      diagnostics.setToolUsage({ tool: 'soap', submittedMass: soapSource.totalSubmittedMass, ledger: inspection.ledger });
      if (selectedField === 'soap') {
        materialDebugSink(inspection);
        diagnostics.setMaterialInspection(inspection);
      }
      if (isCurrent) soapDirty = false;
    } finally {
      soapVisualPending = false;
    }
  }

  async function refreshCarpetVisuals(seed) {
    const [embedded, loose, saturation] = await Promise.all([
      materials.inspect('embeddedSoil'),
      materials.inspect('looseSoil'),
      materials.inspect('carpetSaturation')
    ]);
    carpetState = { seed, embeddedSoil: embedded.values, looseSoil: loose.values, carpetSaturation: saturation.values };
    carpetVisualSink(carpetState);
  }

  async function refreshChemistryVisual() {
    if (chemistryVisualPending) return;
    chemistryVisualPending = true;
    try {
      const names=['freeWater','carpetSaturation','embeddedSoil','looseSoil','dissolvedSoil','sediment','soap','foam'];
      const inspections=await Promise.all(names.map(name=>materials.inspect(name)));
      const fields=Object.fromEntries(inspections.map(inspection=>[inspection.name,inspection.values]));
      mixtureVisualSink(fields);
      if(carpetState){carpetState={...carpetState,embeddedSoil:fields.embeddedSoil,looseSoil:fields.looseSoil,carpetSaturation:fields.carpetSaturation};carpetVisualSink(carpetState);}
      const soilNames=['embeddedSoil','looseSoil','dissolvedSoil','sediment'];
      const soilMass=inspections.filter(item=>soilNames.includes(item.name)).reduce((sum,item)=>sum+item.ledger.current,0);
      diagnostics.setChemistry({soilMass,soapMass:inspections.find(item=>item.name==='soap').ledger.current,foamMass:inspections.find(item=>item.name==='foam').ledger.current});
    } finally { chemistryVisualPending=false; }
  }

  async function refreshWaterVisual() {
    if (waterVisualPending) return;
    waterVisualPending = true;
    const requestedGeneration = waterGeneration;
    const requestedCommittedGeneration = waterCommittedGeneration;
    try {
      const [free, saturation] = await Promise.all([materials.inspect('freeWater'), materials.inspect('carpetSaturation')]);
      const initial = free.ledger.initial + saturation.ledger.initial;
      const current = free.ledger.current + saturation.ledger.current;
      const residual = initial + free.ledger.injected - current;
      const massIsValid = Math.abs(residual) <= Math.max(1e-5, free.ledger.injected * 1e-4);
      const isCurrent = massIsValid && requestedGeneration === waterGeneration && requestedCommittedGeneration === waterCommittedGeneration && waterSource.pending.size === 0;
      if (isCurrent) {
        waterVisualSink({ type: 'authoritative', inspection: free });
        diagnostics.setWaterUsage({ submittedMass: waterSource.totalSubmittedMass, currentMass: current, residual });
        if (selectedField === 'freeWater') { materialDebugSink(free); diagnostics.setMaterialInspection(free); }
        if (selectedField === 'carpetSaturation') { materialDebugSink(saturation); diagnostics.setMaterialInspection(saturation); }
      }
      if (carpetState && isCurrent) {
        carpetState = { ...carpetState, carpetSaturation: saturation.values };
        carpetVisualSink(carpetState);
      }
      if (isCurrent) waterDirty = false;
    } finally { waterVisualPending = false; }
  }

  async function inspectField(name) {
    selectedField = name;
    const request = ++inspectionRequest;
    if (!name) {
      materialDebugSink(null);
      diagnostics.clearMaterialInspection();
      return null;
    }
    const inspection = await materials.inspect(name);
    if (request !== inspectionRequest) return null;
    materialDebugSink(inspection);
    diagnostics.setMaterialInspection(inspection);
    return inspection;
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
      if (soapDirty && scheduler.tick - lastSoapRefreshTick >= 12) {
        lastSoapRefreshTick = scheduler.tick;
        refreshSoapVisual();
      }
      if ((waterDirty || scheduler.tick < waterActiveUntilTick) && scheduler.tick - lastWaterRefreshTick >= 8) {
        lastWaterRefreshTick = scheduler.tick;
        refreshWaterVisual();
      }
      if ((soapDirty || waterDirty || scheduler.tick < waterActiveUntilTick) && scheduler.tick - lastChemistryRefreshTick >= 12) {
        lastChemistryRefreshTick=scheduler.tick;
        refreshChemistryVisual();
      }
      publish();
    },
    async reset(seed) { await reset(seed); },
    inspectField,
    applyToolPose(pose) {
      const source = selectedTool === 'water' ? waterSource : soapSource;
      const footprint = source.enqueue(pose);
      if (footprint.entries.length > 0) {
        if (selectedTool === 'water') {
          waterGeneration += 1;
          waterActiveUntilTick = scheduler.tick + 300;
          waterVisualSink({ type: 'pending-source', entries: footprint.entries });
        } else {
          soapGeneration += 1;
          soapVisualSink({ type: 'pending-source', entries: footprint.entries });
        }
      }
    },
    selectTool(name) { selectedTool = name === 'water' ? 'water' : 'soap'; },
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
    async initialize() { await chemistry.assertValid(); await reset(); },
    dispose() { proofField.dispose(); soapSource.dispose(); waterSource.dispose(); chemistry.dispose(); waterSolver.dispose(); materials.dispose(); }
  };
}
