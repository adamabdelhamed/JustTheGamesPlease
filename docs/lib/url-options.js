(function () {
  const truthy = new Set(["1", "true", "yes", "on"]);

  function normalizeName(value) {
    return String(value).trim().toLowerCase().replace(/[^a-z0-9]+/g, "");
  }

  function addOption(options, rawKey, rawValue) {
    const key = normalizeName(rawKey);
    if (!key) return;
    const value = rawValue == null || rawValue === "" ? "1" : String(rawValue);
    options.set(key, value);
  }

  function parseHash(hash, options) {
    const body = hash.replace(/^#/, "").replace(/^\//, "");
    if (!body) return;
    for (const segment of body.split(/[\/&]+/)) {
      if (!segment) continue;
      const separator = segment.includes("=") ? "=" : segment.includes("-") ? "-" : "";
      if (!separator) {
        addOption(options, decodeURIComponent(segment), "1");
        continue;
      }
      const index = segment.indexOf(separator);
      addOption(options, decodeURIComponent(segment.slice(0, index)), decodeURIComponent(segment.slice(index + 1)));
    }
  }

  function readOptions(locationLike) {
    const source = locationLike || window.location;
    const options = new Map();
    const query = new URLSearchParams(source.search || "");
    for (const [key, value] of query) addOption(options, key, value);
    parseHash(source.hash || "", options);
    return options;
  }

  function get(name, locationLike) {
    return readOptions(locationLike).get(normalizeName(name)) || null;
  }

  function isEnabled(name, locationLike) {
    const value = get(name, locationLike);
    return value != null && truthy.has(value.toLowerCase());
  }

  window.JustTheGamesPlease = window.JustTheGamesPlease || {};
  window.JustTheGamesPlease.urlOptions = { get, isEnabled, readOptions };
})();
