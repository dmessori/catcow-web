/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vercetti: ['"Vercetti Regular"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
