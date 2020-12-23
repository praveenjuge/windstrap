const tailwindColors = require("tailwindcss/colors.js");

module.exports = {
  purge: {
    layers: ["base", "utilities"],
    content: ["./docs/layouts/**/*.html", "./docs/content/**/*.md", "./docs/content/**/*.html"],
  },
  theme: {
    extend: {
      typography: {
        sm: {
          css: {
            a: {
              textDecoration: "none",
            },
            img: {
              marginTop: 0,
              marginBottom: 0,
            },
          },
        },
      },
      colors: {
        gray: { ...tailwindColors.blueGray },
      },
    },
  },
  plugins: [require("../index.js"), require("@tailwindcss/typography")],
};
