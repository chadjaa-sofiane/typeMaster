/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors:{
      primary: '#900C3F',
      secondary: '#F8DE22',
      accent: '#F94C10',
      background: '#EAC696'
    },
    fontFamily:{
      'jost': ['Jost'],
    },
    extend: {
      boxShadow: {
        'surround': '0px 0px 7px'
      },
    },
  },
  plugins: [],
}

