/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "App.js",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      width: {
        'header': 'calc(100% - 250px)',
      },
      height: {
        'headerh': 'calc(100% - 170px)',
      },
    },
  },
  plugins: [],
}
