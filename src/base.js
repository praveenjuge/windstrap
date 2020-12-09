module.exports = Base = () => ({
  ".fade": {
    transition: "opacity .15s linear",
  },
  ".fade:not(.show)": {
    opacity: 0,
  },
  ".collapse:not(.show)": {
    display: "none",
  },
  ".collapsing": {
    height: 0,
    overflow: "hidden",
    transition: "height 0.35s ease",
  },
  "@media (prefers-reduced-motion: reduce)": {
    ".collapsing": {
      transition: "none",
    },
    ".fade": {
      transition: "none",
    },
  },
  ".alert-dismissible": {
    paddingRight: "3rem",
  },
  ".alert-dismissible .btn-close": {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 2,
    padding: "1.25rem 1rem",
  },
  ".btn-close": {
    boxSizing: "content-box",
    width: "1em",
    height: "1em",
    padding: "0.25em 0.25em",
    color: "#000",
    background: `transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat`,
    border: 0,
    borderRadius: "0.25rem",
    opacity: 0.5,
  },
  ".btn-close:hover": {
    color: "#000",
    textDecoration: "none",
    opacity: " 0.75",
  },
  " .btn-close:focus": {
    outline: "none",
    boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
    opacity: 1,
  },
  ".btn-close:disabled, .btn-close.disabled": {
    pointerEvents: "none",
    userSelect: "none",
    opacity: 0.25,
  },
  ".btn-close-white": {
    filter: "invert(1) grayscale(100%) brightness(200%)",
  },
});
