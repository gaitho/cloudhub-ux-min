"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formatFontSize = require("../../utils/formatFontSize");

var _createBreakpoints = _interopRequireDefault(require("@material-ui/core/styles/createBreakpoints"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
function responsiveFontSizes(_ref) {
  var _ref2;

  var sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg;
  var breakpoints = (0, _createBreakpoints.default)({});
  return _ref2 = {}, _defineProperty(_ref2, breakpoints.up('sm'), {
    fontSize: (0, _formatFontSize.pxToRem)(sm)
  }), _defineProperty(_ref2, breakpoints.up('md'), {
    fontSize: (0, _formatFontSize.pxToRem)(md)
  }), _defineProperty(_ref2, breakpoints.up('lg'), {
    fontSize: (0, _formatFontSize.pxToRem)(lg)
  }), _ref2;
}

var FONT_PRIMARY = 'Be Vietnam, sans-serif'; // Google Font
// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font

var typography = function typography(fonts) {
  var _ref3 = fonts || {},
      body = _ref3.body;

  return {
    fontFamily: body ? body.fontFamily || FONT_PRIMARY : FONT_PRIMARY,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: _objectSpread({
      fontWeight: 600,
      lineHeight: 80 / 64,
      fontSize: (0, _formatFontSize.pxToRem)(40)
    }, responsiveFontSizes({
      sm: 52,
      md: 58,
      lg: 64
    })),
    h2: _objectSpread({
      fontWeight: 600,
      lineHeight: 64 / 48,
      fontSize: (0, _formatFontSize.pxToRem)(32)
    }, responsiveFontSizes({
      sm: 40,
      md: 44,
      lg: 48
    })),
    h3: _objectSpread({
      lineHeight: 1.5,
      fontWeight: 600,
      fontSize: (0, _formatFontSize.pxToRem)(24)
    }, responsiveFontSizes({
      sm: 26,
      md: 30,
      lg: 32
    })),
    h4: _objectSpread({
      lineHeight: 1.5,
      fontWeight: 600,
      fontSize: (0, _formatFontSize.pxToRem)(20)
    }, responsiveFontSizes({
      sm: 20,
      md: 24,
      lg: 24
    })),
    h5: _objectSpread({
      lineHeight: 1.5,
      fontWeight: 600,
      fontSize: (0, _formatFontSize.pxToRem)(18)
    }, responsiveFontSizes({
      sm: 19,
      md: 20,
      lg: 20
    })),
    h6: _objectSpread({
      fontWeight: 600,
      lineHeight: 28 / 18,
      fontSize: (0, _formatFontSize.pxToRem)(17)
    }, responsiveFontSizes({
      sm: 18,
      md: 18,
      lg: 18
    })),
    subtitle1: {
      fontSize: (0, _formatFontSize.pxToRem)(16),
      lineHeight: 1.5,
      fontWeight: 600
    },
    subtitle2: {
      fontSize: (0, _formatFontSize.pxToRem)(14),
      lineHeight: 22 / 14,
      fontWeight: 600
    },
    body1: {
      fontSize: (0, _formatFontSize.pxToRem)(16),
      lineHeight: 1.5
    },
    body2: {
      fontSize: (0, _formatFontSize.pxToRem)(14),
      lineHeight: 22 / 14
    },
    caption: {
      fontSize: (0, _formatFontSize.pxToRem)(12),
      lineHeight: 1.5
    },
    overline: {
      fontSize: (0, _formatFontSize.pxToRem)(12),
      lineHeight: 1.5,
      fontWeight: 700,
      letterSpacing: 1.2,
      textTransform: 'uppercase'
    },
    button: {
      fontWeight: 700,
      lineHeight: 24 / 14,
      fontSize: (0, _formatFontSize.pxToRem)(14),
      textTransform: 'capitalize'
    }
  };
};

var _default = typography;
exports.default = _default;