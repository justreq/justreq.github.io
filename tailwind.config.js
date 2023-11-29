module.exports = {
  mode: "jit",
  content: ["./*.html", "./**/*.html", "./components/*.html"],
  theme: {
    extend: {
      fontFamily: {
        main: "'Ubuntu', sans-serif",
      },
    },
  },
  plugins: [
    // require('prettier-plugin-tailwindcss'),
    require('autoprefixer'),
  ],
};
