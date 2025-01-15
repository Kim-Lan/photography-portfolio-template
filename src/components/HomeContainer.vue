<script setup lang="ts">
import Button from './Button.vue'
</script>

<template>
  <div class="w-full h-full p-4 md:p-6 flex gap-2 md:gap-4 flex-col md:flex-row justify-end md:justify-center lg:justify-between">
    <div class="w-full md:w-0 lg:w-1/4">
    </div>
    <div class="flex flex-col justify-end align-center p-0 lg:p-8 w-full md:w-1/2 lg:w-1/3">
      <a href="https://github.com/Kim-Lan" target="_blank">
        <Button append-icon="fa-solid fa-chevron-right" class="text-3xl p-4">Book Now</Button>
      </a>
    </div>
    <div class="flex md:flex-col gap-2 w-full md:w-1/3 lg:w-1/4 justify-end lg:justify-start flex-wrap">
      <Button prepend-icon="fa-solid fa-tree" class="text-xl px-4 py-2 flex-1 md:flex-none">Landscapes</Button>
      <Button prepend-icon="fa-solid fa-user" class="text-xl px-4 py-2 flex-1 md:flex-none">Portraits</Button>
      <Button prepend-icon="fa-brands fa-square-instagram" class="text-xl px-4 py-2 flex-1 md:flex-none">Instagram</Button>
    </div>
    
  </div>
</template>
