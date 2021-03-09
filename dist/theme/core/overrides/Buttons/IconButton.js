"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IconButton;

// ----------------------------------------------------------------------
function IconButton(_ref) {
  var theme = _ref.theme;
  return {
    MuiIconButton: {
      variants: [{
        props: {
          color: 'default'
        },
        style: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        }
      }, {
        props: {
          color: 'inherit'
        },
        style: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        }
      }],
      styleOverrides: {
        root: {}
      }
    }
  };
}