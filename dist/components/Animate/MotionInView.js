"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _slicedToArray2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _framerMotion = require("framer-motion");

var _reactIntersectionObserver = require("react-intersection-observer");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Animate/MotionInView.js";
// ----------------------------------------------------------------------
MotionInView.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  variant: _propTypes.default.object,
  transition: _propTypes.default.object,
  triggerOnce: _propTypes.default.bool,
  threshold: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array])
};

function MotionInView(_ref) {
  var children = _ref.children,
      className = _ref.className,
      variants = _ref.variants,
      transition = _ref.transition,
      threshold = _ref.threshold,
      other = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "variants", "transition", "threshold"]);
  var controls = (0, _framerMotion.useAnimation)();

  var _useInView = (0, _reactIntersectionObserver.useInView)({
    threshold: threshold ? threshold : 0,
    triggerOnce: true
  }),
      _useInView2 = (0, _slicedToArray2.default)(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  (0, _react.useEffect)(function () {
    if (inView) {
      controls.start(Object.keys(variants)[1]);
    } else {
      controls.start(Object.keys(variants)[0]);
    }
  }, [controls, inView, variants]);
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    ref: ref,
    component: _framerMotion.motion.div,
    initial: Object.keys(variants)[0],
    animate: controls,
    variants: variants,
    transition: transition,
    className: className
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }), children);
}

var _default = MotionInView;
exports.default = _default;