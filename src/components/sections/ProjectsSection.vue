<script setup>
import { projects } from '../../data/projects';
</script>

<template>
  <section id="projects" class="py-20 px-8 md:px-12 border-b border-border bg-background">
    <div class="mb-12">
      <h2 class="text-xs font-bold tracking-widest uppercase mb-2 text-secondary">Portfolio</h2>
      <h3 class="text-3xl font-bold text-primary">Featured Projects</h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="project in projects" :key="project.id" class="group bg-surface shadow-sm hover:shadow-md transition-all duration-300 border border-border overflow-hidden rounded-sm">
        <div class="relative overflow-hidden h-48">
          <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        </div>
        <div class="p-6">
          <h4 class="text-xl font-bold text-primary mb-2">{{ project.title }}</h4>
          <p class="text-secondary text-sm mb-4 line-clamp-3">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 mb-6">
            <span v-for="tech in project.tech" :key="tech" class="px-2 py-1 bg-background text-xs font-medium text-secondary border border-border rounded">
              {{ tech }}
            </span>
          </div>
          <div class="flex gap-4">
            <a :href="project.liveUrl" class="text-sm font-bold text-primary hover:text-secondary transition-colors border-b border-primary hover:border-secondary pb-0.5">Live Demo</a>
            <a :href="project.codeUrl" class="text-sm font-bold text-primary hover:text-secondary transition-colors border-b border-primary hover:border-secondary pb-0.5">View Code</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
