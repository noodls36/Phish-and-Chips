/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        signal: "#1f9d8a",
        caution: "#d97706",
        agency: "#27374d",
        paper: "#f7f4ee",
      },
      boxShadow: {
        panel: "0 18px 50px rgba(17, 24, 39, 0.12)",
      },
    },
  },
  plugins: [],
};
