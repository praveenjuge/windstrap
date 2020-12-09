module.exports = Modal = () => ({
  ".modal-open": {
    overflow: "hidden",
  },
  ".modal-open .modal": {
    overflowX: "hidden",
    overflowY: "auto",
  },
  ".modal": {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1050,
    display: "none",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    outline: 0,
  },
  ".modal-dialog": {
    position: "relative",
    width: "auto",
    margin: "0.5rem",
    pointerEvents: "none",
  },
  ".modal.fade .modal-dialog": {
    transition: "transform 0.3s ease-out",
    transform: "translate(0, -50px)",
  },
  "@media (prefers-reduced-motion: reduce)": {
    ".modal.fade .modal-dialog": {
      transition: "none",
    },
  },
  ".modal.show .modal-dialog": {
    transform: "none",
  },
  ".modal.modal-static .modal-dialog ": {
    transform: "scale(1.02)",
  },
  ".modal-dialog-scrollable": {
    height: "calc(100% - 1rem)",
  },
  ".modal-dialog-scrollable .modal-content": {
    maxHeight: "100%",
    overflow: "hidden",
  },
  ".modal-dialog-scrollable .modal-body ": {
    overflowY: "auto",
  },
  ".modal-dialog-centered ": {
    display: "flex",
    alignItems: "center",
    minHeight: "calc(100% - 1rem)",
  },
  ".modal-content": {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    pointerEvents: "auto",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    borderRadius: "0.3rem",
    outline: 0,
  },
  ".modal-backdrop": {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1040,
    width: "100vw",
    height: "100vh",
    backgroundColor: "#000",
  },
  ".modal-backdrop.fade": {
    opacity: 0,
  },
  ".modal-backdrop.show": {
    opacity: 0.5,
  },
  ".modal-header": {
    display: "flex",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 1rem",
    borderBottom: "1px solid #dee2e6",
    borderTopLeftRadius: "calc(0.3rem - 1px)",
    borderTopRightRadius: "calc(0.3rem - 1px)",
  },
  ".modal-header .btn-close": {
    padding: "0.5rem 0.5rem",
    margin: "-0.5rem -0.5rem -0.5rem auto",
  },
  ".modal-title": {
    marginBottom: 0,
    lineHeight: 1.5,
  },
  ".modal-body": {
    position: "relative",
    flex: "1 1 auto",
    padding: "1rem",
  },
  ".modal-footer": {
    display: "flex",
    flexWrap: "wrap",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0.75rem",
    borderTop: "1px solid #dee2e6",
    borderBottomRightRadius: "calc(0.3rem - 1px)",
    borderBottomLeftRadius: "calc(0.3rem - 1px)",
  },
  ".modal-footer > *": {
    margin: "0.25rem",
  },
  ".modal-scrollbar-measure": {
    position: "absolute",
    top: "-9999px",
    width: "50px",
    height: "50px",
    overflow: "scroll",
  },
  "@media (min-width: 576px)": {
    ".modal-dialog": {
      "max-width": "500px",
      margin: "1.75rem auto",
    },
    ".modal-dialog-scrollable": {
      height: "calc(100% - 3.5rem)",
    },
    ".modal-dialog-centered": {
      minHeight: "calc(100% - 3.5rem)",
    },
    ".modal-sm": {
      "max-width": "300px",
    },
  },
  "@media (min-width: 992px)": {
    ".modal-lg, .modal-xl": {
      "max-width": "800px",
    },
  },
  "@media (min-width: 1200px)": {
    ".modal-xl": {
      "max-width": "1140px",
    },
  },
  ".modal-fullscreen": {
    width: "100vw",
    "max-width": "none",
    height: "100%",
    margin: 0,
  },
  ".modal-fullscreen .modal-content": {
    height: "100%",
    border: 0,
    borderRadius: 0,
  },
  ".modal-fullscreen .modal-header": {
    borderRadius: 0,
  },
  ".modal-fullscreen .modal-body": {
    overflowY: "auto",
  },
  ".modal-fullscreen .modal-footer": {
    borderRadius: 0,
  },
  "@media (max-width: 575.98px)": {
    ".modal-fullscreen-sm-down": {
      width: "100vw",
      "max-width": "none",
      height: "100%",
      margin: 0,
    },
    ".modal-fullscreen-sm-down .modal-content": {
      height: "100%",
      border: 0,
      borderRadius: 0,
    },
    ".modal-fullscreen-sm-down .modal-header": {
      borderRadius: 0,
    },
    ".modal-fullscreen-sm-down .modal-body": {
      overflowY: "auto",
    },
    ".modal-fullscreen-sm-down .modal-footer": {
      borderRadius: 0,
    },
  },
  "@media (max-width: 767.98px)": {
    ".modal-fullscreen-md-down": {
      width: "100vw",
      "max-width": "none",
      height: "100%",
      margin: 0,
    },
    ".modal-fullscreen-md-down .modal-content": {
      height: "100%",
      border: 0,
      borderRadius: 0,
    },
    ".modal-fullscreen-md-down .modal-header": {
      borderRadius: 0,
    },
    ".modal-fullscreen-md-down .modal-body": {
      overflowY: "auto",
    },
    ".modal-fullscreen-md-down .modal-footer": {
      borderRadius: 0,
    },
  },
  "@media (max-width: 991.98px)": {
    ".modal-fullscreen-lg-down": {
      width: "100vw",
      "max-width": "none",
      height: "100%",
      margin: 0,
    },
    ".modal-fullscreen-lg-down .modal-content": {
      height: "100%",
      border: 0,
      borderRadius: 0,
    },
    ".modal-fullscreen-lg-down .modal-header": {
      borderRadius: 0,
    },
    ".modal-fullscreen-lg-down .modal-body": {
      overflowY: "auto",
    },
    ".modal-fullscreen-lg-down .modal-footer": {
      borderRadius: 0,
    },
  },
  "@media (max-width: 1199.98px)": {
    ".modal-fullscreen-xl-down": {
      width: "100vw",
      "max-width": "none",
      height: "100%",
      margin: 0,
    },
    ".modal-fullscreen-xl-down .modal-content ": {
      height: "100%",
      border: 0,
      borderRadius: 0,
    },
    ".modal-fullscreen-xl-down .modal-header": {
      borderRadius: 0,
    },
    ".modal-fullscreen-xl-down .modal-body": {
      overflowY: "auto",
    },
    ".modal-fullscreen-xl-down .modal-footer": {
      borderRadius: 0,
    },
  },
  "@media (max-width: 1399.98px)": {
    ".modal-fullscreen-xxl-down": {
      width: "100vw",
      "max-width": "none",
      height: "100%",
      margin: 0,
    },
    ".modal-fullscreen-xxl-down .modal-content": {
      height: "100%",
      border: 0,
      borderRadius: 0,
    },
    ".modal-fullscreen-xxl-down .modal-header": {
      borderRadius: 0,
    },
    ".modal-fullscreen-xxl-down .modal-body": {
      overflowY: "auto",
    },
    ".modal-fullscreen-xxl-down .modal-footer": {
      borderRadius: 0,
    },
  },
});
