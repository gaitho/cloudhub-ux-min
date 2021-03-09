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

var _utils = require("@material-ui/core/utils");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/theme/@material-extend/Progress/MCircularProgress.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    colorInfo: {
      color: theme.palette.info.main
    },
    colorSuccess: {
      color: theme.palette.success.main
    },
    colorWarning: {
      color: theme.palette.warning.main
    },
    colorError: {
      color: theme.palette.error.main
    }
  };
}); // ----------------------------------------------------------------------

function MCircularProgress(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["color", "className"]);
  var classes = useStyles();

  if (color === 'inherit' || color === 'primary' || color === 'secondary') {
    return /*#__PURE__*/_react.default.createElement(_core.CircularProgress, (0, _extends2.default)({
      color: color,
      className: className
    }, other, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 12
      }
    }));
  }

  return /*#__PURE__*/_react.default.createElement(_core.CircularProgress, (0, _extends2.default)({
    className: (0, _clsx2.default)((0, _defineProperty2.default)({}, classes["color".concat((0, _utils.capitalize)(color))], color), className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }));
}

MCircularProgress.propTypes = {
  classes: _propTypes.default.object,
  className: _propTypes.default.string,
  color: _propTypes.default.oneOf(['inherit', 'primary', 'secondary', 'info', 'success', 'warning', 'error'])
};
var _default = MCircularProgress;
exports.default = _default;