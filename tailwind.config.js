/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/**/*.html", "./partials/**/*.html", "./javascript/**/*.js"],
  theme: {
    extend: {
      colors: {
        'bg-lightgrey': 'var(--bg-lightgrey)',
        'bg-darkgreen': 'var(--bg-darkgreen)',

        'light-beige': 'var(--light-beige)',
        'mid-beige': 'var(--mid-beige)',
        'light-grey': 'var(--light-grey)',
        'dark-grey': 'var(--dark-grey)'
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
