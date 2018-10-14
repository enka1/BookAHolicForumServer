"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.connectMongoDB = exports.CommentModel = exports.PostModel = exports.UserModel = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _User = require("./User.model");

var _User2 = _interopRequireDefault(_User);

var _Post = require("./Post.model");

var _Post2 = _interopRequireDefault(_Post);

var _Comment = require("./Comment.model");

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connectMongoDB = function connectMongoDB() {
	_mongoose2.default.connect(process.env.MLAB_URL ? process.env.MLAB_URL : "mongodb://localhost:27017/Forum", { useNewUrlParser: true });
};
exports.UserModel = _User2.default;
exports.PostModel = _Post2.default;
exports.CommentModel = _Comment2.default;
exports.connectMongoDB = connectMongoDB;