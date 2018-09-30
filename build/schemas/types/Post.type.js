'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _graphql = require('graphql');

var _graphqlIsoDate = require('graphql-iso-date');

var _models = require('../../models');

var _ = require('./');

var _types = require('../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLObjectType({
  name: 'PostType',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLString,
        resolve: function resolve(data) {
          return data._id.toString();
        }
      },
      creator: {
        type: _.UserType,
        resolve: function () {
          var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _models.UserModel.findById(data.creator);

                  case 2:
                    return _context.abrupt('return', _context.sent);

                  case 3:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, undefined);
          }));

          function resolve(_x) {
            return _ref.apply(this, arguments);
          }

          return resolve;
        }()
      },
      title: {
        type: _graphql.GraphQLString
      },
      content: {
        type: _graphql.GraphQLString
      },
      created_at: {
        type: _graphqlIsoDate.GraphQLDateTime
      },
      comments: {
        type: new _graphql.GraphQLList(_types.CommentType)
      },
      numOfComments: {
        type: _graphql.GraphQLInt,
        resolve: function () {
          var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(data) {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _models.CommentModel.countDocuments({ post: data._id });

                  case 2:
                    return _context2.abrupt('return', _context2.sent);

                  case 3:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, undefined);
          }));

          function resolve(_x2) {
            return _ref2.apply(this, arguments);
          }

          return resolve;
        }()
      }
    };
  }
});