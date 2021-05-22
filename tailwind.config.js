const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      primaryColor: '#111111',
      secondaryColor: '#452475',
      mainAccent:'#2b2b2b',
      accentColor: '#f2f4f5',

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}