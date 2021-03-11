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
function XAxisRecharts(_ref) {
  var other = _extends({}, _ref);

  var theme = (0, _styles.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_recharts.XAxis, _extends({
    axisLine: false,
    tickLine: false,
    tickSize: 16,
    tick: {
      fill: theme.palette.text.disabled,
      fontSize: 12
    }
  }, other));
}

var _default = XAxisRecharts;
exports.default = _default;