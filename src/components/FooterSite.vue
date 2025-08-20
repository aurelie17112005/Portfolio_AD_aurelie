<template>
  <footer class="py-8 text-medium-emphasis">
    <v-container style="max-width:1100px;">
      <div class="text-body-2">© {{ new Date().getFullYear() }} {{ d.contact.nom }} — Portfolio de stage (BUT2 S4).</div>
    </v-container>
  </footer>
</template>

<script setup>
import d from '../content/portfolio.js'
</script>
