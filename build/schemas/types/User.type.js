'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _ = require('./');

var _models = require('../../models');

exports.default = new _graphql.GraphQLObjectType({
  name: 'UserType',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLString,
        resolve: function resolve(data) {
          return data._id.toString();
        }
      },
      username: {
        type: _graphql.GraphQLString
      },
      password: {
        type: _graphql.GraphQLString
      },
      display_name: {
        type: _graphql.GraphQLString
      },
      avatar: {
        type: _graphql.GraphQLString
      },
      posts: {
        type: new _graphql.GraphQLList(_.PostType),
        resolve: function resolve(user) {
          return _models.PostModel.where({ creator: user._id });
        }
      },
      comments: {
        type: new _graphql.GraphQLList(_.CommentType),
        resolve: function resolve(user) {
          return null;
        }
      }
    };
  }
});