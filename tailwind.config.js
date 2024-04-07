/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container: '1440px'
      },
      colors:{
        pColor:'#03045E',
        sColor: '#0098FF',
        tColor: '#2E2E2E',
      }
    },
  },
  plugins: [],
};
