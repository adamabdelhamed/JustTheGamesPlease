(function (global, document) {
  'use strict';

  const urlOptions = global.JustTheGamesPlease.urlOptions;
  const devMode = urlOptions.isEnabled('dev');
  const rendererMode = urlOptions.isEnabled('renderer');
  const games = new Map();

  if (rendererMode) {
    document.documentElement.classList.add('recording-renderer');
    const style = document.createElement('style');
    style.textContent = `
      .recording-renderer [data-game-topbar],
      .recording-renderer header[data-game-topbar] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }

  function slug(value) {
    return String(value || 'game').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'game';
  }

  function storageKey(gameName) {
    return `jtgp-recordings:${slug(gameName)}:v1`;
  }

  function commonEnvelope(game, solutions) {
    return {
      schemaVersion: 2,
      source: 'JustTheGamesPlease',
      exportedAt: new Date().toISOString(),
      game: {
        name: game.name,
        slug: game.slug,
        version: game.version || 1
      },
      solutions
    };
  }

  function loadSolutions(gameName) {
    try {
      const stored = JSON.parse(global.localStorage.getItem(storageKey(gameName)) || '[]');
      return Array.isArray(stored) ? stored : [];
    } catch (_) {
      return [];
    }
  }

  function saveSolution(gameName, solution) {
    if (!devMode || rendererMode || !solution) return;
    const solutions = loadSolutions(gameName);
    solutions.push(solution);
    global.localStorage.setItem(storageKey(gameName), JSON.stringify(solutions.slice(-100)));
  }

  function clearSolutions(gameName) {
    global.localStorage.removeItem(storageKey(gameName));
  }

  function download(game) {
    const url = URL.createObjectURL(new Blob([JSON.stringify(commonEnvelope(game, loadSolutions(game.name)), null, 2)], { type: 'application/json' }));
    const link = Object.assign(document.createElement('a'), {
      href: url,
      download: `${game.slug}-solutions-${new Date().toISOString().replace(/[:.]/g, '-')}.json`
    });
    link.click();
    URL.revokeObjectURL(url);
  }

  function addDevControls(game) {
    if (!devMode || rendererMode || document.querySelector(`[data-recording-controls="${game.slug}"]`)) return;
    const controls = document.createElement('div');
    controls.className = 'game-topbar__controls';
    controls.dataset.recordingControls = game.slug;
    for (const label of ['Download', 'Clear']) {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = label;
      button.title = `${label} recorded successful games`;
      button.addEventListener('click', () => {
        if (label === 'Download') download(game);
        if (label === 'Clear') clearSolutions(game.name);
      });
      controls.appendChild(button);
    }
    const right = document.querySelector('.game-topbar__right');
    if (right) right.appendChild(controls);
    else document.body.appendChild(controls);
  }

  function normalizeGame(definition) {
    if (!definition || !definition.name) throw new Error('Recording game definitions require a name.');
    return Object.assign({
      slug: slug(definition.name),
      version: 1,
      scoreSolution: () => 0,
      optimizeSolution: solution => solution,
      validateSolution: () => ({ isValid: true, errors: [] }),
      getAudioEvents: () => []
    }, definition);
  }

  global.gameRecording = Object.freeze({
    devMode,
    rendererMode,
    registerGame(definition) {
      const game = normalizeGame(definition);
      games.set(game.name, game);
      games.set(game.slug, game);
      addDevControls(game);
      return game;
    },
    knownGames() {
      return Array.from(new Set(Array.from(games.values()))).map(game => ({
        name: game.name,
        slug: game.slug,
        page: game.page || `${game.slug}.html`,
        supportsReplay: typeof game.loadSolution === 'function' && typeof game.seek === 'function'
      }));
    },
    saveSolution,
    envelope(gameName, solutions) {
      const game = games.get(gameName) || { name: gameName, slug: slug(gameName), version: 1 };
      return commonEnvelope(game, solutions || loadSolutions(game.name));
    },
    score(gameName, solution) {
      const game = games.get(gameName);
      if (!game) throw new Error(`Unknown recording game: ${gameName}`);
      return Number(game.scoreSolution(solution)) || 0;
    },
    optimize(gameName, solution, options) {
      const game = games.get(gameName);
      if (!game) throw new Error(`Unknown recording game: ${gameName}`);
      return game.optimizeSolution(solution, options || {});
    },
    validate(gameName, solution) {
      const game = games.get(gameName);
      if (!game) throw new Error(`Unknown recording game: ${gameName}`);
      return game.validateSolution(solution);
    },
    load(gameName, solution) {
      const game = games.get(gameName);
      if (!game || typeof game.loadSolution !== 'function') throw new Error(`Game cannot load replay solutions: ${gameName}`);
      return game.loadSolution(solution);
    },
    seek(gameName, timeMs, options) {
      const game = games.get(gameName);
      if (!game || typeof game.seek !== 'function') throw new Error(`Game cannot seek replay solutions: ${gameName}`);
      return game.seek(timeMs, options || {});
    },
    duration(gameName, solution, options) {
      const game = games.get(gameName);
      if (!game) throw new Error(`Unknown recording game: ${gameName}`);
      if (typeof game.getDurationMs === 'function') return Number(game.getDurationMs(solution, options || {})) || 1000;
      return Number(solution && solution.durationMs) || 1000;
    },
    audioEvents(gameName, solution, options) {
      const game = games.get(gameName);
      if (!game) throw new Error(`Unknown recording game: ${gameName}`);
      return game.getAudioEvents(solution, options || {});
    }
  });
})(window, document);
