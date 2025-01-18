<template>
  <div class="absolute w-full h-full bg-gray-900 bg-opacity-80 flex justify-center">
    <div class="w-fit my-auto bg-white rounded-lg">
      <!-- Close Modal button -->
      <div class="flex justify-end">
        <div
          @click="$emit('closeModalClicked')"
          class="self-end py-1 px-2.5 text-center text-teal-600 hover:text-teal-900 hover:bg-gray-300 active:bg-gray-400 rounded-tr-lg"
        >
          <font-awesome-icon icon="fa-solid fa-x" />
        </div>
      </div>

      <!-- Modal Header -->
      <div class="text-center text-teal-600 font-bold text-2xl mb-2">
        Book Now
      </div>

      <!-- Modal Form -->
      <form class="p-4">
        <label for="name">Name:</label>
        <input type="text" name="name" />

        <label for="email">Email Address:</label>
        <input type="text" name="email" />

        <label for="message">Message:</label>
        <textarea name="message" rows="3" />

        <button type="button" @click="$emit('closeModalClicked')">Send Message</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
form {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 6px;
  align-items: baseline;
}

input, textarea {
  @apply bg-gray-200 rounded-sm p-1;
}

button {
  @apply bg-teal-600 text-white rounded py-2 px-3 hover:bg-teal-300 col-span-2 mt-6;
}
</style>
