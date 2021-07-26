"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Slider;

// ----------------------------------------------------------------------
function Slider(_ref) {
  var theme = _ref.theme;
  return {
    MuiSlider: {
      styleOverrides: {
        root: {
          '&.MuiSlider-root.Mui-disabled': {
            color: theme.palette.action.disabled
          }
        },
        markLabel: {
          fontSize: 13,
          color: theme.palette.text.disabled
        }
      }
    }
  };
}