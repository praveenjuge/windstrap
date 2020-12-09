module.exports = Dropdown = () => ({
  ".dropup, .dropend, .dropdown, .dropstart": {
    position: "relative",
  },
  ".dropdown-toggle": {
    whiteSpace: "nowrap",
  },
  ".dropdown-toggle::after": {
    display: "inline-block",
    marginLeft: "0.255em",
    verticalAlign: "0.255em",
    content: "''",
    borderTop: "0.3em solid",
    borderRight: "0.3em solid transparent",
    borderBottom: 0,
    borderLeft: "0.3em solid transparent",
  },
  ".dropdown-toggle:empty::after ": {
    marginLeft: 0,
  },
  ".dropdown-menu": {
    position: "absolute",
    top: "100%",
    left: 0,
    zIndex: 1000,
    display: "none",
    minWidth: "10rem",
    padding: "0.5rem 0",
    margin: "0.125rem 0 0",
    fontSize: "1rem",
    color: "#212529",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    border: "1px solid rgba(0, 0, 0, 0.15)",
    borderRadius: "0.25rem",
  },
  ".dropdown-menu[style]": {
    right: "auto !important",
  },
  ".dropdown-menu-start": {
    "--bs-position": "start",
    right: "auto /* rtl:ignore */",
    left: "0 /* rtl:ignore */",
  },
  ".dropdown-menu-end": {
    "--bs-position": "end",
    right: "0 /* rtl:ignore */",
    left: "auto /* rtl:ignore */",
  },
  "@media (min-width: 576px)": {
    ".dropdown-menu-sm-start": {
      "--bs-position": "start",
      right: "auto /* rtl:ignore */",
      left: "0 /* rtl:ignore */",
    },
    ".dropdown-menu-sm-end": {
      "--bs-position": "end",
      right: "0 /* rtl:ignore */",
      left: "auto /* rtl:ignore */",
    },
  },
  "@media (min-width: 768px)": {
    ".dropdown-menu-md-start": {
      "--bs-position": "start",
      right: "auto /* rtl:ignore */",
      left: "0 /* rtl:ignore */",
    },
    ".dropdown-menu-md-end": {
      "--bs-position": "end",
      right: "0 /* rtl:ignore */",
      left: "auto /* rtl:ignore */",
    },
  },
  "@media (min-width: 992px)": {
    ".dropdown-menu-lg-start": {
      "--bs-position": "start",
      right: "auto /* rtl:ignore */",
      left: "0 /* rtl:ignore */",
    },
    ".dropdown-menu-lg-end": {
      "--bs-position": "end",
      right: "0 /* rtl:ignore */",
      left: "auto /* rtl:ignore */",
    },
  },
  "@media (min-width: 1200px) ": {
    ".dropdown-menu-xl-start": {
      "--bs-position": "start",
      right: "auto /* rtl:ignore */",
      left: "0 /* rtl:ignore */",
    },
    ".dropdown-menu-xl-end": {
      "--bs-position": "end",
      right: "0 /* rtl:ignore */",
      left: "auto /* rtl:ignore */",
    },
  },
  "@media (min-width: 1400px)": {
    ".dropdown-menu-xxl-start": {
      "--bs-position": "start",
      right: "auto /* rtl:ignore */",
      left: "0 /* rtl:ignore */",
    },
    ".dropdown-menu-xxl-end": {
      "--bs-position": "end",
      right: "0 /* rtl:ignore */",
      left: "auto /* rtl:ignore */",
    },
  },
  ".dropup .dropdown-menu": {
    top: "auto",
    bottom: "100%",
    marginTop: 0,
    marginBottom: "0.125rem",
  },
  ".dropup .dropdown-toggle::after": {
    display: "inline-block",
    marginLeft: "0.255em",
    verticalAlign: "0.255em",
    content: "''",
    borderTop: 0,
    borderRight: "0.3em solid transparent",
    borderBottom: "0.3em solid",
    borderLeft: "0.3em solid transparent",
  },
  ".dropup .dropdown-toggle:empty::after": {
    marginLeft: 0,
  },
  ".dropend .dropdown-menu": {
    top: 0,
    right: "auto",
    left: "100%",
    marginTop: 0,
    marginLeft: "0.125rem",
  },
  ".dropend .dropdown-toggle::after": {
    display: "inline-block",
    marginLeft: "0.255em",
    verticalAlign: "0.255em",
    content: "''",
    borderTop: "0.3em solid transparent",
    borderRight: 0,
    borderBottom: "0.3em solid transparent",
    borderLeft: "0.3em solid",
  },
  ".dropend .dropdown-toggle:empty::after": {
    marginLeft: 0,
  },
  ".dropend .dropdown-toggle::after ": {
    verticalAlign: 0,
  },
  ".dropstart .dropdown-menu": {
    top: 0,
    right: "100%",
    left: "auto",
    marginTop: 0,
    marginRight: "0.125rem",
  },
  ".dropstart .dropdown-toggle::after ": {
    display: "inline-block",
    marginLeft: "0.255em",
    verticalAlign: "0.255em",
    content: "''",
  },
  ".dropstart .dropdown-toggle::after ": {
    display: "none",
  },
  ".dropstart .dropdown-toggle::before ": {
    display: "inline-block",
    marginRight: "0.255em",
    verticalAlign: "0.255em",
    content: "''",
    borderTop: "0.3em solid transparent",
    borderRight: "0.3em solid",
    borderBottom: "0.3em solid transparent",
  },
  ".dropstart .dropdown-toggle:empty::after": {
    marginLeft: 0,
  },
  ".dropstart .dropdown-toggle::before": {
    verticalAlign: 0,
  },
  ".dropdown-divider": {
    height: 0,
    margin: "0.5rem 0",
    overflow: "hidden",
    borderTop: "1px solid rgba(0, 0, 0, 0.15)",
  },
  ".dropdown-item": {
    display: "block",
    width: "100%",
    padding: "0.25rem 1rem",
    clear: "both",
    fontWeight: 400,
    color: "#212529",
    textAlign: "inherit",
    textDecoration: "none",
    whiteSpace: "nowrap",
    backgroundColor: "transparent",
    border: 0,
  },
  ".dropdown-item:hover, .dropdown-item:focus": {
    color: "#1e2125",
    backgroundColor: "#f8f9fa",
  },
  ".dropdown-item.active, .dropdown-item:active": {
    color: "#fff",
    textDecoration: "none",
    backgroundColor: "#0d6efd",
  },
  ".dropdown-item.disabled, .dropdown-item:disabled": {
    color: "#6c757d",
    pointerEvents: "none",
    backgroundColor: "transparent",
  },
  ".dropdown-menu.show": {
    display: "block",
  },
  ".dropdown-header": {
    display: "block",
    padding: "0.5rem 1rem",
    marginBottom: 0,
    fontSize: "0.875rem",
    color: "#6c757d",
    whiteSpace: "nowrap",
  },
  ".dropdown-item-text": {
    display: "block",
    padding: "0.25rem 1rem",
    color: "#212529",
  },
  ".dropdown-menu-dark": {
    color: "#dee2e6",
    backgroundColor: "#343a40",
    borderColor: "rgba(0, 0, 0, 0.15)",
  },
  ".dropdown-menu-dark .dropdown-item": {
    color: "#dee2e6",
  },
  ".dropdown-menu-dark .dropdown-item:hover, .dropdown-menu-dark .dropdown-item:focus": {
    color: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  " .dropdown-menu-dark .dropdown-item.active, .dropdown-menu-dark .dropdown-item:active": {
    color: "#fff",
    backgroundColor: "#0d6efd",
  },
  ".dropdown-menu-dark .dropdown-item.disabled, .dropdown-menu-dark .dropdown-item:disabled": {
    color: "#adb5bd",
  },
  ".dropdown-menu-dark .dropdown-divider": {
    borderColor: "rgba(0, 0, 0, 0.15)",
  },
  ".dropdown-menu-dark .dropdown-item-text": {
    color: "#dee2e6",
  },
  ".dropdown-menu-dark .dropdown-header": {
    color: "#adb5bd",
  },
});
