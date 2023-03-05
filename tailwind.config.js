/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mdmax: { max: "767px" },
      },
      fontFamily: {
        sans: ["var(--font-jost)"],
      },
      fontSize: {
        body: [
          "1rem",
          {
            lineHeight: "1.625em",
            fontWeight: "regular",
          },
        ],
      },
      colors: {
        black: "#1D1C1E",
        "dark-grey": "#333136",
        "light-grey": "#F1F3F5",
        peach: "#E7816B",
        "light-peach": "#FFAD9B",
      },
    },
  },
  plugins: [],
};
