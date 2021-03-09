"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ThemeConfig: true
};
Object.defineProperty(exports, "ThemeConfig", {
  enumerable: true,
  get: function get() {
    return _core.default;
  }
});

var _materialExtend = require("./@material-extend");

Object.keys(_materialExtend).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _materialExtend[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _materialExtend[key];
    }
  });
});

var _core = _interopRequireDefault(require("./core"));