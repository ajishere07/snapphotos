module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      black: "#000000",
      primary: "#f1f5f9",
      secondary: "#e2e8f0",
      secondaryDark: "#94a3b8",
      hoveredSecondary: "#cbd5e1",
      cancelBtn: "#ef4444",
      hoveredCancelBtn: "#dc2626",
      brand: "#2dd4bf",
      white: "#ffffff",
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
