export class FixedStepScheduler {
  constructor({ fixedStepSeconds, maxSubsteps, step }) {
    this.fixedStepSeconds = fixedStepSeconds;
    this.maxSubsteps = maxSubsteps;
    this.step = step;
    this.paused = false;
    this.tick = 0;
    this.droppedSeconds = 0;
    this.accumulator = 0;
  }

  advance(elapsedSeconds) {
    if (this.paused) return 0;
    const maximumElapsed = this.fixedStepSeconds * this.maxSubsteps;
    if (elapsedSeconds > maximumElapsed) this.droppedSeconds += elapsedSeconds - maximumElapsed;
    this.accumulator += Math.min(elapsedSeconds, maximumElapsed);
    let steps = 0;
    while (this.accumulator + Number.EPSILON >= this.fixedStepSeconds && steps < this.maxSubsteps) {
      this.runStep();
      this.accumulator -= this.fixedStepSeconds;
      steps += 1;
    }
    return steps;
  }

  singleStep() {
    if (!this.paused) return false;
    this.runStep();
    return true;
  }

  runStep() {
    this.step(this.tick, this.fixedStepSeconds);
    this.tick += 1;
  }

  reset() {
    this.tick = 0;
    this.droppedSeconds = 0;
    this.accumulator = 0;
  }
}
