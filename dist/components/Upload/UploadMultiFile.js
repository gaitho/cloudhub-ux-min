"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _clsx3 = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("@iconify/react");

var _react2 = _interopRequireWildcard(require("react"));

var _reactDropzone = require("react-dropzone");

var _formatNumber = require("src/utils/formatNumber");

var _fileFill = _interopRequireDefault(require("@iconify-icons/eva/file-fill"));

var _closeFill = _interopRequireDefault(require("@iconify-icons/eva/close-fill"));

var _framerMotion = require("framer-motion");

var _Animate = require("src/components/Animate");

var _styles = require("cloudhub-components/dist/mui/styles");

var _core = require("@material-ui/core");

var _theme = require("src/theme");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Upload/UploadMultiFile.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      width: '100%'
    },
    dropZone: (0, _defineProperty2.default)({
      outline: 'none',
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: theme.spacing(5, 1),
      borderRadius: theme.shape.borderRadius,
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
  var _clsx,
      _this = this;

  var caption = _ref.caption,
      _ref$error = _ref.error,
      error = _ref$error === void 0 ? false : _ref$error,
      files = _ref.value,
      setFiles = _ref.onChange,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["caption", "error", "value", "onChange", "className"]);
  var classes = useStyles();
  var hasFile = files.length > 0;
  var handleDrop = (0, _react2.useCallback)(function (acceptedFiles) {
    setFiles(acceptedFiles);
  }, [setFiles]);

  var handleRemoveAll = function handleRemoveAll() {
    setFiles([]);
  };

  var handleRemoveFile = function handleRemoveFile(file) {
    var newFiles = (0, _toConsumableArray2.default)(files);
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

  return /*#__PURE__*/_react2.default.createElement("div", (0, _extends2.default)({
    className: (0, _clsx3.default)(classes.root, className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react2.default.createElement("div", (0, _extends2.default)({
    className: (0, _clsx3.default)(classes.dropZone, (_clsx = {}, (0, _defineProperty2.default)(_clsx, classes.isDragActive, isDragActive), (0, _defineProperty2.default)(_clsx, classes.isDragAccept, isDragAccept), (0, _defineProperty2.default)(_clsx, classes.isDragReject, isDragReject || error), _clsx))
  }, getRootProps(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react2.default.createElement("input", (0, _extends2.default)({}, getInputProps(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  })), /*#__PURE__*/_react2.default.createElement(_core.Box, {
    component: "img",
    alt: "select file",
    src: "/static/illustrations/illustration_upload.svg",
    sx: {
      height: 160
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }), /*#__PURE__*/_react2.default.createElement(_core.Box, {
    sx: {
      ml: {
        md: 5
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react2.default.createElement(_core.Typography, {
    gutterBottom: true,
    variant: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, "Drop or Select file"), caption ? /*#__PURE__*/_react2.default.createElement(_core.Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, caption) : /*#__PURE__*/_react2.default.createElement(_core.Typography, {
    variant: "body2",
    sx: {
      color: 'text.secondary'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, "Drop files here or click\xA0", /*#__PURE__*/_react2.default.createElement(_core.Link, {
    underline: "always",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }, "browse"), "\xA0thorough your machine"))), /*#__PURE__*/_react2.default.createElement(_core.List, {
    disablePadding: true,
    className: (0, _clsx3.default)((0, _defineProperty2.default)({}, classes.list, hasFile)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react2.default.createElement(_framerMotion.AnimatePresence, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, files.map(function (file) {
    return /*#__PURE__*/_react2.default.createElement(_core.ListItem, (0, _extends2.default)({
      key: file.name,
      component: _framerMotion.motion.div,
      className: classes.listItem
    }, _Animate.varFadeInRight, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }
    }), /*#__PURE__*/_react2.default.createElement(_core.ListItemIcon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 15
      }
    }, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
      icon: _fileFill.default,
      width: 32,
      height: 32,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }
    })), /*#__PURE__*/_react2.default.createElement(_core.ListItemText, {
      primary: file.name,
      secondary: (0, _formatNumber.fData)(file.size),
      primaryTypographyProps: {
        variant: 'subtitle2'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 15
      }
    }), /*#__PURE__*/_react2.default.createElement(_core.ListItemSecondaryAction, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 15
      }
    }, /*#__PURE__*/_react2.default.createElement(_theme.MIconButton, {
      edge: "end",
      size: "small",
      onClick: function onClick() {
        return handleRemoveFile(file);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }
    }, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
      icon: _closeFill.default,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 19
      }
    }))));
  }))), hasFile && /*#__PURE__*/_react2.default.createElement(_core.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'flex-end',
      '& > *': {
        ml: 1.5
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react2.default.createElement(_core.Button, {
    onClick: handleRemoveAll,
    sx: {
      ml: 1.5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 11
    }
  }, "Remove all"), /*#__PURE__*/_react2.default.createElement(_core.Button, {
    variant: "contained",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 11
    }
  }, "Upload files")));
}

var _default = UploadMultiFile;
exports.default = _default;