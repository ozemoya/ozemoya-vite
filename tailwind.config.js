/** @type {import('tailwindcss').Config} */module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ['"PixelOperatorMono"', 'VT323', 'monospace'],
      },
      backgroundImage: theme => ({
        'ozemoyalogo': "url('/ozemoyalogo.gif')",
      }),
      colors: {
        customColor: '#d4a373',
      },

      keyframes: {
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0', visibility: 'hidden' },
        },
      },
      backgroundSize: {
        'custom-size': '70%', 
      },
      animation: {
        fadeOut: 'fadeOut 8s ease-in-out forwards',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["coffee"],
  },
}