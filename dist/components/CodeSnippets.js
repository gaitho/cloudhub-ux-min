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

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("@iconify/react");

var _react2 = _interopRequireWildcard(require("react"));

var _Markdown = _interopRequireDefault(require("src/components/Markdown"));

var _codeFill = _interopRequireDefault(require("@iconify-icons/eva/code-fill"));

var _Animate = require("src/components/Animate");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/CodeSnippets.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {}
  };
}); // ----------------------------------------------------------------------

CodeSnippets.propTypes = {
  source: _propTypes.default.string.isRequired,
  title: _propTypes.default.string
};

function CodeSnippets(_ref) {
  var source = _ref.source,
      title = _ref.title,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["source", "title", "className"]);
  var classes = useStyles();

  var _useState = (0, _react2.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  return /*#__PURE__*/_react2.default.createElement("div", {
    className: (0, _clsx.default)(classes.root, className),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react2.default.createElement(_core.Tooltip, {
    title: "View Code",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react2.default.createElement(_core.IconButton, {
    onClick: function onClick() {
      return setOpen(true);
    },
    color: open ? 'primary' : 'default',
    sx: {
      right: 8,
      bottom: 8,
      position: 'absolute'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    icon: _codeFill.default,
    width: 20,
    height: 20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }))), /*#__PURE__*/_react2.default.createElement(_Animate.DialogAnimate, (0, _extends2.default)({
    fullWidth: true,
    open: open,
    maxWidth: "md",
    scroll: "paper",
    onClose: function onClose() {
      return setOpen(false);
    }
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), title && /*#__PURE__*/_react2.default.createElement(_core.DialogTitle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 19
    }
  }, title), /*#__PURE__*/_react2.default.createElement(_core.DialogContent, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react2.default.createElement(_Markdown.default, {
    source: source,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }))));
}

var _default = CodeSnippets;
exports.default = _default;