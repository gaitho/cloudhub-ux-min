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

var _Logo = _interopRequireDefault(require("./Logo"));

var _styles = require("cloudhub-components/dist/mui/styles");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/LoadingScreen.js";
// ----------------------------------------------------------------------
var TRANSITION = {
  ease: 'linear',
  duration: 3.2,
  loop: Infinity
};
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.background.default
    },
    box: {
      position: 'absolute',
      borderRadius: '25%'
    },
    inner: {
      width: 100,
      height: 100,
      border: "solid 3px ".concat((0, _styles.alpha)(theme.palette.primary.dark, 0.24))
    },
    outside: {
      width: 120,
      height: 120,
      border: "solid 8px ".concat((0, _styles.alpha)(theme.palette.primary.dark, 0.24))
    }
  };
}); // ----------------------------------------------------------------------

LoadingScreen.propTypes = {
  className: _propTypes.default.string
};

function LoadingScreen(_ref) {
  var className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["className"]);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    initial: {
      rotateY: 0
    },
    animate: {
      rotateY: 360
    },
    transition: {
      duration: 2,
      ease: 'easeInOut',
      flip: Infinity,
      repeatDelay: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, {
    sx: {
      height: 64
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  })), /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    animate: {
      scale: [1.2, 1, 1, 1.2, 1.2],
      rotate: [270, 0, 0, 270, 270],
      opacity: [0.25, 1, 1, 1, 0.25],
      borderRadius: ['25%', '25%', '50%', '50%', '25%']
    },
    transition: TRANSITION,
    className: (0, _clsx.default)(classes.box, classes.inner),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    animate: {
      scale: [1, 1.2, 1.2, 1, 1],
      rotate: [0, 270, 270, 0, 0],
      opacity: [1, 0.25, 0.25, 0.25, 1],
      borderRadius: ['25%', '25%', '50%', '50%', '25%']
    },
    transition: {
      ease: 'linear',
      duration: 3.2,
      loop: Infinity
    },
    className: (0, _clsx.default)(classes.box, classes.outside),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }));
}

var _default = LoadingScreen;
exports.default = _default;