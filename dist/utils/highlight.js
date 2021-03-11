"use strict";

var _highlight = _interopRequireDefault(require("highlight.js"));

require("highlight.js/styles/atom-one-dark.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------------------------------------------------------
_highlight.default.configure({
  languages: ['javascript', 'jsx', 'sh', 'html', 'css', 'bash', 'json']
});

window.hljs = _highlight.default;