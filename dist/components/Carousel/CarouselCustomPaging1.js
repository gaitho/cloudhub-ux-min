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

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Carousel/CarouselCustomPaging1.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      listStyle: 'none',
      alignItems: 'center',
      position: 'absolute',
      right: theme.spacing(3),
      bottom: theme.spacing(3),
      '& li': {
        width: 18,
        height: 18,
        opacity: 0.32,
        cursor: 'pointer',
        '&.slick-active': {
          opacity: 1
        }
      }
    }
  };
}); // ----------------------------------------------------------------------

CarouselCustomPaging1.propTypes = {
  color: _propTypes.default.string,
  className: _propTypes.default.string
};

function CarouselCustomPaging1(_ref) {
  var _this = this;

  var color = _ref.color,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["color", "className"]);
  var classes = useStyles();
  return {
    appendDots: function appendDots(dots) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
        component: "ul",
        className: (0, _clsx.default)(classes.root, className)
      }, other, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }), dots));
    },
    customPaging: function customPaging(dot) {
      return /*#__PURE__*/_react.default.createElement(_core.Box, {
        sx: {
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 7
        }
      }, /*#__PURE__*/_react.default.createElement(_core.Box, {
        component: "span",
        sx: {
          width: 8,
          height: 8,
          borderRadius: '50%',
          bgcolor: color ? color : 'common.white'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 9
        }
      }));
    }
  };
}

var _default = CarouselCustomPaging1;
exports.default = _default;