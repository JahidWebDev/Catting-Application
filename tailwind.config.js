/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'popp': [ "Poppins", "sans-serif"],
        'nuni': [ "Nunito", "sans-serif"],
        'sans': [ "Open Sans", "sans-serif"]
      },
      colors: {
        'myhomecolor': '#5F35F5',
        'myiconcolor': '#BAD1FF'
      }
    },
  }, 
  plugins: [],
}