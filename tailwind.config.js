/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class", // omogućava dark mode preko .dark klase na <html>
  theme: {
    extend: {
      fontFamily: {
        // Koristimo promenljive definisane preko next/font za Google fontove
        inter: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        bebas: ["var(--font-bebas)", "sans-serif"]
      },
      colors: {
        // Prilagođene boje (koriste CSS varijable definisane u globals.css)
        primary: "rgb(var(--color-primary))",
        accent: "rgb(var(--color-accent))",
        main: "rgb(var(--color-main))",
        desc: "rgb(var(--color-desc))"
      },
      boxShadow: {
        // Prilagođena senka za isticanje elemenata (svetloplava aura)
        "main": "0 6px 64px #35d0fc44, 0 1.5px 9px #0000000a"
      }
    }
  },
  plugins: []
}
