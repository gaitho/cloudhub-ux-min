"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remToPx = remToPx;
exports.pxToRem = pxToRem;

// ----------------------------------------------------------------------
function remToPx(value) {
  return Math.round(parseFloat(value) * 16);
}

function pxToRem(value) {
  return "".concat(value / 16, "rem");
}