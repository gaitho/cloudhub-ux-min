"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useOffSetTop;

var _slicedToArray2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = require("react");

// ----------------------------------------------------------------------
function useOffSetTop(top) {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      offsetTop = _useState2[0],
      setOffSetTop = _useState2[1];

  var isTop = top ? top : 100;
  (0, _react.useEffect)(function () {
    window.onscroll = function () {
      if (window.pageYOffset > isTop) {
        setOffSetTop(true);
      } else {
        setOffSetTop(false);
      }
    };

    return function () {
      window.onscroll = null;
    };
  }, [isTop]);
  return offsetTop;
} // Usage
// const offset = useOffSetTop(100);