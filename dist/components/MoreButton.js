"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("@iconify/react");

var _copyFill = _interopRequireDefault(require("@iconify-icons/eva/copy-fill"));

var _react2 = _interopRequireWildcard(require("react"));

var _archiveFill = _interopRequireDefault(require("@iconify-icons/eva/archive-fill"));

var _downloadFill = _interopRequireDefault(require("@iconify-icons/eva/download-fill"));

var _moreVerticalFill = _interopRequireDefault(require("@iconify-icons/eva/more-vertical-fill"));

var _filePdfFilled = _interopRequireDefault(require("@iconify-icons/ant-design/file-pdf-filled"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    menu: {
      width: 220,
      maxWidth: '100%'
    }
  };
}); // ----------------------------------------------------------------------

function MoreButton(_ref) {
  var className = _ref.className,
      other = _objectWithoutProperties(_ref, ["className"]);

  var classes = useStyles();
  var ref = (0, _react2.useRef)(null);

  var _useState = (0, _react2.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var handleClickImport = function handleClickImport() {
    alert('Hello Import!!');
    setIsOpen(false);
  };

  var handleClickCopy = function handleClickCopy() {
    alert('Hello Copy!!');
    setIsOpen(false);
  };

  var handleClickExport = function handleClickExport() {
    alert('Hello Export!!');
    setIsOpen(false);
  };

  var handleClickArchive = function handleClickArchive() {
    alert('Hello Archive!!');
    setIsOpen(false);
  };

  var OPTIONS = [{
    text: 'Import',
    icon: _downloadFill.default,
    action: handleClickImport
  }, {
    text: 'Copy',
    icon: _copyFill.default,
    action: handleClickCopy
  }, {
    text: 'Export',
    icon: _filePdfFilled.default,
    action: handleClickExport
  }, {
    text: 'Archive',
    icon: _archiveFill.default,
    action: handleClickArchive
  }];
  return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement(_core.IconButton, _extends({
    ref: ref,
    className: className,
    onClick: function onClick() {
      return setIsOpen(true);
    }
  }, other), /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    icon: _moreVerticalFill.default,
    width: 20,
    height: 20
  })), /*#__PURE__*/_react2.default.createElement(_core.Menu, {
    open: isOpen,
    anchorEl: ref.current,
    onClose: function onClose() {
      return setIsOpen(false);
    },
    PaperProps: {
      className: classes.menu
    },
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    }
  }, OPTIONS.map(function (item) {
    return /*#__PURE__*/_react2.default.createElement(_core.MenuItem, {
      key: item.text,
      onClick: item.action,
      sx: {
        color: 'text.secondary'
      }
    }, /*#__PURE__*/_react2.default.createElement(_core.ListItemIcon, null, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
      icon: item.icon,
      width: 24,
      height: 24
    })), /*#__PURE__*/_react2.default.createElement(_core.ListItemText, {
      primary: item.text,
      primaryTypographyProps: {
        variant: 'body2'
      }
    }));
  })));
}

var _default = (0, _react2.memo)(MoreButton);

exports.default = _default;