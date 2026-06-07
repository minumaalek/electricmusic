/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'light': '0 0 12px black'
      },
      colors: {
        firstColor: 'rgb(var(--first-color))',
        secondColor: 'rgb(var(--second-color))'
      },
    },
  },
  plugins: [],

}
