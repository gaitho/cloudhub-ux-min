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

var _react = _interopRequireWildcard(require("react"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Lens = _interopRequireDefault(require("@material-ui/icons/Lens"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

var _ThemeContext = _interopRequireDefault(require("cloudhub-components/dist/theme/ThemeContext"));

var _this = void 0,
    _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/custom-components/ListSubMenu.js";

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {},
    listItem: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, theme.typography.body2), {}, {
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

var ListSubMenu = function ListSubMenu(_ref) {
  var children = _ref.children,
      headerIcon = _ref.headerIcon,
      header = _ref.header,
      expanded = _ref.expanded,
      _ref$expandedStyles = _ref.expandedStyles,
      expandedStyles = _ref$expandedStyles === void 0 ? {} : _ref$expandedStyles,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      showHeaderIcon = _ref.showHeaderIcon,
      dividerColor = _ref.dividerColor,
      _ref$divider = _ref.divider,
      divider = _ref$divider === void 0 ? true : _ref$divider,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "headerIcon", "header", "expanded", "expandedStyles", "style", "showHeaderIcon", "dividerColor", "divider", "className"]);

  var _React$useContext = _react.default.useContext(_ThemeContext.default),
      colors = _React$useContext.colors;

  var _useState = (0, _react.useState)(expanded),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      menuexpanded = _useState2[0],
      setMenuExpand = _useState2[1];

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_ListItem.default, (0, _extends2.default)({
    button: true,
    onClick: function onClick() {
      return setMenuExpand(!menuexpanded);
    },
    style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, menuexpanded && expandedStyles), {}, {
      style: style
    }),
    className: (0, _clsx2.default)(classes.listItem, (0, _defineProperty2.default)({}, classes.isActiveListItem, menuexpanded), className)
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), headerIcon && /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, {
    style: {
      color: colors.dark
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, headerIcon), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    primary: header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }), showHeaderIcon && menuexpanded && /*#__PURE__*/_react.default.createElement(_ExpandMore.default, {
    style: {
      fontSize: 24,
      color: style && style.color ? style.color : 'inherit'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }), showHeaderIcon && !menuexpanded && /*#__PURE__*/_react.default.createElement(_ChevronRight.default, {
    style: {
      fontSize: 24,
      color: style && style.color ? style.color : 'inherit'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  })), /*#__PURE__*/_react.default.createElement(_Collapse.default, {
    in: menuexpanded,
    timeout: "auto",
    unmountOnExit: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react.default.createElement(_List.default, {
    component: "div",
    disablePadding: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, children)), divider && !dividerColor && /*#__PURE__*/_react.default.createElement(_Divider.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 36
    }
  }), divider && dividerColor && /*#__PURE__*/_react.default.createElement(_Divider.default, {
    style: {
      backgroundColor: dividerColor
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }));
};

ListSubMenu.defaultProps = {
  headerIcon: /*#__PURE__*/_react.default.createElement(_Lens.default, {
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }),
  header: '',
  showHeaderIcon: true
};
var _default = ListSubMenu;
exports.default = _default;