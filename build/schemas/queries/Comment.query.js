"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require("graphql");

var _models = require("../../models");

var _types = require("../types");

var _inputs = require("../inputs");

exports.default = {
	type: new _graphql.GraphQLList(_types.CommentType),
	args: {
		comment: {
			type: _inputs.CommentInputType
		}
	},
	resolve: function resolve(_, _ref) {
		var comment = _ref.comment;

		if (comment) {
			comment.post = comment.post_id;
			delete comment.post_id;
		}
		return _models.CommentModel.find(comment);
	}
};