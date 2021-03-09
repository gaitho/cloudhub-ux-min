"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _utils = require("@material-ui/core/utils");

var _styles = require("@material-ui/core/styles");

var _this = void 0,
    _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/theme/@material-extend/MChip.js";

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

var Mchip = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _clsx;

  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'default' : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'filled' : _ref$variant,
      clickableProp = _ref.clickable,
      onDeleteProp = _ref.onDelete,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["color", "variant", "clickable", "onDelete", "className"]);
  var classes = useStyles();

  if (color === 'default' || color === 'primary' || color === 'secondary') {
    return /*#__PURE__*/_react.default.createElement(_core.Chip, (0, _extends2.default)({
      ref: ref,
      color: color,
      variant: variant,
      clickable: clickableProp && clickableProp,
      onDelete: onDeleteProp && onDeleteProp,
      className: className
    }, other, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }
    }));
  }

  return /*#__PURE__*/_react.default.createElement(_core.Chip, (0, _extends2.default)({
    ref: ref,
    variant: variant,
    clickable: clickableProp && clickableProp,
    onDelete: onDeleteProp && onDeleteProp,
    className: (0, _clsx2.default)(classes[variant], (_clsx = {}, (0, _defineProperty2.default)(_clsx, classes["color".concat((0, _utils.capitalize)(color))], color !== 'default'), (0, _defineProperty2.default)(_clsx, classes["clickableColor".concat((0, _utils.capitalize)(color))], clickableProp && color !== 'default'), (0, _defineProperty2.default)(_clsx, classes["deletableColor".concat((0, _utils.capitalize)(color))], onDeleteProp && color !== 'default'), (0, _defineProperty2.default)(_clsx, classes.outlinedInfo, variant === 'outlined' && color === 'info'), (0, _defineProperty2.default)(_clsx, classes.outlinedSuccess, variant === 'outlined' && color === 'success'), (0, _defineProperty2.default)(_clsx, classes.outlinedWarning, variant === 'outlined' && color === 'warning'), (0, _defineProperty2.default)(_clsx, classes.outlinedError, variant === 'outlined' && color === 'error'), _clsx), className)
  }, other, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }));
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