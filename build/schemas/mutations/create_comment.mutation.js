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

var _2 = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _types.CommentType,
  args: {
    comment: {
      type: _inputs.CommentInputType
    }
  },
  resolve: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_, _ref, context) {
      var comment = _ref.comment;
      var post_id, user_id, content, user, post, newComment;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              post_id = comment.post_id, user_id = comment.user_id, content = comment.content;

              if (!(context.user && context.user._id === user_id)) {
                _context.next = 19;
                break;
              }

              _context.next = 5;
              return _models.UserModel.findById(user_id);

            case 5:
              user = _context.sent;
              _context.next = 8;
              return _models.PostModel.findById(post_id);

            case 8:
              post = _context.sent;
              newComment = new _models.CommentModel({ content: content, created_at: new Date() });

              newComment.creator = user;
              newComment.post = post;
              user.comments.push(newComment);
              post.comments.push(newComment);
              user.save();
              post.save();
              newComment.save();
              _2.pubSub.publish(_2.COMMENT_ADDED, { commentSubcription: newComment });
              return _context.abrupt('return', newComment);

            case 19:
              throw Error('Authencation Error');

            case 22:
              _context.prev = 22;
              _context.t0 = _context['catch'](0);
              throw Error(_context.t0.message);

            case 25:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 22]]);
    }));

    function resolve(_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    }

    return resolve;
  }()
};