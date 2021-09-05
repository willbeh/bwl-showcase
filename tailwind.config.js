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
    extend: {
      colors: {
        sky: colors.sky,
        teal: colors.teal,
        cyan: colors.cyan,
        rose: colors.rose,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}
