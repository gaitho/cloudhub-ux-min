"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Skeleton;

// ----------------------------------------------------------------------
function Skeleton(_ref) {
  var theme = _ref.theme;
  return {
    MuiSkeleton: {
      defaultProps: {
        animation: 'wave'
      },
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.neutral
        }
      }
    }
  };
}