<script setup></script>

<template>
  <section class="text-gray-800 py-16 relative" id="about">
    <div
      class="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center"
    >
      <div class="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
        <h1 class="text-yellow-500 text-4xl mb-12">Front End Web Developer</h1>
        <h1 class="text-4xl font-bold text-gray-900 mb-8">
          Hey! I’m Somayeh Roohani
        </h1>
        <p class="text-lg text-gray-600 mb-6">
          Results-driven Frontend Web Developer with extensive experience in
          developing dynamic, user-friendly websites. Expert in front-end
          technologies including NuxtJS and VueJS. Proven track record of
          delivering high-quality projects for clients such as Dreamdays.ae.
          Holds a Bachelor's degree in Information Technology Engineering.
          Committed to continuous improvement, innovative solutions, and
          effective collaboration.
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
      <div class="relative z-10 custom-style-img">
        <img src="../assets/profile.png" alt="Profile Image" class="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-style-img {
  right: -15rem;
  top: -2rem;
  width: 25rem;
  img {
    border-radius: 7rem;
  }
}
</style>
