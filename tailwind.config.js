/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        "sf-pro-text": ["SF Pro Text", "sans-serif"],
        "sf-pro-display": ["SF Pro Display", "sans-serif"]
      },

      colors: {
        primary: "#3366FF",
        secondary: "#1D1D1F",
        "gray-300": "#979797",
        "gray-500": "#B2B7C1",
        "gray-700": "#E7E7E7",
        "gray-900": "#B1B1B8",
        white: "#fff",
        "dark-black": "#28293D",
        "placeholder": "#2E384D59",
        "input": "#2E384D",
        "blue-100": "#E0E7FF",
        "blue-300": "#5BABF2",
        "blue-500": "#3366FF99",
        "blue-700": "#3365FC",
        "green": "#00CF83",
        "orange": "#FFA445"
      }
    },
  },
  plugins: [],
}

