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

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/ColorUtility/PreviewColor.js";
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
  var _this = this;

  var colors = _ref.colors,
      _ref$limit = _ref.limit,
      limit = _ref$limit === void 0 ? 3 : _ref$limit,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["colors", "limit", "className"]);
  var classes = useStyles();
  var showColor = colors.slice(0, limit);
  var moreColor = colors.length - limit;
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    component: "span",
    className: (0, _clsx.default)(classes.root, className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), showColor.map(function (color, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: color + index,
      className: classes.color,
      style: {
        backgroundColor: color
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }
    });
  }), colors.length > limit && /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "subtitle2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "+".concat(moreColor)));
}

var _default = PreviewColor;
exports.default = _default;