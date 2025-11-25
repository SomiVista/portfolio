<script setup>
import Header from "./components/Header.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ResumeSection from "./components/ResumeSection.vue";
import ContactSection from "./components/ContactSection.vue";
import Footer from "./components/Footer.vue";
import profileImage from "./assets/profile.jpg";
</script>

<template>
  <div class="flex flex-col md:flex-row min-h-screen bg-background font-sans text-primary">
    <!-- Left Column: Fixed Image -->
    <div 
      class="w-full md:w-[40%] h-[50vh] md:h-screen md:fixed top-0 left-0 bg-cover bg-center z-0"
      :style="{ backgroundImage: `url(${profileImage})` }"
    >
      <div class="absolute inset-0 bg-black/10"></div>
    </div>

    <!-- Right Column: Content -->
    <div class="w-full md:w-[60%] md:ml-[40%] bg-background relative z-10 shadow-2xl">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  </div>
</template>

<style>
/* Global smooth scroll is handled by JS for nav links, but nice to have here too */
html {
  scroll-behavior: smooth;
}
</style>
