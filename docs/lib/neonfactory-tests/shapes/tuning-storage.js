// projects/NeonFactory/test-pages/shapes/tuning-storage.ts
var storageKey = "neonFactory.shapeTunings.v1";
var defaultShapeTunings = {
  zoom: 0.21,
  depth: 0.06,
  lineThickness: 0.54,
  energyIntensity: 1.1,
  energyCoverage: 0.32,
  energySpeed: 0.79,
  energyBleed: 0.35
};
function loadShapeTuningStorage() {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey) ?? "null");
    return {
      version: 1,
      tunings: { ...defaultShapeTunings, ...parsed?.tunings },
      notes: parsed?.notes ?? {},
      labels: parsed?.labels ?? {}
    };
  } catch {
    return { version: 1, tunings: { ...defaultShapeTunings }, notes: {}, labels: {} };
  }
}
function saveShapeTuningStorage(value) {
  localStorage.setItem(storageKey, JSON.stringify(value));
}
function exportShapeTunings(storage) {
  const notedShapes = Object.entries(storage.notes).filter(([, note]) => note.trim());
  const notesJson = Object.fromEntries(notedShapes);
  const markdown = `# NeonFactory Shape Tunings

Generated: ${(/* @__PURE__ */ new Date()).toISOString()}

## Global rendering tunings

\`\`\`json
${JSON.stringify(storage.tunings, null, 2)}
\`\`\`

## Shape notes

\`\`\`json
${JSON.stringify(notesJson, null, 2)}
\`\`\`

## Shape label defaults

\`\`\`json
${JSON.stringify(storage.labels, null, 2)}
\`\`\`
`;
  const url = URL.createObjectURL(new Blob([markdown], { type: "text/markdown" }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "neonfactory-shape-tunings.md";
  anchor.click();
  URL.revokeObjectURL(url);
}
export {
  defaultShapeTunings,
  exportShapeTunings,
  loadShapeTuningStorage,
  saveShapeTuningStorage
};
//# sourceMappingURL=tuning-storage.js.map
