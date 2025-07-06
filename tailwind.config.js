/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00e0ff",
        accent: "#38d4f7",
        main: "#181d23",
        desc: "#334155",
      },
      boxShadow: {
        main: "0 6px 64px #35d0fc44, 0 1.5px 9px #0000000a"
      }
    }
  },
  plugins: []
}
