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

var _styles = require("cloudhub-components/dist/mui/styles");

var _utils = require("@material-ui/core/utils");

var _lab = require("@material-ui/lab");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/theme/@material-extend/Timeline/MTimelineDot.js";
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
      other = (0, _objectWithoutProperties2.default)(_ref, ["color", "variant", "className"]);
  var classes = useStyles();

  if (color === 'grey' || color === 'inherit' || color === 'primary' || color === 'secondary') {
    return /*#__PURE__*/_react.default.createElement(_lab.TimelineDot, (0, _extends2.default)({
      color: color,
      variant: variant,
      className: className
    }, other, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }
    }));
  }

  return /*#__PURE__*/_react.default.createElement(_lab.TimelineDot, (0, _extends2.default)({
    variant: variant,
    className: (0, _clsx2.default)(classes[variant], (0, _defineProperty2.default)({}, classes["".concat(variant).concat((0, _utils.capitalize)(color))], color), className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }));
}

MTimelineDot.propTypes = {
  classes: _propTypes.default.object,
  className: _propTypes.default.string,
  color: _propTypes.default.oneOf(['grey', 'inherit', 'primary', 'secondary', 'info', 'success', 'warning', 'error']),
  variant: _propTypes.default.oneOfType([_propTypes.default.oneOf(['filled', 'outlined']), _propTypes.default.string])
};
var _default = MTimelineDot;
exports.default = _default;