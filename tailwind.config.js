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
        'pattern': "url('https://dsm01pap007files.storage.live.com/y4mUWUf8CvEi46X9Cx5XH0pjUVe8SuXm0EsshlkA_9OAeXf2bMdE1sYh36RvVMxgx96dP4l9o7cKrsdLLtTM0fYaCocEZc7tU14kTebvNkix7INs9uW-KEm1KzyX304Cvxwq2Gu39wL8ImLPSsSwvZPpTLp-JJ6PDaJ-movwrarUndoABt0hfQJKaphWRmLeNTy?width=1920&height=1280&cropmode=none')",
      }
    },
  },
  plugins: [],
}
