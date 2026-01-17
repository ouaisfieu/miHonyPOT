# CHECKLIST D'IMPLÉMENTATION COMPLÈTE
## Auderghem : Pôle Central Mondial de la Démocratie Directe

---

# PARTIE A : CE QUI A ÉTÉ COUVERT

## ✅ Recherche initiale (Document 1)
- [x] Données démographiques Auderghem (35,698 hab., 16,6% 65+)
- [x] Budget Partagé existant (€529K, 2,300 votants)
- [x] 10 Assemblées de Quartier + Assemblée des Habitants
- [x] 185+ datasets régionaux Brussels Open Data
- [x] Benchmarks internationaux (Decidim, vTaiwan, Reykjavik, CONSUL)
- [x] Stack technique proposé (Eleventy + USWDS)
- [x] Sources financement (Innoviris €80K, Horizon Europe)
- [x] Accessibilité WCAG 2.1 AA

## ✅ 7 Piliers complémentaires (Document 2)
- [x] Solid Protocol (SolidLab Flanders, Athumi, €14M investissement)
- [x] FHIR pour services sociaux CPAS
- [x] Secteurs statistiques 2024 + BeSt Address
- [x] Git scraping (GitHub Flat Data)
- [x] Démocratie liquide + vote quadratique
- [x] USWDS + Eleventy (Lighthouse 100/100)
- [x] Science citoyenne (Telraam, Sensor.community)
- [x] Estimation budget €12-16K/an

## ✅ Analyse des angles morts (Document 3)
- [x] Portage politique (Sophie de Vos, nouvelle majorité DéFI+MR)
- [x] Base citoyenne mobilisée
- [x] Théorie du changement
- [x] Catalyseur/urgence (viaduc Herrmann-Debroux)
- [x] Capacité institutionnelle
- [x] Récit et positionnement mondial
- [x] Modèle économique
- [x] Risques et détracteurs
- [x] Calendrier
- [x] Écosystème partenaires

---

# PARTIE B : CE QUI MANQUE ENCORE

---

## 1. 📜 CADRE JURIDIQUE BELGE DÉTAILLÉ

### 1.1 Constitution et limites
**Contrainte fondamentale** : L'article 33 de la Constitution belge dispose que tous les pouvoirs émanent de la Nation. Les référendums contraignants sont inconstitutionnels en Belgique.

**Ce qui est légalement possible** :
| Mécanisme | Base légale | Contraignant ? |
|-----------|-------------|----------------|
| Consultation populaire communale | NLC art. 318-329 | NON |
| Droit d'interpellation | NLC art. 317/1-3 | NON |
| Conseils consultatifs | NLC art. 120bis | NON |
| Budget participatif | Aucune (usage) | NON |
| Panels citoyens tirés au sort | Ordonnance 2024 RBC | NON |

### 1.2 Procédure consultation populaire à Bruxelles
**Articles 318-329 Nouvelle Loi Communale** :
- Initiée par conseil communal OU par pétition citoyenne
- Seuil pétition : 10% habitants (≈3,500 pour Auderghem)
- Participation dès 16 ans
- Quorum dépouillement : 10% (≈3,500)
- Vote un dimanche, 8h-13h
- Résultat **consultatif uniquement**
- Interdit 16 mois avant élections communales

### 1.3 Modèle Ostbelgien (transposable ?)
La Communauté germanophone a créé un **Dialogue Citoyen Permanent** (décret 25/02/2019) :
- Conseil Citoyen de 24 membres tirés au sort
- Peut organiser jusqu'à 3 panels citoyens/mandat
- Recommandations présentées au Parlement
- Suivi obligatoire des recommandations

**Transposition à Auderghem** : Nécessiterait une modification du règlement d'ordre intérieur du conseil communal + délibération formelle.

### 1.4 Ce qui manque : Avis juridique formel
- [ ] **Consultation d'un avocat spécialisé en droit public belge**
- [ ] Analyse de légalité d'un "règlement de participation citoyenne" local
- [ ] Possibilité de créer un "Conseil Citoyen Permanent" par voie réglementaire
- [ ] Limites du pouvoir discrétionnaire du conseil communal

---

## 2. 🏗️ ARCHITECTURE TECHNIQUE COMPLÈTE

### 2.1 Stack "Democracy Tech" manquant

Notre conversation a couvert le frontend (Eleventy/USWDS) mais pas :

| Composant | Solution proposée | Statut |
|-----------|-------------------|--------|
| **Frontend statique** | Eleventy + USWDS | ✅ Couvert |
| **Plateforme participation** | Decidim ou CONSUL | ❌ Non détaillé |
| **Authentification** | itsme / eID / FAS | ❌ Non détaillé |
| **Vote sécurisé** | ? | ❌ Non couvert |
| **Délibération** | Pol.is / All Our Ideas | ❌ Non couvert |
| **Tirage au sort** | Sortition Foundation tools | ❌ Non couvert |
| **Data sovereignty** | Solid Pods | ✅ Couvert |
| **API Gateway** | Kong / Tyk | ❌ Non couvert |
| **Monitoring** | Prometheus + Grafana | ❌ Non couvert |

### 2.2 Decidim : Configuration détaillée manquante

**Decidim** est la plateforme la plus mature (Barcelona, Commission européenne, NYC).

```yaml
# decidim.auderghem.brussels - Configuration requise
decidim:
  version: "0.28.x"
  modules:
    - decidim-proposals        # Propositions citoyennes
    - decidim-budgets          # Budget participatif
    - decidim-meetings         # Réunions physiques/hybrides
    - decidim-sortitions       # Tirage au sort
    - decidim-accountability   # Suivi des engagements
    - decidim-conferences      # Événements
    - decidim-elections        # Vote sécurisé (Vocdoni)
  
  authentication:
    - provider: "itsme"        # eID belge
    - provider: "fas"          # Federal Authentication Service
    - census_verification: true # Vérification registre population
  
  languages:
    - fr
    - nl
    
  customization:
    theme: "auderghem-democracy"
    logo: "/assets/logo-auderghem.svg"
```

**Ce qui manque** :
- [ ] Évaluation comparative Decidim vs CONSUL vs solution custom
- [ ] Estimation coût déploiement Decidim (hébergement, maintenance)
- [ ] Plan de formation administrateurs communaux
- [ ] Intégration avec systèmes existants (website commune, IRISbox)

### 2.3 Authentification citoyenne

**Problème non résolu** : Comment vérifier qu'un participant est bien habitant d'Auderghem ?

**Options** :
| Méthode | Avantage | Inconvénient |
|---------|----------|--------------|
| **itsme** | Standard belge, sécurisé | Coût par transaction |
| **eID + lecteur** | Gratuit | Friction élevée |
| **CSAM/FAS** | Gratuit, fédéral | Complexité intégration |
| **Code postal vérifié** | Simple | Fraude possible |
| **Registre population** | Authentique | Accès données sensibles |

**Ce qui manque** :
- [ ] Contact avec BOSA (SPF Stratégie et Appui) pour intégration CSAM
- [ ] Devis itsme pour volume estimé
- [ ] Politique de vérification d'identité respectant RGPD

### 2.4 Infrastructure de vote

**Pour les décisions formelles** (budget participatif, consultations) :

Options open source :
- **Vocdoni** : Blockchain-based, intégré à Decidim
- **Helios** : Verification cryptographique
- **CIVS** : Condorcet method

**Ce qui manque** :
- [ ] Analyse sécurité des solutions de vote
- [ ] Audit indépendant requis ?
- [ ] Conformité CNIL/APD pour données de vote

---

## 3. 🧠 OUTILS DE DÉLIBÉRATION COLLECTIVE

### 3.1 Pol.is (Taiwan, vTaiwan)
Algorithme de clustering des opinions pour identifier consensus.

**Caractéristiques** :
- Open source (github.com/compdemocracy/polis)
- Visualisation temps réel des groupes d'opinion
- Identification des points de consensus inter-groupes
- Utilisé pour Taiwan AI policy, New Jersey AI policy

**Application Auderghem** : Consultation PAD Herrmann-Debroux

**Ce qui manque** :
- [ ] Instance Pol.is hébergée
- [ ] Traduction interface FR/NL
- [ ] Formation facilitateurs

### 3.2 All Our Ideas (Princeton)
Comparaison pairwise pour priorisation.

**Application** : Prioriser projets Budget Partagé

### 3.3 Loomio
Délibération asynchrone avec prise de décision.

**Ce qui manque** :
- [ ] Comparatif outils de délibération
- [ ] Choix et justification
- [ ] Budget hébergement/maintenance

---

## 4. 👥 PROCESSUS DE TIRAGE AU SORT

### 4.1 Méthodologie sortition

**Modèle Ostbelgien** :
1. Extraction aléatoire registre population (1,000 invitations)
2. Candidatures volontaires parmi invités
3. Sélection finale stratifiée (genre, âge, quartier, niveau d'études)
4. Panel de 25-75 citoyens

**Outils** :
- **Sortition Foundation** : Méthodologie + logiciel
- **Registre national** : Accès via commune

**Ce qui manque** :
- [ ] Convention avec administration communale pour accès registre
- [ ] Logiciel de tirage au sort auditable
- [ ] Protocole de stratification démographique
- [ ] Budget indemnisation participants (€64/session modèle Ostbelgien)

### 4.2 Facilitation délibérative

**Formation requise** :
- Facilitation de débats contradictoires
- Gestion des dynamiques de groupe
- Neutralité politique
- Accessibilité (LSF, langues, handicaps)

**Partenaires potentiels** :
- G1000 Belgium (David Van Reybrouck)
- Fondation Roi Baudouin
- Missions Publiques

**Ce qui manque** :
- [ ] Identification facilitateurs locaux
- [ ] Budget formation (€3-5K estimé)
- [ ] Pool de facilitateurs certifiés

---

## 5. 📊 SYSTÈME DE DONNÉES COMPLET

### 5.1 Data Pipeline manquant

```
┌─────────────────┐     ┌──────────────┐     ┌─────────────────┐
│ Sources données │────▶│ ETL Pipeline │────▶│ Data Warehouse  │
│ - STIB API      │     │ - Airflow    │     │ - PostgreSQL    │
│ - IRCELINE      │     │ - dbt        │     │ - TimescaleDB   │
│ - Telraam       │     │              │     │                 │
│ - UrbIS         │     └──────────────┘     └────────┬────────┘
│ - Commune       │                                   │
└─────────────────┘                                   ▼
                                              ┌─────────────────┐
                                              │ API publique    │
                                              │ - REST/GraphQL  │
                                              │ - DCAT-AP       │
                                              └────────┬────────┘
                                                       │
                          ┌────────────────────────────┼────────────────────────────┐
                          ▼                            ▼                            ▼
                   ┌─────────────┐             ┌─────────────┐             ┌─────────────┐
                   │ Dashboard   │             │ Decidim     │             │ Solid Pods  │
                   │ citoyen     │             │ Platform    │             │ citoyens    │
                   └─────────────┘             └─────────────┘             └─────────────┘
```

**Ce qui manque** :
- [ ] Choix stack data (Airflow vs Dagster vs Prefect)
- [ ] Modèle de données unifié
- [ ] Politique de rafraîchissement
- [ ] Gouvernance données (qui peut modifier quoi)

### 5.2 Catalogue DCAT-AP

**Standard européen** pour métadonnées opendata.

```json
{
  "@context": "https://www.w3.org/ns/dcat#",
  "@type": "Catalog",
  "title": "Open Data Auderghem",
  "publisher": {
    "@type": "Organization",
    "name": "Commune d'Auderghem"
  },
  "dataset": [
    {
      "@type": "Dataset",
      "title": "Budget Partagé 2024 - Projets",
      "distribution": {
        "accessURL": "https://data.auderghem.brussels/budget-partage-2024.json"
      }
    }
  ]
}
```

**Ce qui manque** :
- [ ] Inventaire complet des données communales
- [ ] Classification sensibilité (public/restreint/confidentiel)
- [ ] Processus publication automatisée

---

## 6. 🌐 INTEROPÉRABILITÉ RÉGIONALE

### 6.1 Intégrations manquantes

| Système | API | Usage | Statut |
|---------|-----|-------|--------|
| **IRISbox** | ? | Guichet électronique régional | ❌ Non documenté |
| **Nova** | ? | Urbanisme Région BXL | ❌ Non documenté |
| **Be-Alert** | ? | Alertes citoyennes | ❌ Non documenté |
| **Fix My Street** | REST | Signalements | ✅ Documenté |
| **STIB Open Data** | REST | Mobilité | ✅ Documenté |
| **Bruxelles Environnement** | ? | Données environnement | ❌ Non documenté |

**Ce qui manque** :
- [ ] Cartographie complète des systèmes communaux existants
- [ ] Documentation APIs régionales
- [ ] Plan d'intégration progressive

### 6.2 Fédération avec autres communes

**Vision** : Auderghem comme pilote, puis extension aux 18 autres communes bruxelloises.

**Prérequis** :
- Architecture multi-tenant
- Gouvernance partagée du code
- Financement mutualisé

**Modèle** : Association intercommunale ou convention Brulocalis

**Ce qui manque** :
- [ ] Contact Brulocalis pour explorer mutualisation
- [ ] Modèle juridique association
- [ ] Plan de gouvernance partagée

---

## 7. 🎓 FORMATION ET ACCOMPAGNEMENT

### 7.1 Publics cibles

| Public | Besoins formation | Durée estimée |
|--------|-------------------|---------------|
| **Élus** | Vision stratégique, cadre légal | 1 jour |
| **Administration** | Outils techniques, modération | 3 jours |
| **Facilitateurs** | Délibération, tirage au sort | 5 jours |
| **Citoyens** | Utilisation plateforme | 2h (en continu) |

### 7.2 Matériel pédagogique

**Ce qui manque** :
- [ ] Guide utilisateur plateforme (FR/NL)
- [ ] Tutoriels vidéo
- [ ] FAQ
- [ ] Support téléphonique/chat
- [ ] Permanences physiques (médiathèque, maison communale)

### 7.3 Inclusion numérique

**Population à risque d'exclusion** :
- 65+ ans (16,6% Auderghem)
- Non-francophones/néerlandophones
- Personnes en situation de handicap
- Ménages sans connexion internet

**Solutions** :
- Kiosques physiques maison communale
- Accompagnement par agents communaux
- Version papier pour consultations majeures
- Interprètes LSF pour panels citoyens

**Ce qui manque** :
- [ ] Diagnostic fracture numérique Auderghem
- [ ] Partenariat avec EPN (Espace Public Numérique)
- [ ] Budget médiation numérique

---

## 8. 📈 INDICATEURS DE SUCCÈS

### 8.1 KPIs manquants

| Dimension | Indicateur | Cible | Source |
|-----------|------------|-------|--------|
| **Participation** | % habitants actifs/an | >10% | Plateforme |
| **Diversité** | Représentativité démographique | ±5% population | Plateforme |
| **Qualité** | Taux de propositions argumentées | >70% | Analyse manuelle |
| **Impact** | Propositions implémentées | >50% | Suivi conseil |
| **Confiance** | Score confiance institutions | +10 points | Sondage annuel |
| **Coût** | €/citoyen engagé | <€5 | Budget |

### 8.2 Évaluation externe

**Ce qui manque** :
- [ ] Convention avec institution recherche (FARI, ULB, VUB)
- [ ] Protocole évaluation scientifique
- [ ] Publication résultats open access

---

## 9. 🌍 STRATÉGIE DE RAYONNEMENT MONDIAL

### 9.1 Positionnement unique

**Proposition de valeur différenciante** :

> "Auderghem : Première plateforme de démocratie directe **francophone** intégrant la souveraineté des données (Solid), au cœur de la **capitale européenne**, avec un cadre légal **belge innovant** (modèle Ostbelgien adapté), démontrant la faisabilité pour **toute commune européenne de taille moyenne**."

### 9.2 Actions de visibilité manquantes

| Action | Cible | Timing |
|--------|-------|--------|
| **Publication académique** | Chercheurs démocratie | Année 2 |
| **Conférence internationale** | Praticiens civic tech | Année 3 |
| **Decidim Fest** | Communauté Decidim | Année 2 |
| **Prix innovation** | Smart Cities Expo | Année 2 |
| **Visite d'étude** | Autres communes | Année 3+ |
| **Documentation open source** | Développeurs | Continu |

### 9.3 Réseau international

**Organisations à contacter** :
- [ ] Decidim Association (Barcelona)
- [ ] Democracy Technologies (democracytechnologies.org)
- [ ] Participedia (database of democratic innovations)
- [ ] OECD Open Government
- [ ] Council of Europe - Congress of Local Authorities
- [ ] CIVICUS Digital Democracy Initiative

**Ce qui manque** :
- [ ] Plan communication international
- [ ] Budget déplacements/conférences
- [ ] Personne dédiée relations internationales

---

## 10. 💰 BUDGET DÉTAILLÉ COMPLET

### 10.1 Investissement initial (Année 1)

| Poste | Estimation basse | Estimation haute |
|-------|------------------|------------------|
| **Développement plateforme** | €30,000 | €80,000 |
| Decidim installation + personnalisation | €15,000 | €40,000 |
| Intégration authentification | €5,000 | €15,000 |
| Dashboard données | €10,000 | €25,000 |
| **Infrastructure** | €5,000 | €15,000 |
| Hébergement cloud (année 1) | €3,000 | €10,000 |
| Domaine + certificats | €200 | €500 |
| Services tiers (itsme, etc.) | €2,000 | €5,000 |
| **Accompagnement** | €20,000 | €50,000 |
| Consultant civic tech | €10,000 | €30,000 |
| Formation administration | €5,000 | €10,000 |
| Facilitation panels citoyens | €5,000 | €10,000 |
| **Communication** | €5,000 | €15,000 |
| Design identité visuelle | €2,000 | €5,000 |
| Campagne lancement | €3,000 | €10,000 |
| **Évaluation** | €5,000 | €15,000 |
| Partenariat recherche | €5,000 | €15,000 |
| **TOTAL ANNÉE 1** | **€65,000** | **€175,000** |

### 10.2 Fonctionnement récurrent (Année 2+)

| Poste | Estimation/an |
|-------|---------------|
| Hébergement + maintenance | €10,000 - €25,000 |
| Maintenance applicative | €15,000 - €30,000 |
| Médiation numérique (0.5 ETP) | €25,000 - €35,000 |
| Facilitation panels (3/an) | €15,000 - €25,000 |
| Communication | €5,000 - €10,000 |
| **TOTAL RÉCURRENT** | **€70,000 - €125,000/an** |

### 10.3 Sources de financement identifiées

| Source | Montant potentiel | Probabilité | Statut |
|--------|-------------------|-------------|--------|
| Innoviris Co-Create | €50,000 - €80,000 | Moyenne | ❌ Non déposé |
| Innoviris GenAI Call | €50,000 - €80,000 | Moyenne | ❌ Non déposé |
| Horizon Europe Cluster 2 | €100,000 - €500,000 | Faible | ❌ Non identifié |
| Digital Europe Programme | Variable | Faible | ❌ Non identifié |
| Fondation Roi Baudouin | €10,000 - €30,000 | Moyenne | ❌ Non contacté |
| Budget communal Auderghem | Variable | À négocier | ❌ Non discuté |
| SolidLab (in-kind) | Expertise | Haute | ❌ Non contacté |

**Ce qui manque** :
- [ ] Dossier de candidature Innoviris
- [ ] Business plan financier 5 ans
- [ ] Engagement budgétaire commune

---

## 11. ⚖️ GOUVERNANCE DU PROJET

### 11.1 Structure juridique

**Options** :
| Structure | Avantage | Inconvénient |
|-----------|----------|--------------|
| **Service communal** | Légitimité, budget | Dépendance politique |
| **ASBL** | Indépendance | Financement précaire |
| **Coopérative** | Participation citoyenne | Complexité |
| **Fondation d'utilité publique** | Pérennité | Rigidité |
| **Intercommunale** | Mutualisation | Lenteur |

**Recommandation** : Commencer en service communal, puis évoluer vers ASBL ou intercommunale selon succès.

### 11.2 Organes de gouvernance

```
┌─────────────────────────────────────────────────────────────┐
│                 COMITÉ DE PILOTAGE                          │
│  - Bourgmestre ou délégué                                   │
│  - 2 élus (majorité + opposition)                           │
│  - 2 fonctionnaires communaux                               │
│  - 3 citoyens tirés au sort                                 │
│  - 1 expert externe                                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                 ÉQUIPE OPÉRATIONNELLE                       │
│  - Chef de projet (0.5-1 ETP)                               │
│  - Développeur/admin système (prestataire ou mutualisé)     │
│  - Médiateur numérique (0.5 ETP)                            │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                 CONSEIL CITOYEN                             │
│  24 citoyens tirés au sort (rotation annuelle)              │
│  Rôle : définir agenda, évaluer, recommander                │
└─────────────────────────────────────────────────────────────┘
```

**Ce qui manque** :
- [ ] Projet de règlement de gouvernance
- [ ] Charte éthique
- [ ] Procédure de résolution des conflits

---

## 12. 📅 ROADMAP OPÉRATIONNELLE

### Phase 0 : Validation (Mois 1-3)
- [ ] Rencontre cabinet Sophie de Vos
- [ ] Note d'intention au collège
- [ ] Identification porteur interne (fonctionnaire champion)
- [ ] Constitution groupe de travail informel

### Phase 1 : Fondation (Mois 4-9)
- [ ] Délibération conseil communal (mandat + budget)
- [ ] Recrutement/affectation chef de projet
- [ ] Dépôt candidature Innoviris
- [ ] Contact SolidLab + FARI
- [ ] Cahier des charges technique

### Phase 2 : Prototype (Mois 10-15)
- [ ] Déploiement Decidim instance test
- [ ] Intégration données Budget Partagé 2025
- [ ] Test utilisateurs (50 citoyens volontaires)
- [ ] Premier panel citoyen pilote (PAD Herrmann-Debroux ?)
- [ ] Itération sur retours

### Phase 3 : Lancement (Mois 16-18)
- [ ] Campagne communication grand public
- [ ] Formation administration
- [ ] Ouverture plateforme
- [ ] Premier cycle consultation officiel

### Phase 4 : Consolidation (Année 2)
- [ ] Intégration Telraam + Sensor.community
- [ ] API FHIR CPAS (pilote)
- [ ] Évaluation externe
- [ ] Ajustements gouvernance

### Phase 5 : Rayonnement (Année 3+)
- [ ] Documentation open source complète
- [ ] Première commune partenaire
- [ ] Conférence internationale Auderghem
- [ ] Candidature prix innovation

---

## 13. 🚨 RISQUES ET MITIGATIONS

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| Changement majorité politique | Moyenne | Critique | Structure indépendante, multipartite |
| Faible participation | Haute | Élevé | Campagne communication, médiation |
| Cyberattaque | Faible | Critique | Audit sécurité, hébergement souverain |
| Manipulation/brigading | Moyenne | Élevé | Authentification forte, modération |
| Fatigue participative | Moyenne | Moyen | Consultations ciblées, pas continues |
| Fracture numérique | Haute | Moyen | Kiosques physiques, accompagnement |
| Dépassement budget | Moyenne | Moyen | Phasage, financements multiples |
| Résistance administrative | Moyenne | Élevé | Formation, quick wins |

---

## 14. 📞 CONTACTS À ÉTABLIR

### Priorité 1 (immédiat)
- [ ] **Cabinet Sophie de Vos** - Portage politique
- [ ] **Service Participation Citoyenne Auderghem** - Ancrage administratif
- [ ] **Innoviris** - Financement (gestionnaire programmes)

### Priorité 2 (mois 1-3)
- [ ] **SolidLab Flanders** - Expertise Solid (Prof. Ruben Verborgh, UGent)
- [ ] **FARI** - Partenariat recherche
- [ ] **Open Knowledge Belgium** - Communauté civic tech
- [ ] **G1000 Belgium** - Expertise délibération (David Van Reybrouck)

### Priorité 3 (mois 3-6)
- [ ] **Decidim Association** - Communauté plateforme
- [ ] **Brulocalis** - Réseau communes bruxelloises
- [ ] **Fondation Roi Baudouin** - Financement complémentaire
- [ ] **Telraam** - Partenariat capteurs

---

## 15. 📚 DOCUMENTATION À PRODUIRE

### Documents fondateurs
- [ ] Note d'intention politique (2 pages)
- [ ] Projet de délibération conseil communal
- [ ] Charte de gouvernance
- [ ] Charte éthique et déontologique

### Documents techniques
- [ ] Architecture technique détaillée
- [ ] Cahier des charges fonctionnel
- [ ] Politique de sécurité
- [ ] Politique de protection des données (RGPD)

### Documents utilisateurs
- [ ] Guide citoyen (FR/NL)
- [ ] Guide administrateur
- [ ] FAQ
- [ ] Tutoriels vidéo

### Documents de suivi
- [ ] Tableau de bord KPIs
- [ ] Rapports trimestriels
- [ ] Rapport annuel public

---

# SYNTHÈSE FINALE

## Ce qui a été couvert (3 documents précédents)
✅ Vision et objectifs  
✅ Benchmark international  
✅ Stack technique de base  
✅ Standards d'interopérabilité  
✅ Estimation budgétaire initiale  
✅ Analyse politique locale  
✅ Identification des risques  

## Ce qui manquait et est maintenant documenté
✅ Cadre juridique belge détaillé  
✅ Architecture technique complète  
✅ Outils de délibération  
✅ Processus tirage au sort  
✅ Pipeline de données  
✅ Interopérabilité régionale  
✅ Programme de formation  
✅ KPIs et évaluation  
✅ Stratégie internationale  
✅ Budget détaillé complet  
✅ Structure de gouvernance  
✅ Roadmap opérationnelle  
✅ Matrice des risques  
✅ Liste de contacts  
✅ Documentation requise  

## Ce qui manque TOUJOURS et ne peut être produit par cette conversation

### Actions humaines requises
1. **Rencontre avec décideurs politiques** - Aucune recherche ne remplace cela
2. **Constitution d'une équipe porteuse** - Citoyens, fonctionnaires, élus
3. **Dépôt de candidatures de financement** - Formulaires à remplir
4. **Négociation avec partenaires** - FARI, SolidLab, etc.
5. **Décision du conseil communal** - Vote formel requis

### Informations non disponibles publiquement
- Budget réel disponible à Auderghem pour ce projet
- Volonté politique réelle de la bourgmestre
- Capacité d'absorption de l'administration
- Appétit citoyen pour la participation
- Priorités concurrentes de la commune

---

**Ce document constitue le cahier des charges le plus complet possible pour faire d'Auderghem le pôle central mondial de la démocratie directe.**

**La prochaine étape n'est pas un document. C'est une réunion.**
