<script setup></script>

<template>
  <section class="text-gray-800 py-16 relative" id="about">
    <div
      class="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center"
    >
      <div class="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
        <h2 class="text-yellow-500 text-lg font-semibold mb-2">
          Front End Web Developer
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
          class="absolute top-0 right-0 w-full h-full lg:w-72 lg:h-72 -mt-20 z-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            fill="#F9C74F"
            class="w-full h-full"
          >
            <path
              d="M480.5,800C359.1,800,269.2,735.3,178.4,668.7c-72.3-51.8-138.2-113.1-157.7-204C-7.9,310.1,56.3,145.8,181.9,69.9,284.3,9.3,412.5-2.1,516.9,30.4,617.8,62.1,690,145.2,752.7,234.8c58,83.2,105.4,184.5,46.8,280.3C756.1,633,652.7,800,480.5,800Z"
            />
          </svg>
        </div>
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
