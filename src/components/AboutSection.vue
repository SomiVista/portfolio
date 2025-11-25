<script setup>
import { profile } from '../data/profile';

const { bio, name, address, email, phone, services, interests } = profile;
</script>

<template>
  <section id="about" class="py-20 px-8 md:px-12 border-b border-border">
    <div class="mb-12">
      <h2 class="text-xs font-bold tracking-widest uppercase mb-2 text-secondary">About Me</h2>
      <h3 class="text-3xl font-bold text-primary">Biography</h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
      <div class="md:col-span-2">
        <h4 class="text-xl font-medium mb-4 text-primary">Hello there! My name is <span class="font-bold">{{ name }}</span>.</h4>
        <p class="text-secondary leading-relaxed mb-6">{{ bio }}</p>
      </div>
      <div class="md:col-span-1">
        <ul class="space-y-4 text-sm">
          <li class="flex justify-between border-b border-border pb-2">
            <span class="font-medium text-primary">Name:</span>
            <span class="text-secondary">{{ name }}</span>
          </li>
          <li class="flex justify-between border-b border-border pb-2">
            <span class="font-medium text-primary">Address:</span>
            <span class="text-secondary">{{ address }}</span>
          </li>
          <li class="flex justify-between border-b border-border pb-2">
            <span class="font-medium text-primary">Email:</span>
            <span class="text-secondary">{{ email }}</span>
          </li>
          <li class="flex justify-between border-b border-border pb-2">
            <span class="font-medium text-primary">Phone:</span>
            <span class="text-secondary">{{ phone }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <div class="flex items-center mb-6">
          <h4 class="text-lg font-bold text-primary uppercase tracking-wider">Services</h4>
          <div class="flex-grow h-px bg-border ml-4"></div>
        </div>
        <ul class="space-y-3">
          <li v-for="service in services" :key="service" class="flex items-center text-secondary">
            <span class="mr-2 text-primary">►</span> {{ service }}
          </li>
        </ul>
      </div>
      <div>
        <div class="flex items-center mb-6">
          <h4 class="text-lg font-bold text-primary uppercase tracking-wider">Interests</h4>
          <div class="flex-grow h-px bg-border ml-4"></div>
        </div>
        <ul class="space-y-3">
          <li v-for="interest in interests" :key="interest" class="flex items-center text-secondary">
            <span class="mr-2 text-primary">►</span> {{ interest }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
