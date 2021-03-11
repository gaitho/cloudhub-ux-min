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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  var styleContained = function styleContained(color) {
    return {
      boxShadow: theme.shadows[25][color],
      '& .MuiButtonGroup-grouped': {
        color: theme.palette[color].contrastText,
        backgroundColor: theme.palette[color].main,
        borderColor: "".concat(theme.palette[color].dark, " !important"),
        '&:hover': {
          backgroundColor: theme.palette[color].dark
        }
      }
    };
  };

  var styleOutlined = function styleOutlined(color) {
    return {
      '& .MuiButtonGroup-grouped': {
        color: theme.palette[color].main,
        borderColor: "".concat((0, _styles.alpha)(theme.palette[color].main, 0.48), " !important"),
        '&:hover': {
          borderColor: "".concat(theme.palette[color].main, " !important"),
          backgroundColor: (0, _styles.alpha)(theme.palette[color].main, theme.palette.action.hoverOpacity)
        }
      }
    };
  };

  var styleText = function styleText(color) {
    return {
      '& .MuiButtonGroup-grouped': {
        color: theme.palette[color].main,
        borderColor: "".concat(theme.palette[color].main, " !important"),
        '&:hover': {
          backgroundColor: (0, _styles.alpha)(theme.palette[color].main, theme.palette.action.hoverOpacity)
        }
      }
    };
  };

  return {
    containedInfo: styleContained('info'),
    containedSuccess: styleContained('success'),
    containedWarning: styleContained('warning'),
    containedError: styleContained('error'),
    outlinedInfo: styleOutlined('info'),
    outlinedWarning: styleOutlined('success'),
    outlinedSuccess: styleOutlined('warning'),
    outlinedError: styleOutlined('error'),
    textInfo: styleText('info'),
    textSuccess: styleText('success'),
    textWarning: styleText('warning'),
    textError: styleText('error')
  };
}); // ----------------------------------------------------------------------

function MButtonGroup(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'outlined' : _ref$variant,
      children = _ref.children,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, ["color", "variant", "children", "className"]);

  var classes = useStyles();

  if (color === 'inherit' || color === 'primary' || color === 'secondary') {
    return /*#__PURE__*/_react.default.createElement(_core.ButtonGroup, _extends({
      color: color,
      variant: variant,
      className: className
    }, other), children);
  }

  return /*#__PURE__*/_react.default.createElement(_core.ButtonGroup, _extends({
    variant: variant,
    className: (0, _clsx2.default)(classes[variant], _defineProperty({}, classes["".concat(variant).concat((0, _utils.capitalize)(color))], color), className)
  }, other), children);
}

MButtonGroup.propTypes = {
  children: _propTypes.default.node,
  classes: _propTypes.default.object,
  className: _propTypes.default.string,
  color: _propTypes.default.oneOf(['inherit', 'primary', 'secondary', 'info', 'success', 'warning', 'error']),
  variant: _propTypes.default.oneOfType([_propTypes.default.oneOf(['contained', 'outlined', 'text']), _propTypes.default.string])
};
var _default = MButtonGroup;
exports.default = _default;