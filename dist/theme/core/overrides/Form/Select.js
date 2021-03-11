"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Select;

var _ExpandMoreRounded = _interopRequireDefault(require("@material-ui/icons/ExpandMoreRounded"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------------------------------------------------------
function Select(_ref) {
  var theme = _ref.theme;
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: _ExpandMoreRounded.default
      },
      styleOverrides: {
        root: {}
      }
    }
  };
}