"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useCountdown;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// ----------------------------------------------------------------------
function useCountdown(date) {
  var _useState = (0, _react.useState)({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  }),
      _useState2 = _slicedToArray(_useState, 2),
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