/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Add a custom breakpoint for extra small screens
      },
      fontFamily: {
        font1: ['Bebas', 'sans-serif'],
        font2: ['Exo', 'sans-serif'],
        font3: ['Playfair', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

