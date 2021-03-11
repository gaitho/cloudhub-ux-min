"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = require("../config");

// ----------------------------------------------------------------------
var setup = function setup() {
  var _window;

  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  if (!window.gtag) {
    return;
  }

  (_window = window).gtag.apply(_window, arguments);
};

var track = {
  pageview: function pageview(props) {
    setup('config', _config.googleAnalyticsConfig, props);
  },
  event: function event(type, props) {
    setup('event', type, props);
  }
};
var _default = track;
exports.default = _default;