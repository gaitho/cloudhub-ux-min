"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _highlight = _interopRequireDefault(require("highlight.js"));

require("highlight.js/styles/atom-one-dark.css");

// ----------------------------------------------------------------------
_highlight.default.configure({
  languages: ['javascript', 'jsx', 'sh', 'html', 'css', 'bash', 'json']
});

window.hljs = _highlight.default;