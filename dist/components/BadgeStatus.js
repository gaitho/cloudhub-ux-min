"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _defineProperty2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/BadgeStatus.js";
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
      other = (0, _objectWithoutProperties2.default)(_ref, ["size", "status", "className"]);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    component: "span",
    className: (0, _clsx2.default)(classes.root, (_clsx = {}, (0, _defineProperty2.default)(_clsx, classes[size], size), (0, _defineProperty2.default)(_clsx, classes[status], status), _clsx), className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }));
}

var _default = BadgeStatus;
exports.default = _default;