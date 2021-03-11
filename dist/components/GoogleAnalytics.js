"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GoogleAnalytics(_ref) {
  var config = _ref.config;
  return /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=".concat(config.googleAnalyticsConfig)
  }), /*#__PURE__*/_react.default.createElement("script", null, "\n          window.dataLayer = window.dataLayer || [];\n\n          function gtag() {\n            dataLayer.push(arguments);\n          }\n\n          gtag('js', new Date());\n          gtag('config', '".concat(config.googleAnalyticsConfig, "');\n        ")));
}

var _default = GoogleAnalytics;
exports.default = _default;