/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      licorice: "#0D0106",
      polynesian: "#004E98",
      lapis: "#1D5E9F",
      chilli: "#E01300",
      vermillion: "#FB4437",
      gold: "#E5AB24",
      ecru: "#D5B772",
      silver: "#CCCCCF",
      white: "#FBFBFF",
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
