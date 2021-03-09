"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

// ----------------------------------------------------------------------
function ScrollToTop() {
  var _useLocation = (0, _reactRouterDom.useLocation)(),
      pathname = _useLocation.pathname;

  (0, _react.useEffect)(function () {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

var _default = ScrollToTop;
exports.default = _default;