"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clsx = _interopRequireDefault(require("clsx"));

var _highlight = _interopRequireDefault(require("highlight.js"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _excluded = ["source", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  var isLight = theme.palette.mode === 'light';
  return {
    root: {
      '& h1': _objectSpread({}, theme.typography.h1),
      '& h2': _objectSpread({}, theme.typography.h2),
      '& h3': _objectSpread({}, theme.typography.h3),
      '& h4': _objectSpread({}, theme.typography.h4),
      '& h5': _objectSpread({}, theme.typography.h5),
      '& h6': _objectSpread({}, theme.typography.h6),
      // Paragraph
      '& p': _objectSpread(_objectSpread({}, theme.typography.body1), {}, {
        lineHeight: 1.6
      }),
      // Hr
      '& hr': {
        border: 'none',
        margin: theme.spacing(3, 0),
        borderTop: "1px solid ".concat(theme.palette.divider, "}")
      },
      // Link
      '& a': {
        textDecoration: 'none',
        color: "".concat(theme.palette.error.main, " !important"),
        '&:hover': {
          textDecoration: 'underline'
        }
      },
      // List
      '& ul, & ol': _objectSpread(_objectSpread({}, theme.typography.body1), {}, {
        paddingLeft: theme.spacing(5),
        '& li': {
          lineHeight: 2
        }
      }),
      // Blockquote
      '& blockquote': {
        width: '80%',
        lineHeight: 1.5,
        fontSize: '1.5em',
        margin: '40px auto',
        position: 'relative',
        fontFamily: 'Georgia, serif',
        padding: theme.spacing(3, 3, 3, 8),
        borderRadius: theme.shape.borderRadiusMd,
        backgroundColor: theme.palette.background.neutral,
        color: "".concat(theme.palette.text.secondary, " !important"),
        '& p, & span': {
          marginBottom: '0 !important',
          fontSize: 'inherit !important',
          fontFamily: 'Georgia, serif !important',
          color: "".concat(theme.palette.text.secondary, " !important")
        },
        '&:before': {
          left: 16,
          top: -16,
          display: 'block',
          fontSize: '3em',
          content: '"\\201C"',
          position: 'absolute',
          color: theme.palette.text.disabled
        }
      },
      //Code Block
      '& pre, & pre > code': {
        fontSize: 16,
        overflowX: 'auto',
        whiteSpace: 'pre',
        padding: theme.spacing(2),
        color: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.grey[isLight ? '900' : '500_16']
      },
      '& code': {
        fontSize: 14,
        borderRadius: 4,
        whiteSpace: 'pre',
        padding: theme.spacing(0.25, 0.5),
        backgroundColor: theme.palette.warning.light,
        color: theme.palette.getContrastText(theme.palette.warning.light),
        '&.hljs': {
          padding: 0,
          backgroundColor: 'transparent'
        }
      }
    }
  };
}); // ----------------------------------------------------------------------

Markdown.propTypes = {
  source: _propTypes.default.string.isRequired,
  className: _propTypes.default.string
};

function CodeBlock(_ref) {
  var value = _ref.value;
  (0, _react.useEffect)(function () {
    document.querySelectorAll('pre > code').forEach(function (block) {
      _highlight.default.highlightBlock(block);
    });
  }, [value]);
  return /*#__PURE__*/_react.default.createElement("pre", {
    dir: "ltr"
  }, /*#__PURE__*/_react.default.createElement("code", null, value));
}

function LinkTo(_ref2) {
  var href = _ref2.href,
      children = _ref2.children;
  var isHttp = href.includes('http');
  return /*#__PURE__*/_react.default.createElement(_core.Link, {
    href: href,
    target: isHttp ? '_blank' : '_self'
  }, children);
}

function Markdown(_ref3) {
  var source = _ref3.source,
      className = _ref3.className,
      other = _objectWithoutProperties(_ref3, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_reactMarkdown.default, _extends({
    allowDangerousHtml: true,
    renderers: {
      code: CodeBlock,
      link: LinkTo
    },
    source: source,
    className: (0, _clsx.default)(classes.root, className)
  }, other));
}

var _default = Markdown;
exports.default = _default;