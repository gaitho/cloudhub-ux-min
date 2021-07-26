"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clsx = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _excluded = ["colors", "limit", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    color: {
      marginLeft: -4,
      borderRadius: '50%',
      width: theme.spacing(2),
      height: theme.spacing(2),
      border: "solid 2px ".concat(theme.palette.background.paper),
      boxShadow: "inset -1px 1px 2px ".concat((0, _styles.alpha)(theme.palette.common.black, 0.24))
    }
  };
}); // ----------------------------------------------------------------------

PreviewColor.propTypes = {
  colors: _propTypes.default.array.isRequired,
  limit: _propTypes.default.number,
  className: _propTypes.default.string
};

function PreviewColor(_ref) {
  var colors = _ref.colors,
      _ref$limit = _ref.limit,
      limit = _ref$limit === void 0 ? 3 : _ref$limit,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  var showColor = colors.slice(0, limit);
  var moreColor = colors.length - limit;
  return /*#__PURE__*/_react.default.createElement(_core.Box, _extends({
    component: "span",
    className: (0, _clsx.default)(classes.root, className)
  }, other), showColor.map(function (color, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: color + index,
      className: classes.color,
      style: {
        backgroundColor: color
      }
    });
  }), colors.length > limit && /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "subtitle2"
  }, "+".concat(moreColor)));
}

var _default = PreviewColor;
exports.default = _default;