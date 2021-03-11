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

var _lab = require("@material-ui/lab");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    // Filled
    filledInfo: {
      backgroundColor: theme.palette.info.main
    },
    filledSuccess: {
      backgroundColor: theme.palette.success.main
    },
    filledWarning: {
      backgroundColor: theme.palette.warning.main
    },
    filledError: {
      backgroundColor: theme.palette.error.main
    },
    // Outlined
    outlinedInfo: {
      borderColor: theme.palette.info.main
    },
    outlinedSuccess: {
      borderColor: theme.palette.success.main
    },
    outlinedWarning: {
      borderColor: theme.palette.warning.main
    },
    outlinedError: {
      borderColor: theme.palette.error.main
    }
  };
}); // ----------------------------------------------------------------------

function MTimelineDot(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'grey' : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'filled' : _ref$variant,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, ["color", "variant", "className"]);

  var classes = useStyles();

  if (color === 'grey' || color === 'inherit' || color === 'primary' || color === 'secondary') {
    return /*#__PURE__*/_react.default.createElement(_lab.TimelineDot, _extends({
      color: color,
      variant: variant,
      className: className
    }, other));
  }

  return /*#__PURE__*/_react.default.createElement(_lab.TimelineDot, _extends({
    variant: variant,
    className: (0, _clsx2.default)(classes[variant], _defineProperty({}, classes["".concat(variant).concat((0, _utils.capitalize)(color))], color), className)
  }, other));
}

MTimelineDot.propTypes = {
  classes: _propTypes.default.object,
  className: _propTypes.default.string,
  color: _propTypes.default.oneOf(['grey', 'inherit', 'primary', 'secondary', 'info', 'success', 'warning', 'error']),
  variant: _propTypes.default.oneOfType([_propTypes.default.oneOf(['filled', 'outlined']), _propTypes.default.string])
};
var _default = MTimelineDot;
exports.default = _default;