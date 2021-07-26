"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Breadcrumbs;

// ----------------------------------------------------------------------
function Breadcrumbs(_ref) {
  var theme = _ref.theme;
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          marginLeft: 16,
          marginRight: 16
        }
      }
    }
  };
}