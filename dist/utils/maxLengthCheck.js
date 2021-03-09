"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// ----------------------------------------------------------------------
function maxLengthCheck(object) {
  if (object.target.value.length > object.target.maxLength) {
    return object.target.value = object.target.value.slice(0, object.target.maxLength);
  }
}

var _default = maxLengthCheck;
exports.default = _default;