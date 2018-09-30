'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostSchema = new _mongoose2.default.Schema({
  creator: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    required: true
  },
  comments: [{
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  like: [{
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'User'
  }],
  love: [{
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'User'
  }],
  dislike: [{
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'User'
  }]
});
PostSchema.pre('remove', function (next) {
  _.CommentModel.deleteMany({ post: this._id });
  next();
});
exports.default = _mongoose2.default.model('Post', PostSchema);