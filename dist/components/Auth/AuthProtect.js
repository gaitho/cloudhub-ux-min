"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useAuth2 = _interopRequireDefault(require("src/hooks/useAuth"));

var _reactRouterDom = require("react-router-dom");

var _paths = require("src/routes/paths");

var _LoadingScreen = _interopRequireDefault(require("src/components/LoadingScreen"));

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Auth/AuthProtect.js";
// ----------------------------------------------------------------------
AuthProtect.propTypes = {
  children: _propTypes.default.node
};

function AuthProtect(_ref) {
  var children = _ref.children;

  var _useAuth = (0, _useAuth2.default)(),
      isLoading = _useAuth.isLoading,
      isAuthenticated = _useAuth.isAuthenticated;

  if (isLoading) {
    return /*#__PURE__*/_react.default.createElement(_LoadingScreen.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 12
      }
    });
  }

  if (!isAuthenticated) {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
      to: _paths.PATH_PAGE.auth.login,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 12
      }
    });
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
}

var _default = AuthProtect;
exports.default = _default;