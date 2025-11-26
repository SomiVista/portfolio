<script setup>
import { ref } from 'vue';
import { projects } from '../../data/projects';
import { useScrollReveal } from '../../composables/useScrollReveal';

const sectionRef = ref(null);
useScrollReveal(sectionRef);
</script>

<template>
  <section id="projects" class="py-20 px-8 md:px-12 border-b border-border bg-background">
    <div ref="sectionRef">
      <!-- Header -->
      <div class="mb-12">
      <h2 class="text-xs font-bold tracking-widest uppercase mb-2 text-secondary">Portfolio</h2>
      <h3 class="text-3xl font-bold text-primary">Featured Projects</h3>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
      <div 
        v-for="project in projects" 
        :key="project.id" 
        class="group flex flex-col"
      >
        <!-- Image Container with Zoom Effect -->
        <div class="relative overflow-hidden mb-6 cursor-pointer">
          <div class="aspect-w-16 aspect-h-10 bg-gray-200">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110" 
            />
          </div>
          <!-- Overlay (Optional, for better text contrast if needed, or just hover effect) -->
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          
          <!-- Floating Category/Tech (Optional style choice, keeping it clean below instead) -->
        </div>

        <!-- Content -->
        <div>
          <h4 class="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
            <a :href="project.liveUrl" target="_blank">{{ project.title }}</a>
          </h4>
          
          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-2 mb-3 text-xs font-medium text-secondary uppercase tracking-wider">
            <span v-for="(tech, index) in project.tech" :key="tech">
              {{ tech }}<span v-if="index < project.tech.length - 1" class="mx-1">•</span>
            </span>
          </div>

          <!-- Description (Optional, keeping it brief) -->
          <!-- <p class="text-secondary text-sm leading-relaxed mb-4">{{ project.description }}</p> -->
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<style scoped>
/* Aspect Ratio Utility if not in Tailwind config */
.aspect-w-16 {
  position: relative;
  padding-bottom: 62.5%; /* 10/16 */
}
.aspect-w-16 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
</style>
