/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0F19',
          surface: '#101726',
          card: 'rgba(17, 24, 39, 0.75)',
          border: '#1E293B',
          'border-bright': '#334155',
          muted: '#94A3B8',
        },
        brand: {
          cyan: '#06B6D4',
          'cyan-bright': '#22D3EE',
          'cyan-glow': 'rgba(6, 182, 212, 0.35)',
          teal: '#14B8A6',
          'teal-bright': '#2DD4BF',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.45)',
        'glow-teal': '0 0 30px -5px rgba(20, 184, 166, 0.45)',
        'glow-subtle': '0 0 20px -3px rgba(6, 182, 212, 0.2)',
        'card-glass': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

