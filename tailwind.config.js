/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
<<<<<<< HEAD
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette for the dark theme
        'bg': '#060e1c',       // osnovna pozadina (tamna)
        'bg2': '#15294c',      // sekundarna pozadina (tamno plava)
        'border': '#202d45',   // boja za ivice i linije
        'main': '#ffffff',     // glavna boja teksta (bela)
        'desc': '#94A3B8',     // opisni tekst (sivkasto-plava)
        'accent': '#06b6d4',   // akcent boja (svetlo cijan)
        'accent2': '#22d3ee'   // sekundarni akcent (još svetliji cijan)
      }
    }
  },
  plugins: []
=======
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
>>>>>>> 65334435ac05bf9c2a6ae4d3f33e50d0208d8583
}
