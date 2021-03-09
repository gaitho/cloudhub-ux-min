"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TreeView;

var _objectSpread2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@iconify/react");

var _plusSquareOutline = _interopRequireDefault(require("@iconify-icons/eva/plus-square-outline"));

var _minusSquareOutline = _interopRequireDefault(require("@iconify-icons/eva/minus-square-outline"));

var _closeSquareOutline = _interopRequireDefault(require("@iconify-icons/eva/close-square-outline"));

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/theme/core/overrides/TreeView.js";
// ----------------------------------------------------------------------
var ICON_SIZE = {
  width: 20,
  height: 20
};

function TreeView(_ref) {
  var theme = _ref.theme;
  return {
    MuiTreeView: {
      defaultProps: {
        defaultCollapseIcon: /*#__PURE__*/_react.default.createElement(_react2.Icon, (0, _extends2.default)({
          icon: _minusSquareOutline.default
        }, ICON_SIZE, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 30
          }
        })),
        defaultExpandIcon: /*#__PURE__*/_react.default.createElement(_react2.Icon, (0, _extends2.default)({
          icon: _plusSquareOutline.default
        }, ICON_SIZE, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 28
          }
        })),
        defaultEndIcon: /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
          component: _react2.Icon,
          icon: _closeSquareOutline.default
        }, ICON_SIZE, {
          sx: {
            color: 'text.secondary'
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 11
          }
        }))
      }
    },
    MuiTreeItem: {
      styleOverrides: {
        label: (0, _objectSpread2.default)({}, theme.typography.body2),
        iconContainer: {
          width: 'auto'
        }
      }
    }
  };
}