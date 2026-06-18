(function (global) {
  'use strict';

  const pageName = decodeURIComponent(location.pathname.split('/').pop() || '').replace(/\.html?$/i, '');
  const audioRoot = `${pageName}/audio/`;
  const assetVersion = '20260618-1';
  const rotations = new Map();
  const preloadCache = new Map();
  let musicIds = [];
  let musicIndex = 0;
  let music = null;
  let musicUnlockArmed = false;
  let musicEnabled = localStorage.getItem('gameAudio.musicEnabled') !== 'false';

  function source(id, shared) {
    const file = /\.[a-z0-9]+$/i.test(id) ? id : `${id}.mp3`;
    const root = shared ? 'lib/audio/music/' : audioRoot;
    return `${root}${file.split('/').map(encodeURIComponent).join('/')}?v=${assetVersion}`;
  }

  function safePlay(element) {
    try {
      const attempt = element.play();
      if (attempt && typeof attempt.catch === 'function') attempt.catch(() => {});
    } catch (_) { /* Missing or unsupported audio is intentionally a no-op. */ }
  }

  function disarmMusicUnlock() {
    if (!musicUnlockArmed) return;
    musicUnlockArmed = false;
    document.removeEventListener('pointerdown', unlockMusic, true);
    document.removeEventListener('keydown', unlockMusic, true);
  }

  function unlockMusic() {
    disarmMusicUnlock();
    if (musicEnabled && music && music.paused) safePlay(music);
  }

  function armMusicUnlock() {
    if (musicUnlockArmed) return;
    musicUnlockArmed = true;
    document.addEventListener('pointerdown', unlockMusic, true);
    document.addEventListener('keydown', unlockMusic, true);
  }

  function play(id) {
    if (!id) return;
    const effect = new Audio(source(id));
    effect.preload = 'auto';
    safePlay(effect);
  }

  function loop(id) {
    const effect = new Audio(source(id));
    let stopped = false;
    effect.loop = true;
    effect.preload = 'auto';
    safePlay(effect);
    return {
      stop() {
        if (stopped) return;
        stopped = true;
        effect.pause();
        effect.currentTime = 0;
      }
    };
  }

  function preload(ids) {
    (ids || []).forEach(id => {
      if (!id || preloadCache.has(id)) return;
      const effect = new Audio();
      effect.preload = 'auto';
      effect.src = source(id);
      preloadCache.set(id, effect);
      try { effect.load(); } catch (_) {}
    });
  }

  function playRotated(id, count) {
    const alternatives = Math.max(0, Number(count) || 0);
    const next = rotations.get(id) || 0;
    play(next === 0 ? id : `${id}_Alt${next}`);
    rotations.set(id, (next + 1) % (alternatives + 1));
  }

  let sharedMusic = false;

  function playCurrentMusic() {
    if (!musicEnabled || !musicIds.length) return;
    if (music) music.pause();
    music = new Audio(source(musicIds[musicIndex], sharedMusic));
    music.preload = 'auto';
    music.addEventListener('ended', () => {
      musicIndex = (musicIndex + 1) % musicIds.length;
      playCurrentMusic();
    }, { once: true });
    safePlay(music);
    if (music.paused) armMusicUnlock();
  }

  function playMusic(ids) {
    musicIds = (ids || []).filter(Boolean);
    musicIndex = 0;
    sharedMusic = false;
    playCurrentMusic();
  }

  function playSharedMusic(ids) {
    musicIds = (ids || []).filter(Boolean);
    musicIndex = 0;
    sharedMusic = true;
    playCurrentMusic();
  }

  function updateToggle(button) {
    button.innerHTML = musicEnabled
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/></svg>'
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 14V5l10-2v13"/><circle cx="6" cy="18" r="3"/><path d="m3 3 18 18"/></svg>';
    button.setAttribute('aria-pressed', String(musicEnabled));
    button.title = musicEnabled ? 'Turn music off' : 'Turn music on';
  }

  function addMusicToggle() {
    if (document.querySelector('[data-game-audio-toggle]')) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.gameAudioToggle = '';
    button.setAttribute('aria-label', 'Toggle background music');
    updateToggle(button);
    button.addEventListener('click', () => {
      musicEnabled = !musicEnabled;
      localStorage.setItem('gameAudio.musicEnabled', String(musicEnabled));
      if (musicEnabled) playCurrentMusic();
      else {
        disarmMusicUnlock();
        if (music) music.pause();
      }
      updateToggle(button);
    });
    if (!global.gameTopBar || !global.gameTopBar.addUtility(button)) document.body.append(button);
  }

  const api = { playMusic, playSharedMusic, play, loop, preload, playRotated, addMusicToggle };
  global.gameAudio = Object.freeze(api);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addMusicToggle);
  else addMusicToggle();
})(window);
