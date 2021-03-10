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

var _styles = require("cloudhub-components/dist/mui/styles");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/EmptyContent.js";
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
      other = (0, _objectWithoutProperties2.default)(_ref, ["title", "description", "img", "className"]);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react.default.createElement(_core.Box, {
    component: "img",
    alt: "empty content",
    src: img ? img : '/static/illustrations/illustration_empty_content.svg',
    sx: {
      height: 240,
      mb: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "h5",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, title), description && /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, description));
}

var _default = EmptyContent;
exports.default = _default;