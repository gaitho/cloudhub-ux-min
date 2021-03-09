"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ControlLabel;

var _objectSpread2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

// ----------------------------------------------------------------------
function ControlLabel(_ref) {
  var theme = _ref.theme;
  return {
    MuiFormControlLabel: {
      styleOverrides: {
        label: (0, _objectSpread2.default)({}, theme.typography.body2)
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: 8
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.text.disabled
        }
      }
    }
  };
}