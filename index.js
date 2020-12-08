module.exports = require("tailwindcss/plugin")(function ({ addComponents }) {
  addComponents([require("./src/base.js")(), require("./src/toast.js")(), require("./src/tooltip.js")()]);
});
