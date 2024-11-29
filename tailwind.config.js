/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "sans-serif"], // Set Arial as the default sans-serif font
      },
      colors: {
        primary: {
          DEFAULT: "rgba(22, 83, 142, 1)",
          hover: "rgba(18, 66, 113, 1)",
          disabled: "rgba(161, 191, 214, 1)",
          70: "rgba(22, 83, 142, 0.7)",
          10: "rgba(22, 83, 142, 0.1)",
        },
        secondary: {
          background: "rgba(250, 250, 250, 1)",
          border: "rgba(229, 231, 235, 1)",
        },
        danger: {
          DEFAULT: "rgba(251, 116, 116, 110)",
        },
        black: {
          DEFAULT: "#000000", // 100% opacity
          87: "rgba(0, 0, 0, 0.87)", // 87% opacity
          60: "rgba(0, 0, 0, 0.6)", // 60% opacity
          40: "rgba(0, 0, 0, 0.4)", // 40% opacity
          20: "rgba(0, 0, 0, 0.2)", // 20% opacity
        },
      },
    },
  },
  plugins: [],
};
