module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        slidein: "slidein 0.5s ease-in-out 1",
      },
      keyframes: {
        slidein: {
          "0%": {
            transform: "translateY(100px)",
          },
          "80%": {
            transform: "translateY(-20px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
