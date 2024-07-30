/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      zIndex: {
        navigation: '10',
        tooltip: '20',
        modal: '30',
        'modal-tooltip': '40',
      },
    },
  },
  plugins: [require('tailwindcss-primeui')],
};
