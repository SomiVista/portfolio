<script setup></script>

<template>
  <section class="text-gray-800 py-16 relative" id="about">
    <div
      class="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center"
    >
      <div class="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
        <h2 class="text-yellow-500 text-lg font-semibold mb-2">
          Front End Web developer
        </h2>
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Hello, my name is Somayeh Roohani
        </h1>
        <p class="text-lg text-gray-600 mb-6">
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </p>
        <div>
          <a
            href="#projects"
            class="bg-yellow-500 text-white font-semibold py-2 px-4 rounded mr-4"
          >
            Projects
          </a>
          <a
            href="https://www.linkedin.com/in/somivista/"
            target="_blank"
            class="bg-white border border-gray-400 text-gray-600 font-semibold py-2 px-4 rounded"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div class="w-full lg:w-1/2 relative">
        <div
          class="absolute top-0 right-0 w-full h-full bg-yellow-300 rounded-l-full lg:-mr-16"
        ></div>
        <img
          src="../assets/profile.png"
          alt="Profile Image"
          class="relative z-10 rounded-lg lg:max-w-sm mx-auto lg:mx-0"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
