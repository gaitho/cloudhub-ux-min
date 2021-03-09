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

var _framerMotion = require("framer-motion");

var _ = require(".");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Animate/MotionContainer.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {}
  };
}); // ----------------------------------------------------------------------

MotionContainer.propTypes = {
  open: _propTypes.default.bool.isRequired,
  children: _propTypes.default.node
};

function MotionContainer(_ref) {
  var open = _ref.open,
      children = _ref.children,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["open", "children", "className"]);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    component: _framerMotion.motion.div,
    initial: false,
    animate: open ? 'animate' : 'exit',
    variants: _.varWrapEnter,
    className: (0, _clsx.default)(classes.root, className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }), children);
}

var _default = MotionContainer;
exports.default = _default;