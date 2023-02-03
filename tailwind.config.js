/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jetBrains: ["JetBrainsMono NF"],
      },
      backgroundImage: {
        caccm:
          "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('/images/caccm_background.png')",
        harasmaryland:
          "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('/images/harasmaryland_background.png')",
      },
    },
  },
  plugins: [],
};
