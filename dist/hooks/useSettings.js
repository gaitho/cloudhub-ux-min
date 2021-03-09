"use strict";

var _interopRequireWildcard = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

// ----------------------------------------------------------------------
function useSettings() {
  var _React$useState = _react.default.useState('ltr'),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      themeDirection = _React$useState2[0],
      setThemediretion = _React$useState2[1];

  var _React$useState3 = _react.default.useState('light'),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      themeMode = _React$useState4[0],
      setThemeMode = _React$useState4[1];

  var isLight = themeMode === 'light';
  var handleToggleTheme = (0, _react.useCallback)(function () {
    return setThemeMode(isLight ? 'dark' : 'light');
  }, [isLight]);
  var handleChangeDirection = (0, _react.useCallback)(function (event) {
    return setThemediretion(event.target.value);
  }, []);
  return {
    // Mode
    themeMode: themeMode,
    toggleMode: handleToggleTheme,
    selectMode: handleToggleTheme,
    // Direction
    themeDirection: themeDirection,
    selectDirection: handleChangeDirection
  };
}

var _default = useSettings;
exports.default = _default;