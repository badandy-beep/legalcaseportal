import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        navy: {
          50: '#E8EBF0',
          100: '#C5CCD9',
          200: '#9EAAC0',
          300: '#7788A7',
          400: '#596F94',
          500: '#3B5681',
          600: '#354E76',
          700: '#2D4368',
          800: '#26395A',
          900: '#1D3557', // Primary Navy
        },
        teal: {
          50: '#E6F5F3',
          100: '#C0E6E1',
          200: '#97D6CD',
          300: '#6DC5B9',
          400: '#4DB9AA',
          500: '#2DAD9B',
          600: '#289D8D',
          700: '#228A7C',
          800: '#1D786B',
          900: '#2A9D8F', // Primary Teal
        },
        coral: {
          50: '#FDEAEA',
          100: '#FACBCB',
          200: '#F6A8A9',
          300: '#F28586',
          400: '#EF6B6C',
          500: '#EC5152',
          600: '#E63946', // Primary Coral/Red
          700: '#D32F3C',
          800: '#BF2632',
          900: '#9C1D28',
        },
        gold: {
          50: '#FEF6ED',
          100: '#FDE9D2',
          200: '#FBDAB4',
          300: '#F9CB96',
          400: '#F8C080',
          500: '#F4A261', // Primary Gold
          600: '#E08D4A',
          700: '#C77839',
          800: '#AE632A',
          900: '#8A4E21',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      // Golden Ratio spacing
      spacing: {
        'golden-sm': '0.618rem',
        'golden': '1rem',
        'golden-lg': '1.618rem',
        'golden-xl': '2.618rem',
        'golden-2xl': '4.236rem',
      },
    },
  },
  plugins: [],
}
export default config
