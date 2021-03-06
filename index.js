module.exports = require("tailwindcss/plugin")(function ({ addComponents, addUtilities }) {
  addComponents([require("./src/base.js")(), require("./src/dropdown.js")(), require("./src/modal.js")(), require("./src/popover.js")(), require("./src/toast.js")(), require("./src/tooltip.js")()]);
  addUtilities({ ".navbar-collapse": { display: "flex !important" } }, { variants: ["responsive"] });
});
