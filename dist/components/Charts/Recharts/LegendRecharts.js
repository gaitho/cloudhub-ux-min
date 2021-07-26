"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _recharts = require("recharts");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _excluded = ["align", "verticalAlign"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
      other = _objectWithoutProperties(_ref, _excluded);

  useStyles();
  return /*#__PURE__*/_react.default.createElement(_recharts.Legend, _extends({
    align: align,
    verticalAlign: verticalAlign,
    iconType: "circle",
    iconSize: 12
  }, other));
}

var _default = LegendRecharts;
exports.default = _default;