'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _types = require('../types');

var _2 = require('../');

exports.default = new _graphql.GraphQLObjectType({
  name: "RootSubcription",
  fields: {
    commentSubcription: {
      type: _types.CommentType,
      resolve: function resolve(_, args) {
        return _.commentSubcription;
      },
      subscribe: function subscribe() {
        return _2.pubSub.asyncIterator([_2.COMMENT_ADDED]);
      }
    }
  }
});