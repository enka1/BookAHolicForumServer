"use strict";

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _ = require("../../");

var _strategies = require("./strategies");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_.app.use(_passport2.default.initialize());
_passport2.default.use(_strategies.GoogleStrategy);
_.app.get("/auth/google", _passport2.default.authenticate("google", { session: false }));
_.app.get("/auth/google/callback", _passport2.default.authenticate("google", { session: false }), function (req, res) {
	req.session.user = req.user;
	var io = req.app.get("io");
	//emit event login success with google
	io.to(req.app.get("socketID")).emit("Google Login Success", { token: req.user.token });
	res.send("success");
});