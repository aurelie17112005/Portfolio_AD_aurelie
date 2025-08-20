<template>
  <section id="journal" class="py-6">
    <h2 class="text-h5 mb-3">Journal de bord (sélection)</h2>
    <v-card class="pa-4" rounded="xl">
      <v-timeline density="compact" side="end">
        <v-timeline-item v-for="j in data.journal" :key="j.titre"
          dot-color="secondary" size="small">
          <template #opposite><strong>{{ j.titre }}</strong></template>
          <div>{{ j.texte }}</div>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </section>
</template>

<script setup>
import data from '../content/portfolio.js';
</script>
