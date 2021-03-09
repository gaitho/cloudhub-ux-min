"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImgComponent = exports.getImgAvatar = exports.getImgProduct = exports.getImgFeed = exports.getImgCover = exports.BASE_IMG = void 0;
// ----------------------------------------------------------------------
var BASE_IMG = 'https://res.cloudinary.com/trinhmai/image/upload/c_scale,f_auto,q_auto,';
exports.BASE_IMG = BASE_IMG;

var getImgCover = function getImgCover(width, index) {
  return "".concat(BASE_IMG, "w_").concat(width, "/v1611411356/upload_minimal/covers/cover_").concat(index, ".jpg");
};

exports.getImgCover = getImgCover;

var getImgFeed = function getImgFeed(width, index) {
  return "".concat(BASE_IMG, "w_").concat(width, "/v1611420989/upload_minimal/feeds/feed_").concat(index, ".jpg");
};

exports.getImgFeed = getImgFeed;

var getImgProduct = function getImgProduct(width, index) {
  return "".concat(BASE_IMG, "w_").concat(width, "/v1611420989/upload_minimal/products/shose_").concat(index, ".jpg");
};

exports.getImgProduct = getImgProduct;

var getImgAvatar = function getImgAvatar(index) {
  return "/static/images/avatars/avatar_".concat(index, ".jpg");
}; // Only Home Page


exports.getImgAvatar = getImgAvatar;

var getImgComponent = function getImgComponent(width, name, mode) {
  return "".concat(BASE_IMG, "w_").concat(width, "/v1611426110/upload_minimal/components/").concat(name, "_").concat(mode, ".jpg");
};

exports.getImgComponent = getImgComponent;