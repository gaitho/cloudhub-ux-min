"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LoadingButton;

// ----------------------------------------------------------------------
function LoadingButton(_ref) {
  var theme = _ref.theme;
  return {
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          '&.MuiButton-text': {
            '& .MuiLoadingButton-startIconPendingStart': {
              marginLeft: 0
            },
            '& .MuiLoadingButton-endIconPendingEnd': {
              marginRight: 0
            }
          }
        }
      }
    }
  };
}