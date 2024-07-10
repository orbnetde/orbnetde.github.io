/** @type {import('tailwindcss').Config} */

require('tailwindcss/colors');

import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'black': '#212b36',
        'dark': {
          DEFAULT: '#111928',
          2: '#1F2A37',
          3: '#374151',
          4: '#4B5563',
          5: '#6B7280',
          6: '#9CA3AF',
          7: '#D1D5DB',
          8: '#E5E7EB',
        },
        'primary': {
          '50': '#eef5ff',
          '100': '#d9e8ff',
          '200': '#bcd7ff',
          '300': '#8ebeff',
          '400': '#599aff',
          '500': '#2f72ff',
          DEFAULT: '#1b52f5',
          '700': '#143ee1',
          '800': '#1733b6',
          '900': '#19308f',
          '950': '#141f57',
        },
        'secondary': '#002166',
        'body-color': '#3E4C59',
        'body-secondary': '#8899A8',
        'success': {
          '50': '#f2fbf3',
          '100': '#e2f6e4',
          '200': '#c6ecca',
          '300': '#99dca2',
          '400': '#65c371',
          DEFAULT: '#43b052',
          '600': '#30893c',
          '700': '#286d32',
          '800': '#24572b',
          '900': '#1f4826',
          '950': '#0c2711',
        },
        'warning': {
          '50': '#ffffea',
          '100': '#fffbc5',
          '200': '#fff885',
          '300': '#ffee46',
          '400': '#ffdf1b',
          DEFAULT: '#ffc107',
          '600': '#e29400',
          '700': '#bb6902',
          '800': '#985108',
          '900': '#7c420b',
          '950': '#482200',
        },
        'stroke': '#DFE4EA',
        'gray-1': '#F9FAFB',
        'gray-2': '#F3F4F6',
        'gray-7': '#CED4DA',
      },
      // boxShadow: {
      //   'input': '0px 7px 20px rgba(0, 0, 0, 0.03)',
      //   'form': '0px 1px 55px -11px rgba(0, 0, 0, 0.01)',
      //   'pricing': '0px 0px 40px 0px rgba(0, 0, 0, 0.08)',
      //   'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
      //   'testimonial': '0px 10px 20px 0px rgba(92, 115, 160, 0.07)',
      //   'testimonial-btn': '0px 8px 15px 0px rgba(72, 72, 138, 0.08)',
      //   '1': '0px 1px 3px 0px rgba(166, 175, 195, 0.40)',
      //   '2': '0px 5px 12px 0px rgba(0, 0, 0, 0.10)',
      // },
    },
    keyframes: {
      floating: {
        '0%': { transform: 'translate(0,  0)' },
        '50%': { transform: 'translate(35px, 0)' },
        '100%': { transform: 'translate(0, 0)' },
      },
      rising: {
        '0%': { transform: 'translate(0,  0)' },
        '30%': { transform: 'translate(5px, 5px)' },
        '60%': { transform: 'translate(5px, -5px)' },
        '100%': { transform: 'translate(0, 0)' },
      },
    },
    animation: {
      floating: 'floating 5s ease-in-out infinite',
      rising: 'rising 5s linear infinite',
    },
  },
  plugins: [],
};
