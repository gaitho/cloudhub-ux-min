"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clsx3 = _interopRequireDefault(require("clsx"));

var _axios = _interopRequireDefault(require("axios"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("@iconify/react");

var _reactDropzone = require("react-dropzone");

var _formatNumber = require("../../utils/formatNumber");

var _react2 = _interopRequireWildcard(require("react"));

var _useIsMountedRef = _interopRequireDefault(require("../../hooks/useIsMountedRef"));

var _roundAddAPhoto = _interopRequireDefault(require("@iconify-icons/ic/round-add-a-photo"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
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
      border: "1px dashed ".concat(theme.palette.grey[500_32])
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
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config,
      other = _objectWithoutProperties(_ref, ["disabled", "caption", "error", "value", "onChange", "className", "config"]);

  var classes = useStyles();

  var _useState = (0, _react2.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = (0, _react2.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      isError = _useState4[0],
      setIsError = _useState4[1];

  var isMountedRef = (0, _useIsMountedRef.default)();
  var handleDrop = (0, _react2.useCallback)( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(acceptedFiles) {
      var file, checkSize, checkType, formData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
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
              formData.append('upload_preset', config.cloudinaryPreset || '');
              formData.append('api_key', config.cloudinaryKey || '');
              return _context.abrupt("return", _axios.default.post(config.cloudinaryUrl || '', formData, {
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

  return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement("div", _extends({
    className: (0, _clsx3.default)(classes.root, className)
  }, other), /*#__PURE__*/_react2.default.createElement("div", _extends({
    className: (0, _clsx3.default)(classes.dropZone, (_clsx = {}, _defineProperty(_clsx, classes.isDragActive, isDragActive), _defineProperty(_clsx, classes.isDragAccept, isDragAccept), _defineProperty(_clsx, classes.isDragReject, isDragReject || error), _clsx))
  }, getRootProps()), /*#__PURE__*/_react2.default.createElement("input", getInputProps()), isLoading && /*#__PURE__*/_react2.default.createElement(_core.Box, {
    className: classes.loading
  }, /*#__PURE__*/_react2.default.createElement(_core.CircularProgress, {
    size: 32,
    thickness: 2.4
  })), file && /*#__PURE__*/_react2.default.createElement(_core.Box, {
    component: "img",
    alt: "avatar",
    src: file,
    sx: {
      zIndex: 8,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/_react2.default.createElement("div", {
    className: (0, _clsx3.default)(classes.placeholder, _defineProperty({}, classes.hover, file))
  }, /*#__PURE__*/_react2.default.createElement(_core.Box, {
    component: _react.Icon,
    icon: _roundAddAPhoto.default,
    sx: {
      width: 24,
      height: 24,
      mb: 1
    }
  }), /*#__PURE__*/_react2.default.createElement(_core.Typography, {
    variant: "caption"
  }, file ? 'Update photo' : 'Upload photo')))), /*#__PURE__*/_react2.default.createElement(_core.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, isError === 'size-invalid' && /*#__PURE__*/_react2.default.createElement(_core.FormHelperText, {
    error: true
  }, "File is larger than ".concat((0, _formatNumber.fData)(PHOTO_SIZE))), isError === 'type-invalid' && /*#__PURE__*/_react2.default.createElement(_core.FormHelperText, {
    error: true
  }, "File type must be *.jpeg, *.jpg, *.png, *.gif")), /*#__PURE__*/_react2.default.createElement(_core.Typography, {
    variant: "caption",
    sx: {
      mt: 2,
      mb: 5,
      mx: 'auto',
      display: 'block',
      textAlign: 'center',
      color: 'text.secondary'
    }
  }, caption ? caption : /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, "Allowed *.jpeg, *.jpg, *.png, *.gif", /*#__PURE__*/_react2.default.createElement("br", null), " Max size of ", (0, _formatNumber.fData)(PHOTO_SIZE))));
}

var _default = UploadAvatar;
exports.default = _default;