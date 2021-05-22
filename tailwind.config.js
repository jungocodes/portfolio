const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      default: '#333333',
      primaryColor: '#e3e3e3',
      secondaryColor: '#c60021',
      mainAccent:'#f6f6f8',
      accentColor: '#bdbcbd',

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}