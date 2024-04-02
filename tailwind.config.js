/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require("daisyui")
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  daisyui: {
    themes: [
      'light' // Ensure light theme is selected
    ],
  },
  theme: {
    extend: {
      colors: {
        // Override background color to white
        white: '#ffffff',
      },
    },
  },
};