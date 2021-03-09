"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _regenerator = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator"));

require("firebase/auth");

require("firebase/firestore");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _app = _interopRequireDefault(require("firebase/app"));

var _store = require("src/redux/store");

var _useAuth2 = _interopRequireDefault(require("src/hooks/useAuth"));

var _react = _interopRequireWildcard(require("react"));

var _config = require("src/config");

var _reduxFirestore = require("redux-firestore");

var _reactReduxFirebase = require("react-redux-firebase");

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/components/Auth/FirebaseProvider.js";

// ----------------------------------------------------------------------
if (!_app.default.apps.length) {
  _app.default.initializeApp(_config.firebaseConfig);

  _app.default.firestore();
}

var rrfProps = {
  firebase: _app.default,
  config: {
    userProfile: 'users',
    useFirestoreForProfile: true
  },
  dispatch: _store.store.dispatch,
  createFirestoreInstance: _reduxFirestore.createFirestoreInstance
};
var ADMIN_EMAILS = ['demo@minimals.cc']; // ----------------------------------------------------------------------

FirebaseProvider.propTypes = {
  children: _propTypes.default.node
};

function FirebaseProvider(_ref) {
  var children = _ref.children;

  var _useAuth = (0, _useAuth2.default)(),
      isAuthenticated = _useAuth.isAuthenticated;

  (0, _react.useEffect)(function () {
    var getInitialize = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                try {
                  _app.default.auth().onAuthStateChanged(function (user) {
                    if (user && isAuthenticated) {
                      _app.default.firestore().collection('users').doc(user.uid).set({
                        role: ADMIN_EMAILS.includes(user.email) ? 'admin' : 'user'
                      }, {
                        merge: true
                      });
                    }
                  });
                } catch (error) {
                  console.error(error);
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getInitialize() {
        return _ref2.apply(this, arguments);
      };
    }();

    getInitialize();
  }, [isAuthenticated]);
  return /*#__PURE__*/_react.default.createElement(_reactReduxFirebase.ReactReduxFirebaseProvider, (0, _extends2.default)({}, rrfProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }), children);
}

var _default = FirebaseProvider;
exports.default = _default;