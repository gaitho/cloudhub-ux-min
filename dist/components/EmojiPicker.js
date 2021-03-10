"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _defineProperty2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

require("emoji-mart/css/emoji-mart.css");

var _clsx2 = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emojiMart2 = require("emoji-mart");

var _react = require("@iconify/react");

var _react2 = _interopRequireWildcard(require("react"));

var _smilingFaceFill = _interopRequireDefault(require("@iconify-icons/eva/smiling-face-fill"));

var _styles = require("cloudhub-components/dist/mui/styles");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/EmojiPicker.js";
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
      boxShadow: theme.shadows[25].z20,
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
        borderColor: theme.palette.grey[50032],
        '&::placeholder': (0, _objectSpread2.default)((0, _objectSpread2.default)({}, theme.typography.body2), {}, {
          color: theme.palette.text.disabled
        })
      },
      '& .emoji-mart-search-icon svg': {
        opacity: 1,
        fill: theme.palette.text.disabled
      },
      '& .emoji-mart-category-label span': (0, _objectSpread2.default)((0, _objectSpread2.default)({}, theme.typography.subtitle2), {}, {
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
      other = (0, _objectWithoutProperties2.default)(_ref, ["disabled", "value", "setValue", "alignRight", "className"]);
  var classes = useStyles();
  var theme = (0, _styles.useTheme)();

  var _useState = (0, _react2.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
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
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 7
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
    onClickAway: handleClickAway,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react2.default.createElement("div", (0, _extends2.default)({
    className: (0, _clsx2.default)(classes.root, className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react2.default.createElement("div", {
    className: (0, _clsx2.default)(classes.picker, (0, _defineProperty2.default)({}, classes.alignRight, alignRight)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, emojiPicker), /*#__PURE__*/_react2.default.createElement(_core.IconButton, {
    disabled: disabled,
    size: "small",
    onClick: triggerPicker,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    icon: _smilingFaceFill.default,
    width: 20,
    height: 20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }))));
}

var _default = EmojiPicker;
exports.default = _default;