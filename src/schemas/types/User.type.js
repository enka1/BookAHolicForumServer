import {GraphQLString, GraphQLObjectType} from 'graphql'

export default new GraphQLObjectType({
  name: 'UserType',
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
    },
    avatar: {
      type: GraphQLString
    }
  }
})