/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      translate:{
        'translateX': '-50%',
        'translateY': '-50%',
      },
      height:{
        'h-0' : '500px',
      },
      borderRadius:{
        '1' : '0.1px',
      },
    },
  },
  plugins: [],
}

