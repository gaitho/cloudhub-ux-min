"use strict";

var _interopRequireWildcard = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _authJwt = require("src/redux/slices/authJwt");

// ----------------------------------------------------------------------
JwtProvider.propTypes = {
  children: _propTypes.default.node
};

function JwtProvider(_ref) {
  var children = _ref.children;
  var dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(function () {
    dispatch((0, _authJwt.getInitialize)());
  }, [dispatch]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
}

var _default = JwtProvider;
exports.default = _default;