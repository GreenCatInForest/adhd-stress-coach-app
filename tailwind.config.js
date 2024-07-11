/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "League-Spartan": ["League Spartan", "sans-serif"],
        "MuseoModerno": ["MuseoModerno", "sans-serif"],
        "Major-Mono": ["Major Mono Display", "monospace"],
      },
    },
  },
  plugins: [],
}

