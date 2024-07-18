/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [  "./src/**/*.{js,jsx,ts,tsx}",],
    darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'regalBlue': '#0079FF',
        'backgroundColor':'#F6F8FF',
        'WhiteThemebackgroundColor':'#1E2A47'
      },
      borderRadius: {
        'large': '18px',
      }
    },
  },
  plugins: [],

}

