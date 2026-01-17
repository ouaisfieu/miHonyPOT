# Recherche Complémentaire : Auderghem - Plateforme Mondiale de Démocratie Directe Radicale

## Les 7 Piliers Manquants pour une Souveraineté Citoyenne Active

---

## 1. PROTOCOLE SOLID : Souveraineté des Données Citoyennes

### Le Précédent Flamand : €14M investis par la Flandre

La Flandre est **la première région au monde** à implémenter Solid à l'échelle gouvernementale. Le programme **SolidLab** (2022-2026) réunit l'UGent, KU Leuven et VUB sous coordination imec, avec un budget de €14 millions.

**Athumi**, la société publique de données flamande, déploie déjà des Solid Pods pour les 6,5 millions de citoyens flamands via le "Profil Citoyen" (*Burgerprofiel*).

### Architecture Technique des Pods

```
┌─────────────────────────────────────────────────────────┐
│                    CITOYEN                              │
│         (identifié par son WebID unique)                │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                    SOLID POD                            │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │  Identité   │  │  Diplômes   │  │   Santé     │    │
│  │  (adresse)  │  │ (Learning   │  │  (PREM via  │    │
│  │             │  │  Evidence)  │  │   WeAre)    │    │
│  └─────────────┘  └─────────────┘  └─────────────┘    │
│                                                        │
│  WebACL : Contrôle d'accès granulaire par ressource   │
└─────────────────────────────────────────────────────────┘
                          │
         ┌────────────────┼────────────────┐
         ▼                ▼                ▼
┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│  Commune    │   │  Employeur  │   │  Hôpital    │
│ (lecture    │   │  (accès     │   │ (5 hôpitaux │
│  adresse)   │   │  diplômes)  │   │  BE pilotes)│
└─────────────┘   └─────────────┘   └─────────────┘
```

### Implémentation pour Auderghem

**Flux de changement d'adresse sans formulaire :**

1. Le citoyen met à jour son adresse dans son Pod personnel
2. Via son WebID, il accorde un accès en lecture à `commune.auderghem.be`
3. Le système communal récupère automatiquement les données autorisées
4. Aucun formulaire, aucune saisie répétée, conformité RGPD "Privacy by Design"

**Technologies clés :**
- **Solid-OIDC** : Protocole d'authentification décentralisé
- **WebID** : Identifiant URI unique par citoyen
- **WebACL** : Listes de contrôle d'accès sur chaque ressource RDF
- **Inrupt Enterprise Solid Server** : Serveur production-ready utilisé par Athumi

### Cas d'usage actifs en Belgique (2024-2025)

| Domaine | Partenaire | Description |
|---------|------------|-------------|
| **Diplômes** | Randstad | Partage certificats avec recruteurs en 2 clics |
| **Santé** | 5 hôpitaux BE | Stockage données PREM (Patient Experience) |
| **Médias** | VRT Sandbox | Profils utilisateurs interopérables streaming |
| **Mobilité** | Flemish Smart Data Space | Profil mobilité (permis, préférences) |

---

## 2. FHIR POUR LES SERVICES SOCIAUX DU CPAS

### Human Services Directory Implementation Guide (HL7)

L'IG **FHIR Human Services Directory** (hl7.org/fhir/us/hsds/) adapte les ressources FHIR aux services sociaux, permettant l'interopérabilité entre santé et aide sociale.

### Mapping CPAS Auderghem → FHIR

```json
{
  "resourceType": "HealthcareService",
  "id": "cpas-auderghem-aide-alimentaire",
  "active": true,
  "providedBy": {
    "reference": "Organization/cpas-auderghem",
    "display": "CPAS d'Auderghem"
  },
  "category": [{
    "coding": [{
      "system": "http://hl7.org/fhir/us/hsds/CodeSystem/human-service-category",
      "code": "food-assistance",
      "display": "Aide alimentaire"
    }]
  }],
  "location": [{
    "reference": "Location/maison-communale-auderghem"
  }],
  "eligibility": [{
    "code": {
      "text": "Revenu inférieur au seuil d'intégration sociale"
    }
  }],
  "communication": [
    {"coding": [{"code": "fr", "display": "Français"}]},
    {"coding": [{"code": "nl", "display": "Néerlandais"}]}
  ],
  "appointmentRequired": true,
  "availability": {
    "availableTime": [{
      "daysOfWeek": ["mon", "tue", "wed", "thu", "fri"],
      "availableStartTime": "08:30:00",
      "availableEndTime": "12:00:00"
    }]
  }
}
```

### Ressource Location avec accessibilité PMR

```json
{
  "resourceType": "Location",
  "id": "maison-communale-auderghem",
  "name": "Maison communale d'Auderghem",
  "address": {
    "line": ["12, rue Émile Idiers"],
    "city": "Auderghem",
    "postalCode": "1160",
    "country": "BE"
  },
  "position": {
    "longitude": 4.4276,
    "latitude": 50.8167
  },
  "extension": [{
    "url": "http://hl7.org/fhir/us/hsds/StructureDefinition/accessibility",
    "valueCodeableConcept": {
      "coding": [{
        "code": "wheelchair",
        "display": "Accès fauteuil roulant - Entrée latérale avec rampe"
      }]
    }
  }]
}
```

### Pont Santé ↔ Social

Un médecin généraliste bruxellois utilisant un logiciel compatible FHIR pourrait :
1. Identifier un patient en situation de précarité
2. Requêter les `HealthcareService` du CPAS d'Auderghem
3. Créer une `ServiceRequest` de référencement vers l'aide sociale
4. Le tout sans quitter son interface médicale habituelle

---

## 3. SECTEURS STATISTIQUES 2024 ET BeSt ADDRESS

### Données Hyper-Locales de Statbel

Statbel a publié en **avril 2025** la mise à jour du fichier d'adresses consolidé avec les secteurs statistiques 2024. Le secteur statistique est **l'unité territoriale la plus fine** pour les statistiques belges.

**Sources régionales intégrées :**
- **Flandre** : Registre des bâtiments et adresses
- **Wallonie** : ICAR (Inventaire Centralisé des Adresses et Rues)  
- **Bruxelles** : UrbIS - Adresses

### Structure des Données

Le fichier txt/SQLite contient pour chaque adresse :
- Coordonnées X-Y (Lambert 72 → WGS84 disponible)
- Code secteur statistique NIS9 (9 chiffres)
- Lien vers données socio-économiques Statbel

**Auderghem compte environ 20+ secteurs statistiques** permettant des analyses à l'échelle du pâté de maisons.

### Applications pour la Démocratie Hyper-Locale

| Application | Données utilisées |
|-------------|-------------------|
| **Budget de quartier** | Population par secteur × allocation proportionnelle |
| **Consultation de voisinage** | Délimitation automatique zone de consultation |
| **Cartographie sociale** | Revenu médian, taux de pauvreté par secteur |
| **Analyse mobilité** | Densité × distance aux transports |

### API et Formats Disponibles

```bash
# Téléchargement fichier consolidé
wget https://statbel.fgov.be/sites/default/files/files/opendata/addresses_sectors_2024.zip

# Formats: TXT (CSV-like), SQLite
# Licence: Open Data Statbel (CC-BY compatible)
```

---

## 4. GIT SCRAPING : Archives de Données Historiques

### Le Pattern Inventé par Simon Willison

Le **Git scraping** transforme GitHub en base de données versionnée gratuite. Chaque commit = un snapshot temporel des données.

### GitHub Flat Data : Solution Officielle

GitHub OCTO a lancé **Flat Data** (githubnext.com/projects/flat-data/) inspiré directement du git scraping :

```yaml
# .github/workflows/flat.yml
name: Flat Data Auderghem
on:
  schedule:
    - cron: '0 * * * *'  # Toutes les heures
  workflow_dispatch:

jobs:
  fetch-data:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: githubocto/flat@v3
        with:
          http_url: 'https://geo.irceline.be/sos/api/v1/timeseries/7119/getData'
          downloaded_filename: 'data/air-quality-herrmann-debroux.json'
```

### Flux de Données à Archiver pour Auderghem

| Source | Endpoint | Fréquence | Données |
|--------|----------|-----------|---------|
| **IRCELINE** | geo.irceline.be/sos | Horaire | NO2, PM2.5, O3 au viaduc H-D |
| **STIB** | opendata.stib-mivb.be | 15 min | Positions bus/tram temps réel |
| **Villo!** | api.jcdecaux.com | 5 min | Disponibilité vélos stations |
| **Conseil communal** | auderghem.be/conseil | Mensuel | Délibérations, votes |

### Flat Viewer : Visualisation Intégrée

Tout fichier JSON/CSV dans un repo GitHub est visualisable via `flatgithub.com/{user}/{repo}` avec :
- Filtrage interactif
- Historique des commits (diff visuel)
- Export données

### Avantages du Patrimoine Git

1. **Inaltérabilité** : Historique complet via commits SHA
2. **Reproductibilité** : Tout citoyen peut forker et vérifier
3. **Coût zéro** : GitHub Actions gratuit pour repos publics
4. **Décentralisation** : Indépendance vs plateformes régionales

---

## 5. DÉMOCRATIE LIQUIDE ET VOTE QUADRATIQUE

### LiquidFeedback et Adhocracy+

**Liquid Democracy e.V.** (Berlin) développe **adhocracy+** (liqd/adhocracy-plus sur GitHub), plateforme SaaS utilisée pour meinBerlin.de (participation citoyenne Berlin).

### Principes de la Démocratie Liquide

```
┌─────────────────────────────────────────────────────────┐
│                  VOTE DIRECT                            │
│     Le citoyen vote lui-même sur chaque question        │
└─────────────────────────────────────────────────────────┘
                          │
                          │  ou
                          ▼
┌─────────────────────────────────────────────────────────┐
│              DÉLÉGATION THÉMATIQUE                      │
│   Le citoyen délègue son vote à un expert de confiance  │
│   (ex: PAD Herrmann-Debroux → délégation à              │
│   l'association mobilité du quartier)                   │
└─────────────────────────────────────────────────────────┘
                          │
                          │  Délégation révocable
                          │  à tout moment
                          ▼
┌─────────────────────────────────────────────────────────┐
│              MÉTA-DÉLÉGATION                            │
│   Le délégué peut lui-même déléguer (chaîne)           │
└─────────────────────────────────────────────────────────┘
```

### Vote Quadratique : Exprimer l'Intensité

Dans le vote quadratique, le **coût** d'un vote augmente quadratiquement :

| Votes souhaités | Crédits nécessaires |
|-----------------|---------------------|
| 1 | 1 |
| 2 | 4 |
| 3 | 9 |
| 4 | 16 |
| 5 | 25 |

**Avantage** : Un citoyen très concerné par un sujet peut concentrer ses crédits, mais au prix de moins d'influence sur d'autres sujets. Cela révèle l'intensité des préférences.

### Implémentation JavaScript Minimale

```javascript
// Vote quadratique simplifié
class QuadraticVoting {
  constructor(totalCredits) {
    this.credits = totalCredits;
    this.votes = {};
  }
  
  vote(projectId, numVotes) {
    const cost = numVotes ** 2;
    if (cost > this.credits) {
      throw new Error(`Insuffisant: ${cost} crédits requis, ${this.credits} disponibles`);
    }
    this.credits -= cost;
    this.votes[projectId] = (this.votes[projectId] || 0) + numVotes;
    return { remaining: this.credits, votes: this.votes };
  }
}

// Exemple: Budget Partagé Auderghem
const voter = new QuadraticVoting(100); // 100 crédits par citoyen
voter.vote('projet-parc-transvaal', 5);  // Coût: 25 crédits
voter.vote('projet-piste-cyclable', 3);  // Coût: 9 crédits
voter.vote('projet-bancs-publics', 2);   // Coût: 4 crédits
// Crédits restants: 62
```

### Références Opérationnelles

| Plateforme | Usage | Caractéristiques |
|------------|-------|------------------|
| **Decidim** | Barcelone, Commission EU | Budget participatif, initiatives |
| **Democracy Earth** | Blockchain | Liquid + Quadratique |
| **Snapshot** | DAOs Ethereum | Délégation on-chain |
| **Pol.is** | vTaiwan | Consensus émergent ML |

---

## 6. USWDS + ELEVENTY : ACCESSIBILITÉ 100/100

### Template Officiel Fédéral US

Le repo **cloud-gov/pages-uswds-11ty** est le template de référence pour les sites gouvernementaux US conformes au 21st Century IDEA Act.

### Stack Technique

```
┌─────────────────────────────────────────────────────────┐
│                    ELEVENTY (11ty)                       │
│          Générateur de sites statiques Node.js          │
│          - Pas de framework côté client                 │
│          - Build time < 1 seconde pour petits sites     │
│          - Data cascade depuis JSON/API                 │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│           U.S. WEB DESIGN SYSTEM (USWDS 3.0)            │
│          - 40+ composants accessibles                   │
│          - Tokens de design (couleurs, espacement)      │
│          - WCAG 2.1 AA natif                           │
│          - Mobile-first responsive                      │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                    OUTPUT                               │
│          HTML/CSS/JS statique pur                       │
│          - Lighthouse 100/100/100/100 atteignable       │
│          - Pas de JavaScript requis pour le contenu     │
│          - Progressive enhancement                       │
└─────────────────────────────────────────────────────────┘
```

### Conformité WCAG 2.1 AA Intégrée

USWDS garantit automatiquement :
- **Contraste** : 4.5:1 minimum texte/fond
- **Navigation clavier** : Tous les éléments interactifs focusables
- **Lecteurs d'écran** : ARIA landmarks, labels, live regions
- **Responsive** : Breakpoints cohérents (mobile/tablet/desktop)

### Configuration Eleventy avec USWDS

```javascript
// .eleventy.js
module.exports = function(eleventyConfig) {
  // Données externes au build time
  eleventyConfig.addGlobalData("stibData", async () => {
    const response = await fetch("https://data.stib-mivb.brussels/api/...");
    return response.json();
  });
  
  // Shortcodes accessibles
  eleventyConfig.addShortcode("usaAlert", function(type, heading, body) {
    return `<div class="usa-alert usa-alert--${type}">
      <div class="usa-alert__body">
        <h4 class="usa-alert__heading">${heading}</h4>
        <p class="usa-alert__text">${body}</p>
      </div>
    </div>`;
  });
  
  return {
    pathPrefix: "/opendata/",
    dir: { input: "src", output: "_site" }
  };
};
```

### Score Lighthouse Cible

| Métrique | Cible | Technique |
|----------|-------|-----------|
| **Performance** | 100 | HTML statique, images optimisées, pas de JS bloquant |
| **Accessibilité** | 100 | USWDS composants natifs |
| **Best Practices** | 100 | HTTPS, CSP headers |
| **SEO** | 100 | Meta tags, structured data JSON-LD |

---

## 7. SCIENCE CITOYENNE : TELRAAM ET SENSOR.COMMUNITY

### Telraam : Le Comptage de Trafic Citoyen

**Telraam** est une entreprise belge née du projet WeCount (H2020). Le capteur S2 utilise l'IA pour compter piétons, vélos, voitures et camions depuis une fenêtre citoyenne.

**Déploiements bruxellois :**
- **Ville de Bruxelles** : 60 capteurs dont bureau du Premier ministre
- **Schaarbeek** : Monitoring métro ligne 3
- **Liège Métropole** : 24 communes

### API Telraam

```javascript
// Récupération données segment de rue
const response = await fetch(
  'https://telraam-api.net/v1/reports/traffic',
  {
    method: 'POST',
    headers: { 'X-Api-Key': 'YOUR_API_KEY' },
    body: JSON.stringify({
      segment_id: 9000004180,  // Exemple Auderghem
      period: 'monthly',
      format: 'per-hour'
    })
  }
);
const data = await response.json();
// Retourne: cars, heavy, bikes, pedestrians par heure
```

### Sensor.Community : Qualité de l'Air

**Bruxelles = 683 capteurs** citoyens Sensor.Community (anciennement Luftdaten), 4ème ville mondiale après Sofia, Berlin et Stuttgart.

**Données disponibles :**
- PM2.5 et PM10 (particules fines)
- Température, humidité
- Pression atmosphérique

### API Sensor.Community

```javascript
// Capteurs dans un rayon autour d'Auderghem
const lat = 50.8167, lon = 4.4276, radius = 2; // km
const response = await fetch(
  `https://data.sensor.community/airrohr/v1/filter/area=${lat},${lon},${radius}`
);
const sensors = await response.json();
// Retourne tous les capteurs actifs avec dernières mesures
```

### Intégration Portail Communal

```
┌─────────────────────────────────────────────────────────┐
│              PORTAIL AUDERGHEM OPENDATA                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │  TELRAAM    │  │  SENSOR.    │  │  STIB/VILLO │    │
│  │  Trafic     │  │  COMMUNITY  │  │  Mobilité   │    │
│  │  rue        │  │  Air        │  │  publique   │    │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘    │
│         │                │                │           │
│         └────────────────┴────────────────┘           │
│                          │                            │
│                          ▼                            │
│         ┌────────────────────────────────┐           │
│         │     TABLEAU DE BORD CITOYEN     │           │
│         │  - Qualité air mon quartier     │           │
│         │  - Trafic ma rue                │           │
│         │  - Prochain bus/vélo            │           │
│         └────────────────────────────────┘           │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Projet CurieuzeNeuzen (Belgique)

Le projet **CurieuzeNeuzen** (UA/VITO) a déployé 20,000 capteurs NO2 citoyens en Flandre - le plus grand projet de science citoyenne air quality en Europe. Modèle reproductible pour Bruxelles.

---

## SYNTHÈSE : BUDGET ET FAISABILITÉ

### Estimation des Coûts Annuels

| Composant | Coût estimé | Notes |
|-----------|-------------|-------|
| Hébergement Cloudflare Pages | 0 € | Gratuit jusqu'à 500 builds/mois |
| Domaine .brussels | ~25 €/an | |
| Telraam réseau 20 capteurs | ~4,000 €/an | Location via commune |
| Sensor.Community 10 kits | ~500 € (one-time) | DIY Arduino/ESP32 |
| Solid Pod pilot (via Athumi) | À négocier | Potentiellement gratuit via SolidLab |
| **TOTAL ESTIMATION** | **~12,000-16,000 €/an** | |

### Financements Mobilisables

| Source | Montant potentiel | Programme |
|--------|-------------------|-----------|
| **Innoviris** | Jusqu'à 80,000 € | GenAI Call / Co-Create |
| **Horizon Europe** | Variable | Cluster 2 Démocratie |
| **Civic Innovation Fund** | 10-12,000 € | CIVICS / Evens Foundation |
| **SolidLab** | Expertise gratuite | Partenariat recherche |

### Calendrier de Mise en Œuvre Suggéré

| Phase | Durée | Livrables |
|-------|-------|-----------|
| **P1 : Prototype** | 3 mois | Site statique 11ty + données Budget Partagé |
| **P2 : Science citoyenne** | 3 mois | Intégration Telraam + Sensor.community |
| **P3 : Interopérabilité** | 6 mois | API FHIR CPAS + DCAT-AP catalog |
| **P4 : Souveraineté** | 12 mois | Pilot Solid Pods avec Athumi |

---

## CONCLUSION

Les 7 piliers identifiés transforment le projet Auderghem d'une simple plateforme de transparence en une **infrastructure de souveraineté citoyenne** :

1. **Solid** : Le citoyen contrôle ses données, pas la commune
2. **FHIR** : Pont santé-social pour les plus vulnérables
3. **Secteurs statistiques** : Démocratie au mètre près
4. **Git scraping** : Patrimoine de données inaltérable
5. **Vote quadratique** : Intensité des préférences révélée
6. **USWDS+11ty** : Accessibilité radicale sans exclusion
7. **Science citoyenne** : Le citoyen producteur de vérité

La Flandre a investi €14M dans Solid. Auderghem peut devenir le **premier démonstrateur francophone** de cette révolution technopolitique, avec un investissement initial modeste mais un impact mondial comme référence de démocratie directe numérique.
