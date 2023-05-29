/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      main: "#3a8885",
      lightgrey: "#999999",
      thinborder: "#e0e0e0",
      // lightgrey: "#5F7161",
    },
  },
  plugins: [],
};
