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

var _styles = require("cloudhub-components/dist/mui/styles");

var _utils = require("@material-ui/core/utils");

var _core = require("@material-ui/core");

var _this = void 0,
    _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/theme/@material-extend/Buttons/MButton.js";

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  var styleContained = function styleContained(color) {
    return {
      boxShadow: theme.shadows[25][color],
      color: theme.palette[color].contrastText,
      backgroundColor: theme.palette[color].main,
      '&:hover': {
        backgroundColor: theme.palette[color].dark
      }
    };
  };

  var styleOutlined = function styleOutlined(color) {
    return {
      color: theme.palette[color].main,
      border: "1px solid ".concat((0, _styles.alpha)(theme.palette[color].main, 0.48)),
      '&:hover': {
        border: "1px solid ".concat(theme.palette[color].main),
        backgroundColor: (0, _styles.alpha)(theme.palette[color].main, theme.palette.action.hoverOpacity)
      }
    };
  };

  var styleText = function styleText(color) {
    return {
      color: theme.palette[color].main,
      '&:hover': {
        backgroundColor: (0, _styles.alpha)(theme.palette[color].main, theme.palette.action.hoverOpacity)
      }
    };
  };

  return {
    containedInfo: styleContained('info'),
    containedSuccess: styleContained('success'),
    containedWarning: styleContained('warning'),
    containedError: styleContained('error'),
    containedWhite: {
      boxShadow: theme.shadows[25].z8,
      color: theme.palette.getContrastText(theme.palette.common.white),
      backgroundColor: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.grey[300]
      }
    },
    outlinedInfo: styleOutlined('info'),
    outlinedSuccess: styleOutlined('success'),
    outlinedWarning: styleOutlined('warning'),
    outlinedError: styleOutlined('error'),
    textInfo: styleText('info'),
    textSuccess: styleText('success'),
    textWarning: styleText('warning'),
    textError: styleText('error')
  };
}); // ----------------------------------------------------------------------

var MButton = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'text' : _ref$variant,
      children = _ref.children,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["color", "variant", "children", "className"]);
  var classes = useStyles();

  if (color === 'inherit' || color === 'primary' || color === 'secondary') {
    return /*#__PURE__*/_react.default.createElement(_core.Button, (0, _extends2.default)({
      ref: ref,
      color: color,
      variant: variant,
      className: className
    }, other, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }
    }), children);
  }

  return /*#__PURE__*/_react.default.createElement(_core.Button, (0, _extends2.default)({
    ref: ref,
    variant: variant,
    className: (0, _clsx2.default)(classes[variant], (0, _defineProperty2.default)({}, classes["".concat(variant).concat((0, _utils.capitalize)(color))], color), className)
  }, other, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }), children);
});
MButton.propTypes = {
  children: _propTypes.default.node,
  classes: _propTypes.default.object,
  className: _propTypes.default.string,
  color: _propTypes.default.oneOf(['inherit', 'primary', 'secondary', 'info', 'success', 'warning', 'error', 'white']),
  variant: _propTypes.default.oneOfType([_propTypes.default.oneOf(['contained', 'outlined', 'text']), _propTypes.default.string])
};
var _default = MButton;
exports.default = _default;