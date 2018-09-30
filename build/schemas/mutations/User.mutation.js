'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../../models');

var _inputs = require('../inputs');

var _types = require('../types');

exports.default = {
  type: _types.UserType,
  args: {
    user: {
      type: _inputs.UserInputType
    }
  },
  resolve: function resolve(_, args) {
    var user = new _models.UserModel(args.user);
    user.save();
    return user;
  }
};