"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SvgIcon;

// ----------------------------------------------------------------------
function SvgIcon(_ref) {
  var theme = _ref.theme;
  return {
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: {
          width: 20,
          height: 20,
          fontSize: 'inherit'
        },
        fontSizeLarge: {
          width: 32,
          height: 32,
          fontSize: 'inherit'
        }
      }
    }
  };
}