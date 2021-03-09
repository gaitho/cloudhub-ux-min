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

var _simplebarReact = _interopRequireDefault(require("simplebar-react"));

var _styles = require("@material-ui/core/styles");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Scrollbars.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      flexGrow: 1,
      height: '100%',
      overflow: 'hidden'
    },
    scroll: {
      maxHeight: '100%',
      '& .simplebar-scrollbar': {
        '&:before': {
          backgroundColor: (0, _styles.alpha)(theme.palette.grey[600], 0.48)
        },
        '&.simplebar-visible:before': {
          opacity: 1
        }
      },
      '& .simplebar-vertical': {
        width: 10
      },
      '& .simplebar-horizontal .simplebar-scrollbar': {
        height: 6
      },
      '& .simplebar-mask': {
        zIndex: 'inherit'
      },
      '& .simplebar-content-wrapper::-webkit-scrollbar': {
        display: 'none'
      }
    }
  };
}); // ----------------------------------------------------------------------

Scrollbars.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string
};

function Scrollbars(_ref) {
  var children = _ref.children,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["children", "className"]);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_simplebarReact.default, (0, _extends2.default)({
    timeout: 500,
    clickOnTrack: false,
    className: (0, _clsx.default)(classes.scroll, className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), children));
}

var _default = Scrollbars;
exports.default = _default;