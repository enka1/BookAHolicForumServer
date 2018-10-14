"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _graphql = require("graphql");

var _models = require("../../models");

var _types = require("../types");

var _inputs = require("../inputs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	type: new _graphql.GraphQLList(_types.UserType),
	args: {
		user: {
			type: _inputs.UserInputType
		}
	},
	resolve: function () {
		var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_, _ref) {
			var user = _ref.user;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							if (user) {
								if (user.username) user.username = new RegExp(user.username);
								if (user.display_name) user.display_name = new RegExp(user.display_name);
							}
							_context.next = 3;
							return _models.UserModel.find(user);

						case 3:
							return _context.abrupt("return", _context.sent);

						case 4:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));

		function resolve(_x, _x2) {
			return _ref2.apply(this, arguments);
		}

		return resolve;
	}()
};