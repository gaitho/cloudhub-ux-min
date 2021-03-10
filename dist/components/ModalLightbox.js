"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactImageLightbox = _interopRequireDefault(require("react-image-lightbox"));

var _styles = require("cloudhub-components/dist/mui/styles");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/ModalLightbox.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  var isRTL = theme.direction === 'rtl';

  var backgroundIcon = function backgroundIcon(iconName) {
    return {
      backgroundSize: '24px 24px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: (0, _styles.alpha)(theme.palette.grey[900], 0.8),
      backgroundImage: "url(\"/static/icons/controls/".concat(iconName, ".svg\")")
    };
  };

  return {
    root: {
      backdropFilter: 'blur(8px)',
      backgroundColor: (0, _styles.alpha)(theme.palette.grey[900], 0.88),
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
        '&.ril__navButtonPrev': (0, _objectSpread2.default)({
          left: theme.spacing(2),
          right: 'auto'
        }, backgroundIcon(isRTL ? 'arrow-ios-forward' : 'arrow-ios-back')),
        '&.ril__navButtonNext': (0, _objectSpread2.default)({
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
      other = (0, _objectWithoutProperties2.default)(_ref, ["images", "photoIndex", "setPhotoIndex", "isOpen", "onClose", "className"]);
  var classes = useStyles();
  (0, _react.useEffect)(function () {
    if (isOpen) {
      return document.body.style.overflow = 'hidden';
    }

    return document.body.style.overflow = 'unset';
  }, [isOpen]);

  var showIndex = /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "subtitle2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isOpen && /*#__PURE__*/_react.default.createElement(_reactImageLightbox.default, (0, _extends2.default)({
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
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  })));
}

var _default = ModalLightbox;
exports.default = _default;