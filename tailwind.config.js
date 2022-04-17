module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        50: "50px",
        150: "150px"
      },
      width: {
        50: "50px",
        60: "60px",
        100: "100px",
        250: "250px"
      },
      minWidth: {
        60: "60px",
        100: "100px",
        125: "125px"
      },
      backgroundColor: {
        primary: "rgba(255, 94, 22, 1)"
      },
      gridTemplateColumns: {
        select: "auto 1fr"
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
