<script setup lang="ts">
const props = defineProps<{
  prependIcon?: string,
  appendIcon?: string,
}>();
</script>

<template>
  <button type="button" class="bg-white hover:bg-gray-300 active:bg-gray-400 text-teal-600 hover:text-teal-900 rounded-lg shadow-md shadow-gray-800 flex align-center justify-between gap-2">
    <div>
      <font-awesome-icon v-if="props.prependIcon" :icon="props.prependIcon" />
    </div>
    <div class="font-semibold">
      <slot />
    </div>
    <div>
      <font-awesome-icon v-if="props.appendIcon" :icon="props.appendIcon" />
    </div>
  </button>
</template>
