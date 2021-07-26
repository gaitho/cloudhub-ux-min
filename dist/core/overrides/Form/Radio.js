"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Radio;

// ----------------------------------------------------------------------
function Radio(_ref) {
  var theme = _ref.theme;
  return {
    MuiRadio: {
      defaultProps: {
        color: 'primary'
      },
      styleOverrides: {
        root: {
          padding: 8
        }
      }
    }
  };
}