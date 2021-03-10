"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _recharts = require("recharts");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("cloudhub-components/dist/mui/styles");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Charts/Recharts/LegendRecharts.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function () {
  return {
    '@global': {
      '.recharts-legend-wrapper': {
        '& .recharts-legend-item': {
          marginRight: '24px !important',
          '&:last-child': {
            flip: false,
            // disabled RTL
            marginRight: '0 !important'
          },
          '& .recharts-surface': {
            marginTop: -2,
            marginRight: '8px !important'
          }
        },
        '& .recharts-legend-item-text': {
          height: 32,
          fontSize: 12,
          lineHeight: '32px',
          textTransform: 'capitalize'
        }
      }
    }
  };
}); // ----------------------------------------------------------------------

LegendRecharts.propTypes = {
  align: _propTypes.default.string,
  verticalAlign: _propTypes.default.string
};

function LegendRecharts(_ref) {
  var _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'right' : _ref$align,
      _ref$verticalAlign = _ref.verticalAlign,
      verticalAlign = _ref$verticalAlign === void 0 ? 'top' : _ref$verticalAlign,
      other = (0, _objectWithoutProperties2.default)(_ref, ["align", "verticalAlign"]);
  useStyles();
  return /*#__PURE__*/_react.default.createElement(_recharts.Legend, (0, _extends2.default)({
    align: align,
    verticalAlign: verticalAlign,
    iconType: "circle",
    iconSize: 12
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }));
}

var _default = LegendRecharts;
exports.default = _default;