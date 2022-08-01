/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-royal': '#281B24',
        'thunder': '#3E3842',
        'stormy-sky': '#74858F',
        'foam': '#A4BDBE',
        'baby-bird': '#BDD6DA'
      }
    },
  },
  plugins: [],
}