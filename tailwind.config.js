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
        "second-color": "#18293c",
        "white-alpha-40": "rgba(255, 255, 255, 0.40)",
        "white-alpha-25": "rgba(255, 255, 255, 0.25)",
      },
      backgroundImage: {
        "custom-linear":
          "linear-gradient(160deg, #0094e9a3 10%, #80d0c7b1 50%)",
      },
      keyframes: {
        gradientAnimation: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradient: "gradientAnimation 10s ease infinite",
      },
    },
  },
  plugins: [],
};
