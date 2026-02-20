/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        museum: {
          bg: "#05070f",
          accent: "#1ec9ff",
          panel: "#101c33"
        }
      },
      boxShadow: {
        neon: "0 0 18px rgba(30, 201, 255, 0.6)"
      }
    }
  },
  plugins: []
};
