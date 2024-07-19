/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        'title-blue' : '#1A2130',
        'index-blue': '#5A72A0',
        'bg-white' : '#FDFFE2',
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },



  plugins: [],

}

