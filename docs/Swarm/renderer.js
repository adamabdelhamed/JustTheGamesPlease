import { ALL_EQUIPMENT, SHIELDS } from './arsenal.js';

export class Renderer {
  constructor(canvas) { this.canvas = canvas; this.ctx = canvas.getContext('2d'); this.resize(); }
  resize() {
    this.width = this.canvas.parentElement.clientWidth;
    this.height = this.canvas.parentElement.clientHeight;
    const dpr = Math.min(2, devicePixelRatio || 1);
    this.canvas.width = this.width * dpr; this.canvas.height = this.height * dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  polygon(x, y, radius, points, rotation = 0) {
    const c = this.ctx; c.beginPath();
    for (let i = 0; i < points; i++) { const a = rotation + i * Math.PI * 2 / points; c.lineTo(x + Math.cos(a) * radius, y + Math.sin(a) * radius); }
    c.closePath();
  }
  draw(state) {
    const c = this.ctx, W = this.width, H = this.height;
    c.save(); c.clearRect(0, 0, W, H); c.translate((Math.random() - .5) * state.shake, (Math.random() - .5) * state.shake);
    const bg = c.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, '#050817'); bg.addColorStop(1, '#07152c'); c.fillStyle = bg; c.fillRect(-20, -20, W + 40, H + 40);
    c.fillStyle = '#55e7ff08'; c.fillRect(0, 0, W / 2, H); c.fillStyle = '#ff4f9a08'; c.fillRect(W / 2, 0, W / 2, H);
    c.strokeStyle = '#ffffff0b'; for (let y = (state.time * 45) % 56; y < H; y += 56) { c.beginPath(); c.moveTo(0, y); c.lineTo(W, y); c.stroke(); }
    c.strokeStyle = '#ffffff32'; c.setLineDash([8, 14]); c.beginPath(); c.moveTo(W / 2, 0); c.lineTo(W / 2, H); c.stroke(); c.setLineDash([]);
    for (const ring of state.rings) { c.globalAlpha = ring.life / ring.max; c.strokeStyle = ring.color; c.lineWidth = 3; c.beginPath(); c.arc(ring.x, ring.y, ring.r, 0, 7); c.stroke(); } c.globalAlpha = 1;
    for (const pickup of state.pickups) this.drawPickup(pickup, state.units);
    for (const shot of state.shots) this.drawShot(shot);
    for (const enemy of state.enemies) this.drawEnemy(enemy, state.time);
    for (const particle of state.particles) { c.globalAlpha = Math.max(0, particle.life / particle.max); c.fillStyle = particle.color; c.fillRect(particle.x, particle.y, particle.size, particle.size); } c.globalAlpha = 1;
    this.drawSquad(state);
    if (state.flash) { c.fillStyle = `rgba(255,255,255,${state.flash * .5})`; c.fillRect(0, 0, W, H); }
    c.restore();
  }
  drawPickup(p, units) {
    const c = this.ctx, item = p.id === 'multi' ? { name: 'MULTIPLY', icon: `×${Math.min(4, units + 1)}`, color: '#5cffb0' } : ALL_EQUIPMENT[p.id];
    c.save(); c.translate(p.x, p.y); c.rotate(p.spin); c.shadowBlur = 22; c.shadowColor = item.color; c.fillStyle = '#08101f'; c.strokeStyle = item.color; c.lineWidth = 3; this.polygon(0, 0, 19, 6); c.fill(); c.stroke(); c.rotate(-p.spin);
    c.fillStyle = item.color; c.font = 'bold 12px Segoe UI'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(item.icon, 0, 0);
    c.fillStyle = '#eef7ff'; c.font = 'bold 9px Segoe UI'; c.fillText(item.name.toUpperCase(), 0, -29); c.restore();
  }
  drawShot(s) {
    const c = this.ctx; c.save(); c.shadowBlur = s.type === 'rail' ? 28 : 14; c.shadowColor = s.color; c.fillStyle = s.color;
    if (s.type === 'rail') c.fillRect(s.x - 3, s.y - 35, 6, 70); else { c.beginPath(); c.arc(s.x, s.y, s.r, 0, 7); c.fill(); }
    c.restore();
  }
  drawEnemy(e, time) {
    const c = this.ctx; c.save(); c.shadowBlur = e.boss ? 34 : 18; c.shadowColor = '#ff426e'; c.fillStyle = e.hitTimer > 0 ? 'white' : e.boss ? '#9b164c' : '#ff426e'; c.strokeStyle = '#ffd4e2'; c.lineWidth = e.boss ? 4 : 2;
    this.polygon(e.x, e.y, e.r, e.boss ? 10 : 6, time * (e.boss ? -.4 : .7)); c.fill(); c.stroke();
    if (e.boss && e.healthBarTimer > 0) { const width = 72, y = e.y - e.r - 15; c.shadowBlur = 0; c.fillStyle = '#240916'; c.fillRect(e.x - width / 2, y, width, 6); c.fillStyle = '#ff4f9a'; c.fillRect(e.x - width / 2, y, width * Math.max(0, e.hp / e.maxHp), 6); c.strokeStyle = '#ffffff88'; c.lineWidth = 1; c.strokeRect(e.x - width / 2, y, width, 6); }
    c.restore();
  }
  drawSquad(state) {
    const c = this.ctx, y = this.height - 88, color = ALL_EQUIPMENT[state.arsenal.primary.id].color;
    if (state.arsenal.shield.id && state.arsenal.shield.durability > 0) {
      const shield = state.arsenal.shield, item = SHIELDS[shield.id], ratio = shield.durability / shield.max;
      c.save(); c.globalAlpha = .2 + ratio * .8; c.strokeStyle = item.color; c.shadowBlur = 20 * ratio; c.shadowColor = item.color; c.lineWidth = 2 + ratio * 2; c.beginPath(); c.arc(state.playerX, y, 43 + state.units * 7, 0, 7); c.stroke();
      const nodes = Math.max(1, Math.ceil(5 * ratio)); for (let i = 0; i < nodes; i++) { const a = state.time * 3 + i * Math.PI * 2 / nodes; c.fillStyle = item.color; c.beginPath(); c.arc(state.playerX + Math.cos(a) * (43 + state.units * 7), y + Math.sin(a) * 34, 5, 0, 7); c.fill(); } c.restore();
    }
    for (const offset of state.unitOffsets()) { c.save(); c.translate(state.playerX + offset, y); c.shadowBlur = 25; c.shadowColor = color; c.fillStyle = color; c.beginPath(); c.moveTo(0, -22); c.lineTo(14, 16); c.lineTo(0, 10); c.lineTo(-14, 16); c.closePath(); c.fill(); c.fillStyle = 'white'; c.beginPath(); c.arc(0, -3, 4, 0, 7); c.fill(); c.restore(); }
  }
}
