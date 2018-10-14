"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require("graphql");

exports.default = new _graphql.GraphQLInputObjectType({
	name: "UserInputType",
	fields: {
		id: {
			type: _graphql.GraphQLString
		},
		username: {
			type: _graphql.GraphQLString
		},
		password: {
			type: _graphql.GraphQLString
		},
		display_name: {
			type: _graphql.GraphQLString
		}
	}
});