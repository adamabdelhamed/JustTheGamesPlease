export const PRIMARY = {
  pulse: { slot: 'primary', name: 'Pulse Gun', icon: '◆', color: '#55e7ff', detail: 'Balanced auto cannon', rate: .18, damage: 12, speed: 720 },
  scatter: { slot: 'primary', name: 'Prism Scatter', icon: '✦', color: '#5cffb0', detail: 'Wide close-range burst', rate: .52, damage: 7, speed: 570 },
  rail: { slot: 'primary', name: 'Void Rail', icon: '┃', color: '#aa78ff', detail: 'Piercing kinetic lance', rate: 1.05, damage: 62, speed: 1150 }
};

export const SECONDARY = {
  nova: { slot: 'secondary', name: 'Nova Mortar', icon: '●', color: '#ff6d70', detail: 'Explodes after a 5-kill streak', damage: 54, speed: 350 },
  storm: { slot: 'secondary', name: 'Arc Storm', icon: 'ϟ', color: '#ffd45c', detail: 'Chains after a 5-kill streak', damage: 34, speed: 480 }
};

export const SHIELDS = {
  halo: { slot: 'shield', name: 'Halo Shield', icon: '◉', color: '#ffd45c', detail: 'Orbiting impact barrier', max: 100 },
  prism: { slot: 'shield', name: 'Prism Shield', icon: '⬡', color: '#55e7ff', detail: 'Dense crystalline barrier', max: 140 }
};

export const ALL_EQUIPMENT = { ...PRIMARY, ...SECONDARY, ...SHIELDS };
export const equipmentIds = Object.keys(ALL_EQUIPMENT);

export class Arsenal {
  constructor() { this.reset(); }

  reset() {
    this.primary = { id: 'pulse', level: 1, cooldown: 0 };
    this.secondary = { id: null, level: 0, charges: 0, cooldown: 0 };
    this.shield = { id: null, level: 0, durability: 0, max: 0 };
  }

  equip(id) {
    const item = ALL_EQUIPMENT[id];
    const slot = this[item.slot];
    if (slot.id === id) slot.level = Math.min(5, slot.level + 1);
    else { slot.id = id; slot.level = 1; }
    if (item.slot === 'shield') {
      slot.max = item.max + (slot.level - 1) * 30;
      slot.durability = slot.max;
    }
    return item;
  }

  addStreakCharge() { if (this.secondary.id) this.secondary.charges++; }

  absorbHit() {
    if (!this.shield.id || this.shield.durability <= 0) return false;
    this.shield.durability = Math.max(0, this.shield.durability - 34);
    return true;
  }
}
