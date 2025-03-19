/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      screens: {
        bgpc: { max: "3400px" },
        pc: { max: "2400px" },
        tablet: { max: "1500px" },
        phone: { max: "540px" },
      },
      extend: {
        colors: {
          green: "#83BC3F",
          darkgreen: "#80AA4F",
          graySubHd: "#535353",
          grayFooter: "#393939",
        },
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        keyframes: {
          appear: {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" },
          },
          bounce: {
            "0%": { transform: "scale(0.8)" },
            "100%": { transform: "scale(1)" },
          },
          drop: {
            "0%": { top: "-100px" },
            "100%": { top: "0px" },
          },
          twirl: {
            "0%": { transform: "translateY(100%)" },
          },
        },
        animation: {
          drop: "drop 1.2s ease-in",
          appear: "appear 1.2s ease-in",
          twirlf: "twirl 0.2s ease-in forwards",
          twirlb: "twirl 0.2s 0.2s ease-out forwards reverse",
        },
      },
    },
    plugins: [],
  };
  