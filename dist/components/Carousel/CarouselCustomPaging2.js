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

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Carousel/CarouselCustomPaging2.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      listStyle: 'none',
      justifyContent: 'center',
      '& li': {
        width: 24,
        height: 24,
        opacity: 0.32,
        cursor: 'pointer',
        '&.slick-active': {
          opacity: 1,
          '& $dot': {
            width: 18,
            borderRadius: 8
          }
        }
      }
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      transition: theme.transitions.create('width')
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
          lineNumber: 46,
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
          lineNumber: 56,
          columnNumber: 7
        }
      }, /*#__PURE__*/_react.default.createElement(_core.Box, {
        component: "span",
        className: classes.dot,
        sx: {
          bgcolor: color ? color : 'primary.main'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }
      }));
    }
  };
}

var _default = CarouselCustomPaging1;
exports.default = _default;