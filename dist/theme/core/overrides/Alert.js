"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Alert;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@iconify/react");

var _infoFill = _interopRequireDefault(require("@iconify-icons/eva/info-fill"));

var _alertCircleFill = _interopRequireDefault(require("@iconify-icons/eva/alert-circle-fill"));

var _alertTriangleFill = _interopRequireDefault(require("@iconify-icons/eva/alert-triangle-fill"));

var _checkmarkCircle2Fill = _interopRequireDefault(require("@iconify-icons/eva/checkmark-circle-2-fill"));

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/theme/core/overrides/Alert.js";

// ----------------------------------------------------------------------
function Alert(_ref) {
  var theme = _ref.theme;
  var isLight = theme.palette.mode === 'light';

  var standardStyle = function standardStyle(color) {
    return {
      color: theme.palette[color][isLight ? 'darker' : 'lighter'],
      backgroundColor: theme.palette[color][isLight ? 'lighter' : 'darker']
    };
  };

  var filledStyle = function filledStyle(color) {
    return {
      color: theme.palette[color].contrastText
    };
  };

  var outlinedStyle = function outlinedStyle(color) {
    return {
      color: theme.palette[color][isLight ? 'darker' : 'lighter'],
      border: "solid 1px ".concat(theme.palette[color][isLight ? 'light' : 'dark']),
      backgroundColor: theme.palette[color][isLight ? 'lighter' : 'darker']
    };
  };

  return {
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          error: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
            icon: _infoFill.default,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 18
            }
          }),
          info: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
            icon: _alertCircleFill.default,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 17
            }
          }),
          success: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
            icon: _checkmarkCircle2Fill.default,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 20
            }
          }),
          warning: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
            icon: _alertTriangleFill.default,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 20
            }
          })
        }
      },
      styleOverrides: {
        message: {
          '& .MuiAlertTitle-root': {
            marginBottom: 4
          }
        },
        action: {
          '& button:not(:first-of-type)': {
            marginLeft: 8
          }
        },
        standardInfo: standardStyle('info'),
        standardSuccess: standardStyle('success'),
        standardWarning: standardStyle('warning'),
        standardError: standardStyle('error'),
        filledInfo: filledStyle('info'),
        filledSuccess: filledStyle('success'),
        filledWarning: filledStyle('warning'),
        filledError: filledStyle('error'),
        outlinedInfo: outlinedStyle('info'),
        outlinedSuccess: outlinedStyle('success'),
        outlinedWarning: outlinedStyle('warning'),
        outlinedError: outlinedStyle('error')
      }
    }
  };
}