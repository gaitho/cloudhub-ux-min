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
  return {
    root: {
      height: '100%',
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: theme.spacing(8, 2)
    }
  };
}); // ----------------------------------------------------------------------

EmptyContent.propTypes = {
  title: _propTypes.default.string.isRequired,
  img: _propTypes.default.string,
  description: _propTypes.default.string,
  className: _propTypes.default.string
};

function EmptyContent(_ref) {
  var title = _ref.title,
      description = _ref.description,
      img = _ref.img,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, ["title", "description", "img", "className"]);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Box, _extends({
    className: (0, _clsx.default)(classes.root, className)
  }, other), /*#__PURE__*/_react.default.createElement(_core.Box, {
    component: "img",
    alt: "empty content",
    src: img ? img : '/static/illustrations/illustration_empty_content.svg',
    sx: {
      height: 240,
      mb: 3
    }
  }), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "h5",
    gutterBottom: true
  }, title), description && /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, description));
}

var _default = EmptyContent;
exports.default = _default;