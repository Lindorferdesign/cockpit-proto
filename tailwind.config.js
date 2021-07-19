module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'jku-light-blue':'#4FB0BF',
        'jku-blue':'#4FB0BF',
        'jku-background':'#EDEFF2',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
