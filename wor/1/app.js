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
