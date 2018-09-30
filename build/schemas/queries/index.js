'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _User = require('./User.query');

var _User2 = _interopRequireDefault(_User);

var _Comment = require('./Comment.query');

var _Comment2 = _interopRequireDefault(_Comment);

var _Post = require('./Post.query');

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLObjectType({
  name: 'RootQuery',
  fields: function fields() {
    return { users: _User2.default, posts: _Post2.default, comments: _Comment2.default };
  }
});