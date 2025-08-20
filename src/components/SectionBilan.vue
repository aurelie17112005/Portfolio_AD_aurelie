<template>
  <section id="bilan" class="py-6">
    <h2 class="text-h5 mb-3">Bilan & perspectives</h2>

    <!-- BILAN TECHNIQUE (C1 & C4) -->
    <v-card class="pa-4 mb-3" rounded="xl">
      <div class="d-flex align-center ga-2 mb-2">
        <h3 class="text-subtitle-1 font-weight-medium m-0">Bilan technique — preuves principales (C1, C4)</h3>
        <v-chip size="x-small" variant="tonal" color="primary">C1</v-chip>
        <v-chip size="x-small" variant="tonal" color="primary">C4</v-chip>
      </div>

      <ul class="pl-6">
        <li><strong>QR éphémère (TTL 5 min) + scan</strong> côté alternant, enregistrement serveur horodaté, invalidation du jeton après usage/expiration. <em>Réf.</em> : Fig.1, M3.</li>
        <li><strong>Validation croisée</strong> entre pairs (réduction des fraudes, traçabilité accrue) avec flux clair dans l’UI. <em>Réf.</em> : Fig.2, M4.</li>
        <li><strong>Exports PDF A4</strong> individuels & globaux prêts à l’impression (pagination, signatures, synthèse des présences). <em>Réf.</em> : Fig.3, M5.</li>
        <li><strong>Modèle de données PostgreSQL</strong> pour présences/jetons + <strong>journalisation</strong> (audit minimal). <em>Réf.</em> : M3.</li>
        <li><strong>Intégration SI</strong> (SSO/Scodoc) amorcée, UI <strong>Vuetify</strong> accessible et responsive. <em>Réf.</em> : M1–M4.</li>
      </ul>

      <v-alert border="start" variant="tonal" color="success" class="mt-2">
        Objectif du stage atteint : la chaîne <strong>génération ➝ scan ➝ validation ➝ export</strong> est fonctionnelle de bout en bout, démontrant la compétence de <strong>développement d’application</strong> (C1) et de <strong>gestion/exploitation des données</strong> (C4).
      </v-alert>

      <!-- Métriques (à compléter si tu as les chiffres) -->
      <div class="mt-3">
        <v-row dense>
        </v-row>
      </div>
    </v-card>

    <!-- POINTS PERFECTIBLES / LIMITES -->
    <v-card class="pa-4 mb-3" rounded="xl">
      <h3 class="text-subtitle-1 font-weight-medium mb-2">Points perfectibles / limites</h3>
      <ul class="pl-6">
        <li><strong>Tests & CI</strong> : renforcer TU/TI, rendre la pipeline CI obligatoire sur merge (C1).</li>
        <li><strong>Supervision & MCO</strong> : métriques, journaux structurés, alertes (C3).</li>
        <li><strong>RGPD</strong> : politique de rétention/anonymisation, registre des traitements, DPIA si nécessaire (C4).</li>
        <li><strong>Robustesse hors-ligne</strong> : mode dégradé si réseau faible (C1/C2).</li>
        <li><strong>Perfs</strong> : pagination/filtre sur gros volumes, index complémentaires (C2/C4).</li>
        <li><strong>Accessibilité</strong> : compléter la check-list WCAG (focus visibles, contrastes, alternatives) (C1/C6).</li>
        <li><strong>Conduite de projet</strong> : formaliser les CR hebdos et le RACI (C5).</li>
      </ul>
    </v-card>

    <!-- PERSPECTIVES & ROADMAP -->
    <v-card class="pa-4" rounded="xl">
      <h3 class="text-subtitle-1 font-weight-medium mb-2">Perspectives d’amélioration (roadmap)</h3>

      <v-row dense>
        <v-col cols="12" md="4">
          <v-card variant="tonal" class="pa-4 rounded-xl h-100">
            <h4 class="text-subtitle-2 font-weight-medium mb-2">Priorité P1 — Stabilisation</h4>
            <ul class="pl-6">
              <li>Couverture <strong>tests</strong> ≥ 60 %, CI sur PR, lint/format auto. (C1)</li>
              <li>Secrets, <strong>rate-limit</strong>, politique de logs structurés. (C3)</li>
              <li>Configuration <strong>TTL QR</strong> & paramètres de session. (C1)</li>
            </ul>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card variant="tonal" class="pa-4 rounded-xl h-100">
            <h4 class="text-subtitle-2 font-weight-medium mb-2">Priorité P2 — Conformité & Observabilité</h4>
            <ul class="pl-6">
              <li><strong>RGPD</strong> : rétention/anonymisation, mentions, registre. (C4)</li>
              <li>Tableau de bord <strong>métriques</strong> (scans, latence, erreurs). (C3/C4)</li>
              <li>Accessibilité : correctifs contrastes & navigation clavier. (C1/C6)</li>
            </ul>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card variant="tonal" class="pa-4 rounded-xl h-100">
            <h4 class="text-subtitle-2 font-weight-medium mb-2">Priorité P3 — Évolutions fonctionnelles</h4>
            <ul class="pl-6">
              <li>Mode <strong>offline</strong> pour scan avec synchro différée. (C1/C2)</li>
              <li>Workflow de <strong>signature enseignant</strong> avancée. (C1/C4)</li>
              <li>Exports <strong>rapports synthèse</strong> multi-périodes. (C4)</li>
            </ul>
          </v-card>
        </v-col>
      </v-row>

      <v-alert class="mt-3" border="start" variant="tonal" color="primary">
        <strong>Auto-évaluation :</strong> C1 & C4 validées avec preuves tangibles ; C2/C3/C5/C6 partiellement couvertes — plan d’action ci-dessus pour compléter.
      </v-alert>
    </v-card>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

// Renseigne des chiffres si tu en as ; sinon laisse les valeurs par défaut.
const kpi = reactive({
  scansOK: 'à compléter',     // ex.: '97 % (N = 154)'
  apiP95:  'à compléter',     // ex.: '120 ms'
  pdfTime: 'à compléter',     // ex.: '0,9 s / PDF'
})
</script>
