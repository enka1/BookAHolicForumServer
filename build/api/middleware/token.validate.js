"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (req, res, next) {
	var token = req.header("auth");
	if (!token) {
		return res.send({
			authenticate: false,
			error: {
				msg: "Token does not provide"
			},
			user: null
		});
	}
	req.token = token;
	next();
};