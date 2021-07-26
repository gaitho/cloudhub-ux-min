"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clsx2 = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDropzone = require("react-dropzone");

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _excluded = ["caption", "error", "value", "onChange", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      overflow: 'hidden',
      textAlign: 'center',
      position: 'relative',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: theme.spacing(5, 0),
      borderRadius: theme.shape.borderRadius,
      transition: theme.transitions.create('padding'),
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
    hasFile: {
      padding: '12% 0'
    },
    isDragActive: {
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

UploadSingleFile.propTypes = {
  caption: _propTypes.default.string,
  error: _propTypes.default.bool,
  file: _propTypes.default.object,
  setFile: _propTypes.default.func,
  className: _propTypes.default.string
};

function UploadSingleFile(_ref) {
  var _clsx;

  var caption = _ref.caption,
      _ref$error = _ref.error,
      error = _ref$error === void 0 ? false : _ref$error,
      file = _ref.value,
      setFile = _ref.onChange,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  var handleDrop = (0, _react.useCallback)(function (acceptedFiles) {
    var file = acceptedFiles[0];

    if (file) {
      setFile(_objectSpread(_objectSpread({}, file), {}, {
        preview: URL.createObjectURL(file)
      }));
    }
  }, [setFile]);

  var _useDropzone = (0, _reactDropzone.useDropzone)({
    onDrop: handleDrop,
    multiple: false
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      isDragReject = _useDropzone.isDragReject,
      isDragAccept = _useDropzone.isDragAccept;

  (0, _react.useEffect)(function () {
    return function () {
      if (file) {
        URL.revokeObjectURL(file.preview);
      }
    };
  }, [file]);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _clsx2.default)(classes.root, className)
  }, other), /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _clsx2.default)(classes.dropZone, (_clsx = {}, _defineProperty(_clsx, classes.isDragActive, isDragActive), _defineProperty(_clsx, classes.isDragAccept, isDragAccept), _defineProperty(_clsx, classes.isDragReject, isDragReject || error), _defineProperty(_clsx, classes.hasFile, file), _clsx))
  }, getRootProps()), /*#__PURE__*/_react.default.createElement("input", getInputProps()), /*#__PURE__*/_react.default.createElement(_core.Box, {
    component: "img",
    alt: "select file",
    src: "/static/illustrations/illustration_upload.svg",
    sx: {
      height: 160
    }
  }), /*#__PURE__*/_react.default.createElement(_core.Box, {
    sx: {
      ml: {
        md: 5
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    gutterBottom: true,
    variant: "h5"
  }, "Drop or Select file"), caption ? /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, caption) : /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    }
  }, "Drop files here or click\xA0", /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body2",
    component: "span",
    sx: {
      color: 'primary.main'
    }
  }, "browse"), "\xA0thorough your machine")), file && /*#__PURE__*/_react.default.createElement(_core.Box, {
    component: "img",
    alt: "file preview",
    src: file.preview,
    sx: {
      top: 8,
      borderRadius: 1,
      objectFit: 'cover',
      position: 'absolute',
      width: 'calc(100% - 16px)',
      height: 'calc(100% - 16px)'
    }
  })));
}

var _default = UploadSingleFile;
exports.default = _default;