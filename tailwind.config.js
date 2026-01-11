/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            },
            colors: {
                brand: {
                    bg: '#F8FAFC',
                    text: '#0F172A',
                    navy: '#18194a',
                    blue: '#3B82F6',
                    lightBlue: '#60A5FA',
                    orange: '#F97316',
                }
            },
            backgroundImage: {
                'creamy-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
            }
        },
    },
    plugins: [],
}
