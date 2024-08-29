import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/portfolio/", // Ensure this is correct
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: [
        "/portfolio/assets/index-DxkNDdaS.css",
        "/portfolio/assets/index-Be2pyhmN.js",
        // add other assets here if needed
      ],
    },
  },
});
