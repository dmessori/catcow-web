const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        vercetti: ['Vercetti', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};