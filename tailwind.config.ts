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
        'primary-bg': '#FFFFFF',
        'section-bg': '#F8F9FA',
        'text-primary': '#111827',
        'text-secondary': '#475569',
        'border-color': '#E2E8F0',
        'accent': '#1E40AF',
        'accent-hover': '#1E3A8A',
        'accent-light': '#EFF6FF',
        'alg-navy': '#0a1628',
        'alg-navy-deep': '#060e1a',
        'alg-gold': '#d4a843',
        'alg-gold-dark': '#b8902e',
        'alg-slate': '#475569',
        'alg-surface': '#F8F9FA',
        'alg-border': '#E2E8F0',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
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
