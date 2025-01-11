<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  {
    src: 'public/images/landscape/pexels-bri-schneiter-28802-346529.jpg',
    alt: 'Landscape photograph by Bri Schneiter'
  },
  {
    src: 'public/images/landscape/pexels-pixabay-247599.jpg',
    alt: 'Landscape photograph by Pixabay'
  },
  {
    src: 'public/images/landscape/pexels-pixabay-462162.jpg',
    alt: 'Landscape photograph by Pixabay'
  },
  {
    src: 'public/images/landscape/pexels-pripicart-620337.jpg',
    alt: 'Landscape photograph by Tobi'
  },
  {
    src: 'public/images/landscape/pexels-samandgos-709552.jpg',
    alt: 'Landscape photograph by Ian Turnell'
  },
];

onMounted(() => startTimer());

onUnmounted(() => stopTimer());

const currentIndex = ref(0);
let timer;

function startTimer() {
  timer = setInterval(() => {
    nextSlide();
  }, 3000);
}

function stopTimer() {
  clearInterval(timer);
}

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % images.length;
}
</script>

<template>
  <div class="w-full flex justify-center -z-50">
    <div v-for="(image, index) in images" :key="index" class="flex flex-col h-full overflow-hidden absolute top-0 left-0">
      <Transition>
        <img :src="image.src" :alt="image.alt" v-if="index === currentIndex" class="object-cover" />
      </Transition>
    </div>
  </div>
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
