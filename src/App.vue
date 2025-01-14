<script setup lang="ts">
import AppContainer from './components/AppContainer.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import HomeContainer from './components/HomeContainer.vue'
import Slideshow from './components/Slideshow.vue'
import { slideshowImages } from './data/slideshowImages.ts'

</script>

<template>
  <app-container>
    <app-header />
    <home-container />
    <slideshow :images="slideshowImages" :timer-length="5000" />
    <app-footer />
  </app-container>
</template>

<style scoped>
</style>
