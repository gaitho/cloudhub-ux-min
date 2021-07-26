"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Progress;

// ----------------------------------------------------------------------
function Progress(_ref) {
  var theme = _ref.theme;
  var isLight = theme.palette.mode === 'light';
  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          overflow: 'hidden'
        },
        bar: {
          borderRadius: 4
        },
        colorPrimary: {
          backgroundColor: theme.palette.primary[isLight ? 'lighter' : 'darker']
        }
      }
    }
  };
}