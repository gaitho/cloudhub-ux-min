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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  var isLight = theme.palette.mode === 'light';
  return {
    root: {
      position: 'relative'
    },
    content: {
      minHeight: 160,
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadiusSm,
      border: "solid 1px ".concat(theme.palette.divider),
      backgroundColor: theme.palette.grey[isLight ? 100 : 800],
      '& > *': {
        margin: "".concat(theme.spacing(1), " !important")
      }
    }
  };
}); // ----------------------------------------------------------------------

Block.propTypes = {
  title: _propTypes.default.string,
  children: _propTypes.default.node,
  className: _propTypes.default.string
};

function Block(_ref) {
  var children = _ref.children,
      className = _ref.className,
      title = _ref.title,
      other = _objectWithoutProperties(_ref, ["children", "className", "title"]);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Box, _extends({
    className: (0, _clsx.default)(classes.root, className)
  }, other), title && /*#__PURE__*/_react.default.createElement(_core.Typography, {
    gutterBottom: true,
    variant: "subtitle2",
    sx: {
      color: 'text.secondary'
    }
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.content
  }, children));
}

var _default = Block;
exports.default = _default;