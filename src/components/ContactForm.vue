<template>
  <div class="p-8 rounded-lg w-full max-w-lg mx-auto">
    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
      Contact Me
    </h2>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="name" class="block text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          class="w-full mt-2 p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          class="w-full mt-2 p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="mb-6">
        <label for="message" class="block text-gray-700">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          class="w-full mt-2 p-2 border border-gray-300 rounded"
          required
        ></textarea>
      </div>
      <div class="flex justify-center">
        <button
          type="submit"
          class="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition duration-300 w-full"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {
  console.log("Form submitted:", form);
};
</script>
