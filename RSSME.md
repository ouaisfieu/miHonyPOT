# 📡 Guide : Générer des Flux RSS pour GitHub Pages

Ce guide présente **4 méthodes** pour générer des flux RSS à partir de vos GitHub Pages, de la plus simple à la plus avancée.

---

## 📋 Table des matières

1. [Méthode 1 : Fichier RSS statique](#méthode-1--fichier-rss-statique-manuel)
2. [Méthode 2 : GitHub Actions automatique](#méthode-2--github-actions-automatique)
3. [Méthode 3 : Jekyll avec jekyll-feed](#méthode-3--jekyll-avec-jekyll-feed)
4. [Méthode 4 : Services tiers](#méthode-4--services-tiers)
5. [URLs de vos flux](#urls-de-vos-flux)
6. [Intégration dans le Poste de Travail Plaidoyer](#intégration)

---

## Méthode 1 : Fichier RSS statique (manuel)

**Avantages** : Simple, aucune dépendance, contrôle total  
**Inconvénients** : Mise à jour manuelle nécessaire

### Étapes :

1. Copiez le fichier `feed.xml` fourni à la racine de votre repo
2. Éditez-le pour ajouter/modifier les items
3. Commitez et pushez

### Structure du fichier RSS 2.0 :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Titre de votre site</title>
    <link>https://username.github.io/repo</link>
    <description>Description du flux</description>
    <language>fr</language>
    <atom:link href="https://username.github.io/repo/feed.xml" rel="self" type="application/rss+xml"/>
    
    <item>
      <title>Titre de l'article</title>
      <link>https://username.github.io/repo/page.html</link>
      <description>Description de l'article</description>
      <pubDate>Mon, 20 Jan 2025 10:00:00 +0000</pubDate>
      <guid>https://username.github.io/repo/page.html</guid>
    </item>
    
  </channel>
</rss>
```

---

## Méthode 2 : GitHub Actions automatique ⭐ RECOMMANDÉ

**Avantages** : Automatique, scan tout le repo, multi-formats  
**Inconvénients** : Nécessite de comprendre GitHub Actions

### Installation :

1. Créez le dossier `.github/workflows/` dans votre repo
2. Copiez le fichier `generate-feeds.yml` dedans
3. Commitez et pushez
4. Le workflow se déclenche automatiquement !

### Configuration :

Éditez les variables dans le fichier YAML :

```javascript
const CONFIG = {
  siteUrl: 'https://ouaisfieu.github.io/miHonyPOT',  // Votre URL
  title: 'Titre de votre site',
  description: 'Description',
  language: 'fr-BE',
  excludeDirs: ['.git', 'node_modules', 'img'],  // Dossiers à ignorer
  includeExtensions: ['.html', '.md'],  // Extensions à inclure
  maxItems: 100  // Nombre max d'items
};
```

### Ce que ça génère :

| Fichier | Format | Usage |
|---------|--------|-------|
| `feed.xml` | RSS 2.0 | Agrégateurs classiques |
| `atom.xml` | Atom 1.0 | Feedly, Inoreader |
| `feed.json` | JSON Feed 1.1 | Applications modernes |
| `feeds.opml` | OPML 2.0 | Import dans agrégateurs |
| `{dossier}/feed.xml` | RSS 2.0 | Un flux par section |

### Déclenchement :

- **Automatique** : À chaque push sur `main`
- **Planifié** : Tous les jours à minuit UTC
- **Manuel** : Onglet "Actions" → "Run workflow"

---

## Méthode 3 : Jekyll avec jekyll-feed

**Avantages** : Intégré à GitHub Pages, gère les posts nativement  
**Inconvénients** : Structure Jekyll requise

### Prérequis :

Votre site doit utiliser Jekyll (le générateur par défaut de GitHub Pages).

### Installation :

1. Créez `_config.yml` à la racine :

```yaml
title: "miHonyPOT"
description: "Veille Citoyenne & Intelligence Civile"
url: "https://ouaisfieu.github.io"
baseurl: "/miHonyPOT"

plugins:
  - jekyll-feed
  - jekyll-sitemap

feed:
  path: feed.xml
  posts_limit: 50
```

2. Créez un dossier `_posts/` pour vos articles :

```
_posts/
  2025-01-20-titre-article.md
  2025-01-19-autre-article.md
```

3. Chaque fichier doit avoir un front matter :

```markdown
---
layout: post
title: "Titre de l'article"
date: 2025-01-20 10:00:00 +0100
categories: veille belgique
---

Contenu de l'article en Markdown...
```

4. GitHub Pages génère automatiquement `/feed.xml`

---

## Méthode 4 : Services tiers

Si vous ne voulez pas gérer de code, utilisez des services qui génèrent des flux RSS à partir de n'importe quelle page web.

### Services gratuits :

| Service | URL | Fonctionnalités |
|---------|-----|-----------------|
| **RSS.app** | https://rss.app | Génère RSS depuis URL, surveillance auto |
| **Feedity** | https://feedity.com | Scraping intelligent |
| **FetchRSS** | https://fetchrss.com | Simple et rapide |
| **Feed43** | https://feed43.com | Regex avancées |

### Exemple avec RSS.app :

1. Allez sur https://rss.app/rss-feed/create
2. Entrez `https://ouaisfieu.github.io/miHonyPOT/belgium/`
3. Obtenez un flux comme `https://rss.app/feeds/xxx.xml`

---

## URLs de vos flux

Une fois configuré, vos flux seront accessibles à :

```
📡 FLUX PRINCIPAL
https://ouaisfieu.github.io/miHonyPOT/feed.xml     (RSS 2.0)
https://ouaisfieu.github.io/miHonyPOT/atom.xml     (Atom)
https://ouaisfieu.github.io/miHonyPOT/feed.json    (JSON Feed)
https://ouaisfieu.github.io/miHonyPOT/feeds.opml   (Liste OPML)

📁 FLUX PAR SECTION
https://ouaisfieu.github.io/miHonyPOT/belgium/feed.xml
https://ouaisfieu.github.io/miHonyPOT/ccplc/feed.xml
https://ouaisfieu.github.io/miHonyPOT/e-bomba/feed.xml
https://ouaisfieu.github.io/miHonyPOT/fraude/feed.xml
https://ouaisfieu.github.io/miHonyPOT/poli-kao/feed.xml
https://ouaisfieu.github.io/miHonyPOT/science/feed.xml
https://ouaisfieu.github.io/miHonyPOT/topo/feed.xml
https://ouaisfieu.github.io/miHonyPOT/wor/feed.xml
```

---

## Intégration

### Dans vos pages HTML

Ajoutez dans le `<head>` pour la découverte automatique :

```html
<link rel="alternate" type="application/rss+xml" 
      title="RSS Feed" 
      href="https://ouaisfieu.github.io/miHonyPOT/feed.xml">

<link rel="alternate" type="application/atom+xml" 
      title="Atom Feed" 
      href="https://ouaisfieu.github.io/miHonyPOT/atom.xml">
```

### Dans le Poste de Travail Plaidoyer Citoyen

Ajoutez ces flux dans la section "Veille RSS" :

```javascript
const feeds = [
  { 
    name: 'miHonyPOT — Tout', 
    url: 'https://ouaisfieu.github.io/miHonyPOT/feed.xml',
    icon: '📡',
    category: 'veille'
  },
  { 
    name: 'Belgium', 
    url: 'https://ouaisfieu.github.io/miHonyPOT/belgium/feed.xml',
    icon: '🇧🇪',
    category: 'belgique'
  },
  // ... autres flux
];
```

---

## 🛠️ Outils fournis

| Fichier | Description |
|---------|-------------|
| `feed-generator.html` | Interface web pour générer vos flux |
| `feed.xml` | Flux RSS prêt à l'emploi pour miHonyPOT |
| `generate-feeds.yml` | Workflow GitHub Actions complet |
| `README.md` | Ce guide |

---

## 📚 Ressources

- [Spécification RSS 2.0](https://www.rssboard.org/rss-specification)
- [Spécification Atom 1.0](https://datatracker.ietf.org/doc/html/rfc4287)
- [JSON Feed 1.1](https://www.jsonfeed.org/version/1.1/)
- [Jekyll Feed Plugin](https://github.com/jekyll/jekyll-feed)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

## ❓ FAQ

**Q: Le flux ne se met pas à jour ?**  
R: Vérifiez que GitHub Actions est activé (onglet Actions du repo).

**Q: Puis-je avoir plusieurs flux ?**  
R: Oui ! Le workflow génère un flux par dossier automatiquement.

**Q: Comment ajouter un nouvel article au flux ?**  
R: Créez simplement un fichier .html ou .md dans un dossier. Le workflow détectera le changement.

**Q: Les images apparaissent dans le flux ?**  
R: RSS 2.0 supporte les images via `<enclosure>`. Le workflow les détecte dans vos pages.

---

*Généré pour le projet miHonyPOT — Collectif Citoyen*
