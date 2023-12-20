/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        freeAndJoinButtonColor: "#2F6CE5",
        placeholderText: "#5C5C5C",
        lightGrayBg: "#EDEEF0"
      },
    },
  },
  plugins: [],
}
