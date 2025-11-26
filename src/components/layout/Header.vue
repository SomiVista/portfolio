<script setup>
const props = defineProps({
  activeSection: {
    type: String,
    default: 'home'
  }
});

const emit = defineEmits(['navigate']);

const sections = ['home', 'about', 'projects', 'skills', 'resume', 'contact'];

const handleNavClick = (id) => {
  emit('navigate', id);
};
</script>

<template>
  <header class="sticky top-0 z-50 bg-surface/90 backdrop-blur-sm border-b border-border px-8 md:px-12 py-4 flex justify-between items-center transition-all duration-300">
    <div class="text-xl font-bold text-primary tracking-tighter">
      SOMI<span class="font-normal">VISTA</span>
    </div>
    
    <!-- Desktop Nav -->
    <nav class="hidden md:flex space-x-6">
      <a 
        v-for="section in sections" 
        :key="section"
        :href="`#${section}`"
        @click.prevent="handleNavClick(section)"
        class="text-sm font-medium uppercase tracking-wider transition-all duration-300 relative group"
        :class="activeSection === section ? 'text-primary' : 'text-secondary hover:text-primary'"
      >
        {{ section }}
        <span 
          class="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300"
          :class="activeSection === section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"
        ></span>
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
