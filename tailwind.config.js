/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Jost']
      },
      animation: {
        wiggle: 'wiggle 4s',
        wiggle2: 'wiggle2 4s',
        wiggle3: 'wiggle3 4s',
        wiggle4: 'wiggle4 4s',
      },
      keyframes: {
        wiggle: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1'
          },
        },
        wiggle2: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1'
          },
        },
        wiggle3: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1'
          },
        },
        wiggle4: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1'
          },
        },
      },
      fontFamily: {
        sans: ['"PT Sans"', 'sans-serif'],
      },
      container: {
        center: true,
      },
    },
  },
}
