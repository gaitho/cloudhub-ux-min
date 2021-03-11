"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clsx2 = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      borderRadius: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      '&:before, &:after': {
        content: "''",
        borderRadius: 1,
        backgroundColor: theme.palette.common.white
      }
    },
    small: {
      height: theme.spacing(1),
      width: theme.spacing(1)
    },
    medium: {
      width: theme.spacing(1.25),
      height: theme.spacing(1.25)
    },
    offline: {
      backgroundColor: 'transparent'
    },
    away: {
      backgroundColor: theme.palette.warning.main,
      '&:before': {
        width: 2,
        height: 4,
        transform: 'translateX(1px) translateY(-1px)'
      },
      '&:after': {
        width: 2,
        height: 4,
        transform: 'translateY(1px) rotate(125deg)'
      }
    },
    busy: {
      backgroundColor: theme.palette.error.main,
      '&:before': {
        width: 6,
        height: 2
      }
    },
    online: {
      backgroundColor: theme.palette.success.main
    },
    invisible: {
      backgroundColor: theme.palette.text.disabled,
      '&:before': {
        width: 6,
        height: 6,
        borderRadius: '50%'
      }
    },
    unread: {
      backgroundColor: theme.palette.info.main
    }
  };
}); // ----------------------------------------------------------------------

BadgeStatus.propTypes = {
  size: _propTypes.default.oneOf(['small', 'medium']),
  status: _propTypes.default.oneOf(['away', 'busy', 'unread', 'online', 'offline', 'invisible']),
  className: _propTypes.default.string
};

function BadgeStatus(_ref) {
  var _clsx;

  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? 'offline' : _ref$status,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, ["size", "status", "className"]);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Box, _extends({
    component: "span",
    className: (0, _clsx2.default)(classes.root, (_clsx = {}, _defineProperty(_clsx, classes[size], size), _defineProperty(_clsx, classes[status], status), _clsx), className)
  }, other));
}

var _default = BadgeStatus;
exports.default = _default;