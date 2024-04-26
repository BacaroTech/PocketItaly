/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        pocket_green: '#0C4F57',
        pocket_yellow: '#E1CE7A',
        pocket_orange: '#DB995A',
        pocket_white: '#C7D8D8',
        pocket_black: '#0E0F10',
        pocket_blue: '#4A5899',
        pocket_purple: '#8C5383',
        pocket_dark_red: '#92374D',
        pocket_red: '#92374D',
        pocket_light_green: '#4A9957',
        'pocket_yellow_p': {
          '50': '#fcfaee',
          '100': '#f4efd1',
          '200': '#e9de9e',
          '300': '#e1ce7a',
          '400': '#d6b649',
          '500': '#cc9c34',
          '600': '#b47b2b',
          '700': '#965d27',
          '800': '#7b4a25',
          '900': '#663d21',
          '950': '#3a1f0e',
      },
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

