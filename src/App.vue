<script setup lang="ts">
import { ref } from 'vue'
import AppContainer from './components/AppContainer.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import HomeContainer from './components/HomeContainer.vue'
import Slideshow from './components/Slideshow.vue'
import { slideshowImages } from './data/slideshowImages.ts'
import ContactModal from './components/ContactModal.vue'

const isModalVisible = ref(false);

function showModal() {
  isModalVisible.value = true;
}

function closeModal() {
  isModalVisible.value = false;
}
</script>

<template>
  <app-container>
    <Transition>
      <contact-modal v-if="isModalVisible" @closeModalClicked="closeModal" />
    </Transition>
    <app-header />
    <home-container @bookButtonClicked="showModal" />
    <slideshow :images="slideshowImages" :timer-length="5000" />
    <app-footer />
  </app-container>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
