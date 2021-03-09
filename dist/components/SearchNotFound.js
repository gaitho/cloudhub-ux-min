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

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/SearchNotFound.js";
// ----------------------------------------------------------------------
SearchNotFound.propTypes = {
  searchQuery: _propTypes.default.string,
  className: _propTypes.default.string
};

function SearchNotFound(_ref) {
  var _ref$searchQuery = _ref.searchQuery,
      searchQuery = _ref$searchQuery === void 0 ? '' : _ref$searchQuery,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["searchQuery", "className"]);
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    className: className
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    gutterBottom: true,
    align: "center",
    variant: "subtitle1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "Not found"), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body2",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "No results found for \xA0", /*#__PURE__*/_react.default.createElement("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "\"", searchQuery, "\""), ". Try checking for typos or using complete words."));
}

var _default = SearchNotFound;
exports.default = _default;