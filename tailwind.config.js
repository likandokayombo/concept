/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neue: "var(--font-pp-neue)",
        neueBold: "var(--font-pp-neue-bold)",
        jet: "var(--font-jetbrains)",
      },
    },
  },
  plugins: [],
};
