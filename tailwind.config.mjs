// tailwind.config.mjs
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import scrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(120deg, #091326 0%, #15294c 55%, #060e1c 100%)',
        'custom-dark': 'url("/pozadina.png")',
      },
      colors: {
        primary: "#3bd3fe",
        secondary: "#202d45",
        accent: "#f9004d",
        gold: "#FFD700",
        'nidzp-dark': "#111723",
      },
      boxShadow: {
        "main": "0 8px 32px 0 rgba(31, 38, 135, 0.25)",
        "glow": "0 0 32px 2px #3bd3fe80"
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in',
        'letter-pop': 'letterPop 0.8s both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        letterPop: {
          '0%': { transform: 'scale(0.8) rotate(-4deg)', opacity: 0 },
          '100%': { transform: 'scale(1) rotate(0)', opacity: 1 }
        }
      }
    }
  },
  plugins: [
    typography,
    forms,
    scrollbar({ nocompatible: true })
  ]
}
