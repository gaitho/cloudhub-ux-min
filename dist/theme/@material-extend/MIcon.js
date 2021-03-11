"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clsx2 = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSvg = require("react-svg");

var _utils = require("@material-ui/core/utils");

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
      other = _objectWithoutProperties(_ref, ["src", "color", "size", "className"]);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_reactSvg.ReactSVG, _extends({
    src: src,
    beforeInjection: function beforeInjection(svg) {
      svg.setAttribute('style', "width: ".concat(size, "px"));
    },
    className: (0, _clsx2.default)(classes.root, _defineProperty({}, classes["color".concat((0, _utils.capitalize)(color))], color), className)
  }, other));
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