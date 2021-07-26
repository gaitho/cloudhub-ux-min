"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Paper;

// ----------------------------------------------------------------------
function Paper(_ref) {
  var theme = _ref.theme;
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          // v26
          '&.MuiAutocomplete-paper': {
            boxShadow: theme.shadows['25'].z20
          }
        }
      }
    }
  };
}