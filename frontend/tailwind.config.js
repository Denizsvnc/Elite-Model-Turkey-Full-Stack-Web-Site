/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // HTML'deki ayar
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        // special Colors
        primary: '#1d4ed8',
        dark: '#0a0a0a',
        light: '#ffffff',
        'elite-black': '#111111',
        'elite-gray': '#f4f4f5',
        
        // gold color
        gold: {
          light: '#FFD700',
          DEFAULT: '#D4AF37',
          dark: '#AA8C2C',
        }
      }
    },
  },
  plugins: [],
}