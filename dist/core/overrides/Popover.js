"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Popover;

// ----------------------------------------------------------------------
function Popover(_ref) {
  var theme = _ref.theme;
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: theme.shadows['25'].z24
        }
      }
    }
  };
}