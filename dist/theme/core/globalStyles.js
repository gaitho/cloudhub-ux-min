"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("cloudhub-components/dist/mui/styles");

// ----------------------------------------------------------------------
var GlobalStyles = (0, _styles.withStyles)(function (theme) {
  return {
    '@global': {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      },
      html: {
        width: '100%',
        height: '100%',
        '-ms-text-size-adjust': '100%',
        '-webkit-overflow-scrolling': 'touch'
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
          backgroundColor: (0, _styles.alpha)(theme.palette.grey[600], 0.48)
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
      }
    }
  };
})(function () {
  return null;
});
var _default = GlobalStyles;
exports.default = _default;