"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _ = require("../../");

var _models = require("../../models");

var _config = require("../../config");

var _token = require("../middleware/token.validate");

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_.app.get("/token", _token2.default, function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
		var token, decoded, user;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						token = req.token;
						_context.prev = 1;
						decoded = _jsonwebtoken2.default.verify(token, _config.jwtSecret);
						_context.next = 5;
						return _models.UserModel.findById(decoded.id);

					case 5:
						user = _context.sent;

						if (user) {
							_context.next = 8;
							break;
						}

						return _context.abrupt("return", res.send({
							authenticate: false,
							error: {
								msg: "User has been removed"
							},
							user: null
						}));

					case 8:
						req.session.user = user;
						res.send({ authenticate: true, user: user });
						_context.next = 15;
						break;

					case 12:
						_context.prev = 12;
						_context.t0 = _context["catch"](1);

						res.send({
							authenticate: false,
							error: {
								msg: "Token is not valid"
							},
							user: null
						});

					case 15:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, undefined, [[1, 12]]);
	}));

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
}());