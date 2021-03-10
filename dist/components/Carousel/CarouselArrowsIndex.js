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

var _styles = require("cloudhub-components/dist/mui/styles");

var _core = require("@material-ui/core");

var _theme = require("src/theme");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Carousel/CarouselArrowsIndex.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      zIndex: 9,
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      color: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: (0, _styles.alpha)(theme.palette.grey[900], 0.48)
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

CarouselArrowsIndex.propTypes = {
  index: _propTypes.default.number,
  total: _propTypes.default.number,
  onNext: _propTypes.default.func,
  onPrevious: _propTypes.default.func,
  className: _propTypes.default.string
};

function CarouselArrowsIndex(_ref) {
  var index = _ref.index,
      total = _ref.total,
      onNext = _ref.onNext,
      onPrevious = _ref.onPrevious,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["index", "total", "onNext", "onPrevious", "className"]);
  var classes = useStyles();
  var theme = (0, _styles.useTheme)();
  var isRTL = theme.direction === 'rtl';
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
      lineNumber: 60,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    width: 20,
    height: 20,
    icon: isRTL ? _arrowRightFill.default : _arrowLeftFill.default,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  })), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "subtitle2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, index + 1, "/", total), /*#__PURE__*/_react.default.createElement(_theme.MIconButton, {
    size: "small",
    color: "white",
    onClick: onNext,
    className: classes.arrow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    width: 20,
    height: 20,
    icon: isRTL ? _arrowLeftFill.default : _arrowRightFill.default,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  })));
}

var _default = CarouselArrowsIndex;
exports.default = _default;