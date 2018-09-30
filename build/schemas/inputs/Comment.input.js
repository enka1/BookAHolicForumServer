'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

exports.default = new _graphql.GraphQLInputObjectType({
  name: 'CommentInputType',
  fields: {
    _id: {
      type: _graphql.GraphQLString
    },
    user_id: {
      type: _graphql.GraphQLString
    },
    post_id: {
      type: _graphql.GraphQLString
    },
    content: {
      type: _graphql.GraphQLString
    }
  }
});