"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clsx2 = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _utils = require("@material-ui/core/utils");

var _core = require("@material-ui/core");

var _excluded = ["className", "color"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  var isLight = theme.palette.mode === 'light';

  var gradientDashed = function gradientDashed(color) {
    var getColor = isLight ? (0, _styles.lighten)(color, 0.62) : (0, _styles.darken)(color, 0.5);
    return "radial-gradient(".concat(getColor, " 0%, ").concat(getColor, "  16%, transparent 42%)");
  };

  var createStyle = function createStyle(color) {
    return {
      '& .MuiLinearProgress-bar': {
        backgroundColor: theme.palette[color].main
      },
      '&.MuiLinearProgress-indeterminate, &.MuiLinearProgress-determinate, & .MuiLinearProgress-bar2Buffer, &.MuiLinearProgress-query': {
        backgroundColor: isLight ? theme.palette[color].lighter : theme.palette[color].darker
      },
      '& .MuiLinearProgress-dashed': {
        backgroundImage: gradientDashed(theme.palette[color].main)
      }
    };
  };

  return {
    colorInfo: createStyle('info'),
    colorSuccess: createStyle('success'),
    colorWarning: createStyle('warning'),
    colorError: createStyle('error')
  };
});

function MLinearProgress(_ref) {
  var className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      other = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();

  if (color === 'primary' || color === 'secondary') {
    return /*#__PURE__*/_react.default.createElement(_core.LinearProgress, _extends({
      color: color,
      className: className
    }, other));
  }

  return /*#__PURE__*/_react.default.createElement(_core.LinearProgress, _extends({
    className: (0, _clsx2.default)(_defineProperty({}, classes["color".concat((0, _utils.capitalize)(color))], color), className)
  }, other));
}

MLinearProgress.propTypes = {
  classes: _propTypes.default.object,
  className: _propTypes.default.string,
  color: _propTypes.default.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error'])
};
var _default = MLinearProgress;
exports.default = _default;