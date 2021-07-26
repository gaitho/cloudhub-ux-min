"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clsx = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _framerMotion = require("framer-motion");

var _Logo = _interopRequireDefault(require("./Logo"));

var _styles = require("@material-ui/core/styles");

var _excluded = ["className", "logo"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
      logo = _ref.logo,
      other = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _clsx.default)(classes.root, className)
  }, other), /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
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
    }
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, {
    src: logo,
    sx: {
      height: 64
    }
  })), /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    animate: {
      scale: [1.2, 1, 1, 1.2, 1.2],
      rotate: [270, 0, 0, 270, 270],
      opacity: [0.25, 1, 1, 1, 0.25],
      borderRadius: ['25%', '25%', '50%', '50%', '25%']
    },
    transition: TRANSITION,
    className: (0, _clsx.default)(classes.box, classes.inner)
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
    className: (0, _clsx.default)(classes.box, classes.outside)
  }));
}

var _default = LoadingScreen;
exports.default = _default;