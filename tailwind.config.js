module.exports = {
  content: [
    './index.html',
        './src/**/*.{vue,jsx,ts,js}'],
  theme: {
    screens: {
      'xs': '440px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary': '#090909',
      },
      backgroundImage: {
        'pattern': "url('./src/assets/woman.jpg')",
      }
    },
  },
  plugins: [],
}
