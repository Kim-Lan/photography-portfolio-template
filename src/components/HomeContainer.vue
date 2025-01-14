<script setup lang="ts">
import Button from './Button.vue'
</script>

<template>
  <div class="w-full h-full p-6 max-sm:p-4 flex md:gap-4 max-sm:gap-2 max-sm:flex-col lg:justify-between md:justify-center max-sm:justify-end">
    <div class="lg:w-1/4 max-sm:w-full">
    </div>
    <div class="flex flex-col justify-end align-center lg:p-12 max-sm:p-0 lg:w-1/3 md:w-1/2 max-sm:w-full">
      <a href="https://github.com/Kim-Lan" target="_blank">
        <Button append-icon="fa-solid fa-chevron-right" class="text-3xl p-4">Book Now</Button>
      </a>
    </div>
    <div class="flex md:flex-col gap-2 lg:w-1/4 md:w-1/3 max-sm:w-full lg:justify-start md:justify-end max-sm:flex-wrap">
      <Button prepend-icon="fa-solid fa-tree" class="text-xl px-4 py-2 max-sm:flex-1">Landscape</Button>
      <Button prepend-icon="fa-solid fa-user" class="text-xl px-4 py-2 max-sm:flex-1">Portrait</Button>
      <Button prepend-icon="fa-brands fa-square-instagram" class="text-xl px-4 py-2 max-sm:flex-1">Instagram</Button>
    </div>
    
  </div>
</template>
