import {GraphQLInputObjectType, GraphQLString} from "graphql";

export default new GraphQLInputObjectType({
	name: "UserInputType",
	fields: {
		id: {
			type: GraphQLString
		},
		username: {
			type: GraphQLString
		},
		password: {
			type: GraphQLString
		},
		display_name: {
			type: GraphQLString
		}
	}
});