/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#900C3F",
        "primary-light": "#E5CFF7",
        secondary: "#F8DE22",
        accent: "#F94C10",
        background: "#EAC696",
      },
      fontFamily: {
        jost: ["Jost"],
      },
      boxShadow: {
        surround: "0px 0px 7px",
      },
    },
  },
  plugins: [],
};
