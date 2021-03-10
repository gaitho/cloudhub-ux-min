"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _toConsumableArray2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray"));

var _jssRtl = _interopRequireDefault(require("jss-rtl"));

var _jss = require("jss");

var _palette = require("./palette");

var _shadows = _interopRequireDefault(require("./shadows"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = _interopRequireDefault(require("./typography"));

var _breakpoints = _interopRequireDefault(require("./breakpoints"));

var _cache = _interopRequireDefault(require("@emotion/cache"));

var _stylisPluginRtl = _interopRequireDefault(require("stylis-plugin-rtl"));

var _globalStyles = _interopRequireDefault(require("./globalStyles"));

var _borderRadius = _interopRequireDefault(require("./borderRadius"));

var _overrides = _interopRequireDefault(require("./overrides"));

var _react = require("@emotion/react");

var _useSettings2 = _interopRequireDefault(require("../../hooks/useSettings"));

var _react2 = _interopRequireWildcard(require("react"));

var _styles = require("cloudhub-components/dist/mui/styles");

var _ThemeProvider = _interopRequireDefault(require("cloudhub-components/dist/theme/ThemeProvider"));

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/theme/core/index.js";
// ----------------------------------------------------------------------
RTLProvider.propTypes = {
  direction: _propTypes.default.oneOf(['ltr', 'rtl']),
  children: _propTypes.default.node
};

function RTLProvider(_ref) {
  var direction = _ref.direction,
      children = _ref.children;
  var isRTL = direction === 'rtl';
  var jss = (0, _jss.create)({
    plugins: [].concat((0, _toConsumableArray2.default)((0, _styles.jssPreset)().plugins), [(0, _jssRtl.default)()])
  });
  var cache = (0, _cache.default)({
    key: isRTL ? 'rtl' : 'css',
    prepend: true,
    stylisPlugins: isRTL ? [_stylisPluginRtl.default] : []
  });
  cache.compat = true;
  (0, _react2.useEffect)(function () {
    document.dir = direction;
  }, [direction]);
  return /*#__PURE__*/_react2.default.createElement(_react.CacheProvider, {
    value: cache,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react2.default.createElement(_styles.StylesProvider, {
    jss: jss,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
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
      palette: isLight ? (0, _palette.getLightColors)() : (0, _palette.getDarkColors)(),
      shadows: _shadows.default[isLight ? 'light' : 'dark'],
      typography: (0, _typography.default)(fonts),
      shape: _borderRadius.default,
      breakpoints: _breakpoints.default,
      direction: themeDirection,
      components: (0, _overrides.default)({
        theme: {
          palette: isLight ? (0, _palette.getLightColors)() : (0, _palette.getDarkColors)(),
          shadows: _shadows.default[isLight ? 'light' : 'dark'],
          typography: (0, _typography.default)(fonts),
          shape: _borderRadius.default,
          direction: themeDirection,
          colors: (0, _objectSpread2.default)({}, colors),
          sizes: (0, _objectSpread2.default)({}, sizes),
          fonts: (0, _objectSpread2.default)({}, fonts)
        }
      }),
      colors: (0, _objectSpread2.default)({}, colors),
      sizes: (0, _objectSpread2.default)({}, sizes),
      fonts: (0, _objectSpread2.default)({}, fonts)
    };
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [isLight, themeDirection]);
  var theme = (0, _styles.createMuiTheme)(themeOptions);
  return /*#__PURE__*/_react2.default.createElement(_ThemeProvider.default, {
    theme: theme,
    colors: colors,
    fonts: fonts,
    sizes: sizes,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react2.default.createElement(_core.CssBaseline, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react2.default.createElement(_globalStyles.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react2.default.createElement(RTLProvider, {
    direction: themeDirection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, children));
}

var _default = ThemeConfig;
exports.default = _default;