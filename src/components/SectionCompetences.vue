<template>
  <section id="competences" class="py-6">
    <h2 class="text-h5 mb-3">Compétences</h2>
    <div class="text-medium-emphasis mb-3">
      2 principales analysées en profondeur, 4 secondaires présentées synthétiquement.
    </div>

    <h3 class="text-subtitle-1 font-weight-medium mb-2">Compétences principales</h3>
    <v-row dense>
      <v-col cols="12" md="6" v-for="c in principales" :key="c.id">
        <v-card class="pa-4" rounded="xl">
          <h4 class="text-subtitle-1 font-weight-medium mb-2">{{ c.id }} — {{ c.nom }}</h4>
          <div v-for="a in c.ac" :key="a.code" class="d-flex align-center ga-2 mb-1">
            <span class="text-caption" style="min-width:64px;opacity:.8">{{ a.code }}</span>
            <span class="flex-1">{{ a.libelle }}</span>
            <v-chip :color="etatColor(a.etat)" variant="outlined" size="small">{{ etatLabel(a.etat) }}</v-chip>
          </div>
          <v-alert class="mt-3" border="start" variant="tonal" color="primary">
            <strong>Analyse :</strong> {{ c.analyse }}
          </v-alert>
        </v-card>
      </v-col>
    </v-row>

    <h3 class="text-subtitle-1 font-weight-medium mt-6 mb-2">Compétences secondaires</h3>
    <v-row dense>
      <v-col cols="12" md="6" v-for="c in secondaires" :key="c.id">
        <v-card class="pa-4" rounded="xl" variant="tonal">
          <h4 class="text-subtitle-1 font-weight-medium mb-2">{{ c.id }} — {{ c.nom }}</h4>
          <ul class="pl-6">
            <li v-for="a in c.ac" :key="a.code">
              <strong>{{ a.code }}</strong> — {{ a.libelle }} (<em>{{ etatLabel(a.etat) }}</em>)
            </li>
          </ul>
          <div class="text-body-2 mt-2">{{ c.analyse }}</div>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import data from '../content/portfolio.js'
import { computed } from 'vue'

const principales = computed(() => data.principales ? data.competences.filter(c => data.principales.includes(c.id)) : data.competences.slice(0,2))
const secondaires = computed(() => data.principales ? data.competences.filter(c => !data.principales.includes(c.id)) : data.competences.slice(2))

const etatColor = (e) => ({ ok: 'success', warn: 'warning', no: 'error' }[e] || 'info')
const etatLabel = (e) => ({ ok: 'Couvert', warn: 'Partiel', no: 'Non' }[e] || e)
</script>