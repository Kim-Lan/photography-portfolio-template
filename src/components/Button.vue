<script setup lang="ts">
const props = defineProps<{
  prependIcon?: string,
  appendIcon?: string,
}>();
</script>

<template>
  <div class="bg-gray-50 hover:bg-gray-300 rounded-lg text-teal-600 shadow-md shadow-gray-800 flex align-center justify-between gap-2">
    <div>
      <font-awesome-icon v-if="props.prependIcon" :icon="props.prependIcon" />
    </div>
    <div class="font-semibold">
      <slot />
    </div>
    <div>
      <font-awesome-icon v-if="props.appendIcon" :icon="props.appendIcon" />
    </div>
  </div>
</template>
