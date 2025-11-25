<script setup>
import { reactive } from "vue";
import { profile } from '../data/profile';

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {
  // Simple validation check
  if (!form.name || !form.email || !form.message) {
    alert("Please fill in all fields.");
    return;
  }
  console.log("Form submitted:", form);
  alert("Message sent! (This is a demo)");
  form.name = "";
  form.email = "";
  form.message = "";
};
</script>

<template>
  <section id="contact" class="py-20 px-8 md:px-12 border-b border-border">
    <div class="mb-12">
      <h2 class="text-xs font-bold tracking-widest uppercase mb-2 text-secondary">Contact</h2>
      <h3 class="text-3xl font-bold text-primary">Get in Touch</h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div>
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <input
              type="text"
              id="name"
              v-model="form.name"
              placeholder="Name"
              class="w-full p-3 bg-background border border-border text-primary focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              v-model="form.email"
              placeholder="Email"
              class="w-full p-3 bg-background border border-border text-primary focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>
          <div>
            <textarea
              id="message"
              v-model="form.message"
              placeholder="Message"
              rows="5"
              class="w-full p-3 bg-background border border-border text-primary focus:outline-none focus:border-primary transition-colors"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              class="px-8 py-3 border-2 border-primary text-primary font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <!-- Contact Info -->
      <div class="space-y-8">
        <div>
          <h4 class="text-lg font-bold text-primary mb-2">Address</h4>
          <p class="text-secondary">{{ profile.address }}</p>
        </div>
        <div>
          <h4 class="text-lg font-bold text-primary mb-2">Phone</h4>
          <p class="text-secondary">{{ profile.phone }}</p>
        </div>
        <div>
          <h4 class="text-lg font-bold text-primary mb-2">Email</h4>
          <a :href="`mailto:${profile.email}`" class="text-secondary hover:text-primary transition-colors">{{ profile.email }}</a>
        </div>
        <div>
          <h4 class="text-lg font-bold text-primary mb-4">Follow Me</h4>
          <div class="flex space-x-4">
            <a :href="profile.social.linkedin" target="_blank" rel="noopener noreferrer" class="text-secondary hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a :href="profile.social.github" target="_blank" rel="noopener noreferrer" class="text-secondary hover:text-primary transition-colors">
              GitHub
            </a>
            <a :href="profile.social.twitter" target="_blank" rel="noopener noreferrer" class="text-secondary hover:text-primary transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
