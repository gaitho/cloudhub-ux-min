"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emailError = emailError;
exports.passwordError = passwordError;
exports.codes = void 0;
// ----------------------------------------------------------------------
var codes = {
  // Email
  emailAlreadyinUse: {
    code: 'auth/email-already-in-use',
    text: 'There already exists an account with the given email address.'
  },
  invalidEmail: {
    code: 'auth/invalid-email',
    text: 'The email address is not valid.'
  },
  userDisabled: {
    code: 'auth/user-disabled',
    text: 'The user corresponding to the given credential has been disabled.'
  },
  userNotFound: {
    code: 'auth/user-not-found',
    text: 'There is no user corresponding to the email address.'
  },
  // Password
  wrongPassword: {
    code: 'auth/wrong-password',
    text: 'Wrong password'
  },
  weakPassword: {
    code: 'auth/weak-password',
    text: 'Password should be at least 6 characters'
  }
};
exports.codes = codes;
var emailAlreadyinUse = codes.emailAlreadyinUse,
    invalidEmail = codes.invalidEmail,
    userDisabled = codes.userDisabled,
    userNotFound = codes.userNotFound,
    wrongPassword = codes.wrongPassword,
    weakPassword = codes.weakPassword;

function emailError(errors) {
  return {
    error: errors === emailAlreadyinUse.code || errors === invalidEmail.code || errors === userDisabled.code || errors === userNotFound.code,
    helperText: errors === emailAlreadyinUse.code && emailAlreadyinUse.text || errors === invalidEmail.code && invalidEmail.text || errors === userDisabled.code && userDisabled.text || errors === userNotFound.code && userNotFound.text
  };
}

function passwordError(errors) {
  return {
    error: errors === wrongPassword.code || errors === weakPassword.code,
    helperText: errors === wrongPassword.code && wrongPassword.text || errors === weakPassword.code && weakPassword.text
  };
}