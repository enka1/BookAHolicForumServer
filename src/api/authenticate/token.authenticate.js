import jwt from "jsonwebtoken";

import {app} from "../../";
import {UserModel} from "../../models";
import {jwtSecret} from "../../config";
import tokenValidate from "../middleware/token.validate";

app.get("/token", tokenValidate, async(req, res) => {
	let token = req.token;
	try {
		let decoded = jwt.verify(token, jwtSecret);
		let user = await UserModel.findById(decoded.id);
		if (!user) {
			return res.send({
				authenticate: false,
				error: {
					msg: "User has been removed"
				},
				user: null
			});
		}
		req.session.user = user;
		res.send({authenticate: true, user});
	} catch (error) {
		res.send({
			authenticate: false,
			error: {
				msg: "Token is not valid"
			},
			user: null
		});
	}
});