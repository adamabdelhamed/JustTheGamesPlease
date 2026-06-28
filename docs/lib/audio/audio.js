(function (global) {
  'use strict';

  const pageName = decodeURIComponent(location.pathname.split('/').pop() || '').replace(/\.html?$/i, '');
  const audioRoot = `${pageName}/audio/`;
  const assetVersion = '20260618-1';
  const rotations = new Map();
  const preloadCache = new Map();
  const decodedLoopCache = new Map();
  const effectPools = new Map();
  const maxEffectPlayers = 24;
  const maxPlayersPerEffect = 4;
  let audioContext = null;
  let musicIds = [];
  let musicIndex = 0;
  let music = null;
  let musicUnlockArmed = false;
  let musicPausedForInactivity = false;
  let pageInactive = document.hidden || !document.hasFocus();
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

  function allEffectPlayers() {
    return Array.from(effectPools.values()).flat();
  }

  function stopEffectPlayer(player) {
    player.element.pause();
    try { player.element.currentTime = 0; } catch (_) {}
    player.inUse = false;
    player.lastUsedAt = performance.now();
  }

  function createEffectPlayer(id) {
    const element = new Audio(source(id));
    element.preload = 'auto';
    const player = {
      id,
      element,
      inUse: false,
      startedAt: 0,
      lastUsedAt: 0,
    };
    element.addEventListener('ended', () => {
      player.inUse = false;
      player.lastUsedAt = performance.now();
      try { element.currentTime = 0; } catch (_) {}
    });
    element.addEventListener('pause', () => {
      if (element.ended) {
        player.inUse = false;
        player.lastUsedAt = performance.now();
      }
    });
    return player;
  }

  function retargetEffectPlayer(player, id) {
    if (player.id === id) return player;
    stopEffectPlayer(player);
    const previousPool = effectPools.get(player.id);
    if (previousPool) {
      const index = previousPool.indexOf(player);
      if (index >= 0) previousPool.splice(index, 1);
    }
    player.id = id;
    player.element.src = source(id);
    player.element.preload = 'auto';
    const pool = effectPools.get(id) || [];
    pool.push(player);
    effectPools.set(id, pool);
    return player;
  }

  function acquireEffectPlayer(id) {
    const pool = effectPools.get(id) || [];
    effectPools.set(id, pool);

    const idle = pool.find(player => !player.inUse || player.element.paused || player.element.ended);
    if (idle) return idle;

    const players = allEffectPlayers();
    if (pool.length < maxPlayersPerEffect && players.length < maxEffectPlayers) {
      const player = createEffectPlayer(id);
      pool.push(player);
      return player;
    }

    const idleAny = players
      .filter(player => !player.inUse || player.element.paused || player.element.ended)
      .sort((a, b) => a.lastUsedAt - b.lastUsedAt)[0];
    if (idleAny) return retargetEffectPlayer(idleAny, id);

    const oldestActive = players
      .slice()
      .sort((a, b) => a.startedAt - b.startedAt)[0];
    return oldestActive ? retargetEffectPlayer(oldestActive, id) : createEffectPlayer(id);
  }

  function disarmMusicUnlock() {
    if (!musicUnlockArmed) return;
    musicUnlockArmed = false;
    document.removeEventListener('pointerdown', unlockMusic, true);
    document.removeEventListener('keydown', unlockMusic, true);
  }

  function unlockMusic() {
    disarmMusicUnlock();
    if (!pageInactive && musicEnabled && music && music.paused) safePlay(music);
  }

  function armMusicUnlock() {
    if (musicUnlockArmed) return;
    musicUnlockArmed = true;
    document.addEventListener('pointerdown', unlockMusic, true);
    document.addEventListener('keydown', unlockMusic, true);
  }

  function play(id) {
    if (!id) return;
    const player = acquireEffectPlayer(id);
    player.inUse = true;
    player.startedAt = performance.now();
    try { player.element.currentTime = 0; } catch (_) {}
    safePlay(player.element);
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

  function loopGapless(id) {
    let stopped = false;
    let bufferSource = null;
    let fallbackEffect = null;
    const AudioContextType = global.AudioContext || global.webkitAudioContext;
    if (!AudioContextType) return loop(id);
    if (!audioContext) audioContext = new AudioContextType();

    function startFallback() {
      if (stopped || fallbackEffect) return;
      fallbackEffect = new Audio(source(id));
      fallbackEffect.loop = true;
      fallbackEffect.preload = 'auto';
      safePlay(fallbackEffect);
    }

    async function start() {
      try {
        if (audioContext.state === 'suspended') await audioContext.resume();
        if (audioContext.state !== 'running') {
          startFallback();
          return;
        }
        let buffer = decodedLoopCache.get(id);
        if (!buffer) {
          const response = await fetch(source(id));
          if (!response.ok) {
            startFallback();
            return;
          }
          buffer = await audioContext.decodeAudioData(await response.arrayBuffer());
          decodedLoopCache.set(id, buffer);
        }
        if (stopped) return;
        bufferSource = audioContext.createBufferSource();
        bufferSource.buffer = buffer;
        bufferSource.loop = true;
        bufferSource.connect(audioContext.destination);
        bufferSource.start();
      } catch (_) { startFallback(); }
    }

    start();
    return {
      stop() {
        if (stopped) return;
        stopped = true;
        if (bufferSource) {
          try { bufferSource.stop(); } catch (_) {}
          bufferSource.disconnect();
          bufferSource = null;
        }
        if (fallbackEffect) {
          fallbackEffect.pause();
          fallbackEffect.currentTime = 0;
          fallbackEffect = null;
        }
      }
    };
  }

  function preload(ids) {
    (ids || []).forEach(id => {
      if (!id || preloadCache.has(id)) return;
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'audio';
      link.href = source(id);
      preloadCache.set(id, link);
      document.head.append(link);
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
    if (pageInactive) musicPausedForInactivity = true;
    else {
      musicPausedForInactivity = false;
      safePlay(music);
      if (music.paused) armMusicUnlock();
    }
  }

  function pauseMusicForInactivity() {
    pageInactive = true;
    disarmMusicUnlock();
    if (!music || music.paused) return;
    musicPausedForInactivity = true;
    music.pause();
  }

  function resumeMusicAfterInactivity() {
    pageInactive = document.hidden || !document.hasFocus();
    if (pageInactive || !musicPausedForInactivity) return;
    musicPausedForInactivity = false;
    if (!musicEnabled || !music) return;
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
        musicPausedForInactivity = false;
        disarmMusicUnlock();
        if (music) music.pause();
      }
      updateToggle(button);
    });
    if (!global.gameTopBar || !global.gameTopBar.addUtility(button)) document.body.append(button);
  }

  const api = { playMusic, playSharedMusic, play, loop, loopGapless, preload, playRotated, addMusicToggle };
  global.gameAudio = Object.freeze(api);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) pauseMusicForInactivity();
    else resumeMusicAfterInactivity();
  });
  global.addEventListener('blur', pauseMusicForInactivity);
  global.addEventListener('focus', resumeMusicAfterInactivity);
  global.addEventListener('pagehide', pauseMusicForInactivity);
  global.addEventListener('pageshow', resumeMusicAfterInactivity);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addMusicToggle);
  else addMusicToggle();
})(window);
