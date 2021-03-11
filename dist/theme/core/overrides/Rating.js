"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Rating;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@iconify/react");

var _starFill = _interopRequireDefault(require("@iconify-icons/eva/star-fill"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
var ICON_SMALL = {
  width: 20,
  height: 20
};
var ICON_LARGE = {
  width: 28,
  height: 28
};

var ICON = /*#__PURE__*/_react.default.createElement(_core.SvgIcon, null, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
  icon: _starFill.default
}));

function Rating(_ref) {
  var theme = _ref.theme;
  return {
    MuiRating: {
      defaultProps: {
        emptyIcon: ICON,
        icon: ICON
      },
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            opacity: 0.48
          }
        },
        iconEmpty: {
          color: theme.palette.grey['500_48']
        },
        sizeSmall: {
          '& svg': _objectSpread({}, ICON_SMALL)
        },
        sizeLarge: {
          '& svg': _objectSpread({}, ICON_LARGE)
        }
      }
    }
  };
}