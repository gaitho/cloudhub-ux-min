"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectSpread2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _clsx = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Animate = require("src/components/Animate");

var _framerMotion = require("framer-motion");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Animate/DialogAnimate.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {},
    paper: {
      borderRadius: theme.shape.borderRadiusMd,
      backgroundColor: theme.palette.background.paper
    }
  };
}); // ----------------------------------------------------------------------

DialogAnimate.propTypes = {
  open: _propTypes.default.bool.isRequired,
  onClose: _propTypes.default.func,
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string
};

function DialogAnimate(_ref) {
  var _ref$open = _ref.open,
      open = _ref$open === void 0 ? false : _ref$open,
      onClose = _ref.onClose,
      children = _ref.children,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["open", "onClose", "children", "className"]);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_framerMotion.AnimatePresence, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, open && /*#__PURE__*/_react.default.createElement(_core.Dialog, (0, _extends2.default)({
    fullWidth: true,
    maxWidth: "xs",
    open: open,
    onClose: onClose,
    PaperComponent: _framerMotion.motion.div,
    PaperProps: (0, _objectSpread2.default)({}, _Animate.varFadeInUp),
    classes: {
      paper: classes.paper
    },
    className: (0, _clsx.default)(classes.root, className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), children));
}

var _default = DialogAnimate;
exports.default = _default;