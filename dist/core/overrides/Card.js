"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Card;

// ----------------------------------------------------------------------
function Card(_ref) {
  var theme = _ref.theme;
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.shadows['25'].z16,
          borderRadius: theme.shape.borderRadiusMd,
          position: 'relative',
          zIndex: 0 // Fix Safari overflow: hidden with border radius

        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6'
        },
        subheaderTypographyProps: {
          variant: 'body2'
        }
      },
      styleOverrides: {
        root: {
          padding: 24,
          paddingBottom: 0
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 24
        }
      }
    }
  };
}