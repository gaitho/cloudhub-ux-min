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

var _lodash = require("lodash");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/theme/@material-extend/MBreadcrumbs.js";
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
  },
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
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
    component: _reactRouterDom.Link,
    sx: {
      lineHeight: 2,
      display: 'flex',
      alignItems: 'center',
      color: 'text.primary',
      '& > div': {
        display: 'inherit'
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, icon && /*#__PURE__*/_react.default.createElement(_core.Box, {
    sx: {
      mr: 1,
      '& svg': {
        width: 20,
        height: 20
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, icon), name);
}

MBreadcrumbs.propTypes = {
  links: _propTypes.default.array.isRequired,
  activeLast: _propTypes.default.bool,
  className: _propTypes.default.string
};

function MBreadcrumbs(_ref2) {
  var _this = this;

  var links = _ref2.links,
      _ref2$activeLast = _ref2.activeLast,
      activeLast = _ref2$activeLast === void 0 ? false : _ref2$activeLast,
      className = _ref2.className,
      other = (0, _objectWithoutProperties2.default)(_ref2, ["links", "activeLast", "className"]);
  var classes = useStyles();
  var currentLink = (0, _lodash.last)(links).name;
  var listDefault = links.map(function (link) {
    return /*#__PURE__*/_react.default.createElement(LinkItem, {
      link: link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 43
      }
    });
  });
  var listActiveLast = links.map(function (link) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: link.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 5
      }
    }, link.name !== currentLink ? /*#__PURE__*/_react.default.createElement(LinkItem, {
      link: link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }
    }) : /*#__PURE__*/_react.default.createElement(_core.Typography, {
      variant: "body2",
      sx: {
        maxWidth: 260,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        color: 'text.disabled',
        textOverflow: 'ellipsis'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }
    }, currentLink));
  });
  return /*#__PURE__*/_react.default.createElement(_core.Breadcrumbs, (0, _extends2.default)({
    separator: Separator,
    className: (0, _clsx.default)(classes.root, className)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }), activeLast ? listDefault : listActiveLast);
}

var _default = MBreadcrumbs;
exports.default = _default;