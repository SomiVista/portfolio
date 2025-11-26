<script setup>
import { profile } from '../../data/profile';
</script>

<template>
  <section id="home" class="min-h-screen flex items-center justify-center py-20 px-8 md:px-12 border-b border-border bg-surface">
    <div class="text-center">
      <h1 class="text-4xl md:text-6xl font-bold text-primary mb-4">{{ profile.name }}</h1>
      <p class="text-xl text-secondary mb-8">{{ profile.role }}</p>
      <div class="flex justify-center gap-4">
        <a href="#projects" class="px-8 py-3 border-2 border-primary bg-primary text-white font-bold text-sm uppercase tracking-wider hover:bg-transparent hover:text-primary transition-all duration-300">
          View Work
        </a>
        <a href="#contact" class="px-8 py-3 border-2 border-primary text-primary font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300">
          Contact Me
        </a>
      </div>
    </div>
  </section>
</template>
