"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clsx2 = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Scrollbars = _interopRequireDefault(require("../components/Scrollbars"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ----------------------------------------------------------------------
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: _objectSpread(_objectSpread({}, theme.typography.body1), {}, {
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
      '& code': _objectSpread({}, theme.typography.body1)
    }),
    label: _objectSpread(_objectSpread({}, theme.typography.subtitle1), {}, {
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
      className: (0, _clsx2.default)(classes.bool, _defineProperty({}, classes.isActive, action))
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: classes.label
    }, name), /*#__PURE__*/_react.default.createElement("code", null, ":", JSON.stringify(action)));
  };

  return /*#__PURE__*/_react.default.createElement("pre", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_Scrollbars.default, {
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.label
  }, "values"), /*#__PURE__*/_react.default.createElement("code", null, JSON.stringify(values, null, 2)), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.label
  }, "initialValues"), /*#__PURE__*/_react.default.createElement("code", null, JSON.stringify(initialValues, null, 2)), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.label
  }, "errors"), /*#__PURE__*/_react.default.createElement("code", null, JSON.stringify(errors, null, 2)), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.label
  }, "status"), /*#__PURE__*/_react.default.createElement("code", null, JSON.stringify(status, null, 2)), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.label
  }, "touched"), /*#__PURE__*/_react.default.createElement("code", null, JSON.stringify(touched, null, 2)), Bool('isSubmitting', isSubmitting), Bool('dirty', dirty), Bool('isValid', isValid), Bool('isValidating', isValidating), Bool('validateOnBlur', validateOnBlur), Bool('validateOnChange', validateOnChange), Bool('validateOnMount', validateOnMount)));
}

var _default = HelperFormik;
exports.default = _default;