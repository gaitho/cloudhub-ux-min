"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Timeline;

// ----------------------------------------------------------------------
function Timeline(_ref) {
  var theme = _ref.theme;
  return {
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.divider
        }
      }
    }
  };
}