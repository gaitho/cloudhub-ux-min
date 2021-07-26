"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clsx2 = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _utils = require("@material-ui/core/utils");

var _styles = require("@material-ui/core/styles");

var _excluded = ["color", "variant", "clickable", "onDelete", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  // Filled
  var styleFilled = function styleFilled(color) {
    return {
      backgroundColor: theme.palette[color].main,
      color: theme.palette[color].contrastText,
      '& .MuiChip-deleteIcon': {
        color: (0, _styles.alpha)(theme.palette[color].contrastText, 0.7),
        '&:hover, &:active': {
          color: theme.palette[color].contrastText
        }
      },
      '& .MuiChip-avatar': {
        color: theme.palette[color].lighter,
        backgroundColor: theme.palette[color].dark
      },
      '& .MuiChip-icon': {
        color: 'inherit'
      }
    };
  };

  var styleFilledClickable = function styleFilledClickable(color) {
    return {
      '&:hover, &:focus': {
        backgroundColor: (0, _styles.emphasize)(theme.palette[color].main, theme.palette.action.hoverOpacity)
      }
    };
  };

  var styleFilledDeletable = function styleFilledDeletable(color) {
    return {
      '&:focus': {
        backgroundColor: (0, _styles.emphasize)(theme.palette[color].main, theme.palette.action.focusOpacity)
      }
    };
  }; // Outlined


  var styleOutlined = function styleOutlined(color) {
    return {
      color: theme.palette[color].main,
      border: "1px solid ".concat(theme.palette[color].main),
      backgroundColor: 'transparent',
      '&:focus, &.MuiChip-clickable:hover': {
        backgroundColor: (0, _styles.alpha)(theme.palette[color].main, theme.palette.action.hoverOpacity)
      },
      '& .MuiChip-deleteIcon': {
        color: (0, _styles.alpha)(theme.palette[color].main, 0.7),
        '&:hover, &:active': {
          color: theme.palette[color].main
        }
      }
    };
  };

  return {
    // Filled
    colorInfo: styleFilled('info'),
    clickableColorInfo: styleFilledClickable('info'),
    deletableColorInfo: styleFilledDeletable('info'),
    colorSuccess: styleFilled('success'),
    clickableColorSuccess: styleFilledClickable('success'),
    deletableColorSuccess: styleFilledDeletable('success'),
    colorWarning: styleFilled('warning'),
    clickableColorWarning: styleFilledClickable('warning'),
    deletableColorWarning: styleFilledDeletable('warning'),
    colorError: styleFilled('error'),
    clickableColorError: styleFilledClickable('error'),
    deletableColorError: styleFilledDeletable('error'),
    // Outlined
    outlinedInfo: styleOutlined('info'),
    outlinedSuccess: styleOutlined('success'),
    outlinedWarning: styleOutlined('warning'),
    outlinedError: styleOutlined('error')
  };
}); // ----------------------------------------------------------------------

var Mchip = (0, _react.forwardRef)(function (_ref, ref) {
  var _clsx;

  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'default' : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'filled' : _ref$variant,
      clickableProp = _ref.clickable,
      onDeleteProp = _ref.onDelete,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();

  if (color === 'default' || color === 'primary' || color === 'secondary') {
    return /*#__PURE__*/_react.default.createElement(_core.Chip, _extends({
      ref: ref,
      color: color,
      variant: variant,
      clickable: clickableProp && clickableProp,
      onDelete: onDeleteProp && onDeleteProp,
      className: className
    }, other));
  }

  return /*#__PURE__*/_react.default.createElement(_core.Chip, _extends({
    ref: ref,
    variant: variant,
    clickable: clickableProp && clickableProp,
    onDelete: onDeleteProp && onDeleteProp,
    className: (0, _clsx2.default)(classes[variant], (_clsx = {}, _defineProperty(_clsx, classes["color".concat((0, _utils.capitalize)(color))], color !== 'default'), _defineProperty(_clsx, classes["clickableColor".concat((0, _utils.capitalize)(color))], clickableProp && color !== 'default'), _defineProperty(_clsx, classes["deletableColor".concat((0, _utils.capitalize)(color))], onDeleteProp && color !== 'default'), _defineProperty(_clsx, classes.outlinedInfo, variant === 'outlined' && color === 'info'), _defineProperty(_clsx, classes.outlinedSuccess, variant === 'outlined' && color === 'success'), _defineProperty(_clsx, classes.outlinedWarning, variant === 'outlined' && color === 'warning'), _defineProperty(_clsx, classes.outlinedError, variant === 'outlined' && color === 'error'), _clsx), className)
  }, other));
});
Mchip.propTypes = {
  classes: _propTypes.default.object,
  className: _propTypes.default.string,
  clickableProp: _propTypes.default.bool,
  onDeleteProp: _propTypes.default.func,
  color: _propTypes.default.oneOf(['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error']),
  variant: _propTypes.default.oneOfType([_propTypes.default.oneOf(['filled', 'outlined']), _propTypes.default.string])
};
var _default = Mchip;
exports.default = _default;