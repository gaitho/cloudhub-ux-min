"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clsx = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@iconify/react");

var _arrowLeftFill = _interopRequireDefault(require("@iconify-icons/eva/arrow-left-fill"));

var _arrowRightFill = _interopRequireDefault(require("@iconify-icons/eva/arrow-right-fill"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _materialExtend = require("../../@material-extend");

var _excluded = ["onNext", "onPrevious", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
var SIZE = 40;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      top: 0,
      bottom: 0,
      zIndex: 9,
      height: SIZE,
      width: '100%',
      margin: 'auto',
      display: 'flex',
      position: 'absolute',
      padding: theme.spacing(0, 2),
      justifyContent: 'space-between'
    },
    arrow: {
      width: SIZE,
      height: SIZE,
      opacity: 0.48,
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'center',
      background: theme.palette.grey['900'],
      borderRadius: theme.shape.borderRadiusSm,
      '&:hover': {
        opacity: 1,
        background: theme.palette.grey['900']
      }
    }
  };
}); // ----------------------------------------------------------------------

CarouselArrowsBasic2.propTypes = {
  onNext: _propTypes.default.func,
  onPrevious: _propTypes.default.func,
  className: _propTypes.default.string
};

function CarouselArrowsBasic2(_ref) {
  var onNext = _ref.onNext,
      onPrevious = _ref.onPrevious,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  var theme = (0, _styles.useTheme)();
  var isRTL = theme.direction === 'rtl';
  return /*#__PURE__*/_react.default.createElement(_core.Box, _extends({
    className: (0, _clsx.default)(classes.root, className)
  }, other), /*#__PURE__*/_react.default.createElement(_materialExtend.MIconButton, {
    size: "small",
    color: "white",
    onClick: onPrevious,
    className: classes.arrow
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    width: 20,
    height: 20,
    icon: isRTL ? _arrowRightFill.default : _arrowLeftFill.default
  })), /*#__PURE__*/_react.default.createElement(_materialExtend.MIconButton, {
    size: "small",
    color: "white",
    onClick: onNext,
    className: classes.arrow
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    width: 20,
    height: 20,
    icon: isRTL ? _arrowLeftFill.default : _arrowRightFill.default
  })));
}

var _default = CarouselArrowsBasic2;
exports.default = _default;