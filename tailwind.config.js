/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'blue': {
                    '500': '#345097',
                    '400': '#85a5da',
                    '300': '#abc1e5',
                    '200':'#d1ddf0',
                    '100':'#f8f9fb'
                },

            },
            boxShadow: {
                'custom': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            }
        },
    },
    plugins: [],
}
