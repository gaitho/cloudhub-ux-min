"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useAuth2 = _interopRequireDefault(require("../../hooks/useAuth"));

var _paths = require("../../routes/paths");

var _reactRouterDom = require("react-router-dom");

var _LoadingScreen = _interopRequireDefault(require("../../components/LoadingScreen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------------------------------------------------------
GuestProtect.propTypes = {
  children: _propTypes.default.node
};

function GuestProtect(_ref) {
  var children = _ref.children;

  var _useAuth = (0, _useAuth2.default)(),
      isLoading = _useAuth.isLoading,
      isAuthenticated = _useAuth.isAuthenticated;

  if (isLoading) {
    return /*#__PURE__*/_react.default.createElement(_LoadingScreen.default, null);
  }

  if (isAuthenticated) {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
      to: _paths.PATH_APP.root
    });
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
}

var _default = GuestProtect;
exports.default = _default;