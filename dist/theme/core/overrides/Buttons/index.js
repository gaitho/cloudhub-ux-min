"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Buttons;

var _lodash = require("lodash");

var _Fab = _interopRequireDefault(require("./Fab"));

var _Button = _interopRequireDefault(require("./Button"));

var _IconButton = _interopRequireDefault(require("./IconButton"));

var _ButtonGroup = _interopRequireDefault(require("./ButtonGroup"));

var _ToggleButton = _interopRequireDefault(require("./ToggleButton"));

var _LoadingButton = _interopRequireDefault(require("./LoadingButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------------------------------------------------------
function Buttons(_ref) {
  var theme = _ref.theme;
  return (0, _lodash.merge)((0, _Fab.default)({
    theme: theme
  }), (0, _Button.default)({
    theme: theme
  }), (0, _IconButton.default)({
    theme: theme
  }), (0, _ButtonGroup.default)({
    theme: theme
  }), (0, _ToggleButton.default)({
    theme: theme
  }), (0, _LoadingButton.default)({
    theme: theme
  }));
}