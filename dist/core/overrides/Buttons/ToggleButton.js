"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToggleButton;

// ----------------------------------------------------------------------
function ToggleButton(_ref) {
  var theme = _ref.theme;
  var isLight = theme.palette.mode === 'light';
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: theme.palette.grey['500'],
          border: "solid 1px ".concat(theme.palette.grey['500_32']),
          '&.Mui-selected': {
            color: theme.palette.grey[isLight ? '600' : '0'],
            backgroundColor: theme.palette.action.selected
          },
          '&.Mui-disabled': {
            color: theme.palette.grey['500_48']
          }
        }
      }
    }
  };
}