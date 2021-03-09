"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Tooltip;

// ----------------------------------------------------------------------
function Tooltip(_ref) {
  var theme = _ref.theme;
  var isLight = theme.palette.mode === 'light';
  return {
    MuiTooltip: {
      styleOverrides: {
        // v26
        tooltip: {
          backgroundColor: theme.palette.grey[isLight ? 800 : 700]
        },
        // v26
        arrow: {
          color: theme.palette.grey[isLight ? 800 : 700]
        }
      }
    }
  };
}