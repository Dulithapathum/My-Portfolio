/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "main-color": "#0485cf",
        blue: "#0000ff",
        "blue-dark": "#18293c",
        orange: "#ffa500",
        "green-yellow": "#cddc39",
        "pink-light": "#efa2b4",
        "cyan-light": "#aef1ee",
        white: "#ffffff",
        "white-alpha-40": "rgba(255, 255, 255, 0.40)",
        "white-alpha-25": "rgba(255, 255, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
