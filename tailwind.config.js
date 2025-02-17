/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'blink-shadow': 'blink 1s infinite',
        'blinkRed-shadow':'blinkRed 1s infinite' // Define animation class
      },
      keyframes: {
        blink: {
          '0%, 100%': { boxShadow: '0 0 20px 10px rgba(67,160,71,0.8)' }, // Shadow visible
          '50%': { boxShadow: '0 0 0 0 rgba(0, 255, 0, 0)' }, // Shadow hidden
        },
        blinkRed: {
          '0%, 100%': { boxShadow: '0 0 10px 10px rgba(185,28,28)' }, // Shadow visible
           '50%': { boxShadow: '0 0 0 0 rgba(185, 28, 28, 0)' }, // Shadow hidden
        },
      },
      colors: {
        'red-strikethrough': '#D32F2F', // Red color for the line
      },
      boxShadow: {
        'all-directions': '0 0 5px 5px rgba(34, 197, 94, 0.3)', // Custom shadow for all directions
      },
    },
  },
  plugins: [],
}

