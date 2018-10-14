import bcrypt from "bcrypt";

import { UserModel } from "../../models";
import crendentialValidate from "../middleware/credential.validate";

export default function(app){
	app.post("/login", crendentialValidate, async (req, res) => {
		let { username, password } = req.user;
		let user = await UserModel.findOne({ username });
		if (user) {
			if (await bcrypt.compare(password, user.password)) {
				req.session.user = user;
				let token = user.generate_token();
				return res.send({ authenticate: true, token });
			} else {
				return res.send({
					authenticate: false,
					error: {
						msg: "Password is not match"
					}
				});
			}
		}
		return res.send({
			authenticate: false,
			error: {
				msg: "User is not define"
			}
		});
	});
}
