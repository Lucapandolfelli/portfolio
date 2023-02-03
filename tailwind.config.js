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
        caccm: "url('/images/caccm_background.png')",
        harasmaryland: "url('/images/harasmaryland_background.png')",
      },
    },
  },
  plugins: [],
};
