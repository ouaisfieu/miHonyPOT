Maintenant je vais examiner la dernière version stable pour évaluer l'état actuel :Parfait ! Voici le **TOPO et TL;DR** complet du projet :

---

# 🎯 PLAIDOYER CITOYEN — État des Lieux

## TL;DR

**Objectif** : Créer un poste de travail HTML/CSS/JS autonome qui numérise les 15 outils méthodologiques du Plaidoyer Citoyen (Justice et Paix) pour devenir une référence en participation citoyenne et éducation populaire.

**Statut actuel** : 3 versions HTML existent, la plus récente (v2) a un bug JavaScript (`Cannot read properties of undefined (reading 'causes')`). Une refonte complète est nécessaire.

---

## 📊 Ressources Disponibles

| Type | Fichiers | Contenu |
|------|----------|---------|
| **Guides méthodologiques** | 2 PDF (Justice et Paix, ULB) | 15 outils VOIR-JUGER-AGIR |
| **Documentation technique** | 1 MD (21 Ko) | Stack recommandée, APIs, bonnes pratiques |
| **Doctrine stratégique** | 12 DOCX | Guerre cognitive, TSAR e-BOMBA, domination sémantique |
| **Ressources éducation permanente** | 5 PDF | Veille citoyenne, intelligence civile, PKM |
| **Prototypes HTML** | 3 fichiers | v1 (133 Ko), v2 (104 Ko), workstation (155 Ko) |

---

## 🛠️ Architecture Recommandée (du Guide)

```
STACK LÉGER — Zéro dépendances lourdes

Frontend:    Alpine.js (15 Ko) ou Petite-vue (6 Ko)
Stockage:    IndexedDB via idb (2 Ko) — offline-first
Exports:     jsPDF, docx.js, SheetJS
Visualisation: Mermaid.js, Cytoscape.js, Chart.js
PWA:         Service Worker + manifest.json
```

---

## ✅ Fonctionnalités Implémentées (versions précédentes)

1. **15 outils méthodologiques** structurés VOIR → JUGER → AGIR
2. **Sauvegarde localStorage** avec autosave
3. **Export multi-formats** : JSON, Markdown, HTML
4. **Module Veille Citoyenne** (flux RSS, journal de bord)
5. **Cartographie des acteurs** (tableau interactif)
6. **Système économique éthique** (crédits ℂ, Solid POD)
7. **Design "Résistance Digitale"** — néon, glassmorphism

---

## ❌ Problèmes Identifiés

| Problème | Impact | Solution |
|----------|--------|----------|
| Bug `.causes` undefined | App crash | Refactor de la logique arbre à problème |
| Encodage UTF-8 corrompu | Caractères illisibles (â€") | Encodage propre dès le départ |
| Export PDF/DOCX incomplet | Fonctionnalité promise non fonctionnelle | Intégrer jsPDF + docx.js correctement |
| Pas de mode offline réel | Dépendance réseau | Implémenter Service Worker |
| UX complexe | Surcharge cognitive | Simplifier, progressive disclosure |

---

## 🎯 Priorités v3.0

### Phase 1 — Socle Fonctionnel
- [ ] 15 outils avec formulaires qui fonctionnent
- [ ] Sauvegarde/chargement IndexedDB fiable
- [ ] Export JSON/Markdown/PDF fonctionnel
- [ ] Zéro bug, zéro crash

### Phase 2 — Visualisations
- [ ] Arbre à problème interactif (Mermaid.js)
- [ ] Cartographie acteurs (Cytoscape.js)
- [ ] Tableau de bord progression

### Phase 3 — Avancé
- [ ] PWA installable + offline
- [ ] Import fichiers existants
- [ ] Templates préchargés (éducation, santé, environnement)
- [ ] Export DOCX/PPTX/FHIR

---

## 💡 Vision Globale

```
┌─────────────────────────────────────────────────────────────┐
│  PLAIDOYER CITOYEN — Poste de Travail Souverain            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────┐   ┌─────────┐   ┌─────────┐                  │
│  │  VOIR   │ → │  JUGER  │ → │  AGIR   │                  │
│  │ Analyse │   │Stratégie│   │ Action  │                  │
│  └─────────┘   └─────────┘   └─────────┘                  │
│       │             │             │                        │
│  • Domino        • SWOT       • SMART                      │
│  • Profil        • PESTEL     • Messages                   │
│  • Fleur         • Arbre      • Check-list                 │
│  • Acteurs       • 5 Pourquoi • Évaluation                 │
│                  • TdC        • Pouvoir                    │
│                               • Cibles                     │
├─────────────────────────────────────────────────────────────┤
│  📤 EXPORTS: PDF | DOCX | JSON | Markdown | PPTX          │
│  💾 STOCKAGE: IndexedDB local | Solid POD (optionnel)     │
│  🌐 MODE: 100% offline | PWA installable                   │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 Prochaine Étape ?

**Option A** : Corriger le bug de la v2 et stabiliser
**Option B** : Repartir de zéro avec une architecture propre et le guide technique
**Option C** : Hybride — récupérer le meilleur des versions existantes dans une nouvelle base solide

Quelle direction veux-tu prendre ?
