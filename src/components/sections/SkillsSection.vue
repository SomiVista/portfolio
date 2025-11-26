<script setup>
import { ref } from 'vue';
import { skills } from '../../data/skills';
import { useScrollReveal } from '../../composables/useScrollReveal';

const sectionRef = ref(null);
useScrollReveal(sectionRef);

// Flatten top skills for progress bars (just an example selection)
const topSkills = skills.flatMap(cat => cat.items).filter(item => ['Vue.js', 'React', 'TypeScript', 'Tailwind CSS'].includes(item.name));
</script>

<template>
  <section id="skills" class="py-20 px-8 md:px-12 border-b border-border">
    <div ref="sectionRef">
      <div class="mb-12">
      <h2 class="text-xs font-bold tracking-widest uppercase mb-2 text-secondary">Expertise</h2>
      <h3 class="text-3xl font-bold text-primary">My Skills</h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Progress Bars for Top Skills -->
      <div>
        <h4 class="text-lg font-bold text-primary mb-6">Top Skills</h4>
        <div class="space-y-6">
          <div v-for="skill in topSkills" :key="skill.name">
            <div class="flex justify-between mb-2">
              <span class="text-sm font-medium text-primary">{{ skill.name }}</span>
              <span class="text-sm text-secondary">{{ skill.level }}%</span>
            </div>
            <div class="w-full bg-border h-1.5 rounded-full overflow-hidden">
              <div class="bg-primary h-full rounded-full" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pill Badges for All Skills -->
      <div>
        <h4 class="text-lg font-bold text-primary mb-6">All Skills</h4>
        <div class="space-y-6">
          <div v-for="category in skills" :key="category.category">
            <h5 class="text-sm font-bold text-secondary uppercase tracking-wider mb-3">{{ category.category }}</h5>
            <div class="flex flex-wrap gap-2">
              <span v-for="item in category.items" :key="item.name" class="px-3 py-1.5 bg-background border border-border text-primary text-sm rounded-full">
                {{ item.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>
