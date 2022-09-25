/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(223, 87%, 63%)",
        paleBlue: "hsl(223, 100%, 88%)",
        lightRed: "hsl(354, 100%, 66%)",
        gray: "hsl(0, 0%, 59%)",
        veryDarkBlue: "hsl(209, 33%, 12%)",
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "Libre Franklin",
            fontSize: "20px",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
