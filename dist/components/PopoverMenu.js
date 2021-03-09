"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/PopoverMenu.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    paper: {
      marginTop: 12,
      marginLeft: 4,
      overflow: 'inherit',
      boxShadow: theme.shadows[25].z20,
      border: "solid 1px ".concat(theme.palette.grey[5008])
    },
    arrow: (0, _defineProperty2.default)({}, theme.breakpoints.up('sm'), {
      top: -7,
      zIndex: 1,
      width: 12,
      right: 20,
      height: 12,
      content: "''",
      position: 'absolute',
      borderRadius: '0 0 4px 0',
      transform: 'rotate(-135deg)',
      background: theme.palette.background.paper,
      borderRight: "solid 1px ".concat((0, _styles.alpha)(theme.palette.grey[500], 0.12)),
      borderBottom: "solid 1px ".concat((0, _styles.alpha)(theme.palette.grey[500], 0.12))
    })
  };
}); // ----------------------------------------------------------------------

DropdownMenu.propTypes = {
  children: _propTypes.default.node.isRequired,
  width: _propTypes.default.number,
  className: _propTypes.default.string
};

function DropdownMenu(_ref) {
  var children = _ref.children,
      width = _ref.width,
      className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["children", "width", "className"]);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Popover, (0, _extends2.default)({
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    className: className,
    classes: {
      root: classes.root,
      paper: classes.paper
    }
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: classes.arrow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react.default.createElement(_core.Box, {
    sx: {
      width: width,
      maxWidth: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, children));
}

var _default = DropdownMenu;
exports.default = _default;