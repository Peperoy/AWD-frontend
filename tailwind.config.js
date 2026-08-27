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
        background: '#040D15',
        surface: '#111415',
        'surface-high': '#1D2021',
        primary: '#1A476A',
        'primary-glow': '#A2CAF4',
        gold: '#C8BB84',
        neutral: '#F8F9FA',
        ink: '#E1E3E4',
        muted: '#C2C7CF',
        navy: '#1A476A',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Archivo Narrow', 'sans-serif'],
        sans: ['Archivo Narrow', 'sans-serif'],
        label: ['Space Mono', 'monospace'],
      },
      fontSize: {
        'display-lg': ['clamp(1.85rem, 8vw, 7.5rem)', { lineHeight: '0.98', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-md': ['clamp(1.5rem, 5vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline': ['clamp(1.375rem, 3vw, 3rem)', { lineHeight: '1.15', fontWeight: '700' }],
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
      },
      maxWidth: {
        atlas: '1440px',
      },
      spacing: {
        gutter: '32px',
        margin: '64px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          md: '64px',
        },
      },
    },
  },
  plugins: [],
};
