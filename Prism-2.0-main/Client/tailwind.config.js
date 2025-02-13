/** @type {import('tailwindcss').Config} */
const { nextui, colors } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
        "-10": "-10",
      },
      colors: {
        prismpurple: "#9747FF",
      },
      fontFamily: {
        blanka: ["Blanka", "sans-serif"],
        nunito_sans: ["Nunito Sans", "sans-serif"],
        sephora: ["Sephora", "sans-serif"],
        montseratte: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        gradient_mesh: "url('/src/assets/Grid_1.png')",
        prism_logo: "url('/src/assets/prism_logo.png')",
      },
      keyframes: {
        plusRotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(45deg)" },
        },
        plusRevRotate: {
          "0%": { transform: "rotate(45deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        plusRotate: "plusRotate 0.3s linear 1 forwards",
        plusRevRotate: "plusRevRotate 0.3s linear 1 forwards",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
