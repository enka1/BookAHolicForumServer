import {PostType} from "../types";
import {PostInputType} from "../inputs";
import {PostModel, UserModel} from "../../models";

export default {
	type : PostType,
	args : {
		post: {
			type: PostInputType
		}
	},
	resolve : async(_, {
		post
	}, context) => {
		try {
			let {title, content, author_id} = post;
			if (context.user && context.user._id === author_id) {
				let user = await UserModel.findById(author_id);
				let post = new PostModel({title, content, created_at: new Date()});
				post.creator = user;
				user
					.posts
					.push(post);
				user.save();
				post.save();
				return post;
			}
			throw Error("Authentication Error");
		} catch (error) {
			throw Error(error.message);
		}
	}
};