/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#f0faf8',
          100: '#d0f0ea',
          200: '#a1e1d5',
          300: '#63c9b5',
          400: '#2aad94',
          500: '#1a8f79',
          600: '#157362',
          700: '#125c4f',
          800: '#0e4840',
          900: '#0a3530',
        },
        gold: {
          300: '#f5d98a',
          400: '#e8c35a',
          500: '#c9a84c',
          600: '#a8882f',
        },
        cream: '#f8f5ef',
        deep:  '#0e2d27',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}