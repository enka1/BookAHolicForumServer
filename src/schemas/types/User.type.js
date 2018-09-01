import {GraphQLString, GraphQLObjectType} from 'graphql'

export default new GraphQLObjectType({
  name: 'UserType',
  fields: {
    username: {
      type: GraphQLString,
      resolve(user) {
        return user.username
      }
    },
    password: {
      type: GraphQLString,
      resolve(user) {
        user.password
      }
    }
  }
})