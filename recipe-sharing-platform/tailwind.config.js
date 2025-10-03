/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",              // for Vite
    "./public/index.html",       // for the checker
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
