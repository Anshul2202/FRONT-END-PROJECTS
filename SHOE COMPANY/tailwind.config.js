/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'my-grey': '#21211f',
      },
      screens: {
        '3xl': '2000px',
        '4xl': '2400px',
        '5xl': '2800px',
        '6xl': '4000px',
        '7xl': '5200px',
        'axl': '900px',
        'bxl': '500px',
        'cxl': '350px',
        'dxl': '420px',
        'exl': '550px',
        'fxl': '830px',
        'gxl': '640px',
        'hxl': '600px'
      },
    },
  },
  plugins: [],
}

