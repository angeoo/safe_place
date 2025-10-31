/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FFA62B",
          50: "#FFF5E0",
          100: "#FFE3B8",
        },
        peach: "#FFD8A8",
        ink: {
          DEFAULT: "#1F2937",
          soft: "#4B5563",
        },
        line: "#F3F4F6",
        "line-strong": "#E5E7EB",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(15,23,42,0.22)",
      },
      borderRadius: {
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};
