// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Playfair Display', 'serif'],
        'script': ['Dancing Script', 'cursive'],
      },
      colors: {
        'primary': '#B56576',
        'secondary': '#E0BBE4',
        'accent': '#FFD1DC',
        'background': '#FDF6F0',
      },
    },
  },
  plugins: [],
}