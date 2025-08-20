<template>
  <div v-intersect="onIntersect">
    <v-slide-y-transition>
      <div v-show="shown"><slot/></div>
    </v-slide-y-transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const shown = ref(false)
const onIntersect = (isIntersecting) => { if (isIntersecting) shown.value = true }
</script>
