"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Backdrop;

var _styles = require("@material-ui/core/styles");

// ----------------------------------------------------------------------
function Backdrop(_ref) {
  var theme = _ref.theme;
  return {
    MuiBackdrop: {
      styleOverrides: {// root: {
        //   backgroundColor: alpha(theme.palette.grey['900'], 0.72)
        // },
        // invisible: {
        //   backgroundColor: alpha(theme.palette.grey['900'], 0)
        // }
      }
    }
  };
}