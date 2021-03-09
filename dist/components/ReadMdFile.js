"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Markdown = _interopRequireDefault(require("src/components/Markdown"));

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/ReadMdFile.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      '& h1': {
        marginBottom: theme.spacing(5)
      },
      '& h2': {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(2)
      },
      '& h3, h4, h5, h6': {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2)
      },
      '& img': {
        margin: theme.spacing(5, 0)
      },
      '& p': {
        marginBottom: theme.spacing(2)
      },
      '& ul': {
        margin: theme.spacing(2, 0)
      },
      '& pre': {
        margin: theme.spacing(3, 0)
      }
    }
  };
}); // ----------------------------------------------------------------------

ReadMdFile.propTypes = {
  content: _propTypes.default.string,
  className: _propTypes.default.string
};

function ReadMdFile(_ref) {
  var content = _ref.content,
      className = _ref.className;
  var classes = useStyles();

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      file = _useState2[0],
      setFile = _useState2[1];

  var getFile = (0, _react.useCallback)( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fetch(content).then(function (response) {
              return response.text();
            }).then(function (text) {
              setFile(text);
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [content]);
  (0, _react.useEffect)(function () {
    getFile();
  }, [getFile]);
  return /*#__PURE__*/_react.default.createElement(_Markdown.default, {
    source: file,
    className: (0, _clsx.default)(classes.root, className),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 10
    }
  });
}

var _default = ReadMdFile;
exports.default = _default;