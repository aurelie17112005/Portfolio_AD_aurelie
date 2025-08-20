<template>
  <section id="refs" class="py-6">
    <h2 class="text-h5 mb-3">Références & annexes</h2>
    <v-card class="pa-4" rounded="xl">
      <ul class="pl-6">
        <li v-for="r in data.refs" :key="r.label">
          [{{ r.label }}] {{ r.texte }}<template v-if="r.url"> — <a :href="r.url" target="_blank" rel="noreferrer">Lien</a></template>
        </li>
      </ul>
      <div class="text-caption text-medium-emphasis mt-2">Toutes les images/données sont utilisées avec autorisation ; éléments sensibles anonymisés.</div>
    </v-card>
  </section>
</template>

<script setup>
import data from '../content/portfolio.js'
</script>
