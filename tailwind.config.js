/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                brand: {
                    start: '#60A5FA', // Lighter Azure/Sky Blue
                    end: '#2563EB',   // Royal Blue
                    bg: '#FFFFFF',    // Pure white for cleanliness
                    text: '#0F172A',  // Slate 900 for sharp text
                }
            },
            boxShadow: {
                'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
                'premium': '0 20px 40px -10px rgba(0, 0, 0, 0.1), 0 0 15px rgba(59, 130, 246, 0.1)', // Deep soft shadow
            },
            backgroundImage: {
                'brand-gradient': 'linear-gradient(180deg, #93C5FD 0%, #3B82F6 100%)', // Vertical light-to-dark blue
                'hero-glow': 'radial-gradient(circle at 50% 0%, #BFDBFE 0%, #60A5FA 40%, #2563EB 100%)', // The "dreamy" look
            }
        },
    },
    plugins: [],
}
