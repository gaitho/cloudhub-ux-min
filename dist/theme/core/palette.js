"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _styles = require("@material-ui/core/styles");

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
  5008: (0, _styles.alpha)('#919EAB', 0.08),
  50012: (0, _styles.alpha)('#919EAB', 0.12),
  50016: (0, _styles.alpha)('#919EAB', 0.16),
  50024: (0, _styles.alpha)('#919EAB', 0.24),
  50032: (0, _styles.alpha)('#919EAB', 0.32),
  50048: (0, _styles.alpha)('#919EAB', 0.48),
  50056: (0, _styles.alpha)('#919EAB', 0.56),
  50080: (0, _styles.alpha)('#919EAB', 0.8)
};
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
  primary: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, PRIMARY), {}, {
    contrastText: '#fff'
  }),
  secondary: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, SECONDARY), {}, {
    contrastText: '#fff'
  }),
  info: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, INFO), {}, {
    contrastText: '#fff'
  }),
  success: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, SUCCESS), {}, {
    contrastText: GREY[800]
  }),
  warning: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, WARNING), {}, {
    contrastText: GREY[800]
  }),
  error: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, ERROR), {}, {
    contrastText: '#fff'
  }),
  grey: GREY,
  gradients: GRADIENTS,
  divider: GREY[50024],
  action: {
    hover: GREY[5008],
    selected: GREY[50016],
    disabled: GREY[50080],
    disabledBackground: GREY[50024],
    focus: GREY[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
};
var palette = {
  // LIGHT MODE
  light: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, COMMON), {}, {
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
    action: (0, _objectSpread2.default)({
      active: GREY[600]
    }, COMMON.action)
  }),
  // DARK MODE
  dark: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, COMMON), {}, {
    mode: 'dark',
    text: {
      primary: '#fff',
      secondary: GREY[500],
      disabled: GREY[600]
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: GREY[50016]
    },
    action: (0, _objectSpread2.default)({
      active: GREY[500]
    }, COMMON.action)
  })
};
var _default = palette;
exports.default = _default;