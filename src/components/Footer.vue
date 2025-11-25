<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="py-8 px-8 md:px-12 bg-surface border-t border-border text-center">
    <p class="text-secondary text-sm">
      Copyright © {{ currentYear }} Somi Vista. All rights reserved.
    </p>
  </footer>
</template>
