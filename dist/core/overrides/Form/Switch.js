"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Switch;

// ----------------------------------------------------------------------
function Switch(_ref) {
  var theme = _ref.theme;
  var isLight = theme.palette.mode === 'light';
  return {
    MuiSwitch: {
      defaultProps: {
        color: 'primary'
      },
      styleOverrides: {
        thumb: {
          boxShadow: theme.shadows['25'].z1
        },
        track: {
          opacity: 1,
          backgroundColor: theme.palette.grey['500']
        },
        switchBase: {
          left: 0,
          right: 'auto',
          '&:not(:.Mui-checked)': {
            color: theme.palette.grey[isLight ? '100' : '300']
          },
          '&.Mui-checked.Mui-disabled, &.Mui-disabled': {
            color: theme.palette.grey[isLight ? '400' : '600']
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: theme.palette.action.disabledBackground
          }
        }
      }
    }
  };
}