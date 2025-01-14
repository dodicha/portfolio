/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '300': '300px',
        '15': '15px',
      },
      borderRadius: {
        '50': '50px'
      },
    },
  },
  plugins: [],
}