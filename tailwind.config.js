/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
      },
      animation: {
        typing: "typing 3.5s steps(40, end)",
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
};
