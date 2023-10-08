module.exports = {
    mode: 'jit',
    content: ["./*.html", "./components/*.html"],
    theme: {
        extend: {
            fontFamily: {
                main: "'Cascadia Code', sans-serif",
            },
        },
    },
    plugins: [
        // require('prettier-plugin-tailwindcss'),
        require('autoprefixer'),
    ],
}