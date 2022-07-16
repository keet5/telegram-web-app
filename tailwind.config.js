/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        c2: '240px',
        c3: '360px',
        c4: '480px',
      },
    },
  },
  plugins: [],
}
