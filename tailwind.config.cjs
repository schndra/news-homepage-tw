/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "780px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      //primary colors
      primarySoftOrange: "#e9ab53",
      primarySoftRed: "#f15e50",

      //neutral colors
      nOffWhite: "#fffdfa",
      nGrayishBlue: "#c5c6ce",
      nDarkGrayishBlue: "#5d5f79",
      nVeryDarkBlue: "#00001a",
    },

    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
      },
      width: {
        vw: "90vw",
        fixed: "450px",
        mFixed: "1440px",
      },
    },
  },
  plugins: [],
};
