const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors')
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
             //just add this below and your all other tailwind colors willwork
          ...colors
      }
  }
  },
  plugins: [],
});