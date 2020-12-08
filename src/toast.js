module.exports = Toast = () => ({
  ".toast": {
    width: "350px",
    maxWidth: "100%",
    fontSize: "0.875rem",
    pointerEvents: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    backgroundClip: "padding-box",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
    borderRadius: " 0.25rem",
  },
  ".toast:not(.showing):not(.show)": {
    opacity: "0",
  },
  ".toast.hide": {
    display: "none",
  },
  ".toast-container": {
    width: "max-content",
    maxWidth: "100%",
    pointerEvents: "none",
  },
  ".toast-container > :not(:last-child)": {
    marginBottom: "0.75rem",
  },
  ".toast-header": {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 0.75rem",
    color: "#6c757d",
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    backgroundClip: "padding-box",
    borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
    borderTopLeftRadius: "calc(0.25rem - 1px)",
    borderTopRightRadius: "calc(0.25rem - 1px)",
  },
  ".toast-header .btn-close": {
    marginRight: "-0.375rem",
    marginLeft: "0.75rem",
  },
  ".toast-body": {
    padding: "0.75rem",
  },
});
