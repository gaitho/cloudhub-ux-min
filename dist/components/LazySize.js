"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("lazysizes");

require("lazysizes/plugins/attrchange/ls.attrchange");

require("lazysizes/plugins/object-fit/ls.object-fit");

require("lazysizes/plugins/parent-fit/ls.parent-fit");

var _clsx = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _placeholder = _interopRequireDefault(require("../assets/placeholder.svg"));

var _excluded = ["component", "alt", "src", "size", "noBlur", "noPlaceholder", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      objectFit: 'cover'
    }
  };
}); // ----------------------------------------------------------------------

LazySize.propTypes = {
  alt: _propTypes.default.string.isRequired,
  src: _propTypes.default.string.isRequired,
  size: _propTypes.default.string,
  noBlur: _propTypes.default.bool,
  noPlaceholder: _propTypes.default.bool,
  className: _propTypes.default.string
};

function LazySize(_ref) {
  var _ref$component = _ref.component,
      component = _ref$component === void 0 ? 'img' : _ref$component,
      alt = _ref.alt,
      src = _ref.src,
      size = _ref.size,
      _ref$noBlur = _ref.noBlur,
      noBlur = _ref$noBlur === void 0 ? true : _ref$noBlur,
      _ref$noPlaceholder = _ref.noPlaceholder,
      noPlaceholder = _ref$noPlaceholder === void 0 ? false : _ref$noPlaceholder,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  var lazyClass = noBlur ? 'lazyload' : 'lazyload blur-up';
  var placeholder = noPlaceholder ? '' : _placeholder.default;
  var isAuto = Boolean(size);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isAuto ? /*#__PURE__*/_react.default.createElement(_core.Box, _extends({
    component: component,
    alt: alt,
    "data-sizes": "auto",
    src: placeholder,
    "data-src": src,
    "data-srcset": size,
    className: (0, _clsx.default)(classes.root, lazyClass, className)
  }, other)) : /*#__PURE__*/_react.default.createElement(_core.Box, _extends({
    component: component,
    alt: alt,
    src: placeholder,
    "data-src": src,
    className: (0, _clsx.default)(classes.root, lazyClass, className)
  }, other)));
}

var _default = LazySize;
exports.default = _default;