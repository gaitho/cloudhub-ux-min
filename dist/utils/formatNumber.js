"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fCurrency = fCurrency;
exports.fPercent = fPercent;
exports.fNumber = fNumber;
exports.fShortenNumber = fShortenNumber;
exports.fData = fData;

var _lodash = require("lodash");

var _numeral = _interopRequireDefault(require("numeral"));

// ----------------------------------------------------------------------
function fCurrency(number) {
  return (0, _numeral.default)(number).format(Number.isInteger(number) ? '$0,0' : '$0,0.00');
}

function fPercent(number) {
  return (0, _numeral.default)(number / 100).format('0.0%');
}

function fNumber(number) {
  return (0, _numeral.default)(number).format();
}

function fShortenNumber(number) {
  return (0, _lodash.replace)((0, _numeral.default)(number).format('0.00a'), '.00', '');
}

function fData(number) {
  return (0, _numeral.default)(number).format('0.0 b');
}