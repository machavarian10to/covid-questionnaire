/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "custom-text": ["BPG Arial", "sans-serif"],
      },
      colors: {
        "custom-color": "#EAEAEA",
      },
      backgroundImage: {
        "custom-image": "url('@/assets/thanks.svg')",
      },
    },
  },
  plugins: [],
};
