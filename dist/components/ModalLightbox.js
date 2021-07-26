"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("react-image-lightbox/style.css");

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactImageLightbox = _interopRequireDefault(require("react-image-lightbox"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _excluded = ["images", "photoIndex", "setPhotoIndex", "isOpen", "onClose", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  var isRTL = theme.direction === 'rtl';

  var backgroundIcon = function backgroundIcon(iconName) {
    return {
      backgroundSize: '24px 24px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: (0, _styles.alpha)(theme.palette.grey['900'], 0.8),
      backgroundImage: "url(\"/static/icons/controls/".concat(iconName, ".svg\")")
    };
  };

  return {
    root: {
      backdropFilter: 'blur(8px)',
      backgroundColor: (0, _styles.alpha)(theme.palette.grey['900'], 0.88),
      // Toolbar
      '& .ril__toolbar': {
        height: 'auto !important',
        padding: theme.spacing(2, 3),
        backgroundColor: 'transparent'
      },
      '& .ril__toolbarLeftSide': {
        display: 'none'
      },
      '& .ril__toolbarRightSide': {
        height: 'auto !important',
        padding: 0,
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        '& li': {
          display: 'flex',
          alignItems: 'center'
        },
        '& li:first-child': {
          flexGrow: 1
        },
        '& li:not(:first-child)': {
          width: theme.spacing(5),
          height: theme.spacing(5),
          justifyContent: 'center',
          marginLeft: theme.spacing(1),
          borderRadius: theme.shape.borderRadius
        }
      },
      // Button
      '& button:focus': {
        outline: 'none'
      },
      '& .ril__toolbarRightSide button': {
        width: '100%',
        height: '100%',
        '&.ril__zoomInButton': backgroundIcon('maximize-outline'),
        '&.ril__zoomOutButton': backgroundIcon('minimize-outline'),
        '&.ril__closeButton': backgroundIcon('close')
      },
      '& .ril__navButtons': {
        padding: theme.spacing(3),
        borderRadius: theme.shape.borderRadiusSm,
        '&.ril__navButtonPrev': _objectSpread({
          left: theme.spacing(2),
          right: 'auto'
        }, backgroundIcon(isRTL ? 'arrow-ios-forward' : 'arrow-ios-back')),
        '&.ril__navButtonNext': _objectSpread({
          right: theme.spacing(2),
          left: 'auto'
        }, backgroundIcon(isRTL ? 'arrow-ios-back' : 'arrow-ios-forward'))
      }
    }
  };
}); // ----------------------------------------------------------------------

ModalLightbox.propTypes = {
  images: _propTypes.default.array.isRequired,
  photoIndex: _propTypes.default.number,
  setPhotoIndex: _propTypes.default.func,
  isOpen: _propTypes.default.bool,
  onClose: _propTypes.default.func,
  className: _propTypes.default.string
};

function ModalLightbox(_ref) {
  var images = _ref.images,
      photoIndex = _ref.photoIndex,
      setPhotoIndex = _ref.setPhotoIndex,
      isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  (0, _react.useEffect)(function () {
    if (isOpen) {
      return document.body.style.overflow = 'hidden';
    }

    return document.body.style.overflow = 'unset';
  }, [isOpen]);

  var showIndex = /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "subtitle2"
  }, "".concat(photoIndex + 1, " / ").concat(images.length));

  var disabledRTL = function disabledRTL() {
    return document.querySelector('.ril__inner').dir = 'ltr';
  };

  var toolbarButtons = [showIndex];
  var customStyles = {
    overlay: {
      zIndex: 9999
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isOpen && /*#__PURE__*/_react.default.createElement(_reactImageLightbox.default, _extends({
    onAfterOpen: disabledRTL,
    mainSrc: images[photoIndex],
    nextSrc: images[(photoIndex + 1) % images.length],
    prevSrc: images[(photoIndex + images.length - 1) % images.length],
    onCloseRequest: onClose,
    onMovePrevRequest: function onMovePrevRequest() {
      return setPhotoIndex((photoIndex + images.length - 1) % images.length);
    },
    onMoveNextRequest: function onMoveNextRequest() {
      return setPhotoIndex((photoIndex + 1) % images.length);
    },
    toolbarButtons: toolbarButtons,
    reactModalStyle: customStyles,
    wrapperClassName: (0, _clsx.default)(classes.root, className)
  }, other)));
}

var _default = ModalLightbox;
exports.default = _default;