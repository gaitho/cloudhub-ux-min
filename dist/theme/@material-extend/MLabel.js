"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _defineProperty2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _utils = require("@material-ui/core/utils");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/theme/@material-extend/MLabel.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  var isLight = theme.palette.mode === 'light';

  var styleFilled = function styleFilled(color) {
    return {
      color: theme.palette[color].contrastText,
      backgroundColor: theme.palette[color].main
    };
  };

  var styleOutlined = function styleOutlined(color) {
    return {
      color: theme.palette[color].main,
      border: "1px solid ".concat(theme.palette[color].main)
    };
  };

  var styleGhost = function styleGhost(color) {
    return {
      color: theme.palette[color][isLight ? 'dark' : 'light'],
      backgroundColor: (0, _styles.alpha)(theme.palette[color].main, 0.16)
    };
  };

  return {
    root: {
      height: 22,
      minWidth: 22,
      lineHeight: 0,
      borderRadius: 8,
      cursor: 'default',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      justifyContent: 'center',
      padding: theme.spacing(0, 1),
      color: theme.palette.grey[800],
      fontSize: theme.typography.pxToRem(12),
      fontFamily: theme.typography.fontFamily,
      backgroundColor: theme.palette.grey[300],
      fontWeight: theme.typography.fontWeightBold
    },
    // Filled
    filledPrimary: styleFilled('primary'),
    filledSecondary: styleFilled('secondary'),
    filledInfo: styleFilled('info'),
    filledSuccess: styleFilled('success'),
    filledWarning: styleFilled('warning'),
    filledError: styleFilled('error'),
    // Outlined
    outlined: {
      backgroundColor: 'transparent',
      color: theme.palette.text.primary,
      border: "1px solid ".concat(theme.palette.grey[50032])
    },
    outlinedPrimary: styleOutlined('primary'),
    outlinedSecondary: styleOutlined('secondary'),
    outlinedInfo: styleOutlined('info'),
    outlinedSuccess: styleOutlined('success'),
    outlinedWarning: styleOutlined('warning'),
    outlinedError: styleOutlined('error'),
    // Ghost
    ghost: {
      color: isLight ? theme.palette.text.secondary : theme.palette.common.white,
      backgroundColor: theme.palette.grey[50016]
    },
    ghostPrimary: styleGhost('primary'),
    ghostSecondary: styleGhost('secondary'),
    ghostInfo: styleGhost('info'),
    ghostSuccess: styleGhost('success'),
    ghostWarning: styleGhost('warning'),
    ghostError: styleGhost('error')
  };
});

function MLabel(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'default' : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'ghost' : _ref$variant,
      children = _ref.children,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["color", "variant", "children", "className"]);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    component: "span",
    className: (0, _clsx2.default)(classes.root, classes[variant], (0, _defineProperty2.default)({}, classes["".concat(variant).concat((0, _utils.capitalize)(color))], color !== 'default'), className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }), children);
}

MLabel.propTypes = {
  children: _propTypes.default.node,
  classes: _propTypes.default.object,
  className: _propTypes.default.string,
  color: _propTypes.default.oneOf(['default', 'inherit', 'primary', 'secondary', 'info', 'success', 'warning', 'error']),
  variant: _propTypes.default.oneOf(['filled', 'outlined', 'ghost'])
};
var _default = MLabel;
exports.default = _default;