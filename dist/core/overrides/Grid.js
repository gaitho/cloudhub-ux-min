"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Grid;

// ----------------------------------------------------------------------
function Grid(_ref) {
  var theme = _ref.theme;
  var isRTL = theme.direction === 'rtl';
  return {
    MuiGrid: {
      styleOverrides: {
        container: {
          marginLeft: isRTL && 0
        }
      }
    }
  };
}