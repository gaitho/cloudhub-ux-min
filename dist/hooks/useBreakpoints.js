"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useBreakpoints;

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// ----------------------------------------------------------------------
function useBreakpoints(direction, firstkey, lastkey) {
  var theme = (0, _styles.useTheme)();

  var keys = _toConsumableArray(theme.breakpoints.keys).reverse();

  var upMatches = (0, _core.useMediaQuery)(theme.breakpoints.up(firstkey));
  var dowMatches = (0, _core.useMediaQuery)(theme.breakpoints.down(firstkey));
  var betweenMatches = (0, _core.useMediaQuery)(theme.breakpoints.between(firstkey, lastkey));
  if (direction === 'up') return upMatches;
  if (direction === 'down') return dowMatches;
  if (direction === 'between') return betweenMatches;
  return keys.reduce(function (output, key) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var matches = (0, _core.useMediaQuery)(theme.breakpoints.up(key));
    return !output && matches ? key : output;
  }, null) || 'xs';
} // Usage
// const upMd = useBreakpoints('up','md') // > 960px
// const downMd = useBreakpoints('down','md') // < 960px
// const betweenSmMd = useBreakpoints('between','md', 'lg') // 960px ~ 1280px