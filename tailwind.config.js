/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 기본 다크모드 설정 유지!
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
