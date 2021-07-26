"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Stepper;

// ----------------------------------------------------------------------
function Stepper(_ref) {
  var theme = _ref.theme;
  return {
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderColor: theme.palette.divider
        }
      }
    },
    MuiStepContent: {
      styleOverrides: {
        root: {
          borderColor: theme.palette.divider
        }
      }
    }
  };
}