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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLObjectType({
  name: 'CommentType',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLString,
        resolve: function resolve(data) {
          return data._id.toString();
        }
      },
      content: {
        type: _graphql.GraphQLString
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
      created_at: {
        type: _graphqlIsoDate.GraphQLDateTime
      },
      post: {
        type: _.PostType
      }
    };
  }
});