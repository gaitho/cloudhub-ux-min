"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _recharts = require("recharts");

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// ----------------------------------------------------------------------
function TooltipRecharts(_ref) {
  var other = _extends({}, _ref);

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
  return /*#__PURE__*/_react.default.createElement(_recharts.Tooltip, _extends({
    cursor: cursorStyle,
    itemStyle: itemStyle,
    contentStyle: contentStyle,
    labelStyle: labelStyle
  }, other));
}

var _default = TooltipRecharts;
exports.default = _default;