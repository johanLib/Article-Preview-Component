/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 2px 9px #000'
      },
      transitionProperty: {
        'opacity': 'opacity', // Custom transition for opacity property
      },
      transitionDuration: {
        'custom': '0.5s', // Custom transition duration
      },
      transitionTimingFunction: {
        'custom': 'ease-in-out', // Custom timing function
      }
    },
  },
  plugins: [],
}

