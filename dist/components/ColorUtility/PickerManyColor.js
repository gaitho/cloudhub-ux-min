"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _clsx3 = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@iconify/react");

var _checkmarkFill = _interopRequireDefault(require("@iconify-icons/eva/checkmark-fill"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/ColorUtility/PickerManyColor.js";
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
        boxShadow: "4px 4px 8px 0 ".concat(theme.palette.grey[50024]),
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
      other = (0, _objectWithoutProperties2.default)(_ref, ["className"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: className
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    icon: _checkmarkFill.default,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }));
}

PickerManyColor.propTypes = {
  colors: _propTypes.default.array.isRequired,
  onChecked: _propTypes.default.func,
  className: _propTypes.default.string
};

function PickerManyColor(_ref2) {
  var _this = this;

  var colors = _ref2.colors,
      onChecked = _ref2.onChecked,
      className = _ref2.className,
      other = (0, _objectWithoutProperties2.default)(_ref2, ["colors", "onChecked", "className"]);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: ((0, _clsx3.default)(classes.root), className),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, colors.map(function (color) {
    return /*#__PURE__*/_react.default.createElement(_core.Checkbox, (0, _extends2.default)({
      key: color,
      size: "small",
      value: color,
      color: "default",
      style: {
        color: color
      },
      checked: onChecked(color),
      icon: /*#__PURE__*/_react.default.createElement(CheckboxIcon, {
        className: (0, _clsx3.default)(classes.checkboxIcon, (0, _defineProperty2.default)({}, classes.whiteColor, color === '#FFFFFF' || color === 'white')),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }
      }),
      checkedIcon: /*#__PURE__*/_react.default.createElement(CheckboxIcon, {
        className: (0, _clsx3.default)(classes.checkboxIcon, classes.isChecked, (0, _defineProperty2.default)({}, classes.whiteColor, color === '#FFFFFF' || color === 'white')),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }
      }),
      className: classes.checkbox
    }, other, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }
    }));
  }));
}

var _default = PickerManyColor;
exports.default = _default;