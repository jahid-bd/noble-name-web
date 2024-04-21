import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        primary: '#00A991',
        'green-200': '#8AD7CC',
        'green-500': '#00A991',
        'green-disabled': '#B0E4DD',
        blue: '#27AAE1',
        'dark-blue': '#1D80A9',
        teal: '#D9F2EF',
        pink: '#F174BD',
        'dark-pink': '#CD3A90',
        'border-primary': '#D0D5DD',
        'text-primary': '#101828',
        'text-secondary': '#344054',
        'text-tertiary': '#475467',
        'text-placeholder': '#667085',
        'text-primary-900': '#101828',
        'text-secondary-900': '#344054',
        'gray-bg': '#F9FAFB',
        'error-secondary': '#F04438',
      },
      spacing: {},
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
      },
      borderRadius: {},
    },
    // fontSize: {},
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1440px',
      '3xl': '1920px',
      'max-sm': { max: '374px' },
      'max-md': { max: '767px' },
      'max-lg': { max: '1023px' },
      'max-xl': { max: '1199px' },
      'max-2xl': { max: '1439px' },
      'max-3xl': { max: '1919px' },
    },
  },
  plugins: [],
};
export default config;
