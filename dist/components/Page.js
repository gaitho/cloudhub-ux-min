"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactHelmet = require("react-helmet");

var _analytics = _interopRequireDefault(require("src/utils/analytics"));

var _reactRouterDom = require("react-router-dom");

var _react = _interopRequireWildcard(require("react"));

var _this = void 0,
    _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Page.js";

// ----------------------------------------------------------------------
var Page = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      other = (0, _objectWithoutProperties2.default)(_ref, ["children", "title"]);

  var _useLocation = (0, _reactRouterDom.useLocation)(),
      pathname = _useLocation.pathname;

  var sendPageViewEvent = (0, _react.useCallback)(function () {
    _analytics.default.pageview({
      page_path: pathname
    }); // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  (0, _react.useEffect)(function () {
    sendPageViewEvent();
  }, [sendPageViewEvent]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: ref
  }, other, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react.default.createElement("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, title)), children);
});
Page.propTypes = {
  children: _propTypes.default.node.isRequired,
  title: _propTypes.default.string
};
var _default = Page;
exports.default = _default;