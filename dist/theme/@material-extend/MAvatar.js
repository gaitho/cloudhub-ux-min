"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _defineProperty2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _utils = require("@material-ui/core/utils");

var _styles = require("@material-ui/core/styles");

var _this = void 0,
    _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/theme/@material-extend/MAvatar.js";

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  var createStyle = function createStyle(color) {
    return {
      color: "".concat(theme.palette[color].contrastText, " !important"),
      backgroundColor: "".concat(theme.palette[color].main, " !important")
    };
  };

  return {
    root: {
      fontWeight: theme.typography.fontWeightMedium
    },
    colorPrimary: createStyle('primary'),
    colorSecondary: createStyle('secondary'),
    colorInfo: createStyle('info'),
    colorSuccess: createStyle('success'),
    colorWarning: createStyle('warning'),
    colorError: createStyle('error')
  };
}); // ----------------------------------------------------------------------

var MAvatar = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'default' : _ref$color,
      children = _ref.children,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["color", "children", "className"]);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Avatar, (0, _extends2.default)({
    ref: ref,
    className: (0, _clsx2.default)(classes.root, (0, _defineProperty2.default)({}, classes["color".concat((0, _utils.capitalize)(color))], color), className)
  }, other, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), children);
});
MAvatar.propTypes = {
  children: _propTypes.default.node,
  classes: _propTypes.default.object,
  className: _propTypes.default.string,
  color: _propTypes.default.oneOf(['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'])
};
var _default = MAvatar;
exports.default = _default;