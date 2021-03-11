"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clsx2 = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactQuill = _interopRequireDefault(require("react-quill"));

var _EditorToolbar = _interopRequireWildcard(require("./EditorToolbar"));

var _styles = require("@material-ui/core/styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      borderRadius: theme.shape.borderRadius,
      border: "solid 1px ".concat(theme.palette.grey[500_32]),
      '& .ql-container': _objectSpread(_objectSpread({
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
        '& pre.ql-syntax': _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
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
      other = _objectWithoutProperties(_ref, ["id", "error", "value", "onChange", "simple", "className"]);

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
    className: (0, _clsx2.default)(classes.root, _defineProperty({}, classes.error, error), className)
  }, /*#__PURE__*/_react.default.createElement(_EditorToolbar.default, {
    id: id,
    isSimple: simple
  }), /*#__PURE__*/_react.default.createElement(_reactQuill.default, _extends({
    value: value,
    onChange: onChange,
    modules: modules,
    formats: _EditorToolbar.formats,
    placeholder: "Write something awesome..."
  }, other)));
}

var _default = QuillEditor;
exports.default = _default;