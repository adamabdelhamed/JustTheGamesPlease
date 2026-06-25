export interface ShapeTunings {
  zoom: number;
  depth: number;
  lineThickness: number;
  energyIntensity: number;
  energyCoverage: number;
  energySpeed: number;
  energyBleed: number;
}

export interface ShapeTuningStorage {
  version: 1;
  tunings: ShapeTunings;
  notes: Record<string, string>;
  labels: Record<string, { text: string; position: string; offset: number; fontFamily: string; fontSize: number }>;
}

const storageKey = "neonFactory.shapeTunings.v1";
export const defaultShapeTunings: ShapeTunings = {
  zoom: .21,
  depth: .06,
  lineThickness: .54,
  energyIntensity: 1.1,
  energyCoverage: .32,
  energySpeed: .79,
  energyBleed: .35,
};

export function loadShapeTuningStorage(): ShapeTuningStorage {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey) ?? "null") as Partial<ShapeTuningStorage> | null;
    return {
      version: 1,
      tunings: { ...defaultShapeTunings, ...parsed?.tunings },
      notes: parsed?.notes ?? {},
      labels: parsed?.labels ?? {},
    };
  } catch {
    return { version: 1, tunings: { ...defaultShapeTunings }, notes: {}, labels: {} };
  }
}

export function saveShapeTuningStorage(value: ShapeTuningStorage): void {
  localStorage.setItem(storageKey, JSON.stringify(value));
}

export function exportShapeTunings(storage: ShapeTuningStorage): void {
  const notedShapes = Object.entries(storage.notes).filter(([, note]) => note.trim());
  const notesJson = Object.fromEntries(notedShapes);
  const markdown = `# NeonFactory Shape Tunings

Generated: ${new Date().toISOString()}

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
