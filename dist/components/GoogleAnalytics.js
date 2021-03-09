"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

var _config = require("src/config");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/GoogleAnalytics.js";
// ----------------------------------------------------------------------
var GA_MEASUREMENT_ID = _config.googleAnalyticsConfig;

function GoogleAnalytics() {
  return /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react.default.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=".concat(GA_MEASUREMENT_ID),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react.default.createElement("script", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "\n          window.dataLayer = window.dataLayer || [];\n\n          function gtag() {\n            dataLayer.push(arguments);\n          }\n\n          gtag('js', new Date());\n          gtag('config', '".concat(GA_MEASUREMENT_ID, "');\n        ")));
}

var _default = GoogleAnalytics;
exports.default = _default;