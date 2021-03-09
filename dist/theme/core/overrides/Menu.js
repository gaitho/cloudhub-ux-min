"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Menu;

// ----------------------------------------------------------------------
function Menu(_ref) {
  var theme = _ref.theme;
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: theme.palette.action.selected,
            '&:hover': {
              backgroundColor: theme.palette.action.hover
            }
          }
        }
      }
    }
  };
}