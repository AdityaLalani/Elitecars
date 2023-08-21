/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        golden: '#e9c060',
        silver: '#D8D8D8',
        gray: '#DCDB8',
        darkOrange: '#dc4d01'
      }
    },
  },
  plugins: [],
}