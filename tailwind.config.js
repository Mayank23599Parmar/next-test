/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "300px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        color_gray: "#c0c0c0",
        color_blue: "#2193b0",
        color_00000050: "rgba(0,0,0,0.5)",
        success: "#849b5c",
        danger: "#da4f49",
        warning: "#faa732",
      },
      backgroundImage: {
        blue: "linear-gradient(to right,#6dd5ed,#2193b0)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
