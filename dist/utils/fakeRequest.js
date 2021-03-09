"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fakeRequest;

// ----------------------------------------------------------------------
function fakeRequest(time) {
  return new Promise(function (res) {
    return setTimeout(res, time);
  });
}