/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ["Work-sans", "sans-serif"],
        spaceMono: ["Space-mono"],
        spaceMonoBold: ["Space-mono-bold"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        lightBlack: "#2B2B2B",
      },
    },
  },
  plugins: [],
};
