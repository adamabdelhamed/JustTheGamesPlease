import { Arsenal, ALL_EQUIPMENT, equipmentIds, PRIMARY, SECONDARY } from './arsenal.js';
import { Renderer } from './renderer.js';

const canvas = document.querySelector('#canvas');
const game = document.querySelector('#game');
const renderer = new Renderer(canvas);
const arsenal = new Arsenal();
const ui = Object.fromEntries(['overlay','title','message','start','score','combo','status','weaponCard','weaponName','weaponDetail','weaponIcon','weaponLevel','bossBar','bossHp'].map(id => [id, document.getElementById(id)]));

const state = {
  running: false, time: 0, score: 0, streak: 0, units: 1, playerX: 0, targetX: 0, shake: 0, flash: 0,
  spawnTimer: 0, pickupTimer: 2.2, bossTimer: 25, enemies: [], shots: [], pickups: [], particles: [], rings: [], arsenal,
  unitOffsets() { return Array.from({ length: this.units }, (_, i) => (i - (this.units - 1) / 2) * 22); }
};
let lastFrame = 0;
const keys = {};
const laneX = lane => renderer.width * (lane + .5) / 2;
const random = (a, b) => a + Math.random() * (b - a);

function burst(x, y, color, count = 12, power = 150) {
  for (let i = 0; i < count; i++) { const angle = random(0, 7), speed = random(power * .25, power); state.particles.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: random(.25, .65), max: .65, color, size: random(1, 4) }); }
}
function ring(x, y, color, life = .35) { state.rings.push({ x, y, color, life, max: life, r: 8 }); }
function updateArsenalCard(item = PRIMARY[arsenal.primary.id]) {
  const slot = arsenal[item.slot]; ui.weaponCard.style.setProperty('--weapon', item.color); ui.weaponName.textContent = item.name; ui.weaponDetail.textContent = item.detail; ui.weaponIcon.textContent = item.icon; ui.weaponLevel.textContent = ['I','II','III','IV','V'][slot.level - 1];
  ui.status.textContent = `${item.slot.toUpperCase()} · ${item.name}`; ui.weaponCard.classList.add('pop'); setTimeout(() => ui.weaponCard.classList.remove('pop'), 260);
}
function reset() {
  arsenal.reset(); Object.assign(state, { running: true, time: 0, score: 0, streak: 0, units: 1, shake: 0, flash: 0, spawnTimer: 0, pickupTimer: 2.2, bossTimer: 25, enemies: [], shots: [], pickups: [], particles: [], rings: [] });
  state.playerX = state.targetX = laneX(0); ui.overlay.classList.remove('show'); ui.bossBar.classList.remove('show'); updateArsenalCard(); lastFrame = performance.now(); requestAnimationFrame(loop);
}
function spawnEnemy() {
  const boss = state.bossTimer <= 0 && !state.enemies.some(e => e.boss); if (boss) state.bossTimer = 34;
  const r = boss ? 34 : random(12, 22), hp = boss ? 420 + state.time * 5 : 18 + state.time * .8;
  state.enemies.push({ x: laneX(Math.random() < .5 ? 0 : 1), y: -50, r, hp, maxHp: hp, speed: boss ? 42 : random(72, 125) + state.time * .65, boss, hitTimer: 0, healthBarTimer: 0 });
  if (boss) { ui.bossBar.classList.add('show'); gameAudio.play('Boss'); }
}
function spawnPickup() {
  const roll = Math.random(); let id = roll < .22 ? 'multi' : equipmentIds[Math.floor(Math.random() * equipmentIds.length)];
  state.pickups.push({ x: laneX(Math.random() < .5 ? 0 : 1), y: -30, r: 19, id, spin: 0 });
}
function addShot(x, y, vx, vy, r, damage, type, color, pierce = 0) { state.shots.push({ x, y, vx, vy, r, damage, type, color, pierce, life: 3 }); }
function firePrimary() {
  const slot = arsenal.primary, weapon = PRIMARY[slot.id]; if ((slot.cooldown -= frameDelta) > 0) return; slot.cooldown = weapon.rate / (1 + (slot.level - 1) * .1);
  for (const offset of state.unitOffsets()) { const x = state.playerX + offset;
    if (slot.id === 'scatter') for (let i = -2 - slot.level; i <= 2 + slot.level; i++) { const a = i * .07; addShot(x, renderer.height - 105, Math.sin(a) * weapon.speed, -Math.cos(a) * weapon.speed, 3, weapon.damage, 'scatter', weapon.color); }
    else addShot(x, renderer.height - 110, 0, -weapon.speed, slot.id === 'rail' ? 5 : 3, weapon.damage * (1 + (slot.level - 1) * .22), slot.id, weapon.color, slot.id === 'rail' ? 2 + slot.level : 0);
  }
  gameAudio.playRotated('Primary', 3);
}
function fireSecondary() {
  const slot = arsenal.secondary; if (!slot.id || slot.charges <= 0 || (slot.cooldown -= frameDelta) > 0) return;
  const weapon = SECONDARY[slot.id]; slot.charges--; slot.cooldown = .8; const x = state.playerX;
  addShot(x, renderer.height - 120, 0, -weapon.speed, slot.id === 'nova' ? 10 : 7, weapon.damage * (1 + (slot.level - 1) * .25), slot.id, weapon.color, slot.id === 'storm' ? 4 : 0);
  ring(x, renderer.height - 115, weapon.color); gameAudio.playRotated('Secondary', 2);
}
function explode(shot) { ring(shot.x, shot.y, shot.color); burst(shot.x, shot.y, shot.color, 24, 230); state.shake = 8; for (const enemy of state.enemies) { const d = Math.hypot(enemy.x - shot.x, enemy.y - shot.y); if (d < 110) enemy.hp -= shot.damage * (1 - d / 140); } }
function damageEnemy(enemy, shot) {
  enemy.hp -= shot.damage; enemy.hitTimer = .08; if (enemy.boss) enemy.healthBarTimer = 2.2; burst(shot.x, shot.y, shot.color, 5, 90);
  if (shot.type === 'nova') explode(shot); if (shot.pierce-- <= 0 || shot.type === 'nova') shot.life = 0;
  if (enemy.hp > 0) return false;
  state.score += Math.round((enemy.boss ? 500 : 20) * (1 + state.streak * .05)); state.streak++;
  if (state.streak % 5 === 0) { arsenal.addStreakCharge(); ui.status.textContent = arsenal.secondary.id ? `SECONDARY CHARGED · ${arsenal.secondary.charges}` : `${state.streak} STREAK`; gameAudio.play('Streak'); }
  burst(enemy.x, enemy.y, enemy.boss ? '#ffd45c' : '#ff5577', enemy.boss ? 55 : 16, enemy.boss ? 320 : 170); state.shake = enemy.boss ? 16 : 3; if (enemy.boss) { ui.bossBar.classList.remove('show'); state.flash = 1; } return true;
}
function collectPickups() {
  for (let i = state.pickups.length - 1; i >= 0; i--) { const p = state.pickups[i]; if (Math.hypot(state.playerX - p.x, renderer.height - 88 - p.y) >= 40) continue;
    if (p.id === 'multi') { state.units = Math.min(4, state.units + 1); ui.status.textContent = `SQUAD · ${state.units} UNITS`; burst(p.x, p.y, '#5cffb0', 28, 200); }
    else { const item = arsenal.equip(p.id); updateArsenalCard(item); burst(p.x, p.y, item.color, 24, 190); }
    gameAudio.play('Pickup'); state.pickups.splice(i, 1);
  }
}
function hitSquad() {
  for (let i = state.enemies.length - 1; i >= 0; i--) { const e = state.enemies[i]; if (Math.hypot(e.x - state.playerX, e.y - (renderer.height - 88)) >= e.r + 16 + state.units * 6) continue;
    state.enemies.splice(i, 1); burst(e.x, e.y, '#ff5577', 25, 220); state.shake = 12;
    if (arsenal.absorbHit()) { ui.status.textContent = `SHIELD · ${Math.ceil(arsenal.shield.durability / arsenal.shield.max * 100)}%`; gameAudio.play('Shield'); }
    else { state.units--; ui.status.textContent = `HIT · ${state.units} UNIT${state.units === 1 ? '' : 'S'} LEFT`; gameAudio.play('Hit'); if (state.units <= 0) { end('Squad destroyed.'); return true; } }
  } return false;
}
function handleEscapes() {
  for (let i = state.enemies.length - 1; i >= 0; i--) { const e = state.enemies[i]; if (e.y <= renderer.height + e.r) continue; state.score -= e.boss ? 100 : 20; state.streak = 0; state.enemies.splice(i, 1); burst(e.x, renderer.height - 5, '#ff4f9a', 16, 150); if (state.score < 0) { end('The swarm broke your score line.'); return true; } }
  return false;
}
let frameDelta = 0;
function update(dt) {
  frameDelta = dt; state.time += dt; state.spawnTimer -= dt; state.pickupTimer -= dt; state.bossTimer -= dt; state.shake *= .86; state.flash = Math.max(0, state.flash - dt * 3);
  if (keys.ArrowLeft || keys.a) state.targetX = laneX(0); if (keys.ArrowRight || keys.d) state.targetX = laneX(1); state.playerX += (state.targetX - state.playerX) * Math.min(1, dt * 14);
  if (state.spawnTimer <= 0) { state.spawnTimer = Math.max(.28, .82 - state.time * .008); spawnEnemy(); } if (state.pickupTimer <= 0) { state.pickupTimer = random(7, 10); spawnPickup(); }
  firePrimary(); fireSecondary();
  for (const s of state.shots) { s.x += s.vx * dt; s.y += s.vy * dt; s.life -= dt; }
  for (const e of state.enemies) { e.y += e.speed * dt; e.hitTimer -= dt; e.healthBarTimer -= dt; }
  for (const p of state.pickups) { p.y += 75 * dt; p.spin += dt * 3; }
  for (const p of state.particles) { p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= .96; p.vy *= .96; p.life -= dt; }
  for (const r of state.rings) { r.r += 300 * dt; r.life -= dt; }
  for (let si = state.shots.length - 1; si >= 0; si--) { const s = state.shots[si]; for (let ei = state.enemies.length - 1; ei >= 0; ei--) { const e = state.enemies[ei]; if (Math.hypot(s.x - e.x, s.y - e.y) < s.r + e.r && damageEnemy(e, s)) state.enemies.splice(ei, 1); if (s.life <= 0) break; } }
  collectPickups(); if (hitSquad() || handleEscapes()) return;
  state.shots = state.shots.filter(s => s.life > 0 && s.y > -80); state.pickups = state.pickups.filter(p => p.y < renderer.height + 50); state.particles = state.particles.filter(p => p.life > 0); state.rings = state.rings.filter(r => r.life > 0);
  const boss = state.enemies.find(e => e.boss); if (boss) ui.bossHp.style.width = `${Math.max(0, boss.hp / boss.maxHp * 100)}%`;
  ui.score.textContent = state.score.toLocaleString(); ui.combo.textContent = `STREAK ${state.streak}`;
}
function end(reason) { state.running = false; ui.title.innerHTML = `${reason}<br><b>${state.score.toLocaleString()}</b>`; ui.message.textContent = `You survived ${state.time.toFixed(1)} seconds. Build all three arsenal slots and protect every unit.`; ui.start.textContent = 'RUN IT BACK'; ui.overlay.classList.add('show'); gameAudio.play('GameOver'); }
function loop(now) { if (!state.running) return; const dt = Math.min(.033, (now - lastFrame) / 1000); lastFrame = now; update(dt); renderer.draw(state); if (state.running) requestAnimationFrame(loop); }

canvas.addEventListener('pointerdown', event => { state.targetX = laneX(event.offsetX < renderer.width / 2 ? 0 : 1); });
addEventListener('keydown', event => keys[event.key] = true); addEventListener('keyup', event => keys[event.key] = false);
addEventListener('resize', () => renderer.resize()); ui.start.onclick = reset;
renderer.draw(state);
