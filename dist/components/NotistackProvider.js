"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    info: _objectSpread({}, createStyle),
    success: _objectSpread({}, createStyle),
    warning: _objectSpread({}, createStyle),
    error: _objectSpread({}, createStyle)
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
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    icon: icon,
    width: 24,
    height: 24
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
        color: "success"
      }),
      error: /*#__PURE__*/_react.default.createElement(SnackbarIcon, {
        icon: _infoFill.default,
        color: "error"
      }),
      warning: /*#__PURE__*/_react.default.createElement(SnackbarIcon, {
        icon: _alertTriangleFill.default,
        color: "warning"
      }),
      info: /*#__PURE__*/_react.default.createElement(SnackbarIcon, {
        icon: _alertCircleFill.default,
        color: "info"
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
    }
  }, children);
}

var _default = NotistackProvider;
exports.default = _default;