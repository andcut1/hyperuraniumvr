/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      ...{
          customPrimary: "#6b54b6",
          customSecondary: "#fd3147",
      },
    }
  },
  plugins: [require("daisyui")],
}

