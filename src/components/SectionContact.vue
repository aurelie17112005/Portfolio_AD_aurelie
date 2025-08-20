<template>
  <section id="contact" class="py-6">
    <h2 class="text-h5 mb-3">Contact</h2>
    <v-card class="pa-4" rounded="xl">
      <p>
        <strong>{{ d.contact.nom }}</strong> — {{ d.contact.cursus }} · {{ d.contact.etab }}<br>
        Email : <a :href="`mailto:${d.contact.email}`">{{ d.contact.email }}</a>
        <template v-if="d.contact.linkedin"> · LinkedIn : <a :href="d.contact.linkedin" target="_blank" rel="noreferrer">profil</a></template>
      </p>
      <div class="text-caption text-medium-emphasis mt-2">
        Ce portfolio est publié à l’adresse : <em>{{ url }}</em>. Dernière mise à jour : {{ d.hero.derniereMaj }}.
      </div>
    </v-card>
  </section>
</template>

<script setup>
import d from '../content/portfolio.js'
const url = 'https://ton-domaine/portfolio'
</script>
