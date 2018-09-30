'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COMMENT_ADDED = exports.pubSub = undefined;

var _graphql = require('graphql');

var _graphqlSubscriptions = require('graphql-subscriptions');

var _queries = require('./queries');

var _queries2 = _interopRequireDefault(_queries);

var _mutations = require('./mutations');

var _mutations2 = _interopRequireDefault(_mutations);

var _subcriptions = require('./subcriptions');

var _subcriptions2 = _interopRequireDefault(_subcriptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pubSub = exports.pubSub = new _graphqlSubscriptions.PubSub();
var COMMENT_ADDED = exports.COMMENT_ADDED = 'COMMENT_ADDED';

exports.default = new _graphql.GraphQLSchema({ query: _queries2.default, mutation: _mutations2.default, subscription: _subcriptions2.default });