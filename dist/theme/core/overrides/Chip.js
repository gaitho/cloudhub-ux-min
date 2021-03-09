"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Chip;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@iconify/react");

var _closeCircleFill = _interopRequireDefault(require("@iconify-icons/eva/close-circle-fill"));

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/theme/core/overrides/Chip.js";

// ----------------------------------------------------------------------
function Chip(_ref) {
  var theme = _ref.theme;
  var isRTL = theme.direction === 'rtl';
  return {
    MuiChip: {
      defaultProps: {
        deleteIcon: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          icon: _closeCircleFill.default,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 21
          }
        })
      },
      styleOverrides: {
        label: {
          marginTop: -4
        },
        colorDefault: {
          '& .MuiChip-avatarMedium, .MuiChip-avatarSmall': {
            color: theme.palette.text.secondary
          }
        },
        outlined: {
          borderColor: theme.palette.grey[50032],
          '&.MuiChip-colorPrimary': {
            borderColor: theme.palette.primary.main
          }
        },
        sizeMedium: isRTL && {
          '& .MuiChip-avatarMedium, .MuiChip-iconMedium': {
            marginLeft: -6,
            marginRight: 4
          },
          '& .MuiChip-deleteIconMedium': {
            marginLeft: 5,
            marginRight: -6
          }
        },
        sizeSmall: isRTL && {
          '& .MuiChip-avatarSmall, .MuiChip-iconSmall': {
            marginLeft: -4,
            marginRight: 4
          },
          '& .MuiChip-deleteIconSmall': {
            marginLeft: 4,
            marginRight: -4
          }
        }
      }
    }
  };
}