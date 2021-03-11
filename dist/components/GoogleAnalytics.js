"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------------------------------------------------------
var GA_MEASUREMENT_ID = _config.googleAnalyticsConfig;

function GoogleAnalytics() {
  return /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=".concat(GA_MEASUREMENT_ID)
  }), /*#__PURE__*/_react.default.createElement("script", null, "\n          window.dataLayer = window.dataLayer || [];\n\n          function gtag() {\n            dataLayer.push(arguments);\n          }\n\n          gtag('js', new Date());\n          gtag('config', '".concat(GA_MEASUREMENT_ID, "');\n        ")));
}

var _default = GoogleAnalytics;
exports.default = _default;