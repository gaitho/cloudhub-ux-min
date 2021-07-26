"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Autocomplete;

// ----------------------------------------------------------------------
function Autocomplete(_ref) {
  var theme = _ref.theme;
  return {
    MuiAutocomplete: {
      styleOverrides: {
        // v26
        paper: {
          boxShadow: theme.shadows['25'].z20
        }
      }
    }
  };
}