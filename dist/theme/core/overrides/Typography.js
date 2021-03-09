"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Typography;

// ----------------------------------------------------------------------
function Typography(_ref) {
  var theme = _ref.theme;
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: 16
        },
        gutterBottom: {
          marginBottom: 8
        }
      }
    }
  };
}