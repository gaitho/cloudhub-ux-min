"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _i18nextXhrBackend = _interopRequireDefault(require("i18next-xhr-backend"));

var _reactI18next = require("react-i18next");

var _i18nextBrowserLanguagedetector = _interopRequireDefault(require("i18next-browser-languagedetector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------------------------------------------------------
var options = {
  loadPath: '/locales/{{lng}}/{{ns}}.json'
};

_i18next.default.use(_i18nextXhrBackend.default).use(_i18nextBrowserLanguagedetector.default).use(_reactI18next.initReactI18next).init({
  lng: localStorage.getItem('i18nextLng') || 'en',
  fallbackLng: 'en',
  debug: false,
  cleanCode: true,
  backend: options,
  react: {
    useSuspense: false
  }
});

var _default = _i18next.default;
exports.default = _default;