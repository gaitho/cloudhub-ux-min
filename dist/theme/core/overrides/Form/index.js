"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Form;

var _lodash = require("lodash");

var _Input = _interopRequireDefault(require("./Input"));

var _Radio = _interopRequireDefault(require("./Radio"));

var _Switch = _interopRequireDefault(require("./Switch"));

var _Select = _interopRequireDefault(require("./Select"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _ControlLabel = _interopRequireDefault(require("./ControlLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------------------------------------------------------
function Form(_ref) {
  var theme = _ref.theme;
  return (0, _lodash.merge)((0, _Input.default)({
    theme: theme
  }), (0, _Radio.default)({
    theme: theme
  }), (0, _Switch.default)({
    theme: theme
  }), (0, _Select.default)({
    theme: theme
  }), (0, _Checkbox.default)({
    theme: theme
  }), (0, _ControlLabel.default)({
    theme: theme
  }));
}