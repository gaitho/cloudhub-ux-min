"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Backdrop;

var _styles = require("cloudhub-components/dist/mui/styles");

// ----------------------------------------------------------------------
function Backdrop(_ref) {
  var theme = _ref.theme;
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: (0, _styles.alpha)(theme.palette.grey[900], 0.72)
        },
        invisible: {
          backgroundColor: 'transparent'
        }
      }
    }
  };
}