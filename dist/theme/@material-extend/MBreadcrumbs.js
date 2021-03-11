"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clsx = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reach = require("cloudhub-components/dist/reach");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {}
  };
}); // ----------------------------------------------------------------------

var Separator = /*#__PURE__*/_react.default.createElement(_core.Box, {
  component: "span",
  sx: {
    width: 4,
    height: 4,
    borderRadius: '50%',
    bgcolor: 'text.disabled'
  }
});

function LinkItem(_ref) {
  var link = _ref.link;
  var href = link.href,
      name = link.name,
      icon = link.icon;
  return /*#__PURE__*/_react.default.createElement(_core.Link, {
    to: href,
    key: name,
    variant: "body2",
    component: _reach.Link,
    sx: {
      lineHeight: 2,
      display: 'flex',
      alignItems: 'center',
      color: 'text.primary',
      '& > div': {
        display: 'inherit'
      }
    }
  }, icon && /*#__PURE__*/_react.default.createElement(_core.Box, {
    sx: {
      mr: 1,
      '& svg': {
        width: 20,
        height: 20
      }
    }
  }, icon), name);
}

MBreadcrumbs.propTypes = {
  links: _propTypes.default.array.isRequired,
  activeLast: _propTypes.default.bool,
  className: _propTypes.default.string
};

function MBreadcrumbs(_ref2) {
  var links = _ref2.links,
      _ref2$activeLast = _ref2.activeLast,
      activeLast = _ref2$activeLast === void 0 ? false : _ref2$activeLast,
      className = _ref2.className,
      other = _objectWithoutProperties(_ref2, ["links", "activeLast", "className"]);

  var classes = useStyles();
  var currentLink = (0, _lodash.last)(links).name;
  var listDefault = links.map(function (link) {
    return /*#__PURE__*/_react.default.createElement(LinkItem, {
      link: link
    });
  });
  var listActiveLast = links.map(function (link) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: link.name
    }, link.name !== currentLink ? /*#__PURE__*/_react.default.createElement(LinkItem, {
      link: link
    }) : /*#__PURE__*/_react.default.createElement(_core.Typography, {
      variant: "body2",
      sx: {
        maxWidth: 260,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        color: 'text.disabled',
        textOverflow: 'ellipsis'
      }
    }, currentLink));
  });
  return /*#__PURE__*/_react.default.createElement(_core.Breadcrumbs, _extends({
    separator: Separator,
    className: (0, _clsx.default)(classes.root, className)
  }, other), activeLast ? listDefault : listActiveLast);
}

var _default = MBreadcrumbs;
exports.default = _default;