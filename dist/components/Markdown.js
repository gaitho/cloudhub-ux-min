"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _clsx = _interopRequireDefault(require("clsx"));

var _highlight = _interopRequireDefault(require("highlight.js"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Markdown.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  var isLight = theme.palette.mode === 'light';
  return {
    root: {
      '& h1': (0, _objectSpread2.default)({}, theme.typography.h1),
      '& h2': (0, _objectSpread2.default)({}, theme.typography.h2),
      '& h3': (0, _objectSpread2.default)({}, theme.typography.h3),
      '& h4': (0, _objectSpread2.default)({}, theme.typography.h4),
      '& h5': (0, _objectSpread2.default)({}, theme.typography.h5),
      '& h6': (0, _objectSpread2.default)({}, theme.typography.h6),
      // Paragraph
      '& p': (0, _objectSpread2.default)((0, _objectSpread2.default)({}, theme.typography.body1), {}, {
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
      '& ul, & ol': (0, _objectSpread2.default)((0, _objectSpread2.default)({}, theme.typography.body1), {}, {
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
        backgroundColor: theme.palette.grey[isLight ? 900 : 50016]
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
    dir: "ltr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react.default.createElement("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, value));
}

function LinkTo(_ref2) {
  var href = _ref2.href,
      children = _ref2.children;
  var isHttp = href.includes('http');
  return /*#__PURE__*/_react.default.createElement(_core.Link, {
    href: href,
    target: isHttp ? '_blank' : '_self',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 5
    }
  }, children);
}

function Markdown(_ref3) {
  var source = _ref3.source,
      className = _ref3.className,
      other = (0, _objectWithoutProperties2.default)(_ref3, ["source", "className"]);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_reactMarkdown.default, (0, _extends2.default)({
    allowDangerousHtml: true,
    renderers: {
      code: CodeBlock,
      link: LinkTo
    },
    source: source,
    className: (0, _clsx.default)(classes.root, className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 5
    }
  }));
}

var _default = Markdown;
exports.default = _default;