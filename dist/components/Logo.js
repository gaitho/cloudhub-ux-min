"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Logo.js";
// ----------------------------------------------------------------------
Logo.propTypes = {
  className: _propTypes.default.string
};

function Logo(_ref) {
  var className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["className"]);
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    component: "img",
    alt: "logo",
    src: "/static/brand/logo_single.svg",
    height: 40,
    className: className
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }));
}

var _default = Logo;
exports.default = _default;