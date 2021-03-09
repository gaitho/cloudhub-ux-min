"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reactRedux = require("react-redux");

var _settings = require("src/redux/slices/settings");

// ----------------------------------------------------------------------
function useSettings() {
  var dispatch = (0, _reactRedux.useDispatch)();

  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
    return state.settings;
  }),
      themeMode = _useSelector.themeMode,
      themeDirection = _useSelector.themeDirection;

  var isLight = themeMode === 'light';
  var handleToggleTheme = (0, _react.useCallback)(function () {
    return dispatch((0, _settings.switchMode)(isLight ? 'dark' : 'light'));
  }, [dispatch, isLight]);
  var handleChangeTheme = (0, _react.useCallback)(function (event) {
    return dispatch((0, _settings.switchMode)(event.target.value));
  }, [dispatch]);
  var handleChangeDirection = (0, _react.useCallback)(function (event) {
    return dispatch((0, _settings.switchDirection)(event.target.value));
  }, [dispatch]);
  return {
    // Mode
    themeMode: themeMode,
    toggleMode: handleToggleTheme,
    selectMode: handleChangeTheme,
    // Direction
    themeDirection: themeDirection,
    selectDirection: handleChangeDirection
  };
}

var _default = useSettings;
exports.default = _default;