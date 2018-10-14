"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require("graphql");

var _User = require("./User.mutation");

var _User2 = _interopRequireDefault(_User);

var _create_post = require("./create_post.mutation");

var _create_post2 = _interopRequireDefault(_create_post);

var _create_comment = require("./create_comment.mutation");

var _create_comment2 = _interopRequireDefault(_create_comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLObjectType({
	name: "RootMutation",
	fields: function fields() {
		return { createUser: _User2.default, createPost: _create_post2.default, createComment: _create_comment2.default };
	}
});