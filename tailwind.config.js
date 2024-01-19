/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 50s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        ...colors,
        ...{
          customPrimary: "#6b54b6",
          customSecondary: "#fd3147",
          customBgInput: "#22152c"
        },
      }
    },
    plugins: [],
  }
}

