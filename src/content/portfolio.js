// Helper pour charger des images locales depuis src/assets/traces/
const img = (name) => new URL(`../assets/${name}`, import.meta.url).href

export default {
  hero: {
    titre: "Portfolio de stage — Projet EDT-Alt (Émargement QR Code)",
    periode: "7 avr. → 28 juin 2025 (8 semaines, 35 h/sem)",
    organisation: "IUT Belfort–Montbéliard (IUT Nord Franche-Comté)",
    tuteur: "Michel Salomon",
    derniereMaj: "15 août 2025",
  },

  // Compétences principales (tu peux ajuster)
  principales: ["C1", "C4"],

  // ⚙️ Entreprise & Stage
  entreprise: {
    nom: "IUT Belfort–Montbéliard",
    alias: "IUT Nord Franche-Comté",
    siret: "19251215000165",
    naf: "803Z",
    effectif: "200 à 999",
    type: "Établissement public / SEM",
    statut: "Établissement public national",
    adresse: "19 av. du Maréchal Juin, 90016 BELFORT",
    telephone: "+33 3 84 58 77 00",
    lieuStage: "BELFORT",
    service: "Département Informatique",
  },

  encadrement: {
    tuteur: {
      nom: "Michel Salomon",
      fonction: "Chef du département Informatique",
      telephone: "+33 3 84 58 77 76",
      email: "michel.salomon@univ-fcomte.fr",
    },
    signataire: {
      nom: "Michel Salomon",
      fonction: "Chef du département Informatique",
      telephone: "+33 3 84 58 77 76",
      email: "michel.salomon@univ-fcomte.fr",
    },
  },

  stage: {
    titre: "Digitalisation du processus de prise de présence des alternants",
    debut: "2025-04-07",
    fin: "2025-06-28",
    semaines: 8,
    heuresSem: 35,
    heuresTot: 208,
    gratification: false,
    versement: "Virement",
    contexte:
      "Actuellement, les alternants signent une fiche papier en cours, cosignée par l’enseignant ; ce circuit manuel entraîne pertes de temps et traçabilité limitée.",
    objectif:
      "Concevoir et développer une solution dématérialisée : auto-émargement côté alternant et “signature” électronique finale par l’enseignant.",
  },

  missions: [
    {
      id: "M1",
      titre: "Cadrage & accès",
      activites: ["Cahier des charges, backlog", "Accès Scodoc / SSO (LDAP/OIDC)"],
      livrables: ["Backlog priorisé", "Accès techniques validés"],
      resultat: "Cadrage validé et bases prêtes",
    },
    {
      id: "M2",
      titre: "Prototype QR + intégration Scodoc",
      activites: ["Génération QR côté enseignant", "Intégration API Scodoc (lecture/écriture)"],
      livrables: ["Prototype fonctionnel", "Notes d’intégration"],
      resultat: "QR affiché en séance",
    },
    {
      id: "M3",
      titre: "API QR & Scan + BD & sécurité",
      activites: [
        "API d’émargement (jetons signés)",
        "Scan mobile (caméra)",
        "Expiration QR à 5 minutes",
        "Schéma PostgreSQL & contraintes",
        "Journalisation/audit",
      ],
      livrables: ["Endpoints sécurisés", "Schéma BD", "Logs d’audit"],
      resultat: "Présences horodatées, invalidation jetons",
    },
    {
      id: "M4",
      titre: "Interfaces & validation croisée",
      activites: [
        "UI prof (lancer séance + QR)",
        "UI alternant (scan/confirmation)",
        "Validation croisée entre pairs",
        "QR d'autonomie (heures sans prof)",
      ],
      livrables: ["Écrans Vuetify", "Flux de validation"],
      resultat: "Parcours complet prof/alternant",
    },
    {
      id: "M5",
      titre: "Exports PDF & finalisation",
      activites: [
        "PDF individuel quotidien (A4)",
        "Export global imprimable",
        "Tests, doc, formation, déploiement",
      ],
      livrables: ["PDF indiv. & global", "Guide utilisateur", "Livret de déploiement"],
      resultat: "Exports prêts production",
    },
  ],

  // 6 compétences
  competences: [
    {
      id: "C1",
      nom: "Réaliser un développement d’application",
      ac: [
        { code: "C1-1", libelle: "Concevoir archi front/back & sécurité", etat: "ok" },
        { code: "C1-2", libelle: "Implémenter QR 5 min, scan, validation croisée", etat: "ok" },
        { code: "C1-3", libelle: "Tester & intégrer (TU/TI, CI)", etat: "warn" },
      ],
      analyse:
        "UC1–UC4 : QR (TTL 5 min), scan, validation croisée, parcours autonomie. Tests/CI amorcés (partiel).",
    },
    {
      id: "C2",
      nom: "Optimiser des applications",
      ac: [
        { code: "C2-1", libelle: "Optimiser flux front/API (pagination, cache)", etat: "warn" },
        { code: "C2-2", libelle: "Optimiser BD (index, requêtes ciblées)", etat: "warn" },
        { code: "C2-3", libelle: "Maîtriser ressources & robustesse", etat: "warn" },
      ],
      analyse:
        "Pagination des séances, index BD, cache raisonnable client ; mesures à consolider.",
    },
    {
      id: "C3",
      nom: "Administrer SI communicants",
      ac: [
        { code: "C3-1", libelle: "Installer/configurer API, BD, reverse proxy", etat: "warn" },
        { code: "C3-2", libelle: "Sécurité : HTTPS, rate-limit, journaux, SSO", etat: "warn" },
        { code: "C3-3", libelle: "MCO & supervision", etat: "no" },
      ],
      analyse: "Intégration SSO/HTTPS, rate-limit ; MCO/supervision à formaliser.",
    },
    {
      id: "C4",
      nom: "Gérer des données",
      ac: [
        { code: "C4-1", libelle: "Modéliser/administrer présences + audit", etat: "ok" },
        { code: "C4-2", libelle: "Restituer (PDF indiv. & global)", etat: "ok" },
        { code: "C4-3", libelle: "Qualité, sécurité, RGPD", etat: "warn" },
      ],
      analyse:
        "Exports PDF démontrent exploitation fiable ; RGPD/rétention à finaliser.",
    },
    {
      id: "C5",
      nom: "Conduire un projet",
      ac: [
        { code: "C5-1", libelle: "Backlog, jalons S1–S8", etat: "ok" },
        { code: "C5-2", libelle: "Suivi & priorisation", etat: "warn" },
        { code: "C5-3", libelle: "Communication parties prenantes", etat: "warn" },
      ],
      analyse:
        "Cadrage initial, jalons hebdo ; comptes-rendus à systématiser.",
    },
    {
      id: "C6",
      nom: "Construire son parcours",
      ac: [
        { code: "C6-1", libelle: "Auto-évaluation & axes", etat: "ok" },
        { code: "C6-2", libelle: "Valorisation (portfolio, soutenance)", etat: "ok" },
        { code: "C6-3", libelle: "Projection alternance/emploi", etat: "warn" },
      ],
      analyse:
        "Portfolio structuré ; objectifs de projection à préciser.",
    },
  ],

  traces: [
    {
      id: "Fig1",
      titre: "QR Code éphémère (5 minutes)",
      mission: "M3",
      competences: ["C1", "C4"],
      outils: ["Vue 3 + Vuetify", "API Node/Express (ou Django REST)", "JWT"],
      image: img("generation_qr.png"),
      source: "Prototype interne",
      contexte: "Dématérialiser l’émargement",
      demarche: "Jeton signé côté serveur, rendu en QR, TTL = 5 min",
      resultat: "Présence horodatée + mode “QR”",
      preuve: "C1-2, C4-1",
    },
    {
      id: "Fig2",
      titre: "Gestion des utilisateurs",
      mission: "M4",
      competences: ["C1"],
      outils: ["Vue/Vuetify", "API validation"],
      image: img("organigrame_app.png"), // vérifie bien le nom exact du fichier
      source: "Écran alternant",
      contexte: "Réduire fraude, fiabiliser",
      demarche: "Scan → confirmation pair → statut validé",
      resultat: "Fiabilité accrue",
      preuve: "C1-2",
    },
    {
      id: "Fig3",
      titre: "Export PDF individuel & global",
      mission: "M5",
      competences: ["C4"],
      outils: ["Puppeteer (ou ReportLab)"],
      image: img("admin.png"),
      source: "Exemple de rendu",
      contexte: "Feuilles quotidiennes",
      demarche: "Template A4, pagination, signatures",
      resultat: "Exports imprimables",
      preuve: "C4-2",
    },
  ],

  journal: [
    { titre: "S1 (7–11 avr.)", texte: "Cadrage : cahier des charges, backlog, accès SSO/Scodoc" },
    { titre: "S2 (14–18 avr.)", texte: "Prototype génération QR + intégration Scodoc" },
    { titre: "S3–S4 (21 avr.–2 mai)", texte: "API QR & scan, BD, sécurité" },
    { titre: "S5–S6 (5–16 mai)", texte: "UI prof/étudiant, validation croisée" },
    { titre: "S7 (19–23 mai)", texte: "Exports PDF individuels & global" },
    { titre: "S8 (26–28 juin)", texte: "Tests, documentation, formation, déploiement" },
  ],

  refs: [
    { label: "R1", texte: "Fiche pré-convention (entreprise, tuteur, dates, durée)" },
    { label: "R2", texte: "Use cases UC1–UC6 (QR, scan, validation, PDF)" },
  ],

  contact: {
    nom: "Denadi Aurelie Azonnoudo",
    cursus: "BUT2 Info — S4",
    etab: "IUT Nord Franche-Comté",
    email: "denadi_aurelie.azonnoudo@edu.univ-fcomte.fr",
    linkedin: "#",
  },
}
