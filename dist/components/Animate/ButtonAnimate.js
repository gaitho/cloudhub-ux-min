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

var _styles = require("cloudhub-components/dist/mui/styles");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Animate/ButtonAnimate.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'inline-flex'
    }
  };
}); // ----------------------------------------------------------------------

ButtonAnimate.propTypes = {
  small: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string
};

function ButtonAnimate(_ref) {
  var children = _ref.children,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["children", "className"]);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    component: _framerMotion.motion.div,
    whileTap: "tap",
    whileHover: "hover",
    variants: _.varSmallClick,
    className: (0, _clsx.default)(classes.root, className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }), children);
}

var _default = ButtonAnimate;
exports.default = _default;