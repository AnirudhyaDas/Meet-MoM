/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // This is crucial: it tells Tailwind to look for the 'dark' class
  theme: {
    extend: {},
  },
  plugins: [],
}