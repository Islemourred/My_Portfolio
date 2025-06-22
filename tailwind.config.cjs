/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#6b7280",
        tertiary: "#f8fafc",
        "black-100": "#f1f5f9",
        "black-200": "#e2e8f0",
        "white-100": "#1e293b",
        "accent-blue": "#3b82f6",
        "accent-purple": "#8b5cf6",
        "accent-green": "#10b981",
        "accent-pink": "#ec4899",
        "light-gray": "#f8fafc",
        "medium-gray": "#e2e8f0",
        "dark-gray": "#475569",
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(0, 0, 0, 0.1)",
        "card-hover": "0px 35px 120px -15px rgba(0, 0, 0, 0.15)",
        "soft": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
