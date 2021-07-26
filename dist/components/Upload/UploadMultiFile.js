"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clsx3 = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("@iconify/react");

var _react2 = _interopRequireWildcard(require("react"));

var _reactDropzone = require("react-dropzone");

var _fileFill = _interopRequireDefault(require("@iconify-icons/eva/file-fill"));

var _closeFill = _interopRequireDefault(require("@iconify-icons/eva/close-fill"));

var _framerMotion = require("framer-motion");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Animate = require("../Animate");

var _formatNumber = require("../../utils/formatNumber");

var _materialExtend = require("../../@material-extend");

var _excluded = ["caption", "error", "value", "onChange", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      width: '100%'
    },
    dropZone: _defineProperty({
      outline: 'none',
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: theme.spacing(5, 1),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.neutral,
      border: "1px dashed ".concat(theme.palette.grey['500_32']),
      '&:hover': {
        opacity: 0.72,
        cursor: 'pointer'
      }
    }, theme.breakpoints.up('md'), {
      textAlign: 'left',
      flexDirection: 'row'
    }),
    list: {
      margin: theme.spacing(5, 0)
    },
    listItem: {
      margin: theme.spacing(1, 0),
      padding: theme.spacing(0.5, 2),
      borderRadius: theme.shape.borderRadius,
      border: "solid 1px ".concat(theme.palette.divider),
      backgroundColor: theme.palette.background.paper
    },
    dragActive: {
      opacity: 0.72
    },
    isDragReject: {
      color: theme.palette.error.main,
      borderColor: theme.palette.error.light,
      backgroundColor: theme.palette.error.lighter
    },
    isDragAccept: {}
  };
}); // ----------------------------------------------------------------------

UploadMultiFile.propTypes = {
  caption: _propTypes.default.string,
  error: _propTypes.default.bool,
  files: _propTypes.default.object,
  setFiles: _propTypes.default.func,
  className: _propTypes.default.string
};

function UploadMultiFile(_ref) {
  var _clsx;

  var caption = _ref.caption,
      _ref$error = _ref.error,
      error = _ref$error === void 0 ? false : _ref$error,
      files = _ref.value,
      setFiles = _ref.onChange,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  var hasFile = files.length > 0;
  var handleDrop = (0, _react2.useCallback)(function (acceptedFiles) {
    setFiles(acceptedFiles);
  }, [setFiles]);

  var handleRemoveAll = function handleRemoveAll() {
    setFiles([]);
  };

  var handleRemoveFile = function handleRemoveFile(file) {
    var newFiles = _toConsumableArray(files);

    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
  };

  var _useDropzone = (0, _reactDropzone.useDropzone)({
    onDrop: handleDrop
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      isDragReject = _useDropzone.isDragReject,
      isDragAccept = _useDropzone.isDragAccept;

  return /*#__PURE__*/_react2.default.createElement("div", _extends({
    className: (0, _clsx3.default)(classes.root, className)
  }, other), /*#__PURE__*/_react2.default.createElement("div", _extends({
    className: (0, _clsx3.default)(classes.dropZone, (_clsx = {}, _defineProperty(_clsx, classes.isDragActive, isDragActive), _defineProperty(_clsx, classes.isDragAccept, isDragAccept), _defineProperty(_clsx, classes.isDragReject, isDragReject || error), _clsx))
  }, getRootProps()), /*#__PURE__*/_react2.default.createElement("input", getInputProps()), /*#__PURE__*/_react2.default.createElement(_core.Box, {
    component: "img",
    alt: "select file",
    src: "/static/illustrations/illustration_upload.svg",
    sx: {
      height: 160
    }
  }), /*#__PURE__*/_react2.default.createElement(_core.Box, {
    sx: {
      ml: {
        md: 5
      }
    }
  }, /*#__PURE__*/_react2.default.createElement(_core.Typography, {
    gutterBottom: true,
    variant: "h5"
  }, "Drop or Select file"), caption ? /*#__PURE__*/_react2.default.createElement(_core.Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, caption) : /*#__PURE__*/_react2.default.createElement(_core.Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, "Drop files here or click\xA0", /*#__PURE__*/_react2.default.createElement(_core.Link, {
    underline: "always"
  }, "browse"), "\xA0thorough your machine"))), /*#__PURE__*/_react2.default.createElement(_core.List, {
    disablePadding: true,
    className: (0, _clsx3.default)(_defineProperty({}, classes.list, hasFile))
  }, /*#__PURE__*/_react2.default.createElement(_framerMotion.AnimatePresence, null, files.map(function (file) {
    return /*#__PURE__*/_react2.default.createElement(_core.ListItem, _extends({
      key: file.name,
      component: _framerMotion.motion.div,
      className: classes.listItem
    }, _Animate.varFadeInRight), /*#__PURE__*/_react2.default.createElement(_core.ListItemIcon, null, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
      icon: _fileFill.default,
      width: 32,
      height: 32
    })), /*#__PURE__*/_react2.default.createElement(_core.ListItemText, {
      primary: file.name,
      secondary: (0, _formatNumber.fData)(file.size),
      primaryTypographyProps: {
        variant: 'subtitle2'
      }
    }), /*#__PURE__*/_react2.default.createElement(_core.ListItemSecondaryAction, null, /*#__PURE__*/_react2.default.createElement(_materialExtend.MIconButton, {
      edge: "end",
      size: "small",
      onClick: function onClick() {
        return handleRemoveFile(file);
      }
    }, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
      icon: _closeFill.default
    }))));
  }))), hasFile && /*#__PURE__*/_react2.default.createElement(_core.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'flex-end',
      '& > *': {
        ml: 1.5
      }
    }
  }, /*#__PURE__*/_react2.default.createElement(_core.Button, {
    onClick: handleRemoveAll,
    sx: {
      ml: 1.5
    }
  }, "Remove all"), /*#__PURE__*/_react2.default.createElement(_core.Button, {
    variant: "contained"
  }, "Upload files")));
}

var _default = UploadMultiFile;
exports.default = _default;