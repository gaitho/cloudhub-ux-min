"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Rating;

var _objectSpread2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@iconify/react");

var _starFill = _interopRequireDefault(require("@iconify-icons/eva/star-fill"));

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/theme/core/overrides/Rating.js";
// ----------------------------------------------------------------------
var ICON_SMALL = {
  width: 20,
  height: 20
};
var ICON_LARGE = {
  width: 28,
  height: 28
};

var ICON = /*#__PURE__*/_react.default.createElement(_core.SvgIcon, {
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }
}, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
  icon: _starFill.default,
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}));

function Rating(_ref) {
  var theme = _ref.theme;
  return {
    MuiRating: {
      defaultProps: {
        emptyIcon: ICON,
        icon: ICON
      },
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            opacity: 0.48
          }
        },
        iconEmpty: {
          color: theme.palette.grey[50048]
        },
        sizeSmall: {
          '& svg': (0, _objectSpread2.default)({}, ICON_SMALL)
        },
        sizeLarge: {
          '& svg': (0, _objectSpread2.default)({}, ICON_LARGE)
        }
      }
    }
  };
}