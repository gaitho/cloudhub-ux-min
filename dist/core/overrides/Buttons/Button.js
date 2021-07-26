"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

// ----------------------------------------------------------------------
function Button(_ref) {
  var theme = _ref.theme;
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none'
          }
        },
        sizeLarge: {
          height: 48
        },
        containedInherit: {
          color: theme.palette.grey['800'],
          boxShadow: theme.shadows['25'].z8,
          '&:hover': {
            backgroundColor: theme.palette.grey['400']
          }
        },
        containedPrimary: {
          boxShadow: theme.shadows['25'].primary
        },
        outlinedInherit: {
          border: "1px solid ".concat(theme.palette.grey['500_32']),
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        }
      }
    }
  };
}