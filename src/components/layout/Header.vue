<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const sections = ['home', 'about', 'projects', 'skills', 'resume', 'contact'];
const activeSection = ref('home');

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Intersection Observer to update active link
let observer = null;

onMounted(() => {
  const options = {
    root: null, // viewport
    rootMargin: '-50% 0px -50% 0px', // trigger when section is in middle of viewport
    threshold: 0
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, options);

  sections.forEach((id) => {
    const element = document.getElementById(id);
    if (element) observer.observe(element);
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <header class="sticky top-0 z-50 bg-surface/90 backdrop-blur-sm border-b border-border px-8 md:px-12 py-4 flex justify-between items-center">
    <div class="text-xl font-bold text-primary tracking-tighter">
      SOMI<span class="font-normal">VISTA</span>
    </div>
    
    <!-- Desktop Nav -->
    <nav class="hidden md:flex space-x-6">
      <a 
        v-for="section in sections" 
        :key="section"
        :href="`#${section}`"
        @click.prevent="scrollTo(section)"
        class="text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:text-primary"
        :class="activeSection === section ? 'text-primary' : 'text-secondary'"
      >
        {{ section }}
      </a>
    </nav>

    <!-- Mobile Nav Toggle (Simple placeholder) -->
    <button class="md:hidden text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </header>
</template>
