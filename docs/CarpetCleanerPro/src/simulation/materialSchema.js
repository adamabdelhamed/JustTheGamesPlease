export const MATERIAL_FIELDS = Object.freeze({
  freeWater: field('kg/m²', 0, 100, 'Hydrology passes; tools may inject water.', 1),
  carpetSaturation: field('kg/m²', 0, 25, 'Carpet absorption and release passes.', 1),
  embeddedSoil: field('kg/m²', 0, 12, 'Carpet binding and agitation passes.', 1),
  looseSoil: field('kg/m²', 0, 12, 'Soil transfer and transport passes.', 1),
  dissolvedSoil: field('kg/m²', 0, 12, 'Dissolution and water transport passes.', 1),
  sediment: field('kg/m²', 0, 25, 'Suspension, settling, and transport passes.', 1),
  soap: field('kg/m²', 0, 8, 'Tool injection and surfactant transport passes.', 1),
  foam: field('kg/m² equivalent', 0, 8, 'Foam production, transport, and decay passes.', 1),
  velocity: field('m/s', -8, 8, 'Fluid momentum passes.', 2, false)
});

export const SURFACE_MASK = Object.freeze({ outside: 0, floor: 1, carpet: 2, drain: 3 });
export const CONSERVATION_TOLERANCE_KG = 1e-5;

function field(units, minimum, maximum, ownership, components, conserved = true) {
  return Object.freeze({ units, minimum, maximum, ownership, components, conserved });
}
