"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _materialExtend = require("../@material-extend");

var _createAvatar = _interopRequireDefault(require("../utils/createAvatar"));

var _excluded = ["className", "user"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
MyAvatar.propTypes = {
  className: _propTypes.default.string
};

function MyAvatar(_ref) {
  var className = _ref.className,
      user = _ref.user,
      other = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_materialExtend.MAvatar, _extends({
    src: user.photoURL,
    alt: user.displayName,
    color: user.photoURL ? 'default' : (0, _createAvatar.default)(user.displayName).color,
    className: className
  }, other), (0, _createAvatar.default)(user.displayName).name);
}

var _default = MyAvatar;
exports.default = _default;