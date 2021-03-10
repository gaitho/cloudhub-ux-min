"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _clsx = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDraftWysiwyg = require("react-draft-wysiwyg");

var _EditorToolbar = require("./EditorToolbar");

var _styles = require("cloudhub-components/dist/mui/styles");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Editor/DraftEditor/index.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  var isLight = theme.palette.mode === 'light';
  var isRTL = theme.direction === 'rtl';
  return {
    root: {
      borderRadius: theme.shape.borderRadius,
      border: "solid 1px ".concat(theme.palette.grey[50032]),
      // Toggle
      '& .toggle': {
        border: 'none',
        borderRadius: 6,
        background: 'transparent',
        '&.rdw-option-disabled': {
          opacity: theme.palette.action.disabledOpacity
        },
        '& img': {
          width: 16,
          height: 16,
          filter: isLight ? 'none' : 'invert(100%)'
        },
        '&[aria-selected="true"]': {
          boxShadow: 'none',
          background: theme.palette.action.selected
        },
        '&:hover': {
          boxShadow: 'none',
          background: theme.palette.action.hover
        }
      },
      // Dropdown
      '& .dropdown': {
        minWidth: 56,
        borderRadius: 6,
        boxShadow: 'none',
        background: 'transparent',
        border: "solid 1px ".concat(theme.palette.grey[50032]),
        '&:hover': {
          boxShadow: 'none',
          background: theme.palette.action.hover
        },
        '& .rdw-dropdown-selectedtext': {
          color: theme.palette.text.primary
        },
        '& .rdw-dropdown-carettoopen': {
          right: isRTL && '10%',
          left: isRTL && 'auto',
          borderTop: "solid 6px ".concat(theme.palette.text.primary)
        },
        '& .rdw-dropdown-carettoclose': {
          borderBottom: "solid 6px ".concat(theme.palette.text.primary)
        }
      },
      '& .dropdown__option': {
        width: '100%',
        border: 'none',
        marginTop: theme.spacing(1),
        padding: theme.spacing(1, 0),
        boxShadow: theme.shadows[25].z20,
        borderRadius: theme.shape.borderRadius,
        background: theme.palette.background.paper,
        '& .rdw-dropdownoption-default': {
          fontSize: 14,
          minHeight: 'auto',
          padding: theme.spacing(0.5, 2)
        },
        '& .rdw-dropdownoption-active': {
          background: theme.palette.action.selected
        },
        '& .rdw-dropdownoption-highlighted': {
          background: theme.palette.action.hover
        }
      },
      // Popup
      '& .popup': {
        right: 0,
        padding: 0,
        left: 'auto',
        border: 'none',
        overflow: 'hidden',
        boxShadow: theme.shadows[25].z20,
        borderRadius: theme.shape.borderRadius,
        background: theme.palette.background.paper,
        // Action
        '& .rdw-link-modal-buttonsection, .rdw-embedded-modal-btn-section, .rdw-image-modal-btn-section': {
          margin: 0,
          display: 'flex',
          marginTop: theme.spacing(2),
          justifyContent: 'space-between',
          '& button': {
            margin: 0,
            fontSize: 13,
            border: 'none',
            fontWeight: 'bold',
            width: 'calc(50% - 4px)',
            color: theme.palette.common.white,
            background: theme.palette.primary.main,
            borderRadius: theme.shape.borderRadius,
            '&:disabled': {
              color: theme.palette.action.disabled,
              background: theme.palette.action.disabledBackground
            },
            '&:last-child': {
              background: 'transparent',
              color: theme.palette.text.primary
            },
            '&:hover': {
              boxShadow: 'none'
            },
            '&:active': {
              boxShadow: 'none'
            }
          }
        },
        // Input
        '& input': {
          height: 26,
          fontSize: 14,
          background: 'transparent',
          padding: theme.spacing(0, 1.5),
          color: theme.palette.text.primary,
          borderRadius: theme.shape.borderRadius,
          border: "solid 1px ".concat(theme.palette.grey[50032])
        }
      },
      // Popup Color Picker
      '& .popup__colorpicker': {
        padding: 0,
        '& .rdw-colorpicker-modal-header': {
          padding: theme.spacing(1),
          background: theme.palette.grey[50012],
          '& .rdw-colorpicker-modal-style-label': {
            fontSize: 13,
            padding: theme.spacing(0.75, 0),
            color: theme.palette.text.secondary,
            borderRadius: theme.shape.borderRadius,
            fontWeight: theme.typography.fontWeightMedium
          },
          '& .rdw-colorpicker-modal-style-label-active': {
            borderBottom: 'none',
            boxShadow: theme.shadows[25].z8,
            color: theme.palette.text.primary,
            background: theme.palette.common.white
          }
        },
        '& .rdw-colorpicker-modal-options': {
          margin: 0,
          padding: theme.spacing(1.5)
        },
        '& .rdw-colorpicker-option': {
          margin: 4,
          width: 20,
          height: 20,
          minWidth: 20,
          borderRadius: 6,
          overflow: 'hidden',
          position: 'relative',
          '&:hover': {
            boxShadow: 'none'
          },
          '&:before': {
            zIndex: 9,
            fontSize: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            borderRadius: 6,
            content: '"\\2713"',
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.common.white,
            fontWeight: theme.typography.fontWeightBold,
            boxShadow: 'inset 0 0 3px 0 rgba(0,0,0,0.12)'
          },
          '&[aria-selected="true"]': {
            boxShadow: 'none',
            borderRadius: '50%',
            '&:before': {
              fontSize: 12
            }
          }
        },
        '& .rdw-colorpicker-cube': {
          border: 'none'
        }
      },
      // Popup Link
      '& .popup__link': {
        height: 'auto',
        padding: theme.spacing(2),
        '& .rdw-link-modal-label': {
          fontSize: 13,
          fontWeight: theme.typography.fontWeightMedium
        },
        '& .rdw-link-modal-input': {
          marginTop: 4,
          marginBottom: 12
        },
        '& .rdw-link-modal-target-option': {
          display: 'flex',
          marginBottom: 0,
          alignItems: 'center',
          '& > span': {
            fontSize: 14,
            marginLeft: theme.spacing(1)
          }
        }
      },
      // Popup Emoji
      '& .popup__emoji': {
        overflow: 'auto',
        padding: theme.spacing(1)
      },
      // Popup Embedded
      '& .popup__embedded': {
        height: 'auto',
        '& .rdw-embedded-modal-header': {
          padding: theme.spacing(1),
          background: theme.palette.grey[50012],
          '& .rdw-embedded-modal-header-label': {
            display: 'none'
          },
          '& .rdw-embedded-modal-header-option': {
            fontSize: 13,
            padding: theme.spacing(0.75, 0),
            color: theme.palette.text.secondary,
            borderRadius: theme.shape.borderRadius,
            fontWeight: theme.typography.fontWeightMedium
          }
        },
        '& .rdw-embedded-modal-link-section': {
          padding: theme.spacing(2, 2, 0)
        },
        '& .rdw-embedded-modal-btn-section': {
          padding: theme.spacing(0, 2, 2)
        }
      },
      // Popup Image
      '& .popup__image': {
        padding: 0,
        '& .rdw-image-modal-header': {
          margin: 0,
          zIndex: 9,
          fontSize: 13,
          padding: theme.spacing(1),
          background: theme.palette.grey[50012],
          fontWeight: theme.typography.fontWeightMedium,
          '& .rdw-image-modal-header-option': {
            position: 'relative',
            padding: theme.spacing(0.75, 0)
          },
          '& .rdw-image-modal-header-label': {
            margin: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            position: 'absolute',
            background: 'transparent'
          },
          '& .rdw-image-modal-header-label-highlighted': {
            zIndex: -1,
            boxShadow: theme.shadows[25].z8,
            background: theme.palette.common.white,
            borderRadius: theme.shape.borderRadius
          }
        },
        '& .rdw-image-modal-upload-option': {
          margin: 0,
          outline: 'none',
          background: 'none',
          padding: theme.spacing(2)
        },
        '& .rdw-image-modal-upload-option-label': {
          fontSize: 13,
          textAlign: 'center',
          color: theme.palette.text.disabled,
          borderRadius: theme.shape.borderRadius,
          border: "dashed 1px ".concat(theme.palette.grey[50032])
        },
        '& .rdw-image-modal-btn-section': {
          padding: theme.spacing(0, 2, 2)
        },
        '& .rdw-image-modal-size, .rdw-image-modal-url-section': {
          padding: theme.spacing(0, 2)
        }
      }
    },
    toolbar: {
      border: 'none',
      marginBottom: 0,
      background: 'transparent',
      borderBottom: "solid 1px ".concat(theme.palette.grey[50032])
    },
    editor: {
      minHeight: 200,
      padding: theme.spacing(0, 2),
      '& .public-DraftEditorPlaceholder-root': {
        color: theme.palette.text.disabled
      }
    }
  };
}); // ----------------------------------------------------------------------

DraftEditor.propTypes = {
  className: _propTypes.default.string
};

function DraftEditor(_ref) {
  var className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["className"]);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_reactDraftWysiwyg.Editor, (0, _extends2.default)({
    wrapperClassName: (0, _clsx.default)(classes.root, className),
    toolbarClassName: classes.toolbar,
    editorClassName: classes.editor,
    toolbar: _EditorToolbar.editorToolbar,
    placeholder: "Write something awesome..."
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 5
    }
  }));
}

var _default = DraftEditor;
exports.default = _default;