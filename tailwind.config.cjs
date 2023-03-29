/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Rubik", "sans-serif"],
      body: ["Rubik", "sans-serif"],
    },
    extend: {
      spacing: {
        "108": "68.75rem",
      },
      colors: {
        gray: {
          dark: "hsl(0, 0%, 59%)",
          darker: "hsl(0, 0%, 17%)",
        },
      },
    },
  },
  plugins: [],
};
