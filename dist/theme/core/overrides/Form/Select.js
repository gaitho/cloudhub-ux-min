"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Select;

var _ExpandMoreRounded = _interopRequireDefault(require("@material-ui/icons/ExpandMoreRounded"));

// ----------------------------------------------------------------------
function Select(_ref) {
  var theme = _ref.theme;
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: _ExpandMoreRounded.default
      },
      styleOverrides: {
        root: {}
      }
    }
  };
}