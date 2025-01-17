/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        softOrange : "hsl(35, 77%, 62%)",
        softRed : "hsl(5, 85%, 63%)",
        OffWhite : "hsl(36, 100%, 99%)",
        grayishBlue : "hsl(233, 8%, 79%)",
        darkGrayishBlue : "hsl(236, 13%, 42%)",
        veryDarkBlue : "hsl(240, 100%, 5%)",
        darkGrayishTransparent: "hsla(236, 13%, 42%, 0.354)"
      },
      fontFamily: {
        interFont : ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}

