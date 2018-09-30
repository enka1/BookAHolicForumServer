'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _types = require('../types');

var _inputs = require('../inputs');

var _models = require('../../models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _types.PostType,
  args: {
    post: {
      type: _inputs.PostInputType
    }
  },
  resolve: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_, _ref, context) {
      var post = _ref.post;

      var title, content, author_id, user, _post;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              title = post.title, content = post.content, author_id = post.author_id;

              if (!(context.user && context.user._id === author_id)) {
                _context.next = 12;
                break;
              }

              _context.next = 5;
              return _models.UserModel.findById(author_id);

            case 5:
              user = _context.sent;
              _post = new _models.PostModel({ title: title, content: content, created_at: new Date() });

              _post.creator = user;
              user.posts.push(_post);
              user.save();
              _post.save();
              return _context.abrupt('return', _post);

            case 12:
              throw Error("Authentication Error");

            case 15:
              _context.prev = 15;
              _context.t0 = _context['catch'](0);
              throw Error(_context.t0.message);

            case 18:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 15]]);
    }));

    function resolve(_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    }

    return resolve;
  }()
};