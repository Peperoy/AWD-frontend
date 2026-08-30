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
        background: '#1A476A',
        surface: '#1A476A',
        'surface-high': '#1A476A',
        primary: '#1A476A',
        'primary-glow': '#C8BB84',
        gold: '#C8BB84',
        neutral: '#F5F1E9',
        ink: '#FFFFFF',
        muted: 'rgba(255, 255, 255, 0.78)',
        navy: '#1A476A',
      },
      fontFamily: {
        display: ['"Saira Extra Expanded"', 'Saira', 'sans-serif'],
        body: ['Saira', 'sans-serif'],
        sans: ['Saira', 'sans-serif'],
        label: ['"Saira Extra Expanded"', 'Saira', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['clamp(1.5rem, 6.8vw, 6.5rem)', { lineHeight: '0.98', letterSpacing: '0.01em', fontWeight: '700' }],
        'display-md': ['clamp(1.15rem, 4vw, 4.5rem)', { lineHeight: '1.12', letterSpacing: '0.01em', fontWeight: '700' }],
        headline: ['clamp(1.15rem, 2.6vw, 2.75rem)', { lineHeight: '1.2', letterSpacing: '0.01em', fontWeight: '700' }],
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
