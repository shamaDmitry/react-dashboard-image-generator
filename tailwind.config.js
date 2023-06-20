/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#1E2235",
        "dark-lvl-3": "#252A41",
        "dark-bg": "#1A1D2D",
      },
    },
  },
  plugins: [],
}

