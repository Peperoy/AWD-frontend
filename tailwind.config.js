/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d70a2',
        secondary: '#00d1ff',
        'background-light': '#f8fafc',
        'background-dark': '#0f172a',
        'background-darker': '#020617',
        'surface-dark': '#0f172a',
        'navy-deep': '#072b44',
        'primary-services': '#1d70b8',
        'secondary-services': '#06b6d4',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        'display-outfit': ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        logo: ['Exo 2', 'sans-serif'],
        futuristic: ['Orbitron', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.75rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
    },
  },
  plugins: [],
};
