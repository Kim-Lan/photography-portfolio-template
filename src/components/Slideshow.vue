<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { Image } from '../types/Image.ts'

const props = defineProps<{
  images: Image[],
  timerLength: number
}>();

onMounted(() => startTimer());

onUnmounted(() => stopTimer());

const currentIndex = ref(0);
let timer;

function startTimer() {
  timer = setInterval(() => {
    nextSlide();
  }, props.timerLength);
}

function stopTimer() {
  clearInterval(timer);
}

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
}
</script>

<template>
  <div class="flex justify-center -z-50">
    <div v-for="(image, index) in props.images" :key="index" class="flex w-full h-full overflow-hidden absolute top-0 left-0">
      <Transition>
        <img :src="image.src" :alt="image.alt" v-if="index === currentIndex" class="w-full object-cover" />
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
