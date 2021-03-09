"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axiosMockAdapter = _interopRequireDefault(require("axios-mock-adapter"));

var _axios = _interopRequireDefault(require("./axios"));

// ----------------------------------------------------------------------
var axiosMockAdapter = new _axiosMockAdapter.default(_axios.default, {
  delayResponse: 0
});
var _default = axiosMockAdapter;
exports.default = _default;