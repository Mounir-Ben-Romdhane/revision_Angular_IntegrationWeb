/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*"],
  theme: {
    extend: {
      colors: {
        primary: "#314584", // light blue
        secondary: "#848484", // gree
        spiretColor: "#314584",
        pinkFooter: "#ff3946"
      },
      fontFamily: {
        myFontFamily: ["Playfair Display SC"],
        work: ["Work Sans"]
      },
      fontSize: {
        defaultSize: "8rem",
        spiretSize: "74px",
        btnTextSize: "18px",
        youNeed: "45px",
        titleSizeCard: "28px",
        textSizeCard: "15px",
      },
      backgroundColor: {
        gray: "#848484",
        pinkBtn: "#ff3946",
        primaryInput: "#314584"
      },
      borderColor: {
        pinkBorder: "#ff3946"
      },
      
    },
  },
  plugins: [],
}

