
<script setup lang="ts">
import type { Image } from '../types/Image.ts'

const props = defineProps<{
  images?: Image[]
}>();

</script>

<template>
  <div class="bg-white rounded-lg shadow-md shadow-gray-800">

    <!-- Close Gallery button -->
    <div class="flex justify-end">
      <div
        @click="$emit('closeGalleryClicked')"
        class="self-end py-1 px-2.5 text-center text-teal-600 hover:text-teal-900 hover:bg-gray-300 active:bg-gray-400 rounded-tr-lg"
      >
        <font-awesome-icon icon="fa-solid fa-x" />
      </div>
    </div>

    <!-- Image Gallery -->
    <div class="p-4 gap-4 flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4">
      <div v-for="(image, index) in props.images" :key="index"
        class="flex"
      >
        <img class="rounded-lg object-cover" :src="image.src" :alt="image.alt" />
      </div>
    </div>
  </div>
</template>
