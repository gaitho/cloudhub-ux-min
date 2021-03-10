"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonGroup;

var _styles = require("cloudhub-components/dist/mui/styles");

// ----------------------------------------------------------------------
function ButtonGroup(_ref) {
  var theme = _ref.theme;
  var isRTL = theme.direction === 'rtl';
  return {
    MuiButtonGroup: {
      variants: [{
        props: {
          variant: 'contained',
          color: 'inherit'
        },
        style: {
          boxShadow: theme.shadows[25].z8
        }
      }, {
        props: {
          variant: 'contained',
          color: 'primary'
        },
        style: {
          boxShadow: theme.shadows[25].primary
        }
      }, {
        props: {
          disabled: true
        },
        style: {
          boxShadow: 'none !important',
          '& .MuiButtonGroup-grouped.Mui-disabled': {
            color: "".concat(theme.palette.action.disabled, " !important"),
            borderColor: "".concat(theme.palette.action.disabledBackground, " !important"),
            '&.MuiButton-contained': {
              backgroundColor: theme.palette.action.disabledBackground,
              borderRight: isRTL && 0
            }
          }
        }
      }],
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none'
          }
        },
        grouped: {
          borderColor: "".concat(theme.palette.grey[50032], " !important")
        },
        groupedContained: {
          color: theme.palette.grey[800]
        },
        groupedContainedPrimary: {
          color: theme.palette.primary.contrastText,
          borderColor: "".concat(theme.palette.primary.dark, " !important")
        },
        groupedOutlinedPrimary: {
          borderColor: "".concat((0, _styles.alpha)(theme.palette.primary.main, 0.48), " !important")
        },
        groupedTextPrimary: {
          borderColor: "".concat(theme.palette.primary.main, " !important")
        },
        groupedHorizontal: isRTL && {
          '&:not(:last-of-type)': {
            borderStyle: 'solid',
            borderLeftWidth: 1,
            borderRightWidth: 0
          },
          '&:first-of-type': {
            borderRadius: 0,
            borderTopRightRadius: theme.shape.borderRadius,
            borderBottomRightRadius: theme.shape.borderRadius,
            '&.MuiButtonGroup-groupedOutlined': {
              borderRightWidth: 1
            }
          },
          '&:last-of-type': {
            borderRadius: 0,
            borderTopLeftRadius: theme.shape.borderRadius,
            borderBottomLeftRadius: theme.shape.borderRadius
          }
        }
      }
    }
  };
}