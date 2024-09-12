/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          50: "#404040",
          51: "#333333",
        },
       
        teal: {
          50: "#0496a6",
        },
        white: {
          50: "#f1f9fa",
        },
        orange: {
          50: "#ed964f",
        },
      },
      fontFamily: {
        sans: "Titillium Web",      
      },
      fontSize: {
        xxs: "0.625rem",
      },
      borderWidth: {
        1: "0.063rem",
      },
    },
  },
  plugins: [],
};
