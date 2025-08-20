<template>
  <v-fab-transition>
    <v-btn v-if="show" icon class="no-print"
      style="position:fixed;right:16px;bottom:24px;z-index:60"
      color="primary" @click="toTop">
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const show = ref(false)
const onScroll = () => { show.value = (document.documentElement.scrollTop || document.body.scrollTop) > 600 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive:true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>
