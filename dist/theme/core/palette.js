"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDarkColors = exports.getLightColors = void 0;

var _styles = require("@material-ui/core/styles");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
function createGradient(color1, color2) {
  return "linear-gradient(to bottom, ".concat(color1, ", ").concat(color2, ")");
} // SETUP COLORS


var PRIMARY = {
  lighter: '#C8FACD',
  light: '#5BE584',
  main: '#00AB55',
  dark: '#007B55',
  darker: '#005249'
};
var SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A'
};
var INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A'
};
var SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D'
};
var WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01'
};
var ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E'
};
var GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: (0, _styles.alpha)('#919EAB', 0.08),
  500_12: (0, _styles.alpha)('#919EAB', 0.12),
  500_16: (0, _styles.alpha)('#919EAB', 0.16),
  500_24: (0, _styles.alpha)('#919EAB', 0.24),
  500_32: (0, _styles.alpha)('#919EAB', 0.32),
  500_48: (0, _styles.alpha)('#919EAB', 0.48),
  500_56: (0, _styles.alpha)('#919EAB', 0.56),
  500_80: (0, _styles.alpha)('#919EAB', 0.8)
};

var getColors = function getColors(colors) {
  var _ref = colors || {},
      primaryColors = _ref.primaryColors,
      secondaryColors = _ref.secondaryColors,
      tertiaryColors = _ref.tertiaryColors,
      textColors = _ref.textColors,
      backgroundColors = _ref.backgroundColors;

  var GRADIENTS = {
    primary: createGradient(PRIMARY.light, PRIMARY.main),
    info: createGradient(INFO.light, INFO.main),
    success: createGradient(SUCCESS.light, SUCCESS.main),
    warning: createGradient(WARNING.light, WARNING.main),
    error: createGradient(ERROR.light, ERROR.main)
  };
  var COMMON = {
    common: {
      black: '#000',
      white: '#fff'
    },
    primary: _objectSpread(_objectSpread({}, PRIMARY), {}, {
      contrastText: '#fff'
    }, primaryColors),
    secondary: _objectSpread(_objectSpread({}, SECONDARY), {}, {
      contrastText: '#fff'
    }, secondaryColors),
    tertiary: _objectSpread({}, tertiaryColors),
    background: _objectSpread({}, backgroundColors),
    text: _objectSpread({}, textColors),
    info: _objectSpread(_objectSpread({}, INFO), {}, {
      contrastText: '#fff'
    }),
    success: _objectSpread(_objectSpread({}, SUCCESS), {}, {
      contrastText: GREY[800]
    }),
    warning: _objectSpread(_objectSpread({}, WARNING), {}, {
      contrastText: GREY[800]
    }),
    error: _objectSpread(_objectSpread({}, ERROR), {}, {
      contrastText: '#fff'
    }),
    grey: GREY,
    gradients: GRADIENTS,
    divider: GREY[500_24],
    action: {
      hover: GREY[500_8],
      selected: GREY[500_16],
      disabled: GREY[500_80],
      disabledBackground: GREY[500_24],
      focus: GREY[500_24],
      hoverOpacity: 0.08,
      disabledOpacity: 0.48
    }
  };
  return COMMON;
};

var getLightColors = function getLightColors(colors) {
  return _objectSpread(_objectSpread({}, getColors(colors)), {}, {
    mode: 'light',
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500]
    },
    background: {
      paper: '#fff',
      default: '#fff',
      neutral: GREY[200]
    },
    action: _objectSpread({
      active: GREY[600]
    }, getColors(colors).action)
  });
}; // DARK MODE


exports.getLightColors = getLightColors;

var getDarkColors = function getDarkColors(colors) {
  return _objectSpread(_objectSpread({}, getColors(colors)), {}, {
    mode: 'dark',
    text: {
      primary: '#fff',
      secondary: GREY[500],
      disabled: GREY[600]
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: GREY[500_16]
    },
    action: _objectSpread({
      active: GREY[500]
    }, getColors(colors).action)
  });
};

exports.getDarkColors = getDarkColors;