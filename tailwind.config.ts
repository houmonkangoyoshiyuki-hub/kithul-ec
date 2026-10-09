import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#D4AF37',
          'gold-light': '#F0D060',
          dark: '#0D0D0D',
          surface: '#1A1A1A',
          muted: '#2A2A2A',
          text: '#F0ECE3',
          sub: '#A89B85',
        },
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
