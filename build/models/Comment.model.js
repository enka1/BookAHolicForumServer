"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentSchema = new _mongoose2.default.Schema({
	creator: {
		type: _mongoose2.default.Schema.Types.ObjectId,
		required: true,
		ref: "User"
	},
	post: {
		type: _mongoose2.default.Schema.Types.ObjectId,
		ref: "Post"
	},
	content: {
		type: String,
		required: true
	},
	comment: {
		type: _mongoose2.default.Schema.Types.ObjectId,
		ref: "Comment"
	},
	created_at: {
		type: Date
	},
	replies: [{
		type: _mongoose2.default.Schema.Types.ObjectId,
		ref: "Comment"
	}],
	like: [{
		type: _mongoose2.default.Schema.Types.ObjectId,
		ref: "User"
	}],
	love: [{
		type: _mongoose2.default.Schema.Types.ObjectId,
		ref: "User"
	}],
	dislike: [{
		type: _mongoose2.default.Schema.Types.ObjectId,
		ref: "User"
	}]
});
CommentSchema.pre("remove", function (next) {
	Comment.deleteMany({ comment: this._id });
	next();
});

var Comment = _mongoose2.default.model("Comment", CommentSchema);
exports.default = Comment;