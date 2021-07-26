"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Checkbox;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@iconify/react");

var _squareFill = _interopRequireDefault(require("@iconify-icons/eva/square-fill"));

var _minusSquareFill = _interopRequireDefault(require("@iconify-icons/eva/minus-square-fill"));

var _checkmarkSquare2Fill = _interopRequireDefault(require("@iconify-icons/eva/checkmark-square-2-fill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// ----------------------------------------------------------------------
var ICON_MEDIUM = {
  width: 24,
  height: 24
};
var ICON_SMALL = {
  width: 20,
  height: 20
};

function Checkbox(_ref) {
  var theme = _ref.theme;
  return {
    MuiCheckbox: {
      defaultProps: {
        color: 'primary',
        icon: /*#__PURE__*/_react.default.createElement(_react2.Icon, _extends({
          icon: _squareFill.default
        }, ICON_MEDIUM)),
        checkedIcon: /*#__PURE__*/_react.default.createElement(_react2.Icon, _extends({
          icon: _checkmarkSquare2Fill.default
        }, ICON_MEDIUM)),
        indeterminateIcon: /*#__PURE__*/_react.default.createElement(_react2.Icon, _extends({
          icon: _minusSquareFill.default
        }, ICON_MEDIUM))
      },
      styleOverrides: {
        root: {
          padding: 8,
          '& svg[font-size="small"]': _objectSpread({}, ICON_SMALL),
          '&.Mui-checked.Mui-disabled, &.Mui-disabled': {
            color: theme.palette.action.disabled
          }
        }
      }
    }
  };
}