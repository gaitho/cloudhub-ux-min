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

var _Animate = require("../../../components/Animate");

var _styles = require("@material-ui/core/styles");

var _utils = require("@material-ui/core/utils");

var _core = require("@material-ui/core");

var _this = void 0,
    _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/theme/@material-extend/Buttons/MIconButton.js";

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  var createStyle = function createStyle(color) {
    return {
      color: theme.palette[color].main,
      '&:hover': {
        backgroundColor: (0, _styles.alpha)(theme.palette[color].main, theme.palette.action.hoverOpacity)
      }
    };
  };

  return {
    colorInfo: createStyle('info'),
    colorSuccess: createStyle('success'),
    colorWarning: createStyle('warning'),
    colorError: createStyle('error'),
    colorWhite: {
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: (0, _styles.alpha)(theme.palette.common.white, theme.palette.action.hoverOpacity)
      }
    }
  };
}); // ----------------------------------------------------------------------

var MIconButton = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'default' : _ref$color,
      children = _ref.children,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["color", "children", "className"]);
  var classes = useStyles();

  if (color === 'default' || color === 'inherit' || color === 'primary' || color === 'secondary') {
    return /*#__PURE__*/_react.default.createElement(_Animate.ButtonAnimate, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    }, /*#__PURE__*/_react.default.createElement(_core.IconButton, (0, _extends2.default)({
      ref: ref,
      color: color,
      className: className
    }, other, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }), children));
  }

  return /*#__PURE__*/_react.default.createElement(_Animate.ButtonAnimate, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, (0, _extends2.default)({
    ref: ref,
    className: (0, _clsx2.default)((0, _defineProperty2.default)({}, classes["color".concat((0, _utils.capitalize)(color))], color !== 'default'), className)
  }, other, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), children));
});
MIconButton.propTypes = {
  children: _propTypes.default.node,
  classes: _propTypes.default.object,
  className: _propTypes.default.string,
  color: _propTypes.default.oneOf(['default', 'inherit', 'primary', 'secondary', 'info', 'success', 'warning', 'error', 'white'])
};
var _default = MIconButton;
exports.default = _default;