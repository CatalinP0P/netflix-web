/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        muted: "#ccd5e1",
        customred: "#dc2626",
        customredhover: "#ba1b1c",
      },
    },
  },
  plugins: [],
};
