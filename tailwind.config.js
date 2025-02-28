/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'weather': "url('weather.jpg')",
      },
    },
  },
  plugins: [],
}

