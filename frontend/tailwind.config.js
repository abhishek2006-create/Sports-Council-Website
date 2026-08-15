/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        slate: {
          950: '#FCF6EA', // body background (cream)
          900: '#FFFFFF', // card background (white/very light cream)
          850: '#EFE8D8', // secondary card/subtle bg (beige/light grey)
          800: '#EFE8D8', // borders/dividers (beige/light grey)
          700: '#334155', // muted text
          600: '#475569', // body text
          500: '#475569',
          400: '#475569', // description text
          300: '#0C1D3A', // dark navy for titles
          200: '#0C1D3A',
          100: '#0C1D3A', // dark navy for main titles
          50: '#FAF5EC',
        },
        teal: {
          500: '#B05B4C', // Primary accent: rust/terracotta/copper
          400: '#B05B4C',
          300: '#C5A880', // Gold/light accent
          100: '#FCF6EA',
        },
        emerald: {
          500: '#B05B4C', // Primary accent: rust/terracotta/copper
          400: '#B05B4C',
          300: '#C5A880',
        }
      }
    },
  },
  plugins: [],
}

