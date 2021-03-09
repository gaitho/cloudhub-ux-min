"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useAuth;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _authJwt = require("src/redux/slices/authJwt");

var _reactReduxFirebase = require("react-redux-firebase");

// ----------------------------------------------------------------------
useAuth.propTypes = {
  method: _propTypes.default.oneOf(['jwt', 'firebase'])
};

function useAuth() {
  var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'jwt';
  // Firebase Auth
  var firebase = (0, _reactReduxFirebase.useFirebase)();
  var firestore = (0, _reactReduxFirebase.useFirestore)();

  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
    return state.firebase;
  }),
      auth = _useSelector.auth,
      profile = _useSelector.profile; // JWT Auth


  var dispatch = (0, _reactRedux.useDispatch)();

  var _useSelector2 = (0, _reactRedux.useSelector)(function (state) {
    return state.authJwt;
  }),
      user = _useSelector2.user,
      isLoading = _useSelector2.isLoading,
      isAuthenticated = _useSelector2.isAuthenticated; // JWT Auth


  if (method === 'jwt') {
    return {
      method: 'jwt',
      user: user,
      isLoading: isLoading,
      isAuthenticated: isAuthenticated,
      login: function login(_ref) {
        var email = _ref.email,
            password = _ref.password;
        return dispatch((0, _authJwt.login)({
          email: email,
          password: password
        }));
      },
      register: function register(_ref2) {
        var email = _ref2.email,
            password = _ref2.password,
            firstName = _ref2.firstName,
            lastName = _ref2.lastName;
        return dispatch((0, _authJwt.register)({
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName
        }));
      },
      logout: function logout() {
        return dispatch((0, _authJwt.logout)());
      },
      resetPassword: function resetPassword() {},
      updateProfile: function updateProfile() {}
    };
  } // Firebase Auth


  return {
    method: 'firebase',
    user: {
      displayName: auth.displayName || profile.displayName || '',
      email: auth.email || '',
      photoURL: auth.photoURL || profile.photoURL || '',
      phoneNumber: auth.phoneNumber || profile.phoneNumber || '',
      country: profile.country || '',
      address: profile.address || '',
      state: profile.state || '',
      city: profile.city || '',
      zipCode: profile.zipCode || '',
      about: profile.about || '',
      role: profile.role || '',
      isPublic: profile.isPublic || false
    },
    isLoading: !(0, _reactReduxFirebase.isLoaded)(auth),
    isAuthenticated: !(0, _reactReduxFirebase.isEmpty)(auth),
    login: function login(_ref3) {
      var email = _ref3.email,
          password = _ref3.password;
      return firebase.login({
        email: email,
        password: password
      });
    },
    loginWithGoogle: function loginWithGoogle() {
      return firebase.login({
        provider: 'google',
        type: 'popup'
      });
    },
    loginWithFaceBook: function loginWithFaceBook() {
      return firebase.login({
        provider: 'facebook',
        type: 'popup'
      });
    },
    loginWithTwitter: function loginWithTwitter() {
      return firebase.login({
        provider: 'twitter',
        type: 'popup'
      });
    },
    register: function register(_ref4) {
      var email = _ref4.email,
          password = _ref4.password,
          firstName = _ref4.firstName,
          lastName = _ref4.lastName;
      return firebase.auth().createUserWithEmailAndPassword(email, password).then(function (res) {
        firestore.collection('users').doc(res.user.uid).set({
          uid: res.user.uid,
          email: email,
          displayName: firstName + ' ' + lastName
        });
      });
    },
    logout: function logout() {
      return firebase.logout();
    },
    resetPassword: function resetPassword(email) {
      return firebase.resetPassword(email);
    },
    updateProfile: function updateProfile(_ref5) {
      var displayName = _ref5.displayName,
          photoURL = _ref5.photoURL,
          phoneNumber = _ref5.phoneNumber,
          country = _ref5.country,
          state = _ref5.state,
          city = _ref5.city,
          address = _ref5.address,
          zipCode = _ref5.zipCode,
          about = _ref5.about,
          isPublic = _ref5.isPublic;
      return firebase.updateProfile({}).then(function (res) {
        firestore.collection('users').doc(res.id).set({
          displayName: displayName,
          photoURL: photoURL,
          phoneNumber: phoneNumber,
          country: country,
          state: state,
          city: city,
          address: address,
          zipCode: zipCode,
          about: about,
          isPublic: isPublic
        }, {
          merge: true
        });
      });
    }
  };
}