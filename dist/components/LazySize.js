"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _clsx = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/LazySize.js";
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
      noBlur = _ref$noBlur === void 0 ? false : _ref$noBlur,
      _ref$noPlaceholder = _ref.noPlaceholder,
      noPlaceholder = _ref$noPlaceholder === void 0 ? false : _ref$noPlaceholder,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["component", "alt", "src", "size", "noBlur", "noPlaceholder", "className"]);
  var classes = useStyles();
  var lazyClass = noBlur ? 'lazyload' : 'lazyload blur-up';
  var placeholder = noPlaceholder ? '' : '/static/images/placeholder.svg';
  var isAuto = Boolean(size);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isAuto ? /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    component: component,
    alt: alt,
    "data-sizes": "auto",
    src: placeholder,
    "data-src": src,
    "data-srcset": size,
    className: (0, _clsx.default)(classes.root, lazyClass, className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })) : /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    component: component,
    alt: alt,
    src: placeholder,
    "data-src": src,
    className: (0, _clsx.default)(classes.root, lazyClass, className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  })));
}

var _default = LazySize;
exports.default = _default;