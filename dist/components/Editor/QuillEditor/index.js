"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _defineProperty2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactQuill = _interopRequireDefault(require("react-quill"));

var _EditorToolbar = _interopRequireWildcard(require("./EditorToolbar"));

var _styles = require("cloudhub-components/dist/mui/styles");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Editor/QuillEditor/index.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      borderRadius: theme.shape.borderRadius,
      border: "solid 1px ".concat(theme.palette.grey[50032]),
      '& .ql-container': (0, _objectSpread2.default)((0, _objectSpread2.default)({
        border: 'none'
      }, theme.typography.body1), {}, {
        fontFamily: theme.typography.fontFamily
      }),
      '& .ql-editor': {
        minHeight: 200,
        '&.ql-blank::before': {
          fontStyle: 'normal',
          color: theme.palette.text.disabled
        },
        '& pre.ql-syntax': (0, _objectSpread2.default)((0, _objectSpread2.default)({}, theme.typography.body2), {}, {
          padding: theme.spacing(2),
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.grey[900]
        })
      }
    },
    error: {
      border: "solid 1px ".concat(theme.palette.error.main)
    }
  };
}); // ----------------------------------------------------------------------

QuillEditor.propTypes = {
  id: _propTypes.default.string,
  value: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  error: _propTypes.default.bool,
  simple: _propTypes.default.bool,
  className: _propTypes.default.string
};

function QuillEditor(_ref) {
  var id = _ref.id,
      error = _ref.error,
      value = _ref.value,
      onChange = _ref.onChange,
      _ref$simple = _ref.simple,
      simple = _ref$simple === void 0 ? false : _ref$simple,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["id", "error", "value", "onChange", "simple", "className"]);
  var classes = useStyles();
  var modules = {
    toolbar: {
      container: "#".concat(id),
      handlers: {
        undo: _EditorToolbar.undoChange,
        redo: _EditorToolbar.redoChange
      }
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true
    },
    syntax: true,
    clipboard: {
      matchVisual: false
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx2.default)(classes.root, (0, _defineProperty2.default)({}, classes.error, error), className),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_EditorToolbar.default, {
    id: id,
    isSimple: simple,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react.default.createElement(_reactQuill.default, (0, _extends2.default)({
    value: value,
    onChange: onChange,
    modules: modules,
    formats: _EditorToolbar.formats,
    placeholder: "Write something awesome..."
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  })));
}

var _default = QuillEditor;
exports.default = _default;