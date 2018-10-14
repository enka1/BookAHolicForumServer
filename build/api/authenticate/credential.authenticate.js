"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = function (app) {
	var _this = this;

	app.post("/login", _credential2.default, function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
			var _req$user, username, password, user, token;

			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_req$user = req.user, username = _req$user.username, password = _req$user.password;
							_context.next = 3;
							return _models.UserModel.findOne({ username: username });

						case 3:
							user = _context.sent;

							if (!user) {
								_context.next = 14;
								break;
							}

							_context.next = 7;
							return _bcrypt2.default.compare(password, user.password);

						case 7:
							if (!_context.sent) {
								_context.next = 13;
								break;
							}

							req.session.user = user;
							token = user.generate_token();
							return _context.abrupt("return", res.send({ authenticate: true, token: token }));

						case 13:
							return _context.abrupt("return", res.send({
								authenticate: false,
								error: {
									msg: "Password is not match"
								}
							}));

						case 14:
							return _context.abrupt("return", res.send({
								authenticate: false,
								error: {
									msg: "User is not define"
								}
							}));

						case 15:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, _this);
		}));

		return function (_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}());
};

var _bcrypt = require("bcrypt");

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _models = require("../../models");

var _credential = require("../middleware/credential.validate");

var _credential2 = _interopRequireDefault(_credential);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }