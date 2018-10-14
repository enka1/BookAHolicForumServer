export default function (req, res, next) {
	const {username, password} = req.body;
	if (!username || !password) {
		return res.send({
			authenticate: false,
			error: {
				msg: "Username or password does not provide"
			}
		});
	}
	req.user = {
		username,
		password
	};
	next();
}