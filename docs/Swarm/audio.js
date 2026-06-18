export class Sound {
  constructor() { this.enabled = true; this.context = null; }
  tone(frequency, duration = .06, type = 'sine', volume = .035) {
    if (!this.enabled) return;
    this.context ??= new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = this.context.createOscillator();
    const gain = this.context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, this.context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(30, frequency * .65), this.context.currentTime + duration);
    gain.gain.setValueAtTime(volume, this.context.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, this.context.currentTime + duration);
    oscillator.connect(gain).connect(this.context.destination);
    oscillator.start(); oscillator.stop(this.context.currentTime + duration);
  }
}
