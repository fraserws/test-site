/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3A70EE",

          secondary: "#465779",

          accent: "#F3F9FF",

          neutral: "#1EC4C7",

          "base-100": "#FFFFFF",

          info: "#878787",

          success: "#BFFFDC",

          warning: "#DB7706",

          error: "#FFC3C3",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
};
