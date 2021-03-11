"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx3 = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ListItemAvatar = _interopRequireDefault(require("@material-ui/core/ListItemAvatar"));

var _ListItemSecondaryAction = _interopRequireDefault(require("@material-ui/core/ListItemSecondaryAction"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _customhooks = require("cloudhub-components/dist/customhooks");

var _reach = require("cloudhub-components/dist/reach");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {},
    listItem: _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
      height: 48,
      textTransform: 'capitalize',
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
      color: theme.palette.text.secondary
    }),
    isActiveListItem: {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: (0, _styles.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      '&:before': {
        top: 0,
        right: 0,
        width: 3,
        bottom: 0,
        content: "''",
        position: 'absolute',
        backgroundColor: theme.palette.primary.main
      }
    }
  };
});

var ListMenuItem = function ListMenuItem(_ref) {
  var icon = _ref.icon,
      avatar = _ref.avatar,
      primary = _ref.primary,
      secondary = _ref.secondary,
      action = _ref.action,
      children = _ref.children,
      style = _ref.style,
      divider = _ref.divider,
      dividerColor = _ref.dividerColor,
      iconStyle = _ref.iconStyle,
      textProps = _ref.textProps,
      actionProps = _ref.actionProps,
      linkto = _ref.linkto,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["icon", "avatar", "primary", "secondary", "action", "children", "style", "divider", "dividerColor", "iconStyle", "textProps", "actionProps", "linkto", "className"]);

  var _useLocation = (0, _customhooks.useLocation)(),
      location = _useLocation.location;

  var classes = useStyles();
  var isActive = location.pathname.includes(linkto);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children && /*#__PURE__*/_react.default.createElement(_ListItem.default, _extends({
    styles: _objectSpread({
      flex: 1,
      display: 'flex'
    }, style),
    className: (0, _clsx3.default)(classes.listItem, _defineProperty({}, classes.isActiveListItem, isActive), className),
    component: linkto ? _reach.Link : 'div',
    to: linkto
  }, rest), children), !children && /*#__PURE__*/_react.default.createElement(_ListItem.default, _extends({
    component: linkto ? _reach.Link : 'div',
    to: linkto,
    className: (0, _clsx3.default)(classes.listItem, _defineProperty({}, classes.isActiveListItem, isActive), className),
    styles: _objectSpread({
      flex: 1,
      display: 'flex'
    }, style)
  }, rest), icon && /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, {
    style: _objectSpread({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }, iconStyle),
    className: classes.listItemIcon
  }, icon), avatar && /*#__PURE__*/_react.default.createElement(_ListItemAvatar.default, null, avatar), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    primary: primary,
    secondary: secondary
  }), action && /*#__PURE__*/_react.default.createElement(_ListItemSecondaryAction.default, actionProps, action)), divider && !dividerColor && /*#__PURE__*/_react.default.createElement(_Divider.default, null), divider && dividerColor && /*#__PURE__*/_react.default.createElement(_Divider.default, {
    style: {
      backgroundColor: dividerColor
    }
  }));
};

ListMenuItem.defaultProps = {
  icon: null,
  button: true
};
var _default = ListMenuItem;
exports.default = _default;