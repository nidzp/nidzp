// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: {
          500: '#06b6d4',
          600: '#0891b2'
        }
      }
    }
  },
  plugins: []
};
