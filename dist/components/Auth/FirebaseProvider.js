"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("firebase/auth");

require("firebase/firestore");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _app = _interopRequireDefault(require("firebase/app"));

var _store = require("../../redux/store");

var _useAuth2 = _interopRequireDefault(require("../../hooks/useAuth"));

var _react = _interopRequireWildcard(require("react"));

var _config = require("../../config");

var _reduxFirestore = require("redux-firestore");

var _reactReduxFirebase = require("react-redux-firebase");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
  return /*#__PURE__*/_react.default.createElement(_reactReduxFirebase.ReactReduxFirebaseProvider, rrfProps, children);
}

var _default = FirebaseProvider;
exports.default = _default;