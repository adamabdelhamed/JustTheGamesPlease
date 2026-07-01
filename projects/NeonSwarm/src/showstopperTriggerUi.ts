import { showstopperFamily, type ShowstopperId } from "../CombatDefinition";

export interface ShowstopperTriggerUiElements {
  triggerButton: HTMLButtonElement;
  secondaryTriggerButton?: HTMLButtonElement | null;
  bankSlot?: HTMLElement | null;
  bankGlyph?: HTMLElement | null;
  bankLabel?: HTMLElement | null;
  readout?: HTMLElement | null;
}

export interface BankedShowstopperTrigger {
  id: ShowstopperId;
  count: number;
}

export interface ShowstopperTriggerUiState {
  id: ShowstopperId | null;
  count?: number;
  banked?: readonly BankedShowstopperTrigger[];
  active?: boolean;
  hidden?: boolean;
  disabled?: boolean;
  emptyText?: string;
}

export function syncShowstopperTriggerUi(elements: ShowstopperTriggerUiElements, state: ShowstopperTriggerUiState): void {
  const banked = state.banked?.length ? state.banked : state.id ? [{ id: state.id, count: state.count ?? 1 }] : [];
  const primary = banked[0] ?? null;
  const member = primary ? showstopperFamily.members[primary.id] : null;
  const count = Math.max(0, Math.floor(primary?.count ?? state.count ?? (member ? 1 : 0)));
  const label = member?.label ?? state.emptyText ?? "Showstopper";
  const bankState = state.active ? "active" : member ? "banked" : "empty";
  const disabled = Boolean(state.disabled) || !member;

  syncTriggerButton(elements.triggerButton, primary, Boolean(state.hidden), disabled, state.emptyText);
  syncTriggerButton(elements.secondaryTriggerButton ?? null, banked[1] ?? null, Boolean(state.hidden), true, state.emptyText);

  if (elements.bankSlot) {
    elements.bankSlot.dataset.state = bankState;
    elements.bankSlot.setAttribute("role", "button");
    elements.bankSlot.setAttribute("aria-disabled", String(disabled));
    elements.bankSlot.tabIndex = disabled ? -1 : 0;
  }
  if (elements.bankGlyph) elements.bankGlyph.textContent = member ? (count > 1 ? String(count) : initialsForLabel(member.label)) : "-";
  if (elements.bankLabel) elements.bankLabel.textContent = member ? labelWithCount(member.label, count) : "EMPTY";
  if (elements.readout) {
    elements.readout.textContent = member ? `${labelWithCount(label, count)} banked` : "Bank empty";
  }
}

function syncTriggerButton(button: HTMLButtonElement | null, entry: BankedShowstopperTrigger | null, hidden: boolean, disabled: boolean, emptyText?: string): void {
  if (!button) return;
  const member = entry ? showstopperFamily.members[entry.id] : null;
  const count = Math.max(0, Math.floor(entry?.count ?? 0));
  button.hidden = hidden || !member;
  button.disabled = disabled || !member;
  button.textContent = member ? labelWithCount(member.label, count) : emptyText ?? "Showstopper";
  button.dataset.showstopperId = entry?.id ?? "";
  button.dataset.count = String(count);
}

export function bindShowstopperTriggerUi(elements: ShowstopperTriggerUiElements, trigger: () => void, options: { emptyClick?: () => void } = {}): void {
  elements.triggerButton.addEventListener("click", trigger);
  elements.bankSlot?.addEventListener("click", () => {
    if (elements.bankSlot?.getAttribute("aria-disabled") === "true") {
      options.emptyClick?.();
      return;
    }
    trigger();
  });
  elements.bankSlot?.addEventListener("keydown", event => {
    if (event.key !== " " && event.key !== "Enter") return;
    event.preventDefault();
    if (elements.bankSlot?.getAttribute("aria-disabled") === "true") {
      options.emptyClick?.();
      return;
    }
    trigger();
  });
}

function initialsForLabel(label: string): string {
  return label
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase() ?? "")
    .join("");
}

function labelWithCount(label: string, count: number): string {
  return count > 1 ? `${label} x${count}` : label;
}
