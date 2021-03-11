"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
SearchNotFound.propTypes = {
  searchQuery: _propTypes.default.string,
  className: _propTypes.default.string
};

function SearchNotFound(_ref) {
  var _ref$searchQuery = _ref.searchQuery,
      searchQuery = _ref$searchQuery === void 0 ? '' : _ref$searchQuery,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, ["searchQuery", "className"]);

  return /*#__PURE__*/_react.default.createElement(_core.Box, _extends({
    className: className
  }, other), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    gutterBottom: true,
    align: "center",
    variant: "subtitle1"
  }, "Not found"), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body2",
    align: "center"
  }, "No results found for \xA0", /*#__PURE__*/_react.default.createElement("strong", null, "\"", searchQuery, "\""), ". Try checking for typos or using complete words."));
}

var _default = SearchNotFound;
exports.default = _default;