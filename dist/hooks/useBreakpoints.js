"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useBreakpoints;

var _toConsumableArray2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray"));

var _core = require("@material-ui/core");

var _styles = require("cloudhub-components/dist/mui/styles");

// ----------------------------------------------------------------------
function useBreakpoints(direction, firstkey, lastkey) {
  var theme = (0, _styles.useTheme)();
  var keys = (0, _toConsumableArray2.default)(theme.breakpoints.keys).reverse();
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