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

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/theme/@material-extend/SelectionControls/MRadio.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  var createStyle = function createStyle(color) {
    return {
      '&.Mui-checked': {
        color: theme.palette[color].main
      },
      '&:hover, &.Mui-checked:hover': {
        backgroundColor: (0, _styles.alpha)(theme.palette[color].main, theme.palette.action.hoverOpacity)
      }
    };
  };

  return {
    colorInfo: createStyle('info'),
    colorSuccess: createStyle('success'),
    colorWarning: createStyle('warning'),
    colorError: createStyle('error')
  };
}); // ----------------------------------------------------------------------

function MRadio(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["color", "className"]);
  var classes = useStyles();

  if (color === 'default' || color === 'primary' || color === 'secondary') {
    return /*#__PURE__*/_react.default.createElement(_core.Radio, (0, _extends2.default)({
      color: color,
      className: className
    }, other, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 12
      }
    }));
  }

  return /*#__PURE__*/_react.default.createElement(_core.Radio, (0, _extends2.default)({
    className: (0, _clsx2.default)((0, _defineProperty2.default)({}, classes["color".concat((0, _utils.capitalize)(color))], color), className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }));
}

MRadio.propTypes = {
  classes: _propTypes.default.object,
  className: _propTypes.default.string,
  color: _propTypes.default.oneOf(['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'])
};
var _default = MRadio;
exports.default = _default;