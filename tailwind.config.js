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
        // Hide scrollbar by default
        ".hide-scrollbar": {
          /* Hide scrollbar for Chrome, Safari, and Edge */
          "&::-webkit-scrollbar": {
            width: "8px",
            opacity: "0",
            transition: "opacity 0.3s ease",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
            "border-radius": "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
            "border-radius": "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
          /* Hide scrollbar for Firefox */
          "scrollbar-width": "none",
          /* Hide scrollbar for Internet Explorer and Edge (legacy) */
          "-ms-overflow-style": "none",
        },
        // Show scrollbar when the class is applied
        ".show-scrollbar": {
          /* Show scrollbar for Chrome, Safari, and Edge */
          "&::-webkit-scrollbar": {
            opacity: "1",
          },
          /* Show scrollbar for Firefox */
          "scrollbar-width": "thin",
          "scrollbar-color": "#888 #f1f1f1",
        },
      });
    },
  ],
}

