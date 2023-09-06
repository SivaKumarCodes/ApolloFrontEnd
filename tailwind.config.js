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
      lightbluebg: "#f5f5f5",
      greentext: "#03a685",
      greenbg: "#1aab2a",
      fontcolor: "#525252",
      dangerRed: "#dc3545",
      // lightgrey: "#5F7161",
    },
  },
  plugins: [],
};
