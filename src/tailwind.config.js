module.exports = {
  content: ['./index.html','./src/**/*.html'], // Rutas donde Tailwind buscará clases
  theme: {
    extend: {
      colors: {
        customRed: '#FF5F57', // Definimos el color coral
        customBlue: '#4d5bed',
      },
    },
  },
  plugins: [],
};