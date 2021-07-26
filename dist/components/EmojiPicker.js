"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("emoji-mart/css/emoji-mart.css");

var _clsx2 = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emojiMart2 = require("emoji-mart");

var _react = require("@iconify/react");

var _react2 = _interopRequireWildcard(require("react"));

var _smilingFaceFill = _interopRequireDefault(require("@iconify-icons/eva/smiling-face-fill"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _excluded = ["disabled", "value", "setValue", "alignRight", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      position: 'relative'
    },
    alignRight: {
      right: theme.spacing(-2),
      left: 'auto !important'
    },
    picker: {
      bottom: 40,
      overflow: 'hidden',
      position: 'absolute',
      left: theme.spacing(-2),
      boxShadow: theme.shadows['25'].z20,
      borderRadius: theme.shape.borderRadiusMd,
      '& .emoji-mart': {
        border: 'none',
        backgroundColor: theme.palette.background.paper
      },
      '& .emoji-mart-anchor': {
        color: theme.palette.text.disabled,
        '&:hover, &:focus, &.emoji-mart-anchor-selected': {
          color: theme.palette.text.primary
        }
      },
      '& .emoji-mart-bar': {
        borderColor: theme.palette.divider
      },
      '& .emoji-mart-search input': {
        backgroundColor: 'transparent',
        color: theme.palette.text.primary,
        borderColor: theme.palette.grey['500_32'],
        '&::placeholder': _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
          color: theme.palette.text.disabled
        })
      },
      '& .emoji-mart-search-icon svg': {
        opacity: 1,
        fill: theme.palette.text.disabled
      },
      '& .emoji-mart-category-label span': _objectSpread(_objectSpread({}, theme.typography.subtitle2), {}, {
        backdropFilter: 'blur(8px)',
        color: theme.palette.text.primary,
        backgroundColor: (0, _styles.alpha)(theme.palette.background.paper, 0.8)
      }),
      '& .emoji-mart-title-label': {
        color: theme.palette.text.primary
      },
      '& .emoji-mart-category .emoji-mart-emoji:hover:before': {
        backgroundColor: theme.palette.action.selected
      },
      '& .emoji-mart-emoji': {
        outline: 'none'
      },
      '& .emoji-mart-preview-name': {
        color: theme.palette.text.primary
      },
      '& .emoji-mart-preview-shortname, .emoji-mart-preview-emoticon': {
        color: theme.palette.text.secondary
      }
    }
  };
}); // ----------------------------------------------------------------------

EmojiPicker.propTypes = {
  disabled: _propTypes.default.bool,
  value: _propTypes.default.string,
  setValue: _propTypes.default.func,
  alignRight: _propTypes.default.bool,
  className: _propTypes.default.string
};

function EmojiPicker(_ref) {
  var disabled = _ref.disabled,
      value = _ref.value,
      setValue = _ref.setValue,
      _ref$alignRight = _ref.alignRight,
      alignRight = _ref$alignRight === void 0 ? false : _ref$alignRight,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  var theme = (0, _styles.useTheme)();

  var _useState = (0, _react2.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      emojiPickerState = _useState2[0],
      SetEmojiPicker = _useState2[1];

  var emojiPicker;

  if (emojiPickerState) {
    emojiPicker = /*#__PURE__*/_react2.default.createElement(_emojiMart2.Picker, {
      color: theme.palette.primary.main,
      title: "Pick your emoji\u2026",
      emoji: "point_up",
      onSelect: function onSelect(emoji) {
        return setValue(value + emoji.native);
      }
    });
  }

  var triggerPicker = function triggerPicker(e) {
    e.preventDefault();
    SetEmojiPicker(!emojiPickerState);
  };

  var handleClickAway = function handleClickAway() {
    SetEmojiPicker(false);
  };

  return /*#__PURE__*/_react2.default.createElement(_core.ClickAwayListener, {
    onClickAway: handleClickAway
  }, /*#__PURE__*/_react2.default.createElement("div", _extends({
    className: (0, _clsx2.default)(classes.root, className)
  }, other), /*#__PURE__*/_react2.default.createElement("div", {
    className: (0, _clsx2.default)(classes.picker, _defineProperty({}, classes.alignRight, alignRight))
  }, emojiPicker), /*#__PURE__*/_react2.default.createElement(_core.IconButton, {
    disabled: disabled,
    size: "small",
    onClick: triggerPicker
  }, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    icon: _smilingFaceFill.default,
    width: 20,
    height: 20
  }))));
}

var _default = EmojiPicker;
exports.default = _default;