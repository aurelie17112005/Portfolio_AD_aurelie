<template>
  <section id="traces" class="py-6">
    <div class="d-flex align-center justify-space-between mb-3">
      <h2 class="text-h5">Traces & analyses</h2>
      <div class="text-medium-emphasis text-body-2">Référencez les figures (Fig.1, Fig.2…)</div>
    </div>

    <!-- Filtres -->
    <v-row class="mb-3" dense>
      <v-col cols="12" md="4">
        <div class="text-caption mb-1">Compétences</div>
        <v-chip-group v-model="fComp" multiple>
          <v-chip v-for="c in compOptions" :key="c" :value="c" variant="outlined" size="small">{{ c }}</v-chip>
        </v-chip-group>
      </v-col>
      <v-col cols="12" md="4">
        <div class="text-caption mb-1">Missions</div>
        <v-chip-group v-model="fMission" multiple>
          <v-chip v-for="m in missionOptions" :key="m" :value="m" variant="outlined" size="small">{{ m }}</v-chip>
        </v-chip-group>
      </v-col>
      <v-col cols="12" md="4">
        <div class="text-caption mb-1">Outils</div>
        <v-chip-group v-model="fOutil" multiple>
          <v-chip v-for="o in outilOptions" :key="o" :value="o" variant="outlined" size="small">{{ o }}</v-chip>
        </v-chip-group>
      </v-col>
    </v-row>

    <div class="d-grid" style="gap:16px;">
      <div v-for="(t,i) in filteredTraces" :key="t.id">
        <v-row dense class="align-stretch">
          <v-col cols="12" md="6" :order="i % 2 ? 2 : 1">
            <Reveal>
              <v-card rounded="xl" class="overflow-hidden" @click="open(t)" style="cursor:zoom-in">
                <v-img :src="t.image" :alt="t.titre" height="260"></v-img>
                <div class="text-caption text-medium-emphasis px-4 py-2">{{ t.id }} — {{ t.titre }}. Source : {{ t.source }}.</div>
              </v-card>
            </Reveal>
          </v-col>
          <v-col cols="12" md="6" :order="i % 2 ? 1 : 2">
            <Reveal>
              <v-card rounded="xl" class="pa-4">
                <h3 class="text-subtitle-1 font-weight-medium">{{ t.titre }}</h3>
                <div class="d-flex flex-wrap ga-2 my-2">
                  <v-chip size="small" variant="outlined">Mission : {{ t.mission }}</v-chip>
                  <v-chip size="small" variant="outlined">Compétences : {{ t.competences.join(', ') }}</v-chip>
                  <v-chip v-for="o in t.outils" :key="o" size="small" variant="outlined">{{ o }}</v-chip>
                </div>
                <p><strong>Contexte.</strong> {{ t.contexte }}</p>
                <p><strong>Démarche.</strong> {{ t.demarche }}</p>
                <p><strong>Résultat.</strong> {{ t.resultat }}</p>
                <p><strong>Analyse (preuve → AC).</strong> {{ t.preuve }}</p>
                <div class="text-caption text-medium-emphasis">Confidentialité : anonymisez/masquez si nécessaire.</div>
              </v-card>
            </Reveal>
          </v-col>
        </v-row>
      </div>

      <v-card class="pa-4" rounded="xl">
        <h3 class="text-subtitle-1 font-weight-medium mb-1">Checklist « forme » (bonus/malus)</h3>
        <ul class="pl-6">
          <li>Barre de menu flottante, liens fonctionnels</li>
          <li>Titres et sous-titres clairs</li>
          <li>Zigzag alterné, transitions discrètes</li>
          <li>Figures légendées + renvois (Fig.x) dans le texte</li>
          <li>Expression soignée (orthographe, style pro)</li>
          <li>Export PDF propre</li>
        </ul>
      </v-card>
    </div>

    <!-- Zoom image -->
    <v-dialog v-model="dlg" max-width="1000">
      <v-card>
        <v-img v-if="sel" :src="sel.image" :alt="sel.titre" height="520" cover></v-img>
        <v-card-text v-if="sel" class="text-caption text-medium-emphasis">
          {{ sel.id }} — {{ sel.titre }}. Source : {{ sel.source }}.
        </v-card-text>
      </v-card>
    </v-dialog>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import data from '../content/portfolio.js'
import Reveal from './Reveal.vue'

const fComp = ref([]), fMission = ref([]), fOutil = ref([])

const compOptions = computed(() => [...new Set(data.traces.flatMap(t => t.competences))])
const missionOptions = computed(() => [...new Set(data.traces.map(t => t.mission))])
const outilOptions = computed(() => [...new Set(data.traces.flatMap(t => t.outils))])

const filteredTraces = computed(() => {
  return data.traces.filter(t => {
    const okC = !fComp.value.length || t.competences.some(c => fComp.value.includes(c))
    const okM = !fMission.value.length || fMission.value.includes(t.mission)
    const okO = !fOutil.value.length || t.outils.some(o => fOutil.value.includes(o))
    return okC && okM && okO
  })
})

const dlg = ref(false)
const sel = ref(null)
const open = (t) => { sel.value = t; dlg.value = true }
</script>
