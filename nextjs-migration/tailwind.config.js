/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        slideInRight: 'slideInRight 0.7s ease-out',
        shimmer: 'shimmer 1.5s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        slideInRight:{
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        body: ['var(--font-nunito)', 'Nunito', 'sans-serif'],
        sans: ['var(--font-nunito)', 'Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        // Firefox scrollbar handling
        ".hide-scrollbar": {
          "scrollbar-width": "thin",
          "scrollbar-color": "transparent rgba(0, 0, 0, 0.05)",
        },
        ".show-scrollbar": {
          "scrollbar-width": "thin", 
          "scrollbar-color": "rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.05)",
        },
      });
    },
  ],
  safelist: [
    {
      pattern: /(border|text)-(orange|green|red|cyan|blue|yellow|purple|indigo|violet|teal|emerald|amber|rose|pink|sky|lime|gray)-500/,
    },
  ],
};