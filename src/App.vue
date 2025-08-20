<template>
  <v-app>
    <!-- NAVBAR -->
    <v-app-bar :elevation="4" class="bg-surface text-on-surface">
      <v-container class="d-flex align-center justify-space-between" style="max-width:1100px;">
        <div class="d-flex align-center ga-3">
          <div class="rounded-lg" style="width:32px;height:32px;background:linear-gradient(135deg,var(--v-theme-primary),var(--v-theme-secondary));"/>
          <strong>Portfolio — {{ contactName }}</strong>
        </div>

        <div class="d-none d-md-flex ga-1">
          <v-btn v-for="l in links" :key="l.href" :href="l.href" variant="text" class="text-none">
            {{ l.label }}
          </v-btn>
        </div>

        <v-btn class="d-md-none" icon variant="text" @click="drawer = true" aria-label="Ouvrir le menu">☰</v-btn>
      </v-container>

      <!-- Barre de progression de lecture -->
      <v-progress-linear :model-value="progress" color="primary" height="2"
                         style="position:absolute;left:0;right:0;bottom:0" />
    </v-app-bar>

    <!-- Drawer mobile -->
    <v-navigation-drawer v-model="drawer" temporary location="right">
      <v-list>
        <v-list-item v-for="l in links" :key="l.href + 'm'">
          <v-list-item-title><a :href="l.href" @click="drawer=false">{{ l.label }}</a></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- CONTENU -->
    <v-main class="bg-background">
      <v-container style="max-width:1100px;" class="py-6">
        <!-- Monte directement tes sections (pas de router nécessaire) -->
        <Hero />
        <SectionContexte />
        <SectionMissions />
        <SectionCompetences />
        <SectionTraces />
        <SectionJournal />
        <SectionBilan />
        <SectionRefs />
        <SectionContact />
      </v-container>
    </v-main>

    <!-- FOOTER -->
    <v-footer class="bg-surface text-on-surface">
      <v-container style="max-width:1100px;">
        <div class="d-flex flex-wrap align-center justify-space-between ga-3">
          <div class="text-body-2">© {{ year }} {{ contactName }} — Portfolio de stage (BUT2 S4)</div>
          <div class="text-body-2">
            <a :href="mailto" class="text-primary">Contact</a>
            <span class="mx-2" aria-hidden="true">•</span>
            <a href="#bilan" class="text-primary">Aller au bilan</a>
          </div>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import data from './content/portfolio.js'

/* Sections */
import Hero from './components/Hero.vue'
import SectionBilan from './components/SectionBilan.vue'
import SectionCompetences from './components/SectionCompetences.vue'
import SectionContact from './components/SectionContact.vue'
import SectionContexte from './components/SectionContexte.vue'
import SectionJournal from './components/SectionJournal.vue'
import SectionMissions from './components/SectionMissions.vue'
import SectionRefs from './components/SectionRefs.vue'
import SectionTraces from './components/SectionTraces.vue'

const contactName = computed(() => (data?.contact?.nom ?? 'Votre Nom'))
const mailto = computed(() => `mailto:${data?.contact?.email ?? 'prenom.nom@etu.domaine'}`)
const year = new Date().getFullYear()

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#contexte', label: 'Contexte' },
  { href: '#missions', label: 'Missions' },
  { href: '#competences', label: 'Compétences' },
  { href: '#traces', label: 'Traces' },
  { href: '#journal', label: 'Journal' },
  { href: '#bilan', label: 'Bilan' },
  { href: '#refs', label: 'Références' },
  { href: '#contact', label: 'Contact' }
]

const drawer = ref(false)
const progress = ref(0)
const onScroll = () => {
  const el = document.documentElement
  const top = el.scrollTop || document.body.scrollTop
  const h = el.scrollHeight - el.clientHeight
  progress.value = h > 0 ? (top / h) * 100 : 0
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style>
/* Fond et couleurs globales */
html, body, #app { height: 100%; }
.v-application { background: var(--v-theme-background) !important; color: var(--v-theme-on-background); }

/* Confort d'ancrage : évite que la barre masque le début de section */
section[id] { scroll-margin-top: 84px; }

/* Liens */
a { color: var(--v-theme-primary); text-decoration: none; }
a:hover { text-decoration: underline; }

/* UX smooth scroll */
html { scroll-behavior: smooth; }
</style>
