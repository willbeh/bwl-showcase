const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content:[
      './apps/portal/src/**/*.{html,ts}',
      './libs/ng-ui/src/**/*.{html,ts}',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: { 
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      primary: {
        light: '#5472d3',
        DEFAULT: '#0d47a1',
        dark: '#002171',
      },
      accent: {
        light: '#fff263',
        DEFAULT: '#fbc02d',
        dark: '#c49000',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}
