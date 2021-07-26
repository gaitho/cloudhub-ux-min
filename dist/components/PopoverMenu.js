"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _excluded = ["children", "width", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    paper: {
      marginTop: 12,
      marginLeft: 4,
      overflow: 'inherit',
      boxShadow: theme.shadows['25'].z20,
      border: "solid 1px ".concat(theme.palette.grey['500_8'])
    },
    arrow: _defineProperty({}, theme.breakpoints.up('sm'), {
      top: -7,
      zIndex: 1,
      width: 12,
      right: 20,
      height: 12,
      content: "''",
      position: 'absolute',
      borderRadius: '0 0 4px 0',
      transform: 'rotate(-135deg)',
      background: theme.palette.background.paper,
      borderRight: "solid 1px ".concat((0, _styles.alpha)(theme.palette.grey['500'], 0.12)),
      borderBottom: "solid 1px ".concat((0, _styles.alpha)(theme.palette.grey['500'], 0.12))
    })
  };
}); // ----------------------------------------------------------------------

DropdownMenu.propTypes = {
  children: _propTypes.default.node.isRequired,
  width: _propTypes.default.number,
  className: _propTypes.default.string
};

function DropdownMenu(_ref) {
  var children = _ref.children,
      width = _ref.width,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Popover, _extends({
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    className: className,
    classes: {
      root: classes.root,
      paper: classes.paper
    }
  }, other), /*#__PURE__*/_react.default.createElement("span", {
    className: classes.arrow
  }), /*#__PURE__*/_react.default.createElement(_core.Box, {
    sx: {
      width: width,
      maxWidth: '100%'
    }
  }, children));
}

var _default = DropdownMenu;
exports.default = _default;