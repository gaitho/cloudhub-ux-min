"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pagination;

var _styles = require("@material-ui/core/styles");

// ----------------------------------------------------------------------
function Pagination(_ref) {
  var theme = _ref.theme;
  return {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            fontWeight: theme.typography.fontWeightBold
          }
        },
        textPrimary: {
          '&.Mui-selected': {
            color: theme.palette.primary.main,
            backgroundColor: (0, _styles.alpha)(theme.palette.primary.main, 0.08),
            '&:hover, &.Mui-focusVisible': {
              backgroundColor: "".concat((0, _styles.alpha)(theme.palette.primary.main, 0.24), " !important")
            }
          }
        },
        outlined: {
          border: "1px solid ".concat(theme.palette.grey[500_32])
        },
        outlinedPrimary: {
          '&.Mui-selected': {
            backgroundColor: (0, _styles.alpha)(theme.palette.primary.main, 0.08),
            border: "1px solid ".concat((0, _styles.alpha)(theme.palette.primary.main, 0.24))
          }
        }
      }
    }
  };
}