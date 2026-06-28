export function syncSlotArray<T>(slots: T[], count: number, create: () => T): void {
  const target = Math.max(1, Math.floor(count));
  while (slots.length < target) slots.push(create());
  slots.length = target;
}

export function advanceCooldownSlots(cooldowns: number[], delta: number): void {
  for (let index = 0; index < cooldowns.length; index++) {
    cooldowns[index] = Math.max(0, cooldowns[index] - delta);
  }
}

export function updateActiveSlots<T>(slots: Array<T | null>, update: (item: T) => T | null): void {
  for (let index = 0; index < slots.length; index++) {
    const item = slots[index];
    if (item) slots[index] = update(item);
  }
}

export function removeClaimedTargets<T>(
  remaining: readonly T[],
  selected: readonly T[],
  getId: (item: T) => number,
): T[] {
  const selectedIds = new Set(selected.map(getId));
  return remaining.filter(item => !selectedIds.has(getId(item)));
}

export function selectBestUnclaimed<T>(
  items: readonly T[],
  claimedIds: ReadonlySet<number>,
  getId: (item: T) => number,
  score: (item: T) => number | null,
): T | null {
  let best: { item: T; score: number } | null = null;
  for (const item of items) {
    if (claimedIds.has(getId(item))) continue;
    const value = score(item);
    if (value === null || !Number.isFinite(value)) continue;
    if (!best || value < best.score) best = { item, score: value };
  }
  return best?.item ?? null;
}
