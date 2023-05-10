const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    darkMode:'class',
    theme: {
        screens: {
        'xs': '475px',
        ...defaultTheme.screens,
        },
                fontFamily: {
            'sans': ['"Work Sans"'],
            'body': ['"Work Sans"'],
        },
    },
    plugins: [
    ],
}