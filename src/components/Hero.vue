<template>
  <section id="accueil" class="py-6">
    <v-card class="pa-6" elevation="6" rounded="xl">
      <v-row class="align-center" dense>
        <v-col cols="12" md="3" class="d-flex justify-center">
          <div class="rounded-xl d-flex align-center justify-center"
               style="width:120px;height:120px;background:linear-gradient(135deg, color-mix(in oklab, var(--v-theme-primary) 30%, transparent), color-mix(in oklab, var(--v-theme-secondary) 30%, transparent));font-size:56px">🗂️</div>
        </v-col>
        <v-col cols="12" md="9">
          <h1 class="text-h4 text-md-h3 mb-1">{{ d.hero.titre }}</h1>
          <div class="text-medium-emphasis mb-2">
            Période : <strong>{{ d.hero.periode }}</strong> · Organisation : <strong>{{ d.hero.organisation }}</strong> · Tuteur·rice : <strong>{{ d.hero.tuteur }}</strong>
          </div>
          <div class="d-flex flex-wrap ga-2 mt-2">
            <v-chip variant="outlined">BUT2 S4</v-chip>
            <v-chip variant="outlined">Compétences : <strong>&nbsp;2/6</strong></v-chip>
            <v-chip variant="outlined">MAJ : {{ d.hero.derniereMaj }}</v-chip>
          </div>
          <div class="mt-3 d-flex ga-2 no-print">
            <v-btn color="primary" @click="print"><v-icon start>mdi-printer</v-icon> Export PDF</v-btn>
            <v-btn variant="tonal" href="#bilan"><v-icon start>mdi-pin</v-icon> Aller au bilan</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </section>
</template>

<script setup>
import d from '../content/portfolio.js'
const print = () => window.print()
</script>
