"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _theme = require("../theme");

var _this = void 0,
    _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/custom-components/StatusLabel.js";

var StatusLabel = function StatusLabel(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
  return /*#__PURE__*/_react.default.createElement(_theme.MLabel, (0, _extends2.default)({
    color: "primary",
    variant: "filled"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), children);
};

var _default = StatusLabel;
exports.default = _default;