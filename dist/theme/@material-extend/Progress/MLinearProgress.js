"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _utils = require("@material-ui/core/utils");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/theme/@material-extend/Progress/MLinearProgress.js";
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
      other = (0, _objectWithoutProperties2.default)(_ref, ["className", "color"]);
  var classes = useStyles();

  if (color === 'primary' || color === 'secondary') {
    return /*#__PURE__*/_react.default.createElement(_core.LinearProgress, (0, _extends2.default)({
      color: color,
      className: className
    }, other, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 12
      }
    }));
  }

  return /*#__PURE__*/_react.default.createElement(_core.LinearProgress, (0, _extends2.default)({
    className: (0, _clsx2.default)((0, _defineProperty2.default)({}, classes["color".concat((0, _utils.capitalize)(color))], color), className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }));
}

MLinearProgress.propTypes = {
  classes: _propTypes.default.object,
  className: _propTypes.default.string,
  color: _propTypes.default.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error'])
};
var _default = MLinearProgress;
exports.default = _default;