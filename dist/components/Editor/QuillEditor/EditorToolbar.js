"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.formats = exports.redoChange = exports.undoChange = void 0;

var _objectSpread2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

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

var _styles = require("cloudhub-components/dist/mui/styles");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Editor/QuillEditor/EditorToolbar.js",
    _this = void 0;

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
    height: 18,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
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
        borderBottom: "solid 1px ".concat(theme.palette.grey[50032]),
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
        '& .ql-picker-label': (0, _objectSpread2.default)((0, _objectSpread2.default)({}, theme.typography.subtitle2), {}, {
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
  var _this2 = this;

  var id = _ref.id,
      isSimple = _ref.isSimple,
      className = _ref.className;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.root, className),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-formats",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 9
    }
  }, !isSimple && /*#__PURE__*/_react.default.createElement("select", {
    className: "ql-font",
    defaultValue: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 13
    }
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 15
    }
  }, "Font"), FONT_FAMILY.map(function (font) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: font,
      value: font,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 17
      }
    }, font);
  })), !isSimple && /*#__PURE__*/_react.default.createElement("select", {
    className: "ql-size",
    defaultValue: "16px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 13
    }
  }, FONT_SIZE.map(function (size) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: size,
      value: size,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 17
      }
    }, size);
  })), /*#__PURE__*/_react.default.createElement("select", {
    className: "ql-header",
    defaultValue: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 11
    }
  }, HEADINGS.map(function (heading, index) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: heading,
      value: index + 1,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 15
      }
    }, heading);
  }), /*#__PURE__*/_react.default.createElement("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 13
    }
  }, "Normal"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-formats",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 11
    }
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-italic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 11
    }
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 11
    }
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-strike",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 11
    }
  })), !isSimple && /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-formats",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react.default.createElement("select", {
    className: "ql-color",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 13
    }
  }), /*#__PURE__*/_react.default.createElement("select", {
    className: "ql-background",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 13
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-formats",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-list",
    value: "ordered",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 11
    }
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-list",
    value: "bullet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 11
    }
  }), !isSimple && /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-indent",
    value: "-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 25
    }
  }), !isSimple && /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-indent",
    value: "+1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 25
    }
  })), !isSimple && /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-formats",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-script",
    value: "super",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 13
    }
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-script",
    value: "sub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 13
    }
  })), !isSimple && /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-formats",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-code-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 13
    }
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-blockquote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 13
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-formats",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-direction",
    value: "rtl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 11
    }
  }), /*#__PURE__*/_react.default.createElement("select", {
    className: "ql-align",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 11
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-formats",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 11
    }
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 11
    }
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-video",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 11
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-formats",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 9
    }
  }, !isSimple && /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-formula",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 25
    }
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-clean",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 11
    }
  })), !isSimple && /*#__PURE__*/_react.default.createElement("div", {
    className: "ql-formats",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-undo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 13
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    icon: _roundUndo.default,
    width: 18,
    height: 18,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 15
    }
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "ql-redo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 13
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    icon: _roundRedo.default,
    width: 18,
    height: 18,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 15
    }
  })))));
}

var _default = EditorToolbar;
exports.default = _default;