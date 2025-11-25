module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#333333", // Dark grey text
        secondary: "#666666", // Lighter grey for secondary text
        background: "#f9f9f9", // Off-white background
        surface: "#ffffff", // White background for cards/sections
        border: "#e5e5e5", // Subtle lines
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
