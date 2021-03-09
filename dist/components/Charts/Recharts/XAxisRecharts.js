"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _react = _interopRequireDefault(require("react"));

var _recharts = require("recharts");

var _styles = require("@material-ui/core/styles");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Charts/Recharts/XAxisRecharts.js";

// ----------------------------------------------------------------------
function XAxisRecharts(_ref) {
  var other = (0, _extends2.default)({}, _ref);
  var theme = (0, _styles.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_recharts.XAxis, (0, _extends2.default)({
    axisLine: false,
    tickLine: false,
    tickSize: 16,
    tick: {
      fill: theme.palette.text.disabled,
      fontSize: 12
    }
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }));
}

var _default = XAxisRecharts;
exports.default = _default;