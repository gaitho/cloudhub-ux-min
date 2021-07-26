"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _revised = _interopRequireDefault(require("@react-loadable/revised"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _core = _interopRequireDefault(require("./core"));

var _ThemeContext = _interopRequireDefault(require("cloudhub-components/dist/theme/ThemeContext"));

var _cloudhubComponents = require("cloudhub-components");

var _Sizes = _interopRequireDefault(require("cloudhub-components/dist/theme/Sizes"));

var _Colors = _interopRequireDefault(require("cloudhub-components/dist/theme/Colors"));

var _Fonts = _interopRequireDefault(require("cloudhub-components/dist/theme/Fonts"));

var _toastr = require("cloudhub-components/dist/toastr");

var _excluded = ["children", "fonts", "colors", "sizes", "theme", "addBaseWeb"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BaseTheme = (0, _revised.default)({
  loader: function loader() {
    return import(
    /* webpackChunkName: "BaseTheme" */
    'cloudhub-components/dist/baseweb/theme/BaseTheme');
  },
  loading: function loading() {
    return /*#__PURE__*/_react.default.createElement(_Box.default, {
      justifyContent: "center",
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_cloudhubComponents.Loading, null));
  }
});

var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
      _ref$fonts = _ref.fonts,
      fonts = _ref$fonts === void 0 ? {} : _ref$fonts,
      _ref$colors = _ref.colors,
      colors = _ref$colors === void 0 ? {} : _ref$colors,
      _ref$sizes = _ref.sizes,
      sizes = _ref$sizes === void 0 ? {} : _ref$sizes,
      theme = _ref.theme,
      _ref$addBaseWeb = _ref.addBaseWeb,
      addBaseWeb = _ref$addBaseWeb === void 0 ? true : _ref$addBaseWeb,
      props = _objectWithoutProperties(_ref, _excluded);

  var newfonts = _objectSpread(_objectSpread({}, _Fonts.default), fonts);

  var newcolors = _objectSpread(_objectSpread({}, _Colors.default), colors);

  var newsizes = _objectSpread(_objectSpread({}, _Sizes.default), sizes);

  return (
    /*#__PURE__*/
    // Apply theme for designs (Premium themes)
    _react.default.createElement(_core.default, {
      fonts: newfonts,
      colors: newcolors,
      sizes: newsizes
    }, addBaseWeb ? /*#__PURE__*/_react.default.createElement(BaseTheme, {
      fonts: newfonts,
      colors: newcolors,
      sizes: newsizes
    }, /*#__PURE__*/_react.default.createElement(_ThemeContext.default.Provider, {
      value: _objectSpread({
        fonts: newfonts,
        colors: newcolors,
        sizes: newsizes,
        CONFIG: props.CONFIG || {}
      }, props)
    }, children, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        flex: 0,
        zIndex: 9999
      }
    }, /*#__PURE__*/_react.default.createElement(_toastr.ToastContainer, null)))) : /*#__PURE__*/_react.default.createElement(_ThemeContext.default.Provider, {
      value: _objectSpread({
        fonts: newfonts,
        colors: newcolors,
        sizes: newsizes,
        CONFIG: props.CONFIG || {}
      }, props)
    }, children, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        flex: 0,
        zIndex: 9999
      }
    }, /*#__PURE__*/_react.default.createElement(_toastr.ToastContainer, null))))
  );
};

var _default = ThemeProvider;
exports.default = _default;