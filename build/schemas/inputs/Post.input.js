'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

exports.default = new _graphql.GraphQLInputObjectType({
  name: 'PostInputType',
  fields: {
    _id: {
      type: _graphql.GraphQLString
    },
    author_id: {
      type: _graphql.GraphQLString
    },
    title: {
      type: _graphql.GraphQLString
    },
    content: {
      type: _graphql.GraphQLString
    }
  }
});