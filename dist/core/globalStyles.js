"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _scrollAreaStyles = _interopRequireDefault(require("./scrollAreaStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
var containerWidth = 276;
var GlobalStyles = (0, _styles.withStyles)(function (theme) {
  return {
    '@global': _objectSpread({
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      },
      html: {
        width: '100%',
        height: '100%',
        '-ms-text-size-adjust': '100%',
        '-webkit-overflow-scrolling': 'touch',
        overflow: 'hidden',
        overflowY: 'auto'
      },
      body: {
        width: '100%',
        height: '100%',
        '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
          width: 8,
          height: 6,
          backgroundColor: theme.palette.divider
        },
        '&::-webkit-scrollbar-thumb, & ::-webkit-scrollbar-thumb': {
          border: 'none',
          borderRadius: 8,
          backgroundColor: (0, _styles.alpha)(theme.palette.grey['600'], 0.48)
        }
      },
      a: {
        color: theme.palette.primary.main,
        cursor: 'pointer',
        textDecoration: 'none'
      },
      '#root': {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      },
      input: {
        '&[type=number]': {
          MozAppearance: 'textfield',
          '&::-webkit-outer-spin-button': {
            margin: 0,
            WebkitAppearance: 'none'
          },
          '&::-webkit-inner-spin-button': {
            margin: 0,
            WebkitAppearance: 'none'
          }
        }
      },
      textarea: {
        '&::-webkit-input-placeholder': {
          color: theme.palette.text.disabled
        },
        '&::-moz-placeholder': {
          opacity: 1,
          color: theme.palette.text.disabled
        },
        '&:-ms-input-placeholder': {
          color: theme.palette.text.disabled
        },
        '&::placeholder': {
          color: theme.palette.text.disabled
        }
      },
      img: {
        display: 'block',
        maxWidth: '100%'
      },
      //icons
      'MuiTypography-root > .MuiSvgIcon-root': {
        fontSize: 'inherit'
      },
      // Lazy Load Img
      '.blur-up': {
        WebkitFilter: 'blur(5px)',
        filter: 'blur(5px)',
        transition: 'filter 400ms, -webkit-filter 400ms'
      },
      '.blur-up.lazyloaded ': {
        WebkitFilter: 'blur(0)',
        filter: 'blur(0)'
      },
      'fieldset.scheduler-border': {
        border: '1px solid #ddd !important',
        borderRadius: 5,
        padding: 5
      },
      '.size-lg': {
        maxWidth: containerWidth * 1.5
      },
      '.size-md': {
        width: containerWidth * 1.5,
        maxWidth: containerWidth * 1.5
      },
      '.size-xl': {
        width: containerWidth * 2,
        maxWidth: containerWidth * 2
      },
      '.size-xxl': {
        width: containerWidth * 3,
        maxWidth: containerWidth * 3
      }
    }, (0, _scrollAreaStyles.default)(theme))
  };
})(function () {
  return null;
});
var _default = GlobalStyles;
exports.default = _default;