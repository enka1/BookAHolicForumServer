import {GraphQLObjectType} from "graphql";

import users from "./User.query";
import comments from "./Comment.query";
import posts from "./Post.query";

export default new GraphQLObjectType({
	name: "RootQuery",
	fields: () => ({users, posts, comments})
});