"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jss = require("jss");

var _palette = require("./palette");

var _shadows = _interopRequireDefault(require("./shadows"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = _interopRequireDefault(require("./typography"));

var _breakpoints = _interopRequireDefault(require("./breakpoints"));

var _cache = _interopRequireDefault(require("@emotion/cache"));

var _globalStyles = _interopRequireDefault(require("./globalStyles"));

var _borderRadius = _interopRequireDefault(require("./borderRadius"));

var _overrides = _interopRequireDefault(require("./overrides"));

var _react = require("@emotion/react");

var _useSettings2 = _interopRequireDefault(require("../hooks/useSettings"));

var _react2 = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// ----------------------------------------------------------------------
RTLProvider.propTypes = {
  direction: _propTypes.default.oneOf(['ltr', 'rtl']),
  children: _propTypes.default.node
};

function RTLProvider(_ref) {
  var direction = _ref.direction,
      children = _ref.children;
  // const isRTL = direction === 'rtl';
  // const jss = create({
  //   plugins: [...jssPreset().plugins, rtl()]
  // });
  // const cache = createCache({
  //   key: isRTL ? 'rtl' : 'css',
  //   prepend: true,
  //   stylisPlugins: isRTL ? [rtlPlugin] : []
  // });
  // cache.compat = true;
  // useEffect(() => {
  //   document.dir = direction;
  // }, [direction]);
  var cache = (0, _cache.default)({
    key: 'css',
    prepend: true
  }); // cache.compat = true;

  var jss = (0, _jss.create)({
    plugins: _toConsumableArray((0, _styles.jssPreset)().plugins)
  });
  return /*#__PURE__*/_react2.default.createElement(_react.CacheProvider, {
    value: cache
  }, /*#__PURE__*/_react2.default.createElement(_styles.StylesProvider, {
    jss: jss
  }, children));
}

ThemeConfig.propTypes = {
  children: _propTypes.default.node
};

function ThemeConfig(_ref2) {
  var children = _ref2.children,
      fonts = _ref2.fonts,
      sizes = _ref2.sizes,
      colors = _ref2.colors;

  var _useSettings = (0, _useSettings2.default)(),
      themeMode = _useSettings.themeMode,
      themeDirection = _useSettings.themeDirection;

  var isLight = themeMode === 'light';
  var themeOptions = (0, _react2.useMemo)(function () {
    return {
      palette: isLight ? (0, _palette.getLightColors)(colors) : (0, _palette.getDarkColors)(colors),
      shadows: _shadows.default[isLight ? 'light' : 'dark'],
      typography: (0, _typography.default)(fonts),
      shape: _borderRadius.default,
      breakpoints: _breakpoints.default,
      direction: themeDirection,
      components: (0, _overrides.default)({
        theme: {
          palette: isLight ? (0, _palette.getLightColors)(colors) : (0, _palette.getDarkColors)(colors),
          shadows: _shadows.default[isLight ? 'light' : 'dark'],
          typography: (0, _typography.default)(fonts),
          shape: _borderRadius.default,
          direction: themeDirection,
          colors: _objectSpread({}, colors),
          sizes: _objectSpread({}, sizes),
          fonts: _objectSpread({}, fonts)
        }
      }),
      colors: _objectSpread({}, colors),
      sizes: _objectSpread({}, sizes),
      fonts: _objectSpread({}, fonts)
    };
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [isLight, themeDirection]);
  var theme = (0, _styles.createMuiTheme)(themeOptions);
  return /*#__PURE__*/_react2.default.createElement(_styles.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/_react2.default.createElement(_globalStyles.default, null), /*#__PURE__*/_react2.default.createElement(_core.CssBaseline, null), /*#__PURE__*/_react2.default.createElement(RTLProvider, {
    direction: themeDirection
  }, children));
}

var _default = ThemeConfig;
exports.default = _default;