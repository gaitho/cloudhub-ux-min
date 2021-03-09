"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectSpread2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDropzone = require("react-dropzone");

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Upload/UploadSingleFile.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      width: '100%'
    },
    dropZone: (0, _defineProperty2.default)({
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
      border: "1px dashed ".concat(theme.palette.grey[50032]),
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
      other = (0, _objectWithoutProperties2.default)(_ref, ["caption", "error", "value", "onChange", "className"]);
  var classes = useStyles();
  var handleDrop = (0, _react.useCallback)(function (acceptedFiles) {
    var file = acceptedFiles[0];

    if (file) {
      setFile((0, _objectSpread2.default)((0, _objectSpread2.default)({}, file), {}, {
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
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _clsx2.default)(classes.root, className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _clsx2.default)(classes.dropZone, (_clsx = {}, (0, _defineProperty2.default)(_clsx, classes.isDragActive, isDragActive), (0, _defineProperty2.default)(_clsx, classes.isDragAccept, isDragAccept), (0, _defineProperty2.default)(_clsx, classes.isDragReject, isDragReject || error), (0, _defineProperty2.default)(_clsx, classes.hasFile, file), _clsx))
  }, getRootProps(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, getInputProps(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  })), /*#__PURE__*/_react.default.createElement(_core.Box, {
    component: "img",
    alt: "select file",
    src: "/static/illustrations/illustration_upload.svg",
    sx: {
      height: 160
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }), /*#__PURE__*/_react.default.createElement(_core.Box, {
    sx: {
      ml: {
        md: 5
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    gutterBottom: true,
    variant: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, "Drop or Select file"), caption ? /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, caption) : /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, "Drop files here or click\xA0", /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "body2",
    component: "span",
    sx: {
      color: 'primary.main'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
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
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  })));
}

var _default = UploadSingleFile;
exports.default = _default;