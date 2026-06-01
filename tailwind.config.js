/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1C3251',
        'soft-blue': '#7083BE',
        accent: '#7083BE',
        cyan: '#A0E8F9',
        plum: '#301727',
        beige: '#DBD1C7',
      },
      fontFamily: {
        primary: ['Optima', 'EB Garamond', 'Palatino Linotype', 'Georgia', 'serif'],
        secondary: ['Gill Sans', 'Trebuchet MS', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
