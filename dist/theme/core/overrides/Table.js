"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Table;

// ----------------------------------------------------------------------
function Table(_ref) {
  var theme = _ref.theme;
  var isRTL = theme.direction === 'rtl';
  var thLeft = {
    paddingLeft: 24,
    borderTopLeftRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: theme.shape.borderRadius,
    boxShadow: "inset 8px 0 0 ".concat(theme.palette.background.paper)
  };
  var thRight = {
    paddingRight: 24,
    borderTopRightRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,
    boxShadow: "inset -8px 0 0 ".concat(theme.palette.background.paper)
  };
  return {
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: theme.palette.action.selected,
            '&:hover': {
              backgroundColor: theme.palette.action.hover
            }
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 'none'
        },
        head: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.background.neutral,
          '&:first-of-type': isRTL ? thRight : thLeft,
          '&:last-of-type': isRTL ? thLeft : thRight
        },
        stickyHeader: {
          backgroundColor: theme.palette.background.paper,
          backgroundImage: "linear-gradient(to bottom, ".concat(theme.palette.background.neutral, " 0%, ").concat(theme.palette.background.neutral, " 100%)")
        },
        body: {
          '&:first-of-type': {
            paddingLeft: !isRTL && 24,
            paddingRight: isRTL && 24
          },
          '&:last-of-type': {
            paddingRight: !isRTL && 24,
            paddingLeft: isRTL && 24
          }
        }
      }
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          borderTop: "solid 1px ".concat(theme.palette.divider)
        },
        toolbar: {
          height: 64
        },
        select: {
          '&:focus': {
            borderRadius: theme.shape.borderRadius
          }
        },
        selectIcon: {
          width: 20,
          height: 20,
          marginTop: 2
        }
      }
    }
  };
}