"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ThemeProvider: true,
  StatusLabel: true
};
Object.defineProperty(exports, "ThemeProvider", {
  enumerable: true,
  get: function get() {
    return _core.default;
  }
});
Object.defineProperty(exports, "StatusLabel", {
  enumerable: true,
  get: function get() {
    return _StatusLabel.default;
  }
});

var _core = _interopRequireDefault(require("./theme/core"));

var _materialExtend = require("./theme/@material-extend");

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

var _StatusLabel = _interopRequireDefault(require("./custom-components/StatusLabel"));