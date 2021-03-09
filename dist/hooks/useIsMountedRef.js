"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useIsMountedRef;

var _react = require("react");

// ----------------------------------------------------------------------
function useIsMountedRef() {
  var isMounted = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    return function () {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}