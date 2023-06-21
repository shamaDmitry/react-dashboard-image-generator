/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "stats": ['12px', {
          lineHeight: '20px',
          letterSpacing: '0.1px',
        }],
      },
      borderRadius: {
        "large": "12px",
        "card": "14px",
      },
      colors: {
        "dark": "#1E2235",
        "dark-lvl-3": "#252A41",
        "dark-bg": "#1A1D2D",
      },
    },
  },
  plugins: [],
}

