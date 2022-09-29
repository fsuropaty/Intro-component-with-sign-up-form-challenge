/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "hsl(0, 100%, 74%)",
        "primary-green": "hsl(154, 59%, 51%)",
        "accent-blue": "hsl(248, 32%, 49%)",
        "neutral-dark-blue": "hsl(249, 10%, 26%) ",
        "neutral-grayish-blue": "hsl(246, 25%, 77%)",
      },
      fontFamily: {
        display: ["Poppins"],
      },
      backgroundImage: {
        "mobile-bg": "url('./images/bg-intro-mobile.png')",
        "desktop-bg": "url('./images/bg-intro-desktop.png')",
      },
      boxShadow: {
        form: "0 8px  hsla(0, 36%, 41%, 40%)",
        btn1: "0 8px  hsla(0, 36%, 41%, 30%)",
        btn2: "0 4px  hsl(155, 57%, 45%)",
      },
      fontSize: {
        tiny: "0.65rem",
      },
      spacing: {
        6.5: "1.6rem",
      },
    },
  },
  plugins: [],
};
