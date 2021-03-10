"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _slicedToArray2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = require("@iconify/react");

var _copyFill = _interopRequireDefault(require("@iconify-icons/eva/copy-fill"));

var _react2 = _interopRequireWildcard(require("react"));

var _archiveFill = _interopRequireDefault(require("@iconify-icons/eva/archive-fill"));

var _downloadFill = _interopRequireDefault(require("@iconify-icons/eva/download-fill"));

var _moreVerticalFill = _interopRequireDefault(require("@iconify-icons/eva/more-vertical-fill"));

var _filePdfFilled = _interopRequireDefault(require("@iconify-icons/ant-design/file-pdf-filled"));

var _styles = require("cloudhub-components/dist/mui/styles");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/MoreButton.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    menu: {
      width: 220,
      maxWidth: '100%'
    }
  };
}); // ----------------------------------------------------------------------

function MoreButton(_ref) {
  var _this = this;

  var className = _ref.className,
      other = (0, _objectWithoutProperties2.default)(_ref, ["className"]);
  var classes = useStyles();
  var ref = (0, _react2.useRef)(null);

  var _useState = (0, _react2.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var handleClickImport = function handleClickImport() {
    alert('Hello Import!!');
    setIsOpen(false);
  };

  var handleClickCopy = function handleClickCopy() {
    alert('Hello Copy!!');
    setIsOpen(false);
  };

  var handleClickExport = function handleClickExport() {
    alert('Hello Export!!');
    setIsOpen(false);
  };

  var handleClickArchive = function handleClickArchive() {
    alert('Hello Archive!!');
    setIsOpen(false);
  };

  var OPTIONS = [{
    text: 'Import',
    icon: _downloadFill.default,
    action: handleClickImport
  }, {
    text: 'Copy',
    icon: _copyFill.default,
    action: handleClickCopy
  }, {
    text: 'Export',
    icon: _filePdfFilled.default,
    action: handleClickExport
  }, {
    text: 'Archive',
    icon: _archiveFill.default,
    action: handleClickArchive
  }];
  return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement(_core.IconButton, (0, _extends2.default)({
    ref: ref,
    className: className,
    onClick: function onClick() {
      return setIsOpen(true);
    }
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    icon: _moreVerticalFill.default,
    width: 20,
    height: 20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  })), /*#__PURE__*/_react2.default.createElement(_core.Menu, {
    open: isOpen,
    anchorEl: ref.current,
    onClose: function onClose() {
      return setIsOpen(false);
    },
    PaperProps: {
      className: classes.menu
    },
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, OPTIONS.map(function (item) {
    return /*#__PURE__*/_react2.default.createElement(_core.MenuItem, {
      key: item.text,
      onClick: item.action,
      sx: {
        color: 'text.secondary'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }
    }, /*#__PURE__*/_react2.default.createElement(_core.ListItemIcon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }
    }, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
      icon: item.icon,
      width: 24,
      height: 24,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 15
      }
    })), /*#__PURE__*/_react2.default.createElement(_core.ListItemText, {
      primary: item.text,
      primaryTypographyProps: {
        variant: 'body2'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    }));
  })));
}

var _default = /*#__PURE__*/(0, _react2.memo)(MoreButton);

exports.default = _default;