/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#166534',
        secondary: '#4ade80',
        accent: '#facc15',
        background: '#f0fdf4',
        text: '#064e3b',
      },
    },
  },
  plugins: [],
}