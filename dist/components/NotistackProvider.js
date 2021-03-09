"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@iconify/react");

var _notistack = require("notistack");

var _infoFill = _interopRequireDefault(require("@iconify-icons/eva/info-fill"));

var _alertCircleFill = _interopRequireDefault(require("@iconify-icons/eva/alert-circle-fill"));

var _alertTriangleFill = _interopRequireDefault(require("@iconify-icons/eva/alert-triangle-fill"));

var _checkmarkCircle2Fill = _interopRequireDefault(require("@iconify-icons/eva/checkmark-circle-2-fill"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/NotistackProvider.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  var isLight = theme.palette.mode === 'light';
  var createStyle = {
    color: "".concat(theme.palette.text.primary, " !important"),
    backgroundColor: "".concat(theme.palette.background.paper, " !important")
  };
  return {
    containerRoot: {
      '& .MuiCollapse-wrapperInner': {
        width: '100%'
      }
    },
    contentRoot: {
      width: '100%',
      padding: theme.spacing(1.5),
      boxShadow: theme.shadows[25].z8,
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.grey[isLight ? 0 : 800],
      backgroundColor: theme.palette.grey[isLight ? 900 : 0]
    },
    message: {
      padding: 0,
      fontWeight: theme.typography.fontWeightMedium
    },
    action: {
      marginRight: -4,
      '& svg': {
        width: 20,
        height: 20,
        opacity: 0.48,
        '&:hover': {
          opacity: 1
        }
      }
    },
    info: (0, _objectSpread2.default)({}, createStyle),
    success: (0, _objectSpread2.default)({}, createStyle),
    warning: (0, _objectSpread2.default)({}, createStyle),
    error: (0, _objectSpread2.default)({}, createStyle)
  };
}); // ----------------------------------------------------------------------

function SnackbarIcon(_ref) {
  var icon = _ref.icon,
      color = _ref.color;
  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    component: "span",
    sx: {
      mr: 1.5,
      width: 40,
      height: 40,
      display: 'flex',
      borderRadius: 1.5,
      alignItems: 'center',
      justifyContent: 'center',
      color: "".concat(color, ".main"),
      bgcolor: function bgcolor(theme) {
        return (0, _styles.alpha)(theme.palette[color].main, 0.16);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    icon: icon,
    width: 24,
    height: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }));
}

NotistackProvider.propTypes = {
  children: _propTypes.default.node
};

function NotistackProvider(_ref2) {
  var children = _ref2.children;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_notistack.SnackbarProvider, {
    dense: true,
    maxSnack: 5,
    preventDuplicate: true,
    autoHideDuration: 3000,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    iconVariant: {
      success: /*#__PURE__*/_react.default.createElement(SnackbarIcon, {
        icon: _checkmarkCircle2Fill.default,
        color: "success",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 18
        }
      }),
      error: /*#__PURE__*/_react.default.createElement(SnackbarIcon, {
        icon: _infoFill.default,
        color: "error",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 16
        }
      }),
      warning: /*#__PURE__*/_react.default.createElement(SnackbarIcon, {
        icon: _alertTriangleFill.default,
        color: "warning",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 18
        }
      }),
      info: /*#__PURE__*/_react.default.createElement(SnackbarIcon, {
        icon: _alertCircleFill.default,
        color: "info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 15
        }
      })
    },
    classes: {
      containerRoot: classes.containerRoot,
      contentRoot: classes.contentRoot,
      message: classes.message,
      action: classes.action,
      variantInfo: classes.info,
      variantSuccess: classes.success,
      variantWarning: classes.warning,
      variantError: classes.error
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, children);
}

var _default = NotistackProvider;
exports.default = _default;