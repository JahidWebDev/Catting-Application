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
        'myhomecolor': '#14141E',
        'myiconcolor': '#1053FC',
        'miconcolor': '#1053FC',
        'bodyColor': '#fff8e1'
      },
      dropShadow: {
           '4xl': [
            '0 -15px 15px rgba(255,255,255,0.05)',
            'inset 0 -15px 15px rgba(255,255,255,0.05)',
            '0 15px 15px rgba(0,0,0,0.7)',
            'inset 0 15px 15px rgba(0,0,0,0.4)'
        ]
      }
    },
  }, 
  plugins: [],
}

