'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _models = require('../../models');

var _types = require('../types');

var _inputs = require('../inputs');

exports.default = {
  type: new _graphql.GraphQLList(_types.PostType),
  args: {
    post: {
      type: _inputs.PostInputType
    }
  },
  resolve: function resolve(_, args) {
    return _models.PostModel.find(args.post);
  }
};