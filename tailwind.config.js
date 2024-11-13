/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Red_Hat_Display": ['"Red Hat Display"', ...defaultTheme.fontFamily.sans],
      },
      colors : {
        "paleBlue" : "#e0e8ff",
        "brightBlue" : "#3829e0",
        "veryPaleBlue" : "#f5f7ff",
        "desaturatedBlue" : "#7280a7",
        "darkBlue" : "#1f2f56", 
      },
      backgroundImage : {
       'bgMobile' : "url('/src/assets/pattern-background-mobile.svg')",
       'bgDesktop' : "url('/src/assets/pattern-background-desktop.svg')",
      }
    },
  },
  plugins: [],
}