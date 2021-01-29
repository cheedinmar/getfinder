module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: theme => theme('colors'),
     textColor: {
       'brand': '#F7941E'
     },
     backgroundColor: theme => ({
      ...theme('colors'),
      'brand': '#F7941E'
     }),
     height: {
      brand: '43.75px'
     }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
