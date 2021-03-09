"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = objFromArray;

// ----------------------------------------------------------------------
function objFromArray(array) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
  return array.reduce(function (accumulator, current) {
    accumulator[current[key]] = current;
    return accumulator;
  }, {});
}