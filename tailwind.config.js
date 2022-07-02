/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        red: {
          700: '#EC1D24',
        },
        zinc: {
          700: "#151515"
        }
      }

    },
  },
  plugins: [],
}
