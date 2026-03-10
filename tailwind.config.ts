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
        // Alpha Law Group Brand Colors
        'alg-navy': 'rgb(var(--alg-navy-rgb) / <alpha-value>)',
        'alg-gold': {
          DEFAULT: 'rgb(var(--alg-gold-rgb) / <alpha-value>)',
          light: 'rgb(var(--alg-gold-light-rgb) / <alpha-value>)',
        },
        'alg-white': '#ffffff',
        'alg-gray': {
          light: 'rgb(var(--alg-gray-light-rgb) / <alpha-value>)',
          border: 'rgb(var(--alg-gray-border-rgb) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
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
