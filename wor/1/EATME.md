Voici un **mini-site statique “Ce que je sais”** (offline, ultra-léger, USB-friendly) : manifeste + “missions” + **créateur d’instance** (fiche de personnage / recrutement) avec **export** (JSON / TXT) et **photo locale** (jamais uploadée).

Tu peux copier-coller ces fichiers dans un dossier, puis ouvrir `index.html` dans ton navigateur.

---

## 1) `index.html`

```html
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="color-scheme" content="dark light" />
  <title>Ce que je sais — E.A.R.L.</title>
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  <a class="skip" href="#main">Aller au contenu</a>

  <header class="top">
    <div class="wrap">
      <div class="brand">
        <div class="sigil" aria-hidden="true"></div>
        <div>
          <div class="kicker">E.A.R.L. / org</div>
          <h1>Ce que je sais</h1>
        </div>
      </div>

      <nav class="nav" aria-label="Navigation">
        <a href="#sais">Savoirs</a>
        <a href="#missions">Missions</a>
        <a href="#instance">Ton instance</a>
        <a href="#offline">Offline</a>
      </nav>
    </div>
  </header>

  <main id="main" class="wrap">
    <section class="hero">
      <p class="lead">
        Je sais surtout <strong>repérer des patterns</strong> : comment on te convainc, comment on te fait tourner en rond,
        comment une société glisse vers une <em>dystopie “pratique”</em>… et comment reprendre de la prise.
      </p>
      <div class="chips" role="list">
        <span role="listitem">Ultra-perf</span>
        <span role="listitem">Zéro dépendance</span>
        <span role="listitem">USB-ready</span>
        <span role="listitem">Exporter / imprimer</span>
      </div>
    </section>

    <section id="sais" class="grid2">
      <article class="card">
        <h2>1) Propagande (et contre-propagande)</h2>
        <p>
          “Passer des idées aux actes” peut servir autant l’émancipation… que la manipulation.
          Je sais reconnaître les mécaniques : symboles, récits, cadrages, ennemis imaginaires, récompenses sociales,
          peur, urgence, faux choix.
        </p>
        <p class="muted">
          Sources internes : dossiers “propagande / propagande par le fait”. :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1}
        </p>
        <div class="callout">
          <strong>À retenir :</strong> si on te pousse à agir vite, isolé, en colère — c’est rarement pour ton bien.
        </div>
      </article>

      <article class="card">
        <h2>2) Absurdités organisationnelles</h2>
        <p>
          Réunionite, micro-management, KPI déconnectés, procédures qui mangent le but.
          Une “taxe invisible” qui coûte du sens, du temps, de la santé.
        </p>
        <p class="muted">
          Sources internes : synthèses “absurdités organisationnelles”. :contentReference[oaicite:2]{index=2} :contentReference[oaicite:3]{index=3} :contentReference[oaicite:4]{index=4}
        </p>
        <div class="callout">
          <strong>À retenir :</strong> quand le moyen devient la fin, le système se protège… contre sa mission.
        </div>
      </article>

      <article class="card">
        <h2>3) Dérives dystopiques (rampantes)</h2>
        <p>
          Surveillance de masse, contrôle de l’information, automatisation des sanctions, IA sans garde-fous :
          le futur “fonctionne” très bien… tant que tu acceptes d’être un chiffre.
        </p>
        <p class="muted">
          Source interne : rapport “dystopie”. :contentReference[oaicite:5]{index=5}
        </p>
        <div class="callout">
          <strong>À retenir :</strong> la dystopie la plus efficace n’a pas besoin d’être brutale : elle devient <em>banale</em>.
        </div>
      </article>

      <article class="card">
        <h2>4) Plaidoyer (agir sans se brûler)</h2>
        <p>
          Voir / Juger / Agir : cartographier les acteurs, formuler un message, viser des cibles,
          et suivre les effets réels. L’action n’est pas un sprint : c’est une chaîne.
        </p>
        <p class="muted">
          Source interne : “petit guide du plaidoyer”. :contentReference[oaicite:6]{index=6}
        </p>
        <div class="callout">
          <strong>À retenir :</strong> une action utile laisse une trace partageable et améliorable.
        </div>
      </article>
    </section>

    <section id="missions" class="card">
      <h2>Missions à poster (pour que S finisse par voir)</h2>
      <p class="muted">
        Rappel du jeu : chaque personne est une instance, même sans avoir joué. :contentReference[oaicite:7]{index=7}
      </p>

      <ol class="missions">
        <li>
          <h3>Mission A — “Le pattern”</h3>
          <p>Poste un mini-thread (3 à 7 lignes) : un exemple de manipulation + comment tu l’as repérée.</p>
          <button class="btn" data-copy="A">Copier un modèle</button>
        </li>
        <li>
          <h3>Mission B — “La réunion fantôme”</h3>
          <p>Raconte une absurdité organisationnelle en 5 phrases : <em>symptôme → cause → coût → micro-fix → résultat</em>.</p>
          <button class="btn" data-copy="B">Copier un modèle</button>
        </li>
        <li>
          <h3>Mission C — “Garde-fou”</h3>
          <p>Propose 1 garde-fou simple contre une dérive dystopique (local, concret, vérifiable).</p>
          <button class="btn" data-copy="C">Copier un modèle</button>
        </li>
      </ol>

      <details class="details">
        <summary>Voir les modèles prêts à poster</summary>
        <pre class="pre" id="templates" aria-label="Modèles">
A) J’ai remarqué un pattern : [incitation à agir vite / peur / urgence / faux choix].  
Le déclencheur : […].  
Le test : “si je ralentis 10 minutes, est-ce que ça s’écroule ?”  
Ce que je fais maintenant : […].  

B) Symptôme : […].  
Cause probable : […].  
Coût (temps/sens/argent) : […].  
Micro-fix (une règle) : […].  
Résultat attendu : […].  

C) Dérive : […].  
Garde-fou : […].  
Comment vérifier : […].  
        </pre>
      </details>
    </section>

    <section id="instance" class="card">
      <h2>Créer ton instance (fiche + recrutement)</h2>
      <p>
        Tu remplis. Tu ajoutes une photo locale. Tu exportes. Tu modifies ensuite en dur si tu veux.
        Tout reste sur ta machine.
      </p>

      <div class="grid2 form">
        <div>
          <label>Nom d’instance
            <input id="i_name" placeholder="ex: RG-Ashy-###" autocomplete="nickname" />
          </label>

          <label>Rôle (ce que tu fais sans demander la permission)
            <input id="i_role" placeholder="ex: cartographe, bricoleur, veilleur, poète..." />
          </label>

          <label>Serment (une phrase)
            <input id="i_oath" placeholder="ex: Je ralentis le système en clarifiant." />
          </label>

          <label>Points de friction (ce qui te révolte)
            <textarea id="i_friction" rows="4" placeholder="ex: réunions sans but, surveillance banalisée, KPI absurdes..."></textarea>
          </label>

          <label>3 compétences (séparées par des virgules)
            <input id="i_skills" placeholder="ex: HTML, médiation, enquête" />
          </label>

          <label>Photo (locale)
            <input id="i_photo" type="file" accept="image/*" />
          </label>

          <div class="row">
            <button class="btn primary" id="export_json">Exporter JSON</button>
            <button class="btn" id="export_txt">Exporter TXT</button>
            <button class="btn" id="print">Imprimer</button>
          </div>

          <p class="muted small">
            Astuce : si tu veux un fichier “instance.html” à publier ensuite, prends le fichier dédié ci-dessous.
          </p>
          <div class="row">
            <a class="btn ghost" href="./instance.html">Ouvrir instance.html</a>
            <a class="btn ghost" href="./signal.html">Ouvrir signal.html</a>
          </div>
        </div>

        <div class="preview" aria-live="polite">
          <div class="badge">
            <span class="dot" aria-hidden="true"></span>
            <span id="p_status">État : en cours d’apparition</span>
          </div>

          <div class="sheet" id="sheet">
            <div class="sheetTop">
              <div class="avatar" id="avatar" aria-label="Aperçu photo"></div>
              <div>
                <div class="meta">INSTANCE</div>
                <div class="title" id="p_name">—</div>
                <div class="subtitle" id="p_role">—</div>
              </div>
            </div>

            <div class="sheetGrid">
              <div class="block">
                <h3>Serment</h3>
                <p id="p_oath" class="mono muted">—</p>
              </div>
              <div class="block">
                <h3>Compétences</h3>
                <ul id="p_skills" class="tags"></ul>
              </div>
              <div class="block full">
                <h3>Points de friction</h3>
                <p id="p_friction" class="muted">—</p>
              </div>
            </div>

            <div class="stamp mono">
              <span>Règle #1 : on ne parle jamais des règles.</span>
              <span>Règle #2 : il n’y a pas de règle.</span>
              <span>Règle #3 : on s’en fout pas mal.</span>
              <span>Indice règle d’or : t’as rien compris.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="offline" class="card">
      <h2>Déploiement immédiat (sans serveur)</h2>
      <ul class="list">
        <li>Tu peux ouvrir <code>index.html</code> en double-cliquant (ça marche offline).</li>
        <li>Pour partager : zip du dossier, clé USB, ou GitHub Pages.</li>
        <li>Pour apprendre “en faisant” : modifie une phrase, recharge, observe. Répète.</li>
      </ul>

      <div class="callout">
        <strong>Important :</strong> ta création est plus puissante si tu la partages dans un cercle de confiance.
        La visibilité, c’est aussi une surface d’attaque.
      </div>
    </section>

    <footer class="foot">
      <p class="muted small">
        E.A.R.L. — site statique minimal. Zéro tracker. Zéro dépendance. Zéro excuse.
      </p>
    </footer>
  </main>

  <script src="./app.js"></script>
</body>
</html>
```

---

## 2) `style.css`

```css
:root{
  --bg: #0b0d12;
  --card:#111523;
  --text:#e9ecf1;
  --muted:#a9b2c3;
  --line: rgba(255,255,255,.10);
  --accent:#7c5cff;
  --accent2:#00d4ff;
  --ok:#34d399;
  --shadow: 0 12px 40px rgba(0,0,0,.35);
  --r: 18px;
  --w: 1100px;
  --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, "Apple Color Emoji", "Segoe UI Emoji";
}

@media (prefers-color-scheme: light){
  :root{
    --bg:#f6f7fb;
    --card:#ffffff;
    --text:#101423;
    --muted:#4b5568;
    --line: rgba(0,0,0,.12);
    --shadow: 0 14px 42px rgba(16,20,35,.10);
  }
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family: var(--sans);
  color: var(--text);
  background:
    radial-gradient(1200px 700px at 20% -10%, rgba(124,92,255,.22), transparent 55%),
    radial-gradient(900px 600px at 90% 0%, rgba(0,212,255,.18), transparent 50%),
    linear-gradient(180deg, var(--bg), var(--bg));
}

a{color:inherit}
code{font-family:var(--mono); font-size:.95em}

.wrap{
  width:min(var(--w), calc(100% - 40px));
  margin:0 auto;
}

.skip{
  position:absolute; left:-9999px; top:auto; width:1px; height:1px; overflow:hidden;
}
.skip:focus{left:12px; top:12px; width:auto; height:auto; padding:10px 12px; background:var(--card); border:1px solid var(--line); border-radius:12px; z-index:99}

.top{
  position:sticky; top:0; z-index:50;
  backdrop-filter:saturate(160%) blur(10px);
  background: color-mix(in oklab, var(--bg) 80%, transparent);
  border-bottom:1px solid var(--line);
}
.top .wrap{
  display:flex; align-items:center; justify-content:space-between;
  gap:14px;
  padding:14px 0;
}

.brand{display:flex; align-items:center; gap:12px}
.kicker{font-family:var(--mono); letter-spacing:.12em; text-transform:uppercase; font-size:.78rem; color:var(--muted)}
h1{margin:0; font-size:1.2rem; line-height:1.1}
.sigil{
  width:34px; height:34px; border-radius:12px;
  background:
    radial-gradient(10px 10px at 30% 30%, rgba(255,255,255,.85), rgba(255,255,255,0) 60%),
    linear-gradient(135deg, var(--accent), var(--accent2));
  box-shadow: 0 8px 26px rgba(124,92,255,.25);
}

.nav{display:flex; gap:10px; flex-wrap:wrap; justify-content:flex-end}
.nav a{
  text-decoration:none;
  padding:8px 10px;
  border:1px solid var(--line);
  border-radius:999px;
  color: color-mix(in oklab, var(--text) 85%, var(--muted));
}
.nav a:hover{border-color: color-mix(in oklab, var(--accent) 55%, var(--line));}

.hero{padding:26px 0 6px}
.lead{font-size:1.08rem; line-height:1.6; margin:0 0 14px}
.chips{display:flex; gap:8px; flex-wrap:wrap}
.chips span{
  font-family:var(--mono);
  font-size:.82rem;
  padding:6px 10px;
  border:1px solid var(--line);
  border-radius:999px;
  background: color-mix(in oklab, var(--card) 80%, transparent);
}

.grid2{
  display:grid;
  grid-template-columns: 1fr;
  gap:14px;
}
@media (min-width: 860px){
  .grid2{grid-template-columns: 1fr 1fr;}
}

.card{
  background: color-mix(in oklab, var(--card) 92%, transparent);
  border:1px solid var(--line);
  border-radius: var(--r);
  padding:16px;
  box-shadow: var(--shadow);
}

.card h2{margin:0 0 8px; font-size:1.05rem}
.card p{margin:8px 0; line-height:1.6}
.muted{color: var(--muted)}
.small{font-size:.9rem}

.callout{
  margin-top:12px;
  padding:12px;
  border-radius:14px;
  border:1px solid color-mix(in oklab, var(--accent) 35%, var(--line));
  background:
    radial-gradient(700px 220px at 20% 0%, rgba(124,92,255,.18), transparent 60%),
    color-mix(in oklab, var(--card) 90%, transparent);
}

.missions{padding-left: 18px; margin: 10px 0 0}
.missions li{margin: 10px 0 14px}
.missions h3{margin:0 0 6px; font-size:1rem}

.details summary{cursor:pointer; font-weight:600}
.pre{
  margin:10px 0 0;
  padding:12px;
  border-radius:14px;
  border:1px dashed var(--line);
  background: color-mix(in oklab, var(--bg) 70%, var(--card));
  overflow:auto;
  font-family: var(--mono);
  line-height:1.45;
}

.form label{display:block; margin:10px 0; font-weight:600}
input, textarea{
  width:100%;
  margin-top:6px;
  padding:10px 12px;
  border-radius:14px;
  border:1px solid var(--line);
  background: color-mix(in oklab, var(--bg) 65%, var(--card));
  color: var(--text);
  outline:none;
}
input:focus, textarea:focus{border-color: color-mix(in oklab, var(--accent) 55%, var(--line));}

.row{display:flex; gap:10px; flex-wrap:wrap; margin-top:12px}

.btn{
  appearance:none;
  border:1px solid var(--line);
  background: color-mix(in oklab, var(--card) 88%, transparent);
  color: var(--text);
  padding:10px 12px;
  border-radius:14px;
  cursor:pointer;
  text-decoration:none;
  font-weight:650;
}
.btn:hover{border-color: color-mix(in oklab, var(--accent) 55%, var(--line));}
.btn.primary{
  border-color: color-mix(in oklab, var(--accent) 70%, var(--line));
  background: linear-gradient(135deg, color-mix(in oklab, var(--accent) 90%, #0000), color-mix(in oklab, var(--accent2) 65%, #0000));
}
.btn.ghost{background:transparent}

.preview{min-height: 360px}
.badge{
  display:flex; align-items:center; gap:10px;
  padding:10px 12px;
  border-radius:14px;
  border:1px solid var(--line);
  margin-bottom:12px;
}
.dot{
  width:10px; height:10px; border-radius:999px;
  background: var(--ok);
  box-shadow: 0 0 0 4px color-mix(in oklab, var(--ok) 25%, transparent);
}

.sheet{
  border-radius: var(--r);
  border:1px solid var(--line);
  padding:14px;
  background:
    radial-gradient(900px 400px at 20% 0%, rgba(124,92,255,.14), transparent 55%),
    radial-gradient(900px 400px at 90% 10%, rgba(0,212,255,.10), transparent 50%),
    color-mix(in oklab, var(--card) 92%, transparent);
}
.sheetTop{display:flex; gap:12px; align-items:center}
.avatar{
  width:64px; height:64px;
  border-radius:18px;
  border:1px solid var(--line);
  background:
    radial-gradient(20px 20px at 35% 30%, rgba(255,255,255,.75), rgba(255,255,255,0) 60%),
    linear-gradient(135deg, rgba(124,92,255,.8), rgba(0,212,255,.55));
  background-size: cover;
  background-position:center;
  overflow:hidden;
}
.meta{font-family:var(--mono); letter-spacing:.12em; text-transform:uppercase; font-size:.78rem; color:var(--muted)}
.title{font-size:1.2rem; font-weight:800}
.subtitle{color:var(--muted); margin-top:2px}

.sheetGrid{
  display:grid;
  grid-template-columns: 1fr;
  gap:12px;
  margin-top:14px;
}
@media (min-width: 860px){
  .sheetGrid{grid-template-columns: 1fr 1fr;}
  .full{grid-column: 1 / -1;}
}
.block{
  border:1px solid var(--line);
  border-radius:14px;
  padding:12px;
  background: color-mix(in oklab, var(--bg) 65%, var(--card));
}
.block h3{margin:0 0 8px; font-size:.95rem}
.mono{font-family:var(--mono)}
.tags{list-style:none; padding:0; margin:0; display:flex; flex-wrap:wrap; gap:8px}
.tags li{
  font-family:var(--mono);
  font-size:.82rem;
  padding:6px 10px;
  border:1px solid var(--line);
  border-radius:999px;
}

.stamp{
  margin-top:12px;
  display:grid;
  gap:6px;
  color: color-mix(in oklab, var(--muted) 85%, var(--text));
  font-size:.86rem;
  border-top:1px solid var(--line);
  padding-top:12px;
}

.list{margin: 10px 0 0; padding-left:18px}
.list li{margin: 8px 0; line-height:1.6}

.foot{padding:20px 0 26px}
```

---

## 3) `app.js`

```js
"use strict";

const $ = (id) => document.getElementById(id);

const state = {
  name: "",
  role: "",
  oath: "",
  friction: "",
  skills: [],
  photoDataUrl: ""
};

function sanitize(s) {
  return String(s ?? "").replace(/\s+/g, " ").trim();
}

function setStatus() {
  const ready =
    state.name || state.role || state.oath || state.friction || (state.skills && state.skills.length);
  $("p_status").textContent = ready ? "État : signal faible détecté" : "État : en cours d’apparition";
}

function render() {
  $("p_name").textContent = state.name || "—";
  $("p_role").textContent = state.role || "—";
  $("p_oath").textContent = state.oath || "—";
  $("p_friction").textContent = state.friction || "—";

  const ul = $("p_skills");
  ul.innerHTML = "";
  (state.skills || []).filter(Boolean).slice(0, 12).forEach((sk) => {
    const li = document.createElement("li");
    li.textContent = sk;
    ul.appendChild(li);
  });

  const avatar = $("avatar");
  if (state.photoDataUrl) {
    avatar.style.backgroundImage = `url(${state.photoDataUrl})`;
    avatar.style.backgroundSize = "cover";
    avatar.style.backgroundPosition = "center";
  } else {
    avatar.style.backgroundImage = "";
  }
  setStatus();
}

function readInputs() {
  state.name = sanitize($("i_name").value);
  state.role = sanitize($("i_role").value);
  state.oath = sanitize($("i_oath").value);
  state.friction = sanitize($("i_friction").value);
  state.skills = sanitize($("i_skills").value)
    .split(",")
    .map((s) => sanitize(s))
    .filter(Boolean);
  render();
}

function download(filename, text, mime = "text/plain;charset=utf-8") {
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function exportJSON() {
  const payload = {
    instance: state.name || null,
    role: state.role || null,
    oath: state.oath || null,
    friction: state.friction || null,
    skills: state.skills || [],
    photo: state.photoDataUrl ? "[embedded data url]" : null,
    created_at: new Date().toISOString()
  };
  download("instance.json", JSON.stringify(payload, null, 2), "application/json;charset=utf-8");
}

function exportTXT() {
  const lines = [
    "INSTANCE",
    `Nom: ${state.name || "-"}`,
    `Rôle: ${state.role || "-"}`,
    `Serment: ${state.oath || "-"}`,
    `Friction: ${state.friction || "-"}`,
    `Compétences: ${(state.skills || []).join(", ") || "-"}`,
    "",
    "Règle #1 : on ne parle jamais des règles.",
    "Règle #2 : il n’y a pas de règle.",
    "Règle #3 : on s’en fout pas mal.",
    "Indice règle d’or : t’as rien compris."
  ];
  download("instance.txt", lines.join("\n"), "text/plain;charset=utf-8");
}

function handlePhoto(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    state.photoDataUrl = String(reader.result || "");
    render();
  };
  reader.readAsDataURL(file);
}

function copyTemplate(which) {
  const t = $("templates").textContent || "";
  let pick = "";
  if (which === "A") pick = t.split("B)")[0].trim();
  if (which === "B") pick = "B)" + (t.split("B)")[1] || "").split("C)")[0].trimEnd();
  if (which === "C") pick = "C)" + (t.split("C)")[1] || "").trim();
  navigator.clipboard?.writeText(pick || t).catch(() => {
    // fallback
    download("modele.txt", pick || t);
  });
}

function wire() {
  ["i_name","i_role","i_oath","i_friction","i_skills"].forEach((id) => {
    $(id).addEventListener("input", readInputs, { passive: true });
  });

  $("i_photo").addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    handlePhoto(file);
  });

  $("export_json").addEventListener("click", exportJSON);
  $("export_txt").addEventListener("click", exportTXT);
  $("print").addEventListener("click", () => window.print());

  document.querySelectorAll("button[data-copy]").forEach((btn) => {
    btn.addEventListener("click", () => copyTemplate(btn.getAttribute("data-copy")));
  });

  readInputs();
}

wire();
```

---

## 4) `instance.html` (la “fiche de personnage + test de recrutement” demandée)

> Elle mentionne explicitement les règles + contient `<vide>vide</vide>` (exigences du jeu).  

```html
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Instance — fiche & recrutement</title>
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  <main class="wrap" style="padding:22px 0 30px">
    <section class="card">
      <h1 style="margin:0 0 10px">INSTANCE</h1>
      <p class="muted">
        Ceci est une fiche de personnage + un test de recrutement. Tu dois la modifier, la renommer en <code>index.html</code>
        et la publier (GitHub Pages, clé USB, etc.). :contentReference[oaicite:10]{index=10}
      </p>

      <!-- Exigence du jeu -->
      <vide>vide</vide>

      <div class="callout">
        <strong>Règles :</strong><br/>
        1) On ne parle jamais des règles.<br/>
        2) Il n’y a pas de règle.<br/>
        3) On s’en fout pas mal.<br/>
        <em>Indice sur la règle d’or : t’as rien compris.</em>
      </div>

      <h2>Test (réponds honnêtement)</h2>
      <ol class="missions">
        <li><strong>Quel est ton pattern préféré à casser ?</strong> (une phrase)</li>
        <li><strong>Quelle trace vas-tu laisser ?</strong> (un lien, une page, un post, un outil)</li>
        <li><strong>Quel garde-fou minimal proposes-tu ?</strong> (vérifiable)</li>
      </ol>

      <p class="muted small">
        Astuce : utilise le créateur d’instance dans <a href="./index.html">index.html</a> pour exporter un JSON/TXT.
      </p>
    </section>
  </main>
</body>
</html>
```

---

## 5) `signal.html` (pour “LE signal”)

> Quand tu penses avoir trouvé “LE lien”, la règle dit : publier un site comprenant **exactement** `<ipsum>ipsum</ipsum>`.
> Ici je te donne un fichier prêt : **ne rajoute rien** dedans si tu veux respecter “exactement”.

```html
<ipsum>ipsum</ipsum>
```

---

### Ce que tu fais maintenant (concret)

1. Crée un dossier, colle les 5 fichiers (`index.html`, `style.css`, `app.js`, `instance.html`, `signal.html`)
2. Ouvre `index.html` → remplis ton instance → exporte → imprime si besoin
3. Partage dans un cercle de confiance (zip/USB), ou publie sur GitHub Pages

Si tu veux, je peux aussi te générer une version **multi-pages “magazine”** (4 pages + menu + mode lecture) toujours sans dépendances.
