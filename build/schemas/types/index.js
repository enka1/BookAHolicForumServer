'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentType = exports.PostType = exports.UserType = undefined;

var _User = require('./User.type');

var _User2 = _interopRequireDefault(_User);

var _Post = require('./Post.type');

var _Post2 = _interopRequireDefault(_Post);

var _Comment = require('./Comment.type');

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.UserType = _User2.default;
exports.PostType = _Post2.default;
exports.CommentType = _Comment2.default;