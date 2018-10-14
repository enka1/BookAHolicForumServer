import {UserModel} from "../../models";
import {UserInputType} from "../inputs";
import {UserType} from "../types";

export default {
	type : UserType,
	args : {
		user: {
			type: UserInputType
		}
	},
	resolve : (_, args) => {
		let user = new UserModel(args.user);
		user.save();
		return user;
	}
};