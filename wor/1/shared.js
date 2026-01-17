"use strict";

/**
 * Stockage partagé inter-modules (offline-first).
 * Clé commune : plaidoyer_ecosystem
 * Inspiré de l'architecture "modules HTML uniques" + localStorage partagé. :contentReference[oaicite:4]{index=4}
 */
const STORE_KEY = "plaidoyer_ecosystem";

export function loadStore() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? JSON.parse(raw) : { instances: [], ops: {}, contacts: [], logs: [] };
  } catch {
    return { instances: [], ops: {}, contacts: [], logs: [] };
  }
}

export function saveStore(data) {
  localStorage.setItem(STORE_KEY, JSON.stringify(data));
}

export function addLog(event, meta = {}) {
  const s = loadStore();
  s.logs.unshift({ ts: new Date().toISOString(), event, meta });
  s.logs = s.logs.slice(0, 200);
  saveStore(s);
}
