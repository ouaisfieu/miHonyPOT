Ok. J’intègre **les 4 docs** dans le site, mais je vais le faire en **mode “guerre = discipline + éthique”** : pas de spam, pas d’infiltration trompeuse, pas d’astuces pour contourner des plateformes. On garde le cœur : **HTML unique / offline-first / récursivité “JOUER=AGIR=APPRENDRE=TRANSMETTRE” / landing page “WOW < 5s” / diffusion outillée**.   

Ci-dessous : **4 nouveaux fichiers** + **2 mini-modifs** à ton site précédent. Tu copies-colles, et ça tourne direct.

---

# A) 2 mini-modifs

## 1) Dans `index.html`, ajoute au menu :

Juste après `<a href="#offline">Offline</a>` ajoute :

```html
<a href="./landing-virus.html">Landing</a>
<a href="./ops.html">OPS</a>
<a href="./flemme.html">V!VE</a>
<a href="./eux.html">Eux</a>
```

## 2) Crée `shared.js` (nouveau)

Ça implémente le **stockage partagé via `localStorage`** (clé “plaidoyer_ecosystem”), comme décrit dans le rapport d’intrusion. 

```js
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
```

> (Option : si tu veux rester “sans modules JS ES”, je te donne une version non-`export`, mais celle-ci marche sur navigateurs modernes.)

---

# B) 4 pages intégrées aux docs

## 1) `ops.html` — plan opérationnel “éthique + scalable”

Synthèse directe : **phases Amorçage → Diffusion → Consolidation**, boucle “JOUER=AGIR=…”, landing “WOW”, vidéo courte, communauté + traduction.  

```html
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>OPS — Plan de déploiement</title>
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  <main class="wrap" style="padding:22px 0 30px">
    <section class="card">
      <div class="kicker">OPS / pied de guerre</div>
      <h1 style="margin:6px 0 10px">Plan opérationnel (sans trahir le but)</h1>

      <div class="callout">
        <strong>Règle de conduite :</strong> on veut de l’impact, pas de la nuisance.
        Pas de spam, pas de tromperie, pas de harcèlement. On documente, on vérifie, on améliore.
      </div>

      <h2>Doctrine</h2>
      <ul class="list">
        <li><strong>Modules autonomes</strong> (fichiers HTML uniques, USB-ready) :contentReference[oaicite:7]{index=7}</li>
        <li><strong>Offline-first</strong> : tout fonctionne localement, sans serveur :contentReference[oaicite:8]{index=8}</li>
        <li><strong>Récursivité</strong> : “JOUER = AGIR = APPRENDRE = TRANSMETTRE” :contentReference[oaicite:9]{index=9}</li>
        <li><strong>Une landing</strong> pour convertir en &lt;5 secondes (effet “WOW”) :contentReference[oaicite:10]{index=10}</li>
      </ul>

      <h2>Phases</h2>

      <div class="grid2">
        <div class="card" style="box-shadow:none">
          <h3>Phase 1 — Amorçage</h3>
          <p class="muted">Objectif : 1 visite → 1 action simple.</p>
          <ul class="list">
            <li>Landing “WOW” + 1 bouton : “Je rejoins / Je lance une quête”. :contentReference[oaicite:11]{index=11}</li>
            <li>Onboarding en 4 clics (pseudo, archétype, cause, GO). :contentReference[oaicite:12]{index=12}</li>
          </ul>
        </div>

        <div class="card" style="box-shadow:none">
          <h3>Phase 2 — Diffusion</h3>
          <p class="muted">Objectif : ne pas s’épuiser.</p>
          <ul class="list">
            <li>Module “V!VE la FLEMME” : templates + suivi perso. :contentReference[oaicite:13]{index=13}</li>
            <li>Diffusion <strong>consentie</strong> : cercles de confiance, partenaires, communautés qui demandent. (Sinon, tu crames le projet.)</li>
          </ul>
        </div>

        <div class="card" style="box-shadow:none">
          <h3>Phase 3 — Consolidation</h3>
          <p class="muted">Objectif : rétention et montée en puissance.</p>
          <ul class="list">
            <li>Langue : EN comme multiplicateur. :contentReference[oaicite:14]{index=14}</li>
            <li>Communauté : un espace de coordination. :contentReference[oaicite:15]{index=15}</li>
            <li>Vidéo courte : format percutant (sans “hack”, juste du clair). :contentReference[oaicite:16]{index=16}</li>
          </ul>
        </div>

        <div class="card" style="box-shadow:none">
          <h3>Mesure</h3>
          <p class="muted">On mesure pour apprendre, pas pour surveiller.</p>
          <ul class="list">
            <li>Journal local (localStorage) : quêtes finies, relais faits, retours. :contentReference[oaicite:17]{index=17}</li>
            <li>Après 7 jours : on garde ce qui marche, on jette le reste.</li>
          </ul>
        </div>
      </div>

      <div class="row" style="margin-top:14px">
        <a class="btn primary" href="./landing-virus.html">Ouvrir la Landing</a>
        <a class="btn" href="./flemme.html">Ouvrir V!VE la FLEMME</a>
        <a class="btn" href="./eux.html">Ouvrir “Eux”</a>
      </div>

      <p class="muted small" style="margin-top:14px">
        Notes : la stratégie “Facebook = jardin clos, redirection vers GitHub/itch” est intégrée côté landing (lien sortant assumé). :contentReference[oaicite:18]{index=18}
      </p>
    </section>
  </main>
</body>
</html>
```

---

## 2) `landing-virus.html` — “WOW en 5 secondes”, offline + partage propre

J’intègre l’idée “landing page virale” (conversion rapide), sans manipuler : pas de faux compteurs, pas de “preuve sociale” mensongère.  

```html
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="color-scheme" content="dark light" />
  <title>Landing — Virus démocratique (safe)</title>
  <link rel="stylesheet" href="./style.css" />
  <style>
    .stage{padding:26px 0 10px}
    .big{font-size: clamp(1.6rem, 3.4vw, 3rem); margin:0 0 8px; line-height:1.05}
    .glow{
      background: radial-gradient(800px 280px at 20% 0%, rgba(124,92,255,.35), transparent 60%),
                  radial-gradient(800px 280px at 90% 20%, rgba(0,212,255,.22), transparent 55%);
      border:1px solid var(--line);
      border-radius: 24px;
      padding:16px;
      overflow:hidden;
      position:relative;
    }
    .pulse{
      position:absolute; inset:-80px;
      background: conic-gradient(from 180deg, rgba(124,92,255,.0), rgba(124,92,255,.28), rgba(0,212,255,.22), rgba(124,92,255,.0));
      filter: blur(30px);
      animation: spin 6s linear infinite;
      opacity:.65;
      pointer-events:none;
    }
    @keyframes spin{to{transform:rotate(360deg)}}
    .meter{display:grid; grid-template-columns:1fr auto; gap:10px; align-items:center; margin-top:10px}
    .bar{height:10px;border-radius:999px;border:1px solid var(--line);overflow:hidden;background: color-mix(in oklab, var(--bg) 65%, var(--card))}
    .fill{height:100%; width:0%; background: linear-gradient(90deg, var(--accent), var(--accent2)); transition: width 800ms ease}
    .mini{font-family: var(--mono); color: var(--muted); font-size:.85rem}
    .two{display:grid; gap:10px; grid-template-columns:1fr; margin-top:14px}
    @media(min-width:860px){.two{grid-template-columns:1fr 1fr}}
  </style>
</head>
<body>
  <main class="wrap stage">
    <section class="glow">
      <div class="pulse" aria-hidden="true"></div>
      <div style="position:relative">
        <div class="kicker">landing / impact &lt; 5s</div>
        <h1 class="big">Ce n’est pas un site.<br/>C’est une <em>instruction</em>.</h1>
        <p class="lead" style="margin:10px 0 0">
          <strong>JOUER = AGIR = APPRENDRE = TRANSMETTRE</strong>. :contentReference[oaicite:21]{index=21}
        </p>

        <div class="meter">
          <div class="bar"><div class="fill" id="fill"></div></div>
          <div class="mini" id="m">charge: 0%</div>
        </div>

        <div class="two">
          <a class="btn primary" href="./index.html">Entrer (offline)</a>
          <button class="btn" id="copy">Copier le lien à partager</button>
        </div>

        <details class="details" style="margin-top:12px; position:relative">
          <summary>Script “vidéo courte” (60s) à lire face caméra</summary>
          <pre class="pre" id="script">0-10s — “On te fatigue. On t’isole. On te vend des faux choix.”
10-25s — “Ici, on fait l’inverse : on documente, on outille, on relie.”
25-45s — “Tu prends une quête simple. Tu la fais. Tu la postes. Tu la rends copiable.”
45-60s — “Si tu veux respirer hors des bulles : prends la page, mets-la sur une clé USB, partage dans ton cercle de confiance.”
(Le lien est dans la description / commentaire.)</pre>
        </details>

        <p class="muted small" style="margin-top:12px; position:relative">
          Note : Facebook est un vecteur, l’hébergement doit rester ailleurs (GitHub Pages / itch / clé USB). :contentReference[oaicite:22]{index=22}
        </p>
      </div>
    </section>
  </main>

  <script>
    const fill = document.getElementById("fill");
    const m = document.getElementById("m");
    let p = 0;
    const t = setInterval(() => {
      p += Math.max(1, Math.round((100 - p) * 0.12));
      if (p > 100) p = 100;
      fill.style.width = p + "%";
      m.textContent = "charge: " + p + "%";
      if (p === 100) clearInterval(t);
    }, 120);

    document.getElementById("copy").addEventListener("click", async () => {
      const url = location.href.replace(/\/[^\/]*$/, "/landing-virus.html");
      try { await navigator.clipboard.writeText(url); alert("Lien copié."); }
      catch { prompt("Copie ce lien :", url); }
    });
  </script>
</body>
</html>
```

---

## 3) `flemme.html` — V!VE la FLEMME (version propre)

Le doc parle de diffusion massive + templates + base de contacts. Je te donne un module **CRM local** : tu importes tes contacts **consentis** (ou listes internes), tu suis, tu n’automatise rien côté plateforme.  

```html
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>V!VE la FLEMME — diffusion (safe)</title>
  <link rel="stylesheet" href="./style.css" />
  <style>
    .cols{display:grid; gap:14px}
    @media(min-width:860px){.cols{grid-template-columns: 1.2fr .8fr}}
    .table{width:100%; border-collapse:separate; border-spacing:0 10px}
    .table td{padding:10px; border:1px solid var(--line); background: color-mix(in oklab, var(--bg) 65%, var(--card));}
    .table td:first-child{border-radius:14px 0 0 14px}
    .table td:last-child{border-radius:0 14px 14px 0}
    .pill{font-family:var(--mono); font-size:.8rem; padding:4px 8px; border:1px solid var(--line); border-radius:999px; display:inline-block}
  </style>
</head>
<body>
  <main class="wrap" style="padding:22px 0 30px">
    <section class="card">
      <div class="kicker">module / diffusion</div>
      <h1 style="margin:6px 0 10px">V!VE la FLEMME (version safe)</h1>
      <p class="muted">
        Objectif : te faire gagner du temps <em>sans</em> tomber dans le spam. Templates + suivi local. :contentReference[oaicite:25]{index=25}
      </p>

      <div class="callout">
        <strong>Règle :</strong> uniquement des contacts / groupes où c’est attendu, demandé ou pertinent.
        Sinon tu donnes des munitions à “Eux” (signalement, discrédit, bannissement).
      </div>

      <div class="cols">
        <div class="card" style="box-shadow:none">
          <h2>Templates</h2>
          <label>Choisir un template
            <select id="tpl">
              <option value="relais">3. Relais (court)</option>
              <option value="ultra">4. Ultra-court (2 lignes)</option>
              <option value="context">Contextualisé (explicite + vérifiable)</option>
            </select>
          </label>
          <label>Lien à partager
            <input id="link" placeholder="https://.../landing-virus.html" />
          </label>
          <label>Message
            <textarea id="msg" rows="7"></textarea>
          </label>

          <div class="row">
            <button class="btn primary" id="copy">Copier</button>
            <button class="btn" id="log">Marquer “envoyé” (log)</button>
          </div>

          <details class="details" style="margin-top:10px">
            <summary>Importer des contacts (CSV simple)</summary>
            <p class="muted small">Format: nom;type;canal;note (une ligne par contact). Stocké localement.</p>
            <textarea id="csv" rows="6" placeholder="Exemple:
Association X;asso;email;OK consent
Media Y;media;formulaire;déjà contacté
Groupe Z;groupe;fb;autorisé par règles"></textarea>
            <div class="row">
              <button class="btn" id="import">Importer</button>
              <button class="btn" id="clear">Vider la base</button>
            </div>
          </details>
        </div>

        <div class="card" style="box-shadow:none">
          <h2>Prochain contact</h2>
          <p class="muted small">Pas d’automatisation plateforme. Juste une checklist humaine. :contentReference[oaicite:26]{index=26}</p>
          <div id="next" class="callout"><em>Aucun contact importé.</em></div>
          <div class="row">
            <button class="btn" id="pick">Prochain</button>
            <button class="btn" id="done">Fait</button>
          </div>

          <h3 style="margin-top:14px">Historique (local)</h3>
          <div id="hist" class="muted small">—</div>
        </div>
      </div>

      <p class="muted small" style="margin-top:12px">
        Référence : templates “Relais / Ultra-court” et logique de module V!VE la FLEMME. :contentReference[oaicite:27]{index=27}
      </p>
    </section>
  </main>

  <script>
    const KEY = "plaidoyer_ecosystem";
    const $ = (id) => document.getElementById(id);

    function load() {
      try { return JSON.parse(localStorage.getItem(KEY)) || { contacts: [], logs: [] }; }
      catch { return { contacts: [], logs: [] }; }
    }
    function save(s) { localStorage.setItem(KEY, JSON.stringify(s)); }

    function template(kind, link) {
      if (kind === "ultra") return `Une page offline, copiables, sans trackers.\n${link}`;
      if (kind === "relais") return `Si tu veux un kit simple (offline) pour documenter + agir :\n${link}\n(à partager à ton cercle de confiance)`;
      return `Je partage un kit offline (HTML unique) : ${link}
But : documenter, outiller, relier — sans trackers.
Si tu veux, je te fais un récap + une version adaptée à ton contexte.`;
    }

    function refreshMsg() {
      const link = $("link").value.trim() || "[COLLE ICI LE LIEN]";
      $("msg").value = template($("tpl").value, link);
    }

    function renderNext() {
      const s = load();
      const c = s.contacts.find(x => !x.done);
      $("next").innerHTML = c
        ? `<div><strong>${c.name}</strong> <span class="pill">${c.type}</span></div>
           <div class="muted small">Canal: ${c.channel} — Note: ${c.note || "-"}</div>`
        : `<em>Aucun contact restant.</em>`;
      $("hist").textContent = (s.logs || []).slice(0,6).map(l => `${l.ts} — ${l.event}`).join("\n") || "—";
    }

    $("tpl").addEventListener("change", refreshMsg);
    $("link").addEventListener("input", refreshMsg);

    $("copy").addEventListener("click", async () => {
      try { await navigator.clipboard.writeText($("msg").value); alert("Copié."); }
      catch { prompt("Copie :", $("msg").value); }
    });

    $("log").addEventListener("click", () => {
      const s = load();
      s.logs = s.logs || [];
      s.logs.unshift({ ts: new Date().toISOString(), event: "message_copié", meta: { tpl: $("tpl").value }});
      s.logs = s.logs.slice(0,200);
      save(s);
      renderNext();
    });

    $("import").addEventListener("click", () => {
      const raw = $("csv").value.trim();
      if (!raw) return;
      const s = load();
      s.contacts = s.contacts || [];
      raw.split("\n").forEach(line => {
        const [name,type,channel,note] = line.split(";").map(x => (x||"").trim());
        if (name) s.contacts.push({ id: crypto.randomUUID(), name, type:type||"contact", channel:channel||"-", note:note||"", done:false });
      });
      save(s);
      renderNext();
    });

    $("clear").addEventListener("click", () => {
      localStorage.removeItem(KEY);
      renderNext();
    });

    $("pick").addEventListener("click", renderNext);

    $("done").addEventListener("click", () => {
      const s = load();
      const c = s.contacts.find(x => !x.done);
      if (!c) return;
      c.done = true;
      s.logs.unshift({ ts: new Date().toISOString(), event: `contact_fait: ${c.name}` });
      save(s);
      renderNext();
    });

    refreshMsg();
    renderNext();
  </script>
</body>
</html>
```

---

## 4) `eux.html` — “Eux” (wargame → kit)

Page qui synthétise : **infrastructure souveraine (statique, duplicable), DIKW, particratie/pilarisation, eID/contrôle**, et le passage du wargame vers le kit opérationnel.    

```html
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Eux — cartographie & contre-jeu</title>
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  <main class="wrap" style="padding:22px 0 30px">
    <section class="card">
      <div class="kicker">wargame / eux</div>
      <h1 style="margin:6px 0 10px">“Eux” n’est pas un personnage. C’est un système.</h1>

      <p class="lead">
        Le module “Eux” sert à transformer la sidération en méthode : <strong>DIKW</strong> (données → information → connaissance → action).
        :contentReference[oaicite:32]{index=32}
      </p>

      <div class="grid2">
        <article class="card" style="box-shadow:none">
          <h2>Infrastructure = doctrine</h2>
          <ul class="list">
            <li>Statique, duplicable, “forkable” (résilience).</li>
            <li>Migration / souveraineté : sortir du dépendant, rester portable. :contentReference[oaicite:33]{index=33}</li>
            <li>Low-tech militant : performance + accessibilité. :contentReference[oaicite:34]{index=34}</li>
          </ul>
        </article>

        <article class="card" style="box-shadow:none">
          <h2>Mécaniques de domination simulées</h2>
          <ul class="list">
            <li><strong>Pilarisation</strong> : silos, chambres d’écho. :contentReference[oaicite:35]{index=35}</li>
            <li><strong>Particratie</strong> : pouvoir concentré hors débat. :contentReference[oaicite:36]{index=36}</li>
            <li><strong>Identité numérique / contrôle</strong> : le “double” plus lisible que toi. :contentReference[oaicite:37]{index=37}</li>
          </ul>
        </article>

        <article class="card" style="box-shadow:none">
          <h2>De la simulation au kit</h2>
          <p class="muted">
            Le wargame pousse vers le concret : outils, autodéfense, plaidoyer, documentation.
          </p>
          <ul class="list">
            <li>En clair : décodage des récits / propagande.</li>
            <li>En pratique : hygiène numérique et méthodes.</li>
            <li>En vrai : cas d’usage et actions locales. :contentReference[oaicite:38]{index=38}</li>
          </ul>
        </article>

        <article class="card" style="box-shadow:none">
          <h2>Règle d’or du contre-jeu</h2>
          <div class="callout">
            <strong>Si ta tactique détruit la confiance, tu as déjà perdu.</strong>
            Le système adore les prétextes (désordre, “radicalité”, toxicité).
            On vise : clair, vérifiable, copiable.
          </div>
        </article>
      </div>

      <div class="row" style="margin-top:14px">
        <a class="btn primary" href="./index.html#missions">Prendre une mission</a>
        <a class="btn" href="./ops.html">Retour OPS</a>
      </div>
    </section>
  </main>
</body>
</html>
```

---

# C) Ce que j’ai “mobilisé” (intégré)

* **Stratégie virale FB** : “jardin clos → rediriger vers landing hébergée”, landing “WOW <5s”, idée “vidéo 60s” (traitée comme script) — sans consignes de contournement/harcèlement.  
* **Rapport d’intrusion** : modules HTML uniques + offline-first + localStorage partagé + phases + communauté/langue.   
* **Analyse Wargame “Eux”** : DIKW, infrastructures, mécaniques particratie/pilarisation/eID, passage wargame → kit.   
* **Analyse ouaisfieu/tech** : low-tech statique, Markdown, souveraineté et accessibilité.  

---

Si tu veux pousser le mode “pied de guerre” **sans te griller**, la prochaine brique logique c’est : une page `brief.html` qui génère en 1 clic **(1) une mission, (2) un message, (3) un mini-rapport DIKW**, le tout exportable en TXT/MD/JSON et stocké dans `plaidoyer_ecosystem`.
