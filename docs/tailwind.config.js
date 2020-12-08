module.exports = {
  purge: {
    content: ["./docs/layouts/**/*.html", "./docs/content/**/*.md", "./docs/content/**/*.html"],
  },
  plugins: [require("../index.js")],
};
