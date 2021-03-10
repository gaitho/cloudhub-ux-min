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

var _reactSvg = require("react-svg");

var _utils = require("@material-ui/core/utils");

var _styles = require("cloudhub-components/dist/mui/styles");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/theme/@material-extend/MIcon.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  var createStyle = function createStyle(color) {
    return {
      '& svg path': {
        fill: color
      }
    };
  };

  return {
    root: {
      lineHeight: 0,
      '& svg': {
        height: '100%'
      }
    },
    colorInitial: {},
    colorInherit: createStyle('currentColor'),
    colorAction: createStyle(theme.palette.action.active),
    colorDisabled: createStyle(theme.palette.action.disabled),
    colorPrimary: createStyle(theme.palette.primary.main),
    colorSecondary: createStyle(theme.palette.secondary.main),
    colorInfo: createStyle(theme.palette.info.main),
    colorSuccess: createStyle(theme.palette.success.main),
    colorWarning: createStyle(theme.palette.warning.main),
    colorError: createStyle(theme.palette.error.main),
    colorPaper: createStyle(theme.palette.background.paper)
  };
}); // ----------------------------------------------------------------------

function MIcon(_ref) {
  var src = _ref.src,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'inherit' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["src", "color", "size", "className"]);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_reactSvg.ReactSVG, (0, _extends2.default)({
    src: src,
    beforeInjection: function beforeInjection(svg) {
      svg.setAttribute('style', "width: ".concat(size, "px"));
    },
    className: (0, _clsx2.default)(classes.root, (0, _defineProperty2.default)({}, classes["color".concat((0, _utils.capitalize)(color))], color), className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }));
}

MIcon.propTypes = {
  classes: _propTypes.default.object,
  className: _propTypes.default.string,
  src: _propTypes.default.string.isRequired,
  size: _propTypes.default.number,
  color: _propTypes.default.oneOf(['initial', 'inherit', 'action', 'disabled', 'primary', 'secondary', 'info', 'success', 'warning', 'error', 'paper'])
};
var _default = MIcon;
exports.default = _default;