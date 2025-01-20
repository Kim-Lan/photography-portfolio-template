<script setup lang="ts">
import { ref } from 'vue'
import Button from './Button.vue'
import GalleryContainer from './GalleryContainer.vue'
import { landscapesGallery, portraitsGallery } from '../data/galleryImages.ts'

const showGallery = ref(false);
const currentGallery = ref(landscapesGallery);

function onLandscapesButtonClicked(event: Event) {
  currentGallery.value = landscapesGallery;
  showGallery.value = true;
}

function onPortraitsButtonClicked(event: Event) {
  currentGallery.value = portraitsGallery;
  showGallery.value = true;
}

function closeGallery() {
  showGallery.value = false;
}
</script>

<template>
  <div class="w-full h-full overflow-hidden p-4 md:p-6 gap-2 md:gap-4 flex flex-col justify-end md:grid home-grid">
    <!-- Gallery -->
    <div class="overflow-y-scroll hide-scroll rounded-lg md:col-span-2">
      <Transition>
        <GalleryContainer v-if="showGallery" @closeGalleryClicked="closeGallery" :images="currentGallery" />
      </Transition>
    </div>

    <!-- Book Now button -->
    <div class="flex flex-col justify-end align-center p-0 lg:p-8 md:col-span-1 lg:col-start-2">
      <Button append-icon="fa-solid fa-chevron-right"
        class="text-3xl p-4"
        @click="$emit('bookButtonClicked')"
      >
        Book Now
      </Button>
    </div>

    <!-- Side buttons -->
    <div class="md:col-span-1 lg:row-start-1 lg:col-start-3 flex flex-wrap md:justify-end lg:justify-start md:flex-col gap-2">
      <Button @click="onLandscapesButtonClicked" prepend-icon="fa-solid fa-tree" class="text-xl px-4 py-2 flex-1 md:flex-none">Landscapes</Button>
      <Button @click="onPortraitsButtonClicked" prepend-icon="fa-solid fa-user" class="text-xl px-4 py-2 flex-1 md:flex-none">Portraits</Button>
      <Button prepend-icon="fa-brands fa-square-instagram" class="text-xl px-4 py-2 flex-1 md:flex-none">Instagram</Button>
    </div>
  </div>
</template>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scroll {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

@media (min-width: 768px) {
  .home-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr min-content;
  }
}

@media (min-width: 1024px) {
  .home-grid {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr min-content;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
