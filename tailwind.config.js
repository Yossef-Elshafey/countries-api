/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      keyframes: {
        scrolling: {
          from: { transform: "translateX(150px)", opacity: 0 },
          to: { transform: "translateX(0px)", opacity: 1 },
        },
      },
      animation: {
        scrolling: "scrolling 150ms ease-out",
      },
    },
  },
  plugins: [],
};
