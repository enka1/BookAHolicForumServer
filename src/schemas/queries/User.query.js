import {GraphQLList} from "graphql";

import {UserModel} from "../../models";
import {UserType} from "../types";
import {UserInputType} from "../inputs";

export default {
	type : new GraphQLList(UserType),
	args : {
		user: {
			type: UserInputType
		}
	},
	resolve : async(_, {user}) => {
		if (user) {
			if (user.username) 
				user.username = new RegExp(user.username);
			if (user.display_name) 
				user.display_name = new RegExp(user.display_name);
		}
		return await UserModel.find(user);
	}
};