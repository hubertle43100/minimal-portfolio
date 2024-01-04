/**  @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["Oswald", "serif"],
        SourceCodePro: ["Source Code Pro", "monospace", "sans-serif"],
      },
      backgroundColor: {
        "green-300": "#556B2F",
        "swift-300": "#FA7343",
        "react-300": "#68DBFB",
        "onyx-300": "#353839",
        "sage-300": "#92AFAD",
      },
    },
  },
  plugins: [],
};
