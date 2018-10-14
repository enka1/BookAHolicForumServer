"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (req, res, next) {
	var _req$body = req.body,
	    username = _req$body.username,
	    password = _req$body.password;

	if (!username || !password) {
		return res.send({
			authenticate: false,
			error: {
				msg: "Username or password does not provide"
			}
		});
	}
	req.user = {
		username: username,
		password: password
	};
	next();
};