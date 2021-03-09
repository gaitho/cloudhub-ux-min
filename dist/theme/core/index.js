"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray"));

var _jssRtl = _interopRequireDefault(require("jss-rtl"));

var _jss = require("jss");

var _palette = _interopRequireDefault(require("./palette"));

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

var _styles = require("@material-ui/core/styles");

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
  var children = _ref2.children;

  var _useSettings = (0, _useSettings2.default)(),
      themeMode = _useSettings.themeMode,
      themeDirection = _useSettings.themeDirection;

  var isLight = themeMode === 'light';
  var themeOptions = (0, _react2.useMemo)(function () {
    return {
      palette: _palette.default[isLight ? 'light' : 'dark'],
      shadows: _shadows.default[isLight ? 'light' : 'dark'],
      typography: _typography.default,
      shape: _borderRadius.default,
      breakpoints: _breakpoints.default,
      direction: themeDirection,
      components: (0, _overrides.default)({
        theme: {
          palette: _palette.default[isLight ? 'light' : 'dark'],
          shadows: _shadows.default[isLight ? 'light' : 'dark'],
          typography: _typography.default,
          shape: _borderRadius.default,
          direction: themeDirection
        }
      })
    };
  }, [isLight, themeDirection]);
  var theme = (0, _styles.createMuiTheme)(themeOptions);
  return /*#__PURE__*/_react2.default.createElement(_ThemeProvider.default, {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react2.default.createElement(_core.CssBaseline, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react2.default.createElement(_globalStyles.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react2.default.createElement(RTLProvider, {
    direction: themeDirection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, children));
}

var _default = ThemeConfig;
exports.default = _default;