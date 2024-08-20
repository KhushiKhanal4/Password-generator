/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'bungeeTint':["Bungee Tint, sans-serif"],
        'Anton':["Anton,sans-serif"],
      }
    },
  },
  plugins: [],
}

