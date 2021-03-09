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

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Charts/Recharts/TooltipRecharts.js";

// ----------------------------------------------------------------------
function TooltipRecharts(_ref) {
  var other = (0, _extends2.default)({}, _ref);
  var theme = (0, _styles.useTheme)();
  var itemStyle = {
    fontSize: 13,
    padding: '2px 0',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary
  };
  var contentStyle = {
    border: 0,
    padding: 12,
    borderRadius: 8,
    boxShadow: theme.shadows[25].z12,
    backgroundColor: theme.palette.background.paper
  };
  var labelStyle = {
    marginBottom: 4,
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium
  };
  var cursorStyle = {
    stroke: theme.palette.divider
  };
  return /*#__PURE__*/_react.default.createElement(_recharts.Tooltip, (0, _extends2.default)({
    cursor: cursorStyle,
    itemStyle: itemStyle,
    contentStyle: contentStyle,
    labelStyle: labelStyle
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }));
}

var _default = TooltipRecharts;
exports.default = _default;