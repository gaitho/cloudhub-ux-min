"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _formatFontSize = require("src/utils/formatFontSize");

var _createBreakpoints = _interopRequireDefault(require("@material-ui/core/styles/createBreakpoints"));

// ----------------------------------------------------------------------
function responsiveFontSizes(_ref) {
  var _ref2;

  var sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg;
  var breakpoints = (0, _createBreakpoints.default)({});
  return _ref2 = {}, (0, _defineProperty2.default)(_ref2, breakpoints.up('sm'), {
    fontSize: (0, _formatFontSize.pxToRem)(sm)
  }), (0, _defineProperty2.default)(_ref2, breakpoints.up('md'), {
    fontSize: (0, _formatFontSize.pxToRem)(md)
  }), (0, _defineProperty2.default)(_ref2, breakpoints.up('lg'), {
    fontSize: (0, _formatFontSize.pxToRem)(lg)
  }), _ref2;
}

var FONT_PRIMARY = 'Be Vietnam, sans-serif'; // Google Font
// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font

var typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: (0, _objectSpread2.default)({
    fontWeight: 600,
    lineHeight: 80 / 64,
    fontSize: (0, _formatFontSize.pxToRem)(40)
  }, responsiveFontSizes({
    sm: 52,
    md: 58,
    lg: 64
  })),
  h2: (0, _objectSpread2.default)({
    fontWeight: 600,
    lineHeight: 64 / 48,
    fontSize: (0, _formatFontSize.pxToRem)(32)
  }, responsiveFontSizes({
    sm: 40,
    md: 44,
    lg: 48
  })),
  h3: (0, _objectSpread2.default)({
    lineHeight: 1.5,
    fontWeight: 600,
    fontSize: (0, _formatFontSize.pxToRem)(24)
  }, responsiveFontSizes({
    sm: 26,
    md: 30,
    lg: 32
  })),
  h4: (0, _objectSpread2.default)({
    lineHeight: 1.5,
    fontWeight: 600,
    fontSize: (0, _formatFontSize.pxToRem)(20)
  }, responsiveFontSizes({
    sm: 20,
    md: 24,
    lg: 24
  })),
  h5: (0, _objectSpread2.default)({
    lineHeight: 1.5,
    fontWeight: 600,
    fontSize: (0, _formatFontSize.pxToRem)(18)
  }, responsiveFontSizes({
    sm: 19,
    md: 20,
    lg: 20
  })),
  h6: (0, _objectSpread2.default)({
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
var _default = typography;
exports.default = _default;