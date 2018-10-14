import {GraphQLObjectType} from "graphql";

import createUser from "./User.mutation";
import createPost from "./create_post.mutation";
import createComment from "./create_comment.mutation";

export default new GraphQLObjectType({
	name: "RootMutation",
	fields: () => ({createUser, createPost, createComment})
});