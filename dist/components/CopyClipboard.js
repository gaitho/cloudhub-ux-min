"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _slicedToArray2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("@iconify/react");

var _notistack = require("notistack");

var _react2 = _interopRequireWildcard(require("react"));

var _copyFill = _interopRequireDefault(require("@iconify-icons/eva/copy-fill"));

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/CopyClipboard.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {}
  };
}); // ----------------------------------------------------------------------

CopyClipboard.propTypes = {
  value: _propTypes.default.string,
  className: _propTypes.default.string
};

function CopyClipboard(_ref) {
  var value = _ref.value,
      className = _ref.className;
  var classes = useStyles();

  var _useSnackbar = (0, _notistack.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var _useState = (0, _react2.useState)({
    value: value,
    copied: false
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleChange = function handleChange(event) {
    setState({
      value: event.target.value,
      copied: false
    });
  };

  var onCopy = function onCopy() {
    setState((0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
      copied: true
    }));

    if (state.value) {
      enqueueSnackbar('Copied', {
        variant: 'success'
      });
    }
  };

  return /*#__PURE__*/_react2.default.createElement(_core.TextField, {
    fullWidth: true,
    value: state.value,
    onChange: handleChange,
    className: (0, _clsx.default)(classes.root, className),
    InputProps: {
      endAdornment: /*#__PURE__*/_react2.default.createElement(_core.InputAdornment, {
        position: "end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }
      }, /*#__PURE__*/_react2.default.createElement(_reactCopyToClipboard.CopyToClipboard, {
        text: state.value,
        onCopy: onCopy,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }
      }, /*#__PURE__*/_react2.default.createElement(_core.Tooltip, {
        title: "Copy",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 15
        }
      }, /*#__PURE__*/_react2.default.createElement(_core.IconButton, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }
      }, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
        icon: _copyFill.default,
        width: 24,
        height: 24,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 19
        }
      })))))
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  });
}

var _default = CopyClipboard;
exports.default = _default;