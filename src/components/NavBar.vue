<template>
  <v-app-bar :height="scrolled ? 56 : 64" :elevation="scrolled ? 4 : 0" flat class="bg-surface">
    <v-container class="d-flex align-center justify-space-between" style="max-width:1100px;">
      <div class="d-flex align-center ga-3 font-weight-bold">
        <div class="rounded-lg" style="width:32px;height:32px;background:linear-gradient(135deg, var(--v-theme-primary), var(--v-theme-secondary));"></div>
        <span>Portfolio — {{ data.contact.nom }}</span>
      </div>
      <div class="d-none d-md-flex ga-1">
        <v-btn v-for="l in links" :key="l.href" :href="l.href" variant="text" class="text-none">{{ l.label }}</v-btn>
      </div>
      <v-btn class="d-md-none" icon variant="text" @click="drawer = true"><v-icon>mdi-menu</v-icon></v-btn>
    </v-container>

    <!-- Barre de progression -->
    <v-progress-linear :model-value="progress" color="primary" height="2"
      style="position:absolute;left:0;right:0;bottom:0"></v-progress-linear>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary location="right">
    <v-list>
      <v-list-item v-for="l in links" :key="l.href+'m'">
        <v-list-item-title><a :href="l.href" @click="drawer=false">{{ l.label }}</a></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import data from '../content/portfolio.js'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const drawer = ref(false)
const links = [
  { href:'#accueil', label:'Accueil' }, { href:'#contexte', label:'Contexte' },
  { href:'#missions', label:'Missions' }, { href:'#competences', label:'Compétences' },
  { href:'#traces', label:'Traces' }, { href:'#journal', label:'Journal' },
  { href:'#bilan', label:'Bilan' }, { href:'#refs', label:'Références' },
  { href:'#contact', label:'Contact' },
]

const progress = ref(0)
const scrolled = ref(false)
const onScroll = () => {
  const el = document.documentElement
  const top = el.scrollTop || document.body.scrollTop
  const h = el.scrollHeight - el.clientHeight
  progress.value = h > 0 ? (top / h) * 100 : 0
  scrolled.value = top > 24
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive:true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>
