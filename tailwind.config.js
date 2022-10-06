/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main' : '#2B755F',
        'secondary' : '#399982',
        'tertiary' : '#90BDB2',
      }
    },
  },
  plugins: [],
}