const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./main.js",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem"
    },
    extend: {
      colors: {
        primary: colors.cyan,
      },
    },
  },
  plugins: [],
}
