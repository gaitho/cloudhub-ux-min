"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useAuth2 = _interopRequireDefault(require("src/hooks/useAuth"));

var _theme = require("src/theme");

var _createAvatar = _interopRequireDefault(require("src/utils/createAvatar"));

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/MyAvatar.js";
// ----------------------------------------------------------------------
MyAvatar.propTypes = {
  className: _propTypes.default.string
};

function MyAvatar(_ref) {
  var className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["className"]);

  var _useAuth = (0, _useAuth2.default)(),
      user = _useAuth.user;

  return /*#__PURE__*/_react.default.createElement(_theme.MAvatar, (0, _extends2.default)({
    src: user.photoURL,
    alt: user.displayName,
    color: user.photoURL ? 'default' : (0, _createAvatar.default)(user.displayName).color,
    className: className
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), (0, _createAvatar.default)(user.displayName).name);
}

var _default = MyAvatar;
exports.default = _default;