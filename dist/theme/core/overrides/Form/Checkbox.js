"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Checkbox;

var _objectSpread2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@iconify/react");

var _squareFill = _interopRequireDefault(require("@iconify-icons/eva/square-fill"));

var _minusSquareFill = _interopRequireDefault(require("@iconify-icons/eva/minus-square-fill"));

var _checkmarkSquare2Fill = _interopRequireDefault(require("@iconify-icons/eva/checkmark-square-2-fill"));

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/theme/core/overrides/Form/Checkbox.js";
// ----------------------------------------------------------------------
var ICON_MEDIUM = {
  width: 24,
  height: 24
};
var ICON_SMALL = {
  width: 20,
  height: 20
};

function Checkbox(_ref) {
  var theme = _ref.theme;
  return {
    MuiCheckbox: {
      defaultProps: {
        color: 'primary',
        icon: /*#__PURE__*/_react.default.createElement(_react2.Icon, (0, _extends2.default)({
          icon: _squareFill.default
        }, ICON_MEDIUM, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 15
          }
        })),
        checkedIcon: /*#__PURE__*/_react.default.createElement(_react2.Icon, (0, _extends2.default)({
          icon: _checkmarkSquare2Fill.default
        }, ICON_MEDIUM, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 22
          }
        })),
        indeterminateIcon: /*#__PURE__*/_react.default.createElement(_react2.Icon, (0, _extends2.default)({
          icon: _minusSquareFill.default
        }, ICON_MEDIUM, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 28
          }
        }))
      },
      styleOverrides: {
        root: {
          padding: 8,
          '& svg[font-size="small"]': (0, _objectSpread2.default)({}, ICON_SMALL),
          '&.Mui-checked.Mui-disabled, &.Mui-disabled': {
            color: theme.palette.action.disabled
          }
        }
      }
    }
  };
}