module.exports = require("tailwindcss/plugin")(function ({ addComponents }) {
  addComponents([require("./src/toast.js")()]);
});
