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
        'green-hover': '#007e6a',
        'green-light': '#8AD7CC',
        'green-light-50': '#E6F6F4',
        'green-disabled': '#B0E4DD',
        blue: '#27AAE1',
        'dark-blue': '#1D80A9',
        teal: '#D9F2EF',
        pink: '#F174BD',
        'dark-pink': '#CD3A90',
        'border-primary': '#D0D5DD',
        'text-primary': '#101828',
        'text-secondary': '#344054',
        'text-secondary-hover': '#182230',
        'text-black': '#313131',
        'text-tertiary': '#475467',
        'text-placeholder': '#667085',
        'gray-bg': '#F9FAFB',
        'error-secondary': '#F04438',
        'border-tertiary': '#F2F4F7',
        'border-secondary': '#EAECF0',
        'border-success': '#079455',
      },
      spacing: {},
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
      },
      borderRadius: {},
      boxShadow: {
        menu: '0px 20px 40px 0px rgba(212, 212, 212, 0.25)',
        'btn-shadow-xs': 'b0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        plan: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
        modal: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      },
    },
    // fontSize: {},
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1440px',
      // '3xl': '1920px',
      'max-sm': { max: '374px' },
      'max-md': { max: '767px' },
      'max-lg': { max: '1023px' },
      'max-xl': { max: '1199px' },
      'max-2xl': { max: '1439px' },
      // 'max-3xl': { max: '1919px' },
    },
  },
  plugins: [],
};
export default config;
