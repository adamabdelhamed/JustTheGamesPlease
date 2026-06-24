export interface PortraitViewportPolicy {
  aspectWidth: number;
  aspectHeight: number;
}

export function applyPortraitStage(stage: HTMLElement, policy: PortraitViewportPolicy): void {
  stage.style.setProperty("--stage-aspect", `${policy.aspectWidth} / ${policy.aspectHeight}`);
}

export function stageNormalizedX(stage: HTMLElement, clientX: number): number {
  const bounds = stage.getBoundingClientRect();
  return Math.max(0, Math.min(1, (clientX - bounds.left) / bounds.width));
}
