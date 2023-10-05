/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "rango-home": "#CEBEA4",
        "rango-luxury": "#0D0D0D",
        "rango-orange": "#FF5631",
        "rango-button": "#FF5631",
        "rango-input": "#1E1E1E",
        "rango-task": "#47423A",
        "rango-home-text": "#AB9D89",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
