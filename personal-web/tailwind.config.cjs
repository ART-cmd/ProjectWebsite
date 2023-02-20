

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '988px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: "#AE7F6B",
        secondary: "#7E4E3A",
      },
    },
  },
  plugins: [],
}
