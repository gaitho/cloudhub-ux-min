"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
      rest = _objectWithoutProperties(_ref, ["children", "headerIcon", "header", "expanded", "expandedStyles", "style", "showHeaderIcon", "dividerColor", "divider", "className"]);

  var _React$useContext = _react.default.useContext(_ThemeContext.default),
      colors = _React$useContext.colors;

  var _useState = (0, _react.useState)(expanded),
      _useState2 = _slicedToArray(_useState, 2),
      menuexpanded = _useState2[0],
      setMenuExpand = _useState2[1];

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_ListItem.default, _extends({
    button: true,
    onClick: function onClick() {
      return setMenuExpand(!menuexpanded);
    },
    style: _objectSpread(_objectSpread({}, menuexpanded && expandedStyles), {}, {
      style: style
    }),
    className: (0, _clsx2.default)(classes.listItem, _defineProperty({}, classes.isActiveListItem, menuexpanded), className)
  }, rest), headerIcon && /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, {
    style: {
      color: colors.dark
    }
  }, headerIcon), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    primary: header
  }), showHeaderIcon && menuexpanded && /*#__PURE__*/_react.default.createElement(_ExpandMore.default, {
    style: {
      fontSize: 24,
      color: style && style.color ? style.color : 'inherit'
    }
  }), showHeaderIcon && !menuexpanded && /*#__PURE__*/_react.default.createElement(_ChevronRight.default, {
    style: {
      fontSize: 24,
      color: style && style.color ? style.color : 'inherit'
    }
  })), /*#__PURE__*/_react.default.createElement(_Collapse.default, {
    in: menuexpanded,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/_react.default.createElement(_List.default, {
    component: "div",
    disablePadding: true
  }, children)), divider && !dividerColor && /*#__PURE__*/_react.default.createElement(_Divider.default, null), divider && dividerColor && /*#__PURE__*/_react.default.createElement(_Divider.default, {
    style: {
      backgroundColor: dividerColor
    }
  }));
};

ListSubMenu.defaultProps = {
  headerIcon: /*#__PURE__*/_react.default.createElement(_Lens.default, null),
  header: '',
  showHeaderIcon: true
};
var _default = ListSubMenu;
exports.default = _default;