/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          800: "#4e2c5b",
          400: "#6b437b",
          200: "#8a619b",
          100: "#d199e8",
        },
        secondary: {
          800: "#111827",
          400: "#6B7280",
          200: "#C9CDD3",
          100: "#F9FAFB",
        },
        tertiary: {
          800: "#EC903A",
          400: "#F6A356",
          200: "#FFC28A",
          100: "#FFE3CA",
        },
        accent: {
          800: "#90A905",
          400: "#BAC320",
          200: "#EBF541",
          100: "#F8FCAD",
        },
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lora: ["Lora", "serif"],
      },
    },
  },

  plugins: [],
};
