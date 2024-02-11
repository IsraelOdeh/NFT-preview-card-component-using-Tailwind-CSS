/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "cSoftblue": "hsl(215, 51%, 70%)",
        "cCyan": "hsl(178, 100%, 50%)",
        "cVerydarkblue(mainBG)": "hsl(217, 54%, 11%)",
        "cVerydarkblue(cardBG)": "hsl(216, 50%, 16%)",
        "cVerydarkblue(line)": "hsl(215, 32%, 27%)",
        "cWhite": "hsl(0, 0%, 100%)",
      },
      fontFamily:{
        "outfit" : ['Outfit', "sans-serif"]
      },
      backgroundImage:{
        "vision": "url('/assets/images/icon-view.svg')"
      }
    },
  },
  plugins: [],
}

