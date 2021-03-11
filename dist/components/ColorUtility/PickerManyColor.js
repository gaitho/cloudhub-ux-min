"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clsx3 = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@iconify/react");

var _checkmarkFill = _interopRequireDefault(require("@iconify-icons/eva/checkmark-fill"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {},
    checkbox: {
      '&:hover': {
        opacity: 0.72
      }
    },
    checkboxIcon: {
      width: 20,
      height: 20,
      display: 'flex',
      borderRadius: '50%',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'currentColor',
      transition: theme.transitions.create('all', {
        duration: theme.transitions.duration.shortest
      })
    },
    isChecked: {
      transform: 'scale(1.4)',
      '& svg': {
        width: 12,
        height: 12,
        color: theme.palette.common.white
      },
      '&:before': {
        opacity: 0.48,
        width: '100%',
        content: "''",
        height: '100%',
        borderRadius: '50%',
        position: 'absolute',
        boxShadow: '4px 4px 8px 0 currentColor'
      }
    },
    whiteColor: {
      border: "solid 1px ".concat(theme.palette.divider),
      '&$isChecked': {
        boxShadow: "4px 4px 8px 0 ".concat(theme.palette.grey[500_24]),
        '& svg': {
          width: 12,
          height: 12,
          color: theme.palette.common.black
        }
      }
    }
  };
}); // ----------------------------------------------------------------------

function CheckboxIcon(_ref) {
  var className = _ref.className,
      other = _objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: className
  }, other), /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    icon: _checkmarkFill.default
  }));
}

PickerManyColor.propTypes = {
  colors: _propTypes.default.array.isRequired,
  onChecked: _propTypes.default.func,
  className: _propTypes.default.string
};

function PickerManyColor(_ref2) {
  var colors = _ref2.colors,
      onChecked = _ref2.onChecked,
      className = _ref2.className,
      other = _objectWithoutProperties(_ref2, ["colors", "onChecked", "className"]);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: ((0, _clsx3.default)(classes.root), className)
  }, colors.map(function (color) {
    return /*#__PURE__*/_react.default.createElement(_core.Checkbox, _extends({
      key: color,
      size: "small",
      value: color,
      color: "default",
      style: {
        color: color
      },
      checked: onChecked(color),
      icon: /*#__PURE__*/_react.default.createElement(CheckboxIcon, {
        className: (0, _clsx3.default)(classes.checkboxIcon, _defineProperty({}, classes.whiteColor, color === '#FFFFFF' || color === 'white'))
      }),
      checkedIcon: /*#__PURE__*/_react.default.createElement(CheckboxIcon, {
        className: (0, _clsx3.default)(classes.checkboxIcon, classes.isChecked, _defineProperty({}, classes.whiteColor, color === '#FFFFFF' || color === 'white'))
      }),
      className: classes.checkbox
    }, other));
  }));
}

var _default = PickerManyColor;
exports.default = _default;