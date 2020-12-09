module.exports = Tooltip = () => ({
  ".tooltip": {
    position: "absolute",
    zIndex: 1070,
    display: "block",
    margin: 0,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 1.5,
    textAlign: "left",
    textAlign: "start",
    textDecoration: "none",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    whiteSpace: "normal",
    lineBreak: "auto",
    fontSize: "0.875rem",
    wordWrap: "break-word",
    opacity: 0,
  },
  ".tooltip.show": {
    opacity: 0.9,
  },
  ".tooltip .tooltip-arrow": {
    position: "absolute",
    display: "block",
    width: "0.8rem",
    height: "0.4rem",
  },
  ".tooltip .tooltip-arrow::before": {
    position: "absolute",
    content: "''",
    borderColor: "transparent",
    borderStyle: "solid",
  },
  ".bs-tooltip-top, .bs-tooltip-auto[data-popper-placement^=top]": {
    padding: "0.4rem 0",
  },
  ".bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow": {
    bottom: 0,
  },
  ".bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before": {
    top: "-1px",
    borderWidth: "0.4rem 0.4rem 0",
    borderTopColor: "#000",
  },
  ".bs-tooltip-end, .bs-tooltip-auto[data-popper-placement^=right]": {
    padding: "0 0.4rem",
  },
  ".bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow": {
    left: 0,
    width: " 0.4rem",
    height: "0.8rem",
  },
  ".bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before": {
    right: "-1px",
    borderWidth: "0.4rem 0.4rem 0.4rem 0",
    borderRightColor: "#000",
  },
  ".bs-tooltip-bottom, .bs-tooltip-auto[data-popper-placement^=bottom]": {
    padding: "0.4rem 0",
  },
  ".bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow": {
    top: 0,
  },
  ".bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before": {
    bottom: "-1px",
    borderWidth: "0 0.4rem 0.4rem",
    borderBottomColor: "#000",
  },
  ".bs-tooltip-start, .bs-tooltip-auto[data-popper-placement^=left]": {
    padding: "0 0.4rem",
  },
  ".bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow": {
    right: 0,
    width: "0.4rem",
    height: "0.8rem",
  },
  ".bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before": {
    left: "-1px",
    borderWidth: "0.4rem 0 0.4rem 0.4rem",
    borderLeftColor: "#000",
  },
  ".tooltip-inner": {
    "max-width": "200px",
    padding: "0.25rem 0.5rem",
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#000",
    borderRadius: "0.25rem",
  },
});
