module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        negative15: "-15px"
      },
      height: {
        50: "50px",
        70: "70px",
        150: "150px"
      },
      width: {
        50: "50px",
        60: "60px",
        70: "70px",
        100: "100px",
        250: "250px",
        300: "300px",
      },
      minWidth: {
        60: "60px",
        100: "100px",
        125: "125px"
      },
      colors: {
        select: "#9d9d9d",
        option: "#333",
        avatar: "rgba(255, 94, 22, 1)"
      },
      backgroundColor: {
        primary: "rgba(255, 94, 22, 1)",
        avatar: "rgb(255, 228, 181)",
        hoverPrimary: "rgba(255, 94, 22, .8)",
      },
      gridTemplateColumns: {
        select: "auto 1fr"
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
