/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        margin: {
          xl: '1rem',
        },
      },
    },
    fontFamily: {
      sans: ["'Poppins', sans-serif"],
      inter: ["'Inter', sans-serif"],
    },
  },
  plugins: [],
};
