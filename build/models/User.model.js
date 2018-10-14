"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require("bcrypt");

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose2.default.Schema({
	username: {
		type: String,
		unique: true,
		required: true,
		ref: "User"
	},
	password: {
		type: String
	},
	display_name: {
		type: String,
		required: true
	},
	avatar: {
		type: String
	},
	posts: [{
		type: _mongoose2.default.Schema.Types.ObjectId,
		ref: "Post"
	}],
	comments: [{
		type: _mongoose2.default.Schema.Types.ObjectId,
		ref: "Comment"
	}],
	token: {
		type: String
	}
});

UserSchema.methods.generate_token = function () {
	var token = _jsonwebtoken2.default.sign({
		id: this._id
	}, _config.jwtSecret);
	this.token = token;
	this.save();
	return token;
};

UserSchema.methods.remove_token = function () {
	this.token = null;
	this.save();
};

UserSchema.pre("save", function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(next) {
		var salt;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						if (!this.isModified("password")) {
							_context.next = 7;
							break;
						}

						_context.next = 3;
						return _bcrypt2.default.genSalt(10);

					case 3:
						salt = _context.sent;
						_context.next = 6;
						return _bcrypt2.default.hash(this.password, salt);

					case 6:
						this.password = _context.sent;

					case 7:
						next();

					case 8:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function (_x) {
		return _ref.apply(this, arguments);
	};
}());

exports.default = _mongoose2.default.model("User", UserSchema);