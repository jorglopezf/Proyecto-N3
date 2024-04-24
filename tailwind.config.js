/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    //clases personalizadas

    extend: {
      fontFamily:{
        'kminfo': ['Anton', 'sans-serif'],
        'nav-fo': ['Mate SC', 'sans-serif'],
        'parra': ['Signika Negative', 'sans-serif'],
      },
      width: {
        'caja-ancho': '240px',
        '100%': '100%',
      },
      height: {
        'caja-alto': '300px',
        '100vh': '100vh',
      },
      gridTemplateColumns: {
        '3columnas': 'repeat(3, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}

