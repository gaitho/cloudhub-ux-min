"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Snackbar;

// ----------------------------------------------------------------------
function Snackbar(_ref) {
  var theme = _ref.theme;
  return {
    MuiSnackbarContent: {
      styleOverrides: {
        root: {}
      }
    }
  };
}