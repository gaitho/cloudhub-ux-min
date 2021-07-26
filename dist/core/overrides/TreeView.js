"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TreeView;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@iconify/react");

var _plusSquareOutline = _interopRequireDefault(require("@iconify-icons/eva/plus-square-outline"));

var _minusSquareOutline = _interopRequireDefault(require("@iconify-icons/eva/minus-square-outline"));

var _closeSquareOutline = _interopRequireDefault(require("@iconify-icons/eva/close-square-outline"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// ----------------------------------------------------------------------
var ICON_SIZE = {
  width: 20,
  height: 20
};

function TreeView(_ref) {
  var theme = _ref.theme;
  return {
    MuiTreeView: {
      defaultProps: {
        defaultCollapseIcon: /*#__PURE__*/_react.default.createElement(_react2.Icon, _extends({
          icon: _minusSquareOutline.default
        }, ICON_SIZE)),
        defaultExpandIcon: /*#__PURE__*/_react.default.createElement(_react2.Icon, _extends({
          icon: _plusSquareOutline.default
        }, ICON_SIZE)),
        defaultEndIcon: /*#__PURE__*/_react.default.createElement(_core.Box, _extends({
          component: _react2.Icon,
          icon: _closeSquareOutline.default
        }, ICON_SIZE, {
          sx: {
            color: 'text.secondary'
          }
        }))
      }
    },
    MuiTreeItem: {
      styleOverrides: {
        label: _objectSpread({}, theme.typography.body2),
        iconContainer: {
          width: 'auto'
        }
      }
    }
  };
}