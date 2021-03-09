"use strict";

var _interopRequireDefault = require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFileType = getFileType;
exports.getFileName = getFileName;
exports.getFileFullName = getFileFullName;
exports.getFileFormat = getFileFormat;
exports.getFileThumb = getFileThumb;

var _extends2 = _interopRequireDefault(require("/Users/bernardgaitho/repos/designs/cloudhub-min/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@iconify/react");

var _fileFill = _interopRequireDefault(require("@iconify-icons/eva/file-fill"));

var _fileTypePdf = _interopRequireDefault(require("@iconify-icons/vscode-icons/file-type-pdf"));

var _fileTypeAi = _interopRequireDefault(require("@iconify-icons/vscode-icons/file-type-ai2"));

var _fileTypeWord = _interopRequireDefault(require("@iconify-icons/vscode-icons/file-type-word"));

var _fileTypeExcel = _interopRequireDefault(require("@iconify-icons/vscode-icons/file-type-excel"));

var _fileTypeVideo = _interopRequireDefault(require("@iconify-icons/vscode-icons/file-type-video"));

var _fileTypePowerpoint = _interopRequireDefault(require("@iconify-icons/vscode-icons/file-type-powerpoint"));

var _fileTypePhotoshop = _interopRequireDefault(require("@iconify-icons/vscode-icons/file-type-photoshop2"));

var _jsxFileName = "/Users/bernardgaitho/repos/designs/cloudhub-min/src/utils/getFileFormat.js";
// ----------------------------------------------------------------------
var ICON_SIZE = {
  width: 28,
  height: 28
};

function getFileType(fileUrl) {
  return fileUrl.split(/[#?]/)[0].split('.').pop().trim();
}

function getFileName(fileUrl) {
  return fileUrl.substring(fileUrl.lastIndexOf('/') + 1).replace(/\.[^/.]+$/, '');
}

function getFileFullName(fileUrl) {
  return fileUrl.split('/').pop();
}

function getFileFormat(fileUrl) {
  if (['jpg', 'jpeg', 'gif', 'bmp', 'png'].includes(getFileType(fileUrl))) return 'image';
  if (['m4v', 'avi', 'mpg', 'mp4', 'webm'].includes(getFileType(fileUrl))) return 'video';
  if (['doc', 'docx'].includes(getFileType(fileUrl))) return 'word';
  if ([' xls', 'xlsx'].includes(getFileType(fileUrl))) return 'excel';
  if (['ppt', 'pptx'].includes(getFileType(fileUrl))) return 'powerpoint';
  if (['pdf'].includes(getFileType(fileUrl))) return 'pdf';
  if (['psd'].includes(getFileType(fileUrl))) return 'photoshop';
  if (['ai', 'esp'].includes(getFileType(fileUrl))) return 'illustrator';
  return 'other';
}

function getFileThumb(fileUrl) {
  var thumb;

  switch (getFileFormat(fileUrl)) {
    case 'image':
      thumb = /*#__PURE__*/_react.default.createElement("img", {
        src: fileUrl,
        alt: fileUrl,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 15
        }
      });
      break;

    case 'video':
      thumb = /*#__PURE__*/_react.default.createElement(_react2.Icon, (0, _extends2.default)({
        icon: _fileTypeVideo.default
      }, ICON_SIZE, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }
      }));
      break;

    case 'word':
      thumb = /*#__PURE__*/_react.default.createElement(_react2.Icon, (0, _extends2.default)({
        icon: _fileTypeWord.default
      }, ICON_SIZE, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 15
        }
      }));
      break;

    case 'excel':
      thumb = /*#__PURE__*/_react.default.createElement(_react2.Icon, (0, _extends2.default)({
        icon: _fileTypeExcel.default
      }, ICON_SIZE, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 15
        }
      }));
      break;

    case 'powerpoint':
      thumb = /*#__PURE__*/_react.default.createElement(_react2.Icon, (0, _extends2.default)({
        icon: _fileTypePowerpoint.default
      }, ICON_SIZE, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 15
        }
      }));
      break;

    case 'pdf':
      thumb = /*#__PURE__*/_react.default.createElement(_react2.Icon, (0, _extends2.default)({
        icon: _fileTypePdf.default
      }, ICON_SIZE, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 15
        }
      }));
      break;

    case 'photoshop':
      thumb = /*#__PURE__*/_react.default.createElement(_react2.Icon, (0, _extends2.default)({
        icon: _fileTypePhotoshop.default
      }, ICON_SIZE, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 15
        }
      }));
      break;

    case 'illustrator':
      thumb = /*#__PURE__*/_react.default.createElement(_react2.Icon, (0, _extends2.default)({
        icon: _fileTypeAi.default
      }, ICON_SIZE, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 15
        }
      }));
      break;

    default:
      thumb = /*#__PURE__*/_react.default.createElement(_react2.Icon, (0, _extends2.default)({
        icon: _fileFill.default
      }, ICON_SIZE, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 15
        }
      }));
  }

  return thumb;
}