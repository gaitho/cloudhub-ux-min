"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clsx = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDraftWysiwyg = require("react-draft-wysiwyg");

var _EditorToolbar = require("./EditorToolbar");

var _styles = require("@material-ui/core/styles");

var _excluded = ["className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  var isLight = theme.palette.mode === 'light';
  var isRTL = theme.direction === 'rtl';
  return {
    root: {
      borderRadius: theme.shape.borderRadius,
      border: "solid 1px ".concat(theme.palette.grey['500_32']),
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
        border: "solid 1px ".concat(theme.palette.grey['500_32']),
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
          border: "solid 1px ".concat(theme.palette.grey['500_32'])
        }
      },
      // Popup Color Picker
      '& .popup__colorpicker': {
        padding: 0,
        '& .rdw-colorpicker-modal-header': {
          padding: theme.spacing(1),
          background: theme.palette.grey['500_12'],
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
          background: theme.palette.grey['500_12'],
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
          background: theme.palette.grey['500_12'],
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
          border: "dashed 1px ".concat(theme.palette.grey['500_32'])
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
      borderBottom: "solid 1px ".concat(theme.palette.grey['500_32'])
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
      other = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_reactDraftWysiwyg.Editor, _extends({
    wrapperClassName: (0, _clsx.default)(classes.root, className),
    toolbarClassName: classes.toolbar,
    editorClassName: classes.editor,
    toolbar: _EditorToolbar.editorToolbar,
    placeholder: "Write something awesome..."
  }, other));
}

var _default = DraftEditor;
exports.default = _default;