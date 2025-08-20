<template>
  <section id="contexte" class="py-6">
    <h2 class="text-h5 mb-3">Contexte & objectifs</h2>

    <!-- Bandeau "quick facts" -->
    <v-sheet class="facts rounded-xl mb-4 px-4 py-3" elevation="0">
      <div class="d-flex flex-wrap ga-2">
        <v-chip variant="tonal" size="small">🗓️ {{ periode }}</v-chip>
        <v-chip variant="tonal" size="small">⏱️ {{ semaines }} sem · {{ heuresSem }} h/sem ({{ heuresTot }} h)</v-chip>
        <v-chip variant="tonal" size="small">📍 {{ lieu }} — {{ service }}</v-chip>
        <v-chip variant="tonal" size="small">🏛️ {{ orgShort }}</v-chip>
      </div>
    </v-sheet>

    <v-row dense>
      <!-- Carte ENTREPRISE -->
      <v-col cols="12" md="6">
        <div v-intersect="(i)=>shown.ent=i">
          <v-expand-transition>
            <v-card v-show="shown.ent" class="pa-5 rounded-xl card-glow">
              <div class="d-flex align-center ga-3 mb-2">
                <div class="badge">🏛️</div>
                <h3 class="text-subtitle-1 font-weight-medium m-0">Organisation d’accueil</h3>
              </div>

              <p class="mb-2">
                <strong>{{ org }}</strong>
                <span v-if="alias" class="text-medium-emphasis">({{ alias }})</span><br>
                <span class="text-medium-emphasis">{{ adresse }}</span>
              </p>

              <v-alert density="comfortable" border="start" variant="tonal" type="info" class="mb-3">
                Mission générale : <em>{{ mission }}</em>
              </v-alert>

              <v-expansion-panels variant="accordion" class="mt-1">
                <v-expansion-panel title="Détails administratifs">
                  <v-expansion-panel-text>
                    <div class="d-flex flex-wrap ga-6">
                      <div><div class="text-caption">SIRET</div><div>{{ siret }}</div></div>
                      <div><div class="text-caption">NAF/APE</div><div>{{ naf }}</div></div>
                      <div><div class="text-caption">Statut</div><div>{{ statut }}</div></div>
                      <div><div class="text-caption">Effectif</div><div>{{ effectif }}</div></div>
                      <div><div class="text-caption">Téléphone</div><div><a :href="`tel:${telephone}`">{{ telephone }}</a></div></div>
                    </div>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card>
          </v-expand-transition>
        </div>
      </v-col>

      <!-- Carte STAGE EN BREF -->
      <v-col cols="12" md="6">
        <div v-intersect="(i)=>shown.stage=i">
          <v-expand-transition>
            <v-card v-show="shown.stage" class="pa-5 rounded-xl card-glow">
              <div class="d-flex align-center ga-3 mb-2">
                <div class="badge">🧭</div>
                <h3 class="text-subtitle-1 font-weight-medium m-0">Stage en bref</h3>
              </div>

              <p class="mb-3"><strong>{{ titreStage }}</strong></p>

              <v-row dense class="mb-2">
                <v-col cols="6"><div class="text-caption">Période</div><div>{{ periode }}</div></v-col>
                <v-col cols="6"><div class="text-caption">Durée</div><div>{{ semaines }} semaines</div></v-col>
                <v-col cols="6"><div class="text-caption">Heures</div><div>{{ heuresSem }} h/sem (total {{ heuresTot }} h)</div></v-col>
                <v-col cols="6"><div class="text-caption">Lieu / Service</div><div>{{ lieu }} — {{ service }}</div></v-col>
              </v-row>

              <v-alert density="comfortable" border="start" variant="tonal" color="primary">
                🎯 Objectif global : {{ objectifGlobal }}
              </v-alert>

              <div class="text-caption text-medium-emphasis mt-2">
                Tuteur·rice : {{ tuteurNom }} — <a :href="`mailto:${tuteurEmail}`">{{ tuteurEmail }}</a> · <a :href="`tel:${tuteurTel}`">{{ tuteurTel }}</a>
              </div>
            </v-card>
          </v-expand-transition>
        </div>
      </v-col>

      <!-- Carte OBJECTIFS PÉDAGOGIQUES -->
      <v-col cols="12">
        <div v-intersect="(i)=>shown.obj=i">
          <v-expand-transition>
            <v-card v-show="shown.obj" class="pa-5 rounded-xl card-glow">
              <div class="d-flex align-center ga-3 mb-2">
                <div class="badge">📚</div>
                <h3 class="text-subtitle-1 font-weight-medium m-0">Objectifs pédagogiques</h3>
              </div>
              <ul class="pl-6 mb-2">
                <li>Approfondir {{ objectifs[0] }} ; {{ objectifs[1] }}</li>
                <li>Valider des apprentissages critiques liés aux 2 compétences principales</li>
                <li>Produire des livrables : code, docs, rapports, datasets…</li>
              </ul>
              <h4 class="text-subtitle-2 font-weight-medium mt-4 mb-1">Plan du site</h4>
              <p class="m-0">
                Le portfolio présente <strong>les missions</strong>, <strong>les compétences ciblées</strong>, et des
                <strong>traces analysées</strong> prouvant les savoirs/savoir-faire. Chaque figure est légendée et référencée.
              </p>
            </v-card>
          </v-expand-transition>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

/* === Données (reprend ce que tu avais + les ajouts) === */
const org = 'IUT Belfort–Montbéliard'
const orgShort = 'IUT B-M'
const alias = 'IUT Nord Franche-Comté'
const domaine = 'Enseignement supérieur / Informatique'
const equipe = 'Département Informatique — projet EDT-Alt'
const stack = 'Vue 3 + Vuetify, Node.js/Express (ou Django REST), PostgreSQL, Puppeteer, SSO/Scodoc'
const mission = 'Dématérialiser l’émargement via QR éphémère (5 min) + validation croisée + exports PDF'

const objectifs = ['développement web full-stack (C1)', 'gestion/exploitation de données (C4)']

// Entreprise
const adresse = '19 av. du Maréchal Juin, 90016 Belfort'
const siret = '19251215000165'
const naf = '803Z'
const effectif = '200 à 999'
const statut = 'Établissement public national'
const service = 'Département Informatique'
const lieu = 'Belfort'
const telephone = '+33 3 84 58 77 00'

// Stage
const periode = '7 avr. → 28 juin 2025'
const semaines = 8
const heuresSem = 35
const heuresTot = 208
const titreStage = 'Digitalisation de la prise de présence des alternants'
const tuteurNom = 'Michel Salomon'
const tuteurEmail = 'michel.salomon@univ-fcomte.fr'
const tuteurTel = '+33 3 84 58 77 76'
const objectifGlobal = 'Concevoir et développer une solution d’auto-émargement (QR) avec “signature” finale enseignant et exports PDF.'

/* === Effets "dynamique" (révélation au scroll) === */
const shown = reactive({ ent: false, stage: false, obj: false })
</script>

<style scoped>
.facts {
  background: color-mix(in oklab, var(--v-theme-primary) 14%, transparent);
  border: 1px solid color-mix(in oklab, var(--v-theme-primary) 22%, transparent);
}
.badge {
  width: 32px; height: 32px; border-radius: 12px;
  display: inline-flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, var(--v-theme-primary), color-mix(in oklab, var(--v-theme-secondary) 60%, transparent));
  box-shadow: 0 8px 24px rgba(0,0,0,.25);
}
.card-glow {
  transition: transform .25s ease, box-shadow .25s ease;
}
.card-glow:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(0,0,0,.3);
}
</style>
