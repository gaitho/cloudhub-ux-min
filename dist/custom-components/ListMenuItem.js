"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _defineProperty2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

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

var _this = void 0,
    _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/custom-components/ListMenuItem.js";

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {},
    listItem: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, theme.typography.body2), {}, {
      height: 48,
      textTransform: 'capitalize',
      paddingLeft: theme.spacing(5),
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
      rest = (0, _objectWithoutProperties2.default)(_ref, ["icon", "avatar", "primary", "secondary", "action", "children", "style", "divider", "dividerColor", "iconStyle", "textProps", "actionProps", "linkto", "className"]);

  var _useLocation = (0, _customhooks.useLocation)(),
      location = _useLocation.location;

  var classes = useStyles();
  var isActive = location.pathname.includes(linkto);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, children && /*#__PURE__*/_react.default.createElement(_ListItem.default, (0, _extends2.default)({
    styles: (0, _objectSpread2.default)({
      flex: 1,
      display: 'flex'
    }, style),
    className: (0, _clsx3.default)(classes.listItem, (0, _defineProperty2.default)({}, classes.isActiveListItem, isActive), className),
    component: linkto ? _reach.Link : 'div',
    to: linkto
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), children), !children && /*#__PURE__*/_react.default.createElement(_ListItem.default, (0, _extends2.default)({
    component: linkto ? _reach.Link : 'div',
    to: linkto,
    className: (0, _clsx3.default)(classes.listItem, (0, _defineProperty2.default)({}, classes.isActiveListItem, isActive), className),
    styles: (0, _objectSpread2.default)({
      flex: 1,
      display: 'flex'
    }, style)
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), icon && /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, {
    style: (0, _objectSpread2.default)({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }, iconStyle),
    className: classes.listItemIcon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, icon), avatar && /*#__PURE__*/_react.default.createElement(_ListItemAvatar.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 22
    }
  }, avatar), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    primary: primary,
    secondary: secondary,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }), action && /*#__PURE__*/_react.default.createElement(_ListItemSecondaryAction.default, (0, _extends2.default)({}, actionProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }), action)), divider && !dividerColor && /*#__PURE__*/_react.default.createElement(_Divider.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 36
    }
  }), divider && dividerColor && /*#__PURE__*/_react.default.createElement(_Divider.default, {
    style: {
      backgroundColor: dividerColor
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }));
};

ListMenuItem.defaultProps = {
  icon: null,
  button: true
};
var _default = ListMenuItem;
exports.default = _default;