/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "#0252CD",
        "primary-dark": "#428DFF",
        secondary: "#FFBE62",
        "white-900": "#FFFFFF",
        "white-800": "#F3F8FF",
        "white-500": "#6F74A7",
        "black-200": "#151E2C",
        "black-300": "#192333",
        "black-400": "#778295",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
