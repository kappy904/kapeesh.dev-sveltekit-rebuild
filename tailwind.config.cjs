/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        purple: "#5a1f9f",
        green: '#008521',
        blue: '#15009E',
      },
      fontFamily: {
        display: ["Cinzel Decorative", "sans-serif"],
        body: ["Petrona", "sans-serif"],
      },
    },
  },
  plugins: []
};
