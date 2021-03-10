"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Scrollbars = _interopRequireDefault(require("src/components/Scrollbars"));

var _styles = require("cloudhub-components/dist/mui/styles");

var _core = require("@material-ui/core");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/utils/helperFormik.js";
// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, theme.typography.body1), {}, {
      top: 0,
      right: 0,
      bottom: 0,
      width: 320,
      zIndex: 9999999,
      position: 'fixed',
      backdropFilter: 'blur(8px)',
      paddingLeft: theme.spacing(3),
      boxShadow: theme.shadows[25].z24,
      color: theme.palette.primary.light,
      background: (0, _styles.alpha)(theme.palette.grey[900], 0.96),
      '& code': (0, _objectSpread2.default)({}, theme.typography.body1)
    }),
    label: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, theme.typography.subtitle1), {}, {
      minWidth: 160,
      margin: theme.spacing(1, 0),
      color: theme.palette.primary.lighter
    }),
    bool: {
      '& code': {
        color: theme.palette.warning.contrastText,
        backgroundColor: theme.palette.warning.main
      }
    },
    isActive: {
      '& code': {
        color: theme.palette.warning.contrastText,
        backgroundColor: theme.palette.primary.main
      }
    }
  };
}); // ----------------------------------------------------------------------

HelperFormik.propTypes = {
  formik: _propTypes.default.object
};

function HelperFormik(_ref) {
  var _this = this;

  var formik = _ref.formik;
  var classes = useStyles();
  var dirty = formik.dirty,
      status = formik.status,
      values = formik.values,
      errors = formik.errors,
      touched = formik.touched,
      isValid = formik.isValid,
      isSubmitting = formik.isSubmitting,
      isValidating = formik.isValidating,
      initialValues = formik.initialValues,
      validateOnBlur = formik.validateOnBlur,
      validateOnMount = formik.validateOnMount,
      validateOnChange = formik.validateOnChange;

  var Bool = function Bool(name, action) {
    return /*#__PURE__*/_react.default.createElement(_core.Box, {
      sx: {
        display: 'flex',
        alignItems: 'center'
      },
      className: (0, _clsx2.default)(classes.bool, (0, _defineProperty2.default)({}, classes.isActive, action)),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: classes.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }
    }, name), /*#__PURE__*/_react.default.createElement("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }
    }, ":", JSON.stringify(action)));
  };

  return /*#__PURE__*/_react.default.createElement("pre", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_Scrollbars.default, {
    style: {
      height: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, "values"), /*#__PURE__*/_react.default.createElement("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, JSON.stringify(values, null, 2)), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, "initialValues"), /*#__PURE__*/_react.default.createElement("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, JSON.stringify(initialValues, null, 2)), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "errors"), /*#__PURE__*/_react.default.createElement("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, JSON.stringify(errors, null, 2)), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, "status"), /*#__PURE__*/_react.default.createElement("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, JSON.stringify(status, null, 2)), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, "touched"), /*#__PURE__*/_react.default.createElement("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, JSON.stringify(touched, null, 2)), Bool('isSubmitting', isSubmitting), Bool('dirty', dirty), Bool('isValid', isValid), Bool('isValidating', isValidating), Bool('validateOnBlur', validateOnBlur), Bool('validateOnChange', validateOnChange), Bool('validateOnMount', validateOnMount)));
}

var _default = HelperFormik;
exports.default = _default;