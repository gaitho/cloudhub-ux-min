"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clsx = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _simplebarReact = _interopRequireDefault(require("simplebar-react"));

require("simplebar/src/simplebar.css");

var _styles = require("@material-ui/core/styles");

var _excluded = ["children", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      flexGrow: 1,
      height: '100%',
      overflow: 'hidden'
    },
    scroll: {
      maxHeight: '100%',
      '& .simplebar-scrollbar': {
        '&:before': {
          backgroundColor: (0, _styles.alpha)(theme.palette.grey['600'], 0.48)
        },
        '&.simplebar-visible:before': {
          opacity: 1
        }
      },
      '& .simplebar-vertical': {
        width: 10
      },
      '& .simplebar-horizontal .simplebar-scrollbar': {
        height: 6
      },
      '& .simplebar-mask': {
        zIndex: 'inherit'
      },
      '& .simplebar-content-wrapper::-webkit-scrollbar': {
        display: 'none'
      }
    }
  };
}); // ----------------------------------------------------------------------

Scrollbars.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string
};

function Scrollbars(_ref) {
  var children = _ref.children,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_simplebarReact.default, _extends({
    timeout: 500,
    clickOnTrack: false,
    className: (0, _clsx.default)(classes.scroll, className)
  }, other), children));
}

var _default = Scrollbars;
exports.default = _default;