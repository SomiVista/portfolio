<script setup>
import { ref } from 'vue';
import { profile } from '../../data/profile';
import { useScrollReveal } from '../../composables/useScrollReveal';

const sectionRef = ref(null);
useScrollReveal(sectionRef);
</script>

<template>
  <section id="about" class="py-20 px-8 md:px-12 border-b border-border bg-surface">
    <div ref="sectionRef">
      <!-- Header -->
      <div class="mb-12">
      <h2 class="text-xs font-bold tracking-widest uppercase mb-2 text-secondary">About Me</h2>
      <h3 class="text-3xl font-bold text-primary">Biography</h3>
    </div>

    <!-- Bio & Info Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
      <!-- Left: Bio -->
      <div class="md:col-span-2">
        <h4 class="text-xl font-medium mb-4 text-primary">
          I'm <span class="font-bold">{{ profile.name }}</span>, a {{ profile.role }}
        </h4>
        <p class="text-secondary leading-relaxed text-justify whitespace-pre-line">
          {{ profile.bio }}
        </p>
      </div>

      <!-- Right: Key Info -->
      <div class="md:col-span-1">
        <ul class="space-y-4 text-sm">
          <li 
            v-for="(item, index) in profile.info" 
            :key="index"
            class="flex justify-between border-b border-border pb-2"
          >
            <span class="font-medium text-primary">{{ item.label }}:</span>
            <span class="text-secondary text-right">{{ item.value }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Skills Section -->
    <div>
      <div class="flex items-center mb-8">
        <h4 class="text-lg font-bold text-primary uppercase tracking-wider">Technical Skills</h4>
        <div class="flex-grow h-px bg-border ml-4"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(skillGroup, index) in profile.skills" :key="index">
          <h5 class="font-bold text-primary mb-3 text-sm">{{ skillGroup.category }}</h5>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="skill in skillGroup.items" 
              :key="skill"
              class="px-3 py-1 bg-border/30 text-secondary text-xs rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300 cursor-default"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>
