"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Container;

// ----------------------------------------------------------------------
function Container(_ref) {
  var theme = _ref.theme;
  return {
    MuiContainer: {
      styleOverrides: {
        root: {}
      }
    }
  };
}