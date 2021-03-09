"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _clsx = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Block.js";
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
      other = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "title"]);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }), title && /*#__PURE__*/_react.default.createElement(_core.Typography, {
    gutterBottom: true,
    variant: "subtitle2",
    sx: {
      color: 'text.secondary'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, children));
}

var _default = Block;
exports.default = _default;