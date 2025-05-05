/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        slideInRight: 'slideInRight 0.7s ease-out',
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
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        // Hide scrollbar but reserve its space
        ".hide-scrollbar": {
          "&::-webkit-scrollbar": {
            width: "thin", /* Reserve space */
            opacity: "0", /* Hide scrollbar */
            transition: "opacity 0.3s ease",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "transparent",
          },
          
          "-ms-overflow-style": "none", /* Reserve space in IE/Edge */
        },
        // Show scrollbar when the class is applied
        ".show-scrollbar": {
          "&::-webkit-scrollbar": {
            opacity: "1", /* Show scrollbar */
          },
          "scrollbar-color": "#888 #f1f1f1",
        },
      });
    },
  ],
  safelist: [
    {
      pattern: /(border|text)-(orange|green|red|cyan|blue|yellow)-500/,
    },
  ],
}

