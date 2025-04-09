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
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar": {
          /* Hide scrollbar for Chrome, Safari, and Edge */
          "&::-webkit-scrollbar": {
            display: "none",
          },
          /* Hide scrollbar for Firefox */
          "scrollbar-width": "none",
          /* Hide scrollbar for Internet Explorer and Edge (legacy) */
          "-ms-overflow-style": "none",
        },
      });
    },
  ],
}

