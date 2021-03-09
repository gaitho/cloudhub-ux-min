"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useCountdown;

var _slicedToArray2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = require("react");

// ----------------------------------------------------------------------
function useCountdown(date) {
  var _useState = (0, _react.useState)({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      countdown = _useState2[0],
      setCountdown = _useState2[1];

  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      return setNewTime();
    }, 1000);
    return function () {
      return clearInterval(interval);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var setNewTime = function setNewTime() {
    var startTime = date;
    var endTime = new Date();
    var distanceToNow = startTime - endTime;
    var getDays = Math.floor(distanceToNow / (1000 * 60 * 60 * 24));
    var getHours = "0".concat(Math.floor(distanceToNow % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2);
    var getMinutes = "0".concat(Math.floor(distanceToNow % (1000 * 60 * 60) / (1000 * 60))).slice(-2);
    var getSeconds = "0".concat(Math.floor(distanceToNow % (1000 * 60) / 1000)).slice(-2);
    setCountdown({
      days: getDays || '000',
      hours: getHours || '000',
      minutes: getMinutes || '000',
      seconds: getSeconds || '000'
    });
  };

  return countdown;
} // Usage
// const countdown = useCountdown(new Date('07/07/2022 21:30'));