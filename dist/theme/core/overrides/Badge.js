"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Badge;

// ----------------------------------------------------------------------
function Badge(_ref) {
  var theme = _ref.theme;
  return {
    MuiBadge: {
      styleOverrides: {
        dot: {
          width: 10,
          height: 10,
          borderRadius: '50%'
        }
      }
    }
  };
}