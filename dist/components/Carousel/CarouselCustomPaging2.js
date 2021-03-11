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
  var color = _ref.color,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, ["color", "className"]);

  var classes = useStyles();
  return {
    appendDots: function appendDots(dots) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Box, _extends({
        component: "ul",
        className: (0, _clsx.default)(classes.root, className)
      }, other), dots));
    },
    customPaging: function customPaging(dot) {
      return /*#__PURE__*/_react.default.createElement(_core.Box, {
        sx: {
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, /*#__PURE__*/_react.default.createElement(_core.Box, {
        component: "span",
        className: classes.dot,
        sx: {
          bgcolor: color ? color : 'primary.main'
        }
      }));
    }
  };
}

var _default = CarouselCustomPaging1;
exports.default = _default;