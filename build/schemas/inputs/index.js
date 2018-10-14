"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentInputType = exports.PostInputType = exports.UserInputType = undefined;

var _User = require("./User.input");

var _User2 = _interopRequireDefault(_User);

var _Post = require("./Post.input");

var _Post2 = _interopRequireDefault(_Post);

var _Comment = require("./Comment.input");

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.UserInputType = _User2.default;
exports.PostInputType = _Post2.default;
exports.CommentInputType = _Comment2.default;