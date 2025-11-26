<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from "./components/layout/Header.vue";
import AboutSection from "./components/sections/AboutSection.vue";
import ProjectsSection from "./components/sections/ProjectsSection.vue";
import SkillsSection from "./components/sections/SkillsSection.vue";
import ResumeSection from "./components/sections/ResumeSection.vue";
import ContactSection from "./components/sections/ContactSection.vue";
import Footer from "./components/layout/Footer.vue";
import profileImage from "./assets/profile.jpg";
import { profile } from "./data/profile";

gsap.registerPlugin(ScrollTrigger);

const contentRef = ref(null);
const activeSection = ref('home');
let lenis = null;
let observer = null;

const sections = ['home', 'about', 'projects', 'skills', 'resume', 'contact'];

const scrollTo = (id) => {
  if (lenis) {
    lenis.scrollTo(`#${id}`);
  } else {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

onMounted(() => {
  // Initialize Lenis on the right panel
  if (contentRef.value) {
    lenis = new Lenis({
      wrapper: contentRef.value,
      content: contentRef.value.firstElementChild, // The inner content wrapper
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update(); // Sync ScrollTrigger with Lenis
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Update ScrollTrigger scroller
    ScrollTrigger.defaults({
      scroller: contentRef.value
    });

    // Refresh ScrollTrigger after a short delay to ensure everything is loaded
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Intersection Observer for Active Section
    const options = {
      root: contentRef.value, // Observe within the scroll container
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle
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
  }
});

onUnmounted(() => {
  if (lenis) {
    lenis.destroy();
  }
  if (observer) {
    observer.disconnect();
  }
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
</script>

<template>
  <div class="flex flex-col md:flex-row h-screen bg-background font-sans text-primary overflow-hidden">
    <!-- Left Column: Fixed Info & Image -->
    <div 
      class="w-full md:w-[40%] h-[40vh] md:h-full relative z-0 flex flex-col items-center justify-center overflow-hidden bg-black group"
    >
      <!-- Background Image with Overlay -->
      <div 
        class="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-110"
        :style="{ backgroundImage: `url(${profileImage})` }"
      ></div>
      <div class="absolute inset-0 bg-black/40"></div>

      <!-- Content -->
      <div class="relative z-10 text-center p-8 text-white w-full max-w-lg">
        <div class="glitch-wrapper inline-block mb-4">
          <h1 
            class="text-5xl md:text-7xl font-bold glitch-title" 
            :data-text="profile.name"
          >
            {{ profile.name }}
          </h1>
        </div>
        <p class="text-xl md:text-2xl font-light mb-8 tracking-wide">
          <span class="typing-effect">{{ profile.role }}</span>
        </p>
        
        <div class="flex justify-center gap-4">
          <button 
            @click="scrollTo('projects')"
            class="px-6 py-2 border border-white/30 hover:bg-white hover:text-black transition-all duration-300 uppercase text-sm tracking-widest"
          >
            My Work
          </button>
          <button 
            @click="scrollTo('contact')"
            class="px-6 py-2 border border-white/30 hover:bg-white hover:text-black transition-all duration-300 uppercase text-sm tracking-widest"
          >
            Contact
          </button>
        </div>
      </div>
    </div>

    <!-- Right Column: Content (Scrollable) -->
    <div 
      ref="contentRef"
      class="w-full md:w-[60%] h-[60vh] md:h-full bg-background relative z-10 overflow-y-auto custom-scrollbar"
    >
      <div> <!-- Inner wrapper for Lenis -->
        <Header :active-section="activeSection" @navigate="scrollTo" />
        <main>
          <div id="home" class="h-0 w-0"></div>
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ResumeSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>

<style>
/* Custom Scrollbar for the right panel */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 20px;
}

/* Glitch Effect */
.glitch-wrapper {
  position: relative;
}

.glitch-title {
  position: relative;
  color: white;
}

.glitch-title::before,
.glitch-title::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black; /* Matches background */
}

.glitch-title::before {
  left: 2px;
  text-shadow: -1px 0 #ff00c1;
  clip-path: inset(44% 0 61% 0);
}

.glitch-title::after {
  left: -2px;
  text-shadow: -1px 0 #00fff9;
  clip-path: inset(50% 0 30% 0);
}

/* Animation triggers: Initial load and Hover */
.glitch-title {
  animation: glitch-skew 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.group:hover .glitch-title {
  animation: glitch-skew 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
}
.group:hover .glitch-title::before {
  animation: glitch-anim 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
}
.group:hover .glitch-title::after {
  animation: glitch-anim2 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
}

/* Keyframes */
@keyframes glitch-skew {
  0% { transform: skew(0deg); }
  20% { transform: skew(-2deg); }
  40% { transform: skew(2deg); }
  60% { transform: skew(-1deg); }
  80% { transform: skew(1deg); }
  100% { transform: skew(0deg); }
}

@keyframes glitch-anim {
  0% { clip-path: inset(80% 0 10% 0); transform: translate(-2px, 2px); }
  20% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -2px); }
  40% { clip-path: inset(50% 0 30% 0); transform: translate(-2px, 2px); }
  60% { clip-path: inset(20% 0 70% 0); transform: translate(2px, -2px); }
  80% { clip-path: inset(70% 0 5% 0); transform: translate(-2px, 2px); }
  100% { clip-path: inset(0% 0 100% 0); transform: translate(0); }
}

@keyframes glitch-anim2 {
  0% { clip-path: inset(10% 0 80% 0); transform: translate(2px, -2px); }
  20% { clip-path: inset(80% 0 10% 0); transform: translate(-2px, 2px); }
  40% { clip-path: inset(30% 0 50% 0); transform: translate(2px, -2px); }
  60% { clip-path: inset(70% 0 20% 0); transform: translate(-2px, 2px); }
  80% { clip-path: inset(5% 0 70% 0); transform: translate(2px, -2px); }
  100% { clip-path: inset(100% 0 0% 0); transform: translate(0); }
}

/* Typing Effect */
.typing-effect {
  border-right: 2px solid white;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  animation: typing 3s steps(40, end), blink-caret .75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 50% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: white; }
}
</style>
