# Auderghem : Construire une plateforme mondiale de référence en démocratie directe numérique

**Auderghem dispose déjà d'un des budgets participatifs les plus autonomes d'Europe**, avec plus de **€500,000** gérés par des citoyens tirés au sort et **2,300+ votants** en 2023. Cette commune bruxelloise de 35,700 habitants représente un terrain d'expérimentation idéal pour une plateforme open data citoyenne révolutionnaire. L'infrastructure régionale bruxelloise offre **185+ datasets de mobilité**, des API temps réel (STIB, Villo!, qualité de l'air), et un cadre légal favorable. La faisabilité technique d'un site statique HTML/CSS/JS est démontrée par les standards fédéraux américains (USWDS + Eleventy) et les plateformes mondiales comme Decidim. Des financements Innoviris jusqu'à **€80,000** pour l'IA et les programmes Horizon Europe sont accessibles.

---

## L'écosystème participatif existant à Auderghem

La commune d'Auderghem a construit un dispositif participatif reconnu "au-delà des frontières belges" selon les déclarations officielles du conseil. L'**Assemblée des Habitants**, composée de citoyens tirés au sort pour un mandat de deux ans, co-gère le Budget Partagé via la plateforme **nous.auderghem.be**. La deuxième édition a mobilisé **33,165 votes** pour départager 367 projets soumis, dont 31 lauréats pour un budget total de €529,230.

Le territoire est structuré en **dix Assemblées de Quartier** couvrant des zones distinctes : Blankedelle-Transvaal (près de la Forêt de Soignes), Chant d'Oiseau-Luxor (quartier résidentiel cossu), Val Duchesse-Sainte Anne (site historique des prémices de l'UE), et sept autres. Chaque assemblée dispose d'une adresse email dédiée (format quartier@auderghem.brussels) et participe à la co-conception des projets municipaux.

Le site municipal actuel **auderghem.be** utilise Drupal, intègre IRISbox pour les démarches administratives, et publie déjà certaines données sur **data.gov.be** (marchés publics, rémunérations des mandataires). L'architecture bilingue français-néerlandais est complète. Les conseils communaux sont retransmis en vidéo et archivés en ligne.

---

## La mine de données régionales bruxelloises

### Portails et API disponibles immédiatement

Le **datastore.brussels** centralise les données ouvertes régionales avec un catalogue accessible via `catalog.datastore.brussels/geonetwork/srv/eng/q?_content_type=json`. Les formats proposés incluent JSON, CSV, GeoJSON, WFS, WMS, tous sous licence CC-BY 4.0 majoritairement.

| Source | Données | Endpoint API |
|--------|---------|--------------|
| **STIB/MIVB** | GTFS (90 lignes, 2,866 arrêts) | `data.stib-mivb.brussels/api/` |
| **Villo!** | 360 stations temps réel | `api.jcdecaux.com/vls/v1/stations` |
| **UrbIS** | Cartographie urbaine | `geoservices-urbis.irisnet.be/geoserver/ows` |
| **IRCELINE** | Qualité air (NO2, PM2.5, O3) | `geo.irceline.be/sos` |
| **BruGIS** | Urbanisme, PRAS, permis | `gis.urban.brussels/geoserver/ows` |
| **Mobilité** | 185 datasets | `data-mobility.irisnet.be/inspire/` |

Le portail **openpermits.brussels** permet déjà de suivre les enquêtes publiques d'urbanisme avec 2,153 alertes actives. Les données environnementales de Bruxelles Environnement couvrent les espaces verts, les zones inondables, et le bruit via WFS/WMS dédiés.

### Cadre juridique favorable

La **loi du 11 avril 1994** sur la publicité de l'administration garantit un droit constitutionnel d'accès aux documents (Article 32 Constitution belge). L'ordonnance bruxelloise sur la transition numérique impose le principe "only once" pour la collecte de données. Le RGPD belge (loi du 30 juillet 2018) fixe l'âge de consentement à 13 ans et exclut les amendes administratives pour les autorités publiques.

---

## Références mondiales de démocratie directe radicale

### Decidim : le modèle barcelonais open source

**Decidim** (decidim.org) représente la référence technique la plus aboutie. Cette plateforme Ruby on Rails (PostgreSQL, AGPL v3) équipe **400+ instances** dans 20+ pays, dont la Commission européenne. Son architecture modulaire permet :

- Processus participatifs temporisés (débats, consultations)
- Budget participatif avec vote et suivi d'exécution
- Initiatives citoyennes avec signatures numériques
- Assemblées et groupes de travail permanents

Le déploiement nécessite Ruby 3.2.7+, PostgreSQL 9.5+, Node.js 18+, et supporte Docker. La gouvernance du code est elle-même démocratique via **Metadecidim**.

### vTaiwan : le consensus par intelligence collective

Le modèle taïwanais utilise **Pol.is** (pol.is, GitHub: compdemocracy/polis) pour identifier les consensus émergents. Le processus en quatre étapes (proposition → opinion → réflexion → législation) a généré une action gouvernementale pour **80%+ des 26 sujets nationaux** traités. L'algorithme de clustering ML regroupe les participants par profils d'opinion et fait émerger les propositions à soutien transversal, dépolarisant naturellement les débats.

### Better Reykjavik : l'engagement massif

Avec **58% de la population** ayant utilisé la plateforme Your Priorities (Citizens Foundation), Reykjavik démontre qu'une participation de masse est possible. Les 700+ projets citoyens implémentés et les €2M annuels de budget participatif ("My Neighborhood") prouvent la scalabilité. Le coût opérationnel reste modeste : **€1,500-1,600/mois**.

### CONSUL : l'alternative madrilène

Madrid's CONSUL (consuldemocracy.org) équipe 500+ organisations pour 90 millions de citoyens potentiels. Le budget participatif madrilène atteint **€100M** (2018) avec 91,032 participants. Les fonctionnalités de "crowd-law" permettent le commentaire paragraphe par paragraphe des règlements.

---

## Architecture technique pour un site statique radical

### Stack recommandé : Eleventy + USWDS

Pour une plateforme purement HTML/CSS/JS, **Eleventy (11ty)** surpasse les alternatives. Ce générateur de sites statiques JavaScript permet :

```javascript
// _data/opendata.js - Fetch API au build time
const EleventyFetch = require("@11ty/eleventy-fetch");
module.exports = async function() {
  return EleventyFetch("https://datastore.brussels/api/datasets", {
    duration: "4h", type: "json"
  });
};
```

Le **U.S. Web Design System (USWDS)** fournit 40+ composants accessibles WCAG 2.1 AA. Le template officiel `cloud-gov/pages-uswds-11ty` est conforme au 21st Century IDEA Act américain et intègre la recherche, l'analytics, et le CMS.

### Données dynamiques sans backend

| Approche | Cas d'usage | Latence |
|----------|-------------|---------|
| **Build-time fetch** | Données stables (budget, élus) | 0ms runtime |
| **Client-side API** | Temps réel (transport, air) | Variable |
| **Cloudflare Workers** | Proxy, cache, edge logic | ~0ms cold start |

**Cloudflare Workers** (100K requêtes/jour gratuites, puis €5/mois pour 10M) offre la meilleure solution serverless pour les APIs dynamiques sans cold start grâce aux V8 Isolates.

### Décentralisation et censure-résistance

Le déploiement sur **IPFS** via Fleek ou Pinata garantit la résilience. La combinaison DNSLink (`_dnslink.auderghem.eth TXT "dnslink=/ipfs/Qm..."`) + domaine ENS blockchain rend le contenu techniquement incensurable. Le multi-pinning sur plusieurs services assure la redondance.

---

## Standards de données pour l'interopérabilité

### DCAT-AP 3.0 : le backbone métadonnées

Le **DCAT Application Profile européen** (semiceu.github.io/DCAT-AP) est obligatoire pour les portails publics UE. La structure en Catalog → Dataset → Distribution permet la fédération avec data.europa.eu.

```turtle
<https://auderghem.be/opendata/budget2025>
  a dcat:Dataset ;
  dct:title "Budget communal 2025"@fr ;
  dcat:distribution <https://auderghem.be/opendata/budget2025.json> .
```

### Standards sectoriels essentiels

| Domaine | Standard | Usage |
|---------|----------|-------|
| **Politique** | Popolo | Élus, votes, mandats |
| **Marchés publics** | OCDS | Cycle complet procurement |
| **Transport** | GTFS/GTFS-RT | Horaires et temps réel |
| **Géographie** | INSPIRE/GeoJSON | Cartographie, urbanisme |
| **Statistiques** | SDMX | Données socio-économiques |

Le **Belgif** (belgif.be) définit les standards REST nationaux. L'authentification citoyenne peut s'intégrer via **CSAM** (eID/itsme).

---

## Design accessible et visualisation citoyenne

### Conformité WCAG 2.1 AA obligatoire

L'ADA Title II américain (avril 2024) et la directive EU 2016/2102 imposent le niveau AA pour les sites gouvernementaux. Les principes **POUR** (Perceivable, Operable, Understandable, Robust) structurent l'implémentation.

Pour les visualisations de données, le pattern d'accessibilité critique consiste à fournir des **tableaux de données cachés** pour les lecteurs d'écran (`class="usa-sr-only"`) parallèlement aux graphiques D3.js ou Chart.js. Le **Microsoft Chart Reader** (open source) offre une navigation clavier hiérarchique des éléments de graphique.

### Palettes daltoniens-safe

Les combinaisons rouge/vert affectent ~8% des hommes. Les palettes recommandées :
- **Paul Tol** : Conçues scientifiquement pour CVD
- **Okabe-Ito** : 8 couleurs universellement distinguables
- **IBM Accessible** : Validées industriellement

Le bleu reste la couleur la plus sûre (moins affectée par les déficiences). Au-delà de la couleur, utiliser des motifs, des tirets, et des labels directs.

### Design systems gouvernementaux réutilisables

Le **GOV.UK Design System** (design-system.service.gov.uk) et l'**USWDS** offrent des composants battle-tested. Le **ONS Design System** britannique est particulièrement adapté aux visualisations statistiques. Pour les tableaux de données massifs, **TanStack Table** (headless) ou **PrimeReact DataTable** offrent pagination serveur et tri accessibles.

---

## Financements disponibles et partenariats stratégiques

### Innoviris : l'accélérateur bruxellois

| Programme | Montant | Taux |
|-----------|---------|------|
| **GenAI Call** | Jusqu'à €80,000 | Variable |
| **Start AI** | Jusqu'à €10,000 | Proof-of-concept |
| **Innovation Vouchers** | Jusqu'à €10,000 | 75% subsidy |
| **R&D Projects** | 15-70% budget | Recherche industrielle |

Le **Plan Régional d'Innovation 2021-2027** dispose de €400M. Le programme **Co-Create** finance la recherche participative sur les défis urbains.

### Fonds européens

**Horizon Europe** (€95.5B 2021-2027) inclut le Cluster 2 "Culture, Créativité et Société Inclusive" avec €800M+ pour la gouvernance démocratique. Le **Digital Europe Programme** (€7.6B) soutient les European Digital Innovation Hubs et peut co-financer jusqu'à 50%.

### Fondations civic tech

- **Civitates** (civitates-eu.org) : Catalyseur de fonds pour la démocratie européenne
- **Civic Innovation Fund** (The CIVICS) : €10-12,000/projet sur 12 mois, soutenu par Robert Bosch Stiftung et King Baudouin Foundation
- **Evens Foundation** (Anvers) : €200,000 grant-making pour la tech démocratie
- **European Democracy Shield** (Commission EU) : €9B proposés pour 2028-2034 incluant un hub civic tech

### Partenaires universitaires clés

**FARI** (VUB + ULB) réunit 300 chercheurs sur l'IA pour le bien commun. Le **Centre for Democratic Futures** (VUB) et le **Centre for Digitalisation, Democracy and Innovation** (Brussels School of Governance) offrent l'expertise académique. **Open Knowledge Belgium** anime le Civic Lab Brussels à BeCentral avec des meetups bimensuels.

---

## Profil d'Auderghem : atouts et contexte

### Données sociodémographiques (IBSA janvier 2025)

| Indicateur | Auderghem | Région |
|------------|-----------|--------|
| **Population** | 35,698 | 1,255,795 |
| **Revenu médian** | €30,113 | €24,488 |
| **Taux d'emploi** | 63.4% | 56.5% |
| **65+ ans** | 16.6% | 13.1% |
| **Étrangers** | 32.1% | 37.2% |

Auderghem est la **2ème commune la plus riche** de Bruxelles (€31,185 revenu disponible), après Woluwe-Saint-Pierre. Le taux de pauvreté (3.4% RIS) est moitié moindre que la moyenne régionale.

### Patrimoine et identité

Le **Rouge-Cloître** (fondé 1366), ancienne abbaye augustinienne à l'entrée de la Forêt de Soignes (UNESCO), abrite aujourd'hui un centre d'art et des ateliers d'artistes. Le **Val Duchesse** accueillit les négociations de 1956 préparant le Traité de Rome. La forte communauté japonaise (~2,700 dans la région) est attirée par l'École Japonaise de Bruxelles.

### Infrastructure numérique

Proximus prévoit **100% de couverture fibre** pour la Région bruxelloise d'ici fin 2026, incluant Auderghem. Le WiFi public régional (wifi.brussels) et les espaces publics numériques (DPS) garantissent l'inclusion numérique. La bourgmestre Sophie de Vos (DéFI) détient explicitement le portefeuille **"Participation Citoyenne"**.

---

## Conclusion : une opportunité de leadership mondial

Auderghem réunit les conditions uniques pour devenir une référence mondiale en démocratie directe numérique. L'infrastructure participative existante (**Budget Partagé €500K+, 10 assemblées de quartier, plateforme nous.auderghem.be**) fournit la base citoyenne. L'écosystème régional bruxellois offre **185+ datasets ouverts** avec APIs temps réel. Les standards techniques sont matures : **Eleventy + DCAT-AP + Decidim modules** permettent un site 100% statique performant et accessible.

Les financements Innoviris (€80K GenAI), Horizon Europe (Cluster 2 démocratie), et les fondations (Civitates, CIF) rendent le projet économiquement viable. Le partenariat avec FARI (VUB-ULB) apporterait la rigueur académique.

La prochaine étape concrète serait de déployer un **proof-of-concept Eleventy** intégrant les données du Budget Partagé existant, les flux STIB/qualité de l'air, et les délibérations du conseil communal — démontrant en 3 mois la faisabilité d'une plateforme radicalement transparente, accessible, et reproductible par toute commune européenne.
