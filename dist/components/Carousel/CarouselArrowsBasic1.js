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

var _react2 = require("@iconify/react");

var _arrowLeftFill = _interopRequireDefault(require("@iconify-icons/eva/arrow-left-fill"));

var _arrowRightFill = _interopRequireDefault(require("@iconify-icons/eva/arrow-right-fill"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _theme = require("src/theme");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Carousel/CarouselArrowsBasic1.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      zIndex: 9,
      display: 'flex',
      position: 'absolute',
      top: theme.spacing(2),
      right: theme.spacing(2)
    },
    arrow: {
      padding: 6,
      opacity: 0.48,
      '&:hover': {
        opacity: 1
      }
    }
  };
}); // ----------------------------------------------------------------------

CarouselArrowsBasic1.propTypes = {
  onNext: _propTypes.default.func,
  onPrevious: _propTypes.default.func,
  className: _propTypes.default.string
};

function CarouselArrowsBasic1(_ref) {
  var onNext = _ref.onNext,
      onPrevious = _ref.onPrevious,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["onNext", "onPrevious", "className"]);
  var classes = useStyles();
  var theme = (0, _styles.useTheme)();
  var isRTL = theme.direction === 'rtl';
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react.default.createElement(_theme.MIconButton, {
    size: "small",
    color: "white",
    onClick: onPrevious,
    className: classes.arrow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    width: 20,
    height: 20,
    icon: isRTL ? _arrowRightFill.default : _arrowLeftFill.default,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), /*#__PURE__*/_react.default.createElement(_theme.MIconButton, {
    size: "small",
    color: "white",
    onClick: onNext,
    className: classes.arrow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    width: 20,
    height: 20,
    icon: isRTL ? _arrowLeftFill.default : _arrowRightFill.default,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  })));
}

var _default = CarouselArrowsBasic1;
exports.default = _default;