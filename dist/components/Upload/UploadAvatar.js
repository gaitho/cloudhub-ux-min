"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _defineProperty2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _regenerator = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _clsx3 = _interopRequireDefault(require("clsx"));

var _axios = _interopRequireDefault(require("axios"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("@iconify/react");

var _config = require("src/config");

var _reactDropzone = require("react-dropzone");

var _formatNumber = require("src/utils/formatNumber");

var _react2 = _interopRequireWildcard(require("react"));

var _useIsMountedRef = _interopRequireDefault(require("src/hooks/useIsMountedRef"));

var _roundAddAPhoto = _interopRequireDefault(require("@iconify-icons/ic/round-add-a-photo"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Upload/UploadAvatar.js";
// ----------------------------------------------------------------------
var CLOUDINARY_KEY = _config.cloudinaryConfig.cloudinaryKey;
var CLOUDINARY_PRESET = _config.cloudinaryConfig.cloudinaryPreset;
var CLOUDINARY_URL = _config.cloudinaryConfig.cloudinaryUrl;
var PHOTO_SIZE = 3145728; // bytes

var FILE_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      width: 144,
      height: 144,
      margin: 'auto',
      borderRadius: '50%',
      padding: theme.spacing(1),
      border: "1px dashed ".concat(theme.palette.grey[50032])
    },
    dropZone: {
      zIndex: 0,
      width: '100%',
      height: '100%',
      outline: 'none',
      display: 'flex',
      overflow: 'hidden',
      borderRadius: '50%',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      '& > *': {
        width: '100%',
        height: '100%'
      },
      '&:hover': {
        cursor: 'pointer',
        '& $placeholder': {
          zIndex: 9
        }
      }
    },
    loading: {
      zIndex: 99,
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      justifyContent: 'center',
      backgroundColor: (0, _styles.alpha)(theme.palette.grey[900], 0.72)
    },
    placeholder: {
      display: 'flex',
      position: 'absolute',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.background.neutral,
      transition: theme.transitions.create('opacity', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
      }),
      '&:hover': {
        opacity: 0.72
      }
    },
    hover: {
      opacity: 0,
      color: theme.palette.common.white,
      backgroundColor: theme.palette.grey[900],
      '&:hover': {
        opacity: 0.8
      }
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

UploadAvatar.propTypes = {
  disabled: _propTypes.default.bool,
  caption: _propTypes.default.string,
  error: _propTypes.default.bool,
  file: _propTypes.default.object,
  setFile: _propTypes.default.func,
  className: _propTypes.default.string
};

function UploadAvatar(_ref) {
  var _clsx;

  var disabled = _ref.disabled,
      caption = _ref.caption,
      _ref$error = _ref.error,
      error = _ref$error === void 0 ? false : _ref$error,
      file = _ref.value,
      setFile = _ref.onChange,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["disabled", "caption", "error", "value", "onChange", "className"]);
  var classes = useStyles();

  var _useState = (0, _react2.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = (0, _react2.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isError = _useState4[0],
      setIsError = _useState4[1];

  var isMountedRef = (0, _useIsMountedRef.default)();
  var handleDrop = (0, _react2.useCallback)( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(acceptedFiles) {
      var file, checkSize, checkType, formData;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              file = acceptedFiles[0];
              checkSize = file.size < PHOTO_SIZE;
              checkType = FILE_FORMATS.includes(file.type);

              if (!checkSize) {
                setIsError('size-invalid');
              }

              if (!checkType) {
                setIsError('type-invalid');
              }

              _context.prev = 5;

              if (!(checkSize && checkType)) {
                _context.next = 14;
                break;
              }

              setIsLoading(true);
              formData = new FormData();
              formData.append('file', file);
              formData.append('folder', 'upload_minimal/avatar');
              formData.append('upload_preset', CLOUDINARY_PRESET);
              formData.append('api_key', CLOUDINARY_KEY);
              return _context.abrupt("return", _axios.default.post(CLOUDINARY_URL, formData, {
                headers: {
                  'X-Requested-With': 'XMLHttpRequest'
                }
              }).then(function (response) {
                var data = response.data;

                if (isMountedRef.current) {
                  setFile(data.secure_url);
                  setIsLoading(false);
                  setIsError(null);
                }
              }));

            case 14:
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](5);
              console.error(_context.t0);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 16]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [isMountedRef, setFile]);

  var _useDropzone = (0, _reactDropzone.useDropzone)({
    onDrop: handleDrop,
    multiple: false,
    disabled: disabled
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      isDragReject = _useDropzone.isDragReject,
      isDragAccept = _useDropzone.isDragAccept;

  return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement("div", (0, _extends2.default)({
    className: (0, _clsx3.default)(classes.root, className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react2.default.createElement("div", (0, _extends2.default)({
    className: (0, _clsx3.default)(classes.dropZone, (_clsx = {}, (0, _defineProperty2.default)(_clsx, classes.isDragActive, isDragActive), (0, _defineProperty2.default)(_clsx, classes.isDragAccept, isDragAccept), (0, _defineProperty2.default)(_clsx, classes.isDragReject, isDragReject || error), _clsx))
  }, getRootProps(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }), /*#__PURE__*/_react2.default.createElement("input", (0, _extends2.default)({}, getInputProps(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  })), isLoading && /*#__PURE__*/_react2.default.createElement(_core.Box, {
    className: classes.loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  }, /*#__PURE__*/_react2.default.createElement(_core.CircularProgress, {
    size: 32,
    thickness: 2.4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 15
    }
  })), file && /*#__PURE__*/_react2.default.createElement(_core.Box, {
    component: "img",
    alt: "avatar",
    src: file,
    sx: {
      zIndex: 8,
      objectFit: 'cover'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  }), /*#__PURE__*/_react2.default.createElement("div", {
    className: (0, _clsx3.default)(classes.placeholder, (0, _defineProperty2.default)({}, classes.hover, file)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react2.default.createElement(_core.Box, {
    component: _react.Icon,
    icon: _roundAddAPhoto.default,
    sx: {
      width: 24,
      height: 24,
      mb: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  }), /*#__PURE__*/_react2.default.createElement(_core.Typography, {
    variant: "caption",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }
  }, file ? 'Update photo' : 'Upload photo')))), /*#__PURE__*/_react2.default.createElement(_core.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }, isError === 'size-invalid' && /*#__PURE__*/_react2.default.createElement(_core.FormHelperText, {
    error: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  }, "File is larger than ".concat((0, _formatNumber.fData)(PHOTO_SIZE))), isError === 'type-invalid' && /*#__PURE__*/_react2.default.createElement(_core.FormHelperText, {
    error: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 11
    }
  }, "File type must be *.jpeg, *.jpg, *.png, *.gif")), /*#__PURE__*/_react2.default.createElement(_core.Typography, {
    variant: "caption",
    sx: {
      mt: 2,
      mb: 5,
      mx: 'auto',
      display: 'block',
      textAlign: 'center',
      color: 'text.secondary'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }
  }, caption ? caption : /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, "Allowed *.jpeg, *.jpg, *.png, *.gif", /*#__PURE__*/_react2.default.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }
  }), " Max size of ", (0, _formatNumber.fData)(PHOTO_SIZE))));
}

var _default = UploadAvatar;
exports.default = _default;