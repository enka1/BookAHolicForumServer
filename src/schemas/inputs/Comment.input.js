import {GraphQLInputObjectType, GraphQLString} from 'graphql'

export default new GraphQLInputObjectType({
  name: 'CommentInputType',
  fields: {
    _id: {
      type: GraphQLString
    },
    user_id: {
      type: GraphQLString
    },
    post_id: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    }
  }
})