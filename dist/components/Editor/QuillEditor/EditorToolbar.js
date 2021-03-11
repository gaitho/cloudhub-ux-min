"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.formats = exports.redoChange = exports.undoChange = void 0;

var _clsx = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactQuill = require("react-quill");

var _react2 = require("@iconify/react");

var _server = _interopRequireDefault(require("react-dom/server"));

var _codeFill = _interopRequireDefault(require("@iconify-icons/eva/code-fill"));

var _roundUndo = _interopRequireDefault(require("@iconify-icons/ic/round-undo"));

var _roundRedo = _interopRequireDefault(require("@iconify-icons/ic/round-redo"));

var _link2Fill = _interopRequireDefault(require("@iconify-icons/eva/link-2-fill"));

var _image2Fill = _interopRequireDefault(require("@iconify-icons/eva/image-2-fill"));

var _roundSubscript = _interopRequireDefault(require("@iconify-icons/ic/round-subscript"));

var _roundFunctions = _interopRequireDefault(require("@iconify-icons/ic/round-functions"));

var _roundFormatBold = _interopRequireDefault(require("@iconify-icons/ic/round-format-bold"));

var _roundSuperscript = _interopRequireDefault(require("@iconify-icons/ic/round-superscript"));

var _roundLocalMovies = _interopRequireDefault(require("@iconify-icons/ic/round-local-movies"));

var _roundFormatQuote = _interopRequireDefault(require("@iconify-icons/ic/round-format-quote"));

var _roundFormatClear = _interopRequireDefault(require("@iconify-icons/ic/round-format-clear"));

var _roundFormatItalic = _interopRequireDefault(require("@iconify-icons/ic/round-format-italic"));

var _roundFormatColorFill = _interopRequireDefault(require("@iconify-icons/ic/round-format-color-fill"));

var _roundFormatColorText = _interopRequireDefault(require("@iconify-icons/ic/round-format-color-text"));

var _roundFormatAlignLeft = _interopRequireDefault(require("@iconify-icons/ic/round-format-align-left"));

var _roundFormatUnderlined = _interopRequireDefault(require("@iconify-icons/ic/round-format-underlined"));

var _roundFormatAlignRight = _interopRequireDefault(require("@iconify-icons/ic/round-format-align-right"));

var _roundFormatAlignCenter = _interopRequireDefault(require("@iconify-icons/ic/round-format-align-center"));

var _roundFormatListBulleted = _interopRequireDefault(require("@iconify-icons/ic/round-format-list-bulleted"));

var _roundFormatListNumbered = _interopRequireDefault(require("@iconify-icons/ic/round-format-list-numbered"));

var _roundFormatAlignJustify = _interopRequireDefault(require("@iconify-icons/ic/round-format-align-justify"));

var _roundFormatStrikethrough = _interopRequireDefault(require("@iconify-icons/ic/round-format-strikethrough"));

var _roundFormatIndentDecrease = _interopRequireDefault(require("@iconify-icons/ic/round-format-indent-decrease"));

var _roundFormatIndentIncrease = _interopRequireDefault(require("@iconify-icons/ic/round-format-indent-increase"));

var _roundFormatTextdirectionLToR = _interopRequireDefault(require("@iconify-icons/ic/round-format-textdirection-l-to-r"));

var _roundFormatTextdirectionRToL = _interopRequireDefault(require("@iconify-icons/ic/round-format-textdirection-r-to-l"));

var _styles = require("@material-ui/core/styles");

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
var FONT_FAMILY = ['Roboto', 'Raleway', 'Montserrat', 'Lato', 'Rubik'];
var FONT_SIZE = ['8px', '9px', '10px', '12px', '14px', '16px', '20px', '24px', '32px', '42px', '54px', '68px', '84px', '98px'];
var HEADINGS = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4', 'Heading 5', 'Heading 6'];

var Size = _reactQuill.Quill.import('attributors/style/size');

Size.whitelist = FONT_SIZE;

_reactQuill.Quill.register(Size, true);

var Font = _reactQuill.Quill.import('attributors/style/font');

Font.whitelist = FONT_FAMILY;

_reactQuill.Quill.register(Font, true);

var Icons = _reactQuill.Quill.import('ui/icons');

function renderIcon(icon) {
  return _server.default.renderToString( /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    icon: icon,
    width: 18,
    height: 18
  }));
}

Icons.bold = renderIcon(_roundFormatBold.default);
Icons.italic = renderIcon(_roundFormatItalic.default);
Icons.underline = renderIcon(_roundFormatUnderlined.default);
Icons.strike = renderIcon(_roundFormatStrikethrough.default);
Icons.link = renderIcon(_link2Fill.default);
Icons.image = renderIcon(_image2Fill.default);
Icons.code = renderIcon(_image2Fill.default);
Icons['code-block'] = renderIcon(_codeFill.default);
Icons.list.bullet = renderIcon(_roundFormatListBulleted.default);
Icons.list.ordered = renderIcon(_roundFormatListNumbered.default);
Icons.indent['+1'] = renderIcon(_roundFormatIndentIncrease.default);
Icons.indent['-1'] = renderIcon(_roundFormatIndentDecrease.default);
Icons.script.sub = renderIcon(_roundSubscript.default);
Icons.script.super = renderIcon(_roundSuperscript.default);
Icons.direction[''] = renderIcon(_roundFormatTextdirectionLToR.default);
Icons.direction.rtl = renderIcon(_roundFormatTextdirectionRToL.default);
Icons.color = renderIcon(_roundFormatColorText.default);
Icons.background = renderIcon(_roundFormatColorFill.default);
Icons.video = renderIcon(_roundLocalMovies.default);
Icons.blockquote = renderIcon(_roundFormatQuote.default);
Icons.clean = renderIcon(_roundFormatClear.default);
Icons.formula = renderIcon(_roundFunctions.default);
Icons.align[''] = renderIcon(_roundFormatAlignLeft.default);
Icons.align['center'] = renderIcon(_roundFormatAlignCenter.default);
Icons.align['justify'] = renderIcon(_roundFormatAlignJustify.default);
Icons.align['right'] = renderIcon(_roundFormatAlignRight.default); // ----------------------------------------------------------------------

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var RTL = theme.direction === 'rtl';
  return {
    root: {
      '& .ql-snow.ql-toolbar button:hover .ql-fill, .ql-snow .ql-toolbar button:hover .ql-fill, .ql-snow.ql-toolbar button:focus .ql-fill, .ql-snow .ql-toolbar button:focus .ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill': {
        fill: theme.palette.primary.main
      },
      '& .ql-snow.ql-toolbar button:hover, .ql-snow .ql-toolbar button:hover, .ql-snow.ql-toolbar button:focus, .ql-snow .ql-toolbar button:focus, .ql-snow.ql-toolbar button.ql-active, .ql-snow .ql-toolbar button.ql-active, .ql-snow.ql-toolbar .ql-picker-label:hover, .ql-snow .ql-toolbar .ql-picker-label:hover, .ql-snow.ql-toolbar .ql-picker-label.ql-active, .ql-snow .ql-toolbar .ql-picker-label.ql-active, .ql-snow.ql-toolbar .ql-picker-item:hover, .ql-snow .ql-toolbar .ql-picker-item:hover, .ql-snow.ql-toolbar .ql-picker-item.ql-selected, .ql-snow .ql-toolbar .ql-picker-item.ql-selected': {
        color: theme.palette.primary.main
      },
      '& .ql-snow.ql-toolbar button:hover .ql-stroke, .ql-snow .ql-toolbar button:hover .ql-stroke, .ql-snow.ql-toolbar button:focus .ql-stroke, .ql-snow .ql-toolbar button:focus .ql-stroke, .ql-snow.ql-toolbar button.ql-active .ql-stroke, .ql-snow .ql-toolbar button.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow.ql-toolbar button:hover .ql-stroke-miter, .ql-snow .ql-toolbar button:hover .ql-stroke-miter, .ql-snow.ql-toolbar button:focus .ql-stroke-miter, .ql-snow .ql-toolbar button:focus .ql-stroke-miter, .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter': {
        stroke: theme.palette.primary.main
      },
      '& .ql-stroke': {
        stroke: theme.palette.text.primary
      },
      '& .ql-fill, .ql-stroke.ql-fill': {
        fill: theme.palette.text.primary
      },
      '& .ql-picker, .ql-picker-options, .ql-picker-item, .ql-picker-label, button': {
        '&:focus': {
          outline: 'none'
        }
      },
      '& .ql-toolbar': {
        border: 'none',
        borderBottom: "solid 1px ".concat(theme.palette.grey[500_32]),
        '& .ql-formats': {
          '&:not(:last-child)': {
            marginRight: theme.spacing(2)
          }
        },
        // Button
        '& button': {
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          color: theme.palette.text.primary
        },
        // Select
        '& .ql-picker-label': _objectSpread(_objectSpread({}, theme.typography.subtitle2), {}, {
          color: theme.palette.text.primary
        }),
        '& .ql-picker-label svg': {
          right: RTL && '0 !important',
          left: RTL && 'auto !important'
        },
        '& .ql-color,& .ql-background,& .ql-align ': {
          '& .ql-picker-label': {
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        },
        '& .ql-expanded': {
          '& .ql-picker-label': {
            borderRadius: 4,
            color: theme.palette.text.disabled,
            borderColor: 'transparent !important',
            backgroundColor: theme.palette.action.focus,
            '& .ql-stroke': {
              stroke: theme.palette.text.disabled
            }
          },
          '& .ql-picker-options': {
            padding: 0,
            marginTop: 4,
            border: 'none',
            maxHeight: 200,
            overflow: 'auto',
            boxShadow: theme.shadows[25].z20,
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.background.paper
          },
          '& .ql-picker-item': {
            color: theme.palette.text.primary
          },
          // Align
          '&.ql-align': {
            '& .ql-picker-options': {
              padding: 0,
              display: 'flex'
            },
            '& .ql-picker-item': {
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }
          },
          // Color & Background
          '&.ql-color, &.ql-background': {
            '& .ql-picker-options': {
              padding: 8
            },
            '& .ql-picker-item': {
              margin: 3,
              borderRadius: 4,
              '&.ql-selected': {
                border: 'solid 1px black'
              }
            }
          },
          // Font, Size, Header
          '&.ql-font, &.ql-size, &.ql-header': {
            '& .ql-picker-options': {
              padding: theme.spacing(1, 0)
            },
            '& .ql-picker-item': {
              padding: theme.spacing(0.5, 1.5)
            }
          }
        }
      }
    }
  };
}); // ----------------------------------------------------------------------

var undoChange = function undoChange() {
  _this.quill.history.undo();
};

exports.undoChange = undoChange;

var redoChange = function redoChange() {
  _this.quill.history.redo();
};

exports.redoChange = redoChange;
var formats = ['align', 'background', 'blockquote', 'bold', 'bullet', 'code', 'code-block', 'color', 'direction', 'font', 'formula', 'header', 'image', 'indent', 'italic', 'link', 'list', 'script', 'size', 'strike', 'table', 'underline', 'video'];
exports.formats = formats;
EditorToolbar.propTypes = {
  id: _propTypes.default.string.isRequired,
  isSimple: _propTypes.default.bool,
  className: _propTypes.default.string
};

function EditorToolbar(_ref) {
  var id = _ref.id,
      isSimple = _ref.isSimple,
      className = _ref.className;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.root, className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: id
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-formats"
  }, !isSimple && /*#__PURE__*/_react.default.createElement("select", {
    className: "ql-font",
    defaultValue: ""
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "Font"), FONT_FAMILY.map(function (font) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: font,
      value: font
    }, font);
  })), !isSimple && /*#__PURE__*/_react.default.createElement("select", {
    className: "ql-size",
    defaultValue: "16px"
  }, FONT_SIZE.map(function (size) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: size,
      value: size
    }, size);
  })), /*#__PURE__*/_react.default.createElement("select", {
    className: "ql-header",
    defaultValue: ""
  }, HEADINGS.map(function (heading, index) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: heading,
      value: index + 1
    }, heading);
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "Normal"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-formats"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-bold"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-italic"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-underline"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-strike"
  })), !isSimple && /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-formats"
  }, /*#__PURE__*/_react.default.createElement("select", {
    className: "ql-color"
  }), /*#__PURE__*/_react.default.createElement("select", {
    className: "ql-background"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-formats"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-list",
    value: "ordered"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-list",
    value: "bullet"
  }), !isSimple && /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-indent",
    value: "-1"
  }), !isSimple && /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-indent",
    value: "+1"
  })), !isSimple && /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-formats"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-script",
    value: "super"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-script",
    value: "sub"
  })), !isSimple && /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-formats"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-code-block"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-blockquote"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-formats"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-direction",
    value: "rtl"
  }), /*#__PURE__*/_react.default.createElement("select", {
    className: "ql-align"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-formats"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-link"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-image"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-video"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-formats"
  }, !isSimple && /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-formula"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-clean"
  })), !isSimple && /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-formats"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-undo"
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    icon: _roundUndo.default,
    width: 18,
    height: 18
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-redo"
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    icon: _roundRedo.default,
    width: 18,
    height: 18
  })))));
}

var _default = EditorToolbar;
exports.default = _default;