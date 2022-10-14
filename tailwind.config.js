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
        "border-color": "#232323",
        "error-color": "#F15524",
      },
      backgroundImage: {
        "thanks-image": "url('@/assets/thanks.svg')",
        "identify-image": "url('@/assets/identify-img.svg')",
        "covid-image": "url('@/assets/covid.svg')",
      },
    },
  },
  plugins: [],
};
